(function () {
  "use strict";

  const QUESTIONS_PER_GAME = 10;
  const STATS_KEY = "trivial_stats";
  const DAILY_KEY = "trivial_daily";

  // ===== DOM =====
  const $ = (sel) => document.querySelector(sel);
  const screenHome = $("#screen-home");
  const screenGame = $("#screen-game");
  const screenResults = $("#screen-results");

  const btnDaily = $("#btn-daily");
  const btnFree = $("#btn-free");

  const progressFill = $("#progress-fill");
  const questionCounter = $("#question-counter");
  const scoreDisplay = $("#score-display");
  const questionCat = $("#question-cat");
  const questionText = $("#question-text");
  const answersGrid = $("#answers-grid");
  const btnNext = $("#btn-next");

  const resultsEmoji = $("#results-emoji");
  const resultsTitle = $("#results-title");
  const scoreBig = $("#score-big");
  const shareResult = $("#share-result");
  const btnShare = $("#btn-share");
  const btnRestart = $("#btn-restart");
  const btnHome = $("#btn-home");

  // ===== STATE =====
  let currentQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let results = [];
  let isDaily = false;
  let answered = false;

  // ===== TOAST FEEDBACK =====
  let toastTimeout = null;

  function showToast(message, type) {
    const existing = document.querySelector(".feedback-toast");
    if (existing) existing.remove();
    if (toastTimeout) clearTimeout(toastTimeout);

    const toast = document.createElement("div");
    toast.className = "feedback-toast " + type;
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
      toast.classList.add("hide");
      setTimeout(() => toast.remove(), 300);
    }, 1500);
  }

  // ===== UTILS =====
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function seededRandom(seed) {
    let s = seed;
    return function () {
      s = (s * 16807 + 0) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  function getDailySeed() {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  function shuffleSeeded(arr, rng) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ===== STATS =====
  function loadStats() {
    try {
      return JSON.parse(localStorage.getItem(STATS_KEY)) || null;
    } catch {
      return null;
    }
  }

  function saveStats(stats) {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }

  function getStats() {
    return loadStats() || {
      played: 0,
      totalCorrect: 0,
      totalQuestions: 0,
      streak: 0,
      bestStreak: 0,
    };
  }

  function updateStats(correct, total) {
    const stats = getStats();
    stats.played++;
    stats.totalCorrect += correct;
    stats.totalQuestions += total;

    if (correct >= Math.ceil(total * 0.6)) {
      stats.streak++;
      if (stats.streak > stats.bestStreak) {
        stats.bestStreak = stats.streak;
      }
    } else {
      stats.streak = 0;
    }

    saveStats(stats);
    return stats;
  }

  function renderHomeStats() {
    const stats = getStats();
    if (stats.played === 0) {
      $("#home-stats").classList.add("hidden");
      return;
    }
    $("#home-stats").classList.remove("hidden");
    $("#stat-played").textContent = stats.played;
    $("#stat-streak").textContent = stats.streak;
    const pct =
      stats.totalQuestions > 0
        ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
        : 0;
    $("#stat-pct").textContent = pct + "%";
  }

  // ===== SCREENS =====
  function showScreen(screen) {
    [screenHome, screenGame, screenResults].forEach((s) =>
      s.classList.remove("active")
    );
    screen.classList.add("active");
  }

  // ===== DAILY CHECK =====
  function hasPlayedDaily() {
    try {
      const data = JSON.parse(localStorage.getItem(DAILY_KEY));
      return data && data.seed === getDailySeed();
    } catch {
      return false;
    }
  }

  function markDailyPlayed(score, total) {
    localStorage.setItem(
      DAILY_KEY,
      JSON.stringify({ seed: getDailySeed(), score, total, date: new Date().toISOString() })
    );
  }

  function getDailyResult() {
    try {
      return JSON.parse(localStorage.getItem(DAILY_KEY));
    } catch {
      return null;
    }
  }

  // ===== GAME =====
  function selectQuestions(daily) {
    const rng = daily ? seededRandom(getDailySeed()) : Math.random;
    let pool;

    if (daily) {
      pool = shuffleSeeded(QUESTIONS, rng);
    } else {
      pool = shuffle(QUESTIONS);
    }

    return pool.slice(0, QUESTIONS_PER_GAME);
  }

  function startGame(daily) {
    isDaily = daily;

    if (daily && hasPlayedDaily()) {
      const prev = getDailyResult();
      showResults(prev.score, prev.total, daily);
      return;
    }

    currentQuestions = selectQuestions(daily);
    currentIndex = 0;
    score = 0;
    results = [];
    answered = false;

    showScreen(screenGame);
    loadQuestion();
  }

  function loadQuestion() {
    answered = false;
    const q = currentQuestions[currentIndex];

    progressFill.style.width = ((currentIndex + 1) / QUESTIONS_PER_GAME) * 100 + "%";
    questionCounter.textContent = (currentIndex + 1) + " / " + QUESTIONS_PER_GAME;
    scoreDisplay.textContent = score + " aciertos";

    questionCat.textContent = q.cat;
    questionText.textContent = q.q;

    const buttons = answersGrid.querySelectorAll(".answer-btn");
    buttons.forEach((btn, i) => {
      btn.className = "answer-btn";
      btn.querySelector(".answer-text").textContent = q.a[i];
      btn.dataset.idx = i;
    });

    btnNext.classList.add("hidden");
  }

  function selectAnswer(idx) {
    if (answered) return;
    answered = true;

    const q = currentQuestions[currentIndex];
    const correct = idx === q.c;
    if (correct) score++;

    results.push(correct);

    const buttons = answersGrid.querySelectorAll(".answer-btn");
    buttons.forEach((btn, i) => {
      btn.classList.add("disabled");
      if (i === q.c) btn.classList.add("correct");
      if (i === idx && !correct) btn.classList.add("wrong");
    });

    if (correct) {
      const msgs = ["¡Correcto!", "¡Bien!", "¡Exacto!", "¡Muy bien!", "¡Perfecto!"];
      showToast(msgs[Math.floor(Math.random() * msgs.length)], "success");
    } else {
      showToast("¡Incorrecto!", "error");
    }

    scoreDisplay.textContent = score + " aciertos";
    btnNext.classList.remove("hidden");

    if (currentIndex === QUESTIONS_PER_GAME - 1) {
      btnNext.textContent = "Ver resultados";
    } else {
      btnNext.textContent = "Siguiente →";
    }
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex >= QUESTIONS_PER_GAME) {
      if (isDaily) markDailyPlayed(score, QUESTIONS_PER_GAME);
      showResults(score, QUESTIONS_PER_GAME, isDaily);
    } else {
      loadQuestion();
    }
  }

  function showResults(correct, total, daily) {
    const pct = Math.round((correct / total) * 100);
    const stats = daily ? updateStats(correct, total) : getStats();

    let emoji, title;
    if (pct >= 90) { emoji = "🏆"; title = "¡Increíble!"; }
    else if (pct >= 70) { emoji = "🎉"; title = "¡Genial!"; }
    else if (pct >= 50) { emoji = "😊"; title = "¡Bien!"; }
    else if (pct >= 30) { emoji = "🤔"; title = "Puedes mejorar"; }
    else { emoji = "😅"; title = "Sigue intentando"; }

    resultsEmoji.textContent = emoji;
    resultsTitle.textContent = title;
    scoreBig.textContent = correct;

    const resPct =
      stats.totalQuestions > 0
        ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
        : 0;

    $("#res-played").textContent = stats.played;
    $("#res-streak").textContent = stats.streak;
    $("#res-best").textContent = stats.bestStreak;
    $("#res-pct").textContent = resPct + "%";

    const shareEmojis = results.map((r) => (r ? "🟩" : "🟥")).join("");
    shareResult.textContent = shareEmojis;

    showScreen(screenResults);
  }

  function copyShare() {
    const shareEmojis = results.map((r) => (r ? "🟩" : "🟥")).join("");
    const text = `Trivial del Día\n${shareEmojis}\n${score}/${QUESTIONS_PER_GAME}`;
    navigator.clipboard.writeText(text).then(() => {
      btnShare.textContent = "✅ Copiado";
      setTimeout(() => {
        btnShare.innerHTML = '<span class="btn-icon">📋</span> Compartir';
      }, 2000);
    });
  }

  // ===== INIT =====
  function init() {
    renderHomeStats();

    btnDaily.addEventListener("click", () => startGame(true));
    btnFree.addEventListener("click", () => startGame(false));

    answersGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".answer-btn");
      if (btn) selectAnswer(parseInt(btn.dataset.idx));
    });

    btnNext.addEventListener("click", nextQuestion);
    btnShare.addEventListener("click", copyShare);
    btnRestart.addEventListener("click", () => startGame(isDaily));
    btnHome.addEventListener("click", () => {
      renderHomeStats();
      showScreen(screenHome);
    });
  }

  init();
})();
