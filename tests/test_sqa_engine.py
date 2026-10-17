"""
Suite de Pruebas Unitarias Automatizadas — QualityHub
Autor: Jesús Adrián Arias Delgado (Integrante / QA)
Co-Revisores: Paul Rivera Salas, Elian Loera Garay, Diego Alvarado Díaz
"""

import unittest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src")))

from sqa_engine import (
    QualityMetrics,
    SQATechniqueLog,
    MonitoredProject,
    QualityHubEngine,
)


class TestQualityHubEngine(unittest.TestCase):
    """Pruebas unitarias para verificar los 4 pilares funcionales de QualityHub."""

    def setUp(self) -> None:
        self.engine = QualityHubEngine()
        self.healthy_metrics = QualityMetrics(
            unit_test_coverage=90.0,
            ci_pass_rate=95.0,
            critical_bugs=0,
            sqa_compliance=100.0,
            tech_debt_hours=4.0,
        )
        self.sample_project = MonitoredProject(
            id="PRJ-001",
            name="API Core Pagos",
            period="2026-2 (Ago-Dic)",
            lead="Elian Loera Garay",
            stack="Python / FastAPI",
            metrics=self.healthy_metrics,
        )

    # 1. Pruebas de Registro de Proyectos por Periodo
    def test_register_valid_project(self) -> None:
        registered = self.engine.register_project(self.sample_project)
        self.assertEqual(registered.id, "PRJ-001")
        self.assertEqual(len(self.engine.get_projects_by_period("2026-2")), 1)

    def test_duplicate_project_id_raises_error(self) -> None:
        self.engine.register_project(self.sample_project)
        with self.assertRaises(ValueError):
            self.engine.register_project(self.sample_project)

    def test_invalid_period_format_raises_error(self) -> None:
        bad_project = MonitoredProject(
            id="PRJ-002",
            name="Portal Web",
            period="Otoño 2026",  # Formato inválido, debe ser YYYY-1 o YYYY-2
            lead="Diego Alvarado Díaz",
            stack="React / TS",
            metrics=self.healthy_metrics,
        )
        with self.assertRaises(ValueError):
            self.engine.register_project(bad_project)

    def test_filter_projects_by_period(self) -> None:
        p2 = MonitoredProject(
            id="PRJ-002",
            name="Sistema Inventario",
            period="2026-1 (Ene-Jun)",
            lead="Paul Rivera Salas",
            stack="Node.js",
            metrics=self.healthy_metrics,
        )
        self.engine.register_project(self.sample_project)
        self.engine.register_project(p2)

        self.assertEqual(len(self.engine.get_projects_by_period("2026-2")), 1)
        self.assertEqual(len(self.engine.get_projects_by_period("2026-1")), 1)
        self.assertEqual(len(self.engine.get_projects_by_period("TODOS")), 2)

    # 2. Pruebas de Seguimiento y Validación de Métricas de Calidad
    def test_invalid_coverage_percentage_raises_error(self) -> None:
        bad_metrics = QualityMetrics(
            unit_test_coverage=105.0,
            ci_pass_rate=90.0,
            critical_bugs=0,
            sqa_compliance=80.0,
            tech_debt_hours=5.0,
        )
        with self.assertRaises(ValueError):
            bad_metrics.validate()

    def test_negative_critical_bugs_raises_error(self) -> None:
        bad_metrics = QualityMetrics(
            unit_test_coverage=85.0,
            ci_pass_rate=90.0,
            critical_bugs=-1,
            sqa_compliance=80.0,
            tech_debt_hours=5.0,
        )
        with self.assertRaises(ValueError):
            bad_metrics.validate()

    def test_health_score_calculation_perfect_project(self) -> None:
        perfect = QualityMetrics(
            unit_test_coverage=100.0,
            ci_pass_rate=100.0,
            critical_bugs=0,
            sqa_compliance=100.0,
            tech_debt_hours=2.0,
        )
        score = self.engine.calculate_health_score(perfect)
        self.assertEqual(score, 100.0)

    def test_health_score_penalizes_bugs_and_tech_debt(self) -> None:
        risky = QualityMetrics(
            unit_test_coverage=70.0,   # 70 * 0.30 = 21.0
            ci_pass_rate=80.0,         # 80 * 0.20 = 16.0
            critical_bugs=1,           # 60 * 0.25 = 15.0
            sqa_compliance=80.0,       # 80 * 0.15 = 12.0
            tech_debt_hours=24.0,      # 50 * 0.10 = 5.0
        )
        score = self.engine.calculate_health_score(risky)
        self.assertEqual(score, 69.0)

    # 3. Pruebas de Gestión de Técnicas y Métodos SQA
    def test_log_sqa_techniques_updates_compliance(self) -> None:
        self.engine.register_project(self.sample_project)
        t1 = SQATechniqueLog(
            id="TECH-01",
            project_id="PRJ-001",
            technique_type="Revisión Personal",
            responsible="Elian Loera Garay",
            date="2026-10-12",
            status="Completada",
            defects_found=2,
            notes="Checklist de módulo de registro verificado.",
        )
        t2 = SQATechniqueLog(
            id="TECH-02",
            project_id="PRJ-001",
            technique_type="Caminata (Walkthrough)",
            responsible="Jesús Adrián Arias Delgado",
            date="2026-10-18",
            status="Planificada",
            defects_found=0,
        )
        self.engine.log_sqa_technique(t1)
        self.engine.log_sqa_technique(t2)

        # 1 completada de 2 registradas = 50.0%
        self.assertEqual(self.sample_project.metrics.sqa_compliance, 50.0)

    def test_invalid_sqa_technique_type_raises_error(self) -> None:
        self.engine.register_project(self.sample_project)
        invalid_tech = SQATechniqueLog(
            id="TECH-99",
            project_id="PRJ-001",
            technique_type="Prueba Informal No Documentada",
            responsible="Ricardo Parga",
            date="2026-10-15",
            status="Completada",
        )
        with self.assertRaises(ValueError):
            self.engine.log_sqa_technique(invalid_tech)

    # 4. Pruebas de Generación de Reportes sobre Estado de Salud
    def test_generate_health_report_healthy_status(self) -> None:
        self.engine.register_project(self.sample_project)
        report = self.engine.generate_health_report(self.sample_project)
        self.assertEqual(report["health_status"], "Saludable")
        self.assertTrue(report["quality_gate_passed"])
        self.assertGreaterEqual(report["health_score"], 85.0)

    def test_generate_health_report_critical_status_and_recommendations(self) -> None:
        critical_metrics = QualityMetrics(
            unit_test_coverage=45.0,
            ci_pass_rate=60.0,
            critical_bugs=3,
            sqa_compliance=50.0,
            tech_debt_hours=30.0,
        )
        critical_proj = MonitoredProject(
            id="PRJ-003",
            name="Módulo Legacy Facturación",
            period="2026-2 (Ago-Dic)",
            lead="Diego Alvarado Díaz",
            stack="Java",
            metrics=critical_metrics,
        )
        report = self.engine.generate_health_report(critical_proj)
        self.assertEqual(report["health_status"], "Crítico")
        self.assertFalse(report["quality_gate_passed"])
        self.assertEqual(len(report["recommendations"]), 5)


if __name__ == "__main__":
    unittest.main()
