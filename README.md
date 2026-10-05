# QualityHub — Centro de Control y Monitoreo de SQA

![CI Quality Gate](https://github.com/PaulRSsss/QualityHub/actions/workflows/ci.yml/badge.svg)
![Versión](https://img.shields.io/badge/versi%C3%B3n-1.0.0--beta-blue)
![SQA Status](https://img.shields.io/badge/SQA-Aprobado-success)

**QualityHub** es una plataforma web interactiva y motor de evaluación diseñado para monitorear, gestionar y visualizar las actividades de **Aseguramiento de la Calidad del Software (SQA)** de múltiples proyectos de desarrollo por periodo académico o trimestral.

Además de servir como centro de control para otros proyectos, **QualityHub** ha sido construido aplicando rigurosamente prácticas de SQA durante su propio ciclo de vida: **Revisiones Personales (Checklists)**, **Caminatas (Walkthroughs)**, **Pruebas Unitarias Automatizadas** e **Integración Continua (CI)**.

---

## 👥 Equipo de Trabajo y Roles

| Rol | Integrante | Responsabilidades Principales |
| :--- | :--- | :--- |
| **Responsable de Proyecto (PM)** | **Ricardo Parga** | Gestión del cronograma, coordinación de entregas ejecutivas (Check-ins), control de riesgos y mantenimiento de la Bitácora General de SQA. |
| **Líder Técnico / Arquitecto** | **Paul Rivera Salas** | Diseño de la arquitectura del sistema, motor de cálculo de salud, configuración del repositorio e implementación del pipeline de Integración Continua (GitHub Actions). |
| **Integrante / Líder de QA** | **Jesús Adrián Arias Delgado** | Definición de la estrategia SQA, diseño y ejecución de la suite de pruebas unitarias, moderación de caminatas (*walkthroughs*) y validación de métricas. |
| **Desarrollador** | **Elian Loera Garay** | Desarrollo del módulo de Registro de Proyectos por Periodo y del módulo de Seguimiento de Métricas de Calidad. |
| **Desarrollador** | **Diego Alvarado Díaz** | Desarrollo del módulo de Gestión de Técnicas SQA y del generador de Reportes sobre el Estado de Salud del Software. |

---

## 🎯 Alcance y Funcionalidad del Producto

**QualityHub** actúa como un centro de control integral que permite:

1. **Registro de Proyectos de Software por Periodo:** Alta, filtrado y clasificación de proyectos monitoreados (ej. `2026-2 Ago-Dic`, `2026-1 Ene-Jun`), incluyendo líder, stack tecnológico y estado actual.
2. **Seguimiento de Métricas de Calidad:** Monitoreo cuantitativo con umbrales (*Quality Gates*) de:
   - Cobertura de pruebas unitarias (`%`).
   - Tasa de éxito en Integración Continua (`%`).
   - Densidad de defectos por KLOC / módulo.
   - Defectos críticos abiertos.
   - Índice de deuda técnica estimada (horas).
3. **Gestión de Técnicas y Métodos de SQA:** Registro, programación y monitoreo de la aplicación de técnicas estáticas y dinámicas (Revisiones Personales, Caminatas/Walkthroughs, Pruebas Unitarias, Auditorías CI) con trazabilidad de defectos detectados y corregidos.
4. **Generación de Reportes sobre el Estado de Salud:** Cálculo automatizado de un **Índice de Salud del Software (Health Score 0–100%)**, clasificación semafórica (`Saludable`, `En Riesgo`, `Crítico`), recomendaciones automáticas de mitigación y exportación de dictamen ejecutivo.

---

## 🛡️ Estrategia de Aseguramiento de la Calidad (SQA) Aplicada

Para garantizar la calidad y medir el estado de salud de **QualityHub** durante su desarrollo, implementamos un esquema compuesto por revisiones estáticas tempranas, pruebas dinámicas y automatización:

- **Revisiones Personales:** Filtro inicial obligatorio donde cada desarrollador inspecciona su propio código frente a listas de comprobación (*checklists*) antes de realizar un *commit*.
- **Caminatas (*Walkthroughs*):** Sesiones colaborativas en las que el autor expone la lógica y arquitectura del módulo ante el equipo para detectar inconsistencias, evaluar la legibilidad y unificar criterios de diseño.
- **Pruebas Unitarias:** Verificación aislada de las funciones críticas del motor de evaluación y cálculo de métricas mediante `unittest`.
- **Integración Continua (CI):** Pipeline automatizado en GitHub Actions que ejecuta la suite de pruebas unitarias en cada *push* y *Pull Request* hacia la rama `main`.

---

## 📂 Estructura del Repositorio

```text
QualityHub/
├── .github/
│   └── workflows/
│       └── ci.yml                       # Pipeline de Integración Continua (GitHub Actions)
├── docs/
│   └── sqa/                             # Evidencias formales de SQA durante el desarrollo
│       ├── 01-definicion-arquitectura.md # Entregable 6 Oct: Alcance, Wireframes y Estrategia SQA
│       ├── 02-actas-caminatas.md        # Minutas de Walkthroughs realizados por el equipo
│       ├── 03-revisiones-personales.md  # Checklists de revisión personal firmados
│       ├── 04-bitacora-sqa.md           # Bitácora cronológica de SQA y decisiones tomadas
│       └── 05-reportes-checkins.md      # Reportes ejecutivos de seguimiento (6 Oct, 20 Oct, 3 Nov)
├── src/
│   ├── index.html                       # Interfaz principal del Dashboard QualityHub
│   ├── styles.css                       # Estilos personalizados y diseño de impresión de reportes
│   ├── app.js                           # Lógica de interfaz, persistencia y visualización
│   └── sqa_engine.py                    # Motor de evaluación de métricas y salud del software
├── tests/
│   └── test_sqa_engine.py               # Suite de pruebas unitarias automatizadas
└── README.md
```

---

## 🚀 Ejecución del Proyecto y Pruebas

### 1. Abrir el Dashboard Web
Puedes abrir directamente el archivo `src/index.html` en cualquier navegador moderno, o levantar un servidor local con Python:

```bash
py -m http.server 8000 --directory src
```
Luego visita `http://localhost:8000` en tu navegador.

### 2. Ejecutar la Suite de Pruebas Unitarias
Para verificar el motor de métricas y salud de software:

```bash
py -m unittest discover -s tests -v
```

---

## 📋 Trazabilidad de Entregas (Check-ins)

- **Martes, 6 de octubre — Definición y Arquitectura:** [Ver Documento](./docs/sqa/01-definicion-arquitectura.md)
- **Martes, 20 de octubre — Prototipo Funcional:** [Ver Bitácora y Evidencias](./docs/sqa/04-bitacora-sqa.md)
- **Martes, 3 de noviembre — Versión Beta:** [Ver Reportes de Estado y Resultados SQA](./docs/sqa/05-reportes-checkins.md)
- **Jueves, 19 de noviembre — Entrega Final:** Despliegue, repositorio documentado y Bitácora de SQA consolidada.
