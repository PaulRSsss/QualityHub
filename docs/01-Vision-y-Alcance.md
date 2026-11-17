# Visión y Alcance del Proyecto — QualityHub

**Equipo de Trabajo:**
- **Responsable de Proyecto:** Ricardo Parga
- **Técnico:** Paul Rivera Salas
- **Integrante / QA:** Jesús Adrián Arias Delgado
- **Desarrolladores:** Elian Loera Garay, Diego Alvarado Díaz

---

## 1. El Problema que Queremos Resolver
Cuando estamos trabajando en varios proyectos de software a lo largo del semestre, casi siempre pasa lo mismo: dejamos las pruebas y la revisión de calidad para el último día antes de la entrega. Tampoco suele haber un lugar central donde el equipo pueda ver rápido qué proyectos van bien, cuáles tienen bugs críticos atorados o si realmente se están haciendo las revisiones de código que prometimos al inicio.

## 2. Visión del Producto
Con **QualityHub** buscamos hacer una herramienta web sencilla y directa que funcione como un **centro de control de calidad (SQA)**. La idea es que cualquier equipo pueda registrar sus proyectos por semestre o periodo, capturar sus métricas principales, llevar el registro de las técnicas de calidad que van aplicando (como caminatas o revisiones personales) y obtener al instante un reporte claro con semáforo que diga cuál es el estado de salud real del software.

---

## 3. Alcance del Proyecto

### 3.1 Lo que SÍ incluye QualityHub (Dentro del Alcance)
Para cumplir al 100% con lo solicitado en el proyecto, el sistema cubre cuatro módulos principales:

1. **Registro de proyectos por periodo:** Dar de alta proyectos indicando a qué semestre pertenecen (por ejemplo `2026-1` o `2026-2`), quién es el encargado y con qué tecnologías está hecho.
2. **Seguimiento de métricas de calidad:** Monitorear 5 indicadores que definimos en equipo:
   - Porcentaje de cobertura de pruebas unitarias.
   - Porcentaje de éxito en integración continua (CI).
   - Cantidad de bugs críticos abiertos.
   - Porcentaje de cumplimiento de actividades SQA.
   - Horas estimadas de deuda técnica.
3. **Gestión de técnicas de SQA:** Poder registrar cada vez que se aplica una técnica de calidad a un proyecto (Revisión Personal, Caminata/Walkthrough, Pruebas Unitarias o Integración Continua), anotando quién la hizo, cuántos defectos encontró y si ya se completó.
4. **Generación de reportes de salud:** Calcular automáticamente un puntaje de salud de 0 a 100%, clasificar el proyecto en **Saludable**, **En Riesgo** o **Crítico**, dar recomendaciones de qué corregir y permitir imprimir el reporte en PDF o descargarlo en JSON.

### 3.2 Lo que NO incluye (Fuera del Alcance)
Para no abarcar de más y entregar algo bien terminado en las fechas del semestre, dejamos fuera lo siguiente:
- No es un gestor de tareas diarias tipo Trello o Jira.
- No analiza ni compila directamente el código fuente de otros repositorios desde el navegador; las métricas y hallazgos se registran o actualizan en el tablero a partir de los resultados de cada equipo.
- No requiere instalar bases de datos externas complicadas (como Oracle o SQL Server) para que cualquier persona o el profesor pueda abrirlo y probarlo de inmediato.

---

## 4. Organización del Equipo

| Rol | Integrante | Qué le tocó coordinar |
| :--- | :--- | :--- |
| **Responsable de Proyecto** | Ricardo Parga | Organizar entregas de los puntos de control, llevar la bitácora y revisar que no nos atrasáramos. |
| **Técnico** | Paul Rivera Salas | Armar la estructura base del proyecto, la interfaz principal y dejar funcionando GitHub Actions. |
| **Integrante / QA** | Jesús Adrián Arias Delgado | Definir las métricas de salud, armar el checklist, dirigir las caminatas y programar las pruebas unitarias. |
| **Desarrollador** | Elian Loera Garay | Programar la lógica de registro de proyectos por periodo y la evaluación de métricas. |
| **Desarrollador** | Diego Alvarado Díaz | Programar la parte de registro de técnicas SQA, las gráficas y la vista para imprimir el reporte de salud. |
