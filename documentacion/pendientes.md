# Pendientes para Publicación

Documento vivo · Actualizar conforme se resuelven pendientes.

Última actualización: 22 de agosto de 2026

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

- [ ] Confirmar que subdominio Guardianes esté montado
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
