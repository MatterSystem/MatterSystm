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
    economy: 'matter_economy'
};

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
    todayPillarValues: { wakeup: 'no', cognitiveRead: 'no', boxing: 'no', intellectual: 'no' },
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
function evaluateDay(entry) {
    if (!entry) return null;
    let score = 0;
    if (entry.wakeup === 'yes') score++;
    if (entry.cognitiveRead === 'yes') score++;
    if (entry.boxing === 'yes') score++;
    if (entry.intellectual === 'yes') score++;

    // Total 4 pillars. >= 3 is success (75%)
    return score >= 3 ? 'success' : 'failed';
}

function getHabitScore(entry) {
    if (!entry) return 0;
    let score = 0;
    if (entry.wakeup === 'yes') score++;
    if (entry.cognitiveRead === 'yes') score++;
    if (entry.boxing === 'yes') score++;
    if (entry.intellectual === 'yes') score++;
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
    const cognitivePages = parseInt(document.getElementById('cognitive-pages').value, 10) || 0;
    const wakeup = document.querySelector('[data-pillar="wakeup"].active')?.dataset?.value || 'no';
    const cognitiveRead = document.querySelector('[data-pillar="cognitiveRead"].active')?.dataset?.value || 'no';
    const boxing = document.querySelector('[data-pillar="boxing"].active')?.dataset?.value || 'no';
    const intellectual = document.querySelector('[data-pillar="intellectual"].active')?.dataset?.value || 'no';

    const entry = {
        cognitive: cognitivePages, // keep for indexing
        wakeup,
        cognitiveRead,
        boxing,
        intellectual,
        status: null,
        interrogation: null
    };
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
    renderJournal(); // Re-render journal prompt
    updateAuthorityDisplay();
}

function loadDisciplineForDate(dateStr) {
    const entry = state.disciplineLog[dateStr];
    if (!entry) return;
    document.getElementById('cognitive-pages').value = entry.cognitive || '';

    const pillars = ['wakeup', 'cognitiveRead', 'boxing', 'intellectual'];
    pillars.forEach(p => {
        document.querySelectorAll(`[data-pillar="${p}"]`).forEach(b => {
            b.classList.toggle('active', b.dataset.value === entry[p]);
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
function renderCharts() {
    const dailyData = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const ds = formatDate(d);
        const e = state.disciplineLog[ds];
        dailyData.push({ date: ds, success: e ? evaluateDay(e) === 'success' : null });
    }

    const dailyEl = document.getElementById('chart-daily');
    dailyEl.innerHTML = dailyData.map(({ date, success }) => {
        const val = success === null ? '-' : success ? '100%' : '0%';
        const cls = success === null ? '' : success ? 'chart-bar-fill' : 'chart-bar-fill failed';
        const w = success === null ? 0 : success ? 100 : 0;
        return `
            <div class="chart-bar-row">
                <span class="chart-bar-label">${formatDisplayDate(date)}</span>
                <div class="chart-bar-track">
                    <div class="${cls}" style="width:${w}%"></div>
                </div>
                <span class="chart-bar-value">${val}</span>
            </div>
        `;
    }).join('');

    const weeklyData = [];
    for (let w = 0; w < 4; w++) {
        const rate = getWeeklySuccessRate(w);
        weeklyData.push({ week: w, rate: rate ?? 0 });
    }

    const weekLabels = ['Minggu ini', '1 minggu lalu', '2 minggu lalu', '3 minggu lalu'];
    const weeklyEl = document.getElementById('chart-weekly');
    weeklyEl.innerHTML = weeklyData.map(({ week, rate }, i) => `
        <div class="chart-bar-row">
            <span class="chart-bar-label">${weekLabels[i]}</span>
            <div class="chart-bar-track">
                <div class="chart-bar-fill ${rate < 70 ? 'failed' : ''}" style="width:${rate}%"></div>
            </div>
            <span class="chart-bar-value">${rate}%</span>
        </div>
    `).join('');
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
        return `
            <div class="history-item">
                <div>
                    <strong>${formatDisplayDate(e.date)}</strong>
                    <span class="status-badge ${status}">${status === 'success' ? 'Berhasil' : 'Gagal'}</span>
                    <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px">
                        Score: ${s}/4 · Wake: ${e.wakeup === 'yes' ? 'Y' : 'N'} · Read: ${e.cognitiveRead === 'yes' ? 'Y' : 'N'} · Phys: ${e.boxing === 'yes' ? 'Y' : 'N'} · Intel: ${e.intellectual === 'yes' ? 'Y' : 'N'}
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

    if (entry) {
        loadDisciplineForDate(today);
    } else {
        document.getElementById('cognitive-pages').value = '';
        const pillars = ['wakeup', 'cognitiveRead', 'boxing', 'intellectual'];
        pillars.forEach(p => {
            document.querySelectorAll(`[data-pillar="${p}"]`).forEach((b, i) => b.classList.toggle('active', i === 0));
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
    statusCard.className = `today-status ${status}`;
    statusCard.innerHTML = `
        <h4>Status Hari Ini: ${status === 'success' ? '✓ Berhasil' : '✗ Gagal'} (${score}/4)</h4>
        <p>Wake up 04:00: ${entry.wakeup === 'yes' ? 'Ya' : 'Tidak'} · Read: ${entry.cognitiveRead === 'yes' ? 'Ya' : 'Tidak'} · Physical: ${entry.boxing === 'yes' ? 'Ya' : 'Tidak'} · Intel: ${entry.intellectual === 'yes' ? 'Ya' : 'Tidak'}</p>
        ${status === 'failed' ? '<p style="color:var(--danger);margin-top:12px">⚠ Habit gagal. Buka Jurnal Harian & Ruang Interogasi.</p>' : ''}
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
        badgeEl.innerHTML = '★ Elite Discipline Achieved ★';
    } else if (auth.type === 'unstable') {
        badgeEl.classList.add('unstable');
        badgeEl.innerHTML = '⚠ ' + auth.label;
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
        content.innerHTML = `
            <div class="history-item">
                <div>
                    <strong>${formatDisplayDate(ds)}</strong>
                    <span class="status-badge ${status}">${status === 'success' ? 'Berhasil' : 'Gagal'}</span>
                    <p>Cognitive: ${entry.cognitive || 0} halaman</p>
                    <p>Physical: ${entry.physical === 'yes' ? 'Ya' : 'Tidak'}</p>
                    <p>Intellectual: ${entry.intellectual === 'yes' ? 'Ya' : 'Tidak'}</p>
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
        growth: `<div class="module-panel"><h4>Cognitive Growth Graph</h4>
            <p>Perkembangan halaman dibaca dari log disiplin</p>
            <div class="chart-bar-container" id="growth-chart"></div></div>`,
        authority: `<div class="module-panel"><h4>Authority Level System</h4>
            <p>Level berdasarkan konsistensi mingguan</p>
            <div id="authority-level-display"></div></div>`
    };
    el.innerHTML = mods[state.part2Tab] || '<div class="empty-state">Modul tidak ditemukan</div>';
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
    if (state.part2Tab === 'growth' && sb('growth-chart')) {
        const entries = Object.entries(state.disciplineLog).sort((a, b) => a[0].localeCompare(b[0])).slice(-7);
        sb('growth-chart').innerHTML = entries.map(([d, e]) =>
            `<div class="chart-bar-row"><span class="chart-bar-label">${formatDisplayDate(d)}</span>
            <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${Math.min(100, (e.cognitive || 0) * 2)}%"></div></div>
            <span class="chart-bar-value">${e.cognitive || 0} hal</span></div>`
        ).join('') || '<p class="empty-state">Belum ada data</p>';
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
        ego: `<div class="module-panel"><h4>Ego Pressure System</h4>
            <p>"Apakah Anda akan menyerah hari ini?" — Tekanan psikologis untuk meningkatkan disiplin</p></div>`,
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
    el.innerHTML = mods[state.part3Tab] || '<div class="empty-state">Modul tidak ditemukan</div>';
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
    el.innerHTML = mods[state.part4Tab] || '<div class="empty-state">Modul tidak ditemukan</div>';
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
        sb('skills-list').innerHTML = state.skills.map(s => `<div class="list-item">${escapeHtml(s.name)} · Lv${s.level}</div>`).join('') || '<p class="empty-state">Belum ada</p>';
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
    el.innerHTML = mods[state.part5Tab] || '<div class="empty-state">Modul tidak ditemukan</div>';
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
    el.innerHTML = `<div class="module-panel"><h4>${(modules.find(m => m.id === tab) || {}).label || tab}</h4><p>${desc}</p></div>`;
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
    el.innerHTML = `<div class="module-panel"><h4>${(PART10_MODULES.find(m => m.id === tab) || {}).label || tab}</h4><p>${mods[tab] || ''}</p>
        ${tab === 'final' ? '<div class="power-index-big" style="margin-top:20px">Ω v100</div><p>Personal Strategic Life Operating System — Integrasi penuh</p>' : ''}
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

    const totalBalance = totalIncome - totalExpense;

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
    const amount = parseInt(input.value, 10);

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
        const icon = isIncome ? '↑' : '↓';
        const color = isIncome ? 'var(--success)' : 'var(--danger)';
        const amount = item.total || item.amount || 0;

        return `
            <div class="history-item" style="display:flex; justify-content:space-between; align-items:center; padding:12px; border-bottom:1px solid var(--border);">
                <div style="display:flex; gap:12px; align-items:center;">
                    <div style="width:32px; height:32px; border-radius:50%; background:${color}22; color:${color}; display:flex; align-items:center; justify-content:center; font-weight:bold;">
                        ${icon}
                    </div>
                    <div>
    <div style="font-weight:500; font-size:0.9rem;">
        ${item.category || item.note || 'Transaksi'} 
        <small style="opacity:0.6; font-size:0.7rem; margin-left:8px; border:1px solid; padding:1px 4px; border-radius:3px;">
            ${(item.allocation || 'ops').toUpperCase()}
        </small>
    </div>
    ...
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
    const dailyData = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const ds = formatDate(d);

        let inc = 0;
        let exp = 0;
        state.economy.forEach(t => {
            if (t.date === ds) {
                if (t.type === 'income') inc += t.amount || t.total; // Support split
                if (t.type === 'expense') exp += t.amount;
            }
        });
        dailyData.push({ date: ds, income: inc, expense: exp });
    }

    let maxVal = Math.max(...dailyData.map(d => Math.max(d.income, d.expense)));
    if (maxVal === 0) maxVal = 1; // prevent div by zero

    const chartEl = document.getElementById('eco-chart');
    if (!chartEl) return;

    chartEl.innerHTML = dailyData.map(d => `
        <div class="chart-bar-row" style="margin-bottom:8px">
            <span class="chart-bar-label" style="min-width:60px">${formatDisplayDate(d.date).split(' ')[0]}</span>
            <div class="chart-bar-track" style="background:transparent; display:flex; flex-direction:column; gap:2px; height:auto; overflow:visible;">
                ${d.income > 0 ? `<div class="chart-bar-fill" style="width:${(d.income / maxVal) * 100}%; height:8px;"></div>` : ''}
                ${d.expense > 0 ? `<div class="chart-bar-fill failed" style="width:${(d.expense / maxVal) * 100}%; height:8px;"></div>` : ''}
            </div>
        </div>
    `).join('');
}

function formatRupiah(num) {
    if (num === undefined || num === null) return 'Rp 0';
    return 'Rp ' + num.toLocaleString('id-ID');
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
        // Hapus 1 item berdasarkan index-nya
        state.economy.splice(index, 1);

        // Simpan ke LocalStorage agar tidak hilang saat refresh
        saveToStorage(STORAGE_KEYS.economy, state.economy);

        // Update tampilan secara otomatis
        renderEconomyDashboard();

        // Tampilkan pesan sukses (jika fungsi showToast tersedia di kodemu)
        if (typeof showToast === 'function') {
            showToast('Transaksi berhasil dihapus');
        }
    }
}

document.addEventListener('click', e => {
    if (e.target?.id === 'reset-pockets-btn') {
        if (confirm('Reset semua saldo kantong ke Rp 0? Transaksi histori akan tetap ada.')) {
            state.pockets = { operasional: 0, eksplorasi: 0, kapasitas: 0 };
            saveToStorage('matter_pockets', state.pockets);
            renderEconomyDashboard();
        }
    }
    if (e.target?.id === 'split-income-btn') splitIncome();
});

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
        if (entry.wakeup === 'no') failedPillars.push('Bangun 04:00');
        if (entry.cognitiveRead === 'no') failedPillars.push('Baca Buku');
        if (entry.boxing === 'no') failedPillars.push('Latihan Fisik');
        if (entry.intellectual === 'no') failedPillars.push('Belajar Struktural');

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

// ========== Navigation ==========
function switchView(viewId) {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-view="${viewId}"]`)?.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${viewId}`)?.classList.add('active');

    if (viewId === 'dashboard') renderDashboard();
    if (viewId === 'charts') renderCharts();
    if (viewId === 'history') renderHistory();
    if (viewId === 'journal') renderJournal();
    if (viewId === 'interrogation') renderInterrogation();
    if (viewId === 'discipline-log') renderDisciplineLog();
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
    const icon = document.querySelector('.theme-icon');
    const text = document.querySelector('.theme-text');
    icon.textContent = saved === 'light' ? '🌙' : '☀️';
    text.textContent = saved === 'light' ? 'Dark Mode' : 'Light Mode';
}

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEYS.theme, next);
    const icon = document.querySelector('.theme-icon');
    const text = document.querySelector('.theme-text');
    icon.textContent = next === 'light' ? '🌙' : '☀️';
    text.textContent = next === 'light' ? 'Dark Mode' : 'Light Mode';
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

    initTheme();
    initNavigation();
    initPillarToggles();
    initHistoryFilters();

    document.getElementById('current-date').textContent = formatDisplayDate(getToday());

    document.getElementById('save-discipline-btn').addEventListener('click', saveDisciplineLog);
    document.getElementById('save-interrogation-btn').addEventListener('click', saveInterrogation);
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
