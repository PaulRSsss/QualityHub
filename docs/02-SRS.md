# Especificación de Requisitos de Software (SRS) — QualityHub

- **Proyecto:** QualityHub
- **Autores:** Ricardo Parga, Paul Rivera Salas, Jesús Adrián Arias Delgado, Elian Loera Garay y Diego Alvarado Díaz

---

## 1. Introducción
Este documento describe qué debe hacer exactamente **QualityHub** y bajo qué reglas debe funcionar. Nos sirvió como guía para que tanto los que programamos la interfaz como quien hizo las pruebas unitarias estuviéramos de acuerdo en qué validar.

## 2. Usuarios del Sistema
Identificamos tres perfiles que usan la herramienta dentro de un equipo de desarrollo:
- **Líder o Responsable de Proyecto:** Consulta el tablero general, filtra por periodo y descarga o imprime el reporte de estado de salud para entregar avances.
- **Responsable de QA:** Registra las caminatas, revisiones y pruebas aplicadas, y revisa qué proyectos están pasando o fallando los umbrales de calidad.
- **Desarrollador:** Da de alta proyectos, registra sus revisiones personales y actualiza las métricas conforme avanza el desarrollo.

---

## 3. Requisitos Funcionales (RF)

| ID | Nombre del Requisito | Descripción y Reglas de Negocio | Prioridad |
| :--- | :--- | :--- | :---: |
| **RF-01** | **Registro de proyecto por periodo** | El sistema debe permitir registrar un proyecto nuevo pidiendo: Nombre (mínimo 3 caracteres), Periodo con formato `YYYY-1` o `YYYY-2` (ej. `2026-2 (Ago-Dic)`), Líder responsable, Stack tecnológico y valores iniciales de métricas. No se deben permitir IDs repetidos. | Alta |
| **RF-02** | **Filtrado por periodo** | En la barra superior el usuario debe poder filtrar el tablero para ver solo los proyectos de un periodo en específico (ej. `2026-1`, `2026-2`) o ver `Todos los Periodos`. | Media |
| **RF-03** | **Seguimiento y actualización de métricas** | El sistema debe permitir modificar y monitorear 5 métricas por proyecto: Cobertura unitaria (`0-100%`), Éxito en CI (`0-100%`), Bugs críticos abiertos (`>= 0`), Cumplimiento SQA (`0-100%`) y Deuda técnica en horas (`>= 0`). Si un valor sale de rango debe marcar error. | Alta |
| **RF-04** | **Gestión de técnicas de SQA** | El sistema debe permitir registrar técnicas aplicadas a un proyecto eligiendo entre: `Revisión Personal`, `Caminata (Walkthrough)`, `Pruebas Unitarias` e `Integración Continua`. Cada registro guarda responsable, fecha, estado (`Planificada`, `En Progreso`, `Completada`), defectos encontrados y notas. | Alta |
| **RF-05** | **Recálculo automático de cumplimiento SQA** | Cuando se registra una técnica nueva o se marca una pendiente como `Completada`, el sistema debe recalcular solo el porcentaje de cumplimiento SQA del proyecto (`técnicas completadas / total registradas * 100`). | Alta |
| **RF-06** | **Cálculo de salud y generación de reportes** | El sistema debe calcular el índice de salud de 0 a 100%, asignar el estado (`Saludable`, `En Riesgo` o `Crítico`), listar recomendaciones automáticas para las métricas que no cumplan la meta y permitir imprimir el reporte en PDF o exportarlo en archivo `.json`. | Alta |

---

## 4. Requisitos No Funcionales (RNF)

| ID | Categoría | Descripción |
| :--- | :--- | :--- |
| **RNF-01** | **Usabilidad** | La interfaz debe estar organizada en pestañas claras (Centro de Control, Proyectos, Métricas, Técnicas SQA y Reportes) para que cualquier integrante encuentre las funciones en menos de 2 clics. |
| **RNF-02** | **Rendimiento** | El recálculo del puntaje de salud y la actualización de las gráficas del dashboard deben hacerse en tiempo real (menos de 1 segundo) al mover los controles o guardar un registro. |
| **RNF-03** | **Portabilidad y Facilidad de Uso** | La interfaz web debe funcionar en cualquier navegador moderno sin obligar a instalar servidores pesados, y el motor de lógica debe correr con la librería estándar de Python (`unittest`). |
| **RNF-04** | **Confiabilidad y Verificación** | Toda la lógica de validación de proyectos, cálculo de salud y generación de reportes debe estar respaldada por pruebas unitarias automatizadas que corran en GitHub Actions en cada cambio. |
| **RNF-05** | **Formato de Impresión** | Al imprimir el reporte de salud (`Ctrl + P` o botón de imprimir), se deben ocultar automáticamente los menús y botones de navegación para que salga una hoja ejecutiva limpia. |
