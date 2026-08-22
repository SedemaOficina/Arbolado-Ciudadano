# Herramientas de compilación

Convierten el markup exportado por Claude Design a HTML/CSS/JS puro
publicable en GitHub Pages, sin runtime de Design.

## Qué hace cada archivo

| Archivo | Función |
|---|---|
| `compilar.mjs` | Transpilador. Evalúa la lógica `DCLogic`, expande `sc-for` y `sc-if`, resuelve `{{ }}`, inlina los `dc-import`, convierte `style-hover` en clases CSS y `image-slot` en marcadores "Falta el dato". Genera el HTML de cada página y `assets/js/sitio.js`. |
| `metadatos.mjs` | Título y descripción de cada página para el `<head>`. **Este es el archivo que se edita cuando cambia un título o una descripción.** |
| `plantilla-sitio.js` | Adaptador de 90 líneas que sustituye al runtime de Claude Design: reimplementa `DCLogic`, `React.createElement` y conecta las clases `Component` con Alpine. |
| `estilos-sitio.css` | Base del sitio, sistema "Falta el dato", impresión y accesibilidad. Se fusiona con las clases generadas para producir `docs/assets/css/sitio.css`. |
| `tokens/*.css` | Tokens institucionales GCDMX. Se concatenan en `docs/assets/css/tokens.css`. |
| `activos.mjs` | Genera `tokens.css`, `sitio.css`, marcadores de logotipo, `robots.txt`, `sitemap.xml`, `.nojekyll`, `404.html` y la redirección de árboles patrimoniales. |

## Cómo recompilar

Los archivos fuente `.dc.html` de Claude Design se retiraron del repositorio.
Para volver a compilar hay que recuperarlos del historial:

```bash
git worktree add /tmp/fuente 2ddb1cb
node herramientas/compilar.mjs /tmp/fuente/docs docs
node herramientas/activos.mjs herramientas/tokens docs
git worktree remove /tmp/fuente
```

Requiere Node 18 o superior y `npm install` dentro de `herramientas/`
(única dependencia: `parse5`).

## Qué NO editar a mano

- `docs/assets/js/sitio.js` — se regenera completo en cada compilación.
- El bloque final de `docs/assets/css/sitio.css` marcado como generado.

## Arquitectura del resultado

Cada página se publica en dos capas simultáneas:

1. **HTML estático prerenderizado.** Todos los bucles vienen expandidos con
   los datos reales. La página es legible y navegable sin JavaScript, y los
   buscadores la indexan completa.
2. **Hidratación con Alpine.js.** Donde hay estado (buscador, carrusel, árbol
   de decisiones, filtros, acordeones, verificador de padrón) Alpine sustituye
   el prerenderizado por la versión reactiva. Los nodos estáticos llevan el
   atributo `data-pr` y se retiran antes de que Alpine monte.
