# Bitácora de SQA — QualityHub

- **Responsable de la Bitácora:** Ricardo Parga (Responsable de Proyecto) y Jesús Adrián Arias Delgado (QA)
- **Proyecto:** QualityHub

En esta bitácora fuimos anotando por fecha las actividades de desarrollo y de aseguramiento de calidad que hicimos desde que arrancamos el proyecto hasta la entrega final.

---

## Registro Cronológico de Actividades

| Fecha | Etapa | Actividad / Técnica SQA | Responsable(s) | Qué se hizo y qué decisiones se tomaron | Defectos Encontrados | Estado |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **05/10/2026** | Inicio | Configuración del repositorio | Paul Rivera Salas | Se creó el repo de **QualityHub**, se armaron las carpetas `src/`, `tests/` y `docs/`, y nos repartimos los módulos entre los 5. | 0 | Completada |
| **06/10/2026** | **Check-in 1** | Visión, SRS, SDS, Wireframes y Estrategia SQAP | Ricardo Parga, Jesús Adrián Arias y equipo | Entregamos el alcance del proyecto, los bocetos de la interfaz y acordamos usar Revisiones Personales, Caminatas, Pruebas Unitarias e Integración Continua. | 0 | Completada |
| **06/10/2026** | Planeación QA | Diseño del Checklist de Revisión | Jesús Adrián Arias, Paul Rivera Salas | Armamos el checklist de 10 puntos para que nadie subiera código a Git sin revisarlo antes. | 0 | Completada |
| **13/10/2026** | Desarrollo | Revisión Personal #01 | Elian Loera Garay | Elian terminó la primera versión de `sqa_engine.py` y le pasó el checklist antes de hacer commit. Corrigió validación de porcentajes y borró prints de prueba. | 2 | Completada |
| **16/10/2026** | Verificación | Caminata (*Walkthrough*) #01 | Los 5 integrantes (Mod: Jesús Adrián) | Revisamos en equipo `sqa_engine.py`. Corregimos validación del periodo con regex, límite de 40 hrs en deuda técnica y la regla para que un proyecto con bugs críticos no salga "Saludable". | 3 | Completada |
| **17/10/2026** | Pruebas | Suite de Pruebas Unitarias | Jesús Adrián Arias Delgado | Se programaron 12 pruebas unitarias en `tests/test_sqa_engine.py` probando registro de proyectos, filtros, métricas, técnicas SQA y reportes. | 1 | Completada |
| **18/10/2026** | Automatización | Revisión Personal #02 y Pipeline CI | Paul Rivera Salas | Se revisó `index.html`, `styles.css` y se dejó configurado GitHub Actions (`.github/workflows/ci.yml`) para correr las pruebas en cada push. | 1 | Completada |
| **20/10/2026** | **Check-in 2** | Entrega de Prototipo Funcional | Ricardo Parga, Paul Rivera Salas | Demostración rápida del prototipo funcionando y revisión del repositorio con las primeras evidencias de SQA y tests en verde. | 0 | Completada |
| **25/10/2026** | Desarrollo Beta | Revisión Personal #03 | Diego Alvarado Díaz | Diego terminó la lógica de gráficas, técnicas SQA y reportes en `app.js`. Con el checklist detectó y arregló un error al redibujar gráficas de `Chart.js`. | 2 | Completada |
| **28/10/2026** | Verificación | Caminata (*Walkthrough*) #02 | Los 5 integrantes (Mod: Jesús Adrián) | Revisamos toda la interfaz web en equipo. Se arregló el recálculo automático al marcar una técnica como completada y se limpió la vista de impresión para PDF. | 3 | Completada |
| **03/11/2026** | **Check-in 3** | Entrega de Versión Beta | Todo el equipo | Presentación del avance con los 4 módulos del alcance funcionando al 100% y resultados de las pruebas y caminatas. | 0 | Completada |
| **18/11/2026** | **Cierre Final** | Retrospectiva y Consolidación de Documentos | Todo el equipo | Hicimos nuestra sesión de retrospectiva, verificamos que las 12 pruebas unitarias y el dashboard funcionen sin errores y organizamos los 11 documentos en `docs/`. | 0 | Completada |
