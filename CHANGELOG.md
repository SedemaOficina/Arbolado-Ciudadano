# CHANGELOG

Historial de versiones del Micrositio de Arbolado Urbano SEDEMA CDMX.

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

---

## 23 de agosto de 2026 · Dirección visual de lámina botánica

El sitio cambió de lenguaje. Deja el blanco con tarjetas flotantes y adopta
papel, tinta y herbario, con el guinda y el dorado en su papel de firma
institucional.

- Se incorporaron Cormorant Garamond para títulos e índices y Spectral para el
  texto de lectura, servidas desde el propio repositorio. Roboto se conserva para
  los controles de formulario y los datos de contacto, donde una sans se reconoce
  antes como algo que se usa.
- La escala neutra completa se reencauzó a papel y tinta: 2,300 usos de color en
  el sitio cambiaron de temperatura sin tocar una sola página a mano.
- Cada sección tiene su lámina: un árbol dibujado por código sobre canvas, con
  una especie distinta por página. Donde había un espacio de fotografía pendiente,
  la lámina lo ocupa; donde no lo hay, entra como filigrana discreta al margen.
  La página de palmeras se dejó sin lámina: la silueta de una palmera no se
  construye con este trazo y una ilustración falsa desinforma.
- Se añadió una pleca institucional de guinda y dorado, y la navegación pasó a
  versalitas sobre papel.
- Los marcadores de contenido pendiente se calmaron a un tramado de arena y
  tierra, conservando el sello amarillo. Dejaron de ser lo más visible de cada
  página.

Verificación de lectura ciudadana sobre las trece páginas publicables: sin
errores de consola, sin recursos faltantes, sin desbordamiento horizontal y sin
un solo par de colores por debajo del contraste AA. El piso de texto de lectura
subió a 17 píxeles y el dorado dejó de usarse como color tipográfico.

## 23 de agosto de 2026 · Análisis territorial

Se añadió `docs/territorio.html`, esqueleto anotado de la sección de análisis
territorial del arbolado, con la tesis de que la copa no está repartida pareja
entre las dieciséis alcaldías. La página lleva `noindex` y aviso visible de
construcción: no debe enlazarse desde la navegación pública hasta contar con
datos validados y metodología declarada.


## 22 de agosto de 2026 · Compilación a HTML publicable

El sitio dejó de depender del runtime de Claude Design. Las páginas se
publican como HTML, CSS y JavaScript estándar.

- Se transpilaron las quince páginas: se expandieron los `sc-for` con datos
  reales, se resolvieron las expresiones `{{ }}`, se inlinaron los
  componentes compartidos de cabecera, pie y utilidad, y se eliminaron los
  envoltorios `x-dc`, `helmet` y `dc-import`.
- Se corrigieron los 74 enlaces internos que apuntaban a archivos `.dc.html`
  inexistentes y las rutas relativas de las páginas en subcarpeta.
- Se consolidó el CSS en `assets/css/tokens.css` y `assets/css/sitio.css`,
  con la ruta de las tipografías Roboto y Cabin corregida.
- La interactividad (buscador, carrusel, árbol de decisiones, filtros,
  acordeones y verificador de padrón) se conserva con Alpine.js sobre un
  prerenderizado estático que funciona sin JavaScript.
- Se añadieron `<title>`, meta description, canonical y Open Graph por
  página, además de `robots.txt`, `sitemap.xml`, `404.html` y `.nojekyll`.
- Los logotipos y fotografías faltantes se marcan con el sistema visual
  amarillo "Falta el dato".
- Se incorporó `herramientas/` con el compilador para poder regenerar el
  sitio si se vuelve a editar en Claude Design.


## [21.0.0] · 2026-08-18 · Última versión validada

### Cambios estructurales
- Migración de Patrimoniales a subdominio autónomo Guardianes del tiempo
- Nueva sección Programas que agrupa 5 iniciativas institucionales
- Sección La Política reforzada con visión sexenal, metas 2024-2030, indicadores

### Limpieza editorial
- Eliminadas etiquetas de organización interna: `SECCIÓN 0X`, `SUBSECCIÓN X`, `PERFIL X`, `PROGRAMA VIGENTE`
- Eliminadas eyebrows redundantes: `INFORMACIÓN`, `ENTRA POR TU SITUACIÓN`, `CONTENIDOS DEL SITIO`
- Tabs de HAZLO renombradas de "Diez casos" a "Casos cotidianos" y "Veinte preguntas" a "Preguntas frecuentes"

### Optimización de flujos
- Los 5 perfiles ciudadanos ahora tienen destino diferenciado (antes 4 de 5 iban al mismo lugar)
- Perfil 1 → emergencias, Perfil 2 → hazlo#caso-construccion, Perfil 3 → hazlo#caso-jardin-privado, Perfil 4 → responsabilidades#denunciar, Perfil 5 → guardianes.sedema

### Contenido nuevo
- Bloque completo de denuncia PAOT en Responsabilidades ("Las dos preguntas + Las tres vías")
- Sistema visual "Falta el dato" en amarillo para señalar contenido pendiente
- Página PENDIENTES interna con backlog de trabajo

### Consolidación
- Verificación de acreditación consolidada (antes explicada en 5 páginas)
- Régimen especial de patrimoniales consolidado (antes en 2 páginas)
- Restitución arbórea consolidada (antes en 2 páginas)

---

## [20.0.0] · 2026-08-15

### Reorganización arquitectónica mayor
- Reducción de 11 módulos a 7 secciones organizadas por tarea ciudadana
- Directorio rescatado como sección autónoma por criticidad operativa
- LA POLÍTICA como sección nueva (difusión + recursos + política sexenal)

### Aplicación del Design System oficial SEDEMA
- Paleta: guinda `#9D2148`, dorado `#B28E5C`, gris `#55585A`
- Tipografía: Roboto + Cabin
- Tokens en `_ds/sedema-design-system-*`

---

## [19.0.0] · 2026-08-10

### Primera versión con 11 módulos
- Estructura basada en módulos temáticos
- Proyecto hermano Guardianes del tiempo como carpeta interna

---

## Notas de versionado

- **Mayor (X.0.0):** cambios arquitectónicos o de sistema de diseño
- **Menor (0.X.0):** nuevas páginas o funcionalidades
- **Parche (0.0.X):** correcciones de contenido o bugs menores
