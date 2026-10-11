/* ==========================================================
   MÓDULO 12 · GLOSARIO CIUDADANO
   40 términos con definición, ejemplo, fundamento y vínculos.
========================================================== */

const GLOSARIO_CATEGORIAS = [
  { id:'autoridades', nombre:'Autoridades e instituciones' },
  { id:'territorio',  nombre:'Territorio y áreas' },
  { id:'tramites',    nombre:'Trámites y dictámenes' },
  { id:'tecnica',     nombre:'Términos técnicos' },
  { id:'sanciones',   nombre:'Sanciones y restitución' }
];

const GLOSARIO = [
  // ===== AUTORIDADES E INSTITUCIONES =====
  { t:'Alcaldía', cat:'autoridades',
    d:'Demarcación territorial de la Ciudad de México con autonomía política y administrativa. En materia de arbolado, es la autoridad responsable de la conservación, mantenimiento, protección y restitución del arbolado en su territorio, así como de autorizar poda, derribo o trasplante en los cuatro supuestos previstos por la ley.',
    fund:'Ley Ambiental CDMX, art. 106. Ley Orgánica de Alcaldías CDMX, art. 32 fracc. V.',
    ver:[{t:'¿A quién acudir?',h:'modulo-3-competencias.html'}] },

  { t:'DGEIRA', sigla:'Dirección General de Evaluación de Impacto y Regulación Ambiental', cat:'autoridades',
    d:'Unidad administrativa de SEDEMA facultada para resolver las solicitudes de autorización de derribo, poda o trasplante de árboles vinculadas a obras y proyectos sujetos a evaluación de impacto ambiental. La autorización sobre el arbolado queda contenida en la propia resolución en materia de impacto ambiental. Ubicada en Río de la Plata 48, primer piso, colonia Cuauhtémoc.',
    fund:'Lineamientos operativos SEDEMA.',
    ver:[{t:'Trámites',h:'modulo-8-tramites.html'}] },

  { t:'CONANP', sigla:'Comisión Nacional de Áreas Naturales Protegidas', cat:'autoridades',
    d:'Órgano desconcentrado de SEMARNAT (federal) responsable de administrar las Áreas Naturales Protegidas de jurisdicción federal en todo el país. En la Ciudad de México administra siete ANP federales: Cumbres del Ajusco, Desierto de los Leones, El Tepeyac, Fuentes Brotantes de Tlalpan, Insurgente Miguel Hidalgo y Costilla / La Marquesa, Cerro de la Estrella y Histórico Coyoacán.',
    ej:'Si un árbol está en el Desierto de los Leones, el trámite no lo resuelve SEDEMA: lo resuelve CONANP. SEDEMA solo coadyuva.',
    fund:'Ley General del Equilibrio Ecológico y la Protección al Ambiente, arts. 44-56.',
    ver:[{t:'Áreas federales',h:'modulo-3-competencias.html'}] },

  { t:'DGSANPAVA', sigla:'Dirección General del Sistema de Áreas Naturales Protegidas y Áreas de Valor Ambiental', cat:'autoridades',
    d:'Unidad administrativa de SEDEMA responsable de la administración directa de los Bosques Urbanos, Barrancas y Áreas Naturales Protegidas locales de la CDMX. Si tu árbol está en alguna de estas áreas, el trámite se hace ante DGSANPAVA, no ante la Alcaldía.',
    fund:'Reglamento Interior del Poder Ejecutivo y de la APCDMX, art. 184.',
    ver:[{t:'Listado de áreas',h:'modulo-3-competencias.html'}] },

  { t:'PAOT', sigla:'Procuraduría Ambiental y del Ordenamiento Territorial', cat:'autoridades',
    d:'Autoridad encargada de recibir y atender denuncias ambientales y de ordenamiento territorial en la CDMX. No autoriza poda ni derribo. Investiga, emite dictámenes técnicos y, en su caso, da vista a la autoridad competente para sanción administrativa o denuncia penal.',
    ej:'Si viste a alguien derribando un árbol sin permiso, denuncia en denuncia.paot.cdmx.gob.mx. Tu denuncia puede ser anónima.',
    fund:'Ley Orgánica de la PAOT, art. 5 fraccs. I y XV.',
    ver:[{t:'Denunciar',h:'https://www.paot.cdmx.gob.mx'}] },

  { t:'SEDEMA', sigla:'Secretaría del Medio Ambiente', cat:'autoridades',
    d:'Dependencia del Gobierno de la Ciudad de México responsable de la política ambiental local. Emite normas, acredita podadores y dictaminadores, administra Bosques Urbanos y ANP locales, y autoriza intervenciones al arbolado en proyectos sujetos a evaluación de impacto ambiental.',
    fund:'Ley Ambiental CDMX, arts. 6 y 9. Reglamento Interior del Poder Ejecutivo y de la APCDMX, art. 184.',
    ver:[{t:'Mapa de competencias',h:'modulo-3-competencias.html'}] },

  { t:'SOBSE', sigla:'Secretaría de Obras y Servicios', cat:'autoridades',
    d:'Dependencia del Gobierno de la Ciudad de México responsable de prestar servicios públicos de mantenimiento en la red vial primaria. Ejecuta poda y derribo en vialidades primarias, pero la <strong>autorización ambiental</strong> sigue siendo competencia de SEDEMA.',
    ej:'Un árbol en Eje Central, Periférico o Insurgentes lo mantiene SOBSE; pero el permiso para derribarlo lo da SEDEMA.',
    fund:'Ley Orgánica del Poder Ejecutivo y de la APCDMX, art. 38 fracc. I.',
    ver:[] },

  // ===== TERRITORIO Y ÁREAS =====
  { t:'ANP', sigla:'Área Natural Protegida', cat:'territorio',
    d:'Zona del territorio establecida por decreto para preservar ecosistemas, biodiversidad y servicios ambientales. Pueden ser <strong>federales</strong> (administradas por CONANP) o <strong>locales</strong> (administradas por SEDEMA-DGSANPAVA). La CDMX tiene 18 ANP locales y 7 federales en su territorio.',
    fund:'Ley Ambiental CDMX, arts. 126 y 127. Ley General del Equilibrio Ecológico, arts. 44-56.',
    ver:[{t:'Listado de ANP',h:'modulo-3-competencias.html'}] },

  { t:'Área verde', cat:'territorio',
    d:'Superficie cubierta de vegetación, natural o inducida, ubicada en suelo urbano o de conservación. Toda área verde debe incrementar o conservar su extensión; si se afecta por obra pública o privada, debe compensarse con superficie igual o mayor, privilegiando especies nativas o naturalizadas.',
    fund:'Ley Ambiental CDMX, arts. 104 y 105.',
    ver:[] },

  { t:'AVA', sigla:'Área de Valor Ambiental', cat:'territorio',
    d:'Bosques urbanos, barrancas y cuerpos de agua de competencia de la CDMX, en suelo urbano o de conservación, donde los ambientes originales han sido modificados por actividades humanas pero conservan características biofísicas y escénicas que contribuyen a la calidad ambiental de la Ciudad.',
    ej:'El Bosque de Chapultepec, la Barranca de Tarango y el Canal Nacional son AVA. Su régimen de protección es más estricto que el del arbolado urbano común.',
    fund:'Ley Ambiental CDMX, arts. 4 fracc. VI, 116 y 117.',
    ver:[{t:'Listado de AVA',h:'modulo-3-competencias.html'}] },

  { t:'Barranca', cat:'territorio',
    d:'Área de Valor Ambiental con función reguladora del balance hídrico de la Ciudad. Contribuye a mantener la calidad ambiental, conservar biodiversidad y prevenir inundaciones. Cuenta con programa de manejo y, en su caso, con Consejo Intersectorial para su gestión.',
    fund:'Ley Ambiental CDMX, arts. 116 fracc. III, 120 y 125.',
    ver:[] },

  { t:'Bosque urbano', cat:'territorio',
    d:'Área de Valor Ambiental en suelo urbano donde predominan especies de flora arbórea y arbustiva. Se distingue por su valor ambiental, estético, científico, educativo, recreativo, histórico o turístico. La CDMX tiene 15 bosques urbanos formalmente reconocidos.',
    ej:'Bosque de Chapultepec, Bosque de San Juan de Aragón, Bosque de Nativitas, Parque Cuitláhuac.',
    fund:'Ley Ambiental CDMX, arts. 116 fracc. I y 117.',
    ver:[{t:'Listado de bosques',h:'modulo-3-competencias.html'}] },

  { t:'Suelo de conservación', cat:'territorio',
    d:'Territorio clasificado por los programas de desarrollo urbano y ordenamiento ecológico que comprende las áreas fuera de los límites del centro de población. En la CDMX equivale a más del 50% del territorio y provee servicios ambientales fundamentales: recarga del acuífero, captura de carbono, hábitat de biodiversidad.',
    fund:'NADF-001-RNAT-2015, definiciones. Ley Ambiental CDMX, art. 4 fracc. LXII.',
    ver:[] },

  { t:'Suelo urbano', cat:'territorio',
    d:'Zona del territorio clasificada como tal por el Programa General de Ordenamiento, por contar con infraestructura, equipamiento y servicios, salvo los cascos urbanos de poblados rurales. Es donde se concentra la mayoría del arbolado urbano competencia de Alcaldías.',
    fund:'NADF-001-RNAT-2015, definiciones.',
    ver:[] },

  { t:'Vialidad primaria', cat:'territorio',
    d:'Red vial principal de la Ciudad: ejes viales, avenidas principales, periféricos y calzadas. El mantenimiento de su arbolado lo ejecuta SOBSE; la autorización ambiental sigue siendo de SEDEMA.',
    ej:'Insurgentes, Reforma, Eje Central, Periférico, Calzada de Tlalpan, Viaducto.',
    fund:'Ley Orgánica del Poder Ejecutivo CDMX, art. 38 fracc. I.',
    ver:[] },

  { t:'Vialidad secundaria', cat:'territorio',
    d:'Calles locales, colonias y fraccionamientos. El arbolado en estas vías es competencia territorial de la Alcaldía, tanto para mantenimiento como para autorizar intervenciones.',
    fund:'Ley Ambiental CDMX, art. 106.',
    ver:[] },

  // ===== TRÁMITES Y DICTÁMENES =====
  { t:'Acreditación', cat:'tramites',
    d:'Documento oficial emitido por SEDEMA que autoriza a una persona física a realizar trabajos de poda, derribo, trasplante o dictamen técnico de arbolado. Es <strong>única, personal e intransferible</strong>. Debe contener fotografía, huella digital, número de folio, fecha de expedición, vigencia y firma del titular de la Secretaría.',
    ej:'Si una credencial presenta tachaduras o enmendaduras, no es válida.',
    fund:'NADF-001-RNAT-2015, numerales 5.5 y 5.7.',
    ver:[{t:'Verifica al podador',h:'modulo-3-competencias.html#verificador'}] },

  { t:'Autorización', cat:'tramites',
    d:'Acto administrativo emitido por la autoridad competente (Alcaldía o SEDEMA según el caso) que permite ejecutar poda, derribo o trasplante de un árbol específico. Debe estar sustentada en un dictamen técnico. La Alcaldía debe emitirla en plazo no mayor a 20 días hábiles.',
    fund:'Ley Ambiental CDMX, arts. 106 y 108.',
    ver:[{t:'Trámites',h:'modulo-8-tramites.html'}] },

  { t:'Dictamen técnico', cat:'tramites',
    d:'Documento de validez jurídica y administrativa sustentado en elementos científicos y técnicos, elaborado por un dictaminador acreditado por SEDEMA, que determina las condiciones de un árbol y justifica si procede la poda, derribo o trasplante. Sin dictamen técnico válido, la autorización no procede.',
    fund:'NADF-001-RNAT-2015, numerales 4 y 5.3.',
    ver:[] },

  { t:'Dictaminador', cat:'tramites',
    d:'Persona acreditada por SEDEMA para elaborar dictámenes técnicos o diagnósticos en materia de arbolado. Debe tener licenciatura en Biología, Ingeniería Forestal, Agronomía o carrera afín, dos años de experiencia comprobable y haber aprobado el curso oficial. Distinto del podador.',
    fund:'NADF-001-RNAT-2015, numeral 5.4.',
    ver:[{t:'Verifica al dictaminador',h:'modulo-3-competencias.html#verificador'}] },

  { t:'EIA', sigla:'Evaluación de Impacto Ambiental', cat:'tramites',
    d:'Procedimiento mediante el cual SEDEMA evalúa los efectos ambientales de obras o actividades. Se inicia con la presentación de un estudio en alguna de sus modalidades (manifestación específica, general, informe preventivo, estudio de riesgo) y concluye con la resolución de la Secretaría.',
    fund:'Ley Ambiental CDMX, art. 23 y siguientes.',
    ver:[] },

  { t:'MIA', sigla:'Manifestación de Impacto Ambiental', cat:'tramites',
    d:'Documento técnico que describe los impactos ambientales de un proyecto y las medidas de prevención, mitigación y compensación propuestas. Modalidades: <strong>específica</strong> (proyectos de mayor impacto, incluida obra en AVA, ANP y suelo de conservación) y <strong>general</strong> (proyectos de menor envergadura).',
    fund:'Ley Ambiental CDMX, arts. 23 y 28.',
    ver:[] },

  { t:'Podador', cat:'tramites',
    d:'Persona física acreditada por SEDEMA para ejecutar trabajos de poda, derribo y trasplante de árboles. Su acreditación es única, personal e intransferible. Distinto del dictaminador: el podador ejecuta, el dictaminador evalúa.',
    fund:'NADF-001-RNAT-2015, numeral 4.',
    ver:[] },

  // ===== TÉRMINOS TÉCNICOS =====
  { t:'Aclareo de copa', cat:'tecnica',
    d:'Método de poda que consiste en la remoción selectiva de ramas para permitir el paso de luz y movimiento del aire, disminuyendo follaje y reduciendo peso de ramas grandes sin alterar la estructura natural del árbol. <strong>No</strong> debe crear el efecto "cola de león" (follaje solo en las puntas), por riesgo de desgajamiento.',
    fund:'NADF-001-RNAT-2015, numeral 6.4.2.1.3.',
    ver:[] },

  { t:'Anillado', cat:'tecnica',
    d:'Práctica <strong>prohibida</strong> que consiste en cortar la corteza alrededor del tronco para interrumpir la circulación de savia y provocar la muerte lenta del árbol. La ley equipara al derribo cualquier acto que provoque la muerte del árbol.',
    ej:'Si detectas anillado en un árbol, repórtalo a PAOT. La sanción puede ser administrativa y penal.',
    fund:'Ley Ambiental CDMX, art. 109 párrafo final. NADF-001-RNAT-2015, numeral 5.10.7.',
    ver:[{t:'Denunciar',h:'https://www.paot.cdmx.gob.mx'}] },

  { t:'Cinchamiento', cat:'tecnica',
    d:'Práctica <strong>prohibida</strong> que consiste en apretar el tronco con cuerdas, cables o ataduras que estrangulan al árbol e interrumpen su crecimiento normal. Equiparado al derribo cuando provoca la muerte del ejemplar.',
    fund:'NADF-001-RNAT-2015, numeral 5.10.7.',
    ver:[] },

  { t:'Derribo', cat:'tecnica',
    d:'Corte de un árbol desde la base, vivo o muerto. La ley equipara al derribo <em>cualquier acto que provoque su muerte</em>: anillado, cinchamiento, descortezado, vertimiento de sustancias tóxicas, ahogamiento por concreto o asfalto o desmoche severo. Solo procede en cuatro supuestos taxativos y siempre con autorización previa.',
    fund:'Ley Ambiental CDMX, art. 109. NADF-001-RNAT-2015, definiciones.',
    ver:[] },

  { t:'Desmoche', cat:'tecnica',
    d:'Corte indiscriminado de una o varias ramas primarias o secundarias dejando muñones o eliminando la copa. Es una práctica <strong>prohibida</strong> porque genera retoños vigorosos pero estructuralmente débiles, aumenta los ciclos de poda y el costo de mantenimiento, y compromete la salud del árbol.',
    fund:'NADF-001-RNAT-2015, definiciones y numeral 5.10.7.',
    ver:[] },

  { t:'Elevación de copa', cat:'tecnica',
    d:'Método de poda que elimina ramas bajas para facilitar el paso de peatones y vehículos, dar visibilidad a señales de tránsito y permitir luz a plantas inferiores. Altura mínima: <strong>2.40 m</strong> en espacios públicos y peatonales; hasta 3.60 m en vialidades vehiculares; hasta 4.80 m en vialidades primarias.',
    fund:'NADF-001-RNAT-2015, numeral 6.4.2.1.4.',
    ver:[] },

  { t:'Esquilmo', cat:'tecnica',
    d:'Residuos vegetales resultantes de los trabajos de poda, derribo o trasplante: ramas, follaje, troncos. Deben retirarse dentro de las <strong>24 horas</strong> siguientes a los trabajos. Pueden destinarse a triturado para acolchado (mulch) o composta.',
    ej:'El personal que solo recolecta esquilmos y hace limpieza queda exento de acreditación; pero quien ejecuta y supervisa los cortes <em>siempre</em> debe estar acreditado.',
    fund:'NADF-001-RNAT-2015, numerales 5.6 y 11.',
    ver:[] },

  { t:'Limpieza de copa', cat:'tecnica',
    d:'Método de poda limitado a la remoción de ramas muertas, declinantes, plagadas o débilmente unidas, así como liberar el árbol de plantas parásitas, epífitas y objetos ajenos (alambres, cables, anuncios, reflectores). Es el método más conservador y el indicado para palmas maduras.',
    fund:'NADF-001-RNAT-2015, numeral 6.4.2.1.1.',
    ver:[] },

  { t:'Poda', cat:'tecnica',
    d:'Eliminación selectiva de ramas, raíces, follaje o partes del árbol para mejorar su estructura, condición sanitaria o evitar interferencias. Métodos permitidos: limpieza, restauración, aclareo, elevación, reducción de copa, poda bajo cableado eléctrico y poda de raíces. Una poda mayor al 25% sin justificación técnica es <strong>infracción</strong>.',
    fund:'NADF-001-RNAT-2015, numeral 6 y 5.10.7.',
    ver:[] },

  { t:'Poda de raíces', cat:'tecnica',
    d:'Eliminación parcial de raíces solo en árboles cuyas raíces causen afectación grave y comprobable a infraestructura subterránea (cisternas, tuberías, drenaje, cableado). Antes de podar raíces, deben considerarse alternativas: ampliar cajete, elevar banqueta, renivelar guarnición.',
    fund:'NADF-001-RNAT-2015, numerales 6.4.5 y 7.1.3.',
    ver:[] },

  { t:'Reducción de copa', cat:'tecnica',
    d:'Método de poda aplicado en árboles altos: se despuntan una o más ramas principales hasta una rama lateral con al menos un tercio del grosor de la rama principal. Debe lograrse la altura deseada sin perder la forma característica de la especie.',
    fund:'NADF-001-RNAT-2015, numeral 6.4.2.1.5.',
    ver:[] },

  { t:'Trasplante', cat:'tecnica',
    d:'Extracción del árbol del sitio donde se encuentra y plantación en otro lugar. Se prefiere en ejemplares jóvenes y vigorosos para minimizar daños. Debe ejecutarse máximo <strong>48 horas</strong> después del banqueo y conforme a la NADF-006-RNAT-2012.',
    fund:'NADF-001-RNAT-2015, numerales 7.1.4 y 8.5.2.',
    ver:[] },

  // ===== SANCIONES Y RESTITUCIÓN =====
  { t:'Compensación ambiental', cat:'sanciones',
    d:'Inversión o acciones que el responsable hace a su cargo para generar una mejora ambiental sustitutiva de la reparación del daño, equivalente a los efectos adversos ocasionados. Es preferentemente <strong>física</strong>; si es técnica o materialmente imposible, es económica. Debe realizarse en el mismo ecosistema o región donde se causó el daño.',
    fund:'Ley Ambiental CDMX, art. 318.',
    ver:[] },

  { t:'Daños punitivos', cat:'sanciones',
    d:'Sanción aplicable a personas morales (empresas) por daño ambiental. Se reduce a una tercera parte cuando la empresa acredita controles organizacionales activos al menos tres años antes de la conducta dañosa: órgano de control interno, sistema de gestión ambiental, capacitación, seguro de responsabilidad, código de conducta y otros.',
    fund:'Ley Ambiental CDMX, art. 325.',
    ver:[] },

  { t:'Fondo Ambiental Público', cat:'sanciones',
    d:'Instrumento financiero al que ingresan los recursos por compensación económica derivada de derribos. Sus recursos se destinan <strong>exclusivamente</strong> a producción de planta en viveros, plantación, fomento, mejoramiento y mantenimiento de áreas verdes en la CDMX.',
    ej:'Una constructora que derribó árboles por obra puede aportar al Fondo cuando la restitución física no es viable.',
    fund:'NADF-001-RNAT-2015, numeral 9.2. Ley Ambiental CDMX, capítulo del Fondo.',
    ver:[] },

  { t:'Restitución', cat:'sanciones',
    d:'Obligación de quien derriba un árbol de compensarlo. Tres modalidades: <strong>física</strong> (plantar árboles sustitutos), <strong>económica</strong> (aportar al Fondo Ambiental Público) o <strong>equivalente</strong> (suministro de planta, especies ornamentales o rehabilitación). El número va de 2 hasta 16 árboles según el puntaje del ejemplar derribado.',
    fund:'Ley Ambiental CDMX, art. 109. NADF-001-RNAT-2015, numeral 9 y Tablas 2-4.',
    ver:[] },

  { t:'Restitución máxima', cat:'sanciones',
    d:'Sanción agravada para quien derribe arbolado sin autorización previa o incumpla los términos de la autorización. Obliga a compensar con el número de árboles <strong>más alto</strong> previsto en la tabla (16 árboles, puntaje 25-28) por cada árbol derribado, además de las sanciones administrativas y penales aplicables.',
    fund:'Ley Ambiental CDMX, art. 109 párrafo 3 y art. 34.',
    ver:[] },

  { t:'UMA', sigla:'Unidad de Medida y Actualización', cat:'sanciones',
    d:'Referencia económica para determinar montos de sanciones, multas y otros conceptos previstos en leyes federales y locales. Es actualizada anualmente por INEGI cada 1 de febrero. El Código Penal CDMX expresa las multas por delitos ambientales en UMA.',
    fund:'Constitución Política de los Estados Unidos Mexicanos, art. 26. Código Penal CDMX, arts. 343-350.',
    ver:[] },

  { t:'UCDMX', sigla:'Unidad de Cuenta de la Ciudad de México', cat:'sanciones',
    d:'Referencia económica para determinar montos en trámites y restitución previstos en la normatividad local de la Ciudad de México. La NADF-001-RNAT-2015 expresa los montos de restitución económica en UCDMX (rango: 230 a 3,681 UCDMX por árbol).',
    fund:'NADF-001-RNAT-2015, definiciones y Tabla 4.',
    ver:[] }
];

/* ============ RENDERIZADO ============ */
function renderGlosario(){
  const cont = document.getElementById('glosario-contenedor');
  if(!cont) return;

  // Conteo por categoría
  const conteoCat = {};
  GLOSARIO_CATEGORIAS.forEach(c => conteoCat[c.id] = GLOSARIO.filter(g => g.cat === c.id).length);

  // Filtros por categoría
  const catCont = document.getElementById('glosario-categorias');
  if(catCont){
    catCont.innerHTML = '<button class="glosario-categoria activa" data-cat="todas">Todas <span class="contador-cat">' + GLOSARIO.length + '</span></button>' +
      GLOSARIO_CATEGORIAS.map(c => '<button class="glosario-categoria" data-cat="' + c.id + '">' + c.nombre + ' <span class="contador-cat">' + conteoCat[c.id] + '</span></button>').join('');
  }

  // Alfabeto
  const letrasUsadas = [...new Set(GLOSARIO.map(g => g.t.charAt(0).toUpperCase()))].sort();
  const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const alfCont = document.getElementById('glosario-alfabeto');
  if(alfCont){
    alfCont.innerHTML = '<a href="#" class="glosario-letra todas" data-letra="todas">TODAS</a>' +
      alfabeto.map(l => {
        const disabled = letrasUsadas.includes(l) ? '' : ' disabled';
        return '<a href="#grupo-' + l + '" class="glosario-letra' + disabled + '" data-letra="' + l + '">' + l + '</a>';
      }).join('');
  }

  // Agrupar términos por letra
  const grupos = {};
  GLOSARIO.forEach(g => {
    const letra = g.t.charAt(0).toUpperCase();
    if(!grupos[letra]) grupos[letra] = [];
    grupos[letra].push(g);
  });

  // Ordenar dentro de cada grupo
  Object.keys(grupos).forEach(l => grupos[l].sort((a,b) => a.t.localeCompare(b.t,'es')));

  // Render
  let html = '';
  Object.keys(grupos).sort().forEach(letra => {
    html += '<section class="glosario-grupo" id="grupo-' + letra + '" data-letra="' + letra + '">';
    html += '<h3 class="glosario-grupo-letra">' + letra + '</h3>';
    grupos[letra].forEach(g => {
      const catNombre = (GLOSARIO_CATEGORIAS.find(c => c.id === g.cat) || {}).nombre || '';
      const siglaHTML = g.sigla ? '<span class="sigla">' + g.sigla + '</span>' : '';
      const ejemploHTML = g.ej ? '<div class="ejemplo"><strong>Ejemplo</strong>' + g.ej + '</div>' : '';
      const fundHTML = g.fund ? '<div class="fundamento"><strong>FUNDAMENTO ·</strong> ' + g.fund + '</div>' : '';
      const verHTML = g.ver && g.ver.length
        ? '<div class="ver-tambien"><span class="label">Ver también:</span>' + g.ver.map(v => '<a href="' + v.h + '">' + v.t + '</a>').join('') + '</div>'
        : '';
      html += '<article class="termino" data-termino="' + g.t.toLowerCase() + '" data-cat="' + g.cat + '" data-sigla="' + (g.sigla||'').toLowerCase() + '" data-def="' + g.d.replace(/<[^>]+>/g,'').toLowerCase().replace(/"/g,'&quot;') + '">' +
        '<div class="encabezado">' +
          '<h4>' + g.t + '</h4>' + siglaHTML +
          '<span class="categoria-badge">' + catNombre + '</span>' +
        '</div>' +
        '<p class="definicion">' + g.d + '</p>' +
        ejemploHTML +
        fundHTML +
        verHTML +
      '</article>';
    });
    html += '</section>';
  });
  cont.innerHTML = html;

  // Listeners
  document.querySelectorAll('.glosario-categoria').forEach(b => {
    b.addEventListener('click', () => filtrarPorCategoria(b.dataset.cat, b));
  });
  document.querySelectorAll('.glosario-letra').forEach(l => {
    l.addEventListener('click', e => {
      if(l.dataset.letra === 'todas'){
        e.preventDefault();
        restablecerGlosario();
      } else {
        document.querySelectorAll('.glosario-letra').forEach(x => x.classList.remove('activa'));
        l.classList.add('activa');
      }
    });
  });
  const input = document.getElementById('glosario-busqueda');
  if(input) input.addEventListener('input', buscarGlosario);
}

function restablecerGlosario(){
  document.querySelectorAll('.glosario-letra').forEach(x => x.classList.remove('activa'));
  const todas = document.querySelector('.glosario-letra.todas');
  if(todas) todas.classList.add('activa');
  document.querySelectorAll('.glosario-categoria').forEach(x => x.classList.remove('activa'));
  const catTodas = document.querySelector('.glosario-categoria[data-cat="todas"]');
  if(catTodas) catTodas.classList.add('activa');
  document.querySelectorAll('.glosario-grupo').forEach(g => g.style.display = '');
  document.querySelectorAll('.termino').forEach(t => t.classList.remove('oculto'));
  const input = document.getElementById('glosario-busqueda');
  if(input) input.value = '';
  const contador = document.getElementById('glosario-contador');
  if(contador) contador.className = 'glosario-contador';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filtrarPorCategoria(cat, btnActivo){
  document.querySelectorAll('.glosario-categoria').forEach(b => b.classList.remove('activa'));
  if(btnActivo) btnActivo.classList.add('activa');
  document.querySelectorAll('.glosario-letra').forEach(x => x.classList.remove('activa'));
  document.querySelector('.glosario-letra.todas').classList.add('activa');

  const input = document.getElementById('glosario-busqueda');
  if(input) input.value = '';
  const contador = document.getElementById('glosario-contador');

  if(cat === 'todas'){
    document.querySelectorAll('.termino').forEach(t => t.classList.remove('oculto'));
  } else {
    document.querySelectorAll('.termino').forEach(t => {
      if(t.dataset.cat === cat) t.classList.remove('oculto');
      else t.classList.add('oculto');
    });
  }

  // Ocultar grupos sin términos visibles
  document.querySelectorAll('.glosario-grupo').forEach(g => {
    const visibles = g.querySelectorAll('.termino:not(.oculto)').length;
    g.style.display = visibles ? '' : 'none';
  });

  if(contador){
    const visibles = document.querySelectorAll('.termino:not(.oculto)').length;
    if(cat === 'todas'){
      contador.className = 'glosario-contador';
    } else {
      contador.className = 'glosario-contador visible';
      contador.innerHTML = '<strong>' + visibles + '</strong> ' + (visibles === 1 ? 'término' : 'términos') + ' en esta categoría.';
    }
  }
}

function buscarGlosario(){
  const input = document.getElementById('glosario-busqueda');
  const contador = document.getElementById('glosario-contador');
  const q = input.value.trim().toLowerCase();

  // Reset filtros
  document.querySelectorAll('.glosario-categoria').forEach(b => b.classList.remove('activa'));
  document.querySelector('.glosario-categoria[data-cat="todas"]').classList.add('activa');
  document.querySelectorAll('.glosario-letra').forEach(x => x.classList.remove('activa'));
  document.querySelector('.glosario-letra.todas').classList.add('activa');

  if(!q){
    document.querySelectorAll('.termino').forEach(t => t.classList.remove('oculto'));
    document.querySelectorAll('.glosario-grupo').forEach(g => g.style.display = '');
    contador.className = 'glosario-contador';
    return;
  }

  let match = 0;
  document.querySelectorAll('.termino').forEach(t => {
    const haystack = t.dataset.termino + ' ' + t.dataset.sigla + ' ' + t.dataset.def;
    if(haystack.includes(q)){
      t.classList.remove('oculto');
      match++;
    } else {
      t.classList.add('oculto');
    }
  });

  document.querySelectorAll('.glosario-grupo').forEach(g => {
    const visibles = g.querySelectorAll('.termino:not(.oculto)').length;
    g.style.display = visibles ? '' : 'none';
  });

  if(match === 0){
    contador.className = 'glosario-contador visible sin-resultados';
    contador.innerHTML = '<strong>Sin resultados para "' + q + '".</strong> Prueba con otra palabra clave o llama a SEDEMATEL 55 5278 9931.';
  } else {
    contador.className = 'glosario-contador visible';
    contador.innerHTML = '<strong>' + match + '</strong> ' + (match === 1 ? 'término encontrado' : 'términos encontrados') + ' para "' + q + '".';
  }
}

function limpiarBusquedaGlosario(){ restablecerGlosario(); }

document.addEventListener('DOMContentLoaded', renderGlosario);
