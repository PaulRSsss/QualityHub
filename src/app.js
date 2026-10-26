/**
 * QualityHub — Aplicación Web de Control y Monitoreo de SQA
 * Autores:
 * - Paul Rivera Salas (Arquitectura y Visualización)
 * - Elian Loera Garay (Módulos de Registro de Proyectos y Seguimiento de Métricas)
 * - Diego Alvarado Díaz (Módulos de Gestión de Técnicas SQA y Reportes de Salud)
 * - Jesús Adrián Arias Delgado (Reglas de Evaluación SQA y Umbrales)
 * - Ricardo Parga (Supervisión y Estructura de Reportes Ejecutivos)
 */

const STORAGE_KEY = "qualityhub_state_v1";

const INITIAL_DEMO_PROJECTS = [
  {
    id: "PRJ-QH01",
    name: "QualityHub — Plataforma SQA",
    period: "2026-2 (Ago-Dic)",
    lead: "Ricardo Parga",
    stack: "Python / JS / Tailwind",
    metrics: {
      unit_test_coverage: 94,
      ci_pass_rate: 100,
      critical_bugs: 0,
      sqa_compliance: 100,
      tech_debt_hours: 3
    },
    techniques: [
      {
        id: "T-101",
        project_id: "PRJ-QH01",
        technique_type: "Revisión Personal",
        responsible: "Elian Loera Garay",
        date: "2026-10-13",
        status: "Completada",
        defects_found: 2,
        notes: "Verificación con checklist pre-commit del motor de registro de proyectos y validación de periodos."
      },
      {
        id: "T-102",
        project_id: "PRJ-QH01",
        technique_type: "Caminata (Walkthrough)",
        responsible: "Jesús Adrián Arias Delgado",
        date: "2026-10-19",
        status: "Completada",
        defects_found: 3,
        notes: "Sesión grupal de revisión de arquitectura y pesos del algoritmo de Health Score con los 5 integrantes."
      },
      {
        id: "T-103",
        project_id: "PRJ-QH01",
        technique_type: "Pruebas Unitarias",
        responsible: "Jesús Adrián Arias Delgado",
        date: "2026-10-25",
        status: "Completada",
        defects_found: 1,
        notes: "Ejecución de suite de 12 pruebas unitarias en test_sqa_engine.py con 100% de aprobación."
      },
      {
        id: "T-104",
        project_id: "PRJ-QH01",
        technique_type: "Integración Continua",
        responsible: "Paul Rivera Salas",
        date: "2026-11-02",
        status: "Completada",
        defects_found: 0,
        notes: "Validación automática de pipeline en GitHub Actions y verificación de artefactos SQA."
      }
    ]
  },
  {
    id: "PRJ-PG02",
    name: "API Core de Pagos Interbancarios",
    period: "2026-2 (Ago-Dic)",
    lead: "Paul Rivera Salas",
    stack: "Python / FastAPI / PostgreSQL",
    metrics: {
      unit_test_coverage: 88,
      ci_pass_rate: 95,
      critical_bugs: 0,
      sqa_compliance: 100,
      tech_debt_hours: 6
    },
    techniques: [
      {
        id: "T-201",
        project_id: "PRJ-PG02",
        technique_type: "Revisión Personal",
        responsible: "Diego Alvarado Díaz",
        date: "2026-10-15",
        status: "Completada",
        defects_found: 1,
        notes: "Inspección de manejo de excepciones y timeouts en transacciones."
      },
      {
        id: "T-202",
        project_id: "PRJ-PG02",
        technique_type: "Pruebas Unitarias",
        responsible: "Paul Rivera Salas",
        date: "2026-10-28",
        status: "Completada",
        defects_found: 2,
        notes: "Cobertura del 88% en validadores de cuentas CLABE y conciliación."
      }
    ]
  },
  {
    id: "PRJ-CL03",
    name: "Portal de Autogestión Clientes",
    period: "2026-2 (Ago-Dic)",
    lead: "Elian Loera Garay",
    stack: "React / TypeScript / Node",
    metrics: {
      unit_test_coverage: 72,
      ci_pass_rate: 84,
      critical_bugs: 1,
      sqa_compliance: 66.67,
      tech_debt_hours: 16
    },
    techniques: [
      {
        id: "T-301",
        project_id: "PRJ-CL03",
        technique_type: "Caminata (Walkthrough)",
        responsible: "Jesús Adrián Arias Delgado",
        date: "2026-10-21",
        status: "Completada",
        defects_found: 4,
        notes: "Se detectó condición de carrera en actualización de perfil y falta de validación en formulario."
      },
      {
        id: "T-302",
        project_id: "PRJ-CL03",
        technique_type: "Revisión Personal",
        responsible: "Elian Loera Garay",
        date: "2026-10-29",
        status: "Completada",
        defects_found: 2,
        notes: "Corrección de estilos responsivos y limpieza de variables no utilizadas."
      },
      {
        id: "T-303",
        project_id: "PRJ-CL03",
        technique_type: "Pruebas Unitarias",
        responsible: "Diego Alvarado Díaz",
        date: "2026-11-05",
        status: "En Progreso",
        defects_found: 1,
        notes: "Incrementando cobertura del módulo de autenticación para alcanzar meta del 80%."
      }
    ]
  },
  {
    id: "PRJ-IN04",
    name: "Módulo Legacy de Inventario Almacén",
    period: "2026-1 (Ene-Jun)",
    lead: "Diego Alvarado Díaz",
    stack: "Java / Spring Boot",
    metrics: {
      unit_test_coverage: 54,
      ci_pass_rate: 68,
      critical_bugs: 3,
      sqa_compliance: 50,
      tech_debt_hours: 28
    },
    techniques: [
      {
        id: "T-401",
        project_id: "PRJ-IN04",
        technique_type: "Caminata (Walkthrough)",
        responsible: "Ricardo Parga",
        date: "2026-05-14",
        status: "Completada",
        defects_found: 6,
        notes: "Auditoría de código acoplado en cálculo de existencias."
      },
      {
        id: "T-402",
        project_id: "PRJ-IN04",
        technique_type: "Integración Continua",
        responsible: "Paul Rivera Salas",
        date: "2026-05-20",
        status: "Planificada",
        defects_found: 0,
        notes: "Migración pendiente a workflow estandarizado."
      }
    ]
  }
];

let projectsState = [];
let healthChartInstance = null;
let techniquesChartInstance = null;

// =======================================================
// FUNCIONES PURAS DEL MOTOR SQA (Espejo de sqa_engine.py)
// =======================================================

function calculateSqaCompliance(techniques) {
  if (!techniques || techniques.length === 0) return 0;
  const completed = techniques.filter((t) => t.status === "Completada").length;
  return Number(((completed / techniques.length) * 100).toFixed(1));
}

function calculateHealthScore(metrics) {
  const covScore = metrics.unit_test_coverage * 0.30;
  const ciScore = metrics.ci_pass_rate * 0.20;

  let bugsRaw = 0;
  if (metrics.critical_bugs === 0) bugsRaw = 100;
  else if (metrics.critical_bugs === 1) bugsRaw = 60;
  else if (metrics.critical_bugs === 2) bugsRaw = 30;
  else bugsRaw = 0;
  const bugsScore = bugsRaw * 0.25;

  const sqaScore = metrics.sqa_compliance * 0.15;

  let debtRaw = 0;
  if (metrics.tech_debt_hours <= 8) debtRaw = 100;
  else if (metrics.tech_debt_hours >= 40) debtRaw = 0;
  else debtRaw = Math.max(0, 100 - ((metrics.tech_debt_hours - 8) / 32) * 100);
  const debtScore = debtRaw * 0.10;

  const total = covScore + ciScore + bugsScore + sqaScore + debtScore;
  return Number(Math.min(100, Math.max(0, total)).toFixed(1));
}

function classifyHealthStatus(score, criticalBugs) {
  if (criticalBugs >= 3 || score < 65) return "Crítico";
  if (score >= 85 && criticalBugs === 0) return "Saludable";
  return "En Riesgo";
}

function getStatusBadgeClasses(status) {
  if (status === "Saludable") {
    return "bg-emerald-100 text-emerald-800 border border-emerald-300";
  }
  if (status === "En Riesgo") {
    return "bg-amber-100 text-amber-800 border border-amber-300";
  }
  return "bg-rose-100 text-rose-800 border border-rose-300";
}

function showToast(message) {
  const toast = document.getElementById("toast-alert");
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3200);
}

// =======================================================
// PERSISTENCIA Y FILTRADO
// =======================================================

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      projectsState = JSON.parse(raw);
      return;
    } catch (e) {
      console.error("Error cargando estado local:", e);
    }
  }
  projectsState = JSON.parse(JSON.stringify(INITIAL_DEMO_PROJECTS));
  saveState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsState));
}

function getFilteredProjects() {
  const periodFilter = document.getElementById("global-period-filter").value;
  if (periodFilter === "TODOS") return projectsState;
  return projectsState.filter((p) => p.period.startsWith(periodFilter));
}

// =======================================================
// RENDERIZADO GENERAL
// =======================================================

function renderAll() {
  renderDashboard();
  renderProjectsCatalog();
  populateProjectSelectors();
  renderMetricsInspector();
  renderTechniquesLog();
  renderExecutiveReport();
}

// 1. Renderizar Dashboard y Gráficos
function renderDashboard() {
  const filtered = getFilteredProjects();
  const totalProjects = filtered.length;

  let sumHealth = 0;
  let totalTechniques = 0;
  let totalEarlyDefects = 0;
  let totalCriticalBugs = 0;

  filtered.forEach((p) => {
    p.metrics.sqa_compliance = p.techniques.length > 0 ? calculateSqaCompliance(p.techniques) : p.metrics.sqa_compliance;
    sumHealth += calculateHealthScore(p.metrics);
    totalTechniques += p.techniques.length;
    totalEarlyDefects += p.techniques.reduce((acc, t) => acc + Number(t.defects_found || 0), 0);
    totalCriticalBugs += Number(p.metrics.critical_bugs || 0);
  });

  const avgHealth = totalProjects > 0 ? Number((sumHealth / totalProjects).toFixed(1)) : 0;
  const avgStatus = classifyHealthStatus(avgHealth, totalCriticalBugs > 2 ? 3 : 0);

  document.getElementById("kpi-total-projects").textContent = totalProjects;
  document.getElementById("kpi-avg-health").textContent = `${avgHealth}%`;
  const avgBadge = document.getElementById("kpi-avg-badge");
  avgBadge.textContent = avgStatus;
  avgBadge.className = `text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusBadgeClasses(avgStatus)}`;

  document.getElementById("kpi-total-techniques").textContent = totalTechniques;
  document.getElementById("kpi-early-defects").textContent = `${totalEarlyDefects} defectos prevenidos`;
  document.getElementById("kpi-critical-bugs").textContent = totalCriticalBugs;

  // Tabla Resumen
  const tbody = document.getElementById("dashboard-projects-tbody");
  tbody.innerHTML = "";

  filtered.forEach((p) => {
    const score = calculateHealthScore(p.metrics);
    const status = classifyHealthStatus(score, p.metrics.critical_bugs);
    const badgeClass = getStatusBadgeClasses(status);

    const tr = document.createElement("tr");
    tr.className = "hover:bg-slate-50 transition";
    tr.innerHTML = `
      <td class="py-3.5 px-4">
        <div class="font-bold text-slate-900">${p.name}</div>
        <div class="text-xs text-slate-400">${p.id} · ${p.stack}</div>
      </td>
      <td class="py-3.5 px-4 text-xs font-semibold text-slate-600">${p.period}</td>
      <td class="py-3.5 px-4 text-slate-700">${p.lead}</td>
      <td class="py-3.5 px-4 text-center font-semibold ${p.metrics.unit_test_coverage >= 80 ? 'text-emerald-600' : 'text-amber-600'}">${p.metrics.unit_test_coverage}%</td>
      <td class="py-3.5 px-4 text-center font-semibold ${p.metrics.ci_pass_rate >= 90 ? 'text-emerald-600' : 'text-amber-600'}">${p.metrics.ci_pass_rate}%</td>
      <td class="py-3.5 px-4 text-center font-bold ${p.metrics.critical_bugs === 0 ? 'text-slate-700' : 'text-rose-600'}">${p.metrics.critical_bugs}</td>
      <td class="py-3.5 px-4 text-center font-semibold text-indigo-600">${p.metrics.sqa_compliance}%</td>
      <td class="py-3.5 px-4 text-center font-extrabold text-slate-900">${score}%</td>
      <td class="py-3.5 px-4 text-center">
        <span class="px-2.5 py-1 rounded-full text-xs font-bold ${badgeClass}">${status}</span>
      </td>
      <td class="py-3.5 px-4 text-right">
        <button onclick="openProjectReport('${p.id}')" class="text-xs font-semibold text-blue-600 hover:text-blue-800 underline">
          Ver Reporte
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  renderCharts(filtered);
}

function renderCharts(filteredProjects) {
  const ctxHealth = document.getElementById("chart-health-projects");
  const ctxTech = document.getElementById("chart-sqa-techniques");
  if (!ctxHealth || !ctxTech || typeof Chart === "undefined") return;

  const labels = filteredProjects.map((p) => p.name);
  const scores = filteredProjects.map((p) => calculateHealthScore(p.metrics));
  const colors = filteredProjects.map((p) => {
    const st = classifyHealthStatus(calculateHealthScore(p.metrics), p.metrics.critical_bugs);
    if (st === "Saludable") return "#10b981";
    if (st === "En Riesgo") return "#f59e0b";
    return "#f43f5e";
  });

  if (healthChartInstance) healthChartInstance.destroy();
  healthChartInstance = new Chart(ctxHealth, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Índice de Salud (%)",
          data: scores,
          backgroundColor: colors,
          borderRadius: 8,
          maxBarThickness: 48
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, max: 100 }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });

  const techCounts = {
    "Revisión Personal": 0,
    "Caminata (Walkthrough)": 0,
    "Pruebas Unitarias": 0,
    "Integración Continua": 0
  };
  filteredProjects.forEach((p) => {
    p.techniques.forEach((t) => {
      if (techCounts[t.technique_type] !== undefined) {
        techCounts[t.technique_type]++;
      }
    });
  });

  if (techniquesChartInstance) techniquesChartInstance.destroy();
  techniquesChartInstance = new Chart(ctxTech, {
    type: "doughnut",
    data: {
      labels: Object.keys(techCounts),
      datasets: [
        {
          data: Object.values(techCounts),
          backgroundColor: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"],
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { boxWidth: 12, font: { size: 11 } } }
      }
    }
  });
}

// 2. Renderizar Catálogo de Proyectos
function renderProjectsCatalog() {
  const grid = document.getElementById("projects-cards-grid");
  grid.innerHTML = "";

  projectsState.forEach((p) => {
    const score = calculateHealthScore(p.metrics);
    const status = classifyHealthStatus(score, p.metrics.critical_bugs);
    const badgeClass = getStatusBadgeClasses(status);

    const card = document.createElement("div");
    card.className = "p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between gap-3";
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">${p.period}</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${badgeClass}">${score}% · ${status}</span>
        </div>
        <h3 class="text-base font-bold text-slate-900 mt-2">${p.name}</h3>
        <p class="text-xs text-slate-500 mt-0.5">Responsable: <strong>${p.lead}</strong> · Stack: ${p.stack}</p>
      </div>
      <div class="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200/80 text-center text-xs">
        <div class="bg-white p-2 rounded border border-slate-200">
          <p class="text-slate-400">Cobertura</p>
          <p class="font-bold text-slate-800">${p.metrics.unit_test_coverage}%</p>
        </div>
        <div class="bg-white p-2 rounded border border-slate-200">
          <p class="text-slate-400">Técnicas SQA</p>
          <p class="font-bold text-slate-800">${p.techniques.length}</p>
        </div>
        <div class="bg-white p-2 rounded border border-slate-200">
          <p class="text-slate-400">Bugs Crít.</p>
          <p class="font-bold text-slate-800">${p.metrics.critical_bugs}</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Poblar selectores de proyectos en las pestañas 2, 3 y 4
function populateProjectSelectors() {
  const selects = [
    document.getElementById("metrics-project-select"),
    document.getElementById("tech-project-select"),
    document.getElementById("report-project-select")
  ];

  selects.forEach((sel) => {
    if (!sel) return;
    const prevValue = sel.value;
    sel.innerHTML = "";
    projectsState.forEach((p) => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.name} (${p.period})`;
      sel.appendChild(opt);
    });
    if (prevValue && projectsState.some((p) => p.id === prevValue)) {
      sel.value = prevValue;
    }
  });
}

// 3. Inspector y Calibración de Métricas
function renderMetricsInspector() {
  const sel = document.getElementById("metrics-project-select");
  const proj = projectsState.find((p) => p.id === sel.value) || projectsState[0];
  if (!proj) return;

  document.getElementById("input-m-cov").value = proj.metrics.unit_test_coverage;
  document.getElementById("input-m-ci").value = proj.metrics.ci_pass_rate;
  document.getElementById("input-m-bugs").value = proj.metrics.critical_bugs;
  document.getElementById("input-m-debt").value = proj.metrics.tech_debt_hours;

  updateLiveMetricsPreview();
}

function updateLiveMetricsPreview() {
  const sel = document.getElementById("metrics-project-select");
  const proj = projectsState.find((p) => p.id === sel.value) || projectsState[0];
  if (!proj) return;

  const cov = Number(document.getElementById("input-m-cov").value);
  const ci = Number(document.getElementById("input-m-ci").value);
  const bugs = Number(document.getElementById("input-m-bugs").value);
  const debt = Number(document.getElementById("input-m-debt").value);

  document.getElementById("lbl-m-cov").textContent = `${cov}%`;
  document.getElementById("lbl-m-ci").textContent = `${ci}%`;
  document.getElementById("lbl-m-bugs").textContent = `${bugs}`;
  document.getElementById("lbl-m-debt").textContent = `${debt} hrs`;

  const tempMetrics = {
    unit_test_coverage: cov,
    ci_pass_rate: ci,
    critical_bugs: bugs,
    sqa_compliance: proj.metrics.sqa_compliance,
    tech_debt_hours: debt
  };

  const score = calculateHealthScore(tempMetrics);
  const status = classifyHealthStatus(score, bugs);

  document.getElementById("live-metric-proj-name").textContent = proj.name;
  document.getElementById("live-health-score").textContent = `${score}%`;

  const badge = document.getElementById("live-health-badge");
  badge.textContent = status;
  badge.className = `inline-block mt-3 text-xs font-bold uppercase px-3 py-1 rounded-full ${getStatusBadgeClasses(status)}`;

  const list = document.getElementById("live-thresholds-list");
  list.innerHTML = `
    <li>${cov >= 80 ? "✅" : "⚠️"} Cobertura Unitaria: <strong>${cov}%</strong> (Meta &ge; 80%)</li>
    <li>${ci >= 90 ? "✅" : "⚠️"} Pipeline CI: <strong>${ci}%</strong> (Meta &ge; 90%)</li>
    <li>${bugs === 0 ? "✅" : "❌"} Bugs Críticos: <strong>${bugs}</strong> (Meta = 0)</li>
    <li>${proj.metrics.sqa_compliance >= 85 ? "✅" : "⚠️"} Cumplimiento SQA: <strong>${proj.metrics.sqa_compliance}%</strong> (Meta &ge; 85%)</li>
    <li>${debt <= 8 ? "✅" : "⚠️"} Deuda Técnica: <strong>${debt} hrs</strong> (Meta &le; 8 hrs)</li>
  `;
}

// 4. Renderizar Bitácora de Técnicas SQA
function renderTechniquesLog() {
  const container = document.getElementById("techniques-log-container");
  const filterType = document.getElementById("filter-tech-type").value;
  container.innerHTML = "";

  const allLogs = [];
  projectsState.forEach((p) => {
    p.techniques.forEach((t) => {
      allLogs.push({ ...t, projectName: p.name, projectPeriod: p.period });
    });
  });

  const filtered = filterType === "TODAS"
    ? allLogs
    : allLogs.filter((t) => t.technique_type === filterType);

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-400 py-8 text-center">No hay registros para este filtro.</p>`;
    return;
  }

  filtered.forEach((t) => {
    const statusColors =
      t.status === "Completada"
        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
        : t.status === "En Progreso"
        ? "bg-amber-50 text-amber-700 border-amber-200"
        : "bg-slate-100 text-slate-600 border-slate-300";

    const div = document.createElement("div");
    div.className = "p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3";
    div.innerHTML = `
      <div class="space-y-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800">${t.technique_type}</span>
          <span class="text-xs font-semibold text-slate-700">${t.projectName}</span>
          <span class="text-xs text-slate-400">· ${t.date}</span>
        </div>
        <p class="text-sm text-slate-700">${t.notes}</p>
        <p class="text-xs text-slate-500">Responsable: <strong>${t.responsible}</strong> · Defectos detectados: <strong>${t.defects_found}</strong></p>
      </div>
      <div class="flex items-center gap-2 self-end sm:self-center">
        <span class="text-xs font-bold px-2.5 py-1 rounded-full border ${statusColors}">${t.status}</span>
        ${
          t.status !== "Completada"
            ? `<button onclick="markTechniqueCompleted('${t.project_id}', '${t.id}')"
                 class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-2.5 py-1 rounded-lg transition">
                 Completar
               </button>`
            : ""
        }
      </div>
    `;
    container.appendChild(div);
  });
}

window.markTechniqueCompleted = function (projectId, techId) {
  const proj = projectsState.find((p) => p.id === projectId);
  if (!proj) return;
  const tech = proj.techniques.find((t) => t.id === techId);
  if (!tech) return;
  tech.status = "Completada";
  proj.metrics.sqa_compliance = calculateSqaCompliance(proj.techniques);
  saveState();
  renderAll();
  showToast(`Técnica ${tech.technique_type} marcada como Completada.`);
};

// 5. Renderizar Reporte Ejecutivo de Salud
function renderExecutiveReport() {
  const sel = document.getElementById("report-project-select");
  const proj = projectsState.find((p) => p.id === sel.value) || projectsState[0];
  if (!proj) return;

  const score = calculateHealthScore(proj.metrics);
  const status = classifyHealthStatus(score, proj.metrics.critical_bugs);
  const badgeClass = getStatusBadgeClasses(status);

  document.getElementById("rep-proj-name").textContent = proj.name;
  document.getElementById("rep-proj-meta").textContent = `ID: ${proj.id} · Periodo: ${proj.period} · Líder Responsable: ${proj.lead} · Stack: ${proj.stack}`;
  document.getElementById("rep-health-score").textContent = `${score}%`;

  const badge = document.getElementById("rep-status-badge");
  badge.textContent = status;
  badge.className = `px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase ${badgeClass}`;

  const m = proj.metrics;
  const rows = [
    {
      name: "Cobertura de Pruebas Unitarias",
      val: `${m.unit_test_coverage}%`,
      target: ">= 80%",
      weight: "30%",
      ok: m.unit_test_coverage >= 80
    },
    {
      name: "Tasa de Éxito en Integración Continua (CI)",
      val: `${m.ci_pass_rate}%`,
      target: ">= 90%",
      weight: "20%",
      ok: m.ci_pass_rate >= 90
    },
    {
      name: "Defectos Críticos Abiertos",
      val: `${m.critical_bugs}`,
      target: "0 defectos",
      weight: "25%",
      ok: m.critical_bugs === 0
    },
    {
      name: "Cumplimiento de Técnicas SQA Planificadas",
      val: `${m.sqa_compliance}%`,
      target: ">= 85%",
      weight: "15%",
      ok: m.sqa_compliance >= 85
    },
    {
      name: "Deuda Técnica Estimada",
      val: `${m.tech_debt_hours} hrs`,
      target: "<= 8 hrs",
      weight: "10%",
      ok: m.tech_debt_hours <= 8
    }
  ];

  const tbody = document.getElementById("rep-metrics-tbody");
  tbody.innerHTML = rows
    .map(
      (r) => `
    <tr>
      <td class="py-2.5 px-4 font-semibold text-slate-800">${r.name}</td>
      <td class="py-2.5 px-4 text-center font-bold">${r.val}</td>
      <td class="py-2.5 px-4 text-center text-slate-500">${r.target}</td>
      <td class="py-2.5 px-4 text-center text-slate-500">${r.weight}</td>
      <td class="py-2.5 px-4 text-center">
        <span class="px-2 py-0.5 rounded text-xs font-bold ${
          r.ok ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
        }">${r.ok ? "CUMPLE" : "BAJO UMBRAL"}</span>
      </td>
    </tr>
  `
    )
    .join("");

  const techContainer = document.getElementById("rep-techniques-list");
  if (proj.techniques.length === 0) {
    techContainer.innerHTML = `<p class="text-xs text-slate-400">Sin técnicas registradas aún.</p>`;
  } else {
    techContainer.innerHTML = proj.techniques
      .map(
        (t) => `
      <div class="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-2">
        <div>
          <strong class="text-indigo-700">[${t.technique_type}]</strong>
          <span class="text-slate-700 ml-1">${t.notes}</span>
        </div>
        <div class="text-slate-500 shrink-0">
          ${t.responsible} · ${t.date} · <strong>${t.defects_found} hallazgos</strong> · <strong>${t.status}</strong>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Recomendaciones automáticas
  const recs = [];
  if (m.unit_test_coverage < 80) {
    recs.push(`Incrementar la cobertura de pruebas unitarias (actual: ${m.unit_test_coverage}%, meta: >= 80%).`);
  }
  if (m.ci_pass_rate < 90) {
    recs.push(`Estabilizar el pipeline de Integración Continua (actual: ${m.ci_pass_rate}%, meta: >= 90%).`);
  }
  if (m.critical_bugs > 0) {
    recs.push(`Convocar caminata (walkthrough) de emergencia para resolver ${m.critical_bugs} defecto(s) crítico(s) abierto(s).`);
  }
  if (m.sqa_compliance < 85) {
    recs.push(`Completar las revisiones personales y caminatas programadas (cumplimiento actual: ${m.sqa_compliance}%).`);
  }
  if (m.tech_debt_hours > 8) {
    recs.push(`Asignar refactorización para reducir la deuda técnica de ${m.tech_debt_hours} hrs por debajo del umbral de 8 hrs.`);
  }
  if (recs.length === 0) {
    recs.push("El proyecto aprueba satisfactoriamente todos los controles del Quality Gate. Mantener monitoreo continuo.");
  }

  document.getElementById("rep-recommendations").innerHTML = recs.map((r) => `<li>${r}</li>`).join("");
}

window.openProjectReport = function (projectId) {
  const sel = document.getElementById("report-project-select");
  sel.value = projectId;
  renderExecutiveReport();
  switchTab("tab-reportes");
};

function switchTab(tabId) {
  document.querySelectorAll(".tab-section").forEach((sec) => sec.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });
}

// =======================================================
// INICIALIZACIÓN DE EVENTOS
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderAll();

  // Navegación por pestañas
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTab(btn.getAttribute("data-tab"));
    });
  });

  // Filtro global de periodo
  document.getElementById("global-period-filter").addEventListener("change", () => {
    renderDashboard();
  });

  // Restaurar Demo
  document.getElementById("btn-reset-demo").addEventListener("click", () => {
    projectsState = JSON.parse(JSON.stringify(INITIAL_DEMO_PROJECTS));
    saveState();
    renderAll();
    showToast("Datos demostrativos restaurados correctamente.");
  });

  // 1. Formulario de Registro de Proyecto
  document.getElementById("form-register-project").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("proj-name").value.trim();
    const period = document.getElementById("proj-period").value;
    const stack = document.getElementById("proj-stack").value.trim();
    const lead = document.getElementById("proj-lead").value.trim();
    const cov = Number(document.getElementById("proj-cov").value);
    const ci = Number(document.getElementById("proj-ci").value);
    const bugs = Number(document.getElementById("proj-bugs").value);
    const debt = Number(document.getElementById("proj-debt").value);

    const newProj = {
      id: `PRJ-${Math.floor(100 + Math.random() * 900)}`,
      name,
      period,
      lead,
      stack,
      metrics: {
        unit_test_coverage: cov,
        ci_pass_rate: ci,
        critical_bugs: bugs,
        sqa_compliance: 100,
        tech_debt_hours: debt
      },
      techniques: [
        {
          id: `T-${Math.floor(100 + Math.random() * 900)}`,
          project_id: "",
          technique_type: "Revisión Personal",
          responsible: lead,
          date: new Date().toISOString().slice(0, 10),
          status: "Completada",
          defects_found: 0,
          notes: "Revisión personal inicial de creación y configuración de arquitectura del proyecto."
        }
      ]
    };
    newProj.techniques[0].project_id = newProj.id;

    projectsState.unshift(newProj);
    saveState();
    renderAll();
    e.target.reset();
    showToast(`Proyecto "${name}" registrado exitosamente en el periodo ${period}.`);
  });

  // 2. Eventos de Seguimiento de Métricas
  document.getElementById("metrics-project-select").addEventListener("change", renderMetricsInspector);
  ["input-m-cov", "input-m-ci", "input-m-bugs", "input-m-debt"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateLiveMetricsPreview);
  });

  document.getElementById("btn-save-metrics").addEventListener("click", () => {
    const sel = document.getElementById("metrics-project-select");
    const proj = projectsState.find((p) => p.id === sel.value);
    if (!proj) return;

    proj.metrics.unit_test_coverage = Number(document.getElementById("input-m-cov").value);
    proj.metrics.ci_pass_rate = Number(document.getElementById("input-m-ci").value);
    proj.metrics.critical_bugs = Number(document.getElementById("input-m-bugs").value);
    proj.metrics.tech_debt_hours = Number(document.getElementById("input-m-debt").value);

    saveState();
    renderAll();
    showToast(`Métricas de "${proj.name}" actualizadas y evaluadas.`);
  });

  // 3. Formulario de Registro de Técnica SQA
  document.getElementById("form-log-technique").addEventListener("submit", (e) => {
    e.preventDefault();
    const projectId = document.getElementById("tech-project-select").value;
    const proj = projectsState.find((p) => p.id === projectId);
    if (!proj) return;

    const newTech = {
      id: `T-${Math.floor(100 + Math.random() * 900)}`,
      project_id: projectId,
      technique_type: document.getElementById("tech-type").value,
      responsible: document.getElementById("tech-responsible").value.trim(),
      date: document.getElementById("tech-date").value,
      status: document.getElementById("tech-status").value,
      defects_found: Number(document.getElementById("tech-defects").value),
      notes: document.getElementById("tech-notes").value.trim()
    };

    proj.techniques.unshift(newTech);
    proj.metrics.sqa_compliance = calculateSqaCompliance(proj.techniques);

    saveState();
    renderAll();
    document.getElementById("tech-notes").value = "";
    showToast(`Técnica "${newTech.technique_type}" registrada en ${proj.name}.`);
  });

  document.getElementById("filter-tech-type").addEventListener("change", renderTechniquesLog);

  // 4. Selector y Exportación de Reportes
  document.getElementById("report-project-select").addEventListener("change", renderExecutiveReport);
  document.getElementById("btn-export-json").addEventListener("click", () => {
    const sel = document.getElementById("report-project-select");
    const proj = projectsState.find((p) => p.id === sel.value) || projectsState[0];
    if (!proj) return;

    const reportPayload = {
      generated_at: new Date().toISOString(),
      tool: "QualityHub SQA Control Center",
      project: proj,
      calculated_health_score: calculateHealthScore(proj.metrics),
      health_status: classifyHealthStatus(calculateHealthScore(proj.metrics), proj.metrics.critical_bugs)
    };

    const blob = new Blob([JSON.stringify(reportPayload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reporte-salud-${proj.id.toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Reporte exportado en formato JSON.");
  });
});
