(function () {
  var doc = document, page = doc.body.dataset.page;
  doc.documentElement.classList.add("js");
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var el = function (html) { var t = doc.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };
  var slug = function (s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); };

  var P = window.PROJECTS || [], A = window.ATHLETES || [], F = window.PROJECT_FILTERS || [];
  /* Work page order: newest first, by each project's date */
  P = P.slice().sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
  var EMAIL = "ecavizo22@gmail.com", LINKEDIN = "https://www.linkedin.com/in/ethan-cavizo";
  var MARK = "ethan<b>cavizo</b><small>NIL · Athlete Representation</small>";
  var usedFilters = F.filter(function (f) { return f.key === "all" || P.some(function (p) { return p.cat === f.key; }); });

    var desk = true; /* the scroll-through panels run at every screen size */

  /* ---------- header + full-screen menu ---------- */
  var head = el(
    '<header class="site-head">' +
    '<a class="brand" href="index.html" aria-label="Ethan Cavizo, home">' + MARK + "</a>" +
    '<button class="menu-btn" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>' +
    "</header>"
  );
  var nav = el(
    '<nav class="nav" aria-label="Site"><div class="nav-brand">' + MARK + '</div><div class="nav-cols">' +
    "<div><h4>Work</h4>" +
    usedFilters.map(function (f) { return '<a href="work.html' + (f.key === "all" ? "" : "#f-" + f.key) + '">' + (f.key === "all" ? "all work" : f.label) + "</a>"; }).join("") +
    "</div>" +
    '<div><h4>Athletes</h4><a href="athletes.html">the roster</a>' +
    A.map(function (a) { return '<a href="athletes.html#' + slug(a.name) + '">' + a.name + "</a>"; }).join("") +
    "</div>" +
    '<div><h4>About</h4><a href="about.html">background</a><a href="about.html#experience">experience</a><a href="about.html#toolkit">toolkit</a><a href="index.html#writing">writing</a></div>' +
    '<div><h4>Contact</h4><a href="mailto:' + EMAIL + '">email</a><a href="tel:7028247403">call</a><a href="' + LINKEDIN + '" target="_blank" rel="noopener">linkedin</a><a class="sm" href="index.html">home</a></div>' +
    "</div></nav>"
  );
  doc.body.prepend(head, nav);

  var foot = el(
    '<footer class="foot" id="contact"><div class="wrap">' +
    '<div><a class="brand" href="index.html">' + MARK + "</a><ul><li>Eugene, OR</li><li>Las Vegas, NV</li></ul></div>" +
    '<div class="foot-col">' +
    "<h4>General inquiries</h4>" +
    '<button type="button" data-copy="' + EMAIL + '">' + EMAIL + "<i>click to copy</i></button>" +
    '<a href="tel:7028247403" style="color:var(--ink)">(702) 824-7403</a>' +
    "<h4>Connect</h4>" +
    '<a href="' + LINKEDIN + '" target="_blank" rel="noopener">LinkedIn ↗</a>' +
    '<div class="foot-base">© ' + new Date().getFullYear() + ' Ethan Cavizo<br><span id="clock"></span></div>' +
    "</div>" +
    '<a class="to-top" href="#top" aria-label="Back to top">↑</a>' +
    "</div></footer>"
  );
  doc.body.append(foot);
  doc.body.id = "top";

  $("[data-copy]").addEventListener("click", function () {
    var b = this, note = $("i", b), addr = b.dataset.copy;
    var done = function () { note.textContent = "copied ✓"; setTimeout(function () { note.textContent = "click to copy"; }, 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(addr).then(done, function () { location.href = "mailto:" + addr; });
    else location.href = "mailto:" + addr;
  });

  var clock = $("#clock");
  var tick = function () {
    try { clock.textContent = "Eugene · " + new Date().toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", hour: "numeric", minute: "2-digit" }); } catch (e) {}
  };
  tick(); setInterval(tick, 30000);

  var btn = $(".menu-btn");
  var setMenu = function (open) {
    doc.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Menu");
  };
  btn.addEventListener("click", function () { setMenu(!doc.body.classList.contains("menu-open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  var onScroll = function () { head.classList.toggle("scrolled", scrollY > (page === "home" ? innerHeight * 0.55 : 8)); };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  var jump = function (node, gap) { scrollTo({ top: node.getBoundingClientRect().top + scrollY - (gap || 96), behavior: "instant" }); };
  var linksHtml = function (p) {
    return p.links && p.links.length
      ? '<div class="panel-links"><span>See it</span>' + p.links.map(function (l) { return '<a class="link ext" target="_blank" rel="noopener" href="' + l.url + '">' + l.label + "</a>"; }).join("") + "</div>"
      : "";
  };
  var SOON = "Full write-up coming soon. Ask me about this one in the meantime.";
  /* logo plate: class + optional fill colour (logoFill) or edge-to-edge crop (logoFit: "cover") */
  var logoCls = function (p) { return (p.logoBg ? " st-logo-" + p.logoBg : "") + (p.logoFit === "cover" ? " st-logo-cover" : ""); };
  var logoStyle = function (p) { return p.logoFill ? ' style="background:' + p.logoFill + '"' : ""; };
  /* projects marked upcoming: true in data.js have not happened yet */
  var soonLabel = function (p) { return p.upcoming ? "Upcoming deal" : "Write-up coming soon"; };
  var soonText = function (p) { return p.upcoming ? "In the works. Details after launch." : SOON; };

  /* Panel media. Your own photo or clip (img / video in data.js) wins;
     otherwise the project's first Instagram post is embedded beside the text. */
  var ownMedia = function (p) {
    if (p.video) return '<video src="' + p.video + '"' + (p.img ? ' poster="' + p.img + '"' : "") + " autoplay muted loop playsinline></video>";
    if (p.img) return '<img src="' + p.img + '" alt="">';
    return "";
  };
  var deckUrl = function (p) {
    /* a Canva presentation: always shown through its view link, never the edit link */
    if (p.img || p.video || !p.deck) return "";
    return p.deck.replace(/\/(edit|view)(\?.*)?$/, "") + "/view?embed";
  };
  var embedUrl = function (p) {
    if (p.img || p.video || p.embed === false || p.deck) return "";
    var src = p.embed || "";
    if (!src) (p.links || []).some(function (l) { if (/instagram\.com\/(p|reel)\//.test(l.url)) { src = l.url; return true; } });
    var m = src.match(/instagram\.com\/(p|reel)\/([^\/?#]+)/);
    return m ? "https://www.instagram.com/" + m[1] + "/" + m[2] + "/embed/" : "";
  };
  var embedHtml = function (p) {
    var dk = deckUrl(p);
    if (dk) return '<div class="st-embed st-deck"><div class="st-crop" style="--r:' + (p.embedRatio || 0.5625) + ';--head:0px"><iframe data-src="' + dk + '" title="' + p.title + ' pitch deck" allowfullscreen allow="fullscreen"></iframe></div></div>';
    var u = embedUrl(p);
    /* The card is cropped to its header and the post itself; likes and comments are cut off.
       embedRatio is the post's height / width (Instagram shows at most 1.25). */
    return u ? '<div class="st-embed"><div class="st-crop" style="--r:' + (p.embedRatio || 1.25) + '"><iframe data-src="' + u + '" title="' + p.title + ' on Instagram" scrolling="no" allowtransparency="true"></iframe></div></div>' : "";
  };

  /* ---------- scroll-through panel ----------
     items: [{ id, nav, html }]. Scrolling the page steps through the items
     while the stage stays pinned; the list on the left jumps to any item. */
  function makeStepper(host, items, opts) {
    opts = opts || {};
    host.innerHTML = "";
    var n = items.length;
    var st = el(
      '<div class="stepper" style="--n:' + n + '"><div class="stage">' +
      (opts.head ? '<div class="st-head">' + opts.head + "</div>" : "") +
      '<div class="st-nav"></div>' +
      '<div class="st-view"><div class="st-ctrl">' +
      '<button class="st-prev" aria-label="Previous">↑</button><span class="st-count"></span><button class="st-next" aria-label="Next">↓</button>' +
      '<button class="st-skip">Skip</button></div></div>' +
      "</div></div>"
    );
    host.append(st);
    var navEl = $(".st-nav", st), view = $(".st-view", st), ctrl = $(".st-ctrl", st), count = $(".st-count", st);
    var navs = [], panels = [], cur = -1;
    items.forEach(function (it, i) {
      var b = el('<button type="button">' + it.nav + "</button>");
      b.addEventListener("click", function () { go(i); });
      navEl.append(b); navs.push(b);
      var p = el('<article class="st-panel' + (it.cls ? " " + it.cls : "") + '">' + it.html + "</article>");
      view.insertBefore(p, ctrl); panels.push(p);
    });
    var top = function () { return st.getBoundingClientRect().top + scrollY; };
    var span = function () { return st.offsetHeight - innerHeight; };
    function set(i) {
      if (i === cur) return; cur = i;
      navs.forEach(function (b, j) { b.classList.toggle("on", j === i); });
      panels.forEach(function (p, j) { p.classList.toggle("on", j === i); });
      var fr = $("iframe[data-src]", panels[i]);
      if (fr && fr.offsetParent) { fr.src = fr.dataset.src; fr.removeAttribute("data-src"); }
      count.textContent = (i + 1) + " / " + n;
      navEl.scrollTop = navs[i].offsetTop - navEl.clientHeight / 2;
      navEl.scrollLeft = navs[i].offsetLeft - navEl.clientWidth / 2 + navs[i].offsetWidth / 2;
    }
    function sync() {
      var s = span(), p = s > 0 ? (scrollY - top()) / s : 0;
      set(Math.max(0, Math.min(n - 1, Math.round(p * (n - 1)))));
    }
    function go(i, instant) {
      i = Math.max(0, Math.min(n - 1, i));
      scrollTo({ top: top() + (n > 1 ? span() * i / (n - 1) : 0), behavior: instant ? "instant" : "smooth" });
      if (instant) set(i);
    }
    $(".st-prev", st).addEventListener("click", function () { go(cur - 1); });
    $(".st-next", st).addEventListener("click", function () { go(cur + 1); });
    $(".st-skip", st).addEventListener("click", function () { scrollTo({ top: top() + st.offsetHeight, behavior: "smooth" }); });
    addEventListener("scroll", sync, { passive: true });
    addEventListener("resize", sync);
    sync();
    return {
      go: go,
      goId: function (id, instant) { items.forEach(function (it, i) { if (it.id === id) go(i, instant); }); },
      destroy: function () { removeEventListener("scroll", sync); removeEventListener("resize", sync); }
    };
  }

  /* ---------- small-screen project accordion ---------- */
  function projectItem(p) {
    var pending = !p.body;
    var li = el(
      '<li id="' + p.id + '" data-cat="' + p.cat + '">' +
      '<button class="row" aria-expanded="false">' +
      "<div><h3>" + p.title + "</h3>" + (p.summary ? "<p>" + p.summary + "</p>" : "") + "</div>" +
      (pending ? '<span class="soon">' + soonLabel(p) + '</span>' : '<span class="tag">' + p.tag + "</span>") +
      '<span class="pm" aria-hidden="true"></span></button>' +
      '<div class="panel"><div><div class="panel-in">' +
      '<div class="prose">' + (p.body || soonText(p)) + "</div>" + linksHtml(p) +
      "</div></div></div></li>"
    );
    return li;
  }
  function toggle(li, force) {
    var open = force === undefined ? !li.classList.contains("open") : force;
    li.parentNode.querySelectorAll(".open").forEach(function (o) { if (o !== li) { o.classList.remove("open"); $(".row", o).setAttribute("aria-expanded", "false"); } });
    li.classList.toggle("open", open);
    $(".row", li).setAttribute("aria-expanded", open);
  }
  /* any accordion list: project list on phones, toolkit on About */
  doc.addEventListener("click", function (e) {
    var row = e.target.closest("button.row");
    if (row && row.parentNode.tagName === "LI") toggle(row.parentNode);
  });

  var routes = [];

  /* ---------- work page ---------- */
  var list = $("#work-list"), workHost = $("#work-host");
  if (list && workHost) {
    var bar = $("#filters"), empty = $("#work-empty"), workStepper = null;
    var detail = function (p) {
      /* a photo with no post or deck beside it takes the right-hand column itself */
      var side = p.photo && !deckUrl(p) && !embedUrl(p) && !ownMedia(p);
      /* with nothing else to show, the logo fills the right-hand column instead */
      var sideLogo = p.logo && !p.photo && !deckUrl(p) && !embedUrl(p) && !ownMedia(p);
      return {
        id: p.id, nav: p.title, cls: deckUrl(p) ? "has-embed has-deck" : (embedUrl(p) ? "has-embed" : (ownMedia(p) || side || sideLogo ? "has-own" : "")),
        html: (ownMedia(p) ? '<div class="st-own">' + ownMedia(p) + "</div>" : (side ? '<div class="st-own st-own-photo"><img src="' + p.photo + '" alt="' + (p.photoAlt || "") + '"></div>' :
          (sideLogo ? '<div class="st-own st-own-photo st-own-logo' + logoCls(p) + '"' + logoStyle(p) + '><img src="' + p.logo + '" alt="' + (p.logoAlt || p.title + " logo") + '"></div>' : ""))) + embedHtml(p) + '<div class="st-detail">' +
          '<div class="label">' + (p.body ? p.tag : soonLabel(p)) + "</div><h2>" + p.title + "</h2>" +
          (p.summary ? '<p class="st-sum">' + p.summary + "</p>" : "") +
          '<div class="prose">' + (p.body || soonText(p)) + "</div>" + linksHtml(p) +
          (p.logo ? '<figure class="st-logo' + logoCls(p) + (sideLogo ? " st-narrow-only" : "") + '"' + logoStyle(p) + '><img loading="lazy" src="' + p.logo + '" alt="' + (p.logoAlt || p.title + " logo") + '"></figure>' : "") +
          (p.photo ? '<figure class="st-photo' + (side ? " st-narrow-only" : "") + '"><img loading="lazy" src="' + p.photo + '" alt="' + (p.photoAlt || "") + '"></figure>' : "") + "</div>"
      };
    };
    var renderWork = function (key) {
      bar.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", x.dataset.f === key); });
      var items = P.filter(function (p) { return key === "all" || p.cat === key; });
      empty.hidden = items.length > 0;
      if (workStepper) { workStepper.destroy(); workStepper = null; }
      if (desk) {
        list.closest(".sec").hidden = true;
        workStepper = makeStepper(workHost, items.map(detail));
      } else {
        list.innerHTML = "";
        items.forEach(function (p) { list.append(projectItem(p)); });
      }
    };
    usedFilters.forEach(function (f) {
      var c = el('<button class="chip" aria-pressed="' + (f.key === "all") + '" data-f="' + f.key + '">' + f.label.toLowerCase() + "</button>");
      c.addEventListener("click", function () { renderWork(f.key); if (desk) jump(workHost, 0); });
      bar.append(c);
    });
    renderWork("all");
    routes.push(function (h) {
      if (h.indexOf("f-") === 0) { renderWork(h.slice(2)); jump(desk ? workHost : bar, desk ? 0 : 140); return; }
      if (!h || !P.some(function (p) { return p.id === h; })) return;
      renderWork("all");
      if (desk) workStepper.goId(h, true);
      else { var li = doc.getElementById(h); toggle(li, true); setTimeout(function () { jump(li); }, 60); }
    });
  }

  /* ---------- home: selected work ---------- */
  var feat = $("#featured"), featHost = $("#featured-host");
  if (feat) {
    var picks = P.filter(function (p) { return p.featured; }).sort(function (a, b) { return a.featured - b.featured; });
    var count = $("#work-count"); if (count) count.textContent = P.length;
    if (desk && featHost) {
      $("#featured-wrap").hidden = true;
      featHost.parentNode.style.padding = "0";
      makeStepper(featHost, picks.map(function (p) {
        return {
          id: p.id, nav: p.title, cls: "st-home" + (deckUrl(p) ? " has-embed has-deck" : (embedUrl(p) ? " has-embed" : "")),
          html: '<div class="st-media">' + (ownMedia(p) || (p.photo ? '<img class="st-photo-bg" src="' + p.photo + '" alt="' + (p.photoAlt || "") + '">' : (p.logo ? '<span class="st-logo st-logo-lg' + logoCls(p) + '"' + logoStyle(p) + '><img src="' + p.logo + '" alt="' + (p.logoAlt || p.title + " logo") + '"></span>' : '<span class="ghost">' + p.title + "</span>"))) + "</div>" + embedHtml(p) +
            '<div class="st-cap"><h3>' + p.title + (p.tag ? " · " + p.tag : "") + "</h3><p>" + (p.summary || (p.upcoming ? "Upcoming deal. Details after launch." : "Write-up coming soon.")) + '</p><a class="btn" href="work.html#' + p.id + '">Learn more</a></div>'
        };
      }), { head: '<h2 class="title">selected<b>work</b></h2><a class="link arrow" href="work.html">all ' + P.length + " projects</a>" });
    } else {
      picks.forEach(function (p) {
        feat.append(el(
          '<li><a class="row" href="work.html#' + p.id + '"><div><h3>' + p.title + "</h3><p>" + (p.summary || (p.upcoming ? "Upcoming deal. Details after launch." : "Write-up coming soon.")) + '</p></div><span class="tag">' + (p.tag || "") + '</span><span class="go" aria-hidden="true">→</span></a></li>'
        ));
      });
    }
  }

  /* ---------- about: career path as a scroll-through panel on wide screens ---------- */
  var xp = $(".xp"), xpHost = $("#xp-host");
  if (xp && xpHost && desk) {
    var jobs = Array.prototype.map.call(xp.children, function (li) {
      var org = $(".org", li).textContent, h = $("h3", li).cloneNode(true), now = $(".now", h);
      if (now) now.remove();
      return {
        nav: org.split(" · ")[0],
        html: '<div class="st-detail"><div class="label">' + $("time", li).textContent + (now ? " · current" : "") + "</div><h2>" + h.textContent.trim() + "</h2>" +
          '<p class="st-sum">' + org + '</p><div class="prose"><p>' + $("p", li).innerHTML + "</p></div></div>"
      };
    });
    var xpHead = $("#xp-head");
    makeStepper(xpHost, jobs, { head: xpHead ? xpHead.innerHTML : "" });
    xp.hidden = true; if (xpHead) xpHead.hidden = true;
    xpHost.parentNode.style.padding = "0";
  }

  /* ---------- about: pinned intro + counters ---------- */
  var counted = false;
  var runCounters = function () {
    if (counted) return; counted = true;
    doc.querySelectorAll("[data-count]").forEach(function (node) {
      var m = node.dataset.count.match(/^(\D*)(\d+)(.*)$/); if (!m) return;
      var end = Number(m[2]), t0 = performance.now(), dur = 1300;
      var frame = function (t) {
        var k = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - k, 3);
        node.textContent = m[1] + Math.round(end * eased) + m[3];
        if (k < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
      setTimeout(function () { node.textContent = node.dataset.count; }, dur + 400);
    });
  };
  doc.querySelectorAll(".pin").forEach(function (pin) {
    var stage = $(".pin-stage", pin);
    var f = function () {
      var s = pin.offsetHeight - innerHeight;
      var p = s > 0 ? (scrollY - (pin.getBoundingClientRect().top + scrollY)) / s : 1;
      stage.classList.toggle("s1", p > 0.1);
      stage.classList.toggle("s2", p > 0.42);
      if (p > 0.42) runCounters();
    };
    addEventListener("scroll", f, { passive: true }); f();
    setTimeout(function () { if (scrollY < 4) stage.classList.add("s1"); }, 700);
    var cue = $(".scroll-cue", stage);
    if (cue) cue.addEventListener("click", function (e) {
      e.preventDefault();
      var top = pin.getBoundingClientRect().top + scrollY, s = pin.offsetHeight - innerHeight;
      /* first click reveals the headline and numbers, the next one moves on */
      scrollTo({ top: stage.classList.contains("s2") ? top + pin.offsetHeight : top + s * 0.6, behavior: "smooth" });
    });
  });

  /* ---------- athletes + one-pager sheet ---------- */
  var roster = $("#roster");
  if (roster) {
    var sheet = el('<dialog class="sheet"><button class="sheet-close" aria-label="Close">×</button><div class="sheet-in"></div></dialog>');
    doc.body.append(sheet);
    var cur = 0;
    var show = function (i) {
      cur = (i + A.length) % A.length;
      var a = A[cur];
      $(".sheet-in", sheet).innerHTML =
        '<img src="' + a.img + '" alt="' + a.name + ' one-pager">' +
        '<div class="sheet-info"><div class="label">' + a.sport + "</div><h2>" + a.name + "</h2>" +
        "<small>" + a.meta + ' · <a class="link ext" target="_blank" rel="noopener" href="https://www.instagram.com/' + a.handle + '/">@' + a.handle + "</a></small>" +
        "<dl>" + a.stats.map(function (s) { return "<div><dt>" + s[1] + "</dt><dd>" + s[0] + "</dd></div>"; }).join("") + "</dl>" +
        '<a class="btn" target="_blank" rel="noopener" href="' + a.pdf + '" style="text-align:center">Open full one-pager (PDF)</a>' +
        '<div class="sheet-nav"><button data-d="-1">← previous</button><button data-d="1">next →</button></div></div>';
      if (!sheet.open) sheet.showModal();
    };
    sheet.addEventListener("click", function (e) {
      if (e.target === sheet || e.target.classList.contains("sheet-close")) sheet.close();
      if (e.target.dataset.d) show(cur + Number(e.target.dataset.d));
    });
    sheet.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") show(cur + 1);
      if (e.key === "ArrowLeft") show(cur - 1);
    });
    A.forEach(function (a, i) {
      var card = el(
        '<button class="ath rv"><div class="ath-img"><img loading="lazy" src="' + a.img + '" alt="' + a.name + ' one-pager"></div>' +
        "<h3>" + a.name + "</h3><small>" + a.sport + " · " + a.meta + "</small></button>"
      );
      card.addEventListener("click", function () { show(i); });
      roster.append(card);
    });
    if (page === "athletes") routes.push(function (h) {
      A.forEach(function (a, i) { if (slug(a.name) === h) show(i); });
    });
  }

  var route = function () { var h = location.hash.slice(1); routes.forEach(function (r) { r(h); }); };
  if (location.hash) route();
  addEventListener("hashchange", route);

  /* ---------- reveal on scroll ---------- */
  var rv = Array.prototype.slice.call(doc.querySelectorAll(".rv"));
  var check = function () {
    var limit = innerHeight * 0.94;
    rv = rv.filter(function (n) {
      if (n.getBoundingClientRect().top < limit) { n.classList.add("in"); return false; }
      return true;
    });
  };
  check();
  addEventListener("scroll", check, { passive: true });
  addEventListener("resize", check);
  addEventListener("load", check);
})();
