# Bitácora Oficial de Aseguramiento de la Calidad (SQA Log)

- **Proyecto:** QualityHub — Centro de Control y Monitoreo de SQA
- **Responsable de Proyecto:** Ricardo Parga
- **Responsable de QA:** Jesús Adrián Arias Delgado
- **Periodo de Ejecución:** Octubre – Noviembre 2026

---

## 1. Registro Cronológico de Actividades y Decisiones de SQA

| Fecha | Fase / Hito | Técnica SQA Aplicada | Responsable(s) | Descripción de la Actividad y Decisiones de Calidad | Defectos Prevenidos | Estado |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **05/10/2026** | Inicio | Estandarización de Repositorio | Paul Rivera Salas | Inicialización del repositorio Git, estructura de directorios (`/src`, `/tests`, `/docs/sqa`) y reglas de control de versiones. | 0 | Completada |
| **06/10/2026** | **Check-in 1** | Definición de Estrategia SQA y Quality Gate | Ricardo Parga, Jesús Adrián Arias | Definición del catálogo de 5 métricas clave, ponderación del *Health Score* y plantillas de revisión personal y caminatas. | 0 | Completada |
| **13/10/2026** | Desarrollo Prototipo | Revisión Personal (#01) | Elian Loera Garay | Auditoría con checklist del motor de registro de proyectos por periodo (`sqa_engine.py`). Se corrigió validación de porcentajes antes del commit. | 2 | Completada |
| **16/10/2026** | Desarrollo Prototipo | Caminata (*Walkthrough* #01) | Todo el equipo (Mod: Jesús Adrián Arias) | Revisión grupal de `sqa_engine.py`. Se decidió que un proyecto con `>= 1` defecto crítico nunca puede clasificarse como "Saludable" aunque su promedio sea alto. | 3 | Completada |
| **17/10/2026** | Verificación | Pruebas Unitarias | Jesús Adrián Arias Delgado | Creación de `tests/test_sqa_engine.py` con 12 pruebas unitarias automatizadas verificando registro por periodo, métricas, técnicas SQA y reportes. | 1 | Completada |
| **18/10/2026** | Automatización | Integración Continua (CI) | Paul Rivera Salas | Configuración de GitHub Actions (`.github/workflows/ci.yml`) para ejecutar la suite de pruebas y validar artefactos SQA en cada push. | 1 | Completada |
| **20/10/2026** | **Check-in 2** | Auditoría de Prototipo Funcional | Ricardo Parga, Paul Rivera Salas | Demostración funcional del prototipo y verificación del historial del repositorio con evidencias tempranas de control de calidad. | 0 | Completada |
| **25/10/2026** | Desarrollo Beta | Revisión Personal (#02) | Diego Alvarado Díaz | Verificación con checklist de los módulos de Gestión de Técnicas SQA y Generador de Reportes Ejecutivos en `app.js`. | 2 | Completada |
| **28/10/2026** | Desarrollo Beta | Caminata (*Walkthrough* #02) | Todo el equipo (Mod: Jesús Adrián Arias) | Revisión del Dashboard completo (`index.html`, `app.js`, `styles.css`). Se corrigió el recálculo automático de cumplimiento SQA al completar técnicas y el diseño de impresión PDF. | 3 | Completada |
| **03/11/2026** | **Check-in 3** | Evaluación de Versión Beta | Todo el equipo | Ejecución integral de pruebas unitarias (`12/12 OK`), validación de los 4 requisitos del alcance al 100% y consolidación de reportes ejecutivos. | 0 | Completada |

---

## 2. Resumen de Indicadores de Calidad del Propio Proyecto (QualityHub)

Al aplicar nuestras propias herramientas de medición sobre el desarrollo de **QualityHub**, obtenemos los siguientes resultados al corte de la **Versión Beta (3 de noviembre)**:

- **Pruebas Unitarias Automatizadas:** `12 / 12 aprobadas (100% Tasa de Éxito)`
- **Cobertura de Funciones Críticas del Motor SQA:** `94%` (Meta: `>= 80%`)
- **Estabilidad del Pipeline de Integración Continua:** `100%` (Meta: `>= 90%`)
- **Defectos Detectados y Corregidos Tempranamente (Revisiones + Caminatas):** `12 defectos eliminados antes de producción`
- **Defectos Críticos Abiertos en Rama Principal (`main`):** `0`
- **Índice de Salud del Software (QualityHub Health Score):** **`96.4% — SALUDABLE`**
