# Bocetos de la Interfaz (Wireframes) — QualityHub

- **Proyecto:** QualityHub
- **Diseñados en:** Fase 1 (Entrega del 6 de octubre)
- **Autores:** Paul Rivera Salas, Diego Alvarado Díaz y Elian Loera Garay

---

## 1. Propósito de los Bocetos
Antes de ponernos a escribir el HTML y JavaScript, armamos estos bocetos para definir cómo íbamos a acomodar las 4 funciones que pedía el profesor sin que la pantalla se viera saturada. Acordamos dejar una barra fija arriba con el filtro de periodo y dividir todo en 5 pestañas.

---

## 2. Wireframe 1: Centro de Control (Dashboard Principal)
Es la primera pantalla que se ve al entrar. Muestra los 4 números más importantes arriba, dos gráficas en medio y la tabla resumen abajo.

```text
+-----------------------------------------------------------------------------------+
| [QH] QualityHub - SQA Control Center              Periodo: [ 2026-2 (Ago-Dic) v ] |
+-----------------------------------------------------------------------------------+
| [Centro Control] [1. Proyectos] [2. Métricas] [3. Técnicas SQA] [4. Reportes]     |
+-----------------------------------------------------------------------------------+
| +-------------------+ +-------------------+ +-------------------+ +-------------+ |
| | Proyectos Activos | | Salud Promedio    | | Técnicas SQA      | | Bugs Crít.  | |
| |         3         | |       87.5%       | |    9 Aplicadas    | |      1      | |
| +-------------------+ +-------------------+ +-------------------+ +-------------+ |
|                                                                                   |
| +-----------------------------------------------+ +-----------------------------+ |
| | GRÁFICA DE BARRAS: Salud por Proyecto         | | GRÁFICA DONA: Técnicas SQA  | |
| |                                               | |                             | |
| |  QualityHub       [||||||||||||||||||] 96%    | |   (o) Revisión Personal     | |
| |  API Pagos        [||||||||||||||||]   91%    | |   (o) Caminatas             | |
| |  Portal Clientes  [||||||||||||]       74%    | |   (o) Pruebas Unitarias     | |
| |                                               | |   (o) Integración Continua  | |
| +-----------------------------------------------+ +-----------------------------+ |
|                                                                                   |
| TABLA DE CONTROL DE PROYECTOS MONITOREADOS                                        |
| Proyecto         | Periodo | Responsable | Cob. | CI   | Bugs | Salud | Estado    |
|------------------+---------+-------------+------+------+------+-------+-----------|
| QualityHub       | 2026-2  | R. Parga    | 94%  | 100% |  0   | 96.4% | SALUDABLE |
| API Core Pagos   | 2026-2  | P. Rivera   | 88%  | 95%  |  0   | 91.4% | SALUDABLE |
| Portal Clientes  | 2026-2  | E. Loera    | 72%  | 84%  |  1   | 73.4% | EN RIESGO |
+-----------------------------------------------------------------------------------+
```

---

## 3. Wireframe 2: Registro de Proyectos por Periodo
A la izquierda pusimos el formulario para dar de alta un proyecto nuevo y a la derecha las tarjetas de los proyectos que ya están guardados.

```text
+-----------------------------------+ +---------------------------------------------+
| REGISTRAR PROYECTO POR PERIODO    | | PROYECTOS REGISTRADOS                       |
|                                   | |                                             |
| Nombre del Proyecto:              | | +-------------------+ +-------------------+ |
| [ Ej. Sistema Escolar           ] | | | [2026-2]   96.4%  | | [2026-2]   91.4%  | |
|                                   | | | QualityHub        | | API Core Pagos    | |
| Periodo:          Stack:          | | | Resp: R. Parga    | | Resp: P. Rivera   | |
| [ 2026-2 v ]      [ Python/JS   ] | | | Cob:94% | Bugs: 0 | | Cob:88% | Bugs: 0 | |
|                                   | | +-------------------+ +-------------------+ |
| Líder / Responsable:              | |                                             |
| [ Selecciona integrante...    v ] | | +-------------------+ +-------------------+ |
|                                   | | | [2026-2]   73.4%  | | [2026-1]   51.2%  | |
| Métricas Iniciales:               | | | Portal Clientes   | | Módulo Inventario | |
| Cobertura(%): [82]   CI(%): [92]  | | | Resp: E. Loera    | | Resp: D. Alvarado | |
| Bugs Crít.:   [ 0]   Deuda: [ 5]  | | | Cob:72% | Bugs: 1 | | Cob:54% | Bugs: 3 | |
|                                   | | +-------------------+ +-------------------+ |
| [ + Registrar Proyecto          ] | |                                             |
+-----------------------------------+ +---------------------------------------------+
```

---

## 4. Wireframe 3: Seguimiento y Calibración de Métricas
Pensamos en poner barras deslizables (*sliders*) para que al mover cualquier métrica se vea a la derecha en tiempo real cómo sube o baja el puntaje de salud.

```text
+-----------------------------------------------------------------------------------+
| SEGUIMIENTO DE MÉTRICAS                      Proyecto: [ Portal Clientes (2026-2)]|
+-----------------------------------------------------------------------------------+
| CONTROLES DE MÉTRICAS                         | EVALUACIÓN INSTANTÁNEA            |
|                                               |                                   |
| 1. Cobertura de Pruebas Unitarias: 72%        |     +-----------------------+     |
|    [================O------] (Meta >= 80%)    |     | HEALTH SCORE          |     |
|                                               |     |        73.4%          |     |
| 2. Estabilidad Pipeline CI: 84%               |     |     [ EN RIESGO ]     |     |
|    [==================O----] (Meta >= 90%)    |     +-----------------------+     |
|                                               |                                   |
| 3. Defectos Críticos Abiertos: 1              | Estado de Umbrales:               |
|    [==O--------------------] (Meta = 0)       | [!] Cobertura: 72% (Meta >= 80%)  |
|                                               | [!] Pipeline CI: 84% (Meta >=90%) |
| 4. Deuda Técnica Estimada: 16 hrs             | [X] Bugs Críticos: 1 (Meta = 0)   |
|    [========O--------------] (Meta <= 8 hrs)  |                                   |
|                                               |                                   |
| [ Guardar Actualización de Métricas ]         |                                   |
+-----------------------------------------------------------------------------------+
```

---

## 5. Wireframe 4: Gestión de Técnicas SQA y Reporte de Salud

### 5.1 Pestaña de Técnicas SQA
```text
+-----------------------------------+ +---------------------------------------------+
| REGISTRAR TÉCNICA DE SQA          | | BITÁCORA DE TÉCNICAS APLICADAS              |
|                                   | | Filtro: [ Todas las Técnicas v ]            |
| Proyecto: [ QualityHub        v ] | |---------------------------------------------|
| Técnica:  [ Caminata (Walk.)  v ] | | [CAMINATA] QualityHub · 2026-10-19          |
| Resp.:    [ Jesús Adrián Arias  ] | | Revisión grupal de pesos de Health Score.   |
| Fecha:    [ 2026-10-19          ] | | Resp: Jesús Adrián · 3 hallazgos [COMPLETA] |
| Estado:   [ Completada        v ] | |---------------------------------------------|
| Defectos: [ 3 ]                   | | [PRUEBAS UNIT.] Portal Clientes · 2026-11-05|
| Hallazgos / Notas:                | | Subiendo cobertura de módulo de login.      |
| [ Se revisó fórmula de salud... ] | | Resp: Diego Alvarado  [EN PROGRESO] [Compl.]|
| [ + Registrar Evidencia SQA     ] | |                                             |
+-----------------------------------+ +---------------------------------------------+
```

### 5.2 Pestaña de Reporte Ejecutivo de Salud
```text
+-----------------------------------------------------------------------------------+
| Proyecto: [ QualityHub — Plataforma SQA v ]    [Exportar JSON] [Imprimir / PDF]   |
+-----------------------------------------------------------------------------------+
| QUALITYHUB — DICTAMEN EJECUTIVO DE SQA                  ÍNDICE DE SALUD: 96.4%    |
| Proyecto: QualityHub (2026-2) · Líder: Ricardo Parga          [ SALUDABLE ]       |
|-----------------------------------------------------------------------------------|
| 1. EVALUACIÓN CUANTITATIVA DEL QUALITY GATE                                       |
| Métrica                         | Actual | Meta     | Peso | Dictamen             |
| Cobertura de Pruebas Unitarias  |  94%   | >= 80%   | 30%  | [ CUMPLE ]           |
| Tasa de Éxito en CI             | 100%   | >= 90%   | 20%  | [ CUMPLE ]           |
| Defectos Críticos Abiertos      |   0    | 0 bugs   | 25%  | [ CUMPLE ]           |
| Cumplimiento de Técnicas SQA    | 100%   | >= 85%   | 15%  | [ CUMPLE ]           |
| Deuda Técnica Estimada          | 3 hrs  | <= 8 hrs | 10%  | [ CUMPLE ]           |
|-----------------------------------------------------------------------------------|
| 2. EVIDENCIA DE TÉCNICAS SQA APLICADAS (Revisiones, Caminatas, Tests, CI)         |
| 3. DIAGNÓSTICO Y RECOMENDACIONES AUTOMÁTICAS                                      |
|-----------------------------------------------------------------------------------|
| Firmas del Equipo:                                                                |
|  Ricardo Parga | Paul Rivera | Jesús Adrián Arias | Elian Loera | Diego Alvarado  |
+-----------------------------------------------------------------------------------+
```
