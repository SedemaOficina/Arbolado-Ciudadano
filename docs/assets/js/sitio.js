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

window.dcCabecera = function(props){ return dcAdaptar(props, function(DCLogic){

const SECCIONES = [
  { id: "inicio", etiqueta: "Inicio", href: "index.html" },
  { id: "hazlo", etiqueta: "Qué necesito hacer", href: "hazlo.html" },
  { id: "responsabilidades", etiqueta: "Responsabilidades", href: "responsabilidades.html" },
  { id: "emergencias", etiqueta: "Emergencias", href: "emergencias.html" },
  { id: "programas", etiqueta: "Programas", href: "programas.html" },
  { id: "directorio", etiqueta: "Directorio", href: "directorio.html" },
  { id: "politica", etiqueta: "Política de arbolado", href: "politica.html" }
];

const INDICE = [
  { seccion: "Qué necesito hacer", titulo: "Resuelve tu caso en dos preguntas", detalle: "Te dice a quién acudir y qué documentos reunir", href: "hazlo.html#decisiones", claves: "asistente decisiones caso permiso autorizacion tramite quien autoriza" },
  { seccion: "Qué necesito hacer", titulo: "Poda", detalle: "Plazos, pasos y fundamento del procedimiento", href: "hazlo.html#procedimientos", claves: "poda podar rama ramas mantenimiento 25 por ciento desmoche" },
  { seccion: "Qué necesito hacer", titulo: "Derribo", detalle: "Los cuatro supuestos y la restitución", href: "hazlo.html#procedimientos", claves: "derribo derribar talar tala quitar arbol muerto riesgo restitucion" },
  { seccion: "Qué necesito hacer", titulo: "Trasplante", detalle: "Cuándo es viable mover un ejemplar", href: "hazlo.html#procedimientos", claves: "trasplante trasplantar mover reubicar obra construccion" },
  { seccion: "Qué necesito hacer", titulo: "Casos cotidianos", detalle: "Diez situaciones reales con su salida", href: "hazlo.html#casos", claves: "casos raices banqueta vecino jardin hojas cochera cables plaga" },
  { seccion: "Qué necesito hacer", titulo: "Preguntas frecuentes", detalle: "Veinte preguntas con fundamento", href: "hazlo.html#faq", claves: "preguntas dudas faq cuanto cuesta cuanto tarda multa" },
  { seccion: "Responsabilidades", titulo: "Quién autoriza qué", detalle: "Matriz de SEDEMA, alcaldías, PAOT y Fiscalía", href: "responsabilidades.html", claves: "competencias autoridad alcaldia sedema paot fiscalia bomberos sobse quien" },
  { seccion: "Responsabilidades", titulo: "Verificar una acreditación", detalle: "Consulta el padrón de podadores y dictaminadores", href: "responsabilidades.html#verificador", claves: "verificar credencial padron podador dictaminador folio acreditacion estafa" },
  { seccion: "Responsabilidades", titulo: "Quiero acreditarme", detalle: "Requisitos y trámite de podador o dictaminador", href: "responsabilidades/acreditate.html", claves: "acreditarme acreditacion curso requisitos podador dictaminador trabajar" },
  { seccion: "Emergencias", titulo: "Árbol caído o a punto de caer", detalle: "Los tres niveles y a quién llamar", href: "emergencias.html", claves: "emergencia caido cayo riesgo urgente 911 bomberos cable inclinado tormenta" },
  { seccion: "Emergencias", titulo: "Denunciar una poda irregular", detalle: "La denuncia ante PAOT puede ser anónima", href: "emergencias.html", claves: "denuncia denunciar irregular sin permiso paot anonima testigo" },
  { seccion: "Programas", titulo: "Árboles patrimoniales", detalle: "Criterios, régimen y cómo proponer un ejemplar", href: "https://guardianesdeltiempo.sedema.cdmx.gob.mx", claves: "patrimonial patrimoniales ahuehuete antiguo historico proponer guardianes" },
  { seccion: "Programas", titulo: "Reforestación urbana", detalle: "Priorización con enfoque de justicia ambiental y avance", href: "programas/reforestacion.html", claves: "reforestacion plantar plantacion jornada sombra justicia ambiental avance adoptar" },
  { seccion: "Programas", titulo: "Retiro y sustitución de palmeras", detalle: "Por qué se retiran y qué se planta después", href: "programas/palmeras.html", claves: "palmera palmeras retiro sustitucion plaga picudo" },
  { seccion: "Programas", titulo: "Inventario del arbolado", detalle: "Qué datos se levantan y para qué sirven", href: "programas/inventario.html", claves: "inventario censo datos abiertos ejemplares registro" },
  { seccion: "Programas", titulo: "Viveros de la ciudad", detalle: "Nezahualcóyotl y Yecapixtla: dirección, servicios y galería", href: "programas/viveros.html", claves: "vivero viveros nezahualcoyotl yecapixtla planta semilla regalan arbol gratis" },
  { seccion: "Directorio", titulo: "Áreas de SEDEMA", detalle: "Atención ciudadana, DGEIRA, DGSANPAVA e Infraestructura Verde", href: "directorio.html#sedema", claves: "sedema dgeira dgsanpava infraestructura verde telefono correo sede atencion" },
  { seccion: "Directorio", titulo: "Las dieciséis alcaldías", detalle: "Teléfono, correo, dirección y horario", href: "directorio.html#alcaldias", claves: "alcaldia alcaldias iztapalapa coyoacan tlalpan cuauhtemoc benito juarez telefono" },
  { seccion: "Política de arbolado", titulo: "Metas e indicadores", detalle: "Visión, ejes y avance del sexenio", href: "politica.html", claves: "politica metas indicadores vision ejes sexenio programa" },
  { seccion: "Política de arbolado", titulo: "Centro de recursos", detalle: "Documentos, guías, normas y publicaciones", href: "politica.html#recursos", claves: "recursos descargar documento guia norma ley nadf reglamento publicaciones" }
];

const sinAcento = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

class Component extends DCLogic {
  state = { q: "", menu: false };

  renderVals() {
    const activo = this.props.activo ?? "ninguno";
    const q = sinAcento(this.state.q.trim());
    const resultados = q.length < 2 ? [] : INDICE.filter(e =>
      sinAcento(e.titulo + " " + e.detalle + " " + e.seccion + " " + e.claves).indexOf(q) > -1
    ).slice(0, 8);

    return {
      q: this.state.q,
      escribir: e => this.setState({ q: e.target.value }),
      menuAbierto: this.state.menu,
      etiquetaMenu: this.state.menu ? "Cerrar el menú" : "Secciones del sitio",
      signoMenu: this.state.menu ? "▲" : "▼",
      alternarMenu: () => this.setState(s => ({ menu: !s.menu })),
      abierto: q.length >= 2,
      hayResultados: resultados.length > 0,
      sinResultados: q.length >= 2 && resultados.length === 0,
      resultados: resultados,
      secciones: SECCIONES.map(s => {
        const on = s.id === activo;
        return {
          etiqueta: s.etiqueta,
          href: s.href,
          actual: on ? "page" : undefined,
          color: on ? "var(--guinda-100)" : "var(--gris-100)",
          borde: on ? "var(--guinda-100)" : "transparent",
          fondo: on ? "var(--blanco)" : "transparent"
        };
      })
    };
  }
}

return Component; }); };

window.dcUtilidad = function(props){ return dcAdaptar(props, function(DCLogic){

class Component extends DCLogic {
  state = { voto: null };
  renderVals() {
    return {
      fecha: this.props.fecha ?? "18 de agosto de 2026",
      sinResponder: this.state.voto === null,
      dijoSi: this.state.voto === "si",
      dijoNo: this.state.voto === "no",
      votarSi: () => this.setState({ voto: "si" }),
      votarNo: () => this.setState({ voto: "no" })
    };
  }
}

return Component; }); };

window.dcindex = function(props){ return dcAdaptar(props, function(DCLogic){

const AVISOS = [
  {
    slot: "aviso-1",
    pie: "Arrastra la imagen del aviso: jornada de plantación",
    fecha: "18 de agosto de 2026",
    titulo: "Jornada de plantación en las colonias con menos sombra",
    texto: "La Secretaría abre el registro para participar en las jornadas de este año. Se planta donde el diagnóstico identificó menor cobertura de copa por habitante.",
    cta: "Cómo participar",
    href: "programas/reforestacion.html#participar"
  },
  {
    slot: "aviso-2",
    pie: "Arrastra la imagen del aviso: verificación de credencial",
    fecha: "12 de agosto de 2026",
    titulo: "Verifica la credencial antes de dejar que alguien pode tu árbol",
    texto: "Quien poda arbolado de la ciudad necesita acreditación vigente. Consulta el padrón con el folio de la credencial y evita un cobro indebido.",
    cta: "Consultar el padrón",
    href: "responsabilidades.html#verificador"
  },
  {
    slot: "aviso-3",
    pie: "Arrastra la imagen del aviso: convocatoria de árboles patrimoniales",
    fecha: "5 de agosto de 2026",
    titulo: "Convocatoria abierta para proponer árboles patrimoniales",
    texto: "Si conoces un ejemplar antiguo, monumental o con valor para tu barrio, puedes proponerlo. La Secretaría revisa cada propuesta con criterios técnicos e históricos.",
    cta: "Proponer un ejemplar",
    href: "https://guardianesdeltiempo.sedema.cdmx.gob.mx"
  },
  {
    slot: "aviso-4",
    pie: "Arrastra la imagen del aviso: temporada de lluvias",
    fecha: "28 de julio de 2026",
    titulo: "Temporada de lluvias: qué hacer si un árbol se inclina",
    texto: "Con viento y suelo saturado aumentan las caídas. Consulta los tres niveles de atención y el teléfono que corresponde a cada situación.",
    cta: "Ver qué hacer",
    href: "emergencias.html"
  },
  {
    slot: "aviso-5",
    pie: "Arrastra la imagen del aviso: retiro de palmeras",
    fecha: "15 de julio de 2026",
    titulo: "Por qué se retiran palmeras y qué se planta en su lugar",
    texto: "El picudo y la enfermedad las han vuelto un riesgo. Cada palmera retirada se sustituye por especies que sí dan sombra a la ciudad.",
    cta: "Conocer el programa",
    href: "programas/palmeras.html"
  }
];

class Component extends DCLogic {
  state = { i: 0 };

  ir(n) {
    const total = AVISOS.length;
    this.setState({ i: (n + total) % total });
  }

  renderVals() {
    const i = this.state.i;
    return {
      aviso: AVISOS[i],
      posicion: (i + 1) + " de " + AVISOS.length,
      anterior: () => this.ir(i - 1),
      siguiente: () => this.ir(i + 1),
      puntos: AVISOS.map((a, n) => ({
        etiqueta: "Ver el aviso " + (n + 1) + ": " + a.titulo,
        fondo: n === i ? "var(--guinda-100)" : "transparent",
        ir: () => this.ir(n)
      }))
    };
  }
}

return Component; }); };

window.dchazlo = function(props){ return dcAdaptar(props, function(DCLogic){

const LEY = "Ley Ambiental de Protección a la Tierra en el Distrito Federal";
const N = "NADF-001-RNAT-2015";

const TEL = {
  sedematel: { rol: "Orientación", nombre: "Atención ciudadana de SEDEMA", tel: "55 5345 8187", nota: "De lunes a viernes, de 9 a 18 h" },
  alcaldia: { rol: "Autoridad competente", nombre: "Tu alcaldía · servicios urbanos", tel: "Consulta el directorio", nota: "Las dieciséis alcaldías atienden su vía pública" },
  secretaria: { rol: "Autoridad competente", nombre: "La Secretaría del Medio Ambiente", tel: "55 5345 8187", nota: "Plaza de la Constitución 1, 3.er piso" },
  paot: { rol: "Denuncia ambiental", nombre: "PAOT", tel: "55 5265 0780", nota: "denuncia.paot.cdmx.gob.mx" },
  emergencia: { rol: "Emergencia", nombre: "Número único", tel: "911", nota: "Solo si el riesgo es inmediato" }
};

const LUGARES = [
  { id: "via", etiqueta: "En la banqueta, camellón o vía pública", detalle: "Frente a tu casa, en la calle o en un camellón", contacto: TEL.alcaldia, nota: "El arbolado de vía pública lo administra la alcaldía donde está." },
  { id: "predio", etiqueta: "Dentro de mi predio", detalle: "En tu jardín, patio o terreno, incluido un predio en obra", contacto: TEL.secretaria, nota: "El árbol de un predio privado también es un bien de interés público." },
  { id: "publica", etiqueta: "En un parque o área verde pública", detalle: "Parque, deportivo, barranca o área natural protegida", contacto: TEL.secretaria, nota: "Según el área, la administra la Secretaría o la alcaldía." },
  { id: "nose", etiqueta: "No sé de quién es ese terreno", detalle: "No distingues si es vía pública, predio o área pública", contacto: TEL.sedematel, nota: "Cuando la propiedad no es clara, se empieza por orientación telefónica." }
];

const ACCIONES = [
  { id: "intervenir", etiqueta: "Podar, derribar o trasplantar", detalle: "Quieres intervenirlo y necesitas saber si requieres autorización" },
  { id: "riesgo", etiqueta: "Reportar un árbol que puede caer", detalle: "Está inclinado, con ramas fracturadas o raíz expuesta" },
  { id: "denunciar", etiqueta: "Denunciar algo que ya ocurrió", detalle: "Viste una poda o un derribo que parece irregular" },
  { id: "patrimonial", etiqueta: "Proteger un árbol notable", detalle: "Quieres proponerlo para reconocimiento patrimonial" }
];

const RUTAS = {
  "via:intervenir": { titulo: "Le toca a tu alcaldía", resumen: "La alcaldía dictamina, autoriza y ejecuta el trabajo en vía pública. No puedes intervenirlo ni contratar a nadie, aunque esté frente a tu casa.", pasos: ["Presenta tu solicitud en servicios urbanos de tu alcaldía", "Explica el motivo: obstrucción, riesgo o daño a la banqueta", "Espera la visita técnica que dictamina si procede", "Si autoriza, la alcaldía ejecuta o designa a quien lo hará"], documentos: ["Dirección exacta y fotografía del árbol completo", "Tu nombre, teléfono y correo", "Si hay daño a tu propiedad, fotografías del daño"], contactos: [TEL.alcaldia, TEL.sedematel] },
  "predio:intervenir": { titulo: "Necesitas autorización de la Secretaría", resumen: "Primero se obtiene la autorización y solo después se contrata a quien hará el trabajo, que debe estar acreditado.", pasos: ["Pide el dictamen técnico a una persona acreditada", "Presenta la solicitud con ese dictamen", "Espera la resolución por escrito", "Contrata a un podador acreditado", "Cumple la medida de restitución"], documentos: ["Identificación oficial vigente", "Documento que acredite la propiedad o posesión", "Dictamen técnico del ejemplar", "Fotografías y croquis de ubicación"], contactos: [TEL.secretaria, TEL.sedematel] },
  "publica:intervenir": { titulo: "Le toca a quien administra el área", resumen: "En un parque, barranca o área protegida la intervención la resuelve el administrador del área. Nadie ajeno puede intervenir el arbolado.", pasos: ["Identifica al administrador del área", "Presenta tu solicitud o reporte ante él", "Espera la valoración del personal responsable", "La intervención la ejecuta el administrador"], documentos: ["Nombre del área y ubicación del ejemplar", "Fotografía del árbol completo", "Tu nombre y teléfono"], contactos: [TEL.secretaria] },
  "nose:intervenir": { titulo: "Primero hay que identificar el suelo", resumen: "Sin saber si es vía pública, predio privado o área pública no se puede saber quién autoriza. Ese es el primer paso.", pasos: ["Llama a atención ciudadana de SEDEMA con la dirección exacta", "Describe el entorno: banqueta, reja, patio, parque", "Con eso te indican la autoridad competente", "Sigue la ruta que corresponda"], documentos: ["Dirección exacta y referencias", "Fotografía del árbol y su entorno", "Tu nombre y teléfono"], contactos: [TEL.sedematel] },
  "via:riesgo": { titulo: "Repórtalo hoy mismo a tu alcaldía", resumen: "Si ya cayó, si toca cables o si amenaza a personas, es una emergencia y va al 911 sin esperar nada más.", pasos: ["Si ya cayó o toca cables, llama al 911", "Si aún no cae, reporta a tu alcaldía y pide valoración", "Describe la falla: grieta, inclinación, rama fracturada", "Guarda el folio para dar seguimiento"], documentos: ["Dirección exacta y referencias", "Fotografías con la fecha visible", "Qué está en riesgo: personas, autos, cables"], contactos: [TEL.emergencia, TEL.alcaldia] },
  "predio:riesgo": { titulo: "Pide el dictamen y avisa si alcanza a terceros", resumen: "La valoración corre por tu cuenta con una persona acreditada. Si el riesgo alcanza la vía pública o a un vecino, avisa además a tu alcaldía.", pasos: ["Si el peligro es inmediato, llama al 911", "Contrata el dictamen de una persona acreditada", "Si indica intervención, solicita la autorización", "Si el riesgo sale del predio, avisa a tu alcaldía"], documentos: ["Identificación oficial vigente", "Documento de propiedad o posesión", "Fotografías del ejemplar y de la falla"], contactos: [TEL.emergencia, TEL.secretaria] },
  "publica:riesgo": { titulo: "Avisa a quien administra el área", resumen: "El reporte va al administrador del área. Si el riesgo es inmediato para quien pasa, llama al 911 primero.", pasos: ["Si el peligro es inmediato, llama al 911", "Identifica al administrador del área", "Reporta el ejemplar con su ubicación", "Guarda el folio"], documentos: ["Nombre del área y ubicación", "Fotografías con fecha visible", "Descripción de la falla"], contactos: [TEL.emergencia, TEL.secretaria] },
  "nose:riesgo": { titulo: "Repórtalo aunque no sepas de quién es", resumen: "Para reportar un riesgo no necesitas saber de quién es el terreno. Da la dirección y quien recibe lo canaliza.", pasos: ["Si el peligro es inmediato, llama al 911", "Reporta a LOCATEL o a atención ciudadana de SEDEMA con la dirección", "Describe el entorno para identificar al competente", "Guarda el folio"], documentos: ["Dirección exacta y referencias", "Fotografías con fecha visible", "Qué está en riesgo"], contactos: [TEL.emergencia, TEL.sedematel] }
};

const ACC_BASE = {
  intervenir: { titulo: "Necesitas autorización previa", resumen: "Ninguna persona puede podar, derribar ni trasplantar un árbol por su cuenta.", pasos: ["Pide el dictamen técnico del ejemplar", "Presenta tu solicitud de autorización", "Espera la resolución por escrito", "Contrata a un podador acreditado", "Cumple la restitución"], documentos: ["Identificación oficial vigente", "Dictamen técnico del ejemplar", "Fotografías del árbol completo"], fundamento: LEY + ", artículo 118 fracción III", nota: "Prohíbe intervenir árboles sin autorización previa de la autoridad competente.", extra: [TEL.sedematel] },
  riesgo: { titulo: "Repórtalo hoy mismo", resumen: "Un árbol en riesgo se valora antes de intervenirlo.", pasos: ["Si el peligro es inmediato, llama al 911", "Levanta el reporte y pide valoración", "Describe qué está en riesgo", "Guarda el folio"], documentos: ["Dirección exacta", "Fotografías con fecha visible", "Descripción de la falla"], fundamento: N + ", criterios de valoración de riesgo", nota: "Define cuándo un ejemplar representa riesgo y qué intervención procede.", extra: [TEL.emergencia] },
  denunciar: { titulo: "Denuncia ante la Procuraduría Ambiental", resumen: "Una poda o un derribo sin autorización es una infracción. Puedes denunciarla aunque no seas el dueño del predio.", pasos: ["Reúne la evidencia antes de que retiren las ramas", "Presenta la denuncia en línea o por teléfono", "Indica dirección, fecha y hora", "Conserva tu folio"], documentos: ["Fotografías o video con fecha visible", "Dirección exacta y fecha", "Datos del vehículo o de la empresa, si los viste"], fundamento: LEY + ", artículo 112 · Código Penal para el Distrito Federal, artículos 343 a 350", nota: "La Procuraduría investiga y, si procede, da vista a la autoridad que sanciona.", extra: [TEL.paot] },
  patrimonial: { titulo: "Puedes proponerlo al registro patrimonial", resumen: "Un ejemplar puede reconocerse como patrimonial por su edad, tamaño, rareza o valor histórico.", pasos: ["Revisa los criterios en la sección Patrimoniales", "Fotografía el ejemplar completo y su tronco", "Mide el perímetro a 1.30 metros del suelo", "Envía tu propuesta a la Secretaría"], documentos: ["Fotografías del ejemplar y su entorno", "Ubicación precisa y perímetro del tronco", "Antecedentes históricos o culturales"], fundamento: LEY + ", artículo 118 bis", nota: "Prevé medidas especiales para ejemplares de valor excepcional.", extra: [TEL.sedematel] }
};

const PROCEDIMIENTOS = [
  { id: "poda", orden: "Procedimiento 01", nombre: "Poda", color: "var(--dorado-100)", resumen: "Eliminación selectiva de ramas, follaje o raíces. Es la intervención más común y nunca debe superar la cuarta parte del árbol.", meta: [{ clave: "Autoridad", valor: "Tu alcaldía" }, { clave: "Respuesta", valor: "20 días hábiles" }, { clave: "Ejecución", valor: "20 días hábiles" }, { clave: "Norma", valor: N + ", numeral 6" }], pasos: [
    { actor: "Ciudadanía", titulo: "Presenta tu solicitud", texto: "Ante la alcaldía donde está el árbol, por el Sistema Unificado de Atención Ciudadana, por LOCATEL al 55 5658 1111 o en la ventanilla de servicios urbanos. Aunque el árbol esté en tu predio, cualquier poda mayor requiere autorización.", fundamento: LEY + ", artículo 106" },
    { actor: "Dictaminador acreditado", titulo: "Dictamen técnico", texto: "Una persona acreditada visita el sitio y documenta la información dasométrica, el estado estructural y sanitario, y justifica qué intervención procede. Verifica su acreditación antes de aceptar el servicio.", fundamento: N + ", numerales 5.2, 5.3 y 5.4" },
    { actor: "Tu alcaldía", titulo: "Resolución y autorización", texto: "Resuelve en un plazo no mayor a veinte días hábiles. La autorización precisa el método permitido, el porcentaje máximo de follaje, el plazo de ejecución, quién puede ejecutar y cómo se manejan los residuos.", fundamento: LEY + ", artículo 106, párrafos tercero y quinto" },
    { actor: "Verificación ciudadana", titulo: "Qué debes ver en sitio", texto: "Área acordonada y señalizada, ramas grandes bajadas con cuerdas y no en caída libre, y quien poda portando la autorización y su credencial vigente. Si falta algo, pide que se suspenda y reporta a atención ciudadana de SEDEMA o a la PAOT.", fundamento: N + ", numerales 6.1.1 a 6.1.10" },
    { actor: "Alcaldía o Secretaría", titulo: "Supervisión y cierre", texto: "Personal técnico supervisa la ejecución. Si detecta anillado, cinchamiento, descortezado o desmoche, da parte para iniciar el procedimiento sancionatorio. Al cierre se verifica el área limpia y el porcentaje respetado.", fundamento: N + ", numerales 5.10.7 y 6.1.8" }
  ] },
  { id: "derribo", orden: "Procedimiento 02", nombre: "Derribo", color: "var(--estado-error)", resumen: "Eliminación total del árbol y cualquier acto que provoque su muerte. Solo procede en cuatro supuestos y siempre obliga a restituir.", meta: [{ clave: "Autoridad", valor: "Alcaldía o Secretaría" }, { clave: "Respuesta", valor: "20 días hábiles" }, { clave: "Restitución", valor: "De 2 a 16 árboles" }, { clave: "Norma", valor: N + ", numeral 7" }], pasos: [
    { actor: "Ciudadanía y técnico", titulo: "Verifica que encaje en un supuesto legal", texto: "Son cuatro: riesgo real y presente para las personas o sus bienes, riesgo al patrimonio urbanístico, saneamiento del ejemplar, y afectación significativa a la infraestructura. No proceden la sombra, la caída de hojas ni la edad avanzada sin pérdida de vigor.", fundamento: LEY + ", artículo 106 fracciones I a IV" },
    { actor: "Dictaminador acreditado", titulo: "Solicitud con dictamen", texto: "El dictamen debe acreditar el supuesto, demostrar que el riesgo no puede mitigarse con poda, apuntalamiento o trasplante, y aplicar la valoración que fija el puntaje.", fundamento: N + ", numerales 5.3 y 7.1, y anexo 3" },
    { actor: "Alcaldía o Secretaría", titulo: "Determinación de la restitución", texto: "El puntaje define cuántos árboles hay que plantar: de 7 a 12 puntos, dos árboles; de 13 a 18, cuatro; de 19 a 24, ocho; de 25 a 28, dieciséis. En derribos por riesgo o saneamiento, la restitución es de uno a uno.", fundamento: N + ", numeral 9 y tablas 2, 3 y 4" },
    { actor: "Ciudadanía", titulo: "Aviso previo y letrero", texto: "Antes de ejecutar hay que avisar a la alcaldía para que designe supervisión, fecha y hora. En el sitio va el letrero con el responsable, el número de proyecto y el periodo de ejecución.", fundamento: LEY + ", artículo 106 párrafo cuarto" },
    { actor: "Personal acreditado", titulo: "Ejecución y destoconado", texto: "Derribo controlado en vía pública y predios, o direccional solo en espacios abiertos. Después se trocea, se elimina el tocón y las raíces principales, y los residuos se retiran en veinticuatro horas.", fundamento: N + ", numerales 7.2, 7.6, 7.7 y 11" },
    { actor: "Consecuencias", titulo: "Qué pasa sin autorización", texto: "Se activan tres consecuencias a la vez: restitución máxima de dieciséis árboles, multa administrativa de hasta cien mil veces la unidad de medida, y sanción penal de dos a diez años, o de seis a veinte si el ejemplar está en área protegida, barranca o suelo de conservación.", fundamento: LEY + ", artículos 112 y 304 · Código Penal, artículos 343 a 350" }
  ] },
  { id: "trasplante", orden: "Procedimiento 03", nombre: "Trasplante", color: "var(--guinda-100)", resumen: "Extraer el árbol y plantarlo en otro sitio conservando su raíz. Se prefiere sobre el derribo cuando el ejemplar es viable.", meta: [{ clave: "Autoridad", valor: "Alcaldía o Secretaría" }, { clave: "Plazo crítico", valor: "48 horas tras el banqueo" }, { clave: "Norma complementaria", valor: "NADF-006-RNAT-2012" }, { clave: "Numeral", valor: N + ", numeral 8" }], pasos: [
    { actor: "Ciudadanía", titulo: "Solicitud y dictamen de viabilidad", texto: "El dictamen evalúa si la especie tolera el trasplante, la edad y el vigor del ejemplar, su condición sanitaria, y si el sitio destino tiene suelo, espacio y riego apropiados.", fundamento: N + ", numerales 7.1.4 y 8.1" },
    { actor: "Personal acreditado", titulo: "Banqueo: preparación del cepellón", texto: "Se cortan las raíces laterales por etapas, se espera el desarrollo de raíces secundarias y solo entonces se corta la raíz basal. El cepellón se arpilla con material biodegradable.", fundamento: N + ", numeral 8.5.1" },
    { actor: "Personal técnico", titulo: "Extracción y traslado", texto: "El árbol se maneja siempre por el cepellón, nunca por el tronco, con trasplantadora o canastilla hidráulica. El trasplante debe ejecutarse como máximo cuarenta y ocho horas después del banqueo.", fundamento: N + ", numerales 8.5.2 y 8.5.2.1" },
    { actor: "Personal técnico", titulo: "Sitio destino y plantación", texto: "La cepa se prepara antes: retiro de cascajo, mejoramiento de suelo y verificación de servicios subterráneos. Al plantar se cuida la verticalidad, se riega a saturación y se sueltan los amarres del cepellón.", fundamento: N + ", numerales 8.5.2.2 a 8.5.2.4" },
    { actor: "Responsable del proyecto", titulo: "Mantenimiento y verificación", texto: "Riego periódico, monitoreo fitosanitario, revisión de tensores y poda de formación los primeros años. Si el ejemplar muere por mala ejecución, el resultado se equipara a un derribo y hay que restituir.", fundamento: LEY + ", artículo 109 párrafo final · " + N + ", numeral 9" }
  ] }
];

const PERFILES = [
  { id: "todos", etiqueta: "Todos los perfiles" },
  { id: "vecino", etiqueta: "Vecino preocupado" },
  { id: "obra", etiqueta: "Voy a construir" },
  { id: "jardin", etiqueta: "Árbol en mi jardín" },
  { id: "testigo", etiqueta: "Vi algo irregular" },
  { id: "protector", etiqueta: "Protejo un árbol" }
];

const URG = { emergencia: "var(--estado-error)", pronto: "var(--cafe)", ordinario: "var(--guinda-100)" };

const CASOS = [
  { perfil: "vecino", urg: "emergencia", u: "Emergencia", titulo: "Un árbol cayó sobre un auto o sobre la banqueta", autoridad: "911 · Bomberos y Protección Civil", hacer: ["Llama al 911 y di si hay personas o vehículos atrapados", "Aleja a la gente a una vez y media la altura del árbol", "Si hay cables, reporta también a la CFE al 071", "Fotografía desde lejos para el seguro y el reporte"], noHacer: ["No muevas ramas ni cortes nada por tu cuenta", "No te acerques a los cables: pueden estar energizados"], fundamento: "Ley del Heroico Cuerpo de Bomberos de la Ciudad de México, artículo 6 fracción IX" },
  { perfil: "vecino", urg: "pronto", u: "Atención pronta", titulo: "El árbol de mi calle quedó inclinado o levantó la banqueta", autoridad: "Tu alcaldía · servicios urbanos", hacer: ["Levanta el reporte y pide visita de valoración", "Fotografía el tronco, la base y el suelo levantado", "Guarda el folio del reporte", "Si la inclinación crece o cruje, escala al 911"], noHacer: ["No lo apuntales con materiales improvisados", "No cortes raíces: es la causa más común de que caiga"], fundamento: N + ", criterios de valoración de riesgo" },
  { perfil: "obra", urg: "ordinario", u: "Trámite ordinario", titulo: "Voy a construir y hay árboles en el predio", autoridad: "La Secretaría, dentro de la resolución de impacto ambiental", hacer: ["Incluye el arbolado en el estudio de impacto ambiental", "Presenta el inventario con especie, diámetro y estado", "Considera el trasplante de los ejemplares viables", "Presupuesta la restitución: es obligatoria"], noHacer: ["No derribes antes de la resolución: la obra se suspende", "No dejes el arbolado para después del permiso de construcción"], fundamento: "Reglamento de Impacto Ambiental y Riesgo, artículos 137 a 141" },
  { perfil: "obra", urg: "ordinario", u: "Trámite ordinario", titulo: "Autorizaron el derribo y quiero saber qué se planta a cambio", autoridad: "La Secretaría · medida de restitución", hacer: ["Revisa en la resolución cuántos ejemplares y de qué talla", "Cumple la medida en el plazo autorizado", "Documenta la plantación con fotografías", "Si no hay espacio, consulta dónde cumplirla"], noHacer: ["No la trates como recomendación: es obligatoria", "No sustituyas con especies distintas a las autorizadas"], fundamento: LEY + ", artículo 118" },
  { perfil: "jardin", urg: "ordinario", u: "Trámite ordinario", titulo: "Quiero podar el árbol de mi jardín porque da mucha sombra", autoridad: "La Secretaría autoriza · podador acreditado ejecuta", hacer: ["Solicita la autorización antes de contratar a nadie", "Contrata el dictamen de una persona acreditada", "Verifica en el padrón que tenga acreditación vigente", "Conserva la autorización durante el trabajo"], noHacer: ["No supongas que por ser tu predio no necesitas permiso", "No permitas que retiren más de la cuarta parte del árbol"], fundamento: LEY + ", artículo 118 fracción III · " + N },
  { perfil: "jardin", urg: "ordinario", u: "Trámite ordinario", titulo: "El árbol del vecino cuelga sobre mi patio", autoridad: "La Secretaría autoriza · acuerdo entre particulares", hacer: ["Habla primero con tu vecino y documenten el acuerdo", "La solicitud la presenta quien posee el predio del árbol", "Si hay riesgo para tu vivienda, pide el dictamen técnico"], noHacer: ["No cortes las ramas de tu lado: también requiere autorización", "No apliques herbicida ni sal a la raíz"], fundamento: LEY + ", artículo 118 fracción III" },
  { perfil: "testigo", urg: "pronto", u: "Atención pronta", titulo: "Un vecino cortó un árbol de la calle sin permiso", autoridad: "PAOT · denuncia ambiental", hacer: ["Fotografía el tocón y las ramas antes de que las retiren", "Presenta la denuncia en línea o al 55 5265 0780", "Anota fecha, hora y datos del vehículo o la empresa", "Conserva tu folio para consultar el avance"], noHacer: ["No confrontes a quien lo hizo", "No esperes: la evidencia desaparece en horas"], fundamento: LEY + ", artículo 112 · Código Penal, artículos 343 a 350" },
  { perfil: "testigo", urg: "pronto", u: "Atención pronta", titulo: "Me ofrecieron podar barato y sin papeles", autoridad: "La Secretaría · padrón de acreditaciones", hacer: ["Pide la credencial y verifica el folio en el padrón", "Confirma que la fotografía y la vigencia correspondan", "Exige ver el dictamen y la autorización antes de empezar"], noHacer: ["No pagues por adelantado sin verificar", "No aceptes que “así se hace siempre”: quien contrata responde"], fundamento: N + ", numeral 5.5" },
  { perfil: "protector", urg: "ordinario", u: "Trámite ordinario", titulo: "Quiero que reconozcan un árbol muy viejo de mi barrio", autoridad: "La Secretaría · registro de árboles patrimoniales", hacer: ["Reúne fotografías del ejemplar completo y del tronco", "Mide el perímetro a 1.30 metros del suelo", "Documenta su historia y su valor para el barrio", "Envía la propuesta con la ubicación precisa"], noHacer: ["No coloques placas, clavos ni cercas al ejemplar", "No pintes el tronco: el encalado no lo protege"], fundamento: LEY + ", artículo 118 bis" },
  { perfil: "protector", urg: "emergencia", u: "Emergencia", titulo: "Están talando en un parque o en una barranca", autoridad: "PAOT y la Secretaría · competencia exclusiva", hacer: ["Denuncia de inmediato ante la PAOT y avisa a la Secretaría", "Registra ubicación, hora y maquinaria presente", "Anota los datos del anuncio de obra o de la empresa"], noHacer: ["No entres a la zona ni intentes detener la maquinaria", "No difundas la ubicación antes de presentar la denuncia"], fundamento: LEY + ", artículos 9 y 10" }
];

const FAQS = [
  { perfil: "vecino", p: "¿A quién le toca el árbol de mi calle?", r: "Depende del tipo de vialidad. En calles locales y colonias es tu alcaldía. En ejes viales, avenidas grandes y calzadas, la Secretaría autoriza y SOBSE ejecuta.", f: LEY + ", artículos 9 y 10" },
  { perfil: "vecino", p: "¿Cuánto tarda una autorización?", r: "La autoridad debe resolver en un plazo no mayor a veinte días hábiles contados desde tu solicitud.", f: LEY + ", artículo 106" },
  { perfil: "vecino", p: "El árbol de la banqueta dañó mi coche al caer, ¿quién paga?", r: "El reclamo se presenta ante la autoridad responsable del arbolado en ese sitio, normalmente tu alcaldía. Documenta con fotografías y con el folio del reporte.", f: "Ley Orgánica de Alcaldías, artículo 32 fracción V" },
  { perfil: "vecino", p: "¿Puedo plantar un árbol frente a mi casa?", r: "Sí, coordinándolo con tu alcaldía: ella define la especie según el ancho de banqueta y el cableado, y las dimensiones del cajete.", f: "NADF-006-RNAT-2012" },
  { perfil: "obra", p: "Voy a construir, ¿el arbolado va aparte?", r: "No. Cuando la afectación deriva de una obra sujeta a evaluación de impacto ambiental, la autorización del arbolado queda dentro de esa misma resolución.", f: "Reglamento de Impacto Ambiental y Riesgo, artículos 137 a 141" },
  { perfil: "obra", p: "¿Cuántos árboles tengo que plantar si derribo uno?", r: "Entre dos y dieciséis, según el puntaje de valoración del dictamen. En derribos por riesgo o saneamiento la restitución es de uno a uno.", f: N + ", numeral 9 y tablas 2, 3 y 4" },
  { perfil: "obra", p: "¿Puedo pagar en lugar de plantar?", r: "Solo por excepción, cuando la restitución física es jurídica o técnicamente imposible. En ese caso se aporta al Fondo Ambiental Público.", f: LEY + ", artículo 109" },
  { perfil: "obra", p: "¿El trasplante es mejor que el derribo?", r: "Sí, y se privilegia cuando el ejemplar es viable. Debe ejecutarse en un máximo de cuarenta y ocho horas después del banqueo.", f: N + ", numerales 8.1 y 8.5.2" },
  { perfil: "jardin", p: "¿Necesito permiso si el árbol está en mi jardín?", r: "Sí. El predio es tuyo, pero el árbol es un bien de interés público. Podarlo, derribarlo o trasplantarlo requiere autorización previa.", f: LEY + ", artículo 118 fracción III" },
  { perfil: "jardin", p: "¿Cuánto se le puede quitar a un árbol en una poda?", r: "Como máximo la cuarta parte del follaje y las ramas, y solo si ese porcentaje está justificado en el dictamen técnico.", f: N + ", numeral 6" },
  { perfil: "jardin", p: "¿Puedo cortar las raíces que levantan mi piso?", r: "No por tu cuenta. Cortar raíces es la causa más común de que un árbol termine cayendo, y se considera intervención no autorizada.", f: LEY + ", artículo 118 fracción III" },
  { perfil: "jardin", p: "¿Qué documentos necesito si el árbol está en mi predio?", r: "Identificación oficial, documento que acredite la propiedad o posesión, dictamen técnico de persona acreditada, y fotografías con un croquis de ubicación.", f: N + ", numeral 5.3" },
  { perfil: "testigo", p: "¿Dónde denuncio una poda o un derribo irregular?", r: "Ante la Procuraduría Ambiental y del Ordenamiento Territorial, en línea o al 55 5265 0780. La denuncia puede ser anónima.", f: "Ley Orgánica de la PAOT, artículo 5 fracciones I y XV" },
  { perfil: "testigo", p: "¿Necesito pruebas para denunciar?", r: "Ayuda mucho: fotografías con fecha visible, dirección exacta y hora aproximada. Reúnelas antes de que retiren las ramas o el tocón.", f: "Ley Orgánica de la PAOT, artículo 5" },
  { perfil: "testigo", p: "¿De cuánto es la multa por derribar sin permiso?", r: "Hasta cien mil veces la unidad de medida vigente, además de la obligación de restituir con el número máximo de árboles.", f: LEY + ", artículos 112 y 304" },
  { perfil: "testigo", p: "¿Cómo verifico que un podador esté acreditado?", r: "Pide el folio y consúltalo en el padrón. Revisa que la fotografía corresponda a la persona y que la vigencia esté al día. Una credencial con tachaduras no es válida.", f: N + ", numeral 5.5" },
  { perfil: "protector", p: "¿Qué es un árbol patrimonial?", r: "Un ejemplar notable, singular o monumental por su edad, tamaño, especie, o su valor paisajístico, histórico, cultural o social. Tiene protección más estricta.", f: LEY + ", artículo 118 bis" },
  { perfil: "protector", p: "¿Se puede derribar un árbol patrimonial?", r: "Solo si hay riesgo real y presente acreditado en dictamen, y siempre que no pueda mitigarse con poda, apuntalamiento o trasplante. No se derriba a cambio de restitución.", f: LEY + ", artículos 34 y 118 bis" },
  { perfil: "protector", p: "¿Cómo propongo un árbol al registro?", r: "Reúne fotografías del ejemplar y su entorno, la ubicación precisa, el perímetro del tronco a 1.30 metros del suelo y lo que sepas de su historia. Preséntalo en atención ciudadana.", f: LEY + ", artículo 118 bis" },
  { perfil: "protector", p: "¿Qué es el desmoche y por qué está prohibido?", r: "Es cortar la copa o las ramas estructurales. Debilita al árbol, lo vuelve inestable y tiene el mismo régimen legal que un derribo.", f: N + ", numeral 6" }
];

class Component extends DCLogic {
  state = { lugar: null, accion: null, proc: "poda", perfil: "todos", casos: {}, faqs: {} };

  renderVals() {
    const st = this.state;
    const lugar = LUGARES.find(l => l.id === st.lugar) || null;
    const accion = ACCIONES.find(a => a.id === st.accion) || null;
    const listo = !!(lugar && accion);
    const ruta = [];
    if (lugar) ruta.push({ texto: lugar.etiqueta });
    if (accion) ruta.push({ texto: accion.etiqueta });

    const v = {
      verdadero: true,
      etiquetaPaso: listo ? "Consulta terminada" : "Paso " + (lugar ? 2 : 1) + " de 2",
      seg1: "var(--guinda-100)",
      seg1borde: "var(--guinda-100)",
      seg2: listo || lugar ? "var(--guinda-100)" : "var(--blanco)",
      seg2borde: listo || lugar ? "var(--guinda-100)" : "var(--gris-40)",
      puedeVolver: !!lugar,
      hayRuta: ruta.length > 0,
      ruta,
      enPregunta: !listo,
      hayResultado: listo,
      volver: () => this.setState(s => (s.accion ? { accion: null } : { lugar: null })),
      reiniciar: () => this.setState({ lugar: null, accion: null })
    };

    if (!listo) {
      const primera = !lugar;
      v.pregunta = primera ? "¿Dónde está el árbol?" : "¿Qué quieres resolver?";
      v.ayuda = primera
        ? "De quién es el suelo donde crece el árbol define qué autoridad puede autorizar o atender el caso."
        : "Elige la opción que más se parezca a tu situación. Puedes volver y cambiar tu respuesta.";
      v.opciones = (primera ? LUGARES : ACCIONES).map(o => ({
        etiqueta: o.etiqueta,
        detalle: o.detalle,
        elegir: () => this.setState(primera ? { lugar: o.id } : { accion: o.id })
      }));
    } else {
      const base = ACC_BASE[accion.id];
      const r = RUTAS[lugar.id + ":" + accion.id] || {};
      const contactos = (r.contactos || [lugar.contacto].concat(base.extra)).filter((c, i, a) => a.indexOf(c) === i).slice(0, 3);
      v.resTitulo = r.titulo || base.titulo;
      v.resResumen = (r.resumen || base.resumen) + " " + lugar.nota;
      v.resPasos = (r.pasos || base.pasos).map((texto, i) => ({ n: i + 1, texto }));
      v.resDocumentos = (r.documentos || base.documentos).map(texto => ({ texto }));
      v.resFundamento = base.fundamento;
      v.resNota = base.nota;
      v.resContactos = contactos;
    }

    v.procedimientos = PROCEDIMIENTOS.map(p => {
      const abierto = st.proc === p.id;
      return {
        orden: p.orden,
        nombre: p.nombre,
        resumen: p.resumen,
        color: p.color,
        abierto,
        signo: abierto ? "–" : "+",
        meta: p.meta,
        pasos: p.pasos.map((s, i) => ({ n: i + 1 < 10 ? "0" + (i + 1) : String(i + 1), actor: s.actor, titulo: s.titulo, texto: s.texto, fundamento: s.fundamento })),
        alternar: () => this.setState(s => ({ proc: s.proc === p.id ? null : p.id }))
      };
    });

    const casosFiltrados = CASOS.filter(c => st.perfil === "todos" || c.perfil === st.perfil);
    v.perfiles = PERFILES.map(pf => {
      const on = st.perfil === pf.id;
      const n = pf.id === "todos" ? CASOS.length : CASOS.filter(c => c.perfil === pf.id).length;
      return {
        etiqueta: pf.etiqueta,
        cuenta: String(n),
        activo: on,
        bg: on ? "var(--guinda-100)" : "var(--blanco)",
        fg: on ? "var(--blanco)" : "var(--gris-100)",
        borde: on ? "var(--guinda-100)" : "var(--gris-40)",
        activar: () => this.setState({ perfil: pf.id })
      };
    });
    v.conteoCasos = casosFiltrados.length === CASOS.length ? "Los diez casos" : casosFiltrados.length === 1 ? "1 caso para este perfil" : casosFiltrados.length + " casos para este perfil";
    const ANCLAS = {
      "Voy a construir y hay árboles en el predio": "caso-construccion",
      "Quiero podar el árbol de mi jardín porque da mucha sombra": "caso-jardin-privado"
    };
    v.casos = casosFiltrados.map(c => {
      const abierto = !!st.casos[c.titulo];
      const pf = PERFILES.find(x => x.id === c.perfil) || {};
      return {
        titulo: c.titulo,
        autoridad: c.autoridad,
        urgencia: c.u,
        perfilEtiqueta: pf.etiqueta || "",
        ancla: ANCLAS[c.titulo] || "",
        color: URG[c.urg] || "var(--guinda-100)",
        abierto,
        signo: abierto ? "–" : "+",
        hacer: c.hacer.map(texto => ({ texto })),
        noHacer: c.noHacer.map(texto => ({ texto })),
        fundamento: c.fundamento,
        alternar: () => this.setState(s => ({ casos: Object.assign({}, s.casos, { [c.titulo]: !s.casos[c.titulo] }) }))
      };
    });

    let n = 0;
    v.bloques = PERFILES.filter(pf => pf.id !== "todos").map(pf => ({
      titulo: pf.etiqueta,
      items: FAQS.filter(f => f.perfil === pf.id).map(f => {
        n++;
        const abierto = !!st.faqs[f.p];
        const num = n < 10 ? "0" + n : String(n);
        return {
          num,
          ancla: "p" + num,
          hash: "#p" + num,
          pregunta: f.p,
          respuesta: f.r,
          fundamento: f.f,
          abierto,
          signo: abierto ? "–" : "+",
          alternar: () => this.setState(s => ({ faqs: Object.assign({}, s.faqs, { [f.p]: !s.faqs[f.p] }) }))
        };
      })
    }));

    return v;
  }
}

return Component; }); };

window.dcresponsabilidades = function(props){ return dcAdaptar(props, function(DCLogic){

const LEY = "Ley Ambiental de Protección a la Tierra en el Distrito Federal";
const N = "NADF-001-RNAT-2015";

const FILTROS = [
  { id: "todos", etiqueta: "Todas" },
  { id: "primaria", etiqueta: "Vialidad primaria" },
  { id: "secundaria", etiqueta: "Vialidad secundaria" },
  { id: "privado", etiqueta: "Predio privado" },
  { id: "protegida", etiqueta: "Áreas protegidas" },
  { id: "emergencia", etiqueta: "Emergencia" },
  { id: "denuncia", etiqueta: "Denuncia" }
];

const AUTORIDADES = [
  {
    sigla: "SEDEMA",
    nombre: "Secretaría del Medio Ambiente de la Ciudad de México",
    rol: "Autoridad ambiental",
    logos: ["assets/img/logos/firma-sedema-rgb.svg"],
    ambitos: ["primaria", "secundaria", "privado", "protegida"],
    funciones: [
      "Emite las normas ambientales y los lineamientos técnicos",
      "Acredita a podadores y a dictaminadores",
      "Autoriza derribo, poda y trasplante en proyectos sujetos a evaluación de impacto ambiental",
      "Administra directamente bosques urbanos, barrancas y áreas naturales protegidas locales"
    ],
    fundamento: LEY + ", artículos 7.º, 18, 34, 108, 111, 121 y 136 · Reglamento de Impacto Ambiental y Riesgo, artículos 137 a 141 · " + N
  },
  {
    sigla: "Alcaldías",
    nombre: "Las dieciséis alcaldías de la Ciudad de México",
    rol: "Autoridad territorial",
    marca: "LAS 16 ALCALDÍAS",
    ambitos: ["secundaria", "privado"],
    funciones: [
      "Conservan, mantienen y protegen el arbolado de vialidad secundaria y de los predios de su demarcación",
      "Autorizan poda, derribo o trasplante por riesgo, saneamiento, mantenimiento o afectación a la infraestructura",
      "Reciben y resuelven solicitudes ciudadanas en un plazo no mayor a veinte días hábiles",
      "Toda autorización debe sustentarse en un dictamen técnico"
    ],
    fundamento: LEY + ", artículo 106 · Ley Orgánica de Alcaldías, artículo 32 fracción V",
    aviso: "Excepción: si el árbol está en un bosque urbano, una barranca o un área natural protegida, la competencia es de SEDEMA."
  },
  {
    sigla: "PAOT",
    nombre: "Procuraduría Ambiental y del Ordenamiento Territorial",
    rol: "Procuraduría ambiental",
    logos: ["assets/img/logos/paot.svg"],
    ambitos: ["denuncia"],
    funciones: [
      "Recibe y atiende denuncias ambientales y de ordenamiento territorial",
      "Formula y valida dictámenes técnicos y periciales de daño ambiental",
      "Emite opiniones para restauración o compensación ambiental",
      "Investiga intervenciones irregulares al arbolado"
    ],
    fundamento: "Ley Orgánica de la Procuraduría Ambiental y del Ordenamiento Territorial, artículo 5 fracciones I y XV",
    aviso: "La denuncia es ciudadana y puede ser anónima. No necesitas ser el dueño del predio."
  },
  {
    sigla: "Bomberos",
    nombre: "Heroico Cuerpo de Bomberos de la Ciudad de México",
    rol: "Emergencia",
    logos: ["assets/img/logos/bomberos.svg"],
    ambitos: ["emergencia"],
    funciones: [
      "Secciona y retira árboles cuando representan riesgo inminente para personas o bienes",
      "Actúa en coordinación con Protección Civil y con la autoridad competente"
    ],
    fundamento: "Ley del Heroico Cuerpo de Bomberos de la Ciudad de México, artículo 6 fracción IX",
    aviso: "El acceso es por el 911. Si el árbol está dañado pero sin riesgo activo, acude a tu alcaldía o a SEDEMA."
  },
  {
    sigla: "Fiscalía Ambiental",
    nombre: "Fiscalía General de Justicia y Secretaría de Seguridad Ciudadana",
    rol: "Investigación penal",
    logos: ["assets/img/logos/fiscalia.svg", "assets/img/logos/ssc.svg"],
    ambitos: ["denuncia"],
    funciones: [
      "Investiga el derribo, la poda o el trasplante que contravienen la normatividad",
      "Aplica las disposiciones del Código Penal en materia de delitos ambientales",
      "Actúa en flagrancia cuando hay trabajos sin autorización"
    ],
    fundamento: "Código Penal para el Distrito Federal, artículos 343 a 350 · " + LEY + ", artículo 112",
    aviso: "Si una persona servidora pública participa en el ilícito, la sanción se agrava conforme al artículo 350 del Código Penal."
  }
];

// Datos de demostración: el padrón definitivo se conecta al sistema de SEDEMA
const PADRON = [
  { folio: "SEDEMA-POD-2024-00125", nombre: "María Fernanda López García", tipo: "podador", estado: "vigente", expedicion: "15 de marzo de 2024", vigencia: "15 de marzo de 2027" },
  { folio: "SEDEMA-POD-2021-00342", nombre: "Jorge Alberto Ramírez Solís", tipo: "podador", estado: "vencida", expedicion: "2 de febrero de 2021", vigencia: "2 de febrero de 2024" },
  { folio: "SEDEMA-DIC-2022-00521", nombre: "Claudia Elena Torres Nava", tipo: "dictaminador", estado: "suspendida", expedicion: "9 de junio de 2022", vigencia: "9 de junio de 2025" }
];

const ESTADOS = {
  vigente: { color: "var(--estado-exito)", titulo: "Acreditación vigente", sub: "La persona está autorizada para realizar estos trabajos.", nota: "Pide ver la credencial física y confirma que la fotografía corresponda a la persona." },
  vencida: { color: "var(--cafe)", titulo: "Acreditación vencida", sub: "La persona no puede ejercer hasta renovar su acreditación.", nota: "Si te ofrece servicios con una acreditación vencida, no la contrates y denuncia ante la PAOT." },
  suspendida: { color: "var(--estado-error)", titulo: "Acreditación suspendida", sub: "La persona no puede realizar trabajos de arbolado.", nota: "Los trabajos ejecutados con una acreditación suspendida son irregulares y procede sanción." },
  ninguna: { color: "var(--gris-60)", titulo: "No aparece en el padrón", sub: "No encontramos ese folio ni ese nombre en el padrón de SEDEMA.", nota: "Revisa que el dato esté completo. Si la persona insiste en que está acreditada, llama a atención ciudadana de SEDEMA al 55 5345 8187 antes de contratarla." }
};

class Component extends DCLogic {
  state = { filtro: "todos", pestana: "folio", consulta: "", tipo: "cualquiera", resultado: null };

  renderVals() {
    const st = this.state;
    const lista = st.filtro === "todos" ? AUTORIDADES : AUTORIDADES.filter(a => a.ambitos.indexOf(st.filtro) > -1);
    const r = st.resultado ? (ESTADOS[st.resultado.estado] || ESTADOS.ninguna) : null;

    return {
      verdadero: true,
      filtros: FILTROS.map(f => {
        const on = st.filtro === f.id;
        const n = f.id === "todos" ? AUTORIDADES.length : AUTORIDADES.filter(a => a.ambitos.indexOf(f.id) > -1).length;
        return {
          etiqueta: f.etiqueta,
          cuenta: String(n),
          activo: on,
          bg: on ? "var(--guinda-100)" : "var(--blanco)",
          fg: on ? "var(--blanco)" : "var(--gris-100)",
          borde: on ? "var(--guinda-100)" : "var(--gris-40)",
          activar: () => this.setState({ filtro: f.id })
        };
      }),
      conteo: lista.length === AUTORIDADES.length
        ? "Las cinco autoridades"
        : lista.length === 1 ? "1 autoridad para este caso" : lista.length + " autoridades para este caso",
      autoridades: lista.map(a => ({
        sigla: a.sigla,
        nombre: a.nombre,
        rol: a.rol,
        funciones: a.funciones.map(texto => ({ texto })),
        fundamento: a.fundamento,
        tieneAviso: !!a.aviso,
        aviso: a.aviso || "",
        logoEl: a.logos
          ? React.createElement(
              "span",
              { style: { display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, height: "100%" } },
              a.logos.map((src, i) => React.createElement("img", {
                key: i, src, alt: "",
                style: { maxHeight: a.logos.length > 1 ? 32 : 60, maxWidth: "100%", width: "auto", display: "block" }
              }))
            )
          : React.createElement(
              "span",
              { style: { display: "inline-flex", alignItems: "center", height: 44, padding: "0 16px", background: "var(--guinda-100)", color: "var(--blanco)", fontSize: 17, fontWeight: 700, letterSpacing: "0.04em" } },
              a.marca || ""
            )
      })),
      pestanas: [
        { id: "folio", etiqueta: "Por número de folio" },
        { id: "nombre", etiqueta: "Por nombre" }
      ].map(p => {
        const on = st.pestana === p.id;
        return {
          etiqueta: p.etiqueta,
          activo: on,
          color: on ? "var(--guinda-100)" : "var(--gris-100)",
          borde: on ? "var(--guinda-100)" : "transparent",
          activar: () => this.setState({ pestana: p.id, resultado: null })
        };
      }),
      etiquetaCampo: st.pestana === "folio" ? "Número de folio" : "Nombre completo",
      ejemploCampo: st.pestana === "folio" ? "SEDEMA-POD-2024-00125" : "María Fernanda López García",
      consulta: st.consulta,
      tipo: st.tipo,
      escribir: e => this.setState({ consulta: e.target.value }),
      cambiarTipo: e => this.setState({ tipo: e.target.value }),
      ejemplos: PADRON.map(p => ({ folio: p.folio, usar: () => this.setState({ pestana: "folio", consulta: p.folio, resultado: null }) })),
      verificar: () => {
        const q = st.consulta.trim().toLowerCase();
        if (!q) { this.setState({ resultado: null }); return; }
        const hit = PADRON.find(p => {
          const campo = st.pestana === "folio" ? p.folio : p.nombre;
          const coincide = campo.toLowerCase().indexOf(q) > -1;
          const tipoOk = st.tipo === "cualquiera" || st.tipo === p.tipo;
          return coincide && tipoOk;
        });
        this.setState({ resultado: hit || { estado: "ninguna" } });
      },
      hayResultado: !!st.resultado,
      hayDatos: !!(st.resultado && st.resultado.folio),
      resColor: r ? r.color : "var(--gris-60)",
      resTitulo: r ? r.titulo : "",
      resSub: r ? r.sub : "",
      resNota: r ? r.nota + "" : "",
      resDatos: st.resultado && st.resultado.folio ? [
        { clave: "Nombre", valor: st.resultado.nombre },
        { clave: "Folio", valor: st.resultado.folio },
        { clave: "Tipo", valor: st.resultado.tipo === "podador" ? "Podador" : "Dictaminador" },
        { clave: "Expedición", valor: st.resultado.expedicion },
        { clave: "Vigencia hasta", valor: st.resultado.vigencia }
      ] : []
    };
  }
}

return Component; }); };

window.dcdirectorio = function(props){ return dcAdaptar(props, function(DCLogic){

const HOFICINA = "De lunes a viernes, de 9 a 18 h";

const ALCALDIAS = [
  "Álvaro Obregón", "Azcapotzalco", "Benito Juárez", "Coyoacán",
  "Cuajimalpa de Morelos", "Cuauhtémoc", "Gustavo A. Madero", "Iztacalco",
  "Iztapalapa", "La Magdalena Contreras", "Miguel Hidalgo", "Milpa Alta",
  "Tláhuac", "Tlalpan", "Venustiano Carranza", "Xochimilco"
].sort((a, b) => a.localeCompare(b, "es")).map(a => ({
  tipo: "alcaldia",
  nombre: a,
  atiende: "Arbolado de vialidad secundaria y de predios de su demarcación",
  campos: [
    { clave: "Teléfono y extensión", valor: "Falta el dato", falta: true },
    { clave: "Correo", valor: "Falta el dato", falta: true },
    { clave: "Dirección", valor: "Falta el dato", falta: true },
    { clave: "Horario de atención", valor: "Falta el dato", falta: true }
  ]
}));

const DEPENDENCIAS = [
  {
    tipo: "sedema",
    rol: "Atención al público",
    nombre: "Atención ciudadana",
    atiende: "Solicitudes, propuestas de árboles patrimoniales, acreditaciones y seguimiento de trámites",
    tel: "55 5345 8187 · 55 5345 8188",
    correo: "atencionciudadana@sedema.cdmx.gob.mx",
    sede: "Plaza de la Constitución 1, 3.er piso, Centro, Cuauhtémoc, CP 06000",
    horario: "Atención presencial los martes, de 10 a 13 h"
  },
  {
    tipo: "sedema",
    rol: "Impacto ambiental",
    nombre: "DGEIRA",
    atiende: "Dirección General de Evaluación de Impacto y Regulación Ambiental. Resuelve el arbolado que se afecta por obras y proyectos sujetos a evaluación de impacto ambiental",
    tel: "55 5345 8187",
    horario: HOFICINA,
    nota: "Aquí va tu caso si la afectación deriva de una obra"
  },
  {
    tipo: "sedema",
    rol: "Áreas protegidas",
    nombre: "DGSANPAVA",
    atiende: "Dirección General de Sistema de Áreas Naturales Protegidas y Áreas de Valor Ambiental. Resuelve el arbolado dentro de áreas naturales protegidas, bosques urbanos y barrancas",
    tel: "55 5345 8187",
    horario: HOFICINA,
    nota: "Aquí va tu caso si el árbol está en un parque, una barranca o un área protegida"
  },
  {
    tipo: "sedema",
    rol: "Arbolado urbano",
    nombre: "Dirección de Infraestructura Verde",
    atiende: "Programas de arbolado urbano, inventario, plantación y coordinación con las alcaldías",
    tel: "55 5345 8187",
    horario: HOFICINA
  },
  {
    tipo: "sedema",
    rol: "Producción de planta",
    nombre: "Vivero Nezahualcóyotl",
    atiende: "Producción del arbolado que se planta en calles, camellones y parques de la ciudad",
    tel: "Por publicar",
    sede: "Ciudad de México · dirección por publicar",
    horario: HOFICINA,
    nota: "La planta no se vende al público: se entrega a programas institucionales y alcaldías"
  },
  {
    tipo: "sedema",
    rol: "Producción de planta",
    nombre: "Vivero Yecapixtla",
    atiende: "Producción y endurecimiento de planta de mayor talla antes de su traslado a la ciudad",
    tel: "Por publicar",
    sede: "Yecapixtla, Morelos",
    horario: HOFICINA
  },
  {
    tipo: "dependencia",
    rol: "Denuncia ambiental",
    nombre: "PAOT",
    atiende: "Procuraduría Ambiental y del Ordenamiento Territorial. Denuncias por poda, derribo o trasplante irregular y daño ambiental",
    tel: "55 5265 0780",
    correo: "denuncia.paot.cdmx.gob.mx",
    horario: HOFICINA,
    nota: "La denuncia es ciudadana y puede ser anónima"
  },
  {
    tipo: "dependencia",
    rol: "Investigación penal",
    nombre: "Fiscalía Ambiental",
    atiende: "Delitos ambientales cuando hay daño doloso al arbolado",
    tel: "55 5345 5000",
    horario: HOFICINA
  },
  {
    tipo: "dependencia",
    rol: "Servicios urbanos",
    nombre: "SOBSE",
    atiende: "Secretaría de Obras y Servicios. Mantenimiento del arbolado de la red vial primaria y retiro de residuo vegetal",
    tel: "Por publicar",
    horario: HOFICINA
  },
  {
    tipo: "emergencia",
    rol: "Emergencia",
    nombre: "Número único de emergencias",
    atiende: "Árbol caído sobre personas, autos o cables, y riesgo inminente de caída",
    tel: "911",
    horario: "Las veinticuatro horas, todos los días",
    nota: "Responden Bomberos y Protección Civil. También por el botón de auxilio del C5"
  },
  {
    tipo: "emergencia",
    rol: "Orientación general",
    nombre: "LOCATEL",
    atiende: "Canaliza tu reporte cuando no sabes qué autoridad corresponde",
    tel: "55 5658 1111",
    horario: "Las veinticuatro horas, todos los días"
  }
];

const TODOS = DEPENDENCIAS.concat(ALCALDIAS);

const TIPOS = [
  { id: "todos", etiqueta: "Todos" },
  { id: "sedema", etiqueta: "Áreas de SEDEMA" },
  { id: "dependencia", etiqueta: "Otras instituciones" },
  { id: "alcaldia", etiqueta: "Alcaldías" },
  { id: "emergencia", etiqueta: "Emergencia" }
];

class Component extends DCLogic {
  state = { busqueda: "", tipo: "todos" };

  coincide(c) {
    const st = this.state;
    const sinAcento = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const q = sinAcento(st.busqueda.trim());
    if (st.tipo !== "todos" && c.tipo !== st.tipo) return false;
    if (!q) return true;
    const campos = [c.nombre, c.atiende, c.correo, c.rol, c.sigla, c.sede].filter(Boolean).join(" ");
    return sinAcento(campos).indexOf(q) > -1;
  }

  renderVals() {
    const st = this.state;
    const sed = DEPENDENCIAS.filter(c => c.tipo === "sedema" && this.coincide(c));
    const deps = DEPENDENCIAS.filter(c => c.tipo !== "sedema" && this.coincide(c));
    const alcs = ALCALDIAS.filter(c => this.coincide(c));

    return {
      busqueda: st.busqueda,
      escribir: e => this.setState({ busqueda: e.target.value }),
      limpiar: () => this.setState({ busqueda: "", tipo: "todos" }),
      filtros: TIPOS.map(t => {
        const on = st.tipo === t.id;
        const n = t.id === "todos" ? TODOS.length : TODOS.filter(c => c.tipo === t.id).length;
        return {
          etiqueta: t.etiqueta,
          cuenta: String(n),
          activo: on,
          bg: on ? "var(--guinda-100)" : "var(--blanco)",
          fg: on ? "var(--blanco)" : "var(--gris-100)",
          borde: on ? "var(--guinda-100)" : "var(--gris-40)",
          activar: () => this.setState({ tipo: t.id })
        };
      }),
      haySedema: sed.length > 0,
      hayDependencias: deps.length > 0,
      hayAlcaldias: alcs.length > 0,
      sinResultados: sed.length === 0 && deps.length === 0 && alcs.length === 0,
      conteoSedema: sed.length === 1 ? "1 área" : sed.length + " áreas",
      conteoDependencias: deps.length === 1 ? "1 contacto" : deps.length + " contactos",
      conteoAlcaldias: alcs.length === 16 ? "las dieciséis" : alcs.length === 1 ? "1 alcaldía" : alcs.length + " alcaldías",
      sedema: sed.map(c => ({
        color: "var(--guinda-100)",
        nombre: c.nombre,
        rol: c.rol,
        atiende: c.atiende,
        tel: c.tel,
        horario: c.horario,
        tieneCorreo: !!c.correo,
        correo: c.correo || "",
        tieneSede: !!c.sede,
        sede: c.sede || "",
        tieneNota: !!c.nota,
        nota: c.nota || ""
      })),
      dependencias: deps.map(c => ({
        color: c.tipo === "emergencia" ? "var(--estado-error)" : "var(--guinda-100)",
        nombre: c.nombre,
        rol: c.rol,
        atiende: c.atiende,
        tel: c.tel,
        horario: c.horario,
        tieneCorreo: !!c.correo,
        correo: c.correo || "",
        tieneSede: !!c.sede,
        sede: c.sede || "",
        tieneNota: !!c.nota,
        nota: c.nota || ""
      })),
      alcaldias: alcs.map(a => {
        const dato = i => {
          const k = a.campos[i] || { valor: "Falta el dato", falta: true };
          return {
            valor: k.valor,
            color: k.falta ? "var(--negro)" : "var(--gris-100)",
            fondo: k.falta ? "var(--estado-alerta)" : "transparent",
            pad: k.falta ? "2px 8px" : "0",
            peso: k.falta ? "700" : "400"
          };
        };
        return {
          nombre: a.nombre,
          tel: dato(0),
          correo: dato(1),
          direccion: dato(2),
          horario: dato(3)
        };
      })
    };
  }
}

return Component; }); };

window.dcpolitica = function(props){ return dcAdaptar(props, function(DCLogic){

const INDICE = [
  { n: "1", etiqueta: "Política sexenal", href: "#sexenal" },
  { n: "2", etiqueta: "Programas vigentes", href: "#programas" },
  { n: "3", etiqueta: "Publicaciones rectoras", href: "#publicaciones" },
  { n: "4", etiqueta: "Centro de recursos", href: "#recursos" }
];

const METAS = [
  { meta: "Plantación de arbolado urbano", base: "Por publicar", objetivo: "Por publicar" },
  { meta: "Cobertura de copa por habitante", base: "Por publicar", objetivo: "Por publicar" },
  { meta: "Atención de reportes ciudadanos", base: "Por publicar", objetivo: "Por publicar" },
  { meta: "Personas acreditadas en manejo de arbolado", base: "Por publicar", objetivo: "Por publicar" }
];

const INDICADORES = [
  { nombre: "Plantación anual", valor: "Por publicar", pct: "38%", nota: "Avance por publicar" },
  { nombre: "Reportes atendidos", valor: "Por publicar", pct: "62%", nota: "Avance por publicar" },
  { nombre: "Cobertura de copa", valor: "Por publicar", pct: "24%", nota: "Avance por publicar" },
  { nombre: "Personas acreditadas", valor: "Por publicar", pct: "80%", nota: "Avance por publicar" }
];

const PROGRAMAS = [
  { slot: "programa-1", etapa: "Programa vigente", nombre: "Programa por publicar", texto: "La ficha de este programa se publicará con su objetivo, su cobertura y a quién está dirigido.", nota: "Periodo y área responsable por publicar" },
  { slot: "programa-2", etapa: "Programa vigente", nombre: "Programa por publicar", texto: "La ficha de este programa se publicará con su objetivo, su cobertura y a quién está dirigido.", nota: "Periodo y área responsable por publicar" },
  { slot: "programa-3", etapa: "Programa vigente", nombre: "Programa por publicar", texto: "La ficha de este programa se publicará con su objetivo, su cobertura y a quién está dirigido.", nota: "Periodo y área responsable por publicar" },
  { slot: "programa-4", etapa: "Programa vigente", nombre: "Programa por publicar", texto: "La ficha de este programa se publicará con su objetivo, su cobertura y a quién está dirigido.", nota: "Periodo y área responsable por publicar" }
];

const PUBLICACIONES = [
  { corto: "Programa ambiental", formato: "Documento rector", titulo: "Programa ambiental y de cambio climático", texto: "El instrumento que enmarca la política ambiental de la ciudad para el sexenio." },
  { corto: "Arbolado urbano", formato: "Documento rector", titulo: "Estrategia de arbolado urbano", texto: "Los criterios técnicos y las metas de manejo del arbolado de la ciudad." },
  { corto: "Informe anual", formato: "Informe", titulo: "Informe anual de avance", texto: "Los resultados del año, con indicadores y ejecución por alcaldía." }
];

const CATEGORIAS = [
  { id: "todos", etiqueta: "Todos" },
  { id: "documentos", etiqueta: "Documentos", color: "var(--guinda-100)" },
  { id: "libros", etiqueta: "Libros", color: "var(--guinda-oscuro)" },
  { id: "guias", etiqueta: "Guías", color: "var(--dorado-100)" },
  { id: "listados", etiqueta: "Listados", color: "var(--cafe)" },
  { id: "fotografias", etiqueta: "Fotografías", color: "var(--azul)" },
  { id: "videos", etiqueta: "Videos", color: "var(--estado-error)" }
];

const RECURSOS = [
  { cat: "documentos", tipo: "doc", corto: "Ley Ambiental", titulo: "Ley Ambiental de Protección a la Tierra en el Distrito Federal", texto: "Texto vigente. Los artículos 104 a 118 bis rigen todo lo relativo al arbolado urbano.", formato: "Sitio oficial", peso: "Consejería Jurídica", url: "https://data.consejeria.cdmx.gob.mx/index.php/leyes/leyes#ley-ambiental-de-la-ciudad-de-m%C3%A9xico" },
  { cat: "documentos", tipo: "doc", corto: "NADF-001", titulo: "NADF-001-RNAT-2015", texto: "Requisitos técnicos para poda, derribo, trasplante y restitución de arbolado urbano.", formato: "PDF", peso: "Documento oficial", url: "http://data.sedema.cdmx.gob.mx/sedema/images/archivos/sedema/leyes-reglamentos/normas/locales/NADF-001-RNAT-2016.pdf" },
  { cat: "documentos", tipo: "doc", corto: "NADF-006", titulo: "NADF-006-RNAT-2012", texto: "Requisitos para la plantación y el mantenimiento de arbolado en la ciudad.", formato: "PDF", peso: "Documento oficial", url: "http://data.sedema.cdmx.gob.mx/sitios/conadf/documentos/NADF-006-RNAT-2016.pdf" },
  { cat: "documentos", tipo: "doc", corto: "Código Penal", titulo: "Código Penal · delitos ambientales", texto: "Artículos 343 a 350: las conductas y las penas por daño al arbolado.", formato: "PDF", peso: "Pendiente" },
  { cat: "libros", tipo: "doc", corto: "Árboles de la ciudad", titulo: "Los árboles de la Ciudad de México", texto: "Publicación institucional de divulgación sobre las especies del arbolado urbano.", formato: "Libro", peso: "Pendiente" },
  { cat: "libros", tipo: "doc", corto: "Barrancas", titulo: "Barrancas y áreas de valor ambiental", texto: "Publicación institucional sobre el sistema de barrancas de la ciudad.", formato: "Libro", peso: "Pendiente" },
  { cat: "guias", tipo: "doc", corto: "Poda correcta", titulo: "Guía de poda correcta", texto: "Cortes permitidos, cortes prohibidos y el límite de la cuarta parte del ejemplar.", formato: "Guía", peso: "Pendiente" },
  { cat: "guias", tipo: "doc", corto: "Leer un dictamen", titulo: "Cómo se lee un dictamen técnico", texto: "Qué significa cada sección y qué revisar antes de aceptarlo.", formato: "Guía", peso: "Pendiente" },
  { cat: "guias", tipo: "imagen", slot: "recurso-riesgo-7", corto: "Riesgo arbóreo", titulo: "Identificación de riesgo arbóreo", texto: "Señales visibles de que un árbol puede caer: grietas, inclinación, hongos y raíz expuesta.", formato: "Ficha visual", peso: "Pendiente" },
  { cat: "guias", tipo: "doc", corto: "Árbol de banqueta", titulo: "Cuidados del árbol de banqueta", texto: "Riego, cajete, acolchado y qué no hacer con el arbolado frente a tu casa.", formato: "Guía", peso: "Pendiente" },
  { cat: "listados", tipo: "datos", corto: "Padrón de podadores", titulo: "Padrón de podadores acreditados", texto: "Listado vigente con folio, nombre y vigencia de la acreditación.", formato: "Hoja de cálculo", peso: "Pendiente" },
  { cat: "listados", tipo: "datos", corto: "Padrón de dictaminadores", titulo: "Padrón de dictaminadores acreditados", texto: "Listado vigente de personas autorizadas para emitir dictámenes.", formato: "Hoja de cálculo", peso: "Pendiente" },
  { cat: "listados", tipo: "doc", corto: "Especies", titulo: "Especies recomendadas para banqueta", texto: "Especies por ancho de banqueta, con notas sobre raíz y porte.", formato: "Listado", peso: "Pendiente" },
  { cat: "listados", tipo: "doc", corto: "Registro patrimonial", titulo: "Registro de árboles patrimoniales", texto: "Los trece ejemplares reconocidos como patrimonio natural de la ciudad.", formato: "Listado", peso: "Pendiente" },
  { cat: "listados", tipo: "datos", corto: "Inventario", titulo: "Inventario de arbolado urbano", texto: "Datos abiertos del arbolado registrado, por alcaldía y especie.", formato: "Datos abiertos", peso: "Pendiente" },
  { cat: "fotografias", tipo: "imagen", slot: "foto-jornadas", corto: "Jornadas", titulo: "Jornadas de plantación", texto: "Galería institucional de las jornadas de plantación en las dieciséis alcaldías.", formato: "Galería", peso: "Pendiente" },
  { cat: "fotografias", tipo: "imagen", slot: "foto-patrimoniales", corto: "Patrimoniales", titulo: "Los trece ejemplares patrimoniales", texto: "Retratos de los árboles reconocidos como patrimonio natural.", formato: "Galería", peso: "Pendiente" },
  { cat: "fotografias", tipo: "imagen", slot: "foto-barrancas", corto: "Barrancas", titulo: "Barrancas y bosques urbanos", texto: "Fotografía documental de las áreas de valor ambiental de la ciudad.", formato: "Galería", peso: "Pendiente" },
  { cat: "videos", tipo: "video", slot: "video-caida-7", duracion: "2:14", corto: "Video", titulo: "Qué hacer si un árbol cae", texto: "La ruta de reporte según el nivel de riesgo, explicada en dos minutos.", formato: "Video", peso: "Pendiente" },
  { cat: "videos", tipo: "video", slot: "video-poda-7", duracion: "3:40", corto: "Video", titulo: "Una poda bien hecha", texto: "Qué se ve en una poda correcta y qué señales indican que debes detenerla.", formato: "Video", peso: "Pendiente" },
  { cat: "videos", tipo: "video", slot: "video-patrimonio-7", duracion: "5:02", corto: "Video", titulo: "Guardianes del tiempo", texto: "Los ejemplares patrimoniales contados por quienes los cuidan.", formato: "Video", peso: "Pendiente" }
];

class Component extends DCLogic {
  state = { cat: "todos" };

  renderVals() {
    const st = this.state;
    const filtrados = RECURSOS.filter(r => st.cat === "todos" || r.cat === st.cat);
    const meta = id => CATEGORIAS.find(c => c.id === id) || {};

    return {
      indice: INDICE,
      metas: METAS.map((m, i) => Object.assign({}, m, { fondo: i % 2 === 1 ? "var(--gris-10)" : "var(--blanco)" })),
      indicadores: INDICADORES,
      programas: PROGRAMAS,
      publicaciones: PUBLICACIONES.map(p => Object.assign({}, p, { disponible: false, pendiente: true, url: "#" })),
      filtros: CATEGORIAS.map(c => {
        const on = st.cat === c.id;
        const n = c.id === "todos" ? RECURSOS.length : RECURSOS.filter(r => r.cat === c.id).length;
        return {
          etiqueta: c.etiqueta,
          cuenta: String(n),
          activo: on,
          bg: on ? "var(--guinda-100)" : "var(--blanco)",
          fg: on ? "var(--blanco)" : "var(--gris-100)",
          borde: on ? "var(--guinda-100)" : "var(--gris-40)",
          activar: () => this.setState({ cat: c.id })
        };
      }),
      conteo: filtrados.length === RECURSOS.length
        ? "Los " + RECURSOS.length + " recursos"
        : filtrados.length === 1 ? "1 recurso" : filtrados.length + " recursos",
      recursos: filtrados.map((r, i) => ({
        titulo: r.titulo,
        corto: r.corto,
        texto: r.texto,
        formato: r.formato,
        peso: r.peso,
        duracion: r.duracion || "",
        categoria: meta(r.cat).etiqueta || "",
        color: meta(r.cat).color || "var(--guinda-100)",
        esDocumento: r.tipo === "doc",
        esVideo: r.tipo === "video",
        esImagen: r.tipo === "imagen",
        esDatos: r.tipo === "datos",
        slot: r.slot || ("recurso7-" + i),
        disponible: !!r.url,
        pendiente: !r.url,
        url: r.url || "#"
      }))
    };
  }
}

return Component; }); };


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
