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
