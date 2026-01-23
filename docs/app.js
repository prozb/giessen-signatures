const I18N = {
    uk: {
      title: "Збір підписів",
      desc: "Ми збираємо підтримувальні підписи, щоб балотуватися на виборах Ради іноземців 2026 року в Гіссені.",
      live: "<strong>Онлайн</strong> · оновлюється вручну",
      lastUpdate: "Останнє оновлення:",
      lists: "Списки",
      listsSub: "Місто та район — невелике змагання до фінішу.",
      minGoal: "Мінімум",
      maxGoal: "Бажано досягти",
      collected: "Зібрано",
      delta: "Змінилось",
      remainingToMax: "До бажаного",
      remainingToMin: "До мінімуму",
      leaderTitle: "Хто попереду зараз?",
      leaderTie: "Нічия — обидва списки на однаковому рівні.",
      leaderText: (nameA, pctA, nameB, pctB) => `${nameA} попереду: <b>${pctA}%</b> ( ${nameB}: ${pctB}% ).`,
      reachedMaxTitle: "Фініш! 🎉",
      reachedMaxText: (name) => `${name} досяг максимуму. Дякуємо!`,
      bothReachedTitle: "Обидва фінішували! 🚀",
      bothReachedText: "Місто та район досягли максимуму. Супер!",
      candidates: "Кандидати",
      documents: "Документи",
      status: "Статус",
      statusStart: "Почати",
      statusWork: "В процесі",
      statusDone: "Готово",
      missing: "ще",
      completionTitle: "🎉 Вітаємо! Все успішно завершено.",
      completionAllSignatures: "Всі підписи зібрано",
      completionAllListsApproved: "Всі списки затверджено",
      completionPreparationCompleted: "Підготовку завершено"
    },
    de: {
      title: "Unterschriftensammlung",
      desc: "Wir sammeln Unterstützungsunterschriften, um zur Ausländerbeiratswahl 2026 in Gießen anzutreten.",
      live: "<strong>Live</strong> · manuell aktualisiert",
      lastUpdate: "Letztes Update:",
      lists: "Listen",
      listsSub: "Stadt und Landkreis – kleiner Wettkampf bis zur Ziellinie.",
      minGoal: "Minimum",
      maxGoal: "Maximum",
      collected: "Gesammelt",
      delta: "Änderung",
      remainingToMax: "Bis Maximum",
      remainingToMin: "Bis Minimum",
      leaderTitle: "Wer führt gerade?",
      leaderTie: "Gleichstand – beide Listen sind gleich weit.",
      leaderText: (nameA, pctA, nameB, pctB) => `${nameA} führt: <b>${pctA}%</b> ( ${nameB}: ${pctB}% ).`,
      reachedMaxTitle: "Ziellinie! 🎉",
      reachedMaxText: (name) => `${name} hat das Maximum erreicht. Danke!`,
      bothReachedTitle: "Beide Ziele erreicht! 🚀",
      bothReachedText: "Stadt und Landkreis haben das Maximum erreicht. Stark!",
      candidates: "Kandidaten",
      documents: "Dokumente",
      status: "Status",
      statusStart: "Starten",
      statusWork: "In Arbeit",
      statusDone: "Fertig",
      missing: "noch",
      completionTitle: "🎉 Herzlichen Glückwunsch! Alles wurde erfolgreich abgeschlossen.",
      completionAllSignatures: "Alle Unterschriften gesammelt",
      completionAllListsApproved: "Alle Listen genehmigt",
      completionPreparationCompleted: "Vorbereitung abgeschlossen"
    },
    en: {
      title: "Signature collection",
      desc: "We collect supporting signatures to run for the Foreigners’ Advisory Council election 2026 in Gießen.",
      live: "<strong>Live</strong> · updated manually",
      lastUpdate: "Last update:",
      lists: "Lists",
      listsSub: "City and district – a small race to the finish line.",
      minGoal: "Minimum",
      maxGoal: "Target",
      collected: "Collected",
      delta: "Change",
      remainingToMax: "To target",
      remainingToMin: "To minimum",
      leaderTitle: "Who leads right now?",
      leaderTie: "Tie — both lists are at the same level.",
      leaderText: (nameA, pctA, nameB, pctB) => `${nameA} leads: <b>${pctA}%</b> ( ${nameB}: ${pctB}% ).`,
      reachedMaxTitle: "Finish! 🎉",
      reachedMaxText: (name) => `${name} reached the target. Thank you!`,
      bothReachedTitle: "Both finished! 🚀",
      bothReachedText: "City and district reached the target. Awesome!",
      candidates: "Candidates",
      documents: "Documents",
      status: "Status",
      statusStart: "Start",
      statusWork: "In progress",
      statusDone: "Done",
      missing: "missing",
      completionTitle: "🎉 Congratulations! Everything is completed successfully.",
      completionAllSignatures: "All signatures collected",
      completionAllListsApproved: "All lists approved",
      completionPreparationCompleted: "Preparation completed"
    }
  };

  const state = {
    lang: "uk",
    data: null,
    celebratedKey: null,
    fxRunning: false,
    fxStopAt: 0
  };

  const el = (id) => document.getElementById(id);
  const els = {
    btnUA: el("btnUA"),
    btnDE: el("btnDE"),
    btnEN: el("btnEN"),
    t_title: el("t_title"),
    t_desc: el("t_desc"),
    t_live: el("t_live"),
    lastUpdateChip: el("lastUpdateChip"),
    nowChip: el("nowChip"),
    t_lists: el("t_lists"),
    t_lists_sub: el("t_lists_sub"),
    campaignList: el("campaignList"),
    leaderBox: el("leaderBox"),
    completionBanner: el("completionBanner"),
    completionTitle: el("completionTitle"),
    completionStatus: el("completionStatus"),
    toast: el("toast"),
    toastTitle: el("toastTitle"),
    toastText: el("toastText"),
    fxWrap: el("fxWrap"),
    fx: el("fx"),
  };

  function setLang(lang){
    state.lang = lang;
    document.documentElement.lang = lang;

    els.btnUA.setAttribute("aria-pressed", lang === "uk" ? "true" : "false");
    els.btnDE.setAttribute("aria-pressed", lang === "de" ? "true" : "false");
    els.btnEN.setAttribute("aria-pressed", lang === "en" ? "true" : "false");

    const t = I18N[lang];
    els.t_title.textContent = t.title;
    els.t_desc.textContent = t.desc;
    els.t_live.innerHTML = t.live;
    els.t_lists.textContent = t.lists;
    els.t_lists_sub.textContent = t.listsSub;
    
    // Update completion banner
    if(els.completionTitle) els.completionTitle.textContent = t.completionTitle;
    if(els.completionStatus) {
      els.completionStatus.innerHTML = `
        <div class="completion-item">✓ ${t.completionAllSignatures}</div>
        <div class="completion-item">✓ ${t.completionAllListsApproved}</div>
        <div class="completion-item">✓ ${t.completionPreparationCompleted}</div>
      `;
    }

    render();
  }

  els.btnUA.addEventListener("click", () => setLang("uk"));
  els.btnDE.addEventListener("click", () => setLang("de"));
  els.btnEN.addEventListener("click", () => setLang("en"));

  const clamp = (v,min,max) => Math.min(max, Math.max(min,v));
  const fmtPct = (p) => (Math.round(p*10)/10).toFixed(1);

  function fmtDate(iso){
    if(!iso) return "—";
    const d = new Date(iso);
    if(Number.isNaN(d.getTime())) return "—";
    const locale = state.lang === "uk" ? "uk-UA" : "de-DE";
    return new Intl.DateTimeFormat(locale, {
      year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit"
    }).format(d);
  }

  function nameForLang(c){
    if(state.lang === "uk") return c.name_uk || c.name_de || c.name_en || c.id;
    if(state.lang === "en") return c.name_en || c.name_de || c.name_uk || c.id;
    
    return c.name_de || c.name_en || c.name_uk || c.id; // de default
  }

  function colorForPct(p){
    if(p < 40) return getCss("--c-low");
    if(p < 75) return getCss("--c-mid");
    return getCss("--c-high");
  }
  function getCss(varName){
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }

  function fmtNow(){
    const d = new Date();

    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();

    const hh = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");

    return `${dd}.${mm}.${yyyy}, ${hh}:${min}`;
  }

  function updateNowChip(){
    if(!els.nowChip) return;

    const label =
      state.lang === "uk" ? "Зараз:" :
      state.lang === "en" ? "Now:" :
      "Jetzt:";

    els.nowChip.innerHTML = `${label} <strong>${fmtNow()}</strong>`;
  }

  // ⚡ Energie-Emoji bei positivem Delta
  function formatDelta(n){
    const v = Number(n ?? 0);
    if(!Number.isFinite(v) || v === 0) return "±0";
    if(v > 0) return "+" + v + " ⚡";
    return String(v);
  }
  function deltaClass(n){
    const v = Number(n ?? 0);
    if(!Number.isFinite(v) || v === 0) return "";
    return v > 0 ? "deltaPlus" : "deltaMinus";
  }

  function compute(){
    const campaigns = (state.data?.campaigns || []).map(c => {
      const minGoal = Number(c.minGoal ?? 0);
      const maxGoal = Number(c.maxGoal ?? 0);
      const collected = Number(c.collected ?? 0);
      const delta = Number(c.delta ?? 0);

      const pctMax = maxGoal > 0 ? clamp((collected / maxGoal) * 100, 0, 120) : 0;
      const minPos = maxGoal > 0 ? clamp((minGoal / maxGoal) * 100, 0, 100) : 0;

      const remainingToMax = Math.max(maxGoal - collected, 0);
      const remainingToMin = Math.max(minGoal - collected, 0);

      const reachedMax = maxGoal > 0 && collected >= maxGoal;

      return {
        ...c,
        minGoal, maxGoal, collected, delta,
        pctMax, minPos,
        remainingToMax,
        remainingToMin,
        reachedMax
      };
    });

    const allReached = campaigns.length > 0 && campaigns.every(c => c.reachedMax);
    return { campaigns, allReached };
  }

  // ✅ анимация: после рендера выставляем ширину fill из data-target
  function animateFills(){
    const fills = els.campaignList.querySelectorAll(".fill[data-target]");
    requestAnimationFrame(() => {
      fills.forEach(f => {
        const target = Number(f.dataset.target || "0");
        const color = f.dataset.color || "";
        if(color) f.style.background = color;
        f.style.width = target + "%";
      });
    });
  }

  function renderGroup(title, campaigns, t){
    // Überschrift als kleines H3 in derselben Card
    const h = document.createElement("div");
    h.style.position = "relative";
    h.style.zIndex = "1";
    h.style.marginTop = "12px";
    h.style.marginBottom = "8px";
    h.innerHTML = `<div style="font-weight:800; letter-spacing:.01em;">${title}</div>`;
    els.campaignList.appendChild(h);

    if(!campaigns.length){
      const empty = document.createElement("div");
      empty.className = "item";
      empty.style.opacity = "0.75";
      empty.innerHTML = `<div class="name">—</div><div class="sub">${state.lang === "de" ? "Keine Listen vorhanden." : (state.lang === "en" ? "No lists available." : "Немає списків.")}</div>`;
      els.campaignList.appendChild(empty);
      return;
    }

    campaigns.forEach(c => {
      const name = nameForLang(c);
      const pctLabel = fmtPct(clamp(c.pctMax,0,100));
      const targetWidth = clamp(c.pctMax,0,100);
      const fillColor = colorForPct(targetWidth);

      const candidatesTotal = Number(c.candidatesTotal ?? 0);
      const docsSubmitted = Number(c.docsSubmitted ?? 0);
      const missingDocs = Math.max(candidatesTotal - docsSubmitted, 0);

      let statusEmoji = "🔴";
      let statusText = I18N[state.lang].statusStart;

      if (candidatesTotal > 0 && docsSubmitted > 0 && docsSubmitted < candidatesTotal) {
        statusEmoji = "🟡";
        statusText = I18N[state.lang].statusWork;
      }
      if (candidatesTotal > 0 && docsSubmitted >= candidatesTotal) {
        statusEmoji = "🟢";
        statusText = I18N[state.lang].statusDone;
      } 

      const item = document.createElement("div");
      item.className = "item";

      item.innerHTML = `
        <div class="itemHead">
          <div class="name">${name}</div>
          <div class="pct">${pctLabel}%</div>
        </div>

        <div class="progressWrap">
          <div class="track" aria-hidden="true">
            <!-- старт с 0%, потом анимируем к data-target -->
            <div class="fill" style="width:0%" data-target="${targetWidth}" data-color="${fillColor}"></div>
          </div>

          <!-- ✅ marker под bar -->
          <div class="minMarker" style="left:${c.minPos}%;" title="${t.minGoal}: ${c.minGoal}"></div>
        </div>

        <div class="badgeRow">
          <div class="pill">${t.collected}: <b>${c.collected}</b></div>
          <div class="pill ${deltaClass(c.delta)}">${t.delta}: <b>${formatDelta(c.delta)}</b></div>
          <div class="pill">${t.minGoal}: <b>${c.minGoal}</b></div>
          <div class="pill">${t.maxGoal}: <b>${c.maxGoal}</b></div>
        </div>

        <!-- <div class="row">
          <div>${t.remainingToMin}: <strong>${c.remainingToMin}</strong></div>
          <div>${t.remainingToMax}: <strong>${c.remainingToMax}</strong></div>
        </div> -->

        <div class="divider"></div>

        <div class="badgeRow">
          <div class="pill">${t.candidates}: <b>${candidatesTotal}</b></div>
          <div class="pill">${t.documents}: <b>${docsSubmitted}/${candidatesTotal}</b></div>
          <div class="pill">${t.status}: <b>${statusEmoji} ${statusText}${(candidatesTotal > 0 && docsSubmitted < candidatesTotal) ? ` (${t.missing} ${missingDocs})` : ""}</b></div>
        </div>
      `;

      els.campaignList.appendChild(item);
    });

    renderLeaderForGroup(els.campaignList, campaigns, t);
  }

  function render(){
    if(!state.data) return;
    const t = I18N[state.lang];

    els.lastUpdateChip.innerHTML = `${t.lastUpdate} <strong>${fmtDate(state.data.lastUpdated)}</strong>`;

    const s = compute();
    
    els.campaignList.innerHTML = "";

    const campaigns = s.campaigns;

    // optionaler Fallback: wenn scope fehlt -> city
    const cityCampaigns = campaigns.filter(c => (c.scope || "city") === "city");
    const districtCampaigns = campaigns.filter(c => c.scope === "district");


    els.campaignList.innerHTML = "";

    const cityTitle = (state.lang === "de") ? "Stadt Gießen" : (state.lang === "en" ? "City of Gießen" : "Місто Гіссен");
    const districtTitle = (state.lang === "de") ? "Landkreis Gießen" : (state.lang === "en" ? "District of Gießen" : "Район Гіссен");

    renderGroup(districtTitle, districtCampaigns, t);
    renderGroup(cityTitle, cityCampaigns, t);

    // leader

    maybeCelebrate(s);

    // ✅ запускаем анимацию заполнения
    animateFills();
  }

  function renderLeaderForGroup(container, campaigns, t){
    if (!campaigns || campaigns.length === 0) {
      const box = document.createElement("div");
      box.className = "leader";
      box.innerHTML = `<b>${t.leaderTitle}</b><br/>—`;
      container.appendChild(box);
      return;
    }

    if (campaigns.length === 1) {
      const c = campaigns[0];
      const name = nameForLang(c);
      const pct = fmtPct(clamp(c.pctMax, 0, 100));

      const box = document.createElement("div");
      box.className = "leader";
      box.innerHTML = `<b>${t.leaderTitle}</b><br/>${name}: <b>${pct}%</b>`;
      container.appendChild(box);
      return;
    }

    const sorted = [...campaigns].sort((a, b) => b.pctMax - a.pctMax);
    const a = sorted[0];
    const b = sorted[1];

    const box = document.createElement("div");
    box.className = "leader";

    if (Math.abs(a.pctMax - b.pctMax) < 0.05) {
      box.innerHTML = `<b>${t.leaderTitle}</b><br/>${t.leaderTie}`;
    } else {
      box.innerHTML =
        `<b>${t.leaderTitle}</b><br/>` +
        t.leaderText(
          nameForLang(a), fmtPct(clamp(a.pctMax, 0, 100)),
          nameForLang(b), fmtPct(clamp(b.pctMax, 0, 100))
        );
    }

    container.appendChild(box);
  }

  function showToast(title, text){
    els.toastTitle.textContent = title;
    els.toastText.textContent = text;
    els.toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=> els.toast.classList.remove("show"), 5200);
  }

  function maybeCelebrate(s){
    const t = I18N[state.lang];
    const key = state.data?.lastUpdated || "x";
    if(state.celebratedKey === key) return;

    const reached = s.campaigns.filter(c => c.reachedMax);
    if(reached.length === 0) return;

    state.celebratedKey = key;

    if(s.allReached){
      showToast(t.bothReachedTitle, t.bothReachedText);
      startFx(10000);
    } else {
      const first = reached[0];
      showToast(t.reachedMaxTitle, t.reachedMaxText(nameForLang(first)));
      startFx(7000);
    }
  }

  // Starfall FX (unverändert)
  let ctx, W, H, stars = [];
  function resizeFx(){
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    W = window.innerWidth;
    H = window.innerHeight;
    els.fx.width = Math.floor(W * dpr);
    els.fx.height = Math.floor(H * dpr);
    els.fx.style.width = W + "px";
    els.fx.style.height = H + "px";
    ctx = els.fx.getContext("2d");
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function rand(a,b){ return a + Math.random()*(b-a); }
  function makeStar(){
    const big = Math.random() < 0.14;
    const r = big ? rand(3.2, 6.4) : rand(1.4, 3.2);
    const palette = [
      `rgba(34,197,94,`,
      `rgba(245,158,11,`,
      `rgba(239,68,68,`,
      `rgba(255,255,255,`
    ];
    const c = palette[Math.floor(Math.random()*palette.length)];
    return {
      x: rand(0, W),
      y: rand(-H, -20),
      vy: rand(1.3, 4.6) * (big ? 1.15 : 1),
      vx: rand(-0.35, 0.35),
      r,
      rot: rand(0, Math.PI*2),
      vr: rand(-0.07, 0.07),
      a: rand(0.35, 1),
      c
    };
  }
  function spawnStars(n){
    stars = [];
    for(let i=0;i<n;i++) stars.push(makeStar());
  }
  function drawStar(x,y,r,rot,alpha,colorPrefix){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    const spikes = 5;
    const outer = r;
    const inner = r*0.45;
    for(let i=0;i<spikes*2;i++){
      const ang = (Math.PI/spikes) * i;
      const rad = (i%2===0) ? outer : inner;
      ctx.lineTo(Math.cos(ang)*rad, Math.sin(ang)*rad);
    }
    ctx.closePath();
    ctx.fillStyle = colorPrefix + alpha + ")";
    ctx.fill();
    ctx.restore();
  }
  function tickFx(now){
    if(!state.fxRunning) return;
    if(now > state.fxStopAt){ stopFx(); return; }
    ctx.clearRect(0,0,W,H);

    for(const s of stars){
      s.x += s.vx;
      s.y += s.vy;
      s.rot += s.vr;
      s.a += rand(-0.03, 0.03);
      s.a = clamp(s.a, 0.2, 1);

      drawStar(s.x, s.y, s.r, s.rot, s.a, s.c);

      if(s.y > H + 30){
        s.x = rand(0, W);
        s.y = rand(-220, -20);
        s.vy = rand(1.3, 4.6);
      }
    }
    requestAnimationFrame(tickFx);
  }
  function startFx(durationMs){
    if(state.fxRunning){
      state.fxStopAt = performance.now() + durationMs;
      return;
    }
    state.fxRunning = true;
    state.fxStopAt = performance.now() + durationMs;
    els.fxWrap.classList.add("show");
    resizeFx();
    const n = Math.min(200, Math.max(90, Math.floor((W*H)/16000)));
    spawnStars(n);
    requestAnimationFrame(tickFx);
  }
  function stopFx(){
    state.fxRunning = false;
    els.fxWrap.classList.remove("show");
    if(ctx) ctx.clearRect(0,0,W,H);
  }
  window.addEventListener("resize", ()=>{ if(state.fxRunning) resizeFx(); });

  async function loadData(){
    const res = await fetch("signatures.json?ts=" + Date.now(), { cache: "no-store" });
    if(!res.ok) throw new Error("signatures.json konnte nicht geladen werden");
    return await res.json();
  }

  (async function init(){
    setLang("de");
    updateNowChip();
    setInterval(updateNowChip, 1000);
    
    try{
      state.data = await loadData();
      render();
    }catch(e){
      console.error(e);
      showToast("⚠️", "signatures.json konnte nicht geladen werden. Bitte lokal über http testen (Live Server / python -m http.server).");
    }
  })();

  document.getElementById("year").textContent = new Date().getFullYear();