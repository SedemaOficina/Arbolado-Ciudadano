/* ==========================================================
   MÓDULO 8 · CATÁLOGO DE TRÁMITES (6 fichas estandarizadas)
========================================================== */

const TRAMITES = [

  {
    id: 1,
    clave: 'SEDEMA-AUT-POD',
    tipo: 'autorizacion',
    nombre: 'Autorización para <em>poda</em> de árbol',
    descripcion: 'Permiso administrativo emitido por la Alcaldía para realizar poda de uno o más árboles ubicados en bien de dominio público o en propiedad particular, conforme a los supuestos legales aplicables.',
    autoridad: 'Alcaldía territorial',
    plazo: '≤ 20 días hábiles',
    costo: 'Sin costo administrativo · El dictamen privado tiene costo libre. Implica pago de derechos cuando la solicitud está asociada a un trámite de impacto ambiental.',
    vigencia: 'Indicada en la autorización (típicamente 20 días para ejecutar)',
    requisitos: [
      'Solicitud por escrito con datos completos del solicitante (nombre, domicilio, contacto)',
      'Ubicación precisa del árbol (calle, número, colonia, alcaldía) y, de ser posible, georreferencia',
      'Dictamen técnico de arbolado (Anexo 1 individual o Anexo 2 grupal de la NADF-001-RNAT-2015), firmado por dictaminador acreditado por SEDEMA, con número de folio y vigencia',
      'Archivo fotográfico del o los árboles objeto de la solicitud',
      'Justificación documentada del supuesto legal aplicable (saneamiento, interferencia con infraestructura, riesgo, mantenimiento)',
      'Identificación oficial del solicitante (INE, pasaporte o equivalente)',
      '<strong>En obras:</strong> dentro del trámite en materia de impacto ambiental aplicable de acuerdo con las características de la obra a la que esté asociada la solicitud ante SEDEMA',
    ],
    formato: '[object Object]',
    fundamento: 'Ley Ambiental CDMX, art. 106. NADF-001-RNAT-2015, numerales 5.2, 5.3, 5.4, 6.1.8 y Anexos 1 y 2. Ley Orgánica de Alcaldías CDMX, art. 32 fracc. V.',
  },

  {
    id: 2,
    clave: 'SEDEMA-AUT-DER',
    tipo: 'autorizacion',
    nombre: 'Autorización para <em>derribo</em> de árbol',
    descripcion: 'Permiso administrativo emitido por la Alcaldía o por SEDEMA (según el caso) para retirar definitivamente uno o más árboles. Solo procede en cuatro supuestos taxativos: riesgo a personas o bienes, riesgo al patrimonio urbanístico, saneamiento o afectación significativa a infraestructura.',
    autoridad: 'Alcaldía o SEDEMA según supuesto',
    plazo: '≤ 20 días hábiles',
    costo: 'Sin costo administrativo · Restitución obligatoria (2 a 16 árboles o equivalente económico). Implica pago de derechos cuando la solicitud está asociada a un trámite de impacto ambiental.',
    vigencia: '≤ 20 días hábiles para ejecutar tras emitida la autorización',
    requisitos: [
      'Solicitud por escrito con datos del solicitante e identificación oficial',
      'Ubicación precisa del o los árboles',
      'Dictamen técnico individual o grupal con valoración del Anexo 3 de la NADF-001 (puntaje 7-28)',
      'Archivo fotográfico que evidencie el estado del árbol y el supuesto invocado',
      'Justificación técnica del supuesto legal aplicable y de la imposibilidad de mitigar el riesgo por medios alternativos (poda controlada, apuntalamiento, trasplante)',
      '<strong>En obras:</strong> dentro del trámite en materia de impacto ambiental aplicable de acuerdo con las características de la obra a la que esté asociada la solicitud ante SEDEMA',
      'Propuesta de restitución física, económica o equivalente conforme a Tablas 2, 3 y 4 de la NADF-001, y requisitos o información adicional que solicite la autoridad',
    ],
    formato: '[object Object]',
    fundamento: 'Ley Ambiental CDMX, arts. 106 y 109. NADF-001-RNAT-2015, numerales 5.3, 7 y 9, Tablas 2, 3 y 4. Ley Orgánica de Alcaldías CDMX, art. 32 fracc. V.',
  },

  {
    id: 3,
    clave: 'SEDEMA-AUT-TRA',
    tipo: 'autorizacion',
    nombre: 'Autorización para <em>trasplante</em> de árbol',
    descripcion: 'Permiso para extraer un árbol del sitio actual y plantarlo en otro lugar. SEDEMA y las Alcaldías privilegian el trasplante sobre el derribo cuando el ejemplar tiene viabilidad física y fitosanitaria.',
    autoridad: 'Alcaldía o SEDEMA según supuesto',
    plazo: '≤ 20 días hábiles',
    costo: 'Sin costo administrativo · El costo técnico de banqueo, traslado y plantación corre por cuenta del solicitante. Implica pago de derechos cuando la solicitud está asociada a un trámite de impacto ambiental.',
    vigencia: 'Indicada en la autorización · Banqueo a plantación: máximo 48 horas',
    requisitos: [
      'Solicitud por escrito con datos del solicitante',
      'Ubicación de origen y sitio destino propuesto',
      'Dictamen técnico de viabilidad del trasplante (especie, edad, vigor, estado fitosanitario)',
      'Evaluación del sitio destino: condiciones de suelo, espacio, riego e infraestructura subterránea',
      'Plan de mantenimiento post-trasplante (mínimo dos años conforme a la Tabla 4 de la NADF-001 cuando aplica)',
      '<strong>En obras:</strong> dentro del trámite en materia de impacto ambiental aplicable de acuerdo con las características de la obra a la que esté asociada la solicitud ante SEDEMA',
    ],
    formato: '[object Object]',
    fundamento: 'Ley Ambiental CDMX, art. 106. NADF-001-RNAT-2015, numerales 7.1.4, 8 y 9. NADF-006-RNAT-2012 (especies y plantación).',
  },

  {
    id: 4,
    clave: 'SEDEMA-ACR-DIC',
    tipo: 'acreditacion',
    nombre: 'Acreditación de <em>dictaminador</em> técnico de arbolado',
    descripcion: 'Documento oficial emitido por SEDEMA que faculta a una persona física a elaborar dictámenes técnicos de arbolado en la Ciudad de México. Es la base de todo el sistema de autorizaciones: sin dictaminador acreditado no hay dictamen válido.',
    autoridad: 'SEDEMA · DGSANPAVA',
    plazo: 'Sujeto a calendario del curso oficial',
    costo: 'Conforme al Código Fiscal CDMX (derechos por curso y emisión de credencial)',
    vigencia: 'Indicada en la credencial · Renovación conforme a lineamientos SEDEMA',
    requisitos: [
      '<strong>Perfil académico:</strong> licenciatura en Biología, Ingeniería Forestal, Ingeniería Agrónoma o carrera afín. Con carta de pasante, carrera técnica o disciplina afín, requiere experiencia laboral en manejo de arbolado de al menos 5 años',
      '<strong>Experiencia laboral comprobable:</strong> mínimo 2 años en manejo de arbolado para profesionistas titulados; 5 años para pasantes',
      '<strong>Acreditación previa:</strong> contar con acreditación vigente para supervisión y ejecución de trabajos de poda, derribo, trasplante y restitución expedida por SEDEMA',
      '<strong>Curso oficial:</strong> aprobar el curso de dictaminador impartido por SEDEMA',
      'Identificación oficial vigente',
      'Comprobante de domicilio',
      'Documentación que acredite el perfil académico y la experiencia',
      'Fotografías recientes para credencial',
    ],
    formato: '[object Object]',
    fundamento: 'Ley Ambiental CDMX, art. 111 párrafo 2. NADF-001-RNAT-2015, numerales 5.1, 5.4 y 5.5.',
  },

  {
    id: 5,
    clave: 'SEDEMA-ACR-POD',
    tipo: 'acreditacion',
    nombre: 'Acreditación para <em>poda, derribo, trasplante y restitución</em>',
    descripcion: 'Documento oficial emitido por SEDEMA que faculta a una persona física a ejecutar y supervisar trabajos de poda, derribo, trasplante y restitución de árboles en la CDMX. Es prerrequisito para acceder a la acreditación de dictaminador.',
    autoridad: 'SEDEMA · Dirección General competente',
    plazo: 'Sujeto a calendario del curso oficial',
    costo: 'Conforme al Código Fiscal CDMX',
    vigencia: 'Indicada en la credencial · Renovación periódica',
    requisitos: [
      '<strong>Curso oficial</strong> impartido por SEDEMA con módulos teóricos y prácticos sobre técnicas de poda, derribo, trasplante, manejo de equipo y seguridad',
      '<strong>Examen práctico de ejecución</strong> con evaluación de uso de equipo de protección personal, herramientas de corte y técnicas correctas',
      'Identificación oficial, comprobante de domicilio y fotografías',
      'Constancia médica de aptitud física para labores de altura cuando el rol incluya trepa',
    ],
    formato: '[object Object]',
    fundamento: 'Ley Ambiental CDMX, art. 111. NADF-001-RNAT-2015, numerales 5.1, 5.5, 5.6, 5.7 y 5.9.',
  },

  {
    id: 6,
    clave: 'SEDEMA-EIA',
    tipo: 'impacto',
    nombre: 'Evaluación de <em>Impacto Ambiental</em> con afectación al arbolado',
    descripcion: 'Procedimiento integral para proyectos de obra pública o privada que requieran intervenir el arbolado urbano. Se presenta ante SEDEMA en alguna de las modalidades del artículo 23 de la Ley Ambiental. La autorización determina el alcance de las intervenciones (derribo, trasplante, poda) y la restitución obligatoria.',
    autoridad: 'SEDEMA · DGEIRA',
    plazo: '15 días hábiles tras información completa · Hasta 5 días adicionales para requerimientos',
    costo: 'Conforme al Código Fiscal CDMX (derechos por modalidad)',
    vigencia: 'Referida a la obra o actividad de que se trate',
    requisitos: [
      'Estudio de Impacto Ambiental en la modalidad procedente: <strong>Evaluación Ambiental Estratégica, Manifestación de Impacto Ambiental Específica, Manifestación de Impacto Ambiental General, Informe Preventivo, Estudio de Riesgo Ambiental o Declaratoria de Cumplimiento Ambiental</strong>',
      'Dictamen técnico de arbolado del predio elaborado por dictaminador acreditado, con identificación individual y valoración Anexo 3 de cada ejemplar',
      'Plan de manejo del arbolado: clasificación de ejemplares en derribar, trasplantar o conservar; propuesta de restitución física, económica o equivalente',
      'En su caso, Proceso de Consulta Vecinal para Grandes Construcciones validado por SEDEMA',
      'Opinión de uso de suelo positiva (cuando aplique en ANP, AVA o suelo de conservación)',
      'Documentación legal del promovente, del representante legal cuando aplique, posesión legal del predio e información técnica específica de acuerdo con la modalidad del trámite aplicable a las características del proyecto',
      'Pago de derechos conforme al Código Fiscal CDMX',
    ],
    formato: '[object Object]',
    fundamento: 'Ley Ambiental CDMX, arts. 23, 25, 27, 28, 32, 33, 34, 109, 318 y 323. NADF-001-RNAT-2015, numerales 5.10.1 y 7.4.4.',
  },

];



let filtroTramiteActivo = 'todas';

function renderTramites(){
  const cont = document.getElementById('tramites-contenedor');
  if(!cont) return;

  // Conteos
  const conteo = { todas: TRAMITES.length };
  TRAMITES_CATEGORIAS.forEach(c => {
    if(c.id !== 'todas') conteo[c.id] = TRAMITES.filter(t => t.tipo === c.id).length;
  });

  // Filtros
  const filtrosCont = document.getElementById('tramites-filtros');
  if(filtrosCont){
    filtrosCont.innerHTML = TRAMITES_CATEGORIAS.map(c => {
      const cls = c.id === 'todas' ? ' activa' : '';
      return '<button class="tramite-filtro' + cls + '" data-filtro="' + c.id + '">' + c.nombre + ' <span class="conteo">' + conteo[c.id] + '</span></button>';
    }).join('');
  }

  // Fichas
  let html = '';
  TRAMITES.forEach(t => {
    const tipoLabel = { autorizacion:'Autorización', acreditacion:'Acreditación', impacto:'Impacto ambiental' }[t.tipo];
    const requisitosHTML = t.requisitos.map(r => '<li>' + r + '</li>').join('');
    const pasosHTML = t.pasos.map(p =>
      '<div class="tramite-paso-rapido-item"><div class="num">' + p.num + '</div><div class="label">' + p.label + '</div></div>'
    ).join('');
    const avisoHTML = t.aviso
      ? '<div class="tramite-aviso"><strong>Advertencia:</strong> ' + t.aviso + '</div>'
      : '';

    html += '<article class="tramite-ficha tipo-' + t.tipo + '" data-tipo="' + t.tipo + '">' +
      '<div class="tramite-cabecera">' +
        '<div class="tramite-cabecera-superior">' +
          '<div style="flex:1;min-width:240px">' +
            '<span class="clave">' + t.clave + '</span>' +
            '<h3>' + t.nombre + '</h3>' +
          '</div>' +
          '<span class="tipo-tag">' + tipoLabel + '</span>' +
        '</div>' +
        '<p class="descripcion">' + t.descripcion + '</p>' +
      '</div>' +
      '<div class="tramite-meta-grid">' +
        '<div class="tramite-meta-item"><span class="label">Autoridad</span><span class="valor">' + t.autoridad + '</span></div>' +
        '<div class="tramite-meta-item"><span class="label">Plazo de respuesta</span><span class="valor verde">' + t.plazo + '</span></div>' +
        '<div class="tramite-meta-item"><span class="label">Costo</span><span class="valor">' + t.costo + '</span></div>' +
        '<div class="tramite-meta-item"><span class="label">Vigencia</span><span class="valor">' + t.vigencia + '</span></div>' +
      '</div>' +
      '<div class="tramite-cuerpo">' +
        '<div class="tramite-seccion">' +
          '<div class="tramite-seccion-titulo">Requisitos</div>' +
          '<ul class="tramite-requisitos">' + requisitosHTML + '</ul>' +
        '</div>' +
        '<div class="tramite-seccion">' +
          '<div class="tramite-seccion-titulo">Pasos del trámite</div>' +
          '<div class="tramite-paso-rapido">' + pasosHTML + '</div>' +
        '</div>' +
        '<div class="tramite-seccion">' +
          '<div class="tramite-seccion-titulo">Formato aplicable</div>' +
          '<div class="tramite-formato">' +
            '<div class="tramite-formato-icon">DOC</div>' +
            '<div class="tramite-formato-info"><strong>' + t.formato.nombre + '</strong><span>' + t.formato.tipo + '</span></div>' +
          '</div>' +
        '</div>' +
        avisoHTML +
        '<div class="tramite-fundamento"><strong>FUNDAMENTO JURÍDICO ·</strong> ' + t.fundamento + '</div>' +
      '</div>' +
    '</article>';
  });
  cont.innerHTML = html;

  // Listeners
  document.querySelectorAll('.tramite-filtro').forEach(b => {
    b.addEventListener('click', () => filtrarTramites(b.dataset.filtro, b));
  });
}

function filtrarTramites(tipo, btnActivo){
  document.querySelectorAll('.tramite-filtro').forEach(b => b.classList.remove('activa'));
  if(btnActivo) btnActivo.classList.add('activa');
  filtroTramiteActivo = tipo;
  document.querySelectorAll('.tramite-ficha').forEach(f => {
    if(tipo === 'todas' || f.dataset.tipo === tipo) f.classList.remove('oculto');
    else f.classList.add('oculto');
  });
}

document.addEventListener('DOMContentLoaded', renderTramites);
