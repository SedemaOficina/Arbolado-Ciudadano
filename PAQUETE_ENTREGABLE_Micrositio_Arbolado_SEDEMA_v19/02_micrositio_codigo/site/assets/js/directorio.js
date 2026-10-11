/* ==========================================================
   MÓDULO 11 · DIRECTORIO INSTITUCIONAL
========================================================== */

const DIR_GRUPOS = [
  { id:'todas',      nombre:'Todos los contactos' },
  { id:'sedema',     nombre:'SEDEMA' },
  { id:'alcaldia',   nombre:'Alcaldías' },
  { id:'denuncia',   nombre:'Denuncia y procuración' },
  { id:'emergencia', nombre:'Emergencias' },
  { id:'ciudadana',  nombre:'Atención ciudadana' },
  { id:'conexa',     nombre:'Otras autoridades conexas' }
];

const DIR_BLOQUES = [

  {
    id: 'sedema',
    num: '01',
    nombre: 'Secretaría del <em>Medio Ambiente</em>',
    descr: 'Áreas internas de SEDEMA con competencia en materia de arbolado urbano.',
    contactos: [
      {
        nombre: '<em>SEDEMA</em> · Oficinas Centrales',
        funcion: 'Conmutador principal de la Secretaría. Punto de partida para canalización de cualquier asunto general.',
        tel: '55 5278 9931',
        web: 'https://www.sedema.cdmx.gob.mx',
        sede: 'Plaza de la Constitución 1, 4° piso, Centro Histórico, Cuauhtémoc, CDMX, CP 06000',
      },
      {
        nombre: '<em>SEDEMATEL</em>',
        funcion: 'Línea de atención ciudadana en materia ambiental. Información sobre trámites, denuncias, emergencias ambientales y orientación general.',
        tel: '55 5278 9931',
        web: 'https://www.sedema.cdmx.gob.mx',
      },
      {
        nombre: '<em>DGSANPAVA</em>',
        funcion: 'Dirección General del Sistema de Áreas Naturales Protegidas y Áreas de Valor Ambiental. Administra Bosques Urbanos, Barrancas y ANP locales. Reporta aquí problemas en Chapultepec, Aragón, barrancas y áreas protegidas.',
        tel: '55 5278 9931 ext. correspondiente',
        web: 'https://www.sedema.cdmx.gob.mx',
        sede: 'Oficinas SEDEMA, Plaza de la Constitución 1, 4° piso',
      },
      {
        nombre: '<em>DGEIRA</em> · Dirección General de Evaluación de Impacto y Regulación Ambiental',
        funcion: 'Recibe y resuelve estudios de impacto ambiental. Autoriza intervención al arbolado en proyectos de obra pública y privada sujetos a EIA.',
        tel: '55 5278 9931',
        web: 'https://www.sedema.cdmx.gob.mx',
        sede: 'Río de la Plata 48, primer piso, colonia Cuauhtémoc, Alcaldía Cuauhtémoc',
      },
      {
        nombre: 'Dirección Ejecutiva del <em>Bosque de Chapultepec</em>',
        funcion: 'Administración integral del Bosque de Chapultepec (todas sus secciones). Atención de problemas con arbolado dentro del polígono del Bosque conforme al art. 190 Bis del Reglamento Interior.',
        tel: '55 5278 9931',
        web: 'https://chapultepec.cdmx.gob.mx',
        sede: 'Bosque de Chapultepec',
      },
    ],
  },

  {
    id: 'alcaldia',
    num: '02',
    nombre: '<em>Alcaldías</em> de la Ciudad de México',
    descr: 'Las 16 demarcaciones territoriales tienen competencia para conservación, mantenimiento y autorización de poda, derribo y trasplante en su territorio (art. 32 fracc. V de la Ley Orgánica de Alcaldías). Reporta a través de LOCATEL si no conoces el área específica.',
    contactos: [
      {
        nombre: '<em>Álvaro Obregón</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5276 6800',
        web: 'https://www.alvaroobregon.cdmx.gob.mx',
        sede: 'Calle 10 y Canario s/n, Col. Tolteca',
      },
      {
        nombre: '<em>Azcapotzalco</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5354 9994',
        web: 'https://azcapotzalco.cdmx.gob.mx',
        sede: 'Castilla Oriente s/n, Col. Centro',
      },
      {
        nombre: '<em>Benito Juárez</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5422 5300',
        web: 'https://alcaldiabenitojuarez.gob.mx',
        sede: 'Av. División del Norte 1611, Col. Santa Cruz Atoyac',
      },
      {
        nombre: '<em>Coyoacán</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5658 0099',
        web: 'https://www.coyoacan.cdmx.gob.mx',
        sede: 'Jardín Hidalgo 1, Col. Villa Coyoacán',
      },
      {
        nombre: '<em>Cuajimalpa de Morelos</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5814 1100',
        web: 'https://www.cuajimalpa.cdmx.gob.mx',
        sede: 'Av. Juárez 76, Col. Cuajimalpa',
      },
      {
        nombre: '<em>Cuauhtémoc</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 2452 3100',
        web: 'https://alcaldiacuauhtemoc.mx',
        sede: 'Aldama y Mina s/n, Col. Buenavista',
      },
      {
        nombre: '<em>Gustavo A. Madero</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5118 2800',
        web: 'https://gamadero.cdmx.gob.mx',
        sede: '5 de Febrero esq. Vicente Villada, Col. Villa GAM',
      },
      {
        nombre: '<em>Iztacalco</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5654 1313',
        web: 'https://www.iztacalco.cdmx.gob.mx',
        sede: 'Plaza Benito Juárez 1, Col. Gabriel Ramos Millán',
      },
      {
        nombre: '<em>Iztapalapa</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5804 1300',
        web: 'https://www.iztapalapa.cdmx.gob.mx',
        sede: 'Aldama 63, Barrio San Lucas',
      },
      {
        nombre: '<em>La Magdalena Contreras</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5449 6160',
        web: 'https://mcontreras.gob.mx',
        sede: 'Álvaro Obregón 20, Col. Barranca Seca',
      },
      {
        nombre: '<em>Miguel Hidalgo</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5273 7515',
        web: 'https://miguelhidalgo.cdmx.gob.mx',
        sede: 'Parque Lira 94, Col. Observatorio',
      },
      {
        nombre: '<em>Milpa Alta</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5862 3150',
        web: 'https://milpa-alta.cdmx.gob.mx',
        sede: 'Av. Constitución esq. Andador Sonora, Villa Milpa Alta',
      },
      {
        nombre: '<em>Tláhuac</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5862 3210',
        web: 'https://www.tlahuac.cdmx.gob.mx',
        sede: 'Av. Tláhuac y Nicolás Bravo, Col. Centro',
      },
      {
        nombre: '<em>Tlalpan</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5483 1500',
        web: 'https://www.tlalpan.cdmx.gob.mx',
        sede: 'Plaza de la Constitución 1, Col. Tlalpan Centro',
      },
      {
        nombre: '<em>Venustiano Carranza</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5764 9400',
        web: 'https://www.vcarranza.cdmx.gob.mx',
        sede: 'Francisco del Paso y Troncoso 219, Col. Jardín Balbuena',
      },
      {
        nombre: '<em>Xochimilco</em>',
        funcion: 'Servicios urbanos y arbolado.',
        tel: '55 5334 0600',
        web: 'https://www.xochimilco.cdmx.gob.mx',
        sede: 'Gladiolas 161, Col. Barrio San Pedro',
      },
    ],
  },

  {
    id: 'denuncia',
    num: '03',
    nombre: 'Denuncia y <em>procuración de justicia ambiental</em>',
    descr: 'Autoridades competentes para recibir denuncias ciudadanas de irregularidades, investigar y, en su caso, sancionar conductas que dañen el arbolado urbano. La denuncia ciudadana puede ser anónima.',
    contactos: [
      {
        nombre: '<em>PAOT</em> · Procuraduría Ambiental y del Ordenamiento Territorial',
        funcion: 'Defensa de los derechos ambientales y del ordenamiento territorial. Recibe e investiga denuncias ciudadanas, formula dictámenes y emite recomendaciones. <strong>Para reportar intervenciones irregulares al arbolado.</strong>',
        tel: '55 5265 0780',
        web: 'https://www.paot.cdmx.gob.mx',
        sede: 'Medellín 202, Col. Roma Norte, Cuauhtémoc',
      },
      {
        nombre: '<em>Fiscalía de Investigación en Delitos Ambientales y en Materia de Protección Urbana</em>',
        funcion: 'Investiga delitos contra el ambiente tipificados en el Código Penal CDMX. Para casos con elementos delictivos: tala clandestina, derribo doloso, comercio ilegal de madera, daño a árboles patrimoniales.',
        tel: '55 5345 5000',
        web: 'https://www.fgjcdmx.gob.mx',
        sede: 'Fiscalía General de Justicia de la CDMX',
      },
      {
        nombre: '<em>Tribunal de Justicia Administrativa</em> de la CDMX',
        funcion: 'Resuelve controversias derivadas de actos y resoluciones de autoridades administrativas, incluidas las ambientales. Recurre aquí cuando consideres que una autorización (o su negación) fue indebida.',
        tel: '55 5740 8810',
        web: 'https://www.tjacdmx.gob.mx',
        sede: 'Av. de los Insurgentes Sur 825, Col. Nápoles',
      },
    ],
  },

  {
    id: 'emergencia',
    num: '04',
    nombre: '<em>Emergencias</em> y riesgos',
    descr: 'Líneas y autoridades para situaciones de riesgo inminente con arbolado: caída de árbol, rama sobre cables, panal de abejas, daños tras lluvias o sismos.',
    contactos: [
      {
        nombre: '<em>911</em> · Emergencias',
        funcion: 'Línea única de emergencias de la CDMX. Coordina la respuesta de Bomberos, Cruz Roja, SSC y Protección Civil. <strong>Llama si hay riesgo inminente para personas, viviendas o vehículos.</strong>',
        tel: '911',
        web: 'https://www.911cdmx.gob.mx',
      },
      {
        nombre: '<em>Heroico Cuerpo de Bomberos</em> de la CDMX',
        funcion: 'Atención de emergencias con arbolado: árboles caídos, ramas sobre cables, retiro de panales de abejas, situaciones de riesgo en altura. Coordinado a través del 911.',
        tel: '911 (vía emergencias)',
        web: 'https://www.bomberos.cdmx.gob.mx',
        sede: 'Av. Fray Servando Teresa de Mier 77, Col. Obrera',
      },
      {
        nombre: '<em>SGIRPC</em> · Secretaría de Gestión Integral de Riesgos y Protección Civil',
        funcion: 'Coordina el Sistema de Protección Civil. Atiende emergencias estructurales y comunitarias. Para situaciones que excedan la atención de Bomberos o requieran coordinación multinstitucional.',
        tel: '55 5683 1142',
        web: 'https://www.proteccioncivil.cdmx.gob.mx',
        sede: 'Abraham González 67, Col. Juárez',
      },
      {
        nombre: '<em>CFE</em> · Reportes',
        funcion: 'Atención de incidencias con cables de energía eléctrica. Reporta cuando una rama esté en contacto con líneas energizadas o cuando se requiera corte de servicio para poda especializada.',
        tel: '071',
        web: 'https://www.cfe.mx',
      },
    ],
  },

  {
    id: 'ciudadana',
    num: '05',
    nombre: '<em>Atención ciudadana</em> general',
    descr: 'Canales de atención ciudadana del Gobierno de la Ciudad de México para reportes, dudas o canalización a la autoridad competente.',
    contactos: [
      {
        nombre: '<em>LOCATEL</em>',
        funcion: 'Línea ciudadana del Gobierno de la CDMX. Canaliza reportes, brinda orientación y atiende solicitudes. <strong>Si no sabes a qué autoridad acudir, llama aquí.</strong>',
        tel: '55 5658 1111',
        web: 'https://www.locatel.cdmx.gob.mx',
      },
      {
        nombre: '<em>SUAC</em> · Sistema Unificado de Atención Ciudadana',
        funcion: 'Plataforma digital para presentar reportes y solicitudes a cualquier dependencia del Gobierno de la Ciudad, incluyendo SEDEMA y las 16 Alcaldías.',
        tel: '55 5658 1111',
        web: 'https://atencionciudadana.cdmx.gob.mx',
      },
      {
        nombre: '<em>ADIP</em> · Agencia Digital de Innovación Pública',
        funcion: 'Administra Llave CDMX y el Mapa Digital. Útil para consultar capas territoriales, alcaldías, vialidades y servicios urbanos.',
        tel: '55 1719 1700',
        web: 'https://www.adip.cdmx.gob.mx',
        sede: 'Calle Génova 33, Col. Juárez',
      },
    ],
  },

  {
    id: 'conexa',
    num: '06',
    nombre: 'Otras autoridades <em>conexas</em>',
    descr: 'Autoridades con competencia parcial o concurrente en materias vinculadas al arbolado urbano: vialidad primaria, áreas naturales protegidas federales, parques nacionales y patrimonio.',
    contactos: [
      {
        nombre: '<em>SOBSE</em> · Secretaría de Obras y Servicios',
        funcion: 'Mantenimiento y operación de la vialidad primaria de la CDMX. <strong>Para reportes de arbolado en avenidas principales y ejes viales</strong> (Insurgentes, Reforma, Periférico, Eje Central, Calzada de Tlalpan).',
        tel: '55 5128 5200',
        web: 'https://www.obras.cdmx.gob.mx',
        sede: 'Av. Universidad 800, Col. Santa Cruz Atoyac',
      },
      {
        nombre: '<em>CONANP</em> · Comisión Nacional de Áreas Naturales Protegidas',
        funcion: 'Administración de las Áreas Naturales Protegidas federales en la CDMX: Desierto de los Leones, Cumbres del Ajusco y El Tepeyac. Coordina con SEDEMA en zonas limítrofes.',
        tel: '55 5449 6300',
        web: 'https://www.gob.mx/conanp',
        sede: 'Camino al Ajusco 200, Col. Jardines en la Montaña',
      },
      {
        nombre: '<em>SEGIAGUA</em> · Secretaría de Gestión Integral del Agua',
        funcion: 'Drenaje y agua potable. Reporte coordinado cuando raíces afecten tubería o se requiera evaluación conjunta con la Alcaldía para no comprometer infraestructura hídrica.',
        tel: '55 5654 3210',
        web: 'https://segiagua.cdmx.gob.mx/',
        sede: 'Río de la Plata 48, primer piso, colonia Cuauhtémoc, Alcaldía Cuauhtémoc',
      },
      {
        nombre: '<em>INAH</em> · Instituto Nacional de Antropología e Historia',
        funcion: 'Protección del patrimonio cultural e histórico. En coordinación con SEDEMA y el Consejo de Salvaguarda del Patrimonio Urbanístico Arquitectónico cuando un árbol patrimonial esté vinculado con monumento histórico.',
        tel: '55 4040 4300',
        web: 'https://www.inah.gob.mx',
        sede: 'Córdoba 45, Col. Roma',
      },
    ],
  },

];



let dirFiltroActivo = 'todas';
let dirQuery = '';

function renderDirectorio(){
  const cont = document.getElementById('dir-contenedor');
  if(!cont) return;

  // Conteos
  const totalContactos = DIR_BLOQUES.reduce((acc, b) => acc + b.contactos.length, 0);
  const conteo = { todas: totalContactos };
  DIR_BLOQUES.forEach(b => { conteo[b.id] = b.contactos.length; });

  // Filtros
  const filtrosCont = document.getElementById('dir-filtros');
  if(filtrosCont){
    filtrosCont.innerHTML = DIR_GRUPOS.map(g => {
      const cls = g.id === 'todas' ? ' activa' : '';
      return '<button class="dir-filtro' + cls + '" data-filtro="' + g.id + '">' + g.nombre + ' <span class="conteo">' + (conteo[g.id] || 0) + '</span></button>';
    }).join('');
  }

  // Bloques
  let html = '';
  DIR_BLOQUES.forEach(b => {
    let cardsHTML = '';
    b.contactos.forEach((c, idx) => {
      const urgenciaHTML = c.urgencia ? '<span class="urgencia">' + c.urgencia + '</span>' : '';
      const sedeHTML = c.sede ? '<div class="dir-dato sede"><span class="icono">SEDE</span><span class="valor">' + c.sede + '</span></div>' : '';
      const emailHTML = c.email ? '<div class="dir-dato email"><span class="icono">@</span><span class="valor">' + c.email + '</span></div>' : '';
      const webHTML = c.web ? '<div class="dir-dato web"><span class="icono">WEB</span><a href="' + c.web + '" target="_blank" rel="noopener">' + c.web.replace(/^https?:\/\//,'') + '</a></div>' : '';
      const textoBusqueda = (c.nombre + ' ' + c.funcion + ' ' + (c.sede||'') + ' ' + c.tel + ' ' + (c.web||'')).replace(/<[^>]+>/g,'').toLowerCase();

      cardsHTML += '<article class="dir-card grupo-' + b.id + '" data-grupo="' + b.id + '" data-busqueda="' + textoBusqueda.replace(/"/g,'&quot;') + '">' +
        urgenciaHTML +
        '<h4>' + c.nombre + '</h4>' +
        '<p class="funcion">' + c.funcion + '</p>' +
        '<div class="dir-card-datos">' +
          '<div class="dir-dato tel"><span class="icono">TEL</span><span class="valor">' + c.tel + '</span></div>' +
          webHTML +
          emailHTML +
          sedeHTML +
        '</div>' +
      '</article>';
    });

    html += '<section class="dir-grupo" data-grupo="' + b.id + '">' +
      '<div class="dir-grupo-header">' +
        '<span class="dir-grupo-num">' + b.num + '</span>' +
        '<div class="dir-grupo-info"><h3>' + b.nombre + '</h3><p>' + b.descr + '</p></div>' +
      '</div>' +
      '<div class="dir-grid">' + cardsHTML + '</div>' +
    '</section>';
  });
  cont.innerHTML = html;

  // Listeners
  document.querySelectorAll('.dir-filtro').forEach(b => {
    b.addEventListener('click', () => filtrarDir(b.dataset.filtro, b));
  });
  const input = document.getElementById('dir-busqueda');
  if(input) input.addEventListener('input', buscarDir);
}

function filtrarDir(grupo, btn){
  document.querySelectorAll('.dir-filtro').forEach(b => b.classList.remove('activa'));
  if(btn) btn.classList.add('activa');
  dirFiltroActivo = grupo;
  const input = document.getElementById('dir-busqueda');
  if(input) input.value = '';
  dirQuery = '';
  aplicarFiltrosDir();
}

function buscarDir(){
  const input = document.getElementById('dir-busqueda');
  dirQuery = input.value.trim().toLowerCase();
  document.querySelectorAll('.dir-filtro').forEach(b => b.classList.remove('activa'));
  document.querySelector('.dir-filtro[data-filtro="todas"]').classList.add('activa');
  dirFiltroActivo = 'todas';
  aplicarFiltrosDir();
}

function aplicarFiltrosDir(){
  const contador = document.getElementById('dir-contador');
  let match = 0;
  document.querySelectorAll('.dir-card').forEach(c => {
    const okG = dirFiltroActivo === 'todas' || c.dataset.grupo === dirFiltroActivo;
    const okQ = !dirQuery || c.dataset.busqueda.includes(dirQuery);
    if(okG && okQ){ c.classList.remove('oculto'); match++; }
    else c.classList.add('oculto');
  });
  document.querySelectorAll('.dir-grupo').forEach(g => {
    const visibles = g.querySelectorAll('.dir-card:not(.oculto)').length;
    g.style.display = visibles ? '' : 'none';
  });

  if(!contador) return;
  const total = document.querySelectorAll('.dir-card').length;
  if(dirFiltroActivo === 'todas' && !dirQuery){
    contador.className = 'dir-contador';
  } else if(match === 0){
    contador.className = 'dir-contador visible sin-resultados';
    contador.innerHTML = '<strong>Sin contactos que coincidan.</strong> Prueba con otro filtro o palabra clave.';
  } else {
    contador.className = 'dir-contador visible';
    contador.innerHTML = '<strong>' + match + '</strong> de ' + total + ' ' + (match === 1 ? 'contacto' : 'contactos') + '.';
  }
}

function limpiarFiltrosDir(){
  dirFiltroActivo = 'todas';
  dirQuery = '';
  const input = document.getElementById('dir-busqueda');
  if(input) input.value = '';
  document.querySelectorAll('.dir-filtro').forEach(b => b.classList.remove('activa'));
  document.querySelector('.dir-filtro[data-filtro="todas"]').classList.add('activa');
  aplicarFiltrosDir();
}

document.addEventListener('DOMContentLoaded', renderDirectorio);
