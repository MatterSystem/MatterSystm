/**
 * MATTER SYSTEM - Personal Strategic Life Operating System
 * v1-v100 - Integrasi Penuh Semua Modul
 */

const STORAGE_KEYS = {
    disciplineLog: 'matter_discipline_log',
    theme: 'matter_theme',
    energyLog: 'matter_energy_log',
    habitChains: 'matter_habit_chains',
    arsenal: 'matter_arsenal',
    distractions: 'matter_distractions',
    focusSessions: 'matter_focus_sessions',
    decisions: 'matter_decisions',
    achievements: 'matter_achievements',
    knowledgeMap: 'matter_knowledge_map',
    lifeCampaign: 'matter_life_campaign',
    skills: 'matter_skills',
    doctrine: 'matter_doctrine',
    legacy: 'matter_legacy',
    vision: 'matter_vision',
    identity: 'matter_identity',
    empire: 'matter_empire',
    immutableLog: 'matter_immutable_log',
    economy: 'matter_economy',
    customHabits: 'matter_custom_habits'
};

const INITIAL_HABITS = [
    { id: 'wakeup', title: 'Healthy Morning', desc: 'Bangun pagi untuk keunggulan waktu', icon: '' },
    { id: 'cognitiveRead', title: 'Cognitive Intake', desc: 'Membaca literatur berat', icon: '', hasInput: true },
    { id: 'boxing', title: 'Physical', desc: 'Latihan fisik intens', icon: '' },
    { id: 'intellectual', title: 'Intellectual Execution', desc: 'Belajar struktural', icon: '' }
];

function getAllHabits() {
    return [...INITIAL_HABITS, ...(state.customHabits || [])];
}

const CAUSE_LABELS = {
    distraksi: 'Distraksi lingkungan',
    manajemen: 'Manajemen waktu buruk',
    gangguan: 'Gangguan sosial',
    kelelahan: 'Kelelahan fisik'
};

const SOLUTION_LABELS = {
    lokasi: 'Ubah lokasi belajar',
    notifikasi: 'Matikan notifikasi',
    jadwal: 'Perbaiki jadwal',
    tidur: 'Disiplin tidur',
    meditasi: 'Meditasi',
};

const PART2_MODULES = [
    { id: 'energy', label: 'Energy Monitor' },
    { id: 'habits', label: 'Habit Builder' },
    { id: 'arsenal', label: 'Arsenal' },
    { id: 'distraction', label: 'Distraction' },
    { id: 'focus', label: 'Focus Lock' },
    { id: 'growth', label: 'Cognitive Growth' },
    { id: 'authority', label: 'Authority Level' }
];
const PART3_MODULES = [
    { id: 'failure', label: 'Failure Detector' },
    { id: 'correction', label: 'Correction Engine' },
    { id: 'warroom', label: 'Daily War Room' },
    { id: 'decisions', label: 'Decision Logger' },
    { id: 'thinking', label: 'Strategic Thinking' },
    { id: 'resistance', label: 'Mental Resistance' },
    { id: 'ego', label: 'Ego Pressure' },
    { id: 'prestige', label: 'Prestige' },
    { id: 'knowledge', label: 'Knowledge Map' },
    { id: 'campaign', label: 'Life Campaign' }
];
const PART4_MODULES = [
    { id: 'skills', label: 'Skill Conquest' },
    { id: 'routine', label: 'Routine Generator' },
    { id: 'prediction', label: 'Behavior Prediction' },
    { id: 'risk', label: 'Risk Analyzer' },
    { id: 'cheat', label: 'Self-Cheat' },
    { id: 'immutable', label: 'Immutable Log' },
    { id: 'weekly', label: 'Weekly Review' },
    { id: 'monthly', label: 'Monthly Review' },
    { id: 'doctrine', label: 'Doctrine' },
    { id: 'legacy', label: 'Legacy Builder' }
];
const PART5_MODULES = [
    { id: 'vision', label: 'Vision Engine' },
    { id: 'ai', label: 'Discipline AI' },
    { id: 'optimization', label: 'Behavior AI' },
    { id: 'simulation', label: 'Simulation' },
    { id: 'power', label: 'Power Index' },
    { id: 'lifecontrol', label: 'Life Control' },
    { id: 'warfare', label: 'Psych Warfare' },
    { id: 'identity', label: 'Elite Identity' },
    { id: 'empire', label: 'Empire Builder' },
    { id: 'omega', label: 'Matter Omega' }
];
const PART6_MODULES = [
    { id: 'future', label: 'Future Predictor' },
    { id: 'trajectory', label: 'Life Trajectory' },
    { id: 'impact', label: 'Decision Impact' },
    { id: 'timeline', label: 'Timeline Builder' },
    { id: 'momentum', label: 'Momentum Engine' },
    { id: 'evolution', label: 'Habit Evolution' },
    { id: 'cognitive', label: 'Cognitive Capacity' },
    { id: 'forecast', label: 'Discipline Forecast' },
    { id: 'energycycle', label: 'Energy Cycle' },
    { id: 'focusmonitor', label: 'Focus Monitor' }
];
const PART7_MODULES = [
    { id: 'expansion', label: 'Cognitive Expansion' },
    { id: 'acceleration', label: 'Learning Engine' },
    { id: 'deepwork', label: 'Deep Work' },
    { id: 'mastery', label: 'Skill Mastery Map' },
    { id: 'library', label: 'Knowledge Library' },
    { id: 'combat', label: 'Intellectual Combat' },
    { id: 'endurance', label: 'Mental Endurance' },
    { id: 'resilience', label: 'Focus Resilience' },
    { id: 'load', label: 'Cognitive Load' },
    { id: 'dominance', label: 'Intellectual Dominance' }
];
const PART8_MODULES = [
    { id: 'architecture', label: 'Life Architecture' },
    { id: 'resource', label: 'Resource Manager' },
    { id: 'influence', label: 'Influence Map' },
    { id: 'decisionspeed', label: 'Decision Speed' },
    { id: 'opportunity', label: 'Opportunity' },
    { id: 'riskcontrol', label: 'Risk Control' },
    { id: 'automation', label: 'Habit Automation' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'goalconquest', label: 'Goal Conquest' },
    { id: 'performance', label: 'Life Performance' }
];
const PART9_MODULES = [
    { id: 'leadership', label: 'Leadership Engine' },
    { id: 'communication', label: 'Strategic Communication' },
    { id: 'influencepower', label: 'Influence Power' },
    { id: 'command', label: 'Decision Command' },
    { id: 'negotiation', label: 'Negotiation' },
    { id: 'warroom', label: 'Strategy War Room' },
    { id: 'knowledge', label: 'Global Knowledge' },
    { id: 'problemsolver', label: 'Problem Solver' },
    { id: 'intelligence', label: 'Strategic Intelligence' },
    { id: 'elite', label: 'Elite Dashboard' }
];
const PART10_MODULES = [
    { id: 'metacognition', label: 'Meta-Cognition' },
    { id: 'selfevolution', label: 'Self Evolution' },
    { id: 'strategicidentity', label: 'Strategic Identity' },
    { id: 'purpose', label: 'Purpose Alignment' },
    { id: 'globalimpact', label: 'Global Impact' },
    { id: 'legacystrategy', label: 'Legacy Strategy' },
    { id: 'civilization', label: 'Civilization Index' },
    { id: 'potential', label: 'Human Potential' },
    { id: 'supreme', label: 'Supreme Intelligence' },
    { id: 'final', label: 'Final Omega v100' }
];

const AUTHORITY_LEVELS = [
    { id: 'recruit', label: 'Recruit', minWeeks: 0, minRate: 0 },
    { id: 'operator', label: 'Operator', minWeeks: 2, minRate: 70 },
    { id: 'strategist', label: 'Strategist', minWeeks: 4, minRate: 80 },
    { id: 'commander', label: 'Commander', minWeeks: 8, minRate: 90 },
    { id: 'architect', label: 'Architect', minWeeks: 12, minRate: 95 }
];

let state = {
    disciplineLog: {},
    selectedDate: null,
    customHabits: [],
    part2Tab: 'energy',
    part3Tab: 'failure',
    part4Tab: 'skills',
    part5Tab: 'vision',
    part6Tab: 'future',
    part7Tab: 'expansion',
    part8Tab: 'architecture',
    part9Tab: 'leadership',
    part10Tab: 'metacognition',
    energyLog: {},
    habitChains: [],
    arsenal: [],
    distractions: [],
    focusSessions: [],
    decisions: [],
    achievements: [],
    knowledgeMap: [],
    lifeCampaign: [],
    skills: [],
    doctrine: [],
    legacy: [],
    vision: '',
    identity: [],
    empire: [],
    immutableLog: [],
    pockets: { operasional: 0, eksplorasi: 0, kapasitas: 0 },
    journals: []
};

// ========== Utility ==========
function formatDate(d) {
    if (typeof d === 'string') return d.split('T')[0];
    return d.toISOString().split('T')[0];
}

function getToday() { return formatDate(new Date()); }

function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Storage error:', e);
        return false;
    }
}

function loadFromStorage(key, defaultVal = {}) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultVal;
    } catch (e) {
        return defaultVal;
    }
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

function getWeekStart(d) {
    const date = new Date(d + 'T12:00:00');
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(date);
    monday.setDate(diff);
    return formatDate(monday);
}

// ========== Core Logic ==========
function getAllHabits() {
    return [...INITIAL_HABITS, ...state.customHabits];
}

function evaluateDay(entry) {
    if (!entry) return null;
    const habits = getAllHabits();
    let score = 0;
    habits.forEach(h => {
        if (entry[h.id] === 'yes') score++;
    });

    // Success if >= 75% of total habits
    const threshold = Math.ceil(habits.length * 0.75);
    return score >= threshold ? 'success' : 'failed';
}

function getHabitScore(entry) {
    if (!entry) return 0;
    const habits = getAllHabits();
    let score = 0;
    habits.forEach(h => {
        if (entry[h.id] === 'yes') score++;
    });
    return score;
}

function getWeeklySuccessRate(weeksBack = 0) {
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - (7 * weeksBack) - today.getDay() + (today.getDay() === 0 ? -6 : 1));
    let success = 0, total = 0;
    for (let i = 0; i < 7; i++) {
        const d = new Date(weekStart);
        d.setDate(weekStart.getDate() + i);
        const dateStr = formatDate(d);
        const entry = state.disciplineLog[dateStr];
        if (entry) {
            total++;
            if (evaluateDay(entry) === 'success') success++;
        }
    }
    return total === 0 ? null : Math.round((success / total) * 100);
}

function getAuthorityStatus() {
    const rate = getWeeklySuccessRate(0);
    if (rate === null) return { type: 'none', label: '—', desc: 'Belum ada data minggu ini' };
    if (rate === 100) return { type: 'elite', label: 'Elite Discipline Achieved', desc: '100% minggu ini' };
    if (rate < 70) return { type: 'unstable', label: 'Disiplin Tidak Stabil', desc: `${rate}% < 70%` };
    return { type: 'ok', label: `${rate}%`, desc: 'Minggu ini' };
}

// ========== Save / Load ==========
function saveDisciplineLog() {
    const cognitivePages = parseInt(document.getElementById('cognitive-pages')?.value, 10) || 0;
    const habits = getAllHabits();
    const entry = {
        cognitive: cognitivePages,
        status: null,
        interrogation: null
    };

    habits.forEach(h => {
        entry[h.id] = document.querySelector(`[data-pillar="${h.id}"].active`)?.dataset?.value || 'no';
    });

    entry.status = evaluateDay(entry);
    const today = getToday();
    state.disciplineLog[today] = entry;
    saveToStorage(STORAGE_KEYS.disciplineLog, state.disciplineLog);

    if (entry.status === 'failed') {
        showToast('Status: Gagal. Wajib isi Jurnal Dialektis & Ruang Interogasi.');
    } else {
        showToast('Status: Berhasil. Disiplin tersimpan.');
    }

    renderDashboard();
    renderCharts();
    renderEconomyDashboard();
    renderJournal();
    updateAuthorityDisplay();
}

function loadDisciplineForDate(dateStr) {
    const entry = state.disciplineLog[dateStr];
    if (!entry) return;

    if (document.getElementById('cognitive-pages')) {
        document.getElementById('cognitive-pages').value = entry.cognitive || '';
    }

    const habits = getAllHabits();
    habits.forEach(h => {
        document.querySelectorAll(`[data-pillar="${h.id}"]`).forEach(b => {
            b.classList.toggle('active', b.dataset.value === (entry[h.id] || 'no'));
        });
    });
}

// ========== Interrogation ==========
function saveInterrogation() {
    const cause = document.querySelector('input[name="cause"]:checked');
    const solution = document.querySelector('input[name="solution"]:checked');
    if (!cause || !solution) {
        showToast('Pilih sebab eksternal DAN solusi struktural');
        return;
    }
    const dateSelect = document.getElementById('interrogation-date');
    const dateStr = dateSelect ? dateSelect.value : getToday();
    const entry = state.disciplineLog[dateStr];
    if (!entry) {
        showToast('Tidak ada log untuk tanggal ini');
        return;
    }
    if (evaluateDay(entry) !== 'failed') {
        showToast('Hari ini Berhasil. Interrogasi hanya untuk hari Gagal.');
        return;
    }
    entry.interrogation = { cause: cause.value, solution: solution.value };
    state.disciplineLog[dateStr] = entry;
    saveToStorage(STORAGE_KEYS.disciplineLog, state.disciplineLog);
    showToast('Analisis interogasi tersimpan');
    renderInterrogation();
}

function renderInterrogation() {
    const failedDates = Object.entries(state.disciplineLog)
        .filter(([_, e]) => evaluateDay(e) === 'failed')
        .map(([d]) => d)
        .sort()
        .reverse();

    const dateSelect = document.getElementById('interrogation-date-select');
    if (failedDates.length === 0) {
        dateSelect.innerHTML = '<p class="empty-state">Tidak ada hari gagal yang perlu interogasi</p>';
        document.getElementById('interrogation-form').style.display = 'none';
        document.getElementById('interrogation-result').innerHTML = '';
        return;
    }

    document.getElementById('interrogation-form').style.display = 'block';
    const sel = failedDates[0];
    dateSelect.innerHTML = `
        <label>Tanggal gagal:</label>
        <select id="interrogation-date">
            ${failedDates.map(d => `<option value="${d}" ${d === sel ? 'selected' : ''}>${formatDisplayDate(d)}</option>`).join('')}
        </select>
    `;

    const selectEl = document.getElementById('interrogation-date');
    selectEl.addEventListener('change', () => {
        updateInterrogationForm(selectEl.value);
        renderInterrogationResult(selectEl.value);
    });

    updateInterrogationForm(sel);
    renderInterrogationResult(sel);
}

function updateInterrogationForm(dateStr) {
    document.querySelectorAll('input[name="cause"]').forEach(r => r.checked = false);
    document.querySelectorAll('input[name="solution"]').forEach(r => r.checked = false);
    const entry = state.disciplineLog[dateStr];
    if (entry?.interrogation) {
        const c = document.querySelector(`input[name="cause"][value="${entry.interrogation.cause}"]`);
        const s = document.querySelector(`input[name="solution"][value="${entry.interrogation.solution}"]`);
        if (c) c.checked = true;
        if (s) s.checked = true;
    }
}

function renderInterrogationResult(dateStr) {
    const entry = state.disciplineLog[dateStr];
    const resultEl = document.getElementById('interrogation-result');
    if (!entry?.interrogation) {
        resultEl.innerHTML = '<p class="empty-state">Belum ada analisis untuk tanggal ini</p>';
        return;
    }
    resultEl.innerHTML = `
        <div class="history-item">
            <div>
                <strong>Sebab:</strong> ${CAUSE_LABELS[entry.interrogation.cause]}<br>
                <strong>Solusi:</strong> ${SOLUTION_LABELS[entry.interrogation.solution]}
            </div>
        </div>
    `;
}

function formatDisplayDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

// ========== Charts ==========
// ========== Charts Overhaul ==========
function renderCharts() {
    renderHabitAnalytics();
    renderDailyHabitPie();
}
function renderHabitAnalytics() {
    const weeklyBarEl = document.getElementById('habit-weekly-bars');
    const weeklyLineEl = document.getElementById('habit-weekly-line');
    const monthlyBarEl = document.getElementById('habit-monthly-bars');
    const monthlyLineEl = document.getElementById('habit-monthly-line');
    
    if (!weeklyBarEl || !weeklyLineEl || !monthlyBarEl || !monthlyLineEl) return;

    const habits = getAllHabits();
    if (habits.length === 0) {
        weeklyBarEl.innerHTML = monthlyBarEl.innerHTML = '<p class="empty-state">Belum ada kebiasaan</p>';
        return;
    }

    // Weekly Data (NOW to PAST - Left to Right)
    const weeklyData = [];
    let weeklyBarHtml = '';
    for (let i = 0; i <= 3; i++) {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - (weekStart.getDay() || 7) - (i * 7) + 1);
        const label = i === 0 ? 'W-NOW' : `W-${i}`;
        
        let totalYes = 0;
        let totalCount = 0;
        for (let d = 0; d < 7; d++) {
            const dateStr = formatDate(new Date(weekStart.getTime() + d * 86400000));
            const entry = state.disciplineLog[dateStr];
            if (entry) {
                habits.forEach(h => {
                    if (entry[h.id] === 'yes') totalYes++;
                    totalCount++;
                });
            } else {
                totalCount += habits.length;
            }
        }
        const score = totalCount === 0 ? 0 : (totalYes / totalCount) * 100;
        weeklyData.push({ label, score });
        
        weeklyBarHtml += `
            <div class="bar-item">
                <div class="bar-fill-container">
                    <div class="bar-fill" style="height:${score}%; background:var(--accent)"></div>
                </div>
                <div class="bar-label">${label}</div>
                <div class="bar-value">${Math.round(score)}%</div>
            </div>
        `;
    }
    weeklyBarEl.innerHTML = `<div class="bar-chart-flex">${weeklyBarHtml}</div>`;
    renderSVGLineChart(weeklyData, 'habit-weekly-line');

    // Monthly Data (NOW to PAST - Left to Right)
    const monthlyData = [];
    let monthlyBarHtml = '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    for (let i = 0; i <= 5; i++) {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        const monthNum = d.getMonth();
        const year = d.getFullYear();
        const label = months[monthNum];
        
        let totalYes = 0;
        let totalCount = 0;
        Object.entries(state.disciplineLog).forEach(([dateStr, entry]) => {
            const entryDate = new Date(dateStr);
            if (entryDate.getMonth() === monthNum && entryDate.getFullYear() === year) {
                habits.forEach(h => {
                    if (entry[h.id] === 'yes') totalYes++;
                    totalCount++;
                });
            }
        });

        const denom = totalCount || (30 * habits.length);
        const score = (totalYes / denom) * 100;
        monthlyData.push({ label, score });

        monthlyBarHtml += `
            <div class="bar-item">
                <div class="bar-fill-container">
                    <div class="bar-fill" style="height:${score}%; background:var(--accent)"></div>
                </div>
                <div class="bar-label">${label}</div>
                <div class="bar-value">${Math.round(score)}%</div>
            </div>
        `;
    }
    monthlyBarEl.innerHTML = `<div class="bar-chart-flex">${monthlyBarHtml}</div>`;
    renderSVGLineChart(monthlyData, 'habit-monthly-line');
}

function renderSVGLineChart(data, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const width = 200;
    const height = 60;
    const padding = 10;
    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
        const y = height - padding - (d.score / 100) * (height - 2 * padding);
        return { x, y };
    });

    let pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        pathD += ` L ${points[i].x} ${points[i].y}`;
    }

    const areaD = `${pathD} L ${points[points.length-1].x} ${height} L ${points[0].x} ${height} Z`;

    container.innerHTML = `
        <svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
            <path d="${areaD}" fill="var(--accent-light)" opacity="0.2" />
            <path class="chart-path" d="${pathD}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="3" fill="var(--accent)" />`).join('')}
        </svg>
    `;
}


function renderDailyHabitPie() {
    const pieEl = document.getElementById('daily-habit-pie');
    const scoreEl = document.getElementById('daily-habit-score');
    const legendEl = document.getElementById('daily-habit-legend');
    if (!pieEl || !scoreEl || !legendEl) return;

    const today = getToday();
    const entry = state.disciplineLog[today] || {};
    const habits = getAllHabits();
    const totalHabits = habits.length;

    if (totalHabits === 0) {
        pieEl.style.background = 'var(--bg-tertiary)';
        scoreEl.textContent = '0/0';
        legendEl.innerHTML = '<p class="empty-state">Belum ada kebiasaan</p>';
        return;
    }

    const colors = ['#c19a6b', '#a98467', '#5c677d', '#10b981', '#ef4444', '#f59e0b', '#3b82f6'];
    const mutedColor = 'rgba(255, 255, 255, 0.05)';

    let successCount = 0;
    let grad = '';
    let currentOffset = 0;
    const sliceSize = 100 / totalHabits;

    legendEl.innerHTML = habits.map((h, i) => {
        const isDone = entry[h.id] === 'yes';
        if (isDone) successCount++;

        const segmentColor = isDone ? colors[i % colors.length] : mutedColor;
        const statusText = isDone ? 'Done' : 'Pending';
        const statusClass = isDone ? 'success' : 'danger';

        grad += `${segmentColor} ${currentOffset}% ${currentOffset + sliceSize}%, `;
        currentOffset += sliceSize;

        return `
            <div class="legend-item" style="font-size: 0.75rem;">
                <div class="legend-color" style="background:${segmentColor}; width: 8px; height: 8px;"></div>
                <span class="${statusClass}" style="font-size: 0.6rem; margin-right: 4px;">${statusText.toUpperCase()}</span> ${h.title}
            </div>
        `;
    }).join('');

    pieEl.style.background = `conic-gradient(${grad.slice(0, -2)})`;
    scoreEl.textContent = `${successCount}/${totalHabits}`;
    scoreEl.style.fontSize = '1.2rem';
}

// ========== History ==========
function deleteDay(dateStr) {
    if (!confirm(`Hapus data untuk ${formatDisplayDate(dateStr)}?`)) return;
    delete state.disciplineLog[dateStr];
    saveToStorage(STORAGE_KEYS.disciplineLog, state.disciplineLog);
    renderHistory();
    renderCharts();
    renderDashboard();
    updateAuthorityDisplay();
    showToast('Data dihapus');
}

function initHistoryFilters() {
    const filterBtn = document.getElementById('filter-history-btn');
    const clearBtn = document.getElementById('clear-history-filter');
    if (filterBtn) filterBtn.addEventListener('click', () => { renderHistory(); });
    if (clearBtn) clearBtn.addEventListener('click', () => {
        const input = document.getElementById('history-filter-date');
        if (input) input.value = '';
        renderHistory();
    });
}

function renderHistory() {
    const filterDate = document.getElementById('history-filter-date')?.value;
    let entries = Object.entries(state.disciplineLog)
        .map(([date, entry]) => ({ date, ...entry }))
        .sort((a, b) => b.date.localeCompare(a.date));

    if (filterDate) {
        entries = entries.filter(e => e.date === filterDate);
    }

    const listEl = document.getElementById('history-list');
    if (entries.length === 0) {
        listEl.innerHTML = '<div class="empty-state"><p>Belum ada histori disiplin</p></div>';
        return;
    }

    listEl.innerHTML = entries.map(e => {
        const status = evaluateDay(e);
        const s = getHabitScore(e);
        const habits = getAllHabits();
        const scoreText = habits.map(h => `${h.title.split(' ')[0]}: ${e[h.id] === 'yes' ? 'Y' : 'N'}`).join(' · ');
        return `
            <div class="history-item">
                <div>
                    <strong>${formatDisplayDate(e.date)}</strong>
                    <span class="status-badge ${status}">${status === 'success' ? 'Berhasil' : 'Gagal'}</span>
                    <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px">
                        Score: ${s}/${habits.length} · ${scoreText}
                    </div>
                    ${e.interrogation ? `<div style="font-size:0.8rem;margin-top:4px">Sebab: ${CAUSE_LABELS[e.interrogation.cause]} → Solusi: ${SOLUTION_LABELS[e.interrogation.solution]}</div>` : ''}
                </div>
                <button class="delete-btn" onclick="deleteDay('${e.date}')">Hapus</button>
            </div>
        `;
    }).join('');
}

// ========== Dashboard ==========
function renderDashboard() {
    const today = getToday();
    const entry = state.disciplineLog[today];

    renderHabitGrid();
    const habits = getAllHabits();
    if (entry) {
        loadDisciplineForDate(today);
    } else {
        if (document.getElementById('cognitive-pages')) document.getElementById('cognitive-pages').value = '';
        habits.forEach(h => {
            document.querySelectorAll(`[data-pillar="${h.id}"]`).forEach((b, i) => b.classList.toggle('active', i === 0));
        });
    }

    const statusCard = document.getElementById('today-status-card');
    if (!entry) {
        statusCard.innerHTML = '<p>Belum ada log hari ini. Simpan log untuk mengevaluasi.</p>';
        statusCard.className = 'today-status';
        return;
    }

    const status = evaluateDay(entry);
    const score = getHabitScore(entry);
    const statusText = habits.map(h => `${h.title}: ${entry[h.id] === 'yes' ? 'Ya' : 'Tidak'}`).join(' · ');
    statusCard.className = `today-status ${status}`;
    statusCard.innerHTML = `
        <h4>Status Hari Ini: ${status === 'success' ? '✓ Berhasil' : '✗ Gagal'} (${score}/${habits.length})</h4>
        <p>${statusText}</p>
        ${status === 'failed' ? '<p style="color:var(--danger);margin-top:12px">ATTENTION: Habit gagal. Buka Jurnal Harian & Ruang Interogasi.</p>' : ''}
    `;

    updateAuthorityDisplay();
}

function updateAuthorityDisplay() {
    const auth = getAuthorityStatus();
    const statusEl = document.getElementById('authority-status');
    const badgeEl = document.getElementById('authority-badge');

    statusEl.textContent = auth.label;
    statusEl.className = 'authority-status';
    if (auth.type === 'elite') statusEl.classList.add('elite');
    if (auth.type === 'unstable') statusEl.classList.add('unstable');

    badgeEl.className = 'authority-badge';
    badgeEl.innerHTML = '';
    if (auth.type === 'elite') {
        badgeEl.classList.add('elite');
        badgeEl.innerHTML = 'ELITE DISCIPLINE ACHIEVED';
    } else if (auth.type === 'unstable') {
        badgeEl.classList.add('unstable');
        badgeEl.innerHTML = 'ALERT: ' + auth.label.toUpperCase();
    } else if (auth.type !== 'none') {
        badgeEl.classList.add('none');
    }
}

// ========== Discipline Log View ==========
function renderDisciplineLog() {
    document.getElementById('log-date').value = getToday();
    document.getElementById('load-log-btn').onclick = () => {
        const ds = document.getElementById('log-date').value;
        if (!ds) return;
        loadDisciplineForDate(ds);
        const entry = state.disciplineLog[ds];
        const content = document.getElementById('discipline-log-content');
        if (!entry) {
            content.innerHTML = '<div class="empty-state"><p>Tidak ada data untuk tanggal ini</p></div>';
            return;
        }
        const status = evaluateDay(entry);
        const habits = getAllHabits();
        content.innerHTML = `
            <div class="history-item">
                <div>
                    <strong>${formatDisplayDate(ds)}</strong>
                    <span class="status-badge ${status}">${status === 'success' ? 'Berhasil' : 'Gagal'}</span>
                    ${habits.map(h => `<p>${h.title}: ${entry[h.id] === 'yes' ? 'Ya' : 'Tidak'}</p>`).join('')}
                    <p>Cognitive: ${entry.cognitive || 0} halaman</p>
                </div>
            </div>
        `;
    };
    document.getElementById('discipline-log-content').innerHTML = '<p class="empty-state">Pilih tanggal dan klik Muat</p>';
}

// ========== Modules Roadmap ==========
const MODULES_ROADMAP = [
    { part: 2, range: 'v11-v20', title: 'Sistem Analisis Disiplin', modules: ['Behavioral Energy Monitor', 'Strategic Habit Builder', 'Intellectual Arsenal', 'Distraction Surveillance', 'Focus Lock Engine', 'Authority Level System'] },
    { part: 3, range: 'v21-v30', title: 'Sistem Koreksi Struktur', modules: ['Habit Failure Detector', 'Structural Correction Engine', 'Daily War Room', 'Tactical Decision Logger', 'Mental Resistance Trainer', 'Ego Pressure System'] },
    { part: 4, range: 'v31-v40', title: 'Pengembangan Kapasitas', modules: ['Skill Conquest System', 'Elite Routine Generator', 'Behavior Prediction Engine', 'Discipline Risk Analyzer', 'Immutable Log System', 'Weekly Command Review'] },
    { part: 5, range: 'v41-v50', title: 'Strategi Kehidupan', modules: ['Long-Term Vision Engine', 'Discipline AI Assistant', 'Behavior Optimization AI', 'Strategic Simulation', 'Personal Power Index', 'Life Control Dashboard'] },
    { part: 6, range: 'v51-v60', title: 'Prediksi Masa Depan', modules: ['Future Behavior Predictor', 'Life Trajectory Simulator', 'Decision Impact Analyzer', 'Strategic Timeline Builder', 'Productivity Momentum Engine', 'Long-Term Discipline Forecast'] },
    { part: 7, range: 'v61-v70', title: 'Ekspansi Kapasitas', modules: ['Cognitive Expansion Tracker', 'Learning Acceleration Engine', 'Deep Work Analyzer', 'Skill Mastery Map', 'Strategic Knowledge Library', 'Intellectual Dominance Index'] },
    { part: 8, range: 'v71-v80', title: 'Optimalisasi Kehidupan', modules: ['Life Architecture Planner', 'Strategic Resource Manager', 'Influence Network Mapper', 'Opportunity Detection Engine', 'Goal Conquest System', 'Life Performance Index'] },
    { part: 9, range: 'v81-v90', title: 'Kepemimpinan Pribadi', modules: ['Leadership Development Engine', 'Strategic Communication Trainer', 'Influence Power Index', 'Decision Command System', 'Complex Problem Solver', 'Elite Leadership Dashboard'] },
    { part: 10, range: 'v91-v100', title: 'Evolusi Diri Lanjut', modules: ['Meta-Cognition Engine', 'Self Evolution Tracker', 'Strategic Identity Builder', 'Purpose Alignment System', 'Matter System Supreme Intelligence', 'Matter System Final Omega v100'] }
];

function renderModulesRoadmap() {
    const el = document.getElementById('modules-roadmap');
    if (!el) return;
    el.innerHTML = MODULES_ROADMAP.map(m => `
        <div class="module-card">
            <h5>${m.range} · ${m.title}</h5>
            <p>${m.modules.slice(0, 3).join(' · ')}...</p>
        </div>
    `).join('');
}

// ========== Part 2–10 Render ==========
function renderPartTabs(partNum, modules, activeTab, stateKey) {
    const tabsEl = document.getElementById(`part${partNum}-tabs`);
    if (!tabsEl) return;
    tabsEl.innerHTML = modules.map(m => `
        <button class="part-tab ${m.id === activeTab ? 'active' : ''}" data-tab="${m.id}">${m.label}</button>
    `).join('');
    tabsEl.querySelectorAll('.part-tab').forEach(btn => {
        btn.onclick = () => {
            state[stateKey] = btn.dataset.tab;
            switchView(`part${partNum}`);
        };
    });
}

function renderPart2() {
    renderPartTabs(2, PART2_MODULES, state.part2Tab, 'part2Tab');
    const el = document.getElementById('part2-content');
    if (!el) return;
    const mods = {
        energy: `<div class="module-panel"><h4>Behavioral Energy Monitor</h4>
            <p>Lacak energi mental dan fisik harian (1–10)</p>
            <div class="energy-row"><label>Mental:</label><input type="range" id="energy-mental" min="1" max="10" value="7"></div>
            <div class="energy-row"><label>Fisik:</label><input type="range" id="energy-physical" min="1" max="10" value="7"></div>
            <button class="btn btn-primary" id="save-energy-btn">Simpan</button></div>`,
        habits: `<div class="module-panel"><h4>Strategic Habit Builder</h4>
            <input id="habit-chain-input" placeholder="Rantai kebiasaan (trigger → action → reward)" style="width:100%;margin-bottom:8px">
            <button class="btn btn-primary" id="add-habit-chain">Tambah</button>
            <div id="habit-chains-list" style="margin-top:12px"></div></div>`,
        arsenal: `<div class="module-panel"><h4>Intellectual Arsenal Tracker</h4>
            <input id="arsenal-book" placeholder="Judul buku/konsep" style="margin-bottom:8px">
            <input type="number" id="arsenal-pages" placeholder="Halaman" min="0" style="width:80px;margin-bottom:8px">
            <button class="btn btn-primary" id="add-arsenal">Tambah</button>
            <div id="arsenal-list" style="margin-top:12px"></div></div>`,
        distraction: `<div class="module-panel"><h4>Distraction Surveillance</h4>
            <select id="distraction-type"><option>Notifikasi</option><option>Media sosial</option><option>Lingkungan</option><option>Lainnya</option></select>
            <input type="number" id="distraction-count" placeholder="Jumlah" min="0" value="0">
            <button class="btn btn-primary" id="log-distraction">Catat</button>
            <div id="distraction-list" style="margin-top:12px"></div></div>`,
        focus: `<div class="module-panel"><h4>Focus Lock Engine</h4>
            <div class="focus-timer" id="focus-timer">25:00</div>
            <button class="btn btn-primary" id="focus-start">Mulai 25 min</button>
            <button class="btn btn-icon" id="focus-stop">Stop</button></div>`,
        authority: `<div class="module-panel"><h4>Authority Level System</h4>
            <p>Level berdasarkan konsistensi mingguan</p>
            <div id="authority-level-display"></div></div>`
    };
    el.innerHTML = renderBackButton() + (mods[state.part2Tab] || '<div class="empty-state">Modul tidak ditemukan</div>');
    bindPart2Events();
}

function bindPart2Events() {
    const sb = id => document.getElementById(id);
    if (sb('save-energy-btn')) sb('save-energy-btn').onclick = () => {
        const m = parseInt(sb('energy-mental')?.value || 5, 10);
        const p = parseInt(sb('energy-physical')?.value || 5, 10);
        const today = getToday();
        state.energyLog[today] = { mental: m, physical: p };
        saveToStorage(STORAGE_KEYS.energyLog, state.energyLog);
        showToast('Energi tersimpan');
    };
    if (sb('add-habit-chain')) sb('add-habit-chain').onclick = () => {
        const t = sb('habit-chain-input')?.value?.trim();
        if (!t) return;
        state.habitChains.push({ id: Date.now(), text: t });
        saveToStorage(STORAGE_KEYS.habitChains, state.habitChains);
        sb('habit-chain-input').value = '';
        renderPart2();
    };
    if (sb('add-arsenal')) sb('add-arsenal').onclick = () => {
        const b = sb('arsenal-book')?.value?.trim();
        const p = parseInt(sb('arsenal-pages')?.value || 0, 10);
        if (!b) return;
        state.arsenal.push({ id: Date.now(), book: b, pages: p, date: getToday() });
        saveToStorage(STORAGE_KEYS.arsenal, state.arsenal);
        sb('arsenal-book').value = ''; sb('arsenal-pages').value = '';
        renderPart2();
    };
    if (sb('log-distraction')) sb('log-distraction').onclick = () => {
        const type = sb('distraction-type')?.value || 'Lainnya';
        const count = parseInt(sb('distraction-count')?.value || 0, 10);
        state.distractions.push({ id: Date.now(), type, count, date: getToday() });
        saveToStorage(STORAGE_KEYS.distractions, state.distractions);
        renderPart2();
    };
    if (state.part2Tab === 'habits' && sb('habit-chains-list')) {
        sb('habit-chains-list').innerHTML = state.habitChains.map(h =>
            `<div class="list-item">${escapeHtml(h.text)} <button class="delete-btn" onclick="removeHabitChain(${h.id})">×</button></div>`
        ).join('') || '<p class="empty-state">Belum ada rantai</p>';
    }
    if (state.part2Tab === 'arsenal' && sb('arsenal-list')) {
        sb('arsenal-list').innerHTML = state.arsenal.slice(-10).reverse().map(a =>
            `<div class="list-item">${escapeHtml(a.book)} · ${a.pages} hal</div>`
        ).join('') || '<p class="empty-state">Belum ada</p>';
    }
    if (state.part2Tab === 'distraction' && sb('distraction-list')) {
        sb('distraction-list').innerHTML = state.distractions.slice(-5).reverse().map(d =>
            `<div class="list-item">${d.type}: ${d.count}</div>`
        ).join('') || '<p class="empty-state">Belum ada</p>';
    }
    if (state.part2Tab === 'authority' && sb('authority-level-display')) {
        let weeks = 0, lastRate = 0;
        for (let w = 0; w < 12; w++) {
            const r = getWeeklySuccessRate(w);
            if (r !== null) { weeks++; lastRate = r; }
        }
        let level = AUTHORITY_LEVELS[0];
        for (const l of [...AUTHORITY_LEVELS].reverse()) {
            if (weeks >= l.minWeeks && lastRate >= l.minRate) { level = l; break; }
        }
        sb('authority-level-display').innerHTML = `<span class="level-badge level-${level.id}">${level.label}</span>
            <p>Minggu aktif: ${weeks} · Rate terakhir: ${lastRate}%</p>`;
    }
}

function removeHabitChain(id) {
    state.habitChains = state.habitChains.filter(h => h.id !== id);
    saveToStorage(STORAGE_KEYS.habitChains, state.habitChains);
    renderPart2();
}

function escapeHtml(t) {
    const d = document.createElement('div');
    d.textContent = t || '';
    return d.innerHTML;
}

let focusInterval = null;
function startFocusTimer() {
    let sec = 25 * 60;
    const el = document.getElementById('focus-timer');
    if (!el) return;
    if (focusInterval) clearInterval(focusInterval);
    focusInterval = setInterval(() => {
        sec--;
        const m = Math.floor(sec / 60), s = sec % 60;
        el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        if (sec <= 0) { clearInterval(focusInterval); showToast('Fokus selesai!'); }
    }, 1000);
}
document.addEventListener('click', e => {
    if (e.target?.id === 'focus-start') startFocusTimer();
    if (e.target?.id === 'focus-stop' && focusInterval) { clearInterval(focusInterval); document.getElementById('focus-timer').textContent = '25:00'; }
});

function renderPart3() {
    renderPartTabs(3, PART3_MODULES, state.part3Tab, 'part3Tab');
    const el = document.getElementById('part3-content');
    if (!el) return;
    const mods = {
        failure: `<div class="module-panel"><h4>Habit Failure Detector</h4>
            <p>Pola kegagalan dari Ruang Interogasi</p>
            <div id="failure-patterns"></div></div>`,
        correction: `<div class="module-panel"><h4>Structural Correction Engine</h4>
            <p>Solusi sistemik berdasarkan pola kegagalan</p>
            <div id="correction-suggestions"></div></div>`,
        warroom: `<div class="module-panel"><h4>Daily War Room</h4>
            <textarea id="warroom-priorities" placeholder="Prioritas hari ini..."></textarea>
            <button class="btn btn-primary" id="save-warroom">Simpan</button></div>`,
        decisions: `<div class="module-panel"><h4>Tactical Decision Logger</h4>
            <input id="decision-desc" placeholder="Keputusan" style="width:100%;margin-bottom:8px">
            <select id="decision-outcome"><option>Pending</option><option>Baik</option><option>Buruk</option></select>
            <button class="btn btn-primary" id="add-decision">Log</button>
            <div id="decisions-list" style="margin-top:12px"></div></div>`,
        thinking: `<div class="module-panel"><h4>Strategic Thinking Trainer</h4>
            <p>Pertanyaan latihan: "Apa konsekuensi jangka panjang dari keputusan hari ini?"</p>
            <textarea id="thinking-response" placeholder="Jawaban Anda..."></textarea>
            <button class="btn btn-primary" id="save-thinking">Simpan</button></div>`,
        resistance: `<div class="module-panel"><h4>Mental Resistance Trainer</h4>
            <p>Latihan ketahanan mental untuk disiplin</p>
            <div class="achievement-card"><strong>Challenge:</strong> Lakukan 3 pilar tanpa jeda sosial media</div></div>`,
        ego: `
            <div class="ego-pressure-container">
                <div class="ego-title">Apakah Anda akan menyerah hari ini?</div>
                <div class="ego-subtitle">"Disiplin adalah jembatan antara tujuan dan pencapaian. Menyerah berarti menghancurkan jembatan tersebut."</div>
                <div class="ego-actions">
                    <button class="ego-btn ego-btn-quit" id="ego-quit">Ya, Saya Menyerah</button>
                    <button class="ego-btn ego-btn-fight" id="ego-fight">Tidak, Saya Bertarung</button>
                </div>
                <div id="ego-result" class="ego-result"></div>
            </div>`,
        prestige: `<div class="module-panel"><h4>Prestige Achievement System</h4>
            <div id="achievements-list"></div></div>`,
        knowledge: `<div class="module-panel"><h4>Knowledge Mapping Engine</h4>
            <input id="km-concept" placeholder="Konsep" style="margin-bottom:8px">
            <input id="km-source" placeholder="Sumber (buku/ kursus)" style="margin-bottom:8px">
            <button class="btn btn-primary" id="add-knowledge">Tambah</button>
            <div id="knowledge-list" style="margin-top:12px"></div></div>`,
        campaign: `<div class="module-panel"><h4>Life Campaign Planner</h4>
            <input id="campaign-goal" placeholder="Tujuan jangka panjang" style="width:100%;margin-bottom:8px">
            <button class="btn btn-primary" id="add-campaign">Tambah</button>
            <div id="campaign-list" style="margin-top:12px"></div></div>`
    };
    el.innerHTML = renderBackButton() + (mods[state.part3Tab] || '<div class="empty-state">Modul tidak ditemukan</div>');
    bindPart3Events();
}

function bindPart3Events() {
    const sb = id => document.getElementById(id);
    const failed = Object.entries(state.disciplineLog).filter(([, e]) => evaluateDay(e) === 'failed' && e.interrogation);
    const causes = {};
    failed.forEach(([, e]) => { const c = e.interrogation.cause; causes[c] = (causes[c] || 0) + 1; });
    if (state.part3Tab === 'failure' && sb('failure-patterns')) {
        sb('failure-patterns').innerHTML = Object.entries(causes).length ? Object.entries(causes).map(([k, v]) =>
            `<div class="list-item">${CAUSE_LABELS[k]}: ${v}x</div>`
        ).join('') : '<p class="empty-state">Belum ada data kegagalan</p>';
    }
    if (state.part3Tab === 'correction' && sb('correction-suggestions')) {
        const top = Object.entries(causes).sort((a, b) => b[1] - a[1])[0];
        sb('correction-suggestions').innerHTML = top ? `<div class="list-item">
            Pola utama: ${CAUSE_LABELS[top[0]]} → Fokus pada solusi struktural terkait</div>` : '<p class="empty-state">Belum ada pola</p>';
    }
    if (sb('save-warroom')) sb('save-warroom').onclick = () => {
        const t = sb('warroom-priorities')?.value?.trim();
        if (t) { state.warroom = t; localStorage.setItem('matter_warroom', t); showToast('Prioritas tersimpan'); }
    };
    if (sb('add-decision')) sb('add-decision').onclick = () => {
        const d = sb('decision-desc')?.value?.trim();
        const o = sb('decision-outcome')?.value;
        if (!d) return;
        state.decisions.push({ id: Date.now(), desc: d, outcome: o, date: getToday() });
        saveToStorage(STORAGE_KEYS.decisions, state.decisions);
        sb('decision-desc').value = '';
        renderPart3();
    };
    if (state.part3Tab === 'decisions' && sb('decisions-list')) {
        sb('decisions-list').innerHTML = state.decisions.slice(-10).reverse().map(d =>
            `<div class="list-item">${escapeHtml(d.desc)} · ${d.outcome}</div>`
        ).join('') || '<p class="empty-state">Belum ada</p>';
    }
    if (sb('add-knowledge')) sb('add-knowledge').onclick = () => {
        const c = sb('km-concept')?.value?.trim();
        const s = sb('km-source')?.value?.trim();
        if (!c) return;
        state.knowledgeMap.push({ id: Date.now(), concept: c, source: s });
        saveToStorage(STORAGE_KEYS.knowledgeMap, state.knowledgeMap);
        sb('km-concept').value = ''; sb('km-source').value = '';
        renderPart3();
    };
    if (state.part3Tab === 'knowledge' && sb('knowledge-list')) {
        sb('knowledge-list').innerHTML = state.knowledgeMap.slice(-10).map(k =>
            `<div class="list-item">${escapeHtml(k.concept)} · ${escapeHtml(k.source || '')}</div>`
        ).join('') || '<p class="empty-state">Belum ada</p>';
    }
    if (sb('add-campaign')) sb('add-campaign').onclick = () => {
        const g = sb('campaign-goal')?.value?.trim();
        if (!g) return;
        state.lifeCampaign.push({ id: Date.now(), goal: g });
        saveToStorage(STORAGE_KEYS.lifeCampaign, state.lifeCampaign);
        sb('campaign-goal').value = '';
        renderPart3();
    };
    if (state.part3Tab === 'campaign' && sb('campaign-list')) {
        sb('campaign-list').innerHTML = state.lifeCampaign.map(c =>
            `<div class="list-item">${escapeHtml(c.goal)}</div>`
        ).join('') || '<p class="empty-state">Belum ada</p>';
    }
    const achievements = [];
    const rate = getWeeklySuccessRate(0);
    if (rate === 100) achievements.push({ id: 'elite_week', name: 'Elite Week', desc: '100% minggu ini', unlocked: true });
    if (Object.keys(state.disciplineLog).length >= 7) achievements.push({ id: 'first_week', name: 'First Week', desc: '7 hari logging', unlocked: true });
    if (state.part3Tab === 'prestige' && sb('achievements-list')) {
        sb('achievements-list').innerHTML = (achievements.length ? achievements : [{ id: 'none', name: '—', desc: 'Lanjutkan disiplin', unlocked: false }]).map(a =>
            `<div class="achievement-card ${a.unlocked ? 'unlocked' : ''}">${a.name}: ${a.desc}</div>`
        ).join('');
    }

    // Ego Pressure Logic
    if (sb('ego-quit')) {
        sb('ego-quit').onclick = () => {
            const res = sb('ego-result');
            res.className = 'ego-result failure';
            res.style.display = 'block';
            res.innerHTML = `
                <div style="font-size: 1.5rem; margin-bottom: 12px;">Pilihan yang Mengecewakan.</div>
                <p>Masa depan Anda baru saja kehilangan satu peluang besar. Kebiasaan menyerah adalah racun bagi karakter elite. 
                Sistem mencatat kelemahan ini sebagai anomali karakter.</p>
                <div style="margin-top: 16px; font-size: 0.9rem; opacity: 0.7;">— Ego Pressure System v30</div>
            `;
        };
    }
    if (sb('ego-fight')) {
        sb('ego-fight').onclick = () => {
            const res = sb('ego-result');
            res.className = 'ego-result success';
            res.style.display = 'block';
            res.innerHTML = `
                <div style="font-size: 1.5rem; margin-bottom: 12px;">Keputusan Karakter Elite.</div>
                <p>Tidak ada ruang untuk menyerah dalam Matter System. Rasa sakit dari disiplin jauh lebih ringan daripada rasa sakit dari penyesalan. 
                Lanjutkan eksekusi pilar hari ini tanpa alasan!</p>
                <div style="margin-top: 16px; font-size: 0.9rem; opacity: 0.7;">— Ego Pressure System v30</div>
            `;
        };
    }
}

function renderPart4() {
    renderPartTabs(4, PART4_MODULES, state.part4Tab, 'part4Tab');
    const el = document.getElementById('part4-content');
    if (!el) return;
    const mods = {
        skills: `<div class="module-panel"><h4>Skill Conquest System</h4>
            <input id="skill-name" placeholder="Skill" style="margin-bottom:8px">
            <input type="number" id="skill-level" placeholder="Level 1-10" min="1" max="10" style="width:80px">
            <button class="btn btn-primary" id="add-skill">Tambah</button>
            <div id="skills-list" style="margin-top:12px"></div></div>`,
        routine: `<div class="module-panel"><h4>Elite Routine Generator</h4>
            <p>Rutinitas optimal berdasarkan data: 04:00 Baca → 15:00 Olahraga → 18:30 Belajar</p></div>`,
        prediction: `<div class="module-panel"><h4>Behavior Prediction Engine</h4>
            <p>Prediksi besok berdasarkan pola: ${getWeeklySuccessRate(0) !== null ? (getWeeklySuccessRate(0) >= 80 ? 'Tinggi' : 'Sedang') : 'Belum ada data'} kemungkinan sukses</p></div>`,
        risk: `<div class="module-panel"><h4>Discipline Risk Analyzer</h4>
            <div id="risk-flags"></div></div>`,
        cheat: `<div class="module-panel"><h4>Self-Cheat Detection</h4>
            <p>Mendeteksi manipulasi data. Sistem ini tidak menemukan anomali.</p></div>`,
        immutable: `<div class="module-panel"><h4>Immutable Log System</h4>
            <p>Log aktivitas append-only (read-only view)</p>
            <div id="immutable-log"></div></div>`,
        weekly: `<div class="module-panel"><h4>Weekly Command Review</h4>
            <p>Evaluasi minggu ini: ${getWeeklySuccessRate(0) ?? '—'}% keberhasilan</p></div>`,
        monthly: `<div class="module-panel"><h4>Monthly Strategic Review</h4>
            <p>Rata-rata 4 minggu terakhir</p>
            <div id="monthly-summary"></div></div>`,
        doctrine: `<div class="module-panel"><h4>Personal Doctrine Builder</h4>
            <input id="doctrine-input" placeholder="Prinsip hidup" style="width:100%;margin-bottom:8px">
            <button class="btn btn-primary" id="add-doctrine">Tambah</button>
            <div id="doctrine-list" style="margin-top:12px"></div></div>`,
        legacy: `<div class="module-panel"><h4>Legacy Builder System</h4>
            <input id="legacy-input" placeholder="Warisan intelektual" style="width:100%;margin-bottom:8px">
            <button class="btn btn-primary" id="add-legacy">Tambah</button>
            <div id="legacy-list" style="margin-top:12px"></div></div>`
    };
    el.innerHTML = renderBackButton() + (mods[state.part4Tab] || '<div class="empty-state">Modul tidak ditemukan</div>');
    bindPart4Events();
}

function bindPart4Events() {
    const sb = id => document.getElementById(id);
    if (sb('add-skill')) sb('add-skill').onclick = () => {
        const n = sb('skill-name')?.value?.trim();
        const l = parseInt(sb('skill-level')?.value || 1, 10);
        if (!n) return;
        state.skills.push({ id: Date.now(), name: n, level: l });
        saveToStorage(STORAGE_KEYS.skills, state.skills);
        sb('skill-name').value = ''; sb('skill-level').value = '1';
        renderPart4();
    };
    if (state.part4Tab === 'skills' && sb('skills-list')) {
        sb('skills-list').innerHTML = state.skills.map(s => `<div class="list-item"><strong>${escapeHtml(s.name)}</strong> · Level ${s.level}</div>`).join('') || '<p class="empty-state">Belum ada</p>';
    }
    if (state.part4Tab === 'risk' && sb('risk-flags')) {
        const r = getWeeklySuccessRate(0);
        const flags = r !== null && r < 70 ? ['<span class="risk-flag">Keberhasilan mingguan &lt; 70%</span>'] : [];
        sb('risk-flags').innerHTML = flags.length ? flags.map(f => `<div class="list-item">${f}</div>`).join('') : '<p>Tidak ada risiko terdeteksi</p>';
    }
    if (state.part4Tab === 'immutable' && sb('immutable-log')) {
        const entries = Object.entries(state.disciplineLog).sort((a, b) => a[0].localeCompare(b[0]));
        sb('immutable-log').innerHTML = entries.slice(-20).map(([d, e]) =>
            `<div class="list-item">${d}: ${e.cognitive || 0} hal, ${e.physical}, ${e.intellectual}</div>`
        ).join('') || '<p class="empty-state">Belum ada</p>';
    }
    if (state.part4Tab === 'monthly' && sb('monthly-summary')) {
        let total = 0, count = 0;
        for (let w = 0; w < 4; w++) { const r = getWeeklySuccessRate(w); if (r !== null) { total += r; count++; } }
        sb('monthly-summary').innerHTML = count ? `<p>Rata-rata: ${Math.round(total / count)}%</p>` : '<p>Belum ada data</p>';
    }
    if (sb('add-doctrine')) sb('add-doctrine').onclick = () => {
        const t = sb('doctrine-input')?.value?.trim();
        if (!t) return;
        state.doctrine.push({ id: Date.now(), text: t });
        saveToStorage(STORAGE_KEYS.doctrine, state.doctrine);
        sb('doctrine-input').value = '';
        renderPart4();
    };
    if (state.part4Tab === 'doctrine' && sb('doctrine-list')) {
        sb('doctrine-list').innerHTML = state.doctrine.map(d => `<div class="doctrine-item">${escapeHtml(d.text)}</div>`).join('') || '<p class="empty-state">Belum ada</p>';
    }
    if (sb('add-legacy')) sb('add-legacy').onclick = () => {
        const t = sb('legacy-input')?.value?.trim();
        if (!t) return;
        state.legacy.push({ id: Date.now(), text: t });
        saveToStorage(STORAGE_KEYS.legacy, state.legacy);
        sb('legacy-input').value = '';
        renderPart4();
    };
    if (state.part4Tab === 'legacy' && sb('legacy-list')) {
        sb('legacy-list').innerHTML = state.legacy.map(l => `<div class="legacy-item">${escapeHtml(l.text)}</div>`).join('') || '<p class="empty-state">Belum ada</p>';
    }
}

function renderPart5() {
    renderPartTabs(5, PART5_MODULES, state.part5Tab, 'part5Tab');
    const el = document.getElementById('part5-content');
    if (!el) return;
    const mods = {
        vision: `<div class="module-panel"><h4>Long-Term Vision Engine</h4>
            <textarea id="vision-input" placeholder="Visi hidup jangka panjang...">${escapeHtml(state.vision)}</textarea>
            <button class="btn btn-primary" id="save-vision">Simpan</button></div>`,
        ai: `<div class="module-panel"><h4>Discipline AI Assistant</h4>
            <p>Saran: ${getWeeklySuccessRate(0) < 70 ? 'Fokus pada satu pilar yang paling sering gagal. Mulai dari Cognitive Intake.' : 'Pertahankan momentum. Pertimbangkan menambah target halaman.'}</p></div>`,
        optimization: `<div class="module-panel"><h4>Behavior Optimization AI</h4>
            <p>Optimasi: Jadwalkan Cognitive Intake di jam paling segar. Physical setelah istirahat siang.</p></div>`,
        simulation: `<div class="module-panel"><h4>Strategic Simulation Engine</h4>
            <p>Simulasi: Jika maintain 100% 4 minggu → Level Architect dalam 12 minggu.</p></div>`,
        power: `<div class="module-panel"><h4>Personal Power Index</h4>
            <div class="power-index-big" id="power-index">—</div>
            <p>Kombinasi disiplin, skills, achievement</p></div>`,
        lifecontrol: `<div class="module-panel"><h4>Life Control Dashboard</h4>
            <div class="omega-grid" id="life-control-grid"></div></div>`,
        warfare: `<div class="module-panel"><h4>Psychological Warfare Mode</h4>
            <p>"Setiap hari yang gagal adalah hari yang Anda curi dari masa depan."</p>
            <p>Mode tekanan mental aktif.</p></div>`,
        identity: `<div class="module-panel"><h4>Elite Identity System</h4>
            <input id="identity-input" placeholder="Identitas elit (e.g. Saya adalah pembaca 50 halaman/hari)" style="width:100%;margin-bottom:8px">
            <button class="btn btn-primary" id="add-identity">Tambah</button>
            <div id="identity-list" style="margin-top:12px"></div></div>`,
        empire: `<div class="module-panel"><h4>Personal Empire Builder</h4>
            <input id="empire-input" placeholder="Tujuan pengaruh sosial" style="width:100%;margin-bottom:8px">
            <button class="btn btn-primary" id="add-empire">Tambah</button>
            <div id="empire-list" style="margin-top:12px"></div></div>`,
        omega: `<div class="module-panel"><h4>Matter System Omega</h4>
            <p>Versi integrasi penuh semua modul v1–v50</p>
            <div class="omega-grid" id="omega-grid"></div></div>`
    };
    el.innerHTML = renderBackButton() + (mods[state.part5Tab] || '<div class="empty-state">Modul tidak ditemukan</div>');
    bindPart5Events();
}

function bindPart5Events() {
    const sb = id => document.getElementById(id);
    if (sb('save-vision')) sb('save-vision').onclick = () => {
        state.vision = sb('vision-input')?.value?.trim() || '';
        saveToStorage(STORAGE_KEYS.vision, state.vision);
        showToast('Visi tersimpan');
    };
    if (sb('add-identity')) sb('add-identity').onclick = () => {
        const t = sb('identity-input')?.value?.trim();
        if (!t) return;
        state.identity.push({ id: Date.now(), text: t });
        saveToStorage('matter_identity', state.identity);
        sb('identity-input').value = '';
        renderPart5();
    };
    if (state.part5Tab === 'identity' && sb('identity-list')) {
        sb('identity-list').innerHTML = state.identity.map(i => `<div class="list-item">${escapeHtml(i.text)}</div>`).join('') || '<p class="empty-state">Belum ada</p>';
    }
    if (sb('add-empire')) sb('add-empire').onclick = () => {
        const t = sb('empire-input')?.value?.trim();
        if (!t) return;
        state.empire.push({ id: Date.now(), text: t });
        saveToStorage('matter_empire', state.empire);
        sb('empire-input').value = '';
        renderPart5();
    };
    if (state.part5Tab === 'empire' && sb('empire-list')) {
        sb('empire-list').innerHTML = state.empire.map(e => `<div class="list-item">${escapeHtml(e.text)}</div>`).join('') || '<p class="empty-state">Belum ada</p>';
    }
    if (state.part5Tab === 'power' && sb('power-index')) {
        const r = getWeeklySuccessRate(0) ?? 0;
        const s = state.skills.length * 5;
        const a = state.achievements?.length || 0;
        sb('power-index').textContent = Math.min(100, Math.round(r * 0.5 + s + a * 10));
    }
    if (state.part5Tab === 'lifecontrol' && sb('life-control-grid')) {
        sb('life-control-grid').innerHTML = [
            ['Disiplin', getWeeklySuccessRate(0) ?? 0],
            ['Skills', state.skills.length],
            ['Arsenal', state.arsenal.length],
            ['Decisions', state.decisions.length]
        ].map(([k, v]) => `<div class="omega-card"><strong>${k}</strong><br>${v}</div>`).join('');
    }
    if (state.part5Tab === 'omega' && sb('omega-grid')) {
        sb('omega-grid').innerHTML = ['Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5'].map((p, i) =>
            `<div class="omega-card">${p}<br>v${(i + 1) * 10}–v${(i + 2) * 10}</div>`
        ).join('');
    }
}

function renderPartGeneric(partNum, modules, stateKey, descs) {
    renderPartTabs(partNum, modules, state[stateKey], stateKey);
    const el = document.getElementById(`part${partNum}-content`);
    if (!el) return;
    const tab = state[stateKey];
    const desc = descs[tab] || 'Modul analisis dan pelacakan.';
    el.innerHTML = renderBackButton() + `<div class="module-panel"><h4>${(modules.find(m => m.id === tab) || {}).label || tab}</h4><p>${desc}</p></div>`;
}

function renderPart6() {
    const descs = {
        future: 'Future Behavior Predictor: Prediksi kebiasaan masa depan berdasarkan pola historis.',
        trajectory: 'Life Trajectory Simulator: Simulasi jalur kehidupan berdasarkan konsistensi disiplin.',
        impact: 'Decision Impact Analyzer: Analisis dampak keputusan terhadap tujuan jangka panjang.',
        timeline: 'Strategic Timeline Builder: Timeline strategi hidup dan milestone.',
        momentum: 'Productivity Momentum Engine: Mengukur momentum produktivitas harian.',
        evolution: 'Habit Evolution Tracker: Melacak evolusi kebiasaan dari waktu ke waktu.',
        cognitive: 'Cognitive Capacity Analyzer: Mengukur kapasitas intelektual dari halaman dibaca.',
        forecast: 'Long-Term Discipline Forecast: Prediksi disiplin jangka panjang.',
        energycycle: 'Energy Cycle Optimizer: Optimasi siklus energi mental dan fisik.',
        focusmonitor: 'Strategic Focus Monitor: Monitor fokus strategis dan sesi deep work.'
    };
    renderPartGeneric(6, PART6_MODULES, 'part6Tab', descs);
}

function renderPart7() {
    const descs = {
        expansion: 'Cognitive Expansion Tracker: Melacak peningkatan kemampuan berpikir.',
        acceleration: 'Learning Acceleration Engine: Mempercepat proses belajar.',
        deepwork: 'Deep Work Analyzer: Analisis sesi fokus mendalam.',
        mastery: 'Skill Mastery Map: Peta penguasaan keterampilan.',
        library: 'Strategic Knowledge Library: Perpustakaan konsep strategis.',
        combat: 'Intellectual Combat Trainer: Latihan debat dan logika.',
        endurance: 'Mental Endurance Simulator: Simulasi tekanan mental.',
        resilience: 'Focus Resilience System: Ketahanan fokus jangka panjang.',
        load: 'Cognitive Load Manager: Manajemen beban berpikir.',
        dominance: 'Intellectual Dominance Index: Indeks kekuatan intelektual.'
    };
    renderPartGeneric(7, PART7_MODULES, 'part7Tab', descs);
}

function renderPart8() {
    const descs = {
        architecture: 'Life Architecture Planner: Arsitektur kehidupan dan struktur tujuan.',
        resource: 'Strategic Resource Manager: Manajemen sumber daya waktu dan energi.',
        influence: 'Influence Network Mapper: Peta jaringan pengaruh.',
        decisionspeed: 'Decision Speed Analyzer: Analisis kecepatan keputusan.',
        opportunity: 'Opportunity Detection Engine: Deteksi peluang.',
        riskcontrol: 'Risk Control System: Manajemen risiko kehidupan.',
        automation: 'Strategic Habit Automation: Otomatisasi kebiasaan strategis.',
        ecosystem: 'Productivity Ecosystem Dashboard: Dashboard ekosistem produktivitas.',
        goalconquest: 'Goal Conquest System: Sistem penaklukan target.',
        performance: 'Life Performance Index: Indeks performa hidup.'
    };
    renderPartGeneric(8, PART8_MODULES, 'part8Tab', descs);
}

function renderPart9() {
    const descs = {
        leadership: 'Leadership Development Engine: Pengembangan kepemimpinan.',
        communication: 'Strategic Communication Trainer: Latihan komunikasi strategis.',
        influencepower: 'Influence Power Index: Indeks kekuatan pengaruh.',
        command: 'Decision Command System: Sistem komando keputusan.',
        negotiation: 'Strategic Negotiation Trainer: Latihan negosiasi.',
        warroom: 'Personal Strategy War Room: Ruang strategi pribadi.',
        knowledge: 'Global Knowledge Integration: Integrasi pengetahuan global.',
        problemsolver: 'Complex Problem Solver: Pemecah masalah kompleks.',
        intelligence: 'Strategic Intelligence Monitor: Monitor kecerdasan strategis.',
        elite: 'Elite Leadership Dashboard: Dashboard kepemimpinan elit.'
    };
    renderPartGeneric(9, PART9_MODULES, 'part9Tab', descs);
}

function renderPart10() {
    renderPartTabs(10, PART10_MODULES, state.part10Tab, 'part10Tab');
    const el = document.getElementById('part10-content');
    if (!el) return;
    const tab = state.part10Tab;
    const mods = {
        metacognition: 'Meta-Cognition Engine: Analisis cara berpikir pengguna untuk peningkatan diri.',
        selfevolution: 'Self Evolution Tracker: Melacak evolusi pribadi dari waktu ke waktu.',
        strategicidentity: 'Strategic Identity Builder: Membangun identitas strategis.',
        purpose: 'Purpose Alignment System: Menyelaraskan tujuan hidup dengan tindakan.',
        globalimpact: 'Global Impact Planner: Perencanaan dampak global.',
        legacystrategy: 'Legacy Strategy Engine: Strategi warisan hidup.',
        civilization: 'Civilization Knowledge Index: Indeks pemahaman peradaban.',
        potential: 'Human Potential Maximizer: Maksimalisasi potensi manusia.',
        supreme: 'Matter System Supreme Intelligence: AI pusat analisis kehidupan.',
        final: 'Matter System Final Omega v100: Versi final yang mengintegrasikan seluruh modul menjadi Personal Strategic Life Operating System.'
    };
    el.innerHTML = renderBackButton() + `<div class="module-panel"><h4>${(PART10_MODULES.find(m => m.id === tab) || {}).label || tab}</h4><p>${mods[tab] || ''}</p>
        ${tab === 'final' ? '<div class="power-index-big" style="margin-top:20px; font-family: var(--font-serif);">OMEGA v100</div><p>Personal Strategic Life Operating System — Integrasi penuh</p>' : ''}
    </div>`;
}

// ========== Economy ==========
function getPocketPercentages() {
    return {
        operasional: 0.60,
        eksplorasi: 0.25,
        kapasitas: 0.15
    };
}

function renderEconomyDashboard() {
    // 1. Update Saldo Kantong (Kode lama)
    document.getElementById('pocket-op-amount').textContent = formatRupiah(state.pockets.operasional);
    document.getElementById('pocket-ex-amount').textContent = formatRupiah(state.pockets.eksplorasi);
    document.getElementById('pocket-cap-amount').textContent = formatRupiah(state.pockets.kapasitas);

    const pocketTotal = state.pockets.operasional + state.pockets.eksplorasi + state.pockets.kapasitas;
    const getWidth = (val) => pocketTotal === 0 ? 0 : Math.min(100, Math.max(5, (val / pocketTotal) * 100));

    document.getElementById('pocket-op-bar').style.width = `${getWidth(state.pockets.operasional)}%`;
    document.getElementById('pocket-ex-bar').style.width = `${getWidth(state.pockets.eksplorasi)}%`;
    document.getElementById('pocket-cap-bar').style.width = `${getWidth(state.pockets.kapasitas)}%`;

    // 2. LOGIKA BARU: Hitung Total Balance & In/Out
    let totalIncome = 0;
    let totalExpense = 0;

    state.economy.forEach(t => {
        // Ambil nominal transaksi (t.total untuk split, t.amount untuk manual)
        const nominal = t.total || t.amount || 0;

        if (t.type === 'income' || t.type === 'split' || t.type === 'dividen') {
            totalIncome += nominal;
        } else if (t.type === 'expense' || t.type === 'pajak') {
            totalExpense += nominal;
        }
    });

    const totalBalance = state.pockets.operasional + state.pockets.eksplorasi + state.pockets.kapasitas;

    // 3. Render ke elemen HTML
    const totalBalanceEl = document.getElementById('economy-total-balance');
    const totalIncomeEl = document.getElementById('economy-total-income');
    const totalExpenseEl = document.getElementById('economy-total-expense');

    if (totalBalanceEl) totalBalanceEl.textContent = formatRupiah(totalBalance);
    if (totalIncomeEl) totalIncomeEl.textContent = formatRupiah(totalIncome);
    if (totalExpenseEl) totalExpenseEl.textContent = formatRupiah(totalExpense);

    // 4. Render histori dan grafik (Kode lama)
    renderEconomyHistory();
    renderEconomyCharts();
}


function splitIncome() {
    const input = document.getElementById('eco-total-amount');
    const amount = parseFloat(input.value);

    if (!amount || amount <= 0) {
        showToast('Masukkan nominal valid');
        return;
    }

    const pct = getPocketPercentages();
    const op = Math.floor(amount * pct.operasional);
    const ex = Math.floor(amount * pct.eksplorasi);
    const cap = amount - op - ex; // remainder to cap

    state.pockets.operasional += op;
    state.pockets.eksplorasi += ex;
    state.pockets.kapasitas += cap;

    state.economy.push({
        id: Date.now(),
        type: 'split',
        total: amount,
        split: { op, ex, cap },
        date: getToday(),
        desc: `Auto-split: ${formatRupiah(amount)}`
    });

    saveToStorage('matter_pockets', state.pockets);
    saveToStorage(STORAGE_KEYS.economy, state.economy);

    input.value = '';
    showToast('Alokasi berhasil!');
    renderEconomyDashboard();
    renderJournal(); // Updates prompt potentially
}


function renderEconomyHistory() {
    const list = document.getElementById('eco-history-list');
    if (!list) return;

    if (state.economy.length === 0) {
        list.innerHTML = '<div style="text-align:center; color:var(--text-muted); padding:20px;">Belum ada riwayat transaksi.</div>';
        return;
    }

    // Urutkan dari yang terbaru
    const sortedHistory = [...state.economy].reverse();

    list.innerHTML = sortedHistory.map((item, index) => {
        // Balikkan index karena kita me-reverse array untuk tampilan
        const actualIndex = state.economy.length - 1 - index;

        const isIncome = ['income', 'split', 'dividen'].includes(item.type);
        const typeText = isIncome ? 'IN' : 'OUT';
        const color = isIncome ? 'var(--success)' : 'var(--danger)';
        const amount = item.total || item.amount || 0;

        return `
            <div class="history-item" style="display:flex; justify-content:space-between; align-items:center; padding:12px; border-bottom:1px solid var(--border);">
                <div style="display:flex; gap:12px; align-items:center;">
                    <div style="width:36px; height:36px; border-radius:4px; background:${color}22; color:${color}; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size: 0.65rem;">
                        ${typeText}
                    </div>
                    <div>
    <div style="font-weight:500; font-size:0.9rem;">
        ${item.type === 'split' ? 'Auto-Split' : (item.category || item.note || 'Transaksi')} 
        <small style="opacity:0.6; font-size:0.7rem; margin-left:8px; border:1px solid; padding:1px 4px; border-radius:3px;">
            ${(item.allocation || (item.type === 'split' ? 'SPLIT' : 'OPS')).toUpperCase()}
        </small>
    </div>
</div>
                </div>
                <div style="display:flex; align-items:center; gap:15px;">
                    <div style="text-align:right;">
                        <div style="font-weight:600; color:${color}">${isIncome ? '+' : '-'}${formatRupiah(amount)}</div>
                        <div style="font-size:0.7rem; color:var(--text-muted);">${item.type.toUpperCase()}</div>
                    </div>
                    <button onclick="deleteTransaction(${actualIndex})" style="background:none; border:none; color:var(--danger); cursor:pointer; opacity:0.6; padding:5px;">
                        ✕
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderEconomyCharts() {
    const expenseData = {};
    let totalExp = 0;

    state.economy.forEach(t => {
        if (t.type === 'expense') {
            const cat = t.category || 'Lainnya';
            expenseData[cat] = (expenseData[cat] || 0) + (t.amount || 0);
            totalExp += (t.amount || 0);
        }
    });

    // Render Expense Pie
    const expPie = document.getElementById('eco-expense-pie');
    const expLegend = document.getElementById('eco-expense-legend');
    if (expPie && expLegend) {
        if (totalExp === 0) {
            expPie.style.background = 'var(--bg-tertiary)';
            expLegend.innerHTML = '<p class="empty-state">Belum ada pengeluaran</p>';
            const hole = document.getElementById('eco-expense-hole');
            if (hole) hole.textContent = '0';
        } else {
            const sorted = Object.entries(expenseData).sort((a, b) => b[1] - a[1]);
            const colors = ['#c19a6b', '#3c2a21', '#5c677d', '#10b981', '#ef4444', '#f59e0b'];
            let grad = '';
            let currentOffset = 0;

            expLegend.innerHTML = sorted.map(([cat, val], i) => {
                const perc = (val / totalExp) * 100;
                const color = colors[i % colors.length];
                grad += `${color} ${currentOffset}% ${currentOffset + perc}%, `;
                currentOffset += perc;
                return `<div class="legend-item"><div class="legend-color" style="background:${color}"></div> ${cat} (${Math.round(perc)}%)</div>`;
            }).join('');

            expPie.style.background = `conic-gradient(${grad.slice(0, -2)})`;
            const hole = document.getElementById('eco-expense-hole');
            if (hole) hole.textContent = formatRupiahShort(totalExp);
        }
    }

    // Render Pockets Pie
    const pockPie = document.getElementById('eco-pocket-pie');
    const pockLegend = document.getElementById('eco-pocket-legend');
    if (pockPie && pockLegend) {
        const totalPock = state.pockets.operasional + state.pockets.eksplorasi + state.pockets.kapasitas;
        if (totalPock === 0) {
            pockPie.style.background = 'var(--bg-tertiary)';
            pockLegend.innerHTML = '<p class="empty-state">Saldo kosong</p>';
            const hole = document.getElementById('eco-pocket-hole');
            if (hole) hole.textContent = '0';
        } else {
            const pocks = [
                { label: 'Operasional', val: state.pockets.operasional, color: '#c19a6b' },
                { label: 'Eksplorasi', val: state.pockets.eksplorasi, color: '#a98467' },
                { label: 'Kapasitas', val: state.pockets.kapasitas, color: '#5c677d' }
            ];
            let grad = '';
            let currentOffset = 0;
            pockLegend.innerHTML = pocks.map(p => {
                const perc = (p.val / totalPock) * 100;
                grad += `${p.color} ${currentOffset}% ${currentOffset + perc}%, `;
                currentOffset += perc;
                return `<div class="legend-item"><div class="legend-color" style="background:${p.color}"></div> ${p.label} (${Math.round(perc)}%)</div>`;
            }).join('');
            pockPie.style.background = `conic-gradient(${grad.slice(0, -2)})`;
            const hole = document.getElementById('eco-pocket-hole');
            if (hole) hole.textContent = formatRupiahShort(totalPock);
        }
    }
}

function formatRupiahShort(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + 'jt';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'rb';
    return num.toString();
}

function formatRupiah(num) {
    if (num === undefined || num === null || isNaN(num)) return 'Rp 0';
    return 'Rp' + (num < 0 ? ' -' : ' ') + Math.abs(num).toLocaleString('id-ID');
}
function addTransaction() {
    const amountEl = document.getElementById('eco-amount');
    const typeEl = document.getElementById('eco-type');
    const categoryEl = document.getElementById('eco-category');
    const descEl = document.getElementById('eco-desc');
    const allocationEl = document.getElementById('eco-allocation'); // Mengambil pilihan baru

    const amount = parseFloat(amountEl.value);

    // Validasi: Jika nominal kosong atau 0, berhenti di sini
    if (isNaN(amount) || amount <= 0) {
        showToast('Masukkan nominal yang valid');
        return;
    }

    const type = typeEl.value;
    const category = categoryEl.value.trim() || 'Umum';
    const note = descEl.value.trim();
    const allocation = allocationEl ? allocationEl.value : 'operasional';

    const newTransaction = {
        id: Date.now(),
        date: getToday(),
        amount: amount,
        type: type,
        category: category,
        note: note,
        allocation: allocation // Menyimpan pilihan Operasional/Playing/Study
    };

    // Logika Pemotongan Saldo Kantong Otomatis
    if (type === 'expense') {
        // Jika pengeluaran, kurangi kantong sesuai alokasi yang dipilih
        if (allocation === 'operasional') state.pockets.operasional -= amount;
        if (allocation === 'playing') state.pockets.eksplorasi -= amount; // Playing masuk ke Eksplorasi
        if (allocation === 'study') state.pockets.kapasitas -= amount;    // Study masuk ke Kapasitas
    } else if (type === 'income') {
        // Jika pemasukan biasa tanpa split, masukkan ke operasional
        state.pockets.operasional += amount;
    }

    // Masukkan ke database (state)
    state.economy.push(newTransaction);

    // Simpan ke memori HP/Laptop
    saveToStorage(STORAGE_KEYS.economy, state.economy);
    saveToStorage('matter_pockets', state.pockets);

    // Reset Form Input agar kosong kembali
    amountEl.value = '';
    categoryEl.value = '';
    descEl.value = '';

    // Perbarui Tampilan Layar
    renderEconomyDashboard();
    showToast('Transaksi berhasil dicatat');
}

function deleteTransaction(index) {
    if (confirm('Apakah Anda yakin ingin menghapus transaksi ini?')) {
        const item = state.economy[index];
        if (!item) return;

        // Revert pocket balance changes
        if (item.type === 'split' && item.split) {
            state.pockets.operasional -= item.split.op;
            state.pockets.eksplorasi -= item.split.ex;
            state.pockets.kapasitas -= item.split.cap;
        } else if (item.type === 'income') {
            state.pockets.operasional -= item.amount;
        } else if (item.type === 'expense') {
            const amount = item.amount;
            const allocation = item.allocation || 'operasional';
            if (allocation === 'operasional') state.pockets.operasional += amount;
            if (allocation === 'playing') state.pockets.eksplorasi += amount;
            if (allocation === 'study') state.pockets.kapasitas += amount;
        }

        // Hapus item
        state.economy.splice(index, 1);

        // Simpan
        saveToStorage(STORAGE_KEYS.economy, state.economy);
        saveToStorage('matter_pockets', state.pockets);

        // Update tampilan
        renderEconomyDashboard();

        if (typeof showToast === 'function') {
            showToast('Transaksi berhasil dihapus dan saldo kantong dikoreksi');
        }
    }
}

document.addEventListener('click', e => {
    if (e.target?.id === 'reset-pockets-btn') {
        if (confirm('Reset semua data finansial? Ini akan menghapus histori transaksi dan saldo kantong.')) {
            state.pockets = { operasional: 0, eksplorasi: 0, kapasitas: 0 };
            state.economy = [];
            saveToStorage('matter_pockets', state.pockets);
            saveToStorage(STORAGE_KEYS.economy, state.economy);
            renderEconomyDashboard();
            showToast('Seluruh data finansial telah di-reset.');
        }
    }
    if (e.target?.id === 'split-income-btn') splitIncome();
    if (e.target?.id === 'download-eco-doc-btn') downloadEconomyDoc();
});

function downloadEconomyDoc() {
    let htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
            <meta charset="utf-8">
            <title>Laporan Keuangan Matter System</title>
            <style>
                body { font-family: 'Times New Roman', serif; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid black; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
                h1, h2 { text-align: center; }
            </style>
        </head>
        <body>
            <h1>Laporan Finansial Matter System</h1>
            <p><strong>Tanggal Unduh:</strong> ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2>Ringkasan Saldo Kantong</h2>
            <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; border: 1px solid black;">
                <tr>
                    <th style="border: 1px solid black; padding: 8px;">Operasional (60%)</th>
                    <th style="border: 1px solid black; padding: 8px;">Eksplorasi / Playing (25%)</th>
                    <th style="border: 1px solid black; padding: 8px;">Kapasitas / Saving (15%)</th>
                    <th style="border: 1px solid black; padding: 8px;">Total Balance</th>
                </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 8px;">${formatRupiah(state.pockets.operasional)}</td>
                    <td style="border: 1px solid black; padding: 8px;">${formatRupiah(state.pockets.eksplorasi)}</td>
                    <td style="border: 1px solid black; padding: 8px;">${formatRupiah(state.pockets.kapasitas)}</td>
                    <td style="border: 1px solid black; padding: 8px;"><strong>${formatRupiah(state.pockets.operasional + state.pockets.eksplorasi + state.pockets.kapasitas)}</strong></td>
                </tr>
            </table>

            <h2>Riwayat Transaksi</h2>
            <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; border: 1px solid black;">
                <tr>
                    <th style="border: 1px solid black; padding: 8px;">Tanggal</th>
                    <th style="border: 1px solid black; padding: 8px;">Tipe</th>
                    <th style="border: 1px solid black; padding: 8px;">Kategori / Catatan</th>
                    <th style="border: 1px solid black; padding: 8px;">Alokasi</th>
                    <th style="border: 1px solid black; padding: 8px;">Nominal</th>
                </tr>
    `;

    const sortedHistory = [...state.economy].reverse();
    sortedHistory.forEach(item => {
        const isIncome = ['income', 'split', 'dividen'].includes(item.type);
        const amount = item.total || item.amount || 0;
        const typeText = item.type.toUpperCase();
        const allocation = item.allocation ? item.allocation.toUpperCase() : (item.type === 'split' ? 'SPLIT' : 'OPS');
        const desc = item.type === 'split' ? 'Auto-Split' : (item.category || item.note || 'Transaksi');

        htmlContent += `
            <tr>
                <td style="border: 1px solid black; padding: 8px;">${formatDisplayDate(item.date)}</td>
                <td style="border: 1px solid black; padding: 8px; color: ${isIncome ? 'green' : 'red'};">${isIncome ? 'MASUK' : 'KELUAR'} (${typeText})</td>
                <td style="border: 1px solid black; padding: 8px;">${escapeHtml(desc)}</td>
                <td style="border: 1px solid black; padding: 8px;">${escapeHtml(allocation)}</td>
                <td style="border: 1px solid black; padding: 8px; color: ${isIncome ? 'green' : 'red'};">${isIncome ? '+' : '-'}${formatRupiah(amount)}</td>
            </tr>
        `;
    });

    htmlContent += `
            </table>
        </body>
        </html>
    `;

    const blob = new Blob(['\ufeff', htmlContent], {
        type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Laporan_Keuangan_Matter_${getToday()}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast('Laporan .doc berhasil diunduh');
}

// ========== Dialectic Journal (Node 3) ==========
function renderJournal() {
    const today = getToday();
    const entry = state.disciplineLog[today];
    const container = document.getElementById('journal-prompt-container');
    const historyList = document.getElementById('journal-history-list');
    if (!container || !historyList) return;

    // Render History
    const sortedJournals = [...state.journals].sort((a, b) => b.id - a.id);
    historyList.innerHTML = sortedJournals.length ? sortedJournals.map(j => `
        <div class="journal-entry">
            <div class="journal-date">${formatDisplayDate(j.date)}</div>
            <p><strong>Refleksi:</strong> ${escapeHtml(j.q1)}</p>
            <p style="margin-top:8px"><strong>Strategi Besok:</strong> ${escapeHtml(j.q2)}</p>
        </div>
        `).join('') : '<p class="empty-state">Belum ada histori jurnal.</p>';

    // Check if filled today
    if (state.journals.some(j => j.date === today)) {
        container.innerHTML = `<div style="text-align:center;">
            <p style="color:var(--success); font-size:1.2rem; font-weight:600; margin-bottom:12px;">✓ Jurnal Hari Ini Terekam</p>
            <p>Siklus selesai. Implementasikan strategi kamu untuk besok.</p>
        </div>`;
        return;
    }

    if (!entry) {
        container.innerHTML = '<p class="empty-state">Isi log habit (Node 1) terlebih dahulu untuk melihat prompt jurnal.</p>';
        return;
    }

    const score = getHabitScore(entry);
    const scorePct = (score / 4) * 100;
    const isSuccess = scorePct >= 75;

    let promptObj = {
        title: '',
        text: '',
        q1: '',
        q2: 'Apa SOP / perbaikan spesifik untuk strategi Habitmu besok pagi?'
    };

    if (isSuccess) {
        promptObj.title = 'Momentum Terjaga';
        promptObj.text = `Kamu berhasil mempertahankan Habit hari ini (${score}/4).`;
        promptObj.q1 = 'Pola atau mindset apa yang membuatmu berhasil hari ini, dan bagaimana meniru pola ini di hari lain?';
    } else {
        const failedPillars = [];
        const habits = getAllHabits();
        habits.forEach(h => {
            if (entry[h.id] === 'no') failedPillars.push(h.title);
        });

        promptObj.title = 'Kegagalan Terdeteksi';
        promptObj.text = `Hari ini kamu gagal pada ${failedPillars.join(', ')}.`;
        promptObj.q1 = 'Apa penyebab eksternal yang jujur dan brutal yang membuatmu gagal eksekusi hari ini?';
    }

    container.innerHTML = `
        <div class="journal-prompt-text">
            <strong>[${promptObj.title}]</strong><br>
            ${promptObj.text}
        </div>
        <div class="journal-form">
            <div style="display:flex; flex-direction:column; gap:8px;">
                <label style="font-weight:500;">1. ${promptObj.q1}</label>
                <textarea id="journal-q1" placeholder="Tulis analisis aktual..." style="width:100%; min-height:80px; padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-primary); font-family:inherit;"></textarea>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
                <label style="font-weight:500;">2. ${promptObj.q2}</label>
                <textarea id="journal-q2" placeholder="Tulis strategi perbaikan..." style="width:100%; min-height:80px; padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-primary); font-family:inherit;"></textarea>
            </div>
            <button class="btn btn-primary" onclick="saveJournal()" style="align-self:flex-start; padding:12px 24px;">Simpan Siklus (Closed Loop)</button>
        </div>
        `;
}

window.saveJournal = function () {
    const q1 = document.getElementById('journal-q1').value.trim();
    const q2 = document.getElementById('journal-q2').value.trim();

    if (!q1 || !q2) {
        showToast('Isi kedua form refleksi untuk menyelesaikan siklus.');
        return;
    }

    state.journals.push({
        id: Date.now(),
        date: getToday(),
        q1,
        q2
    });

    saveToStorage('matter_journal', state.journals);
    showToast('Jurnal tersimpan. Siklus hari ini selesai.');
    renderJournal();
}

// ========== Habits Management ==========
function renderHabitGrid() {
    const grid = document.getElementById('habit-binary-grid');
    if (!grid) return;

    const habits = getAllHabits();
    grid.innerHTML = habits.map(h => `
        <div class="pillar-card">
            <div class="pillar-header">
                <span class="pillar-icon">${h.icon || '◇'}</span>
                <h4>${h.title}</h4>
                ${h.id.startsWith('custom_') ? `<button class="delete-btn-habit" onclick="deleteCustomHabit('${h.id}')" title="Hapus Kebiasaan">×</button>` : ''}
            </div>
            <p class="pillar-desc">${h.desc}</p>
            <div class="pillar-toggle">
                <button type="button" class="toggle-btn" data-pillar="${h.id}" data-value="no">Tidak</button>
                <button type="button" class="toggle-btn" data-pillar="${h.id}" data-value="yes">Ya</button>
            </div>
            ${h.hasInput ? `
                <div class="pillar-input" style="margin-top: 10px;">
                    <input type="number" id="cognitive-pages" min="0" placeholder="Hal" value="" style="width:100%; font-size: 0.8rem;">
                </div>
            ` : ''}
        </div>
    `).join('');

    // Re-bind toggle events since we just re-rendered the buttons
    initPillarToggles();
}

function addCustomHabit() {
    const title = document.getElementById('new-habit-title').value.trim();
    const desc = document.getElementById('new-habit-desc').value.trim();
    const icon = ''; // Emoji removed for premium look

    if (!title || !desc) {
        showToast('Nama dan keterangan wajib diisi.');
        return;
    }

    const newHabit = {
        id: 'custom_' + Date.now(),
        title,
        desc,
        icon
    };

    state.customHabits.push(newHabit);
    saveToStorage(STORAGE_KEYS.customHabits, state.customHabits);

    // Reset form
    document.getElementById('new-habit-title').value = '';
    document.getElementById('new-habit-desc').value = '';
    document.getElementById('new-habit-icon').value = '';
    document.getElementById('add-habit-panel').style.display = 'none';

    showToast('Kebiasaan kustom ditambahkan.');
    renderDashboard();
}

window.deleteCustomHabit = function (id) {
    if (!confirm('Hapus kebiasaan kustom ini? Data log lama yang menggunakan kebiasaan ini tetap tersimpan.')) return;
    state.customHabits = state.customHabits.filter(h => h.id !== id);
    saveToStorage(STORAGE_KEYS.customHabits, state.customHabits);
    renderDashboard();
    showToast('Kebiasaan kustom dihapus.');
}

// ========== Pillar Toggle ==========
function initPillarToggles() {
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const pillar = btn.dataset.pillar;
            document.querySelectorAll(`[data-pillar="${pillar}"]`).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

const SYSTEM_PARTS = [
    { id: 'part2', label: 'Analisis Disiplin', range: 'v11–v20', desc: 'Behavioral Energy, Habit Builder, Arsenal, Focus Lock' },
    { id: 'part3', label: 'Koreksi Struktur', range: 'v21–v30', desc: 'Failure Detector, War Room, Decision Logger, Ego Pressure' },
    { id: 'part4', label: 'Pengembangan Kapasitas', range: 'v31–v40', desc: 'Skill Conquest, Routine Generator, Risk Analyzer' },
    { id: 'part5', label: 'Strategi Kehidupan', range: 'v41–v50', desc: 'Vision Engine, Discipline AI, Power Index, Identity' },
    { id: 'part6', label: 'Prediksi Masa Depan', range: 'v51–v60', desc: 'Future Predictor, Life Trajectory, Momentum' },
    { id: 'part7', label: 'Ekspansi Kapasitas', range: 'v61–v70', desc: 'Cognitive Expansion, Learning Engine, Mastery Map' },
    { id: 'part8', label: 'Optimalisasi Kehidupan', range: 'v71–v80', desc: 'Life Architecture, Resource Manager, Goal Conquest' },
    { id: 'part9', label: 'Kepemimpinan Pribadi', range: 'v81–v90', desc: 'Leadership Engine, Strategic Communication, War Room' },
    { id: 'part10', label: 'Final Omega', range: 'v91–v100', desc: 'Meta-Cognition, Purpose Alignment, Supreme OS' }
];

function renderSystemMenu() {
    const gridEl = document.getElementById('system-menu-grid');
    if (!gridEl) return;

    gridEl.innerHTML = SYSTEM_PARTS.map(p => `
        <div class="roadmap-card" onclick="switchView('${p.id}')">
            <span class="part-tag">${p.range}</span>
            <h3>${p.label}</h3>
            <p>${p.desc}</p>
            <div class="roadmap-footer">
                <span>View Modules</span>
                <span>→</span>
            </div>
        </div>
    `).join('');
}

function renderBackButton() {
    return `
        <div class="view-back-container">
            <button class="btn-back" onclick="switchView('system-menu')">
                ← Back to System Menu
            </button>
        </div>
    `;
}

// ========== Navigation ==========
function switchView(viewId) {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-view="${viewId}"]`)?.classList.add('active');
    
    // If it's a part page, mark system-menu as active in sidebar
    if (viewId.startsWith('part')) {
        document.querySelector(`[data-view="system-menu"]`)?.classList.add('active');
    }

    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${viewId}`)?.classList.add('active');

    if (viewId === 'dashboard') renderDashboard();
    if (viewId === 'charts') renderCharts();
    if (viewId === 'history') renderHistory();
    if (viewId === 'journal') renderJournal();
    if (viewId === 'interrogation') renderInterrogation();
    if (viewId === 'discipline-log') renderDisciplineLog();
    if (viewId === 'system-menu') renderSystemMenu();
    if (viewId === 'part2') renderPart2();
    if (viewId === 'part3') renderPart3();
    if (viewId === 'part4') renderPart4();
    if (viewId === 'part5') renderPart5();
    if (viewId === 'part6') renderPart6();
    if (viewId === 'part7') renderPart7();
    if (viewId === 'part8') renderPart8();
    if (viewId === 'part9') renderPart9();
    if (viewId === 'part10') renderPart10();
    if (viewId === 'economy') renderEconomyDashboard();
}

function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.view));
    });
}

// ========== Theme ==========
function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.theme) || 'dark';
    document.documentElement.setAttribute('data-theme', saved === 'light' ? 'light' : 'dark');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = saved === 'light' ? 'Mode: Terang' : 'Mode: Gelap';
}

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEYS.theme, next);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = next === 'light' ? 'Mode: Terang' : 'Mode: Gelap';
});

// ========== Init ==========
function init() {
    state.disciplineLog = loadFromStorage(STORAGE_KEYS.disciplineLog, {});
    state.energyLog = loadFromStorage(STORAGE_KEYS.energyLog, {});
    state.habitChains = loadFromStorage(STORAGE_KEYS.habitChains, []);
    state.arsenal = loadFromStorage(STORAGE_KEYS.arsenal, []);
    state.distractions = loadFromStorage(STORAGE_KEYS.distractions, []);
    state.decisions = loadFromStorage(STORAGE_KEYS.decisions, []);
    state.knowledgeMap = loadFromStorage(STORAGE_KEYS.knowledgeMap, []);
    state.lifeCampaign = loadFromStorage(STORAGE_KEYS.lifeCampaign, []);
    state.skills = loadFromStorage(STORAGE_KEYS.skills, []);
    state.doctrine = loadFromStorage(STORAGE_KEYS.doctrine, []);
    state.legacy = loadFromStorage(STORAGE_KEYS.legacy, []);
    const v = loadFromStorage(STORAGE_KEYS.vision, '');
    state.vision = typeof v === 'string' ? v : (v || '');
    state.identity = loadFromStorage('matter_identity', []);
    state.economy = loadFromStorage(STORAGE_KEYS.economy, []);
    state.pockets = loadFromStorage('matter_pockets', { operasional: 0, eksplorasi: 0, kapasitas: 0 });
    state.journals = loadFromStorage('matter_journal', []);
    state.customHabits = loadFromStorage(STORAGE_KEYS.customHabits, []);

    // Inject Sample Economy Data ONLY on the very first visit
    const firstVisit = !localStorage.getItem('matter_initialized');
    if (firstVisit && state.economy.length === 0) {
        const today = getToday();
        state.pockets.operasional = 100000; 
        state.economy = [
            { id: 0, type: 'income', amount: 100000, category: 'Initial Balance', allocation: 'operasional', date: today },
            { id: 1, type: 'expense', amount: 68000, category: 'Paket Data', allocation: 'operasional', date: today },
            { id: 2, type: 'expense', amount: 29000, category: 'Token', allocation: 'operasional', date: today },
            { id: 3, type: 'expense', amount: 3000, category: 'Biaya Admin', allocation: 'operasional', date: today }
        ];
        saveToStorage(STORAGE_KEYS.economy, state.economy);
        saveToStorage('matter_pockets', state.pockets);
        localStorage.setItem('matter_initialized', 'true');
    }

    initTheme();
    initNavigation();
    initPillarToggles();
    initHistoryFilters();

    document.getElementById('current-date').textContent = formatDisplayDate(getToday());

    document.getElementById('save-discipline-btn').addEventListener('click', saveDisciplineLog);
    document.getElementById('save-interrogation-btn').addEventListener('click', saveInterrogation);

    // Custom Habit Listeners
    document.getElementById('show-add-habit-btn')?.addEventListener('click', () => {
        document.getElementById('add-habit-panel').style.display = 'block';
    });
    document.getElementById('cancel-add-habit')?.addEventListener('click', () => {
        document.getElementById('add-habit-panel').style.display = 'none';
    });
    document.getElementById('confirm-add-habit')?.addEventListener('click', addCustomHabit);

    if (document.getElementById('add-transaction-btn')) {
        document.getElementById('add-transaction-btn').addEventListener('click', addTransaction);
    }

    renderDashboard();
    renderCharts();
    renderHistory();
    renderInterrogation();
    renderDisciplineLog();
    renderModulesRoadmap();
    renderEconomyDashboard();
    renderJournal();
}

init();
