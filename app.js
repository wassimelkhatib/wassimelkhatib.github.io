/* Construit la page à partir de content.js. Pas besoin de modifier ce fichier. */
(function () {
  var S = window.SITE;
  var lang = "fr";
  var state = { type: "all", q: "" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function t(o) { return o && typeof o === "object" ? (o[lang] || o.fr || "") : o || ""; }
  function $(s) { return document.querySelector(s); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "ar" || q === "fr" || q === "en") return q;
    var s = store("lang");
    if (s === "ar" || s === "fr" || s === "en") return s;
    return "fr";
  }

  function emailLink(cls) {
    var e = S.person.email;
    return '<a class="' + cls + '" href="mailto:' + esc(e) + '">' + esc(t(S.ui[lang].write)) + "</a>";
  }

  function render() {
    var U = S.ui[lang], P = S.person;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t(P.name) + " — " + t(P.title) + " | " + t(P.affiliation);
    var desc = (S.about[lang] || S.about.fr)[0];
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", desc);

    var nav = [["about", "about"], ["research", "research"], ["publications", "publications"], ["talks", "talks"], ["teaching", "teaching"], ["career", "career"]];
    if (S.news && S.news.length) nav.push(["news", "news"]);
    nav.push(["contact", "contact"]);

    var initials = P.initials || "WK";
    var portrait = P.photo ? '<img src="' + esc(P.photo) + '" alt="' + esc(t(P.name)) + '">' : esc(initials);

    var h = "";
    h += '<a class="skip" href="#main">' + esc(U.skip) + "</a>";
    h += '<header class="top"><div class="wrap"><a class="brand" href="#top">' + esc(t(P.name)) + "</a>";
    h += '<nav class="main" aria-label="Navigation">' + nav.map(function (n) { return '<a href="#' + n[0] + '">' + esc(U.nav[n[1]]) + "</a>"; }).join("") + "</nav>";
    h += '<div class="langs" role="group" aria-label="' + esc(U.switchLabel) + '">' + [["fr", "Français"], ["en", "English"], ["ar", "العربية"]].map(function (l) {
      return '<button class="lang" type="button" data-lang="' + l[0] + '" lang="' + l[0] + '" aria-pressed="' + (lang === l[0]) + '">' + l[1] + "</button>";
    }).join("") + "</div></div></header>";

    h += '<main id="main"><div id="top"></div>';
    h += '<div class="hero"><div class="wrap"><div class="portrait" aria-hidden="' + (P.photo ? "false" : "true") + '">' + portrait + "</div><div>";
    h += '<p class="eyebrow">' + esc(t(P.affiliation)) + "</p>";
    h += "<h1>" + esc(t(P.name)) + '</h1><p class="role">' + esc(t(P.title)) + '</p><p class="aff">' + esc(t(P.location)) + "</p>";
    h += '<p class="tagline">' + esc(t(P.tagline)) + "</p>";
    h += '<div class="cta"><a class="btn primary" href="#publications">' + esc(U.ctaPubs) + '</a><a class="btn ghost" href="#contact">' + esc(U.ctaContact) + "</a></div></div></div></div>";

    h += '<section id="about"><div class="wrap about"><h2>' + esc(U.about) + "</h2>" + (S.about[lang] || S.about.fr).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div></section>";

    h += '<section id="research"><div class="wrap"><h2>' + esc(U.research) + '</h2><div class="cards">' +
      S.research.map(function (r) { return '<div class="card"><h3>' + esc(t(r.title)) + "</h3><p>" + esc(t(r.text)) + "</p></div>"; }).join("") + "</div></div></section>";

    h += '<section id="publications"><div class="wrap"><h2>' + esc(U.publications) + '</h2><div class="tools" id="pubTools"></div><p class="count" id="pubCount" aria-live="polite"></p><div id="pubList"></div></div></section>';

    h += '<section id="talks"><div class="wrap"><h2>' + esc(U.talks) + "</h2>" +
      S.talks.map(function (k) {
        return '<div class="talk"><div class="y">' + esc(k.year) + '</div><div><div class="fr-text" dir="ltr">' + esc(k.title) + '</div><div class="m">' + esc(t(k.place)) + " · " + esc(t(k.date)) + "</div></div></div>";
      }).join("") + "</div></section>";

    var T = S.teaching;
    h += '<section id="teaching"><div class="wrap"><h2>' + esc(U.teaching) + "</h2><p>" + esc(t(T.intro)) + "</p><p>" + esc(t(T.supervision)) + "</p>";
    h += "<h3>" + esc(U.teachingCourses) + '</h3><ul class="pills">' + T.courses.map(function (c) { return "<li>" + esc(t(c)) + "</li>"; }).join("") + "</ul></div></section>";

    h += '<section id="career"><div class="wrap"><h2>' + esc(U.career) + "</h2>";
    h += '<div class="group"><h3>' + esc(U.degrees) + '</h3><ul class="plain">' + S.degrees.map(function (d) { return '<li><span class="y">' + esc(d.year) + "</span><span>" + esc(t(d.text)) + "</span></li>"; }).join("") + "</ul></div>";
    h += "<h3 style='margin:34px 0 14px'>" + esc(U.positions) + "</h3>";
    h += S.positions.map(function (g) {
      return '<div class="group"><h3>' + esc(t(g.group)) + "</h3>" + g.items.map(function (e) {
        return '<div class="entry"><div class="p">' + esc(t(e.period)) + '</div><div><div class="r">' + esc(t(e.role)) + '</div><div class="o">' + esc(t(e.org)) + '</div><div class="x">' + esc(t(e.text)) + "</div></div></div>";
      }).join("") + "</div>";
    }).join("");
    h += '<div class="group"><h3>' + esc(U.training) + '</h3><ul class="plain">' + S.training.map(function (d) { return '<li><span class="y">' + esc(d.year) + "</span><span>" + esc(t(d.text)) + "</span></li>"; }).join("") + "</ul></div></div></section>";

    h += '<section id="roles"><div class="wrap"><h2>' + esc(U.roles) + '</h2><div class="cards">' +
      S.roles.map(function (r) {
        var nm = r.url ? '<a href="' + esc(r.url) + '" rel="noopener" target="_blank">' + esc(t(r.name)) + "</a>" : esc(t(r.name));
        return '<div class="card"><h3>' + nm + "</h3><p>" + esc(t(r.text)) + "</p></div>";
      }).join("") + '</div><h3 style="margin:30px 0 8px">' + esc(U.languages) + "</h3><p>" + esc(t(S.languages.langs)) + "<br>" + esc(t(S.languages.tools)) + "</p></div></section>";

    if (S.news && S.news.length) {
      h += '<section id="news"><div class="wrap"><h2>' + esc(U.news) + "</h2>" + S.news.map(function (n) {
        return '<div class="talk"><div class="y">' + esc(n.date) + "</div><div><h3>" + esc(t(n.title)) + "</h3><div class='m'>" + esc(t(n.text)) + "</div></div></div>";
      }).join("") + "</div></section>";
    }

    var L = S.links, names = { academia: "Academia", orcid: "ORCID", googleScholar: "Google Scholar", hal: "HAL", researchGate: "ResearchGate", linkedin: "LinkedIn", facebook: "Facebook" };
    var prof = Object.keys(names).filter(function (k) { return L[k]; }).map(function (k) { return '<a href="' + esc(L[k]) + '" rel="me noopener" target="_blank">' + names[k] + "</a>"; }).join("");
    h += '<section id="contact"><div class="wrap contact"><h2>' + esc(U.contact) + "</h2><p>" + esc(U.contactText) + "</p>" + emailLink("btn primary") + contactList() +
      '<p style="margin-top:14px;color:var(--muted)">' + esc(t(P.affiliation)) + " · " + esc(t(P.location)) + "</p>" +
      (prof ? '<div class="profiles" aria-label="' + esc(U.profiles) + '">' + prof + "</div>" : "") + "</div></section></main>";
    h += '<footer><div class="wrap">© ' + new Date().getFullYear() + " " + esc(t(P.name)) + " · " + esc(U.updated) + "</div></footer>";

    $("#app").innerHTML = h;
    document.querySelectorAll(".lang").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.getAttribute("data-lang"); store("lang", lang);
        try { history.replaceState(null, "", "?lang=" + lang + location.hash); } catch (e) {}
        state = { type: "all", q: "" }; render();
      });
    });
    buildPubTools(); renderPubs(); spy(); bindReveal();
  }


  function contactList() {
    var U = S.ui[lang], C = U.cl, P = S.person;
    var rows = [
      [C.pro, '<a dir="ltr" href="mailto:' + esc(P.email) + '">' + esc(P.email) + "</a>"],
      [C.perso, '<button class="reveal" type="button" data-k="emailPerso">' + esc(C.show) + "</button>"],
      [C.mobile, '<button class="reveal" type="button" data-k="mobile">' + esc(C.show) + "</button>"],
      [C.postal, "<span>" + esc(t(P.postal)) + "</span>"]
    ];
    return '<dl class="cinfo">' + rows.map(function (r) { return "<div><dt>" + esc(r[0]) + '</dt><dd>' + r[1] + "</dd></div>"; }).join("") + "</dl>";
  }
  function bindReveal() {
    document.querySelectorAll(".reveal").forEach(function (b) {
      b.addEventListener("click", function () {
        var v;
        try { v = atob(S.person.hidden[b.getAttribute("data-k")]); } catch (e) { return; }
        var k = b.getAttribute("data-k"), href = k === "emailPerso" ? "mailto:" + v : "tel:" + v.replace(/[^+\d]/g, "");
        var a = document.createElement("a"); a.dir = "ltr"; a.href = href; a.textContent = v; b.replaceWith(a);
      });
    });
  }

  function buildPubTools() {
    var U = S.ui[lang], types = {};
    S.publications.forEach(function (p) { types[p.type] = (types[p.type] || 0) + 1; });
    var h = '<input class="search" type="search" id="pubQ" placeholder="' + esc(U.pubSearch) + '" aria-label="' + esc(U.pubSearch) + '" value="' + esc(state.q) + '">';
    h += '<button class="chip" type="button" data-type="all" aria-pressed="' + (state.type === "all") + '">' + esc(U.pubAll) + "</button>";
    Object.keys(U.types).forEach(function (k) {
      if (types[k]) h += '<button class="chip" type="button" data-type="' + k + '" aria-pressed="' + (state.type === k) + '">' + esc(U.types[k]) + " (" + types[k] + ")</button>";
    });
    $("#pubTools").innerHTML = h;
    $("#pubQ").addEventListener("input", function (e) { state.q = e.target.value; renderPubs(); });
    document.querySelectorAll("#pubTools .chip").forEach(function (b) {
      b.addEventListener("click", function () {
        state.type = b.getAttribute("data-type");
        document.querySelectorAll("#pubTools .chip").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        renderPubs();
      });
    });
  }

  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  function renderPubs() {
    var U = S.ui[lang], q = norm(state.q.trim());
    var list = S.publications.filter(function (p) {
      if (state.type !== "all" && p.type !== state.type) return false;
      return !q || norm(p.authors + " " + p.title + " " + p.venue + " " + p.year).indexOf(q) > -1;
    }).sort(function (a, b) { return b.year - a.year; });
    $("#pubCount").textContent = U.pubCount(list.length);
    if (!list.length) { $("#pubList").innerHTML = "<p>" + esc(U.pubNone) + "</p>"; return; }
    var out = "", cur = null;
    list.forEach(function (p) {
      if (p.year !== cur) { if (cur !== null) out += "</ul>"; out += '<h3 class="year">' + p.year + '</h3><ul class="pubs">'; cur = p.year; }
      out += '<li class="pub"><div class="fr-text" dir="ltr"><span class="tag">' + esc(U.types[p.type] || "") + '</span><span class="t">' + esc(p.title) + '</span><div class="a">' + esc(p.authors) + '</div><div class="v">' + esc(p.venue) + "</div></div>" +
        (p.url ? '<a class="open" href="' + esc(p.url) + '" rel="noopener" target="_blank">' + esc(U.openLink) + (lang === "ar" ? " ←" : " →") + "</a>" : "") + "</li>";
    });
    $("#pubList").innerHTML = out + "</ul>";
  }

  var io;
  function spy() {
    if (io) io.disconnect();
    if (!("IntersectionObserver" in window)) return;
    var links = {};
    document.querySelectorAll("nav.main a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { Object.keys(links).forEach(function (k) { links[k].classList.remove("on"); }); if (links[e.target.id]) links[e.target.id].classList.add("on"); }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section").forEach(function (s) { io.observe(s); });
  }

  function jsonld() {
    var P = S.person, L = S.links;
    var d = {
      "@context": "https://schema.org", "@type": "Person",
      name: P.name.fr, alternateName: P.name.ar, jobTitle: P.title.fr,
      affiliation: { "@type": "CollegeOrUniversity", name: "Université Libanaise — Faculté de Pédagogie" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Université Aix-Marseille I" },
      email: "mailto:" + P.email, url: P.siteUrl,
      knowsAbout: ["Curriculum", "Approche par compétences", "Évaluation en éducation", "Formation des enseignants", "Didactique du français"],
      sameAs: Object.keys(L).map(function (k) { return L[k]; }).filter(Boolean)
    };
    var s = document.createElement("script"); s.type = "application/ld+json"; s.textContent = JSON.stringify(d);
    document.head.appendChild(s);
  }

  lang = pickLang();
  render(); jsonld();
})();
