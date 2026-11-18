# Evidencia de Revisiones Personales — QualityHub

Aquí están las revisiones personales que hicimos cada uno antes de subir nuestros módulos al repositorio, aplicando el [Checklist de Revisión](./07-Checklist-de-Revision.md) del equipo.

---

## Revisión Personal #01 — Motor de Proyectos y Métricas
- **Quién revisó su código:** Elian Loera Garay (Desarrollador)
- **Fecha:** 13 de octubre de 2026
- **Archivo revisado:** `src/sqa_engine.py`

| Punto del Checklist | ¿Cumplió? | Qué encontré y corregí antes de subirlo |
| :--- | :---: | :--- |
| 1. Nombres claros | [x] Sí | Le cambié el nombre a un par de variables en `QualityMetrics` para que quedara claro cuáles son porcentajes y cuáles son horas. |
| 2. Sin código basura | [x] Sí | Tenía dos `print()` que usé para probar las listas de proyectos; los quité antes del commit. |
| 3. Funciones comentadas | [x] Sí | Agregué comentarios en la fórmula donde se multiplican los pesos del puntaje de salud. |
| 4. Validación de números | [x] Sí | Me faltaba validar que la cobertura no pudiera pasar de 100%; le agregué el `if not (0.0 <= self.unit_test_coverage <= 100.0)` con su `ValueError`. |
| 9. Pruebas locales | [x] Sí | Lo probé en consola con Python y todo corrió bien. |

- **Total de errores propios corregidos antes del commit:** `2`

---

## Revisión Personal #02 — Estructura Web y Flujo de GitHub Actions
- **Quién revisó su código:** Paul Rivera Salas (Técnico)
- **Fecha:** 18 de octubre de 2026
- **Archivos revisados:** `src/index.html`, `src/styles.css` y `.github/workflows/ci.yml`

| Punto del Checklist | ¿Cumplió? | Qué encontré y corregí antes de subirlo |
| :--- | :---: | :--- |
| 2. Sin código basura | [x] Sí | Limpié clases de prueba en `styles.css` que ya no se ocupaban. |
| 6. Campos obligatorios | [x] Sí | A todos los inputs del formulario de registro de proyecto y técnicas les puse `required`, `min` y `max` en el HTML. |
| 9. Pruebas unitarias en verde | [x] Sí | Al probar el comando que iba a correr en GitHub Actions vi que a `test_sqa_engine.py` le faltaba agregar `src` al `sys.path` cuando se corre desde la raíz; lo ajustamos con Jesús Adrián. |
| 10. Listo para CI | [x] Sí | Verifiqué que las rutas de los archivos en `ci.yml` coincidieran con las carpetas del proyecto. |

- **Total de errores propios corregidos antes del commit:** `1`

---

## Revisión Personal #03 — Módulos de Técnicas SQA, Gráficas y Reportes
- **Quién revisó su código:** Diego Alvarado Díaz (Desarrollador)
- **Fecha:** 25 de octubre de 2026
- **Archivo revisado:** `src/app.js`

| Punto del Checklist | ¿Cumplió? | Qué encontré y corregí antes de subirlo |
| :--- | :---: | :--- |
| 1. Nombres claros | [x] Sí | Separé el código en funciones por pestaña (`renderDashboard`, `renderTechniquesLog`, `renderExecutiveReport`) para no tener todo revuelto. |
| 7. Consistencia Python y JS | [x] Sí | Revisé con calculadora que `calculateHealthScore()` en JS diera exactamente los mismos decimales que da `sqa_engine.py`. |
| 8. Gráficas sin errores | [x] Sí | Al cambiar el filtro de semestre me salía error en consola porque `Chart.js` intentaba dibujar encima del mismo canvas; lo arreglé agregando `.destroy()` a la gráfica anterior antes de crear la nueva. |
| 2. Sin código basura | [x] Sí | Quité un `console.log(projectsState)` que había dejado al probar el `localStorage`. |

- **Total de errores propios corregidos antes del commit:** `2`
