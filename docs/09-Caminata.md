# Evidencia de Caminatas (Walkthroughs) — QualityHub

Durante el proyecto hicimos dos sesiones de **caminata (*walkthrough*)** donde nos conectamos los 5 integrantes: el que programó el módulo compartía pantalla y explicaba paso a paso cómo funcionaba su código, mientras los demás buscábamos posibles fallas o cosas que se pudieran mejorar.

---

## Caminata #01 — Revisión del Motor de Métricas y Salud (`sqa_engine.py`)

- **Fecha:** Viernes, 16 de octubre de 2026
- **Duración:** ~45 minutos
- **Quién expuso el código:** Elian Loera Garay
- **Quién moderó la sesión:** Jesús Adrián Arias Delgado (QA)
- **Quiénes participaron revisando:** Ricardo Parga, Paul Rivera Salas y Diego Alvarado Díaz

### ¿Qué revisamos?
Elian explicó cómo estructuró las clases para guardar los proyectos por periodo, cómo se registran las técnicas de SQA y cómo se calculaba el puntaje de salud de 0 a 100.

### Hallazgos que encontramos entre todos y cómo se arreglaron

| # | Qué detectamos en la caminata | Quién lo notó | Qué acordamos hacer | Estado |
| :---: | :--- | :--- | :--- | :---: |
| **1** | En el campo `period` se podía meter cualquier texto (como `"Octubre"` o `"Semestre 5"`), lo que después iba a romper el filtro por semestre en el dashboard. | Diego Alvarado | Validar con una expresión regular (`^\d{4}-[12]`) que siempre empiece con el año y `-1` o `-2` (ej. `2026-2`). | Corregido |
| **2** | En el cálculo de deuda técnica, si alguien ponía más de 40 horas, la resta daba un número negativo y le restaba puntos de más al proyecto. | Paul Rivera | Ponerle un tope con `max(0.0, ...)` para que si pasa de 40 horas simplemente dé `0` puntos en ese rubro, nunca negativo. | Corregido |
| **3** | Nos dimos cuenta de que si un proyecto tenía `100%` en cobertura y CI, pero tenía `1 bug crítico` abierto, su promedio daba `90%` y salía como **"Saludable"**. | Jesús Adrián Arias | Acordamos que ningún proyecto con bugs críticos abiertos puede salir en verde; para ser **"Saludable"** debe tener `>= 85%` **y además** `0 bugs críticos`. | Corregido y con prueba unitaria |

---

## Caminata #02 — Revisión del Dashboard Web y Reporte de Salud (`app.js`, `index.html`, `styles.css`)

- **Fecha:** Miércoles, 28 de octubre de 2026
- **Duración:** ~50 minutos
- **Quiénes expusieron el código:** Diego Alvarado Díaz y Paul Rivera Salas
- **Quién moderó la sesión:** Jesús Adrián Arias Delgado (QA)
- **Quiénes participaron revisando:** Ricardo Parga y Elian Loera Garay

### ¿Qué revisamos?
Diego y Paul mostraron funcionando las 5 pestañas del navegador: cómo se guardan los proyectos en `localStorage`, cómo se mueven las barras de métricas, cómo se agregan técnicas a la bitácora y cómo sale el reporte de salud.

### Hallazgos que encontramos entre todos y cómo se arreglaron

| # | Qué detectamos en la caminata | Quién lo notó | Qué acordamos hacer | Estado |
| :---: | :--- | :--- | :--- | :---: |
| **4** | En la pestaña de Técnicas SQA, cuando le dabas clic al botón **"Completar"** en una técnica que estaba *"En Progreso"*, cambiaba la etiqueta a verde pero no subía el `% de Cumplimiento SQA` del proyecto. | Elian Loera | Llamar a `calculateSqaCompliance()` justo dentro de `markTechniqueCompleted()` antes de guardar en `localStorage` y redibujar. | Corregido |
| **5** | Al darle al botón de **"Imprimir / Guardar PDF"** en la pestaña de Reportes, en la hoja impresa salían también la barra oscura de arriba y los botones de las pestañas. | Jesús Adrián Arias | Agregar una regla `@media print` en `styles.css` con la clase `.no-print` para esconder los menús y que solo se imprima la hoja limpia del dictamen. | Corregido |
| **6** | Al reporte impreso le faltaba mostrar quiénes integran el comité o equipo que avala la evaluación. | Ricardo Parga | Agregar en la parte inferior del reporte los nombres y roles de los 5 integrantes del equipo. | Corregido |
