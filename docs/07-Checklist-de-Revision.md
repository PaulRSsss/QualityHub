# Checklist de Revisión de Código — QualityHub

- **Elaborado por:** Jesús Adrián Arias Delgado (QA) y Paul Rivera Salas (Técnico)
- **Aprobado por el equipo:** 6 de octubre de 2026

---

## ¿Para qué hicimos este Checklist?
Para que las **revisiones personales** no fueran nada más "darle una leída por encima al código", acordamos esta lista de 10 puntos básicos. La regla del equipo fue sencilla: antes de hacer `git commit` y subir un módulo, cada quien tenía que revisar su archivo contra esta tabla y corregir lo que saliera mal.

---

## Formato Estándar de Checklist

### A. Orden y Claridad del Código
- [ ] **1. Nombres claros:** Las variables y funciones tienen nombres que se entienden a la primera (`snake_case` en Python y `camelCase` en JavaScript), sin usar nombres como `x`, `temp` o `aux2`.
- [ ] **2. Sin código basura:** Se borraron todos los `print()`, `console.log()` de prueba y bloques de código viejo comentados antes de hacer el commit.
- [ ] **3. Funciones cortas y comentadas:** Cada función hace una sola cosa clara y las fórmulas importantes (como el cálculo del *Health Score*) tienen un comentario breve explicando cómo funcionan.

### B. Validaciones y Reglas de Negocio
- [ ] **4. Validación de porcentajes y números:** Ninguna métrica de porcentaje acepta valores menores a `0` ni mayores a `100`, y ni los bugs ni las horas de deuda técnica aceptan números negativos.
- [ ] **5. Formato de periodo válido:** Al registrar proyectos se valida que el periodo tenga formato de semestre (`YYYY-1` o `YYYY-2`).
- [ ] **6. Campos obligatorios:** Los formularios del dashboard no dejan guardar registros vacíos ni con espacios en blanco.

### C. Interfaz, Pruebas e Integración
- [ ] **7. Consistencia entre Python y JS:** Si se modificó una regla o peso en `sqa_engine.py`, se verificó que `app.js` calcule exactamente el mismo resultado.
- [ ] **8. Gráficas y vista sin errores:** Al cambiar de pestaña o de filtro de periodo en el navegador, la consola no marca errores en rojo y las gráficas de `Chart.js` se redibujan bien.
- [ ] **9. Pruebas unitarias en verde:** Se corrió el comando `py -m unittest discover -s tests -v` en la terminal y todas las pruebas pasaron sin fallas.
- [ ] **10. Listo para Integración Continua:** El cambio no rompe ninguno de los archivos que verifica el flujo de GitHub Actions (`.github/workflows/ci.yml`).
