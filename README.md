# QualityHub — Centro de Control y Monitoreo de SQA

![CI Quality Gate](https://github.com/PaulRSsss/QualityHub/actions/workflows/ci.yml/badge.svg)
![Versión](https://img.shields.io/badge/versi%C3%B3n-1.0.0--final-blue)
![SQA Status](https://img.shields.io/badge/Salud_del_Software-96.4%25_Saludable-success)

**QualityHub** es una plataforma web interactiva y motor de evaluación que desarrollamos para monitorear, gestionar y visualizar las actividades de **Aseguramiento de la Calidad del Software (SQA)** de proyectos de desarrollo organizados por semestre o periodo.

🌐 **Despliegue en Vivo (GitHub Pages):** **[https://paulrssss.github.io/QualityHub/](https://paulrssss.github.io/QualityHub/)**

Además de servir para evaluar otros proyectos, construimos **QualityHub** aplicando nuestras propias prácticas de SQA durante todo el semestre: **Checklist de Revisión**, **Revisiones Personales**, **Caminatas (*Walkthroughs*)**, **Pruebas Unitarias Automatizadas** e **Integración Continua (CI)**.

---

## 👥 Integrantes del Equipo y Roles

| Rol | Integrante | Responsabilidades en el Proyecto |
| :--- | :--- | :--- |
| **Responsable de Proyecto** | **Ricardo Parga** | Organización de entregas (Check-ins), seguimiento del cronograma, Bitácora y Reportes de Estado de Salud. |
| **Técnico** | **Paul Rivera Salas** | Arquitectura general, estructura del Dashboard web y configuración de Integración Continua (GitHub Actions). |
| **Integrante / QA** | **Jesús Adrián Arias Delgado** | Estrategia de Calidad (SQAP), diseño del Checklist, moderación de Caminatas y programación de Pruebas Unitarias. |
| **Desarrollador** | **Elian Loera Garay** | Programación del motor de Registro de Proyectos por Periodo y cálculo de Métricas de Calidad. |
| **Desarrollador** | **Diego Alvarado Díaz** | Programación del módulo de Gestión de Técnicas SQA, gráficas y generador de Reportes de Salud en PDF/JSON. |

---

## 📚 Documentación del Proyecto y Evidencias de SQA (`docs/`)

Todos los documentos requeridos están organizados en la carpeta [`docs/`](./docs):

### 1. Documentos Indispensables de Ingeniería y Calidad
1. [**Visión y Alcance**](./docs/01-Vision-y-Alcance.md) — Problema que resolvemos, visión de QualityHub, qué entra en el alcance y roles del equipo.
2. [**SRS (Especificación de Requisitos de Software)**](./docs/02-SRS.md) — Perfiles de usuario, requisitos funcionales (`RF-01` a `RF-06`) y requisitos no funcionales (`RNF-01` a `RNF-05`).
3. [**SDS (Especificación de Diseño de Software)**](./docs/03-SDS.md) — Arquitectura, diagrama de componentes, diseño de clases y fórmula ponderada del *Health Score*.
4. [**Wireframes (Bocetos de la Interfaz)**](./docs/04-Wireframes.md) — Bocetos de las 5 vistas del sistema diseñados al inicio del desarrollo.
5. [**Estrategia de Calidad (SQAP)**](./docs/05-Estrategia-de-Calidad-SQAP.md) — Plan de Aseguramiento de la Calidad, métricas del *Quality Gate* y técnicas seleccionadas.
6. [**Reporte de Estado (Salud)**](./docs/06-Reporte-de-Estado-Salud.md) — Dictamen actual de salud del software (`96.4% Saludable`) y reportes de los puntos de control (6 Oct, 20 Oct y 3 Nov).

### 2. Documentos y Evidencias de SQA del Equipo
7. [**Checklist de Revisión**](./docs/07-Checklist-de-Revision.md) — Lista de comprobación de 10 puntos que usamos como filtro antes de subir código.
8. [**Revisiones Personales**](./docs/08-Revisiones-Personales.md) — Registros de las revisiones pre-commit aplicadas por Elian, Paul y Diego con los errores que corrigieron.
9. [**Caminata (Walkthroughs)**](./docs/09-Caminata.md) — Actas de las 2 sesiones grupales de revisión de código moderadas por Jesús Adrián con los 6 hallazgos resueltos.
10. [**Bitácora**](./docs/10-Bitacora.md) — Historial cronológico fecha por fecha de todo el desarrollo y actividades de control de calidad.
11. [**Retrospectiva**](./docs/11-Retrospectiva.md) — Reflexión final del equipo sobre lo que funcionó bien, lo que costó trabajo y lo que aprendimos.

---

## 📂 Estructura de Archivos del Repositorio

```text
QualityHub/
├── .github/
│   └── workflows/
│       └── ci.yml                           # Pipeline de Integración Continua (GitHub Actions)
├── docs/                                    # Los 11 documentos del proyecto y evidencias SQA
│   ├── 01-Vision-y-Alcance.md
│   ├── 02-SRS.md
│   ├── 03-SDS.md
│   ├── 04-Wireframes.md
│   ├── 05-Estrategia-de-Calidad-SQAP.md
│   ├── 06-Reporte-de-Estado-Salud.md
│   ├── 07-Checklist-de-Revision.md
│   ├── 08-Revisiones-Personales.md
│   ├── 09-Caminata.md
│   ├── 10-Bitacora.md
│   └── 11-Retrospectiva.md
├── src/                                     # Código fuente de la herramienta QualityHub
│   ├── index.html                           # Interfaz principal del Dashboard Web
│   ├── styles.css                           # Estilos y formato de impresión PDF
│   ├── app.js                               # Lógica de proyectos, métricas, técnicas y reportes
│   └── sqa_engine.py                        # Motor en Python de cálculo y validación SQA
├── tests/
│   └── test_sqa_engine.py                   # Suite de 12 pruebas unitarias automatizadas
└── README.md
```

---

## 🚀 Cómo Abrir el Sistema y Correr las Pruebas

### 1. Usar el Dashboard Web
Abre directamente el archivo `src/index.html` con doble clic en cualquier navegador, o levanta un servidor local:
```bash
py -m http.server 8000 --directory src
```
Y entra a `http://localhost:8000`.

### 2. Ejecutar las Pruebas Unitarias
Desde la carpeta raíz del proyecto ejecuta:
```bash
py -m unittest discover -s tests -v
```
