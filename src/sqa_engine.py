"""
QualityHub — Motor de Evaluación de Aseguramiento de la Calidad (SQA Engine)
Autores:
- Paul Rivera Salas (Líder Técnico)
- Elian Loera Garay (Desarrollador - Módulos Proyectos y Métricas)
- Diego Alvarado Díaz (Desarrollador - Módulos Técnicas SQA y Reportes)
- Jesús Adrián Arias Delgado (QA Lead - Especificación de Umbrales y Validaciones)
"""

from dataclasses import dataclass, field
from typing import List, Dict, Any, Optional
import re


VALID_TECHNIQUES = [
    "Revisión Personal",
    "Caminata (Walkthrough)",
    "Pruebas Unitarias",
    "Integración Continua"
]

VALID_STATUSES = ["Planificada", "En Progreso", "Completada"]


@dataclass
class QualityMetrics:
    """Métricas clave de calidad monitoreadas por proyecto."""
    unit_test_coverage: float  # Porcentaje (0.0 a 100.0)
    ci_pass_rate: float        # Porcentaje (0.0 a 100.0)
    critical_bugs: int         # Conteo entero >= 0
    sqa_compliance: float      # Porcentaje de técnicas completadas (0.0 a 100.0)
    tech_debt_hours: float     # Horas estimadas >= 0.0

    def validate(self) -> None:
        if not (0.0 <= self.unit_test_coverage <= 100.0):
            raise ValueError("La cobertura de pruebas unitarias debe estar entre 0 y 100.")
        if not (0.0 <= self.ci_pass_rate <= 100.0):
            raise ValueError("La tasa de éxito de CI debe estar entre 0 y 100.")
        if self.critical_bugs < 0:
            raise ValueError("El número de defectos críticos no puede ser negativo.")
        if not (0.0 <= self.sqa_compliance <= 100.0):
            raise ValueError("El cumplimiento de SQA debe estar entre 0 y 100.")
        if self.tech_debt_hours < 0.0:
            raise ValueError("La deuda técnica no puede ser negativa.")


@dataclass
class SQATechniqueLog:
    """Registro de aplicación de una técnica o método de aseguramiento de calidad."""
    id: str
    project_id: str
    technique_type: str
    responsible: str
    date: str
    status: str
    defects_found: int = 0
    notes: str = ""

    def validate(self) -> None:
        if not self.project_id or not self.project_id.strip():
            raise ValueError("El ID del proyecto es obligatorio.")
        if self.technique_type not in VALID_TECHNIQUES:
            raise ValueError(f"Técnica inválida: {self.technique_type}. Permitidas: {VALID_TECHNIQUES}")
        if self.status not in VALID_STATUSES:
            raise ValueError(f"Estado inválido: {self.status}. Permitidos: {VALID_STATUSES}")
        if self.defects_found < 0:
            raise ValueError("Los defectos detectados no pueden ser negativos.")


@dataclass
class MonitoredProject:
    """Representa un proyecto de software registrado por periodo en QualityHub."""
    id: str
    name: str
    period: str
    lead: str
    stack: str
    metrics: QualityMetrics
    techniques: List[SQATechniqueLog] = field(default_factory=list)

    def validate(self) -> None:
        if not self.name or len(self.name.strip()) < 3:
            raise ValueError("El nombre del proyecto debe tener al menos 3 caracteres.")
        if not re.match(r"^\d{4}-[12](\s.*)?$", self.period.strip()):
            raise ValueError("El formato del periodo debe ser YYYY-1 o YYYY-2 (ej. '2026-2').")
        if not self.lead or not self.lead.strip():
            raise ValueError("El responsable del proyecto es obligatorio.")
        self.metrics.validate()


class QualityHubEngine:
    """
    Motor central de QualityHub para:
    1. Registro de proyectos por periodo.
    2. Evaluación de métricas de calidad.
    3. Gestión de técnicas de SQA.
    4. Generación de reportes de estado de salud del software.
    """

    def __init__(self) -> None:
        self._projects: Dict[str, MonitoredProject] = {}

    def register_project(self, project: MonitoredProject) -> MonitoredProject:
        """Registra un proyecto validando sus datos y periodo."""
        project.validate()
        if project.id in self._projects:
            raise ValueError(f"Ya existe un proyecto registrado con el ID '{project.id}'.")
        self._projects[project.id] = project
        return project

    def get_projects_by_period(self, period_prefix: Optional[str] = None) -> List[MonitoredProject]:
        """Obtiene los proyectos filtrados por periodo (o todos si no se especifica)."""
        if not period_prefix or period_prefix == "TODOS":
            return list(self._projects.values())
        return [
            p for p in self._projects.values()
            if p.period.startswith(period_prefix)
        ]

    def log_sqa_technique(self, technique: SQATechniqueLog) -> SQATechniqueLog:
        """Registra la aplicación de una técnica SQA en un proyecto y recalcula su cumplimiento."""
        technique.validate()
        if technique.project_id not in self._projects:
            raise KeyError(f"Proyecto '{technique.project_id}' no encontrado.")
        project = self._projects[technique.project_id]
        project.techniques.append(technique)
        project.metrics.sqa_compliance = self.calculate_sqa_compliance(project.techniques)
        return technique

    @staticmethod
    def calculate_sqa_compliance(techniques: List[SQATechniqueLog]) -> float:
        """Calcula el porcentaje de técnicas SQA completadas sobre el total registrado."""
        if not techniques:
            return 0.0
        completed = sum(1 for t in techniques if t.status == "Completada")
        return round((completed / len(techniques)) * 100.0, 2)

    @staticmethod
    def calculate_health_score(metrics: QualityMetrics) -> float:
        """
        Calcula el Índice de Salud del Software (0.0 a 100.0) ponderado según la matriz SQA:
        - Cobertura de pruebas unitarias: 30%
        - Tasa de éxito en CI: 20%
        - Defectos críticos abiertos: 25% (0 bugs = 100 pts, 1 bug = 60 pts, 2 bugs = 30 pts, >=3 bugs = 0 pts)
        - Cumplimiento de técnicas SQA: 15%
        - Deuda técnica: 10% (<=8h = 100 pts, penalización lineal hasta 40h = 0 pts)
        """
        metrics.validate()

        coverage_score = metrics.unit_test_coverage * 0.30
        ci_score = metrics.ci_pass_rate * 0.20

        if metrics.critical_bugs == 0:
            bugs_raw = 100.0
        elif metrics.critical_bugs == 1:
            bugs_raw = 60.0
        elif metrics.critical_bugs == 2:
            bugs_raw = 30.0
        else:
            bugs_raw = 0.0
        bugs_score = bugs_raw * 0.25

        sqa_score = metrics.sqa_compliance * 0.15

        if metrics.tech_debt_hours <= 8.0:
            debt_raw = 100.0
        elif metrics.tech_debt_hours >= 40.0:
            debt_raw = 0.0
        else:
            debt_raw = max(0.0, 100.0 - ((metrics.tech_debt_hours - 8.0) / 32.0) * 100.0)
        debt_score = debt_raw * 0.10

        total = coverage_score + ci_score + bugs_score + sqa_score + debt_score
        return round(min(100.0, max(0.0, total)), 2)

    @classmethod
    def classify_health_status(cls, score: float, critical_bugs: int = 0) -> str:
        """
        Determina el estado semafórico del proyecto:
        - 'Saludable': score >= 85 y 0 bugs críticos
        - 'En Riesgo': score entre 65 y 84.99 (o >=85 pero con 1 bug crítico)
        - 'Crítico': score < 65 o >= 3 bugs críticos
        """
        if critical_bugs >= 3 or score < 65.0:
            return "Crítico"
        if score >= 85.0 and critical_bugs == 0:
            return "Saludable"
        return "En Riesgo"

    @classmethod
    def generate_health_report(cls, project: MonitoredProject) -> Dict[str, Any]:
        """Genera el reporte ejecutivo completo sobre el estado de salud del software monitoreado."""
        project.validate()
        score = cls.calculate_health_score(project.metrics)
        status = cls.classify_health_status(score, project.metrics.critical_bugs)

        recommendations: List[str] = []
        m = project.metrics

        if m.unit_test_coverage < 80.0:
            recommendations.append(
                f"Incrementar la cobertura de pruebas unitarias (actual: {m.unit_test_coverage}%, meta: >= 80%)."
            )
        if m.ci_pass_rate < 90.0:
            recommendations.append(
                f"Estabilizar el pipeline de Integración Continua (actual: {m.ci_pass_rate}%, meta: >= 90%)."
            )
        if m.critical_bugs > 0:
            recommendations.append(
                f"Priorizar la resolución de {m.critical_bugs} defecto(s) crítico(s) abierto(s) mediante caminata focalizada."
            )
        if m.sqa_compliance < 85.0:
            recommendations.append(
                f"Completar las actividades pendientes de SQA (cumplimiento actual: {m.sqa_compliance}%, meta: >= 85%)."
            )
        if m.tech_debt_hours > 8.0:
            recommendations.append(
                f"Asignar capacidad técnica para reducir la deuda técnica ({m.tech_debt_hours} hrs acumuladas, umbral: <= 8 hrs)."
            )

        if not recommendations:
            recommendations.append(
                "El proyecto cumple satisfactoriamente todos los umbrales del Quality Gate. Mantener monitoreo continuo."
            )

        total_defects_found = sum(t.defects_found for t in project.techniques)

        return {
            "project_id": project.id,
            "project_name": project.name,
            "period": project.period,
            "lead": project.lead,
            "stack": project.stack,
            "health_score": score,
            "health_status": status,
            "quality_gate_passed": status == "Saludable",
            "metrics_summary": {
                "unit_test_coverage": m.unit_test_coverage,
                "ci_pass_rate": m.ci_pass_rate,
                "critical_bugs": m.critical_bugs,
                "sqa_compliance": m.sqa_compliance,
                "tech_debt_hours": m.tech_debt_hours,
            },
            "sqa_summary": {
                "total_techniques_logged": len(project.techniques),
                "completed_techniques": sum(1 for t in project.techniques if t.status == "Completada"),
                "early_defects_detected": total_defects_found,
            },
            "recommendations": recommendations,
        }
