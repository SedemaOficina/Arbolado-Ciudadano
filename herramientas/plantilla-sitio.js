/* ============================================================
   Arbolado Ciudadano · SEDEMA CDMX
   sitio.js — lógica de interfaz. Generado por herramientas/compilar.mjs.
   No editar a mano: los cambios se pierden al recompilar.
   ============================================================ */
(function () {
  'use strict';

  /* --- Base mínima de componentes (sustituye al runtime de Claude Design) --- */
  function DCLogic(props) { this.props = props || {}; }
  DCLogic.prototype.setState = function () {};

  /* --- Constructor de HTML en línea (sustituye a React.createElement) --- */
  var VACIOS = ['area','base','br','col','embed','hr','img','input','link','meta','source','track','wbr'];
  var SIN_PX = ['zIndex','fontWeight','opacity','flex','order','lineHeight'];

  function escapar(v) {
    return String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }
  function atributos(props) {
    var out = '';
    for (var k in props) {
      if (!Object.prototype.hasOwnProperty.call(props, k) || k === 'key') continue;
      var val = props[k];
      if (k === 'style' && val && typeof val === 'object') {
        var css = [];
        for (var p in val) {
          if (!Object.prototype.hasOwnProperty.call(val, p)) continue;
          var prop = p.replace(/[A-Z]/g, function (c) { return '-' + c.toLowerCase(); });
          var q = val[p];
          css.push(prop + ':' + (typeof q === 'number' && SIN_PX.indexOf(p) === -1 ? q + 'px' : q));
        }
        out += ' style="' + escapar(css.join(';')) + '"';
      } else if (val === true) { out += ' ' + k; }
      else if (val === false || val === null || val === undefined) { continue; }
      else { out += ' ' + k + '="' + escapar(val) + '"'; }
    }
    return out;
  }
  var React = {
    createElement: function (tag, props) {
      var hijos = Array.prototype.slice.call(arguments, 2);
      var dentro = '';
      (function aplanar(lista) {
        for (var i = 0; i < lista.length; i++) {
          var h = lista[i];
          if (h === null || h === undefined || h === false) continue;
          if (Object.prototype.toString.call(h) === '[object Array]') { aplanar(h); continue; }
          dentro += (typeof h === 'object' && h.__html) ? h.__html : String(h);
        }
      })(hijos);
      var abre = '<' + tag + atributos(props) + '>';
      var html = VACIOS.indexOf(tag) > -1 ? abre : abre + dentro + '</' + tag + '>';
      return { __html: html, toString: function () { return html; } };
    }
  };
  window.React = window.React || React;

  /* --- Adaptador: clase Component -> objeto reactivo de Alpine --- */
  window.dcAdaptar = function (props, fabrica) {
    var Base = fabrica(DCLogic);
    return {
      v: {},
      _n: null,
      init: function () {
        var alpine = this;
        function Enlazado() { Base.call(this, props); }
        Enlazado.prototype = Object.create(Base.prototype);
        Enlazado.prototype.constructor = Enlazado;
        Enlazado.prototype.setState = function (cambio) {
          var parche = (typeof cambio === 'function') ? cambio(this.state) : cambio;
          for (var k in parche) if (Object.prototype.hasOwnProperty.call(parche, k)) this.state[k] = parche[k];
          alpine.v = this.renderVals();
        };
        var inst = new Base(props);
        inst.props = props || {};
        inst.setState = Enlazado.prototype.setState.bind(inst);
        this._n = inst;
        this.v = inst.renderVals ? inst.renderVals() : {};
      }
    };
  };

  /* --- Rutas relativas según la profundidad de la página --- */
  var RAIZ = (document.documentElement.getAttribute('data-raiz') || '');
  window.dcRuta = function (h) {
    if (!h || typeof h !== 'string') return h;
    if (/^(https?:|mailto:|tel:|data:|#|\/)/.test(h)) return h;
    return RAIZ + h;
  };

  /* --- Limpieza del prerenderizado estático antes de que Alpine hidrate --- */
  function limpiar() {
    var nodos = document.querySelectorAll('[data-pr]');
    for (var i = 0; i < nodos.length; i++) nodos[i].parentNode.removeChild(nodos[i]);
  }
  document.addEventListener('alpine:init', limpiar);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { if (!window.Alpine) limpiar(); });
  }

  /* --- Fábricas de componentes generadas desde los archivos fuente --- */
/*__COMPONENTES__*/

})();

/* ============================================================
   LÁMINA BOTÁNICA
   Dibuja el árbol de cada sección sobre canvas y lo coloca en
   el espacio principal de imagen de la página. No sustituye a
   las fotografías institucionales: ocupa el lugar mientras no
   existan, y cede el sitio en cuanto lleguen.
   ============================================================ */
(function () {
  'use strict';

  var ESPECIES = {
    'index':          { l: 'I', s: 20260823, n: 'Taxodium mucronatum', c: 'Ahuehuete · árbol nacional', copa: 1.00, abre: 0.42, prof: 10 },
    'hazlo':          { l: 'II', s: 5140921,  n: 'Fraxinus uhdei',      c: 'Fresno',                     copa: 0.92, abre: 0.36, prof: 10 },
    'responsabilidades': { l: 'III', s: 8813377, n: 'Quercus rugosa',    c: 'Encino',                     copa: 0.96, abre: 0.48, prof: 9 },
    'emergencias':    { l: 'IV', s: 3319044,  n: 'Salix bonplandiana',  c: 'Ahuejote',                   copa: 0.74, abre: 0.30, prof: 10 },
    'programas':      { l: 'V', s: 6620188,  n: 'Jacaranda mimosifolia', c: 'Jacaranda',                copa: 1.02, abre: 0.44, prof: 9 },
    'directorio':     { l: 'VI', s: 1170255,  n: 'Schinus molle',       c: 'Pirul',                      copa: 0.88, abre: 0.40, prof: 10 },
    'politica':       { l: 'VII', s: 9091822,  n: 'Cupressus lusitanica',c: 'Cedro blanco',               copa: 0.70, abre: 0.26, prof: 10 },
    'territorio':     { l: 'VIII', s: 4400712,  n: 'Erythrina americana', c: 'Colorín',                    copa: 0.94, abre: 0.52, prof: 9 },
    'reforestacion':  { l: 'IX', s: 2255109,  n: 'Prunus serotina',     c: 'Capulín',                    copa: 0.90, abre: 0.38, prof: 10 },
    'inventario':     { l: 'X', s: 7712630,  n: 'Ligustrum lucidum',   c: 'Trueno',                     copa: 0.86, abre: 0.34, prof: 10 },
    'viveros':        { l: 'XI', s: 3980451,  n: 'Buddleja cordata',    c: 'Tepozán',                    copa: 0.82, abre: 0.46, prof: 9 },
    'acreditate':     { l: 'XII', s: 6031174,  n: 'Platanus mexicana',   c: 'Álamo',                      copa: 0.98, abre: 0.42, prof: 9 }
  };
  /* palmeras.html no lleva lámina: la silueta de una palmera no se
     construye con este trazo y una ilustración falsa desinforma. */

  function clave() {
    var p = location.pathname.replace(/\/+$/, '');
    var f = p.substring(p.lastIndexOf('/') + 1).replace(/\.html$/, '');
    if (!f || f === 'index') return 'index';
    return f;
  }

  function azar(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function trazar(lienzo, esp) {
    var r = lienzo.getBoundingClientRect(), d = window.devicePixelRatio || 1;
    if (r.width < 2 || r.height < 2) return;
    lienzo.width = r.width * d; lienzo.height = r.height * d;
    var c = lienzo.getContext('2d');
    c.setTransform(d, 0, 0, d, 0, 0);
    c.clearRect(0, 0, r.width, r.height);

    var trazos = [], hojas = [];
    var min = { x: 1e9, y: 1e9 }, max = { x: -1e9, y: -1e9 };
    function ver(x, y) { if (x < min.x) min.x = x; if (x > max.x) max.x = x; if (y < min.y) min.y = y; if (y > max.y) max.y = y; }

    function rama(az, x, y, ang, largo, grosor, prof) {
      if (prof === 0 || largo < 3) { if (largo < 24) hojas.push([x, y]); return; }
      var seg = 6, pts = [[x, y]], px = x, py = y, a = ang, i;
      for (i = 1; i <= seg; i++) {
        a += (az() - 0.5) * 0.10;
        px += Math.cos(a) * (largo / seg);
        py += Math.sin(a) * (largo / seg);
        pts.push([px, py]); ver(px, py);
      }
      trazos.push({ p: pts, g: grosor });
      var hijos = prof > 7 ? 2 : (az() < 0.30 ? 3 : 2);
      for (var k = 0; k < hijos; k++) {
        var abre = (k - (hijos - 1) / 2) * (esp.abre + az() * 0.26);
        rama(az, px, py, a + abre + (az() - 0.5) * 0.14, largo * (0.70 + az() * 0.12), grosor * 0.66, prof - 1);
      }
    }

    var az = azar(esp.s);
    ver(0, 0);
    rama(az, 0, 0, -Math.PI / 2, 100 * esp.copa, 21, esp.prof);

    var anchoD = max.x - min.x, altoD = max.y - min.y;
    var caja = { x: r.width * 0.07, y: r.height * 0.08, w: r.width * 0.86, h: r.height * 0.76 };
    var k = Math.min(caja.w / anchoD, caja.h / altoD);
    var ox = caja.x + (caja.w - anchoD * k) / 2 - min.x * k;
    var oy = caja.y + (caja.h - altoD * k) / 2 - min.y * k;
    function T(p) { return [p[0] * k + ox, p[1] * k + oy]; }
    var baseX = ox, sueloY = max.y * k + oy;

    for (var i = 0; i < 7; i++) {
      var lado = (i - 3) / 3, anc = anchoD * k * 0.20;
      c.beginPath(); c.moveTo(baseX + lado * 3, sueloY - 24);
      c.quadraticCurveTo(baseX + lado * anc * 0.5, sueloY - 5, baseX + lado * anc, sueloY + 1);
      c.lineWidth = 3.0 - Math.abs(lado) * 1.3;
      c.strokeStyle = 'rgba(43,39,32,.5)'; c.lineCap = 'round'; c.stroke();
    }
    c.beginPath();
    c.moveTo(baseX - anchoD * k * 0.24, sueloY + 2);
    c.lineTo(baseX + anchoD * k * 0.24, sueloY + 2);
    c.lineWidth = 1; c.strokeStyle = 'rgba(43,39,32,.30)'; c.stroke();

    var af = azar(esp.s + 991);
    hojas.forEach(function (h) {
      var q = T(h), n = 4 + Math.floor(af() * 4);
      for (var j = 0; j < n; j++) {
        var rad = (3 + af() * 7) * Math.max(0.6, k * 0.9);
        c.beginPath();
        c.ellipse(q[0] + (af() - .5) * 22 * k, q[1] + (af() - .5) * 22 * k, rad, rad * (.55 + af() * .4), af() * Math.PI, 0, Math.PI * 2);
        c.fillStyle = 'rgba(60,90,56,' + (0.05 + af() * 0.06) + ')'; c.fill();
      }
    });

    trazos.forEach(function (t) {
      var g = t.g * k;
      c.beginPath();
      var q0 = T(t.p[0]); c.moveTo(q0[0], q0[1]);
      for (var i2 = 1; i2 < t.p.length; i2++) { var q = T(t.p[i2]); c.lineTo(q[0], q[1]); }
      c.lineWidth = Math.max(0.5, g); c.lineCap = 'round'; c.lineJoin = 'round';
      c.strokeStyle = 'rgba(43,39,32,' + Math.min(.88, .40 + g * 0.05) + ')';
      c.stroke();
    });

    var ap = azar(esp.s + 5501);
    hojas.forEach(function (h) {
      if (ap() < 0.45) return;
      var q = T(h);
      c.beginPath(); c.arc(q[0], q[1], 1.2, 0, Math.PI * 2);
      c.fillStyle = 'rgba(60,90,56,.45)'; c.fill();
    });
  }

  /* Cuando la página no tiene espacio de imagen, la lámina entra como
     filigrana: da identidad sin robarle sitio al contenido. */
  function filigrana(esp) {
    var seccion = document.querySelector('main > section');
    if (!seccion) return;
    var lienzo = document.createElement('canvas');
    lienzo.className = 'lamina-filigrana';
    lienzo.setAttribute('aria-hidden', 'true');
    seccion.appendChild(lienzo);
    function pinta() { trazar(lienzo, esp); }
    pinta();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(pinta);
    var t;
    window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(pinta, 160); });
  }

  function montar() {
    var esp = ESPECIES[clave()];
    if (!esp) return;
    var hueco = document.querySelector('main .falta-dato--imagen');
    if (!hueco) { filigrana(esp); return; }

    var fig = document.createElement('figure');
    fig.className = 'lamina-figura';
    fig.innerHTML =
      '<span class="lamina-figura__num">Lámina ' + (esp.l || '') + '</span>' +
      '<canvas class="lamina-figura__lienzo" role="img" aria-label="Ilustración de ' + esp.c + ', ' + esp.n + '"></canvas>' +
      '<figcaption class="lamina-figura__pie">' +
        '<i>' + esp.n + '</i>' +
        '<span>' + esp.c + ' · ilustración generada para este sitio</span>' +
      '</figcaption>';

    var padre = hueco.parentNode;
    padre.replaceChild(fig, hueco);
    /* El pie heredado hablaba de una fotografía que ya no está ahí */
    var figura = (fig.parentNode && fig.parentNode.closest) ? fig.parentNode.closest('figure') : null;
    if (figura && figura !== fig) {
      var pieViejo = figura.querySelector(':scope > figcaption');
      if (pieViejo) pieViejo.parentNode.removeChild(pieViejo);
    }

    var lienzo = fig.querySelector('canvas');
    function pinta() { trazar(lienzo, esp); }
    pinta();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(pinta);
    var t;
    window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(pinta, 160); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montar);
  } else {
    montar();
  }
})();
