/* MICROSITIO ARBOLADO URBANO · SEDEMA CDMX */

function toggleMenu(){
  const nav = document.querySelector('nav.principal');
  if(nav) nav.classList.toggle('abierto');
}

/* PADRÓN ACREDITACIONES (datos de prueba) */
const padronAcreditaciones = [
  { folio:'SEDEMA-POD-2024-00125', nombre:'María Fernanda López García', tipo:'Podador',      estado:'vigente',    expedicion:'15/03/2024', vencimiento:'15/03/2027' },
  { folio:'SEDEMA-DIC-2023-00087', nombre:'Carlos Alberto Ramírez Soto', tipo:'Dictaminador', estado:'vigente',    expedicion:'22/07/2023', vencimiento:'22/07/2026' },
  { folio:'SEDEMA-POD-2021-00342', nombre:'Juan Pérez Hernández',         tipo:'Podador',      estado:'vencida',    expedicion:'08/05/2021', vencimiento:'08/05/2024' },
  { folio:'SEDEMA-POD-2022-00521', nombre:'Roberto Mendoza Cruz',          tipo:'Podador',      estado:'suspendida', expedicion:'14/11/2022', vencimiento:'14/11/2025', motivo:'Suspendido por irregularidades detectadas en supervisión técnica (oficio SEDEMA/DGCORENADR/0247/2025).' },
  { folio:'SEDEMA-DIC-2025-00103', nombre:'Ana Lucía Vázquez Torres',      tipo:'Dictaminador', estado:'vigente',    expedicion:'10/01/2025', vencimiento:'10/01/2028' },
  { folio:'SEDEMA-POD-2024-00298', nombre:'Jorge Eduardo Castillo Rivera', tipo:'Podador',      estado:'vigente',    expedicion:'01/09/2024', vencimiento:'01/09/2027' },
  { folio:'SEDEMA-DIC-2024-00211', nombre:'Patricia Hernández Mora',       tipo:'Dictaminador', estado:'vigente',    expedicion:'18/06/2024', vencimiento:'18/06/2027' },
  { folio:'SEDEMA-POD-2020-00115', nombre:'Luis Aguilar Domínguez',        tipo:'Podador',      estado:'vencida',    expedicion:'02/02/2020', vencimiento:'02/02/2023' }
];

function buscarPorFolio(){
  const q = document.getElementById('folio').value.trim().toUpperCase();
  const tipo = document.getElementById('tipo-folio').value;
  if(!q){ alert('Ingresa un número de folio.'); return; }
  let r = padronAcreditaciones.find(p => p.folio.toUpperCase() === q);
  if(r && tipo !== 'cualquiera' && r.tipo.toLowerCase() !== tipo) r = null;
  mostrarResultadoAcreditacion(r);
}

function buscarPorNombre(){
  const q = document.getElementById('nombre').value.trim().toLowerCase();
  const tipo = document.getElementById('tipo-nombre').value;
  if(!q){ alert('Ingresa un nombre.'); return; }
  let r = padronAcreditaciones.find(p => p.nombre.toLowerCase().includes(q));
  if(r && tipo !== 'cualquiera' && r.tipo.toLowerCase() !== tipo) r = null;
  mostrarResultadoAcreditacion(r);
}

function mostrarResultadoAcreditacion(r){
  const box = document.getElementById('resultado');
  if(!box) return;
  const tabla = document.getElementById('resultado-tabla');
  const aviso = document.getElementById('resultado-aviso');
  box.className = 'resultado visible';
  if(!r){
    box.classList.add('no-encontrada');
    document.getElementById('resultado-icono').textContent = '?';
    document.getElementById('resultado-titulo').textContent = 'No se encontró registro';
    document.getElementById('resultado-sub').textContent = 'Esta persona no figura en el padrón oficial';
    tabla.innerHTML = '<tr><td colspan="2" style="padding:14px 0">No existe una acreditación registrada con ese dato. Verifica que esté correctamente escrito o consulta otro tipo de búsqueda.</td></tr>';
    aviso.innerHTML = '<div class="aviso aviso-rojo" style="margin-top:16px"><strong>No contrates servicios sin acreditación.</strong> Si alguien te ofrece poda, derribo o dictamen sin acreditación vigente, denúncialo en PAOT. Los trabajos realizados sin autorización proceden a sanción conforme al art. 112 de la Ley Ambiental y al Código Penal CDMX.</div>';
    return;
  }
  box.classList.add(r.estado);
  const iconos = { vigente:'\u2713', vencida:'!', suspendida:'\u2715' };
  const titulos = { vigente:'Acreditación vigente', vencida:'Acreditación vencida', suspendida:'Acreditación suspendida' };
  const subs = {
    vigente:'La persona está autorizada para realizar trabajos en CDMX',
    vencida:'La persona no puede ejercer hasta renovar su acreditación',
    suspendida:'La persona no puede ejercer durante la suspensión'
  };
  document.getElementById('resultado-icono').textContent = iconos[r.estado];
  document.getElementById('resultado-titulo').textContent = titulos[r.estado];
  document.getElementById('resultado-sub').textContent = subs[r.estado];
  tabla.innerHTML =
    '<tr><td>Nombre</td><td><strong>' + r.nombre + '</strong></td></tr>' +
    '<tr><td>Número de folio</td><td>' + r.folio + '</td></tr>' +
    '<tr><td>Tipo de acreditación</td><td>' + r.tipo + '</td></tr>' +
    '<tr><td>Fecha de expedición</td><td>' + r.expedicion + '</td></tr>' +
    '<tr><td>Vigencia hasta</td><td>' + r.vencimiento + '</td></tr>' +
    '<tr><td>Estado</td><td><strong style="text-transform:uppercase">' + r.estado + '</strong></td></tr>';
  if(r.estado === 'vigente'){
    aviso.innerHTML = '<div class="aviso aviso-verde" style="margin-top:16px"><strong>Antes de contratar:</strong> solicita ver la credencial física. Verifica que la fotografía corresponda a la persona, que tenga firma del titular de SEDEMA y que no presente tachaduras (NADF-001-RNAT-2015, numeral 5.5).</div>';
  } else if(r.estado === 'vencida'){
    aviso.innerHTML = '<div class="aviso" style="margin-top:16px"><strong>Acreditación vencida.</strong> Esta persona no puede ejecutar trabajos hasta que renueve su acreditación ante SEDEMA. Si te ofrece servicios con esta credencial, podría incurrir en falta administrativa.</div>';
  } else if(r.estado === 'suspendida'){
    aviso.innerHTML = '<div class="aviso aviso-rojo" style="margin-top:16px"><strong>Persona suspendida.</strong> ' + (r.motivo || '') + ' <br>No contrates sus servicios. Si lo ha hecho recientemente, repórtalo a PAOT.</div>';
  }
}

function ocultarResultadoAcreditacion(){
  const box = document.getElementById('resultado');
  if(box) box.className = 'resultado';
}


/* ÁRBOL DE DECISIONES */
const ARBOL = {
  inicio: { pregunta:'¿Cuál es tu situación con <em>el árbol</em>?', opciones:[
    { texto:'Quiero podar, derribar o trasplantar un árbol', siguiente:'p_privado' },
    { texto:'Veo un árbol en riesgo de caer (calle, parque, casa ajena)', siguiente:'p_publico' },
    { texto:'Vi a alguien intervenir un árbol sin permiso', siguiente:'r_denuncia' },
    { texto:'Quiero proponer un árbol como patrimonial', siguiente:'r_patrimonial' },
    { texto:'Quiero verificar si un podador o dictaminador está acreditado', siguiente:'r_verificador' }
  ]},
  p_privado: { pregunta:'¿Dónde está <em>el árbol</em>?', opciones:[
    { texto:'En mi patio, jardín o predio privado', siguiente:'r_alcaldia_privado' },
    { texto:'En vía pública (banqueta, camellón, parque público)', siguiente:'p_publico' },
    { texto:'En un predio donde voy a construir o demoler', siguiente:'r_construccion' }
  ]},
  p_publico: { pregunta:'¿Dónde se ubica <em>el árbol</em> o el riesgo?', opciones:[
    { texto:'Vialidad primaria (eje vial, avenida principal, periférico)', siguiente:'r_sobse' },
    { texto:'Vialidad secundaria, colonia, calle local', siguiente:'r_alcaldia_publico' },
    { texto:'Bosque urbano, barranca, ANP o área protegida', siguiente:'r_sedema_anp' },
    { texto:'Riesgo inminente con personas o bienes', siguiente:'r_emergencia' }
  ]},
  r_emergencia: { resultado:true, emergencia:true, titulo:'Llama al 911 ahora', autoridad:'Heroico Cuerpo de Bomberos · Protección Civil',
    texto:'Si hay riesgo inmediato de caída sobre personas, vehículos o vivienda, comunícate al 911. Bomberos secciona y retira árboles en riesgo inminente (Ley del Heroico Cuerpo de Bomberos CDMX, art. 6 fracc. IX). No intentes intervenir el árbol por tu cuenta.',
    contacto:'Teléfono de emergencia: 911' },
  r_alcaldia_privado: { resultado:true, titulo:'Acude a tu Alcaldía', autoridad:'Alcaldía correspondiente',
    texto:'Aun cuando el árbol esté en tu predio, la autorización para podarlo, derribarlo o trasplantarlo corresponde a la Alcaldía (Ley Ambiental CDMX, art. 106; Ley Orgánica de Alcaldías CDMX, art. 32, fracc. V). Solicita autorización con dictamen técnico. Una poda mayor sin permiso puede sancionarse.',
    contacto:'Trámite ante la Dirección General de Servicios Urbanos o equivalente de tu Alcaldía. Plazo máximo de respuesta: 20 días hábiles.' },
  r_construccion: { resultado:true, titulo:'Trámite con SEDEMA', autoridad:'Secretaría del Medio Ambiente',
    texto:'En obras nuevas, demoliciones o ampliaciones donde haya arbolado, el trámite de derribo y compensación corresponde a SEDEMA mediante Evaluación de Impacto Ambiental (Ley Ambiental CDMX, arts. 46-58 y 111). La autorización debe obtenerse antes de iniciar la obra. Sin ella, procede sanción.',
    contacto:'Dirección General de Evaluación de Impacto y Regulación Ambiental (DGEIRA), Río de la Plata 48, primer piso, colonia Cuauhtémoc. SEDEMATEL: 55 5278 9931.' },
  r_sobse: { resultado:true, titulo:'Reporta a SOBSE', autoridad:'Secretaría de Obras y Servicios',
    texto:'En vialidades primarias del gobierno central, SOBSE ejecuta el mantenimiento del arbolado (Ley Orgánica del Poder Ejecutivo CDMX, art. 38, fracc. I). La autorización ambiental sigue siendo competencia de SEDEMA.',
    contacto:'LOCATEL: 55 5658 1111. Reporta también vía SUAC (Sistema Unificado de Atención Ciudadana).' },
  r_alcaldia_publico: { resultado:true, titulo:'Reporta a tu Alcaldía', autoridad:'Alcaldía correspondiente',
    texto:'En vialidades secundarias y espacios públicos de la demarcación, la Alcaldía es la responsable de la atención del arbolado (Ley Ambiental CDMX, art. 106; Ley Orgánica de Alcaldías CDMX, art. 32, fracc. V).',
    contacto:'Contacta a la Dirección General de Servicios Urbanos de tu Alcaldía o reporta vía LOCATEL: 55 5658 1111.' },
  r_sedema_anp: { resultado:true, titulo:'Acude directo a SEDEMA', autoridad:'SEDEMA · DGSANPAVA',
    texto:'En Bosques Urbanos, Barrancas y ANP locales, la administración directa corresponde a SEDEMA (Ley Ambiental CDMX, arts. 116, 117, 126, 127; Reglamento Interior, art. 184). En ANP federales (CONANP), SEDEMA coadyuva y orienta.',
    contacto:'SEDEMATEL: 55 5278 9931. Consulta el listado de áreas y verifica si tu zona está bajo administración SEDEMA.' },
  r_denuncia: { resultado:true, titulo:'Denuncia en PAOT', autoridad:'Procuraduría Ambiental y del Ordenamiento Territorial',
    texto:'Cualquier persona puede denunciar daños al arbolado urbano. PAOT investiga y emite dictámenes (Ley Orgánica PAOT, art. 5 fraccs. I y XV). En casos graves, también puedes denunciar ante la Fiscalía Ambiental (Código Penal CDMX, arts. 343-350).',
    contacto:'denuncia.paot.cdmx.gob.mx · Tel. 55 5265 0780. Tu denuncia puede ser anónima.' },
  r_patrimonial: { resultado:true, titulo:'Propuesta de árbol patrimonial', autoridad:'SEDEMA · Comité Técnico de Arbolado',
    texto:'SEDEMA mantiene un registro de árboles de valor patrimonial por edad, especie, asociación histórica o cultural. Cualquier persona puede proponer un ejemplar mediante ficha técnica.',
    contacto:'Envía tu propuesta a la Dirección General de Coordinación de Políticas y Cultura Ambiental. Consulta el formato en sedema.cdmx.gob.mx.' },
  r_verificador: { resultado:true, titulo:'Verifica al podador', autoridad:'Padrón de SEDEMA',
    texto:'Toda persona que pode, derribe, trasplante o dictamine arbolado debe contar con acreditación vigente (NADF-001-RNAT-2015, numerales 5.4 y 5.5). Consulta el padrón en el módulo correspondiente.',
    contacto:'Accede al módulo "¿A quién le toca?" desde el menú principal y desplázate a la sección de verificación.' }
};

function renderArbol(nodoId){
  const cont = document.getElementById('arbol-contenedor');
  if(!cont) return;
  const nodo = ARBOL[nodoId];
  if(!nodo){ cont.innerHTML = '<p>Nodo no encontrado.</p>'; return; }
  if(nodo.resultado){
    const clase = nodo.emergencia ? 'resultado-arbol emergencia' : 'resultado-arbol';
    cont.innerHTML =
      '<div class="nodo-arbol ' + clase + '">' +
      '<span class="badge-aut">' + nodo.autoridad + '</span>' +
      '<h3>' + nodo.titulo + '</h3>' +
      '<p style="margin-bottom:14px;font-size:15.5px;line-height:1.7">' + nodo.texto + '</p>' +
      '<p style="font-size:14px;background:rgba(255,255,255,.7);padding:14px 18px;border-radius:4px;line-height:1.6"><strong>Contacto:</strong> ' + nodo.contacto + '</p>' +
      '<button class="btn-secundario btn-reiniciar" onclick="reiniciarArbol()">← Volver a empezar</button>' +
      '</div>';
  } else {
    let html = '<div class="nodo-arbol"><h3>' + nodo.pregunta + '</h3><div class="opciones-arbol">';
    nodo.opciones.forEach(function(op){
      html += '<button class="opcion" onclick="avanzarArbol(\'' + op.siguiente + '\')">' + op.texto + '</button>';
    });
    html += '</div></div>';
    cont.innerHTML = html;
  }
}
function avanzarArbol(id){ renderArbol(id); }
function reiniciarArbol(){ renderArbol('inicio'); }

document.addEventListener('DOMContentLoaded', function(){

  document.querySelectorAll('.tabs .tab-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.tabs .tab-btn').forEach(function(b){ b.classList.remove('activa'); });
      btn.classList.add('activa');
      document.querySelectorAll('.tab-contenido').forEach(function(c){ c.style.display = 'none'; });
      const target = document.getElementById('tab-' + btn.dataset.tab);
      if(target) target.style.display = 'block';
      ocultarResultadoAcreditacion();
    });
  });

  document.querySelectorAll('.filtro-opcion').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.filtro-opcion').forEach(function(b){ b.classList.remove('activa'); });
      btn.classList.add('activa');
      const u = btn.dataset.ubicacion;
      document.querySelectorAll('.competencia').forEach(function(c){
        const ubics = c.dataset.ubicacion.split(' ');
        c.style.display = (u === 'todos' || ubics.includes(u)) ? '' : 'none';
      });
    });
  });

  if(document.getElementById('arbol-contenedor')) renderArbol('inicio');
});

/* ==========================================================
   HOMEPAGE · HERRAMIENTAS INTERACTIVAS EMBEBIDAS
========================================================== */

/* Historial de navegación del asistente */
let historialArbolHome = [];

function renderArbolHome(nodoId){
  const cont = document.getElementById('arbol-home-contenedor');
  if(!cont) return;
  const nodo = ARBOL[nodoId];
  if(!nodo){ cont.innerHTML = '<p>Nodo no encontrado.</p>'; return; }

  // Construir indicador de progreso (breadcrumb visual)
  const pasoActual = historialArbolHome.length + 1;
  const totalEstimado = historialArbolHome.length + (nodo.resultado ? 0 : 1);
  const progresoHTML = '<div class="arbol-progreso">' +
    '<span class="paso-numero">Paso ' + pasoActual + (nodo.resultado ? ' · Resultado' : '') + '</span>' +
    (historialArbolHome.length > 0
      ? '<button class="btn-atras" onclick="retrocederArbolHome()" aria-label="Regresar a la pregunta anterior">' +
        '<span class="atras-flecha">←</span> Atrás' +
      '</button>'
      : '') +
  '</div>';

  if(nodo.resultado){
    const clase = nodo.emergencia ? 'resultado-arbol-home emergencia' : 'resultado-arbol-home';
    cont.innerHTML =
      progresoHTML +
      '<div class="nodo-arbol-home ' + clase + '">' +
      '<span class="badge-aut">' + nodo.autoridad + '</span>' +
      '<h4>' + nodo.titulo + '</h4>' +
      '<p class="texto-resultado">' + nodo.texto + '</p>' +
      '<div class="contacto-resultado"><strong>Contacto:</strong> ' + nodo.contacto + '</div>' +
      '<div class="acciones-resultado">' +
        (historialArbolHome.length > 0
          ? '<button class="btn-sec btn-atras-result" onclick="retrocederArbolHome()">← Cambiar respuesta anterior</button>'
          : '') +
        '<button class="btn-sec" onclick="reiniciarArbolHome()">↺ Volver a empezar</button>' +
        '<a href="modulo-2-arbol.html" class="link-mas">Ver más opciones del asistente →</a>' +
      '</div>' +
      '</div>';
  } else {
    let html = progresoHTML + '<div class="nodo-arbol-home"><h4>' + nodo.pregunta + '</h4><div class="opciones-arbol-home">';
    nodo.opciones.forEach(function(op){
      html += '<button class="opcion-home" onclick="avanzarArbolHome(\'' + op.siguiente + '\')">' +
              '<span class="op-texto">' + op.texto + '</span>' +
              '<span class="op-flecha">→</span></button>';
    });
    html += '</div></div>';
    cont.innerHTML = html;
  }
}

function avanzarArbolHome(id){
  // Buscar el nodo actual visible para guardarlo en historial
  const nodoActualVisible = obtenerNodoActualHome();
  if(nodoActualVisible) historialArbolHome.push(nodoActualVisible);
  renderArbolHome(id);
}

function obtenerNodoActualHome(){
  // Identifica el nodo actualmente renderizado a partir del texto de la pregunta o título
  const cont = document.getElementById('arbol-home-contenedor');
  if(!cont) return null;
  const h4 = cont.querySelector('.nodo-arbol-home h4');
  if(!h4) return null;
  const textoActual = h4.textContent.trim();
  // Buscar en el ARBOL el id que coincida con la pregunta o título
  for(const id in ARBOL){
    const nodo = ARBOL[id];
    const txt = nodo.resultado ? nodo.titulo : (nodo.pregunta || '').replace(/<[^>]+>/g,'');
    if(txt.trim() === textoActual) return id;
  }
  return null;
}

function retrocederArbolHome(){
  if(historialArbolHome.length === 0){ renderArbolHome('inicio'); return; }
  const anterior = historialArbolHome.pop();
  renderArbolHome(anterior);
}

function reiniciarArbolHome(){
  historialArbolHome = [];
  renderArbolHome('inicio');
}

/* Verificador en home */
function verificarPadronHome(){
  const folio = document.getElementById('folio-home').value.trim().toUpperCase();
  const tipo = document.getElementById('tipo-home').value;
  const box = document.getElementById('verif-resultado');
  if(!box) return;

  if(!folio){
    box.className = 'verif-resultado visible alerta';
    box.innerHTML = '<div class="verif-card"><div class="verif-icono icono-alerta">!</div><div class="verif-info"><h4>Ingresa un folio</h4><p>Escribe el número de folio que aparece en la credencial SEDEMA de la persona, con el formato <strong>SEDEMA-POD-AAAA-NNNNN</strong> o <strong>SEDEMA-DIC-AAAA-NNNNN</strong>.</p></div></div>';
    return;
  }

  let r = padronAcreditaciones.find(p => p.folio.toUpperCase() === folio);
  if(r && tipo !== 'cualquiera' && r.tipo.toLowerCase() !== tipo) r = null;

  if(!r){
    box.className = 'verif-resultado visible no-encontrada';
    box.innerHTML = '<div class="verif-card">' +
      '<div class="verif-icono icono-no">?</div>' +
      '<div class="verif-info">' +
        '<h4>No se encontró registro</h4>' +
        '<p>El folio <strong>' + folio + '</strong> no aparece en el padrón oficial de SEDEMA. Verifica que esté escrito correctamente.</p>' +
        '<div class="verif-aviso rojo"><strong>No contrates servicios sin acreditación.</strong> Si alguien te ofrece poda, derribo o dictamen sin acreditación vigente, denúncialo en PAOT al 55 5265 0780.</div>' +
      '</div>' +
    '</div>';
    return;
  }

  const claseEstado = r.estado;
  const iconos = { vigente:'✓', vencida:'!', suspendida:'✕' };
  const titulos = {
    vigente:'Acreditación vigente',
    vencida:'Acreditación vencida',
    suspendida:'Acreditación suspendida'
  };
  const subs = {
    vigente:'Esta persona está autorizada para realizar trabajos en la CDMX.',
    vencida:'Esta persona no puede ejercer hasta renovar su acreditación.',
    suspendida:'Esta persona no puede ejercer durante la suspensión.'
  };

  let avisoFinal = '';
  if(r.estado === 'vigente'){
    avisoFinal = '<div class="verif-aviso verde"><strong>Antes de contratar:</strong> solicita ver la credencial física. Verifica fotografía, firma del titular de SEDEMA y ausencia de tachaduras (NADF-001-RNAT-2015, numeral 5.5).</div>';
  } else if(r.estado === 'vencida'){
    avisoFinal = '<div class="verif-aviso amarillo"><strong>Acreditación vencida.</strong> Esta persona no puede ejecutar trabajos hasta renovar su acreditación ante SEDEMA.</div>';
  } else if(r.estado === 'suspendida'){
    avisoFinal = '<div class="verif-aviso rojo"><strong>Persona suspendida.</strong> ' + (r.motivo || '') + ' No contrates sus servicios. Si lo hiciste recientemente, repórtalo a PAOT.</div>';
  }

  box.className = 'verif-resultado visible ' + claseEstado;
  box.innerHTML = '<div class="verif-card">' +
    '<div class="verif-icono icono-' + claseEstado + '">' + iconos[r.estado] + '</div>' +
    '<div class="verif-info">' +
      '<h4>' + titulos[r.estado] + '</h4>' +
      '<p class="sub-resultado">' + subs[r.estado] + '</p>' +
      '<div class="verif-tabla">' +
        '<div class="vr-fila"><span class="vr-label">Nombre</span><span class="vr-val"><strong>' + r.nombre + '</strong></span></div>' +
        '<div class="vr-fila"><span class="vr-label">Folio</span><span class="vr-val">' + r.folio + '</span></div>' +
        '<div class="vr-fila"><span class="vr-label">Tipo</span><span class="vr-val">' + r.tipo + '</span></div>' +
        '<div class="vr-fila"><span class="vr-label">Expedición</span><span class="vr-val">' + r.expedicion + '</span></div>' +
        '<div class="vr-fila"><span class="vr-label">Vigencia hasta</span><span class="vr-val">' + r.vencimiento + '</span></div>' +
      '</div>' +
      avisoFinal +
    '</div>' +
  '</div>';
}

function usarFolioEjemplo(folio){
  const inp = document.getElementById('folio-home');
  if(inp){ inp.value = folio; verificarPadronHome(); }
}

document.addEventListener('DOMContentLoaded', function(){
  if(document.getElementById('arbol-home-contenedor')){
    renderArbolHome('inicio');
  }
  const folioInput = document.getElementById('folio-home');
  if(folioInput){
    folioInput.addEventListener('keypress', function(e){
      if(e.key === 'Enter'){ verificarPadronHome(); }
    });
  }
});
