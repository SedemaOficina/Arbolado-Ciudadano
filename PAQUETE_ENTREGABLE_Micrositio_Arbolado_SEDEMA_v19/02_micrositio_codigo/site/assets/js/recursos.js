/* ==========================================================
   MÓDULO 12 · CENTRO DE RECURSOS
   Documentos, libros, guías, listados, fotografías y videos
   RECURSOS DUMMY · sustituir por archivos reales SEDEMA
========================================================== */

const RECURSOS_TIPOS = {
  documento:  { label: 'Documentos institucionales', color: 'guinda',  icono: '📄' },
  libro:      { label: 'Libros y publicaciones',     color: 'dorado',  icono: '📚' },
  guia:       { label: 'Guías prácticas',            color: 'verde',   icono: '🌿' },
  listado:    { label: 'Listados y bases de datos',  color: 'tierra',  icono: '📋' },
  fotografia: { label: 'Fotografías',                color: 'lavanda', icono: '📷' },
  video:      { label: 'Videos',                     color: 'rojo',    icono: '▶️' }
};

const RECURSOS = [

  // ===== DOCUMENTOS INSTITUCIONALES =====
  { id: 'doc-01', tipo: 'documento',
    titulo: 'Programa de Reforestación de la Ciudad de México 2024–2030',
    descripcion: 'Documento rector que establece objetivos, metas, líneas de acción e indicadores del programa sexenal de reforestación en las 16 alcaldías. Incluye anexo cartográfico y catálogo de especies recomendadas.',
    autor: 'SEDEMA · DGSANPAVA', fecha: '2024', formato: 'PDF', tamano: '4.2 MB',
    url: '#recursos/programa-reforestacion-2024.pdf', destacado: true },

  { id: 'doc-02', tipo: 'documento',
    titulo: 'Diagnóstico del arbolado urbano de la CDMX 2024',
    descripcion: 'Informe técnico con inventario, condición fitosanitaria, distribución territorial y servicios ambientales del arbolado urbano. Base para la planeación operativa 2025-2027.',
    autor: 'SEDEMA · DGSANPAVA', fecha: '2024', formato: 'PDF', tamano: '8.5 MB',
    url: '#recursos/diagnostico-arbolado-2024.pdf' },

  { id: 'doc-03', tipo: 'documento',
    titulo: 'Informe anual de intervenciones al arbolado 2025',
    descripcion: 'Reporte estadístico de podas, derribos y trasplantes autorizados y ejecutados durante el ejercicio 2025, con desglose por alcaldía y causal.',
    autor: 'SEDEMA', fecha: 'Enero 2026', formato: 'PDF', tamano: '2.1 MB',
    url: '#recursos/informe-intervenciones-2025.pdf' },

  { id: 'doc-04', tipo: 'documento',
    titulo: 'Protocolo de emergencias arbóreas SEDEMA-C5-Bomberos',
    descripcion: 'Protocolo interinstitucional de respuesta ante emergencias con arbolado (caída, riesgo inminente, contacto con cableado). Define roles, tiempos y flujos operativos.',
    autor: 'SEDEMA · SGIRPC · Bomberos', fecha: '2024', formato: 'PDF', tamano: '1.8 MB',
    url: '#recursos/protocolo-emergencias.pdf' },

  { id: 'doc-05', tipo: 'documento',
    titulo: 'Plan de acción para árboles patrimoniales 2025-2030',
    descripcion: 'Estrategia integral de identificación, valoración, protección y monitoreo de ejemplares patrimoniales. Incluye lineamientos operativos DGSANPAVA.',
    autor: 'SEDEMA', fecha: '2025', formato: 'PDF', tamano: '3.6 MB',
    url: '#recursos/plan-patrimoniales.pdf', destacado: true },

  { id: 'doc-06', tipo: 'documento',
    titulo: 'Lineamientos técnicos para restitución arbórea',
    descripcion: 'Complemento operativo de la NADF-001-RNAT-2015 sobre criterios de restitución física, económica y equivalente en distintos tipos de intervención.',
    autor: 'SEDEMA · DGEIRA', fecha: '2023', formato: 'PDF', tamano: '1.2 MB',
    url: '#recursos/lineamientos-restitucion.pdf' },

  // ===== LIBROS Y PUBLICACIONES =====
  { id: 'lib-01', tipo: 'libro',
    titulo: 'Manual del arbolado urbano de la Ciudad de México',
    descripcion: 'Obra de referencia técnica con 240 páginas sobre selección de especies, plantación, mantenimiento, poda, derribo, trasplante y valoración del arbolado urbano.',
    autor: 'SEDEMA · UNAM', fecha: '2022', formato: 'PDF', tamano: '18.4 MB · 240 p.',
    url: '#recursos/manual-arbolado.pdf', destacado: true },

  { id: 'lib-02', tipo: 'libro',
    titulo: 'Los ahuehuetes: memoria arbórea de la Cuenca de México',
    descripcion: 'Recorrido histórico, botánico y cultural por la especie insignia del Valle de México. Publicación conjunta con el Instituto de Biología UNAM.',
    autor: 'V. Sánchez Cordero et al.', fecha: '2021', formato: 'PDF', tamano: '12.6 MB · 186 p.',
    url: '#recursos/libro-ahuehuetes.pdf' },

  { id: 'lib-03', tipo: 'libro',
    titulo: 'Guía botánica del Valle de México',
    descripcion: 'Catálogo ilustrado de 350 especies arbóreas y arbustivas nativas y naturalizadas del Valle de México, con claves de identificación de campo.',
    autor: 'INECOL', fecha: '2020', formato: 'PDF', tamano: '25.1 MB · 412 p.',
    url: '#recursos/guia-botanica-valle.pdf' },

  { id: 'lib-04', tipo: 'libro',
    titulo: 'Árboles patrimoniales: guardianes del tiempo',
    descripcion: 'Publicación conmemorativa con fotografía documental y ensayos sobre los ejemplares reconocidos como Patrimonio Natural de la CDMX.',
    autor: 'SEDEMA · Secretaría de Cultura', fecha: '2025', formato: 'PDF', tamano: '32.8 MB · 168 p.',
    url: '#recursos/libro-guardianes-tiempo.pdf', destacado: true },

  { id: 'lib-05', tipo: 'libro',
    titulo: 'Infraestructura verde para ciudades resilientes',
    descripcion: 'Marco conceptual y casos de aplicación de infraestructura verde en gestión hídrica, mitigación de isla de calor y biodiversidad urbana.',
    autor: 'C. Ballinas · SEDEMA', fecha: '2023', formato: 'PDF', tamano: '9.4 MB · 128 p.',
    url: '#recursos/infraestructura-verde.pdf' },

  // ===== GUÍAS PRÁCTICAS =====
  { id: 'gui-01', tipo: 'guia',
    titulo: 'Guía ciudadana: ¿A quién acudir por un árbol?',
    descripcion: 'Flujograma imprimible que orienta a la ciudadanía sobre qué autoridad atiende cada situación de arbolado urbano.',
    autor: 'SEDEMA', fecha: '2025', formato: 'PDF', tamano: '640 KB · 4 p.',
    url: '#recursos/guia-a-quien-acudir.pdf' },

  { id: 'gui-02', tipo: 'guia',
    titulo: 'Cómo presentar una denuncia ambiental ante la PAOT',
    descripcion: 'Instructivo paso a paso con capturas de pantalla del portal de denuncia y el formato oficial. Incluye ejemplos.',
    autor: 'PAOT', fecha: '2024', formato: 'PDF', tamano: '1.1 MB · 12 p.',
    url: '#recursos/guia-denuncia-paot.pdf' },

  { id: 'gui-03', tipo: 'guia',
    titulo: 'Guía para proponer un árbol patrimonial',
    descripcion: 'Requisitos, formato y proceso para nominar un ejemplar al registro de árboles patrimoniales de la CDMX. Incluye formulario editable.',
    autor: 'SEDEMA · DGSANPAVA', fecha: '2025', formato: 'PDF', tamano: '2.3 MB · 16 p.',
    url: '#recursos/guia-proponer-patrimonial.pdf', destacado: true },

  { id: 'gui-04', tipo: 'guia',
    titulo: 'Cómo identificar plagas comunes del arbolado urbano',
    descripcion: 'Catálogo visual de 20 plagas y enfermedades más comunes en el Valle de México, con síntomas, foto y qué hacer.',
    autor: 'SEDEMA · CONAFOR', fecha: '2024', formato: 'PDF', tamano: '5.7 MB · 32 p.',
    url: '#recursos/guia-plagas.pdf' },

  { id: 'gui-05', tipo: 'guia',
    titulo: 'Requisitos para acreditación de dictaminador y podador',
    descripcion: 'Guía completa con requisitos, plazos, costos, formatos y proceso para obtener la acreditación SEDEMA como profesional del arbolado.',
    autor: 'SEDEMA · DGSANPAVA', fecha: '2025', formato: 'PDF', tamano: '1.4 MB · 20 p.',
    url: '#recursos/guia-acreditacion.pdf' },

  { id: 'gui-06', tipo: 'guia',
    titulo: 'Especies recomendadas para plantación urbana',
    descripcion: 'Selección de 45 especies nativas y naturalizadas idóneas para banquetas, camellones, parques y jardines de la CDMX según microclima.',
    autor: 'SEDEMA', fecha: '2023', formato: 'PDF', tamano: '3.8 MB · 48 p.',
    url: '#recursos/especies-recomendadas.pdf' },

  // ===== LISTADOS Y BASES DE DATOS =====
  { id: 'lst-01', tipo: 'listado',
    titulo: 'Padrón oficial de dictaminadores acreditados',
    descripcion: 'Registro público actualizado de personas físicas acreditadas por SEDEMA para emitir dictamen técnico de arbolado. Actualización mensual.',
    autor: 'SEDEMA · DGSANPAVA', fecha: 'Actualizado 08/2026', formato: 'CSV / XLSX', tamano: '124 KB',
    url: '#recursos/padron-dictaminadores.csv', destacado: true },

  { id: 'lst-02', tipo: 'listado',
    titulo: 'Padrón oficial de podadores acreditados',
    descripcion: 'Registro público actualizado de personas físicas acreditadas por SEDEMA para ejecutar poda, derribo, trasplante y restitución. Actualización mensual.',
    autor: 'SEDEMA · DGSANPAVA', fecha: 'Actualizado 08/2026', formato: 'CSV / XLSX', tamano: '198 KB',
    url: '#recursos/padron-podadores.csv' },

  { id: 'lst-03', tipo: 'listado',
    titulo: 'Registro de árboles patrimoniales CDMX',
    descripcion: 'Base de datos abierta de los ejemplares declarados como Patrimonio Natural de la CDMX, con coordenadas, especie, alcaldía y datos técnicos.',
    autor: 'SEDEMA · DGSANPAVA', fecha: 'Actualizado 08/2026', formato: 'CSV / GeoJSON', tamano: '68 KB',
    url: '#recursos/patrimoniales.csv' },

  { id: 'lst-04', tipo: 'listado',
    titulo: 'Directorio institucional de arbolado urbano',
    descripcion: 'Contactos actualizados de SEDEMA, 16 alcaldías, PAOT, Bomberos, SGIRPC y otras autoridades conexas. Incluye teléfonos, correos y sedes.',
    autor: 'SEDEMA', fecha: 'Actualizado 08/2026', formato: 'PDF / XLSX', tamano: '520 KB',
    url: '#recursos/directorio.pdf' },

  { id: 'lst-05', tipo: 'listado',
    titulo: 'Tabla de sanciones vigentes por infracciones al arbolado',
    descripcion: 'Cuadro operativo con conductas sancionables, montos actualizados en UMA 2026 y fundamento legal específico.',
    autor: 'SEDEMA · Jurídico', fecha: '2026', formato: 'PDF', tamano: '380 KB',
    url: '#recursos/tabla-sanciones.pdf' },

  // ===== FOTOGRAFÍAS =====
  { id: 'fot-01', tipo: 'fotografia',
    titulo: 'Galería · Ahuehuetes patrimoniales de la CDMX',
    descripcion: 'Colección fotográfica documental de los 13 ejemplares reconocidos como Patrimonio Natural. Alta resolución, uso libre con atribución.',
    autor: 'SEDEMA · Comunicación Social', fecha: '2025', formato: 'JPG (ZIP)', tamano: '85 MB · 47 fotos',
    url: '#recursos/fotos-patrimoniales.zip', destacado: true },

  { id: 'fot-02', tipo: 'fotografia',
    titulo: 'Galería · Áreas Naturales Protegidas de la CDMX',
    descripcion: 'Recorrido visual por las ANP locales y federales dentro de la CDMX: Chapultepec, Xochimilco, Ajusco, Desierto de los Leones, entre otras.',
    autor: 'SEDEMA · DGSANPAVA', fecha: '2024', formato: 'JPG (ZIP)', tamano: '142 MB · 89 fotos',
    url: '#recursos/fotos-anp.zip' },

  { id: 'fot-03', tipo: 'fotografia',
    titulo: 'Galería · Bosque de Chapultepec',
    descripcion: 'Registro fotográfico contemporáneo del arbolado emblemático de las cuatro secciones del Bosque de Chapultepec.',
    autor: 'Dirección Ejecutiva del Bosque', fecha: '2025', formato: 'JPG (ZIP)', tamano: '96 MB · 54 fotos',
    url: '#recursos/fotos-chapultepec.zip' },

  { id: 'fot-04', tipo: 'fotografia',
    titulo: 'Antes y después · Intervenciones al arbolado',
    descripcion: 'Serie comparativa que documenta el estado previo y posterior de intervenciones de poda, saneamiento y trasplante realizadas 2023–2025.',
    autor: 'SEDEMA', fecha: '2025', formato: 'JPG (ZIP)', tamano: '34 MB · 28 pares',
    url: '#recursos/fotos-antes-despues.zip' },

  // ===== VIDEOS =====
  { id: 'vid-01', tipo: 'video',
    titulo: 'Cómo se realiza una poda técnicamente correcta',
    descripcion: 'Tutorial de 8 minutos con demostración práctica de las técnicas correctas de poda de mantenimiento y sanitaria, conforme a la NADF-001.',
    autor: 'SEDEMA · DGSANPAVA', fecha: '2024', formato: 'MP4 · 1080p', tamano: '245 MB · 8:12 min',
    url: '#recursos/video-poda-correcta.mp4', destacado: true },

  { id: 'vid-02', tipo: 'video',
    titulo: 'Documental "Guardianes del tiempo"',
    descripcion: 'Documental de 22 minutos sobre los árboles patrimoniales de la Ciudad de México, con testimonios de vecinos, historiadores y biólogos.',
    autor: 'SEDEMA · Secretaría de Cultura', fecha: '2025', formato: 'MP4 · 4K', tamano: '1.2 GB · 22:35 min',
    url: '#recursos/documental-guardianes.mp4', destacado: true },

  { id: 'vid-03', tipo: 'video',
    titulo: 'Recorrido por el Bosque de Chapultepec',
    descripcion: 'Visita guiada al arbolado histórico de las secciones I y II del Bosque de Chapultepec, con narración experta.',
    autor: 'Dirección del Bosque', fecha: '2024', formato: 'MP4 · 1080p', tamano: '480 MB · 15:20 min',
    url: '#recursos/video-chapultepec.mp4' },

  { id: 'vid-04', tipo: 'video',
    titulo: 'Cómo identificar especies del arbolado urbano CDMX',
    descripcion: 'Serie de 6 cápsulas breves (2-3 min cada una) sobre identificación de las especies más comunes: ahuehuete, jacaranda, fresno, laurel de la India y más.',
    autor: 'SEDEMA · Educación Ambiental', fecha: '2024', formato: 'MP4 · 1080p', tamano: '380 MB · 15 min total',
    url: '#recursos/videos-identificacion.zip' },

  { id: 'vid-05', tipo: 'video',
    titulo: 'Testimonios: vecinos que protegen sus árboles',
    descripcion: 'Cuatro historias breves de colectivos vecinales que han impulsado el reconocimiento patrimonial o la protección de árboles emblemáticos.',
    autor: 'SEDEMA', fecha: '2025', formato: 'MP4 · 1080p', tamano: '320 MB · 12:40 min',
    url: '#recursos/video-testimonios.mp4' }
];

// ==========================================================
// RENDERIZADO
// ==========================================================

function renderRecursos(tipoFiltro = 'todos', busqueda = '') {
  const contenedor = document.getElementById('recursos-grid');
  if (!contenedor) return;

  let lista = RECURSOS;
  if (tipoFiltro !== 'todos') lista = lista.filter(r => r.tipo === tipoFiltro);
  if (busqueda) {
    const q = busqueda.toLowerCase();
    lista = lista.filter(r =>
      r.titulo.toLowerCase().includes(q) ||
      r.descripcion.toLowerCase().includes(q) ||
      r.autor.toLowerCase().includes(q)
    );
  }

  if (lista.length === 0) {
    contenedor.innerHTML = '<p class="recursos-vacio">No se encontraron recursos con esos criterios. Intenta con otra palabra o cambia el filtro.</p>';
  } else {
    contenedor.innerHTML = lista.map(r => {
      const meta = RECURSOS_TIPOS[r.tipo];
      return `
        <article class="recurso-card recurso-${meta.color} ${r.destacado ? 'recurso-destacado' : ''}">
          ${r.destacado ? '<span class="recurso-destacado-badge">Destacado</span>' : ''}
          <div class="recurso-icono-wrap">
            <span class="recurso-icono">${meta.icono}</span>
            <span class="recurso-tipo">${meta.label}</span>
          </div>
          <h3 class="recurso-titulo">${r.titulo}</h3>
          <p class="recurso-descripcion">${r.descripcion}</p>
          <div class="recurso-meta">
            <span class="recurso-meta-item"><strong>Autor:</strong> ${r.autor}</span>
            <span class="recurso-meta-item"><strong>Fecha:</strong> ${r.fecha}</span>
            <span class="recurso-meta-item"><strong>Formato:</strong> ${r.formato}</span>
            <span class="recurso-meta-item"><strong>Tamaño:</strong> ${r.tamano}</span>
          </div>
          <div class="recurso-acciones">
            <a href="${r.url}" class="recurso-btn recurso-btn-principal" onclick="alert('Recurso demo. En producción se descargará el archivo real.'); return false;">
              ${r.tipo === 'video' ? '▶ Reproducir' : r.tipo === 'fotografia' ? '↓ Descargar ZIP' : '↓ Descargar'}
            </a>
            <button class="recurso-btn recurso-btn-sec" onclick="verDetalleRecurso('${r.id}')">Detalles</button>
          </div>
        </article>
      `;
    }).join('');
  }

  const contador = document.getElementById('recursos-contador');
  if (contador) contador.textContent = `Mostrando ${lista.length} de ${RECURSOS.length} recursos`;
}

function verDetalleRecurso(id) {
  const r = RECURSOS.find(x => x.id === id);
  if (!r) return;
  const meta = RECURSOS_TIPOS[r.tipo];
  alert(`${meta.label}\n\n${r.titulo}\n\n${r.descripcion}\n\nAutor: ${r.autor}\nFecha: ${r.fecha}\nFormato: ${r.formato}\nTamaño: ${r.tamano}\n\n(Vista detalle demo. En producción abrirá modal o página dedicada.)`);
}

function limpiarBusquedaRecursos() {
  const inp = document.getElementById('recursos-busqueda');
  if (inp) inp.value = '';
  renderRecursos(tipoActivoActual, '');
}

let tipoActivoActual = 'todos';

document.addEventListener('DOMContentLoaded', function() {
  renderRecursos();

  document.querySelectorAll('.recursos-filtro-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.recursos-filtro-btn').forEach(b => b.classList.remove('activo'));
      this.classList.add('activo');
      tipoActivoActual = this.dataset.tipo;
      const q = document.getElementById('recursos-busqueda').value.trim();
      renderRecursos(tipoActivoActual, q);
    });
  });

  const inp = document.getElementById('recursos-busqueda');
  if (inp) {
    inp.addEventListener('input', function() {
      renderRecursos(tipoActivoActual, this.value.trim());
    });
  }
});
