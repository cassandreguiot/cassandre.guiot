/* ==========================================================================
   Cassandre Guiot — comportement du site
   - Réglages généraux : objet SITE ci-dessous
   - Projets / textes / images : js/data.js
   - C.V. : objet CV ci-dessous
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------- Réglages généraux ---------------- */
  const SITE = {
    updated: "25/10/2026",                       // « Dernière mise à jour »
    portfolio: "https://drive.google.com/file/d/17emiSL-Zf9mV62iMfsimKsuliflRTXpU/view?usp=drive_link",
    instagram: "https://www.instagram.com/cassandre.guiot/",
    email: "cassandre.guiot@ensaama.net",
    phone: "(+33)664148591",
    tel: "+33664148591",
    formKey: "",                               // clé d'accès Web3Forms (voir LISEZ-MOI.txt). Vide = « Contact » ouvre ton application mail
    formEndpoint: "https://api.web3forms.com/submit",
    interval: 2000,                            // durée d'une image du carrousel (ms)
  };

  /* ---------------- C.V. ---------------- */
  const CV = {
    role: "Graphisme, illustration & céramique",
    bio: [
      "Diplômée d’un DSAA Graphisme Transmédias à l’ENSAAMA, je développe une pratique visuelle qui oscille entre art et design, installation, expérimentation graphique et narration. Mon travail s’inscrit dans une attention au sensible : à ce qui relie les êtres et les milieux, aux formes qui nous permettent d’habiter le monde différemment, jusqu’aux projets collectifs et musicaux.",
      "Ce site rassemble une sélection de mes recherches, projets et collaborations, avec le désir de proposer des approches qui prennent soin, qui racontent, et qui ouvrent des espaces d’attention partagée.",
    ],
    sections: [
      ["Formations", [
        ["DSAA GRAPHISME TRANSMÉDIAS", "ENSAAMA Olivier de Serres (Paris)", "Mention B", "2025"],
        ["DNMADE GRAPHISME ÉDITION & TYPOGRAPHIE", "ENSAAMA Olivier de Serres (Paris)", "Mention Excellence professionnelle", "2023"],
        ["BAFA", "2021"],
      ]],
      ["Parcours", [
        ["Graphiste freelance", "Commandes & prestations pour différents clients", "(Essence Wellness, JAR...)", "Nov. 2025 - (/)"],
        ["Médiathèque d’Orléans", "Réparation de livres, accueil, mise à disposition des collections, communication, animation", "Oct. 2025 - (/)"],
        ["Animatrice en séjour", "Camping du Val Fleuri, Cloyes-les-Trois-Rivières", "Groupe des 7-9 ans", "07 Juill. 2025 - 11 Juill. 2025"],
        ["Animatrice en centre de loisirs", "Beauregard, Chécy", "Groupe des 6-9 ans", "18 Août 2025 - 29 Août 2025", "01 Août 2021 - 31 Août 2021"],
        ["Stagiaire graphiste", "avec GUILLAUMIT", "Fabrique POLA, Bordeaux", "Fresques participatives & encadrement d’enfants, graphisme en collaboration avec les habitants", "04 Avr. 2024 - 31 Juil. 2024"],
        ["Stagiaire graphiste", "DRIVING EVOLUTION", "Bièvres", "Création de templates, présentations, posts & réseaux sociaux, animation, publicité sur lieu de vente (PLV)", "09 Mai 2022 - 29 Juil. 2022"],
        ["Animatrice en centre de loisirs", "La-Motte-Aux-Dames, Luçon", "Groupe des 3-5 ans", "12 Juil. 2021 - 30 Juil. 2021"],
        ["Stagiaire vitrailliste", "Poésie du verre", "Bayonne", "Apprentissage du vitrail Tiffany, vitrail au plomb et technique fusing", "14 Juin 2021 - 25 Juin 2021"],
        ["BAFA pratique", "Les Coteaux, Mardié", "19 Oct. 2020 - 20 Oct. 2020", "21 Déc. 2020 - 24 Déc. 2020"],
        ["Stagiaire graphiste", "Agence RELLINGER", "Dompierre-Sur-Yon", "Apprentissage des logiciels PAO", "22 Fév. 2017 - 27 Fév. 2017"],
      ]],
      ["Langues", [["Français", "Anglais"]]],
      ["Compétences", [["Graphisme", "Maîtrise des outils informatiques & PAO", "Découpe laser", "Céramique", "Sérigraphie", "Risographie", "Animation", "Photographie", "Illustration", "Typographie", "Fresque"]]],
      ["Expositions", [
        ["Schmilblick #02", "JAR", "Dropkick Bar, Orléans", "Fév. 2026"],
        ["Festival des fulgurances électroniques", "Exposition collective", "le 108, Orléans", "Nov. 2025"],
        ["Faune Festival", "Exposition et ateliers de fabrication de papier", "Pornic", "Sept. 2025"],
        ["Portes ouvertes des ateliers Oulan Bator", "Orléans", "Peinture, céramique, installation, dessin, photographie, artshop, tombola, jam session", "Juin 2025"],
        ["Schmilblick", "JAR", "Dropkick Bar, Orléans", "Avr. 2025"],
        ["Intrusion 3", "JAR", "Théo, Orléans", "Fév. 2025"],
        ["Intrusion 2", "JAR", "Miel, Orléans", "Déc. 2024"],
        ["Intrusion 1", "JAR", "Julien, Orléans", "Nov. 2024"],
        ["Exposition 1", "JAR", "Atelier de Gravure Jacques Robak, Orléans", "Août 2024"],
        ["Visual Jam", "le 108, Orléans", "Juill. 2024"],
      ]],
      ["Presse", [
        ["“Oulan Bator”, les ateliers d’artistes,", "Orléans mag 233, par Émilie Cuchet", "Nov. 2025"],
        ["“Le collectif JAR, composé de jeunes artistes d’Orléans, s’expose à l’atelier du graveur Jacques Robak”,", "La république du centre, par Romain Tible", "14 août 2024"],
      ]],
    ],
  };

  /* ---------------- Outils ---------------- */
  const NN = "\u202F", NB = "\u00A0";
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Espaces fines insécables avant ; : ! ? » et après «
  function typo(s) {
    return String(s)
      .replace(/[ \u00A0\u202F]*([;:!?»])/g, NN + "$1")
      .replace(/«[ \u00A0\u202F]*/g, "«" + NN);
  }
  // Évite veuves et orphelins : les deux derniers mots restent ensemble
  function glue(s) {
    const t = s.trimEnd();
    const i = t.lastIndexOf(" ");
    return i > 0 && t.length - i < 24 ? t.slice(0, i) + NB + t.slice(i + 1) : t;
  }
  const fmt = (s) => esc(glue(typo(s)));
  const P = window.PROJECTS || [];
  const bySlug = (s) => P.find((p) => p.slug === s);
  // version allégée (dossier m/) pour les miniatures de la grille et l'aperçu ; l'image agrandie utilise le fichier complet
  const msrc = (it) => (window.__NOVARIANT || it.v) ? it.src : it.src.replace(/\/([^\/]+)$/, "/m/$1");
  const isTouch = window.matchMedia("(hover: none)").matches;

  const pop1 = $("#pop1"), pop2 = $("#pop2"), list = $("#list");
  const state = { p1: null, p2: null };
  let carousels = [];

  /* ---------------- Accueil ---------------- */
  function renderHome() {
    const items = [];
    items.push(`<li><a class="proj" href="#contact" data-act="contact">Cassandre Guiot</a></li>`);
    items.push(`<li><a class="proj" href="${SITE.portfolio}" target="_blank" rel="noopener"><span class="arrow">↗</span> Portfolio</a></li>`);
    items.push(`<li><a class="proj" href="#cv" data-act="cv">C.V.</a></li>`);
    P.forEach((p) => {
      items.push(`<li><a class="proj" href="#${p.slug}" data-project="${p.slug}"><span class="hl"><span class="cat">${esc(p.cat)}</span><span class="name">${esc(p.name)}</span>${p.sub ? `<br><span class="sub">${esc(p.sub)}</span>` : ""}</span></a></li>`);
    });
    list.innerHTML = items.join("");
    $("#updated").textContent = typo("Dernière mise à jour : " + SITE.updated);
  }

  // Fige la hauteur de chaque titre pour que le changement de typo au survol ne décale rien
  function lockHeights() {
    list.querySelectorAll(".proj").forEach((a) => { a.style.height = ""; });
    list.querySelectorAll(".proj").forEach((a) => { a.style.height = a.getBoundingClientRect().height + "px"; });
  }

  /* ---------------- Survol des titres : bandeau coloré + aperçu qui suit la souris ---------------- */
  const BAND = ["#f7cffc", "#8cc9fa", "#eb5130", "#fbe8e7"];   // les 4 couleurs, en alternance
  let bandIdx = 0;
  const preview = $("#preview");
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pv = { x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0, on: false, raf: 0, last: 0, mx: 0, my: 0 };
  function pvTarget() {
    const w = preview.offsetWidth, h = preview.offsetHeight;
    let x = pv.mx + 22;                                  // à droite du curseur
    if (x + w > innerWidth - 8) x = pv.mx - 22 - w;      // pas la place : de l'autre côté
    const y = Math.max(8, Math.min(innerHeight - h - 8, pv.my - h / 2));   // centré verticalement sur la souris
    pv.tx = x; pv.ty = y;
  }
  function pvTick(t) {                                   // ressort amorti : fluide, sans à-coups
    const dt = Math.min(0.034, (t - pv.last) / 1000 || 0.016); pv.last = t;
    const k = 360, c = 2 * Math.sqrt(k) * 0.9;
    if (reduce) { pv.x = pv.tx; pv.y = pv.ty; pv.vx = pv.vy = 0; }
    else {
      pv.vx += ((pv.tx - pv.x) * k - c * pv.vx) * dt; pv.vy += ((pv.ty - pv.y) * k - c * pv.vy) * dt;
      pv.x += pv.vx * dt; pv.y += pv.vy * dt;
    }
    preview.style.transform = `translate3d(${pv.x.toFixed(2)}px,${pv.y.toFixed(2)}px,0)`;
    pv.raf = pv.on ? requestAnimationFrame(pvTick) : 0;
  }
  function showPreview(slug) {
    const p = bySlug(slug); if (!p || !p.p1.length) return;
    const it = p.p1[0];
    const src = it.v ? it.src.replace(/\.mp4$/, ".poster.jpg") : msrc(it);
    preview.innerHTML = `<div class="pv-in"><img src="${src}" alt="" style="aspect-ratio:${it.w}/${it.h}"></div>`;
    pvTarget();
    if (!pv.on) { pv.x = pv.tx; pv.y = pv.ty; pv.vx = pv.vy = 0; }
    pv.on = true;
    if (!pv.raf) { pv.last = performance.now(); pv.raf = requestAnimationFrame(pvTick); }
    requestAnimationFrame(() => preview.classList.add("show"));
  }
  function hidePreview() { pv.on = false; preview.classList.remove("show"); }
  let hovered = null, bandTimer = 0;
  const setBand = (a, s) => { if (s) a.dataset.band = s; else delete a.dataset.band; };
  function leaveTitle(keepPreview) {
    clearTimeout(bandTimer);
    if (hovered) {
      const a = hovered;
      if (a.dataset.band === "out") { setBand(a, "gone"); setTimeout(() => { if (a.dataset.band === "gone") setBand(a, null); }, 60); }
      else setBand(a, null);
    }
    hovered = null;
    if (!keepPreview) hidePreview();
  }
  function enterTitle(a) {
    if (hovered === a) return;
    leaveTitle(true);
    hovered = a;
    a.style.setProperty("--band", BAND[bandIdx++ % BAND.length]);   // la couleur change d'un titre à l'autre
    setBand(a, "in");
    bandTimer = setTimeout(() => setBand(a, "out"), 500);          // puis le bandeau s'efface en fondu (0,5 s)
    if (fine && !(state.p1 || state.p2)) showPreview(a.dataset.project); else hidePreview();   // pas d'aperçu si un pop-up est ouvert
  }
  list.addEventListener("pointerover", (e) => {
    const a = e.target.closest("[data-project]");
    if (a) { pv.mx = e.clientX; pv.my = e.clientY; enterTitle(a); } else leaveTitle();
  });
  list.addEventListener("pointerleave", () => leaveTitle());
  document.addEventListener("pointermove", (e) => { if (pv.on) { pv.mx = e.clientX; pv.my = e.clientY; pvTarget(); } }, { passive: true });

  /* ---------------- Carrousel (fondu, boucle, flèches au survol) ---------------- */
  const CHEV = (d) => `<svg viewBox="0 0 12 12"><path d="${d}"/></svg>`;
  function Carousel(frame, tracks, opts) {
    opts = opts || {};
    const idx = tracks.map(() => 0);
    const slides = tracks.map((items, t) => {
      const host = frame.querySelector(`[data-track="${t}"]`) || frame;
      return items.map((it, i) => {
        const s = document.createElement("div");
        s.className = "slide";
        if (it.v) {
          s.innerHTML = `<video src="${it.src}" poster="${it.src.replace(/\.mp4$/, ".poster.jpg")}" muted loop playsinline preload="auto"></video>`;
        } else {
          s.innerHTML = `<img src="${it.src}" alt="" decoding="async"${i === 0 ? ' fetchpriority="high"' : ""}>`;
        }
        host.appendChild(s);
        return s;
      });
    });
    const prev = document.createElement("button");
    prev.className = "arrow-btn prev"; prev.setAttribute("aria-label", "Précédent"); prev.innerHTML = CHEV("M7.5 1.5 3 6l4.5 4.5");
    const next = document.createElement("button");
    next.className = "arrow-btn next"; next.setAttribute("aria-label", "Suivant"); next.innerHTML = CHEV("M4.5 1.5 9 6l-4.5 4.5");
    frame.appendChild(prev); frame.appendChild(next);

    let timer = 0, hover = false, dead = false;
    const activeVideo = () => slides.some((arr, t) => arr[idx[t]].querySelector("video"));
    function paint() {
      slides.forEach((arr, t) => arr.forEach((s, i) => {
        const on = i === idx[t], v = s.querySelector("video");
        s.classList.toggle("on", on);
        if (v) { if (on) { try { v.currentTime = 0; v.play().catch(() => {}); } catch (e) {} } else setTimeout(() => { if (!s.classList.contains("on")) v.pause(); }, 900); }
      }));
      if (opts.onChange) opts.onChange(idx[0]);
    }
    function schedule() {
      clearTimeout(timer);
      if (dead || (hover && activeVideo())) return;   // une vidéo survolée joue jusqu'à la fin du survol
      timer = setTimeout(() => go(1, true), SITE.interval);
    }
    function go(d, auto) {
      idx.forEach((_, t) => { const n = slides[t].length; idx[t] = (idx[t] + d + n) % n; });
      paint(); schedule();
    }
    prev.addEventListener("click", (e) => { e.stopPropagation(); go(-1); });
    next.addEventListener("click", (e) => { e.stopPropagation(); go(1); });
    frame.addEventListener("mouseenter", () => { hover = true; schedule(); });
    frame.addEventListener("mouseleave", () => { hover = false; schedule(); });
    paint(); schedule();
    return { destroy() { dead = true; clearTimeout(timer); }, index: () => idx[0] };
  }
  function killCarousels() { carousels.forEach((c) => c.destroy()); carousels = []; }

  /* ---------------- Pop-up 1 ---------------- */
  function capHTML(lines) {
    return lines.map((l) => `<div${l.i ? ' class="it"' : ""}>${fmt(l.t)}</div>`).join("");
  }
  function renderP1() {
    killCarousels();
    const s = state.p1;
    if (!s) { pop1.hidden = true; pop1.innerHTML = ""; return; }
    pop1.hidden = false;
    if (s.t === "contact") {
      pop1.innerHTML = `<div class="contact">
        <div><p>Cassandre GUIOT</p><p class="it">${esc(CV.role)}</p>
        <p><a class="link" href="mailto:${SITE.email}">${SITE.email}</a></p>
        <p><a class="link" href="tel:${SITE.tel}">${SITE.phone}</a></p>
        <p><a class="link" href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a></p></div>
        <button class="link close" data-act="close1">(Fermer)</button>
        <ul><li class="in"><button class="link" data-act="form">Contact (↗)</button></li></ul>
      </div>`;
      return;
    }
    const p = bySlug(s.slug), dual = p.slug === "dingbat";
    const ratio = dual ? 1.5 : p.p1[0].w / p.p1[0].h;
    pop1.innerHTML = `<div class="pop-in">${dual ? '<div class="dualwrap"><div class="frame light" style="aspect-ratio:.75"></div><div class="frame light" style="aspect-ratio:1.5"></div></div>' : `<div class="frame" style="aspect-ratio:${ratio}"></div>`}
      <div class="caption"><div>${capHTML(p.cap)}</div><button class="more link" data-act="more" data-slug="${p.slug}">(++)</button></div></div>`;
    const frames = pop1.querySelectorAll(".frame");
    if (dual) { carousels.push(Carousel(frames[0], [p.p1]), Carousel(frames[1], [p.p1b])); }
    else carousels.push(Carousel(frames[0], [p.p1]));
  }

  /* ---------------- Pop-up 2 ---------------- */
  let gallery = [];                              // médias de la grille (pour l'image agrandie)
  const mediaTag = (it, eager) => it.v
    ? `<video src="${it.src}" poster="${it.src.replace(/\.mp4$/, ".poster.jpg")}" width="${it.w}" height="${it.h}" autoplay muted loop playsinline preload="metadata"></video>`
    : `<img src="${msrc(it)}" width="${it.w}" height="${it.h}" alt="" ${eager ? "" : 'loading="lazy" '}decoding="async">`;
  function textHTML(paras) {
    return paras.map((q) => `<p class="${q.li ? "li" : q.ind ? "ind" : ""}${q.sp ? " sp" : ""}">${fmt(q.t)}</p>`).join("");
  }
  function renderP2() {
    const s = state.p2;
    pop2.scrollTop = 0;
    if (!s) { pop2.hidden = true; pop2.innerHTML = ""; return; }
    pop2.hidden = false;
    if (s.t === "cv") return renderCV();
    const p = bySlug(s.slug);
    gallery = [];
    const head = `<div class="head"><div class="c1">${p.h1.map((l) => l.t ? `<p${l.i ? ' class="it"' : ""}>${fmt(l.t)}</p>` : "<p>&nbsp;</p>").join("")}</div><div class="c2">${textHTML(p.h2)}</div></div>
      <div class="hr"></div><div class="closebar"><button class="link" data-act="close2">(Fermer)</button></div>`;
    let body = "";
    const cell = (it, cls) => { gallery.push(it); return `<button class="cell${cls ? " " + cls : ""}" data-lb="${gallery.length - 1}">${mediaTag(it, gallery.length <= 8)}</button>`; };
    if (p.cols) {
      body = `<div class="cols">${p.cols.map((col) => `<div class="col">${col.map((i) => cell(p.p2[i])).join("")}</div>`).join("")}</div>`;
    } else {
      let cur = 0, html = "";
      p.grid.forEach((g) => {
        if (g.k === "img") { html += cell(p.p2[g.i], g.span === 2 ? "span2" : ""); cur = g.span === 2 ? cur : (cur + 1) % 2; }
        else if (g.k === "rule") { html += '<div class="grule"></div>'; }
        else if (g.k === "slides") {
          const first = gallery.length; g.i.forEach((i) => gallery.push(p.p2[i]));
          const r = p.p2[g.i[0]].w / p.p2[g.i[0]].h;
          html += `<div class="cell frame slides" data-lb="${first}" data-n="${g.i.length}" style="aspect-ratio:${r}" data-slides='${JSON.stringify(g.i)}'></div>`; cur = (cur + 1) % 2;
        } else {
          const cls = (cur === 1 && g.col === 2 ? "sidecol" : g.col === 2 ? "c2" : "c1") + (g.gap ? " gap" : "");
          html += `<div class="gtext ${cls}">${textHTML(g.p)}</div>`; cur = 0;
        }
      });
      body = `<div class="grid" style="padding-top:${p.gridTop || 0}px">${html}</div>`;
    }
    pop2.innerHTML = head + body;
    pop2.querySelectorAll(".slides").forEach((el) => {
      const ids = JSON.parse(el.dataset.slides);
      const c = Carousel(el, [ids.map((i) => Object.assign({}, p.p2[i], { src: msrc(p.p2[i]) }))]);
      el._c = c; carousels.push(c);
    });
  }
  function renderCV() {
    const blocks = (b) => b.map((lines) => `<div class="blk">${lines.map((l) => `<p>${fmt(l)}</p>`).join("")}</div>`).join("");
    pop2.innerHTML = `<div class="cv-wrap"><div class="cv-top"><div><p>Cassandre GUIOT</p><p class="it">${esc(CV.role)}</p><p><a class="link" href="mailto:${SITE.email}">${SITE.email}</a></p><p><a class="link" href="tel:${SITE.tel}">${SITE.phone}</a></p><p><a class="link" href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a></p></div>
      <div>${CV.bio.map((t) => `<p class="ind">${fmt(t)}</p>`).join("")}</div></div>
      <div class="hr"></div>
      <div class="cv-bar"><span>Curriculum Vitae</span><button class="link" data-act="close2">(Fermer)</button></div>
      ${CV.sections.map(([t, b]) => `<div class="cv-row"><div>${esc(t)}</div><div>${blocks(b)}</div></div>`).join("")}
      <div class="cv-foot"><span>${esc(typo("Dernière mise à jour : " + SITE.updated))}</span><button class="link" data-act="top">(Retour au début)</button></div></div>`;
  }

  /* ---------------- Image agrandie ---------------- */
  const lb = $("#lightbox"), stage = $(".lb-stage", lb);
  let lbIndex = 0;
  function showLB(i) {
    lbIndex = (i + gallery.length) % gallery.length;
    const it = gallery[lbIndex];
    stage.innerHTML = it.v ? `<video src="${it.src}" autoplay muted loop playsinline></video>` : `<img src="${it.src}" alt="">`;
  }
  function openLB(i) { lb.hidden = false; showLB(i); }
  function closeLB() { lb.hidden = true; stage.innerHTML = ""; }
  lb.addEventListener("click", (e) => {
    if (e.target.closest(".lb-x")) return closeLB();
    if (e.target.closest(".lb-prev")) return showLB(lbIndex - 1);
    if (e.target.closest(".lb-next")) return showLB(lbIndex + 1);
    const m = e.target.closest("img,video");
    if (m) {                                  // le média occupe une grande boîte : on ne garde que la zone réellement dessinée
      const r = m.getBoundingClientRect(), nw = m.naturalWidth || m.videoWidth, nh = m.naturalHeight || m.videoHeight;
      if (nw && nh) {
        const s = Math.min(r.width / nw, r.height / nh), w = nw * s, h = nh * s, x = r.left + (r.width - w) / 2, y = r.top + (r.height - h) / 2;
        if (e.clientX >= x && e.clientX <= x + w && e.clientY >= y && e.clientY <= y + h) return;
      } else return;
    }
    closeLB();                                // clic en dehors de l'image : on ferme
  });

  /* ---------------- Formulaire de contact ---------------- */
  const cf = $("#cf"), cfCard = $(".cf-card", cf), cfMsg = $(".cf-msg", cf), cfSend = $(".cf-send", cf);
  let cfFocus = null;
  function openForm() {
    if (!SITE.formKey) { location.href = "mailto:" + SITE.email; return; }   // pas encore de clé : on ouvre le mail
    cfFocus = document.activeElement; cf.hidden = false;
    requestAnimationFrame(() => { cf.classList.add("show"); cfCard.email.focus(); });
  }
  function closeForm() {
    cf.classList.remove("show");
    setTimeout(() => { cf.hidden = true; cfCard.reset(); cfCard.classList.remove("sent"); cfMsg.textContent = ""; cfSend.disabled = false; if (cfFocus) cfFocus.focus(); }, 170);
  }
  cf.addEventListener("click", (e) => { if (e.target === cf || e.target.closest(".cf-cancel,.cf-x")) closeForm(); });
  cfCard.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = cfCard.email.value.trim(), message = cfCard.message.value.trim();
    if (cfCard.botcheck.value) return;                                       // piège anti-spam : on ignore
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { cfMsg.textContent = "Merci d’indiquer une adresse e-mail valide."; cfCard.email.focus(); return; }
    if (!message) { cfMsg.textContent = "Merci d’écrire votre message."; cfCard.message.focus(); return; }
    cfMsg.textContent = ""; cfSend.disabled = true; cfSend.textContent = "Envoi…";
    try {
      const r = await fetch(SITE.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: SITE.formKey, subject: "Message depuis le site de Cassandre Guiot", from_name: "Site Cassandre Guiot", email, message, botcheck: "" }) });
      const j = await r.json();
      if (!j.success) throw new Error(j.message || "echec");
      cfCard.classList.add("sent"); cfMsg.textContent = "Merci, votre message a bien été envoyé."; setTimeout(closeForm, 2400);
    } catch (err) {
      cfMsg.textContent = "Une erreur est survenue. Vous pouvez aussi écrire à " + SITE.email + ".";
    } finally { cfSend.disabled = false; cfSend.textContent = "Envoyer"; }
  });

  /* ---------------- Ouverture / fermeture / adresse (#) ---------------- */
  let routing = false;
  function setHash(h) {
    if (routing) return;
    try { history.pushState(null, "", h ? "#" + h : location.pathname + location.search); }
    catch (e) { try { location.hash = h; } catch (e2) {} }
  }
  function closeAll(silent) {
    closeLB(); state.p1 = state.p2 = null; renderP1(); renderP2(); hidePreview();
    if (!silent) setHash("");
  }
  function openProject(slug) { closeAll(true); state.p1 = { t: "project", slug }; renderP1(); setHash(slug); }
  function openMore(slug) { state.p2 = { t: "project", slug }; renderP2(); setHash(slug + "/info"); }
  function openCV() { closeAll(true); state.p2 = { t: "cv" }; renderP2(); setHash("cv"); }
  function openContact() { closeAll(true); state.p1 = { t: "contact" }; renderP1(); setHash("contact"); }
  function route() {
    routing = true;
    const h = decodeURIComponent(location.hash.slice(1));
    closeAll(true);
    if (h === "cv") openCV();
    else if (h === "contact") openContact();
    else if (h) {
      const [slug, more] = h.split("/");
      if (bySlug(slug)) { openProject(slug); if (more === "info") openMore(slug); }
    }
    routing = false;
  }

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t.closest("#cf")) return;
    if (e.composedPath().includes(lb)) return;   // clic dans l'image agrandie : géré à part (sans fermer les pop-ups)
    const cellEl = t.closest("[data-lb]");
    if (cellEl && pop2.contains(cellEl)) {
      if (t.closest(".arrow-btn")) return;
      let i = +cellEl.dataset.lb;
      if (cellEl._c) i += cellEl._c.index();
      return openLB(i);
    }
    const act = t.closest("[data-act]");
    if (t.closest(".pop")) {
      if (!act) return;
      const a = act.dataset.act;
      if (a === "more") openMore(act.dataset.slug);
      else if (a === "close2") { state.p2 = null; renderP2(); setHash(state.p1 && state.p1.slug ? state.p1.slug : ""); }
      else if (a === "close1") closeAll();
      else if (a === "form") openForm();
      else if (a === "top") pop2.scrollTo({ top: 0 });
      return;
    }
    const link = t.closest("a.proj");
    const open = state.p1 || state.p2;
    if (open) {                                   // clic en dehors : on ferme, sans rien ouvrir
      if (!(link && link.target === "_blank")) e.preventDefault();
      closeAll();
      return;
    }
    if (!link) return;
    if (link.dataset.project) { e.preventDefault(); openProject(link.dataset.project); }
    else if (link.dataset.act === "cv") { e.preventDefault(); openCV(); }
    else if (link.dataset.act === "contact") { e.preventDefault(); openContact(); }
  });

  document.addEventListener("keydown", (e) => {
    if (!cf.hidden) { if (e.key === "Escape") closeForm(); return; }
    if (!lb.hidden) {
      if (e.key === "Escape") closeLB();
      else if (e.key === "ArrowLeft") showLB(lbIndex - 1);
      else if (e.key === "ArrowRight") showLB(lbIndex + 1);
      return;
    }
    if (e.key === "Escape") {
      if (state.p2) { state.p2 = null; renderP2(); setHash(state.p1 && state.p1.slug ? state.p1.slug : ""); }
      else if (state.p1) closeAll();
    }
  });
  window.addEventListener("popstate", route);
  window.addEventListener("hashchange", route);

  /* ---------------- Démarrage ---------------- */
  renderHome();
  const start = () => { lockHeights(); };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => { start(); route(); });
  let rz; window.addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(lockHeights, 120); });
})();
