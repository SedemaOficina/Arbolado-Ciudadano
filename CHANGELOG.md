# CHANGELOG

Historial de versiones del Micrositio de Arbolado Urbano SEDEMA CDMX.

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

---

## 24 de agosto de 2026 · El sitio citaba una ley abrogada

Las quince páginas fundaban su contenido jurídico en la Ley Ambiental de
Protección a la Tierra en el Distrito Federal. El Decreto que expide la Ley
Ambiental de la Ciudad de México, publicado en la Gaceta Oficial el 18 de julio
de 2024 con última reforma del 24 de diciembre de 2025, la abroga en su artículo
TRANSITORIO TERCERO. Eran cuarenta y dos citas en doce páginas.

Un dato revelador del descuido: el enlace del pie ya apuntaba al ancla de la ley
vigente, pero el texto visible nombraba la abrogada.

- **Las citas vivían en dos capas.** Además del HTML prerenderizado, las fichas
  de trámite, los casos cotidianos y las preguntas frecuentes construyen su
  fundamento en `docs/assets/js/sitio.js` a partir de una constante `LEY`. Se
  corrigieron las dos capas; de otro modo Alpine habría repuesto el texto viejo
  al hidratar.
- **Veintinueve citas eran mecánicas.** El capítulo de arbolado conservó la
  numeración: los artículos 106, 108, 109, 111, 112, 121 y 136, y también el 7.º,
  el 18 y el 34, dicen lo mismo con el mismo número en la ley vigente. Solo
  cambió el nombre del ordenamiento.
- **Los artículos 9 y 10 sí cambiaron.** Las atribuciones de la Secretaría están
  ahora en el artículo 7.º y las de las Alcaldías en el 8.º. Tres citas
  corregidas.
- **El artículo 118 fracción III desapareció.** El 118 vigente regula el
  establecimiento de Áreas de Valor Ambiental. La obligación de contar con
  autorización previa quedó referida al artículo 106; la restitución máxima y la
  equiparación a derribo de todo acto que provoque la muerte del árbol, al 109; y
  la responsabilidad penal, al 112.
- **La cita de la portada era literal y ya no existía.** Se sustituyó por el
  texto literal del artículo 106, párrafo tercero, de la ley vigente.
- **La multa estaba mal acotada.** La respuesta decía «hasta cien mil veces la
  unidad de medida» sin condición. El artículo 304 fracción I fija ese rango solo
  para suelo de conservación y áreas de valor ambiental; en los demás casos
  aplica el artículo 305, de mil a diez mil. La respuesta y su fundamento se
  precisaron.
- **Cuatro citas quedaron marcadas en amarillo.** La ley vigente ya no regula los
  árboles patrimoniales, así que el fundamento del artículo 118 bis no tiene
  sustituto en este ordenamiento. Se marcaron con el sistema `dato-pendiente` en
  lugar de dejar publicada una cita equivocada. La vía probable es la Ley de
  Patrimonio Cultural, Natural y Biocultural, artículo 55, ante la Secretaría de
  Cultura, lo que además apunta a resolver la contradicción abierta con el sitio
  de árboles patrimoniales.
- **Lo que no cambia.** El TRANSITORIO SEXTO mantiene vigentes los reglamentos de
  la ley abrogada en lo que no se opongan, y la NADF-001-RNAT-2015 no resulta
  afectada. Esas citas se conservan.

Verificación en Chromium sin cabeza con Alpine servido en local, sobre las trece
páginas con contenido: cero menciones a la ley abrogada, cero referencias a los
artículos 118, 112 y 304 en su forma anterior, sin errores de página ni de
consola y con los cuatro marcadores amarillos renderizando como HTML y no como
texto escapado.

---

## 24 de agosto de 2026 · Paleta ampliada y acento por módulo

Las quince páginas se veían iguales. La causa no era falta de matices: el guinda
institucional teñía novecientos treinta y siete titulares y enlaces, y los siete
colores de la paleta ocupaban casi la misma banda de luminosidad sobre un único
fondo crema. No había rango de valor, contrapunto frío ni diferencia entre un
módulo y otro.

- **Archivo nuevo `docs/assets/css/paleta.css`**, cargado después de `sitio.css`.
  Añade dieciséis valores a la paleta —cinco verdes, cuatro tierras, el agua como
  único tono frío, y guinda hondo, dorado hondo y dorado claro en la capa
  institucional— sin retirar ninguno de los existentes.
- **El guinda vuelve a su oficio.** Queda reservado a la cabecera, al pie, al
  botón primario y a la sección activa de la navegación.
- **Titular a dos tintas.** Dentro de `<main>` el título va en tinta y la
  cursiva lleva el acento del módulo. Los enlaces, las cifras y las etiquetas
  que antes eran guinda también toman el acento, de modo que el color sigue
  presente sin volver a teñir la página entera de un solo tono.
- **Un acento por módulo.** Cada página declara su clase en el `<body>`
  (`m-inicio`, `m-hazlo`, `m-competencias`, `m-acreditate`, `m-emergencias`,
  `m-programas`, `m-reforestacion`, `m-viveros`, `m-inventario`, `m-palmeras`,
  `m-patrimoniales`, `m-politica`, `m-directorio`, `m-territorio`) y hereda
  `--acento` y `--acento-suave`.
- **El rojo deja de compartirse.** `#B3261E` no es acento de ninguna página:
  vive solo en el bloque 911 y en los avisos de riesgo inmediato. Los avisos
  «Si hay riesgo ahora» de `hazlo` y `responsabilidades`, que estaban en guinda,
  pasaron a rojo. La página de emergencias titula en guinda hondo `#6B1730`
  —autoridad, no alarma— para que el rojo del 911 no compita con nada.
- **Banda honda.** Componente `.banda-honda` aplicado a una sección por página en
  las catorce páginas con contenido, para romper la planicie del crema. Se monta
  sobre la sección existente sin alterar su retícula ni su relleno. Incluye
  tratamiento oscuro verificado de campos, filtros, acordeones, botones,
  encabezados de tabla y foco de teclado; los marcadores numéricos pasan a
  relleno claro con numeral en tinta. En `programas` el aviso «Un programa no
  sustituye el trámite» se promovió de recuadro lateral a banda propia.
- **Contraste verificado.** Todos los acentos superan 4.5:1 sobre los cuatro
  fondos del sitio (papel, blanco de ficha, marfil y gris 10). Salvia, dorado,
  ocre y tierra quedan como decorativos con pareja de texto asignada.
- Verificación en Chromium sin cabeza sobre las quince páginas: sin errores de
  consola propios, sin desbordamiento horizontal y con el acento resolviendo en
  todas.

Verificación adicional con Alpine.js servido en local, para comprobar el
comportamiento de las secciones hidratadas dentro de la banda oscura. El
desbordamiento horizontal de cinco píxeles que reporta el navegador es previo al
cambio: se midió idéntico en el commit anterior.

---

## 23 de agosto de 2026 · Árboles patrimoniales y sistema de formas

Se corrigió el destino del sitio de árboles patrimoniales, que apuntaba a un
subdominio que no existe, y se ajustó el contenido que anunciaba una convocatoria
cerrada.

- Las doce referencias a `guardianesdeltiempo.sedema.cdmx.gob.mx` pasaron a
  `https://sedemaoficina.github.io/arboles-patrimoniales`, y se retiraron los
  marcadores de URL pendiente.
- El aviso de portada anunciaba una convocatoria abierta para proponer ejemplares.
  El registro publica que está cerrada, así que el aviso ahora invita a consultar
  el registro.
- El árbol de decisiones y la pregunta frecuente sobre cómo proponer un ejemplar
  remitían a atención ciudadana de la Secretaría del Medio Ambiente. El registro
  señala que la solicitud se presenta ante la Secretaría de Cultura. El texto se
  corrigió para remitir al sitio de patrimoniales en lugar de afirmar una
  autoridad sin verificar. Queda pendiente alinear ambos sitios.

Se añadió además un sistema de formas, porque la primera versión de la dirección
visual había dejado todo contenedor con la misma silueta rectangular:

- **Sello.** Los tokens numéricos vuelven a ser circulares. La regla que
  neutralizaba esquinas se había llevado también los círculos deliberados.
- **Hoja.** Dos esquinas opuestas abiertas, reservado a la lámina y al botón de
  acción principal. Es la marca de la casa.
- **Etiqueta de herbario.** Esquina cortada en las viñetas de dato, como el cartón
  que cuelga del ejemplar.
- Se retiró la caja completa de los bloques que ya llevan filete lateral, y se
  diferenció el grosor de los filetes según su jerarquía.

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
