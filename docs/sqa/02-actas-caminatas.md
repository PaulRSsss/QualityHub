# Evidencia de SQA: Actas de Caminatas (*Walkthroughs*)

Este documento concentra las minutas formales de las sesiones de **Caminata (*Walkthrough*)** ejecutadas por el equipo durante la construcción de **QualityHub** para inspeccionar colaborativamente el diseño, la lógica de cálculo de métricas y la interfaz de reportes.

---

## Acta de Caminata #01 — Revisión del Motor de Métricas y Registro de Proyectos

- **ID de Sesión:** `WK-QH-001`
- **Fecha:** Viernes, 16 de octubre de 2026
- **Duración:** 45 minutos
- **Artefactos Revisados:** `src/sqa_engine.py` (clases `MonitoredProject`, `QualityMetrics`, `QualityHubEngine`)
- **Autor Expositor:** Elian Loera Garay (Desarrollador)
- **Moderador QA:** Jesús Adrián Arias Delgado (Integrante / QA)
- **Participantes Revisores:**
  - Ricardo Parga (Responsable de Proyecto)
  - Paul Rivera Salas (Técnico)
  - Diego Alvarado Díaz (Desarrollador)

### Desarrollo de la Sesión
El autor **Elian Loera Garay** guió al equipo línea por línea a través de la estructura de datos para el registro de proyectos por periodo y la fórmula de ponderación del *Health Score*.

### Hallazgos y Decisiones Tomadas

| ID Hallazgo | Ubicación | Descripción del Defecto / Mejora | Severidad | Responsable | Estado |
| :--- | :--- | :--- | :---: | :--- | :---: |
| **H-01** | `MonitoredProject.validate()` | No se validaba el formato del periodo académico, permitiendo cadenas arbitrarias que rompían el filtro por semestre. | Media | Elian Loera Garay | Corregido (`regex ^\d{4}-[12]`) |
| **H-02** | `calculate_health_score()` | Cuando la deuda técnica superaba las 40 horas, el puntaje del rubro podía volverse negativo. | Alta | Paul Rivera Salas | Corregido (`max(0.0, ...)`) |
| **H-03** | `classify_health_status()` | Un proyecto con `score >= 85%` pero con `1 bug crítico` aparecía como "Saludable". Se acordó que cualquier bug crítico impide el estado "Saludable". | Alta | Jesús Adrián Arias | Corregido y cubierto con Test Unitario |

---

## Acta de Caminata #02 — Revisión de Gestión de Técnicas SQA y Generador de Reportes

- **ID de Sesión:** `WK-QH-002`
- **Fecha:** Miércoles, 28 de octubre de 2026
- **Duración:** 50 minutos
- **Artefactos Revisados:** `src/index.html`, `src/app.js`, `src/styles.css`
- **Autor Expositor:** Diego Alvarado Díaz (Desarrollador) y Paul Rivera Salas (Técnico)
- **Moderador QA:** Jesús Adrián Arias Delgado (Integrante / QA)
- **Participantes Revisores:**
  - Ricardo Parga (Responsable de Proyecto)
  - Elian Loera Garay (Desarrollador)

### Desarrollo de la Sesión
**Diego Alvarado Díaz** y **Paul Rivera Salas** realizaron un recorrido interactivo sobre el flujo de captura de técnicas de SQA (`Revisión Personal`, `Caminata`, `Pruebas Unitarias`, `Integración Continua`) y el generador del Dictamen Ejecutivo de Salud.

### Hallazgos y Decisiones Tomadas

| ID Hallazgo | Ubicación | Descripción del Defecto / Mejora | Severidad | Responsable | Estado |
| :--- | :--- | :--- | :---: | :--- | :---: |
| **H-04** | `app.js` -> `markTechniqueCompleted` | Al marcar una técnica como "Completada" desde la bitácora, no se recalculaba automáticamente el `% de Cumplimiento SQA` del proyecto. | Alta | Diego Alvarado Díaz | Corregido |
| **H-05** | `styles.css` -> `@media print` | Al imprimir el reporte de salud en PDF, aparecían los botones de navegación superior. Se agregó la clase `.no-print` para limpiar el documento ejecutivo. | Baja | Paul Rivera Salas | Corregido |
| **H-06** | `app.js` -> `renderExecutiveReport` | Se acordó incluir las firmas de los 5 integrantes del Comité de SQA al pie del dictamen para formalizar los reportes entregables. | Mejora | Ricardo Parga | Implementado |
