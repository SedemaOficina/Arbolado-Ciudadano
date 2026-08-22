/* ============================================================
   Arbolado Ciudadano · SEDEMA CDMX
   Compilador: markup de Claude Design  ->  HTML/CSS/JS puro
   Uso: node herramientas/compilar.mjs <dirFuente> <dirSalida>
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { parseFragment } from 'parse5';
import { META } from './metadatos.mjs';

const FUENTE = process.argv[2];
const SALIDA = process.argv[3];
const BASE_URL = 'https://sedemaoficina.github.io/Arbolado-Ciudadano/';

/* ---------- 1. Mapa de rutas del sitio ---------- */
const RUTAS = {
  'portada': 'index.html',
  'index': 'index.html',
  'hazlo': 'hazlo.html',
  'responsabilidades': 'responsabilidades.html',
  'emergencias': 'emergencias.html',
  'programas': 'programas.html',
  'directorio': 'directorio.html',
  'politica': 'politica.html',
  'acreditate': 'responsabilidades/acreditate.html',
  'reforestacion': 'programas/reforestacion.html',
  'palmeras': 'programas/palmeras.html',
  'inventario': 'programas/inventario.html',
  'viveros': 'programas/viveros.html',
  'patrimoniales': 'programas/patrimoniales.html'
};

/* ---------- 3. Utilidades ---------- */
const VOID = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const escTxt = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const escAtr = s => String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');

const avisos = [];
const aviso = m => { if(!avisos.includes(m)) avisos.push(m); };

/* ---------- 4. Enlaces ---------- */
function reescribirEnlace(href, profundidad){
  if(!href) return href;
  if(/^(https?:|mailto:|tel:|#|data:)/.test(href)) return href;
  const [ruta, frag] = href.split('#');
  const hash = frag ? '#'+frag : '';
  const base = path.basename(ruta).replace(/\.dc\.html$/,'').replace(/\.html$/,'');
  if(RUTAS[base]) return '../'.repeat(profundidad) + RUTAS[base] + hash;
  let r = ruta;
  // Corrección de rutas heredadas: los logotipos viven en assets/img/logos/
  if(r.startsWith('assets/logos/')) r = 'assets/img/logos/' + r.slice('assets/logos/'.length);
  if(r.startsWith('assets/')) return '../'.repeat(profundidad) + r + hash;
  aviso('Enlace sin ruta conocida: ' + href);
  return href;
}

/* ---------- 5. CSS de hover / focus ---------- */
const reglasPseudo = new Map();
function clasePseudo(decl, pseudo){
  const clave = pseudo + '|' + decl.trim();
  if(!reglasPseudo.has(clave)) reglasPseudo.set(clave, 'i' + pseudo[0] + reglasPseudo.size);
  return reglasPseudo.get(clave);
}
function cssPseudo(){
  let out = '/* Interacciones migradas de style-hover / style-focus */\n';
  for(const [clave, cls] of reglasPseudo){
    const i = clave.indexOf('|');
    const pseudo = clave.slice(0,i), decl = clave.slice(i+1);
    const sel = pseudo === 'hover' ? '.'+cls+':hover, .'+cls+':focus-visible' : '.'+cls+':focus, .'+cls+':focus-visible';
    out += sel + ' { ' + decl.replace(/;?$/,'') + ' }\n';
  }
  return out;
}

/* ---------- 6. Expresiones ---------- */
const RE_MUS = /\{\{([^}]*)\}\}/g;
const tieneMus = s => !!s && s.indexOf('{{') > -1;

function aJS(raw, locales){
  const t = String(raw).trim();
  const m = t.match(/^([A-Za-z_$][\w$]*)/);
  if(!m) return t;
  const cab = m[1];
  if(['true','false','null','undefined','NaN'].includes(cab)) return t;
  if(locales.has(cab)) return t;
  return 'v.' + t;
}
function evalJS(js, ambito){
  const k = Object.keys(ambito);
  try { return new Function(...k, '"use strict";return (' + js + ');')(...k.map(x=>ambito[x])); }
  catch(e){ aviso('No se pudo evaluar "' + js + '": ' + e.message); return ''; }
}
function partir(texto, locales, ambito, evaluar){
  let partes = [], ultimo = 0, hayExp = false, m;
  RE_MUS.lastIndex = 0;
  while((m = RE_MUS.exec(texto))){
    const previo = texto.slice(ultimo, m.index);
    if(previo) partes.push({t:'txt', v:previo});
    partes.push({t:'exp', v:aJS(m[1], locales)});
    hayExp = true;
    ultimo = m.index + m[0].length;
  }
  const cola = texto.slice(ultimo);
  if(cola) partes.push({t:'txt', v:cola});
  if(!hayExp) return {hayExp:false, estatico:texto, js:null, unica:false};
  let estatico = '';
  if(evaluar){
    estatico = partes.map(p => {
      if(p.t === 'txt') return p.v;
      const r = evalJS(p.v, ambito);
      if(r === undefined || r === null) return '';
      if(typeof r === 'object' && r.__html) return r.__html;
      return String(r);
    }).join('');
  }
  const unica = partes.length === 1 && partes[0].t === 'exp';
  const js = unica ? partes[0].v
    : '`' + partes.map(p => p.t==='txt' ? p.v.replace(/[`\\$]/g,'\\$&') : '${'+p.v+'}').join('') + '`';
  return {hayExp:true, estatico, js, unica};
}

/* ---------- 7. Lógica DCLogic ---------- */
class DCLogic { constructor(props){ this.props = props||{}; } setState(){} }
function ReactShim(){
  const atributos = o => Object.entries(o||{}).map(([k,val])=>{
    if(k === 'key') return '';
    if(k === 'style'){
      const s = Object.entries(val).map(([p,q])=>{
        const prop = p.replace(/[A-Z]/g, c=>'-'+c.toLowerCase());
        const sinPx = ['zIndex','fontWeight','opacity','flex','order','lineHeight'];
        return prop + ':' + (typeof q === 'number' && !sinPx.includes(p) ? q+'px' : q);
      }).join(';');
      return ' style="' + escAtr(s) + '"';
    }
    if(val === true) return ' ' + k;
    if(val === false || val == null) return '';
    return ' ' + k + '="' + escAtr(val) + '"';
  }).join('');
  return { createElement(tag, props, ...hijos){
    const dentro = hijos.flat(9).filter(h=>h!=null)
      .map(h => (typeof h === 'object' && h.__html) ? h.__html : String(h)).join('');
    const html = VOID.has(tag) ? '<'+tag+atributos(props)+'>' : '<'+tag+atributos(props)+'>'+dentro+'</'+tag+'>';
    return {__html: html, toString(){ return html; }};
  }};
}
function extraerLogica(html){
  const m = html.match(/<script type="text\/x-dc"([^>]*)>([\s\S]*?)<\/script>/);
  if(!m) return {codigo:'', propsDef:{}};
  let propsDef = {};
  const pr = (m[1].match(/data-props="([^"]*)"/)||[])[1];
  if(pr){ try{ propsDef = JSON.parse(pr.replace(/&quot;/g,'"')); }catch(e){ aviso('data-props ilegible'); } }
  return {codigo: m[2], propsDef};
}
function instanciar(codigo, props){
  if(!codigo.trim()) return {vals:{}, estado:{}, interactivo:false};
  const ctx = vm.createContext({DCLogic, React: ReactShim(), console, JSON, Math, Date,
    Object, Array, String, Number, Boolean, RegExp, parseInt, parseFloat, isNaN, encodeURIComponent});
  vm.runInContext(codigo + '\n;globalThis.__C = Component;', ctx);
  const inst = new ctx.__C(props);
  inst.props = props;
  const vals = inst.renderVals ? inst.renderVals() : {};
  return {vals, estado: inst.state||{}, interactivo: Object.keys(inst.state||{}).length > 0};
}

/* ---------- 8. Componentes compartidos ---------- */
const COMPONENTES = {};
function cargarComponente(archivo, nombre, fabrica){
  const html = fs.readFileSync(path.join(FUENTE,'componentes',archivo),'utf8');
  const {codigo, propsDef} = extraerLogica(html);
  const cuerpo = (html.match(/<x-dc>([\s\S]*?)<\/x-dc>/)||[])[1] || '';
  const helmet = (cuerpo.match(/<helmet>([\s\S]*?)<\/helmet>/)||[])[1] || '';
  const markup = cuerpo.replace(/<helmet>[\s\S]*?<\/helmet>/,'');
  const estilos = [...helmet.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(x=>x[1]).join('\n');
  const defaults = {};
  for(const [k,val] of Object.entries(propsDef)) if(k !== '$preview') defaults[k] = val.default;
  COMPONENTES[nombre] = {markup, codigo, defaults, estilos, fabrica};
}

/* ---------- 9. Transformación del árbol ---------- */
function preparar(markup){
  return markup
    .replace(/<sc-for\s+([^>]*)>/g, (m,a)=>'<template data-scfor="'+escAtr(a)+'">')
    .replace(/<\/sc-for>/g,'</template>')
    .replace(/<sc-if\s+([^>]*)>/g, (m,a)=>'<template data-scif="'+escAtr(a)+'">')
    .replace(/<\/sc-if>/g,'</template>');
}
const atr = (n,k) => { const a = (n.attrs||[]).find(x=>x.name===k); return a ? a.value : undefined; };
const hijosDe = n => (n.tagName === 'template' && n.content) ? n.content.childNodes : (n.childNodes||[]);
const estilosDe = c => c ? c.trim().replace(/;\s*$/,'') : '';
function hash(s){ let h=0; for(let i=0;i<s.length;i++){ h=(h*31+s.charCodeAt(i))|0; } return h; }

function emitir(nodos, ctx){ let out=''; for(const n of nodos) out += emitirNodo(n, ctx); return out; }

function emitirNodo(n, ctx){
  if(n.nodeName === '#text'){
    const t = n.value;
    if(!tieneMus(t)) return ctx.modo === 'plantilla' ? t : t;
    const p = partir(t, ctx.locales, ctx.ambito, ctx.modo === 'estatico');
    const din = (ctx.alpine || ctx.modo === 'plantilla') ? ' x-html="' + escAtr(p.js) + '"' : '';
    return '<span' + din + '>' + (ctx.modo === 'estatico' ? p.estatico : '') + '</span>';
  }
  if(n.nodeName === '#comment') return '';
  const tag = n.tagName;
  if(!tag) return '';
  if(tag === 'template' && atr(n,'data-scfor') !== undefined) return emitirBucle(n, ctx);
  if(tag === 'template' && atr(n,'data-scif') !== undefined) return emitirCondicional(n, ctx);
  if(tag === 'dc-import') return emitirImport(n, ctx);
  if(tag === 'image-slot') return emitirImagen(n, ctx);
  if(tag === 'helmet') return '';
  return emitirElemento(n, ctx);
}

function emitirElemento(n, ctx){
  const tag = n.tagName;
  const clases = [], extra = [], atrs = [];
  let estilo = null, estiloJS = null;
  for(const a of (n.attrs||[])){
    const nom = a.name, val = a.value;
    if(nom === 'style-hover'){ clases.push(clasePseudo(val,'hover')); continue; }
    if(nom === 'style-focus'){ clases.push(clasePseudo(val,'focus')); continue; }
    if(nom.startsWith('hint-')) continue;
    if(nom === 'class'){ clases.push(val); continue; }
    if(/^on[A-Z]/.test(nom)){
      if(!tieneMus(val)) continue;
      const js = aJS(val.replace(/[{}]/g,'').trim(), ctx.locales);
      const esSelect = tag === 'select';
      const ev = nom === 'onClick' ? 'click'
        : nom === 'onChange' ? (esSelect ? 'change' : 'input')
        : nom.slice(2).toLowerCase();
      extra.push('@' + ev + '="' + escAtr(js + '($event)') + '"');
      continue;
    }
    if(nom === 'style'){
      if(tieneMus(val)){
        const p = partir(val, ctx.locales, ctx.ambito, ctx.modo === 'estatico');
        estilo = estilosDe(p.estatico); estiloJS = p.js;
      } else estilo = estilosDe(val);
      continue;
    }
    if(tieneMus(val)){
      const p = partir(val, ctx.locales, ctx.ambito, ctx.modo === 'estatico');
      if(ctx.alpine || ctx.modo === 'plantilla') extra.push(':' + nom + '="' + escAtr(p.js) + '"');
      if(ctx.modo === 'estatico'){
        const v = p.unica ? evalJS(p.js, ctx.ambito) : p.estatico;
        if(v !== undefined && v !== null && v !== '' && v !== false){
          const sv = (nom === 'href' || nom === 'src') ? reescribirEnlace(String(v), ctx.profundidad) : String(v);
          atrs.push(nom + '="' + escAtr(sv) + '"');
        }
      }
      continue;
    }
    if(nom === 'href' || nom === 'src'){ atrs.push(nom + '="' + escAtr(reescribirEnlace(val, ctx.profundidad)) + '"'); continue; }
    atrs.push(val === '' ? nom : nom + '="' + escAtr(val) + '"');
  }

  const hijos = hijosDe(n);
  const soloTexto = hijos.length > 0 && hijos.every(h => h.nodeName === '#text');
  let dentro = '';
  if(soloTexto && hijos.some(h => tieneMus(h.value))){
    const t = hijos.map(h=>h.value).join('');
    const p = partir(t, ctx.locales, ctx.ambito, ctx.modo === 'estatico');
    if(ctx.alpine || ctx.modo === 'plantilla') extra.push('x-html="' + escAtr(p.js) + '"');
    dentro = ctx.modo === 'estatico' ? p.estatico : '';
  } else {
    dentro = emitir(hijos, {...ctx, marcar:false, ocultar:false});
  }

  if(ctx.marcar) extra.push('data-pr');
  if(estiloJS && (ctx.alpine || ctx.modo === 'plantilla')) extra.push(':style="' + escAtr(estiloJS) + '"');
  if(ctx.ocultar) estilo = (estilo ? estilo + '; ' : '') + 'display:none';

  let cab = '<' + tag;
  if(clases.length) cab += ' class="' + escAtr(clases.join(' ')) + '"';
  if(estilo) cab += ' style="' + escAtr(estilo) + '"';
  if(atrs.length) cab += ' ' + atrs.join(' ');
  if(extra.length) cab += ' ' + extra.join(' ');
  cab += '>';
  return VOID.has(tag) ? cab : cab + dentro + '</' + tag + '>';
}

function emitirBucle(n, ctx){
  const a = atr(n,'data-scfor') || '';
  const lista = (a.match(/list="([^"]*)"/)||[])[1] || '';
  const nombre = (a.match(/as="([^"]*)"/)||[])[1] || 'item';
  const js = aJS(lista.replace(/[{}]/g,'').trim(), ctx.locales);
  const hijos = hijosDe(n);
  let out = '';
  if(ctx.modo === 'estatico'){
    const arr = evalJS(js, ctx.ambito) || [];
    for(const item of arr){
      out += emitir(hijos, {...ctx,
        locales: new Set([...ctx.locales, nombre]),
        ambito: {...ctx.ambito, [nombre]: item},
        marcar: ctx.alpine, ocultar:false});
    }
  }
  if(ctx.alpine || ctx.modo === 'plantilla'){
    const idx = '_k' + Math.abs(hash(js + nombre));
    out += '<template x-for="(' + nombre + ', ' + idx + ') in ' + escAtr(js) + '" :key="' + idx + '">'
         + emitir(hijos, {...ctx, modo:'plantilla', alpine:true,
             locales:new Set([...ctx.locales, nombre]), marcar:false, ocultar:false})
         + '</template>';
  }
  return out;
}

function emitirCondicional(n, ctx){
  const a = atr(n,'data-scif') || '';
  const val = (a.match(/value="([^"]*)"/)||[])[1] || '';
  const js = aJS(val.replace(/[{}]/g,'').trim(), ctx.locales);
  const hijos = hijosDe(n).filter(h => h.nodeName !== '#text' || h.value.trim());
  const verdad = ctx.modo === 'estatico' ? !!evalJS(js, ctx.ambito) : true;
  let out = '';
  for(const h of hijos){
    if(h.nodeName === '#text'){ out += emitirNodo(h, ctx); continue; }
    let html = emitirNodo(h, {...ctx, ocultar: ctx.modo === 'estatico' && !verdad, marcar: ctx.marcar});
    if(ctx.alpine || ctx.modo === 'plantilla'){
      html = html.replace(/^<([a-z0-9-]+)/i, (m,t)=>'<' + t + ' x-show="' + escAtr(js) + '"');
    }
    out += html;
  }
  return out;
}

function emitirImagen(n, ctx){
  const bruto = atr(n,'placeholder') || 'Fotografía institucional pendiente';
  const forma = atr(n,'shape') || 'rect';
  let texto = bruto, din = '';
  if(tieneMus(bruto)){
    const p = partir(bruto, ctx.locales, ctx.ambito, ctx.modo === 'estatico');
    texto = ctx.modo === 'estatico' ? p.estatico : '';
    if(ctx.alpine || ctx.modo === 'plantilla') din = ' x-html="' + escAtr(p.js) + '"';
  }
  return '<div class="falta-dato falta-dato--imagen" data-forma="' + escAtr(forma) + '" role="img"'
    + ' aria-label="Imagen institucional pendiente">'
    + '<span class="falta-dato__sello">Falta el dato</span>'
    + '<span class="falta-dato__texto"' + din + '>' + escTxt(texto) + '</span></div>';
}

function emitirImport(n, ctx){
  const nombre = atr(n,'name');
  const comp = COMPONENTES[nombre];
  if(!comp){ aviso('Componente desconocido: ' + nombre); return ''; }
  const props = {...comp.defaults};
  for(const a of (n.attrs||[])){
    if(a.name === 'name' || a.name.startsWith('hint-')) continue;
    const clave = a.name.replace(/-([a-z])/g, (m,c)=>c.toUpperCase());
    let v = a.value;
    if(tieneMus(v)) v = evalJS(aJS(v.replace(/[{}]/g,'').trim(), ctx.locales), ctx.ambito);
    props[clave] = v;
  }
  const {vals, interactivo} = instanciar(comp.codigo, props);
  const frag = parseFragment(preparar(comp.markup));
  let html = emitir(frag.childNodes, {modo:'estatico', alpine:interactivo, locales:new Set(),
    ambito:{v:vals}, profundidad:ctx.profundidad, marcar:false, ocultar:false});
  if(interactivo){
    const xdata = comp.fabrica + '(' + JSON.stringify(props) + ')';
    if(/^\s*<[a-z0-9-]+/i.test(html)) html = html.replace(/^(\s*)<([a-z0-9-]+)/i, (m,s,t)=>s + '<' + t + ' x-data="' + escAtr(xdata) + '"');
    else html = '<div style="display:contents" x-data="' + escAtr(xdata) + '">' + html + '</div>';
  }
  return html;
}

/* ---------- 10. Compilación de una página ---------- */
const PAGINAS_JS = [];
function compilarPagina(relFuente, relSalida){
  const html = fs.readFileSync(path.join(FUENTE, relFuente),'utf8');
  const profundidad = relSalida.split('/').length - 1;
  const {codigo, propsDef} = extraerLogica(html);
  const defaults = {};
  for(const [k,val] of Object.entries(propsDef)) if(k !== '$preview') defaults[k] = val.default;
  const {vals, interactivo} = instanciar(codigo, defaults);

  const cuerpo = (html.match(/<x-dc>([\s\S]*?)<\/x-dc>/)||[])[1] || '';
  const helmet = (cuerpo.match(/<helmet>([\s\S]*?)<\/helmet>/)||[])[1] || '';
  const markup = cuerpo.replace(/<helmet>[\s\S]*?<\/helmet>/,'');
  const estilosPagina = [...helmet.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(x=>x[1]).join('\n')
    .split('\n').filter(l => !/^\s*(body|a|\*:focus-visible)\s*\{/.test(l)).join('\n').trim();

  const frag = parseFragment(preparar(markup));
  let contenido = emitir(frag.childNodes, {modo:'estatico', alpine:interactivo, locales:new Set(),
    ambito:{v:vals}, profundidad, marcar:false, ocultar:false});

  if(interactivo){
    const fab = 'dc' + relSalida.replace(/\.html$/,'').replace(/[^a-z0-9]/gi,'_');
    PAGINAS_JS.push({fabrica:fab, codigo});
    if(/^\s*<[a-z0-9-]+/i.test(contenido)) contenido = contenido.replace(/^(\s*)<([a-z0-9-]+)/i, (m,s,t)=>s+'<'+t+' x-data="'+fab+'()"');
    else contenido = '<div style="display:contents" x-data="'+fab+'()">'+contenido+'</div>';
  }

  const meta = META[relSalida] || {titulo:'Arbolado Ciudadano · SEDEMA CDMX', desc:''};
  const raiz = '../'.repeat(profundidad);
  // Logotipos construidos dentro de la lógica (React.createElement): se corrigen aquí
  contenido = contenido.replace(/(src|href)="assets\/logos\/([^"]+?)\.(png|jpg|jpeg)"/g,
    (m,a,nombre)=> a + '="' + raiz + 'assets/img/logos/' + nombre + '.svg"');
  const url = BASE_URL + (relSalida === 'index.html' ? '' : relSalida);
  const usaJS = /x-data=/.test(contenido);

  const doc = '<!DOCTYPE html>\n<html lang="es-MX">\n<head>\n'
+ '<meta charset="utf-8">\n'
+ '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
+ '<title>' + escTxt(meta.titulo) + '</title>\n'
+ '<meta name="description" content="' + escAtr(meta.desc) + '">\n'
+ '<meta name="author" content="Secretaría del Medio Ambiente de la Ciudad de México">\n'
+ '<link rel="canonical" href="' + url + '">\n'
+ '<meta property="og:type" content="website">\n'
+ '<meta property="og:site_name" content="El ABC del arbolado urbano · SEDEMA CDMX">\n'
+ '<meta property="og:title" content="' + escAtr(meta.titulo) + '">\n'
+ '<meta property="og:description" content="' + escAtr(meta.desc) + '">\n'
+ '<meta property="og:url" content="' + url + '">\n'
+ '<meta property="og:locale" content="es_MX">\n'
+ '<meta name="theme-color" content="#9D2148">\n'
+ '<link rel="icon" href="' + raiz + 'assets/img/logos/favicon.svg" type="image/svg+xml">\n'
+ '<link rel="stylesheet" href="' + raiz + 'assets/css/tokens.css">\n'
+ '<link rel="stylesheet" href="' + raiz + 'assets/css/sitio.css">\n'
+ (estilosPagina ? '<style>\n' + estilosPagina + '\n</style>\n' : '')
+ (usaJS ? '<script src="' + raiz + 'assets/js/sitio.js"></script>\n'
        + '<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.15.0/dist/cdn.min.js"></script>\n' : '')
+ '</head>\n<body>\n' + contenido + '\n</body>\n</html>\n';

  const destino = path.join(SALIDA, relSalida);
  fs.mkdirSync(path.dirname(destino), {recursive:true});
  fs.writeFileSync(destino, doc);
  return {relSalida, interactivo, bytes: doc.length};
}

/* ---------- 11. Ejecución ---------- */
cargarComponente('cabecera.html','CabeceraSitio','dcCabecera');
cargarComponente('pie.html','PieSitio','dcPie');
cargarComponente('utilidad.html','Utilidad','dcUtilidad');

const PAGINAS = [
  'index.html','hazlo.html','responsabilidades.html','emergencias.html','programas.html',
  'directorio.html','politica.html','responsabilidades/acreditate.html',
  'programas/reforestacion.html','programas/palmeras.html','programas/inventario.html','programas/viveros.html'
];
const resumen = [];
for(const p of PAGINAS){
  try { resumen.push(compilarPagina(p, p)); }
  catch(e){ console.error('FALLO ' + p + ': ' + e.stack); process.exitCode = 1; }
}

const AQUI = path.dirname(fileURLToPath(import.meta.url));
let js = fs.readFileSync(path.join(AQUI,'plantilla-sitio.js'),'utf8');
let bloques = '';
for(const c of Object.values(COMPONENTES)){
  if(!c.codigo.trim()) continue;
  bloques += '\nwindow.' + c.fabrica + ' = function(props){ return dcAdaptar(props, function(DCLogic){\n' + c.codigo + '\nreturn Component; }); };\n';
}
for(const p of PAGINAS_JS){
  bloques += '\nwindow.' + p.fabrica + ' = function(props){ return dcAdaptar(props, function(DCLogic){\n' + p.codigo + '\nreturn Component; }); };\n';
}
bloques = bloques.replace(/assets\/logos\/([\w-]+)\.(png|jpg|jpeg)/g, 'assets/img/logos/$1.svg');
bloques = bloques.replace(/["']([\w-]+)\.dc\.html/g, (m,base)=> m[0] + (RUTAS[base] || (base + '.html')));
fs.mkdirSync(path.join(SALIDA,'assets/js'),{recursive:true});
fs.writeFileSync(path.join(SALIDA,'assets/js/sitio.js'), js.replace('/*__COMPONENTES__*/', bloques));

fs.mkdirSync(path.join(SALIDA,'assets/css'),{recursive:true});
const estilosComp = Object.values(COMPONENTES).map(c=>c.estilos).join('\n')
  .split('\n').filter(l => !/^\s*(body|a|\*:focus-visible)\s*\{/.test(l)).join('\n');
fs.writeFileSync(path.join(SALIDA,'assets/css/_generado.css'),
  cssPseudo() + '\n/* Estilos propios de los componentes compartidos */\n' + estilosComp + '\n');

console.log('\n=== PAGINAS COMPILADAS ===');
for(const r of resumen) console.log('  ' + r.relSalida.padEnd(36) + String(r.bytes).padStart(7) + ' bytes  ' + (r.interactivo ? '· Alpine' : ''));
console.log('\n=== CLASES DE INTERACCION GENERADAS: ' + reglasPseudo.size + ' ===');
if(avisos.length){ console.log('\n=== AVISOS ==='); avisos.forEach(a=>console.log('  · ' + a)); }
