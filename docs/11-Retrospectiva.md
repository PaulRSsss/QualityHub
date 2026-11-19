# Retrospectiva del Proyecto — QualityHub

- **Fecha:** 18 de noviembre de 2026
- **Participantes:** Ricardo Parga, Paul Rivera Salas, Jesús Adrián Arias Delgado, Elian Loera Garay y Diego Alvarado Díaz

Al terminar la versión final de **QualityHub**, nos juntamos los 5 integrantes para platicar qué nos funcionó bien durante el semestre, en qué nos atoramos y qué aprendimos sobre aplicar Aseguramiento de la Calidad (SQA) en un proyecto real.

---

## 1. ¿Qué nos salió bien? (Lo que repetiríamos)

- **Tener un Checklist corto antes de subir código:** Al principio parecía trámite revisar los 10 puntos del checklist, pero gracias a las **revisiones personales** atrapamos 5 errores tontos (como olvidar validar porcentajes mayores a 100 o dejar `console.log` y errores de gráficas) antes de que llegaran a la rama principal.
- **Las dos Caminatas (*Walkthroughs*):** Fue donde encontramos los errores de lógica más importantes. Uno mismo cuando programa su parte se cicla y no ve detalles que otro compañero nota en 5 minutos viendo tu pantalla (como cuando Jesús Adrián notó que un proyecto con un bug crítico seguía saliendo con etiqueta verde de *"Saludable"* por tener buen promedio en lo demás).
- **Mantener la arquitectura sencilla:** Hacer el dashboard en HTML/JS con Tailwind y el motor de pruebas en Python nativo nos ahorró muchísimos dolores de cabeza. Nadie tuvo problemas de dependencias rotas en su computadora y las 12 pruebas unitarias corren en milisegundos tanto en local como en GitHub Actions.

---

## 2. ¿Qué nos costó trabajo o qué salió mal al inicio?

- **Ponernos de acuerdo en la fórmula de Salud (*Health Score*):** Al principio no sabíamos qué peso darle a cada métrica ni cómo castigar las horas de deuda técnica. En la primera versión, si ponías más de 40 horas de deuda técnica el puntaje daba negativo, hasta que lo topamos en la Caminata #1.
- **Sincronizar las reglas entre Python y JavaScript:** Como tenemos `sqa_engine.py` para las pruebas unitarias y `app.js` para el navegador, teníamos que cuidar que cualquier ajuste en la fórmula se hiciera igual en los dos lados. Por eso lo agregamos como el punto #7 obligatorio de nuestro Checklist.
- **Detalles visuales al imprimir el reporte:** La primera vez que probamos imprimir el reporte de salud en PDF salían cortados los botones del menú superior; lo resolvimos rápido agregando reglas `@media print` en `styles.css`.

---

## 3. ¿Qué haríamos mejor en un próximo proyecto?

1. **Escribir las pruebas unitarias al mismo tiempo que el código (o antes):** Primero programamos `sqa_engine.py` y un par de días después hicimos `test_sqa_engine.py`. Si las hubiéramos escrito al mismo tiempo, habríamos detectado el detalle del formato del periodo desde el primer día.
2. **Automatizar también pruebas de interfaz:** Las pruebas automatizadas en GitHub Actions validan muy bien el motor en Python y que estén todos los documentos, pero la parte visual del navegador la verificamos manualmente en las caminatas.

---

## 4. Conclusión Individual por Integrante

- **Ricardo Parga (Responsable de Proyecto):** *"Lo que más nos ayudó fue respetar las fechas de los puntos de control (6 Oct, 20 Oct y 3 Nov). Tener la bitácora al día hizo que para la entrega final no tuviéramos que inventar ni hacer todo de madrugada."*
- **Paul Rivera Salas (Técnico):** *"Configurar GitHub Actions desde octubre valió mucho la pena porque cada vez que subíamos algo teníamos la seguridad inmediata de que el proyecto seguía pasando todas las validaciones."*
- **Jesús Adrián Arias Delgado (Integrante / QA):** *"Me quedó claro que QA no es solo correr pruebas al final cuando todo ya está hecho; donde más defectos evitamos fue en las caminatas y con el checklist de revisión."*
- **Elian Loera Garay (Desarrollador):** *"Exponer mi código en la primera caminata me sirvió mucho para ver casos extremos que no se me habían ocurrido al programar, como validar con regex el semestre y bloquear valores negativos."*
- **Diego Alvarado Díaz (Desarrollador):** *"Hacer la revisión personal antes del commit me evitó subir errores en las gráficas de Chart.js y nos ayudó a que el generador de reportes de salud quedara limpio a la primera."*
