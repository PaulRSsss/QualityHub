# Evidencia de SQA: Listas de Comprobación de Revisiones Personales

Conforme a nuestra estrategia de Aseguramiento de la Calidad, todo desarrollador debe aplicar una **Revisión Personal** utilizando la lista de comprobación estandarizada antes de realizar un *commit* o *push* al repositorio principal.

---

## Revisión Personal #01 — Módulo de Registro de Proyectos y Métricas

- **Desarrollador:** Elian Loera Garay
- **Fecha:** 13 de octubre de 2026
- **Archivos Auditados:** `src/sqa_engine.py`, `src/app.js` (Sección Registro y Métricas)
- **Rama / Commit Asociado:** `feat(engine): implementar motor de registro de proyectos por periodo y calculo de metricas SQA`

### Checklist de Verificación Pre-Commit

| # | Criterio de Inspección Personal | Estado | Observaciones del Autor |
| :---: | :--- | :---: | :--- |
| 1 | El código sigue las convenciones de nombres (`snake_case` en Python, `camelCase` en JS). | [x] Cumple | Se renombraron variables ambiguas en `QualityMetrics`. |
| 2 | Todas las entradas de usuario tienen validación de rangos y tipos (0–100%, no negativos). | [x] Cumple | Se agregó método `validate()` con excepciones descriptivas. |
| 3 | No existen bloques de código comentado, `console.log` de depuración ni variables huérfanas. | [x] Cumple | Se eliminaron 2 `print()` de prueba antes del commit. |
| 4 | Las funciones críticas cuentan con *docstrings* y comentarios explicativos de la lógica. | [x] Cumple | Documentada la ponderación del *Health Score*. |
| 5 | El módulo fue probado localmente sin errores de ejecución ni advertencias de sintaxis. | [x] Cumple | Verificado con `py -m unittest`. |

- **Defectos detectados y corregidos por el propio autor antes del commit:** `2` (falta de validación de cobertura > 100% y `print()` residual).

---

## Revisión Personal #02 — Módulo de Gestión de Técnicas SQA y Reportes de Salud

- **Desarrollador:** Diego Alvarado Díaz
- **Fecha:** 25 de octubre de 2026
- **Archivos Auditados:** `src/app.js` (Secciones Técnicas SQA y Dictamen Ejecutivo), `src/index.html`
- **Rama / Commit Asociado:** `feat(modules): integrar gestion de tecnicas SQA, graficos de metricas y generador de reportes de salud`

### Checklist de Verificación Pre-Commit

| # | Criterio de Inspección Personal | Estado | Observaciones del Autor |
| :---: | :--- | :---: | :--- |
| 1 | El código sigue las convenciones de nombres y estructura modular definida por el arquitecto. | [x] Cumple | Funciones separadas por responsabilidad (`renderTechniquesLog`, `renderExecutiveReport`). |
| 2 | Todas las entradas de formularios previenen registros vacíos o con valores inválidos. | [x] Cumple | Atributos `required`, `min` y `max` aplicados en HTML y validados en JS. |
| 3 | No existen bloques de código muerto ni llamadas innecesarias que degraden el rendimiento. | [x] Cumple | Se destruyen las instancias previas de `Chart.js` antes de redibujar. |
| 4 | La exportación de reportes (PDF/Impresión y JSON) genera documentos íntegros sin errores. | [x] Cumple | Probada la descarga de archivo `.json` y vista previa de impresión. |
| 5 | Los cálculos en el cliente (`app.js`) coinciden exactamente con el motor (`sqa_engine.py`). | [x] Cumple | Verificada paridad matemática con los casos de prueba de QA. |

- **Defectos detectados y corregidos por el propio autor antes del commit:** `2` (fuga de instancia en gráfico de dona al cambiar de periodo y formato de fecha ISO).

---

## Revisión Personal #03 — Infraestructura de Integración Continua y Pruebas Unitarias

- **Desarrolladores / QA:** Paul Rivera Salas y Jesús Adrián Arias Delgado
- **Fecha:** 18 de octubre de 2026
- **Archivos Auditados:** `.github/workflows/ci.yml`, `tests/test_sqa_engine.py`

### Checklist de Verificación Pre-Commit

| # | Criterio de Inspección Personal | Estado | Observaciones del Autor |
| :---: | :--- | :---: | :--- |
| 1 | La suite de pruebas unitarias cubre casos normales, casos límite y manejo de excepciones. | [x] Cumple | 12 pruebas unitarias implementadas (cobertura de las 4 funcionalidades del alcance). |
| 2 | Cada prueba unitaria es independiente, determinista y utiliza `setUp()` limpio. | [x] Cumple | Ejecución completa en `< 0.01s`. |
| 3 | El workflow de GitHub Actions verifica tanto la existencia de artefactos SQA como los tests. | [x] Cumple | Configurado job `sqa-quality-gate` en Ubuntu con Python 3.12. |

- **Defectos detectados y corregidos antes del commit:** `1` (ajuste de `sys.path` para ejecución desde raíz del repositorio).
