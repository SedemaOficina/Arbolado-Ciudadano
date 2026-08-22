# CHANGELOG

Historial de versiones del Micrositio de Arbolado Urbano SEDEMA CDMX.

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

---

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
