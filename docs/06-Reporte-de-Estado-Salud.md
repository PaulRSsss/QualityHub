# Reporte de Estado (Salud del Software) — QualityHub

- **Proyecto Evaluado:** QualityHub — Centro de Control y Monitoreo de SQA
- **Periodo:** `2026-2 (Ago-Dic)`
- **Responsable de Proyecto:** Ricardo Parga
- **Responsable de QA:** Jesús Adrián Arias Delgado
- **Fecha de Corte Final:** 18 de noviembre de 2026

---

## 1. Dictamen Actual de Salud de QualityHub (Entrega Final)

Aplicando las mismas métricas y reglas de evaluación de **QualityHub** sobre nuestro propio desarrollo, este es el estado de salud actual del sistema:

- **Índice Global de Salud (Health Score):** **`96.4 / 100`**
- **Clasificación Semafórica:** **`SALUDABLE (Verde)`**
- **Resultado del Quality Gate:** **`APROBADO (5 de 5 métricas cumplen la meta)`**

### Tabla de Evaluación de Métricas

| Métrica de Calidad | Valor Actual | Meta Definida | Peso | Aporte al Puntaje | Estado |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Cobertura de Pruebas Unitarias** | `94%` | `>= 80%` | 30% | `28.2 pts` | **CUMPLE** |
| **2. Defectos Críticos Abiertos** | `0` | `0 defectos` | 25% | `25.0 pts` | **CUMPLE** |
| **3. Tasa de Éxito en Integración Continua** | `100%` | `>= 90%` | 20% | `20.0 pts` | **CUMPLE** |
| **4. Cumplimiento de Técnicas SQA** | `100%` | `>= 85%` | 15% | `15.0 pts` | **CUMPLE** |
| **5. Deuda Técnica Estimada** | `3 hrs` | `<= 8 hrs` | 10% | `10.0 pts` | **CUMPLE** |
| **TOTAL (Health Score)** | — | `>= 85%` | **100%** | **`98.2 / 96.4%`** | **SALUDABLE** |

---

## 2. Resumen deDefectos Atrapados a Tiempo por Técnica SQA

Gracias a que revisamos el código antes y durante la integración, evitamos que estos defectos llegaran a la entrega final:

| Técnica Aplicada | Sesiones / Ejecuciones | Defectos Detectados y Corregidos |
| :--- | :---: | :--- |
| **Revisiones Personales (Checklist)** | 3 revisiones formales | **5 defectos** (validaciones faltantes, `print()` olvidados, limpieza de gráficas). |
| **Caminatas (*Walkthroughs*)** | 2 sesiones en equipo | **6 defectos/mejoras** (formato de periodo por regex, tope de deuda técnica, regla de bugs críticos, recálculo al completar técnica y vista de impresión PDF). |
| **Pruebas Unitarias + CI** | 12 tests automatizados | **1 defecto** (ajuste de rutas de importación para correr en GitHub Actions). |
| **Total Prevenido** | — | **12 defectos resueltos antes de la entrega final (0 bugs críticos abiertos).** |

---

## 3. Historial de Reportes Ejecutivos de los Puntos de Control (Check-ins)

### Check-in 1 — Martes, 6 de octubre de 2026 (Definición y Arquitectura)
- **Avance presentado:** Entregamos el documento de Visión y Alcance, el SRS, el diseño en el SDS, los Wireframes de las 5 pantallas y la Estrategia de Calidad (SQAP).
- **Decisiones de calidad tomadas:** Definimos las 5 métricas que íbamos a medir y armamos el Checklist de Revisión para que todos revisáramos igual nuestro código.

### Check-in 2 — Martes, 20 de octubre de 2026 (Prototipo Funcional)
- **Avance presentado:** Mostramos el motor `sqa_engine.py` funcionando junto con la primera versión del Dashboard web y el flujo de GitHub Actions corriendo en el repositorio.
- **Evidencia de SQA:** Elian hizo la Revisión Personal #1 el 13 de octubre, hicimos la Caminata #1 entre los 5 el 16 de octubre (donde corregimos cómo afectaban los bugs críticos al semáforo de salud) y Jesús Adrián dejó corriendo las 12 pruebas unitarias en `test_sqa_engine.py`.

### Check-in 3 — Martes, 3 de noviembre de 2026 (Versión Beta)
- **Avance presentado:** Quedaron listos los 4 módulos interactivos en `app.js` (registro por periodo, sliders de métricas, bitácora de técnicas SQA y generador de reportes en PDF y JSON).
- **Resultados de SQA:** Diego aplicó la Revisión Personal #2 el 25 de octubre y tuvimos la Caminata #2 el 28 de octubre, donde arreglamos el recálculo automático al completar técnicas y limpiamos el formato de impresión del reporte de salud.
