# Pendientes para Publicación

Documento vivo · Actualizar conforme se resuelven pendientes.

Última actualización: 24 de agosto de 2026

---

## Críticos · Bloquean publicación

### Contenido

- [ ] Los 10 casos cotidianos con respuestas, fundamento y contactos
- [ ] Las 20 preguntas frecuentes con respuestas
- [ ] Directorio completo de contactos institucionales verificados
- [ ] Padrón oficial de dictaminadores y podadores acreditados
- [ ] Visión sexenal definitiva
- [ ] 4-6 metas 2024-2030 con línea base y objetivo
- [ ] Indicadores de avance del programa de reforestación

### Material gráfico

Todo espacio sin material real está marcado en el sitio con el sistema
visual amarillo "Falta el dato". No debe publicarse con estos marcadores
visibles.

- [ ] Fotografías institucionales reales. La imagen principal de cada página la
      ocupa hoy una lámina botánica generada por código; en cuanto llegue la
      fotografía real de esa sección, sustituye a la lámina. Los demás espacios
      siguen marcados en amarillo.
- [ ] Cada foto con crédito completo (autor, fecha, lugar)
- [ ] Logotipos institucionales. El sitio referencia estos archivos y hoy
      muestra marcadores generados en su lugar:

  | Archivo esperado | Dónde se usa |
  |---|---|
  | `docs/assets/img/logos/firma-sedema-rgb.svg` | Cabecera de todas las páginas |
  | `docs/assets/img/logos/paot.svg` | Responsabilidades · PAOT |
  | `docs/assets/img/logos/bomberos.svg` | Responsabilidades · Bomberos |
  | `docs/assets/img/logos/fiscalia.svg` | Responsabilidades · Fiscalía Ambiental |
  | `docs/assets/img/logos/ssc.svg` | Responsabilidades · Seguridad Ciudadana |
  | `docs/assets/img/logos/favicon.svg` | Ícono de pestaña (hay uno provisional) |

  Basta sustituir cada archivo conservando el nombre. Si el material llega
  en JPG o PNG, hay que actualizar además la extensión en
  `herramientas/compilar.mjs` y recompilar.

### Técnicos

- [x] URL definitiva del sitio de árboles patrimoniales · 23 ago 2026
      https://sedemaoficina.github.io/arboles-patrimoniales
- [ ] **Validar el fundamento de los árboles patrimoniales.** La Ley Ambiental de
      la Ciudad de México, vigente desde el 19 de julio de 2024, ya no contiene
      ninguna disposición sobre árboles patrimoniales: el antiguo artículo 118 bis
      no tiene sustituto. Cuatro fundamentos del sitio quedaron marcados en
      amarillo. Confirmar el artículo 55 de la Ley de Patrimonio Cultural, Natural
      y Biocultural, que no obra en los archivos del proyecto, y con eso cerrar
      también la contradicción con el sitio de patrimoniales.
- [ ] **Validación jurídica del cambio de fundamentos.** El 24 de agosto se
      sustituyeron cuarenta y dos citas de la ley abrogada. Las mecánicas están
      verificadas contra el texto vigente; conviene que el área jurídica revise
      las que cambiaron de artículo: 9 y 10 por 7.º y 8.º, y el antiguo 118
      fracción III por los artículos 106, 109 y 112.
- [ ] **Alinear competencias con el sitio de patrimoniales.** Ese sitio indica que
      la solicitud se presenta ante la Secretaría de Cultura, con fundamento en el
      artículo 55 de la Ley de Patrimonio Cultural, Natural y Biocultural, y no
      ante la Secretaría del Medio Ambiente. Este micrositio citaba el artículo
      118 bis de la Ley Ambiental y remitía a atención ciudadana de SEDEMA. Se
      corrigió el texto para no afirmar la autoridad equivocada, pero **falta
      verificar cuál es el circuito correcto y dejar los dos sitios diciendo lo
      mismo**.
- [ ] Revisar la cifra de 29 ejemplares patrimoniales que aparece en la ficha del
      programa: no se pudo confirmar contra el registro publicado.
- [ ] Verificar anclas dinámicas de los casos en hazlo
- [x] Meta descriptions por página (SEO) · 22 ago 2026
- [x] Titles descriptivos por página · 22 ago 2026
- [x] Compilación a HTML puro sin runtime de Claude Design · 22 ago 2026
- [x] `robots.txt`, `sitemap.xml`, `404.html` y `.nojekyll` · 22 ago 2026
- [ ] Vendorizar Alpine.js en `assets/js/` si se decide eliminar la
      dependencia del CDN jsdelivr
- [ ] Sustituir el padrón de demostración del verificador por la consulta
      al sistema real de SEDEMA (hoy son tres registros de ejemplo)

### Gobernanza

- [ ] Autorización de la Dirección de Identidad Gráfica GCDMX
  (correo: autorizacionimagen@cdmx.gob.mx)
- [ ] Validación editorial interna
- [ ] Verificación jurídica de citas normativas

---

## Muy recomendados · Calidad de producto

### Testing

- [ ] Testing con 25 usuarios reales (5 por perfil ciudadano)
- [ ] Sesiones de 20 minutos con protocolo definido
- [ ] Ajustes basados en hallazgos

### Accesibilidad

- [ ] Verificación de contraste AA
- [ ] Focus states visibles con teclado
- [ ] Semántica HTML5 correcta (nav, main, article, aside)
- [ ] Screen reader testing con VoiceOver o NVDA
- [ ] Etiquetas ARIA donde corresponda

### Responsive

- [ ] Prueba en móvil real 320px
- [ ] Tablas grandes verificadas (matriz competencias, niveles de riesgo, metas)
- [ ] Menú móvil funcional

### Analytics

- [ ] Google Analytics 4 o Matomo configurado
- [ ] Eventos definidos y programados:
  - Click en 911 desde cada página
  - Click por perfil ciudadano
  - Click "Verificar acreditación"
  - Click "Ir al sitio de patrimoniales"
  - Click en cada caso

### Schema.org

- [ ] Marcado JSON-LD LocalGovernment en portada
- [ ] Marcado por dependencia (sedes, teléfonos, horarios)

---

## Nice to have · Mejoras futuras

- [ ] Buscador global del sitio (en cabecera)
- [ ] Modo lectura para páginas largas
- [ ] Descarga PDF de fichas de trámites
- [ ] Multi-idioma (nahuatl, inglés)
- [ ] Chat bot de orientación básica
- [ ] Integración con SUAC (Sistema Único de Atención Ciudadana)

---

## Paleta ampliada · pendientes abiertos (24 de agosto de 2026)

- [x] Banda honda en las catorce páginas con contenido, con tratamiento oscuro
      de campos, filtros, acordeones y foco de teclado.
- [ ] En `programas.html` la banda queda al final de la página, junto a la tira
      de «¿Te sirvió esta página?» y al pie oscuro. Valorar si conviene moverla
      a la mitad de la página.
- [ ] Los sellos amarillos «Falta el dato» dentro de la banda oscura son muy
      luminosos. Revisar cuando lleguen las fotografías institucionales.
- [ ] Revisar con la Dirección de Comunicación que el uso del guinda quede
      acotado a cabecera, pie, botón primario y navegación activa.
- [ ] Confirmar que el rojo `#B3261E` no aparece en ningún contenido de sanciones.

