# Reportes Ejecutivos de Puntos de Control (Check-ins)

Este documento reúne los reportes ejecutivos de seguimiento (1 página por entrega) presentados en las fechas oficiales del cronograma para evidenciar la evolución real del producto y del aseguramiento de la calidad.

---

## Punto de Control 1 — Definición y Arquitectura
- **Fecha:** Martes, 6 de octubre de 2026
- **Responsable del Reporte:** Ricardo Parga (Responsable de Proyecto)
- **Estado General del Proyecto:** `EN TIEMPO (100% de objetivos de la fase cumplidos)`

### 1. Resumen de Avance
- Se definió formalmente el alcance de **QualityHub** cubriendo los 4 pilares requeridos: (1) Registro de proyectos por periodo, (2) Seguimiento de métricas de calidad, (3) Gestión de técnicas SQA y (4) Generación de reportes de salud.
- **Paul Rivera Salas** estableció la arquitectura base del proyecto y la estructura del repositorio Git.
- **Jesús Adrián Arias Delgado** definió el modelo ponderado de salud del software (*Health Score*) y las plantillas de listas de comprobación (*checklists*) y actas de caminata (*walkthroughs*).
- Se diseñaron los bocetos de interfaz (*wireframes*) para las 5 vistas del Centro de Control.

### 2. Actividades de SQA Ejecutadas
- Definición de los umbrales del *Quality Gate* (`Cobertura >= 80%`, `CI >= 90%`, `0 Bugs Críticos`, `Cumplimiento SQA >= 85%`, `Deuda Técnica <= 8 hrs`).

---

## Punto de Control 2 — Prototipo Funcional
- **Fecha:** Martes, 20 de octubre de 2026
- **Responsable del Reporte:** Ricardo Parga (Responsable de Proyecto)
- **Estado General del Proyecto:** `EN TIEMPO (Prototipo operativo y validado)`

### 1. Resumen de Avance Funcional (Demostración 3 min)
- **Elian Loera Garay** implementó el motor de evaluación en Python (`src/sqa_engine.py`) con soporte completo para registro de proyectos por periodo (`YYYY-1`, `YYYY-2`) y cálculo de métricas.
- **Paul Rivera Salas** construyó la maqueta funcional interactiva del Dashboard (`src/index.html`, `src/styles.css`) y configuró el flujo de **Integración Continua** en GitHub Actions (`.github/workflows/ci.yml`).
- **Jesús Adrián Arias Delgado** desarrolló y ejecutó la suite de **12 pruebas unitarias** (`tests/test_sqa_engine.py`).

### 2. Evidencia de Aseguramiento y Control de Calidad
- **Revisión Personal #01:** Ejecutada por Elian Loera el 13 de octubre (2 defectos corregidos antes del commit).
- **Caminata (*Walkthrough*) #01:** Moderada por Jesús Adrián Arias el 16 de octubre sobre `sqa_engine.py`. Se identificaron y corrigieron 3 hallazgos clave (validación de regex de periodo, límite de deuda técnica y penalización estricta por defectos críticos).
- **Pruebas Unitarias en CI:** `12/12 pruebas pasando (100%)`.

---

## Punto de Control 3 — Versión Beta y Resultados de SQA
- **Fecha:** Martes, 3 de noviembre de 2026
- **Responsable del Reporte:** Ricardo Parga (Responsable de Proyecto)
- **Estado General del Proyecto:** `SALUDABLE — 96.4% Health Score (100% del alcance completado)`

### 1. Avance de la Funcionalidad del Producto
- **Diego Alvarado Díaz** y **Elian Loera Garay** integraron el 100% de los módulos interactivos en `src/app.js`:
  1. **Centro de Control con KPIs y Gráficos Dinámicos** (Chart.js) filtrables por periodo.
  2. **Módulo de Registro de Proyectos por Periodo** con validaciones en vivo.
  3. **Módulo de Seguimiento y Calibración de Métricas** con simulación instantánea del *Quality Gate*.
  4. **Módulo de Gestión y Monitoreo de Técnicas SQA** con actualización automática del porcentaje de cumplimiento.
  5. **Generador de Reportes Ejecutivos sobre el Estado de Salud del Software**, con diagnóstico automático, firmas del comité y exportación a PDF/Impresión y JSON.

### 2. Resultados del Aseguramiento de la Calidad Aplicado a QualityHub
- **Revisión Personal #02 y #03:** Completadas al 100% antes de integrar cambios a `main`.
- **Caminata (*Walkthrough*) #02:** Realizada el 28 de octubre con los 5 integrantes, resolviendo 3 hallazgos de interfaz y sincronización de estado.
- **Métricas Actuales de QualityHub:**
  - Cobertura de funciones críticas: `94%`
  - Tasa de aprobación de pruebas unitarias: `100% (12/12 tests OK)`
  - Defectos críticos abiertos: `0`
  - Defectos prevenidos en revisiones estáticas: `12`
