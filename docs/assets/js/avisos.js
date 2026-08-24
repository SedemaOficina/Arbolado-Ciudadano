/* ════════════════════════════════════════════════════════════════
   Arbolado Ciudadano · Vitrina de destacados de la portada
   Sin dependencias. Lee assets/data/avisos.json y monta el carrusel.

   Reglas implementadas en código:
     · vigencia obligatoria — un aviso vencido no se pinta
     · orden por el campo "orden"; tope de cinco en portada
     · 0 avisos vigentes → la vitrina se oculta entera
     · 1 aviso vigente   → se pinta fijo, sin flechas, puntos ni pausa
     · autoplay de 9 s con alto permanente al primer clic o toque
     · los puntos de paso van sobre el banner; no hay barra inferior
     · pausa temporal al pasar el ratón o al enfocar con el tabulador
     · sin arranque automático bajo prefers-reduced-motion
     · teclado ← → y gesto de deslizar en pantallas táctiles
   ════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var TIEMPO = 9000;
  var TOPE   = 5;

  document.addEventListener("DOMContentLoaded", function () {
    var vitrina = document.getElementById("vitrina-avisos");
    laminaTitular();
    if (!vitrina) return;

    var pista  = vitrina.querySelector(".av-pista");
    var puntos = vitrina.querySelector(".av-puntos");
    var cuenta = vitrina.querySelector(".av-cuenta");
    var quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var ruta   = vitrina.getAttribute("data-fuente") || "assets/data/avisos.json";

    var datos = [], i = 0, reloj = null, corriendo = false, manda = false;

    fetch(ruta, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error("avisos.json respondió " + r.status); return r.json(); })
      .then(function (j) { arranca(vigentes(j.avisos || [])); })
      .catch(function (e) { console.warn("[vitrina de avisos]", e.message); vitrina.hidden = true; });

    /* ── Vigencia y orden ───────────────────────────────────────── */
    function vigentes(lista) {
      var hoy = new Date(); hoy.setHours(0, 0, 0, 0);
      return lista.filter(function (a) {
        if (!a.vigencia_hasta) return true;
        var f = new Date(a.vigencia_hasta + "T23:59:59");
        return !isNaN(f.getTime()) && f >= hoy;
      }).sort(function (a, b) {
        return (a.orden || 99) - (b.orden || 99);
      }).slice(0, TOPE);
    }

    /* ── Montaje ────────────────────────────────────────────────── */
    function arranca(lista) {
      datos = lista;
      if (!datos.length) { vitrina.hidden = true; return; }

      datos.forEach(function (a, n) { pista.appendChild(diapositiva(a, n)); });

      if (datos.length === 1) {
        vitrina.querySelectorAll(".av-flecha").forEach(function (b) { b.hidden = true; });
        if (puntos) puntos.hidden = true;
        if (cuenta) cuenta.hidden = true;
      } else {
        datos.forEach(function (a, n) { puntos.appendChild(punto(a, n)); });
        vitrina.querySelector(".av-flecha.prev").addEventListener("click", function () { manual(i - 1); });
        vitrina.querySelector(".av-flecha.next").addEventListener("click", function () { manual(i + 1); });
        interaccion();
      }

      pinta(0);
      laminas();
      if (!quieto && datos.length > 1) reanudar();
    }

    function diapositiva(a, n) {
      var li = document.createElement("li");
      li.className = "av-lam";
      li.setAttribute("aria-roledescription", "diapositiva");
      li.setAttribute("aria-label", (n + 1) + " de " + datos.length + ": " + (a.titulo || ""));

      if (a.imagen) {
        var img = document.createElement("img");
        img.src = a.imagen; img.alt = "";
        img.loading = n === 0 ? "eager" : "lazy";
        li.appendChild(img);
      } else {
        var cv = document.createElement("canvas");
        cv.setAttribute("aria-hidden", "true");
        cv.setAttribute("data-semilla", a.semilla || (n + 1) * 7);
        cv.setAttribute("data-fondo-a", (a.fondo && a.fondo[0]) || "#2E5340");
        cv.setAttribute("data-fondo-b", (a.fondo && a.fondo[1]) || "#16281D");
        li.appendChild(cv);
      }

      var rot = document.createElement("div");
      rot.className = "av-rot";
      rot.innerHTML =
        "<div>" +
          '<span class="av-et" style="color:' + esc(a.color || "#E0D1BE") + '">' + esc(a.etiqueta || "Aviso") + "</span>" +
          '<p class="av-tit">' + esc(a.titulo || "") + "</p>" +
          (a.bajada ? '<p class="av-baj">' + esc(a.bajada) + "</p>" : "") +
          (a.cierre_visible ? '<span class="av-cierre">' + esc(a.cierre_visible) + "</span>" : "") +
          '<a class="av-cta" href="' + esc(a.enlace || "#") + '">' + esc(a.cta || "Ver más") + "</a>" +
        "</div>";
      li.appendChild(rot);
      return li;
    }

    function punto(a, n) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Ver el aviso " + (n + 1) + ": " + (a.titulo || ""));
      b.style.setProperty("--av-tiempo", TIEMPO + "ms");
      b.addEventListener("click", function () { manual(n); });
      li.appendChild(b);
      return li;
    }

    /* ── Estado ─────────────────────────────────────────────────── */
    function pinta(n) {
      i = (n + datos.length) % datos.length;
      Array.prototype.forEach.call(pista.children, function (li, k) {
        var activa = (k === i);
        li.classList.toggle("on", activa);
        li.setAttribute("aria-hidden", activa ? "false" : "true");
        li.querySelectorAll("a").forEach(function (a) { a.tabIndex = activa ? 0 : -1; });
      });
      if (puntos && !puntos.hidden) {
        Array.prototype.forEach.call(puntos.children, function (li, k) {
          li.classList.toggle("on", k === i);
          li.classList.remove("corriendo");
          if (k === i && corriendo && !quieto) { void li.offsetWidth; li.classList.add("corriendo"); }
        });
      }
      if (cuenta) cuenta.textContent = (i + 1) + " de " + datos.length;
    }

    function manual(n) { detener(true); pinta(n); }

    function reanudar() {
      if (quieto || manda || datos.length < 2) return;
      corriendo = true;
      pista.setAttribute("aria-live", "off");
      clearInterval(reloj);
      reloj = setInterval(function () { pinta(i + 1); }, TIEMPO);
      pinta(i);
    }

    /* definitivo: la persona tomó el control y la rotación ya no se reanuda */
    function detener(definitivo) {
      if (definitivo) manda = true;
      clearInterval(reloj); reloj = null; corriendo = false;
      if (puntos) Array.prototype.forEach.call(puntos.children, function (li) { li.classList.remove("corriendo"); });
      pista.setAttribute("aria-live", "polite");
    }

    function interaccion() {
      var marco = vitrina.querySelector(".av-marco"), x0 = null;
      marco.addEventListener("mouseenter", function () { if (corriendo) detener(false); });
      marco.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      marco.addEventListener("touchend", function (e) {
        if (x0 === null) return;
        var d = e.changedTouches[0].clientX - x0;
        if (Math.abs(d) > 45) manual(i + (d < 0 ? 1 : -1));
        x0 = null;
      });
      vitrina.addEventListener("focusin", function () { if (corriendo) detener(false); });
      vitrina.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft")  { e.preventDefault(); manual(i - 1); }
        if (e.key === "ArrowRight") { e.preventDefault(); manual(i + 1); }
      });
    }

    function laminas() { pintaLaminas(vitrina.querySelectorAll("canvas[data-semilla]")); }
  });

  /* ── Lámina del titular ───────────────────────────────────────── */
  function laminaTitular() {
    var c = document.querySelectorAll(".av-lamina-hero canvas[data-semilla]");
    if (c.length) pintaLaminas(c);
  }

  /* ── Lámina botánica: ramificación recursiva con semilla fija ─── */
  function pintaLaminas(lista) {
    if (!lista || !lista.length) return;

    function rng(s) {
      return function () { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
    }

    function dibuja(cv) {
      var w = cv.clientWidth, h = cv.clientHeight;
      if (!w || !h) return;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = w * dpr; cv.height = h * dpr;
      var c = cv.getContext("2d");
      if (!c) return;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, w, h);

      var fa = cv.getAttribute("data-fondo-a"), fb = cv.getAttribute("data-fondo-b");
      var sobreFondo = !!(fa && fb);
      if (sobreFondo) {
        var g = c.createLinearGradient(w, 0, w * 0.10, h);
        g.addColorStop(0, fa); g.addColorStop(1, fb);
        c.fillStyle = g; c.fillRect(0, 0, w, h);
      }

      var r = rng(parseInt(cv.getAttribute("data-semilla"), 10) * 7919 + 13);
      c.strokeStyle = sobreFondo ? "rgba(214,228,206,.5)" : (cv.getAttribute("data-tinta") || "#1F3A2B");
      c.lineCap = "round";

      var troncos = sobreFondo ? 8 : 6;
      var alfa    = sobreFondo ? 0.16 : 0.30;
      for (var n = 0; n < troncos; n++) {
        rama(c, w * ((n + 0.5) / troncos + (r() - 0.5) * 0.07), h + 6,
             -Math.PI / 2 + (r() - 0.5) * 0.24,
             h * (sobreFondo ? 0.64 : 0.78), sobreFondo ? 5.4 : 4.2, r, alfa);
      }
      c.globalAlpha = 1;

      function rama(cx, px, py, ang, len, gr, rd, a) {
        if (len < 5 || gr < 0.35) return;
        var ex = px + Math.cos(ang) * len, ey = py + Math.sin(ang) * len;
        cx.globalAlpha = a; cx.lineWidth = gr;
        cx.beginPath(); cx.moveTo(px, py);
        cx.quadraticCurveTo(px + Math.cos(ang - 0.2) * len * 0.55,
                            py + Math.sin(ang - 0.2) * len * 0.55, ex, ey);
        cx.stroke();
        var k = 2 + (rd() > 0.72 ? 1 : 0);
        for (var j = 0; j < k; j++) {
          rama(cx, ex, ey, ang + (rd() - 0.5) * 1.05, len * (0.6 + rd() * 0.2),
               gr * 0.62, rd, Math.min(a + 0.05, 0.88));
        }
      }
    }

    function todas() { Array.prototype.forEach.call(lista, dibuja); }
    todas();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(todas);
    var t;
    window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(todas, 180); });
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }
})();
