# Estrategia de Calidad (SQAP) — QualityHub

- **Proyecto:** QualityHub
- **Responsable de QA:** Jesús Adrián Arias Delgado
- **Equipo:** Ricardo Parga, Paul Rivera Salas, Elian Loera Garay y Diego Alvarado Díaz

---

## 1. Resumen de Nuestra Estrategia de SQA

Para medir la salud del proyecto y garantizar su calidad durante el desarrollo, utilizamos un esquema de Aseguramiento de Calidad (SQA) compuesto por revisiones estáticas tempranas, pruebas dinámicas y automatización. En primer lugar, aplicamos **revisiones personales** como filtro inicial obligatorio, donde cada desarrollador inspecciona minuciosamente su propio código frente a listas de comprobación (*checklists*) antes de publicarlo. Esto se complementa con **caminatas (*walkthroughs*)**, sesiones colaborativas en las que el autor expone la lógica y arquitectura del módulo ante el equipo para detectar inconsistencias, evaluar la legibilidad y unificar criterios de diseño. En el apartado dinámico, implementamos **pruebas unitarias** para verificar el comportamiento aislado de cada función crítica y asegurar una cobertura mínima adecuada. Todo este flujo se centraliza y valida mediante **integración continua (CI)** en el repositorio, la cual ejecuta automáticamente las suites de pruebas y valida que ninguna nueva versión rompa la estabilidad del sistema antes de fusionarse a la rama principal. Con ello, la salud del software se mide objetivamente evaluando métricas clave como: la tasa de aprobación de pruebas unitarias, el porcentaje de cobertura de código, la cantidad de defectos detectados durante las caminatas y la estabilidad del pipeline de integración, garantizando trazabilidad y control en cada fase del ciclo de vida.

---

## 2. Técnicas de Calidad que Estableció el Equipo

Acordamos aplicar cuatro técnicas concretas durante las semanas de desarrollo:

| Técnica | Tipo | Cuándo se aplica | Quién participa | Evidencia que dejamos |
| :--- | :--- | :--- | :--- | :--- |
| **1. Revisión Personal** | Estática individual | Antes de cada *commit* importante. | El desarrollador que escribió el módulo (Elian, Diego o Paul). | Formato llenado en [08-Revisiones-Personales.md](./08-Revisiones-Personales.md) usando nuestro [07-Checklist-de-Revision.md](./07-Checklist-de-Revision.md). |
| **2. Caminata (*Walkthrough*)** | Estática grupal | Al terminar el motor en Python (Oct 16) y al terminar el Dashboard (Oct 28). | Los 5 integrantes; el autor explica su código y Jesús Adrián modera. | Actas con los defectos encontrados en [09-Caminata.md](./09-Caminata.md). |
| **3. Pruebas Unitarias** | Dinámica automatizada | Al programar o modificar funciones en `sqa_engine.py`. | Diseñadas por Jesús Adrián Arias y corridas por todos. | Archivo [test_sqa_engine.py](../tests/test_sqa_engine.py) con 12 pruebas unitarias. |
| **4. Integración Continua (CI)** | Automatización | En cada *push* o cambio que se sube al repositorio de GitHub. | Configurada por Paul Rivera Salas. | Workflow [ci.yml](../.github/workflows/ci.yml) en GitHub Actions. |

---

## 3. Métricas y Umbrales de Calidad (Quality Gate)

Para no calificar la salud de un proyecto "al tanteo", definimos esta tabla de metas mínimas:

| Métrica | Qué mide | Meta para estar en Verde | Peso en el Puntaje de Salud |
| :--- | :--- | :---: | :---: |
| **Cobertura de Pruebas Unitarias** | Qué porcentaje de la lógica principal tiene pruebas unitarias. | `>= 80%` | **30%** |
| **Defectos Críticos Abiertos** | Errores graves sin resolver que impiden usar una función. | `0 defectos` | **25%** |
| **Éxito en Integración Continua** | Porcentaje de ejecuciones en GitHub Actions que pasan en verde. | `>= 90%` | **20%** |
| **Cumplimiento de Técnicas SQA** | Porcentaje de revisiones/caminatas completadas respecto a las planeadas. | `>= 85%` | **15%** |
| **Deuda Técnica Estimada** | Horas que nos tomaría limpiar o refactorizar pendientes del código. | `<= 8 horas` | **10%** |

---

## 4. Responsabilidades de Calidad dentro del Equipo

- **Ricardo Parga (Responsable de Proyecto):** Revisar que los entregables de cada punto de control (6 Oct, 20 Oct, 3 Nov y 19 Nov) estén a tiempo y actualizar la Bitácora.
- **Paul Rivera Salas (Técnico):** Mantener funcionando el repositorio, el flujo de GitHub Actions y cuidar que la arquitectura del dashboard no se rompa.
- **Jesús Adrián Arias Delgado (QA):** Convocar las caminatas, mantener los tests unitarios en `test_sqa_engine.py` y verificar que se corrijan los hallazgos antes de dar por cerrado un módulo.
- **Elian Loera Garay y Diego Alvarado Díaz (Desarrolladores):** Pasar el checklist de revisión personal a su código antes de subirlo, exponer sus módulos en las caminatas y corregir los detalles detectados por el equipo.
