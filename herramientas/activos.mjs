/* Genera CSS consolidado, marcadores de logotipo, robots, sitemap y páginas sueltas.
   Uso: node herramientas/activos.mjs <dirTokensFuente> <dirSalida> */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TOKENS = process.argv[2];
const SALIDA = process.argv[3];
const AQUI = path.dirname(fileURLToPath(import.meta.url));
const BASE = 'https://sedemaoficina.github.io/Arbolado-Ciudadano/';
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');

const w = (rel, contenido) => {
  const p = path.join(SALIDA, rel);
  fs.mkdirSync(path.dirname(p), {recursive:true});
  fs.writeFileSync(p, contenido);
  console.log('  ✓ ' + rel);
};

/* ---------- tokens.css ---------- */
const orden = ['fonts.css','colors.css','typography.css','spacing.css'];
let tokens = `/* ============================================================
   Arbolado Ciudadano · SEDEMA CDMX
   tokens.css — Identidad institucional GCDMX 2024-2030.
   Archivo único de tokens: color, tipografía, espaciado y fuentes.
   ============================================================ */\n`;
for(const f of orden){
  let c = fs.readFileSync(path.join(TOKENS, f), 'utf8');
  // Corrección: las fuentes viven en ../fonts/ respecto de assets/css/
  c = c.replace(/url\(["']\.\.\/assets\/fonts\//g, 'url("../fonts/');
  tokens += '\n' + c.trim() + '\n';
}
w('assets/css/tokens.css', tokens);

/* ---------- sitio.css ---------- */
const base = fs.readFileSync(path.join(AQUI,'estilos-sitio.css'),'utf8');
const generado = fs.readFileSync(path.join(SALIDA,'assets/css/_generado.css'),'utf8');
w('assets/css/sitio.css', base.trimEnd() + '\n\n/* ============================================================\n   GENERADO POR herramientas/compilar.mjs — no editar a mano\n   ============================================================ */\n' + generado);
fs.unlinkSync(path.join(SALIDA,'assets/css/_generado.css'));

/* ---------- Marcadores de logotipo ---------- */
function marcador(ancho, alto, titulo, archivo){
  const fuente = Math.max(11, Math.round(alto*0.14));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ancho} ${alto}" width="${ancho}" height="${alto}" role="img" aria-label="Logotipo pendiente: ${esc(titulo)}">
  <defs>
    <pattern id="d" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="16" height="16" fill="#FFFAE9"/>
      <rect width="8" height="16" fill="#FEF3C7"/>
    </pattern>
  </defs>
  <rect x="1" y="1" width="${ancho-2}" height="${alto-2}" fill="url(#d)" stroke="#FDC60A" stroke-width="2" stroke-dasharray="7 5"/>
  <text x="${ancho/2}" y="${alto*0.42}" text-anchor="middle" font-family="Cabin, Trebuchet MS, sans-serif" font-size="${fuente}" font-weight="700" letter-spacing="1.6" fill="#1A1A1A">FALTA EL DATO</text>
  <text x="${ancho/2}" y="${alto*0.68}" text-anchor="middle" font-family="Roboto, Arial, sans-serif" font-size="${Math.max(10,fuente-2)}" fill="#55585A">${esc(titulo)}</text>
  <text x="${ancho/2}" y="${alto*0.88}" text-anchor="middle" font-family="Roboto, Arial, sans-serif" font-size="${Math.max(9,fuente-3)}" fill="#8B6F47">${esc(archivo)}</text>
</svg>\n`;
}
const LOGOS = [
  ['firma-sedema-rgb.svg', 460, 120, 'Firma GCDMX · Secretaría del Medio Ambiente'],
  ['paot.svg', 320, 96, 'Procuraduría Ambiental y del Ordenamiento Territorial'],
  ['bomberos.svg', 320, 96, 'Heroico Cuerpo de Bomberos de la CDMX'],
  ['fiscalia.svg', 320, 96, 'Fiscalía General de Justicia de la CDMX'],
  ['ssc.svg', 320, 96, 'Secretaría de Seguridad Ciudadana']
];
for(const [archivo,a,h,titulo] of LOGOS) w('assets/img/logos/' + archivo, marcador(a,h,titulo,archivo));

w('assets/img/logos/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Arbolado Ciudadano SEDEMA">
  <rect width="64" height="64" fill="#9D2148"/>
  <path d="M32 12 L44 34 H36 L44 50 H20 L28 34 H20 Z" fill="#FFFAE9"/>
  <rect x="29" y="46" width="6" height="8" fill="#B28E5C"/>
</svg>\n`);

/* ---------- robots.txt ---------- */
w('robots.txt', `# Arbolado Ciudadano · Secretaría del Medio Ambiente de la Ciudad de México
User-agent: *
Allow: /
Disallow: /interno/
Disallow: /PENDIENTES.html
Disallow: /biblioteca.html
Disallow: /assets/data/

Sitemap: ${BASE}sitemap.xml
`);

/* ---------- sitemap.xml ---------- */
const URLS = [
  ['', '1.0', 'weekly'],
  ['hazlo.html', '0.9', 'monthly'],
  ['responsabilidades.html', '0.9', 'monthly'],
  ['emergencias.html', '0.9', 'monthly'],
  ['programas.html', '0.8', 'monthly'],
  ['directorio.html', '0.8', 'monthly'],
  ['politica.html', '0.7', 'monthly'],
  ['responsabilidades/acreditate.html', '0.6', 'monthly'],
  ['programas/reforestacion.html', '0.6', 'monthly'],
  ['programas/palmeras.html', '0.6', 'monthly'],
  ['programas/inventario.html', '0.6', 'monthly'],
  ['programas/viveros.html', '0.6', 'monthly']
];
const hoy = process.env.FECHA_BUILD || new Date().toISOString().slice(0,10);
w('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(([u,p,f])=>`  <url>
    <loc>${BASE}${u}</loc>
    <lastmod>${hoy}</lastmod>
    <changefreq>${f}</changefreq>
    <priority>${p}</priority>
  </url>`).join('\n')}
</urlset>
`);

/* ---------- .nojekyll ---------- */
w('.nojekyll', '');

/* ---------- Redirección de árboles patrimoniales ---------- */
const DESTINO = 'https://guardianesdeltiempo.sedema.cdmx.gob.mx';
w('programas/patrimoniales.html', `<!DOCTYPE html>
<html lang="es-MX" data-raiz="../">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Árboles patrimoniales · Guardianes del tiempo · SEDEMA CDMX</title>
<meta name="description" content="El sitio de árboles patrimoniales de la Ciudad de México se atiende en Guardianes del tiempo.">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=${DESTINO}">
<link rel="canonical" href="${DESTINO}">
<link rel="icon" href="../assets/img/logos/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="../assets/css/tokens.css">
<link rel="stylesheet" href="../assets/css/sitio.css">
</head>
<body>
<main style="max-width: 42em; margin: 0 auto; padding: clamp(40px, 8vw, 96px) 24px">
  <hr class="ds-pleca-guinda" style="margin: 0 0 28px; width: 80px">
  <h1 style="font-family: var(--font-firma); font-size: clamp(28px, 4vw, 40px); line-height: 1.15; color: var(--guinda-100); margin: 0 0 20px">Los árboles patrimoniales viven en Guardianes del tiempo</h1>
  <p style="font-size: 19px; line-height: 1.6; margin: 0 0 16px">El registro, los criterios y la propuesta de nuevos ejemplares se atienden en un sitio propio de la Secretaría del Medio Ambiente.</p>
  <p style="font-size: 17px; line-height: 1.6; margin: 0 0 28px; color: var(--gris-80)">Si tu navegador no te lleva automáticamente, entra desde este enlace:</p>
  <p style="margin: 0 0 40px"><a href="${DESTINO}" style="display: inline-flex; align-items: center; min-height: 48px; padding: 14px 26px; background: var(--guinda-100); color: var(--blanco); font-size: 18px; font-weight: 700; text-decoration: none; border-radius: var(--radio-1)">Ir a Guardianes del tiempo</a></p>
  <p style="margin: 0; font-size: 16px"><a href="../programas.html">Volver a los programas de arbolado</a></p>
</main>
</body>
</html>
`);

/* ---------- 404 ---------- */
w('404.html', `<!DOCTYPE html>
<html lang="es-MX" data-raiz="">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Página no encontrada · El ABC del arbolado urbano · SEDEMA CDMX</title>
<meta name="robots" content="noindex, follow">
<link rel="icon" href="/Arbolado-Ciudadano/assets/img/logos/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/Arbolado-Ciudadano/assets/css/tokens.css">
<link rel="stylesheet" href="/Arbolado-Ciudadano/assets/css/sitio.css">
</head>
<body>
<main style="max-width: 42em; margin: 0 auto; padding: clamp(40px, 8vw, 96px) 24px">
  <hr class="ds-pleca-guinda" style="margin: 0 0 28px; width: 80px">
  <h1 style="font-family: var(--font-firma); font-size: clamp(28px, 4vw, 40px); line-height: 1.15; color: var(--guinda-100); margin: 0 0 20px">No encontramos esa página</h1>
  <p style="font-size: 19px; line-height: 1.6; margin: 0 0 28px">La dirección cambió o se escribió mal. Estas son las entradas más consultadas del sitio.</p>
  <ul style="list-style: none; margin: 0 0 36px; padding: 0; display: grid; gap: 12px; font-size: 18px">
    <li><a href="/Arbolado-Ciudadano/">Inicio · El ABC del arbolado urbano</a></li>
    <li><a href="/Arbolado-Ciudadano/hazlo.html">Qué necesito hacer</a></li>
    <li><a href="/Arbolado-Ciudadano/emergencias.html">Emergencias y riesgo arbóreo</a></li>
    <li><a href="/Arbolado-Ciudadano/responsabilidades.html">Quién hace qué</a></li>
    <li><a href="/Arbolado-Ciudadano/directorio.html">Directorio institucional</a></li>
  </ul>
  <p style="margin: 0; font-size: 16px; color: var(--gris-80)">Secretaría del Medio Ambiente de la Ciudad de México.</p>
</main>
</body>
</html>
`);
console.log('\nActivos generados.');
