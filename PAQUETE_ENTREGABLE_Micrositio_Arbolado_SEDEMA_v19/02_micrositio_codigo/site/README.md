# Micrositio de Arbolado Urbano · SEDEMA CDMX
**Versión 30 · Separación arquitectónica del proyecto Guardianes del tiempo**

Reordenamiento estructural del proyecto tras decisión de convertir el registro de árboles patrimoniales en un sitio autónomo con navegación propia.

## Cambio estructural principal (v30)

El one-pager `modulo-7b-registro.html` se **elimina** del sitio institucional y se convierte en un **proyecto hermano** dentro de la subcarpeta `/guardianes/`, con:
- Su propia navegación (Inicio · Mapa · Ejemplares · Conocimiento · ← Sitio SEDEMA)
- Su propio footer (fondo oscuro con enlace de vuelta al sitio institucional)
- Sus propios assets bajo `/guardianes/assets/`
- Contenido distribuido en **4 subpáginas** navegables

## Arquitectura resultante

```
site/
├── index.html
├── modulo-1-abc.html ... modulo-6-emergencias.html
├── modulo-7-patrimoniales.html    ← Contenido conceptual + ANUNCIO IMPACTANTE al final
├── modulo-8-tramites.html ... modulo-12-recursos.html
├── assets/
│   ├── css/estilo.css              (+180 líneas de .cta-guardianes)
│   └── js/                         (7 archivos institucionales)
│
└── guardianes/                     ← PROYECTO HERMANO AUTÓNOMO
    ├── index.html                  Portada + hero + accesos a secciones
    ├── mapa.html                   Mapa interactivo mejorado
    ├── ejemplares.html             Grid de fichas de los 13 árboles
    ├── conocimiento.html           Criterios + Servicios + Proponer + Régimen
    └── assets/
        ├── css/patrimoniales-editorial.css  (paleta lavanda/coral/guinda)
        ├── js/patrimoniales.js              (~630 líneas · datos + mapa + sidebar)
        └── data/alcaldias.geojson           (636 KB · 16 alcaldías CDMX)
```

## Las 3 mejoras del mapa (`guardianes/mapa.html`)

### 1. Perímetro de alcaldías
Se carga el geojson oficial con `fetch()` y se dibuja con `L.geoJSON()` como capa base:
- Estilo: contorno lavanda semi-transparente (no distrae)
- Hover: se resalta el polígono con opacidad 20%
- Tooltip: muestra nombre de alcaldía y conteo de ejemplares patrimoniales

### 2. Botón "Ubicarme"
Control personalizado de Leaflet posicionado en `topright`:
- Usa Geolocation API del navegador (`enableHighAccuracy: true`, timeout 10s)
- Marcador especial coral con pulso animado en la posición del usuario
- Centrado y zoom automático al obtener ubicación
- Manejo de errores: permiso denegado, timeout, no soportado

### 3. Sidebar dinámico
Panel lateral derecho que cambia según el contexto:
- **Estado inicial:** muestra 9 estadísticas agregadas del registro completo (total, especies, altura apilada, alcaldía top, edad total, servicios ambientales)
- **Al hacer clic en un árbol:** cambia a mostrar datos específicos del ejemplar (foto, nombre, categorías, ubicación, dimensiones, servicios ambientales, historia truncada, coordenadas)
- **Botón "← Volver a estadísticas"** para regresar al estado inicial
- Al seleccionar árbol también centra el mapa y abre el popup

## Anuncio impactante en Módulo 07 institucional

Al final del módulo `modulo-7-patrimoniales.html` se agregó una sección `.cta-guardianes` con:
- **Fondo:** gradiente lavanda-guinda con imagen Unsplash overlay
- **4 mariposas coral animadas** flotando (`@keyframes mariposa-flotar`)
- **Título grande:** "Guardianes del tiempo" en Fraunces
- **Descripción** con el destacado del sitio dedicado
- **Stats mini pill:** 13 ejemplares · 6 alcaldías · 1,200 años de historia
- **Botón dorado grande** con flecha animada al hover
- Apunta a `guardianes/index.html`

## Subpáginas del proyecto Guardianes

| Página | Contenido |
|---|---|
| `index.html` | Hero, ¿Por qué importa?, 3 cards de acceso a secciones, aviso final |
| `mapa.html` | Layout 1.5fr\|1fr con mapa mejorado + sidebar dinámico |
| `ejemplares.html` | Grid de fichas con filtros por categoría (Centenario/Histórico/Notable/Singular) y por especie |
| `conocimiento.html` | 8 criterios + 6 servicios ambientales + 2 vías de propuesta + régimen jurídico reforzado |

## Navegación del proyecto morado

Header sticky con:
- **Logo circular SVG** con gradiente lavanda-guinda
- **Marca:** "Guardianes del tiempo · Árboles Patrimoniales · CDMX"
- **Menú:** Inicio · Mapa · Ejemplares · Conocimiento
- **Enlace de vuelta:** "← Sitio SEDEMA" (separado por borde izquierdo)

Footer oscuro (`#2A1420`) con enlace destacado "← Volver al sitio institucional SEDEMA" en dorado.

## Validación técnica

- **13/13 HTMLs institucionales válidos**
- **4/4 HTMLs guardianes válidos**
- **7/7 JS institucionales válidos**
- **1/1 JS guardianes válido**
- **CSS institucional balanceado** (1171 llaves)
- **0 referencias rotas**
- **Geojson cargado correctamente** (16 alcaldías con propiedad NOMBRE)

## Archivos eliminados en esta versión

- `modulo-7b-registro.html` (sustituido por `/guardianes/` con 4 subpáginas)
- `assets/js/patrimoniales.js` (movido a `/guardianes/assets/js/`)
- `assets/css/patrimoniales-editorial.css` (movido a `/guardianes/assets/css/`)

## Histórico

| Versión | Cambio principal |
|---|---|
| v27 | Nuevo módulo 7B · Registro patrimonial (one-page) |
| v28 | Rediseño editorial del 7B con paleta lavanda/coral |
| v29 | Módulo 12 · Recursos con 31 dummies |
| **v30** | **Separación arquitectónica: /guardianes/ como proyecto hermano con 4 subpáginas, mapa mejorado (perímetro + ubicarme + sidebar dinámico), anuncio impactante en Módulo 07** |

---

Gobierno de la Ciudad de México · Secretaría del Medio Ambiente · 2026
