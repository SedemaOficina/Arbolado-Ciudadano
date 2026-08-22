# Micrositio de Orientación Ciudadana sobre Arbolado Urbano
## Secretaría del Medio Ambiente · Ciudad de México

Sitio web institucional que orienta a la ciudadanía de la Ciudad de México sobre poda, derribo, trasplante, competencias institucionales, trámites, sanciones, marco normativo y emergencias arbóreas.

---

## Estructura del sitio

Siete secciones organizadas por tarea ciudadana:

| Sección | URL | Función |
|---|---|---|
| Inicio | `/` | Portada con perfiles ciudadanos |
| Qué necesito hacer | `/hazlo.html` | Árbol de decisiones, procedimientos, casos y preguntas |
| Responsabilidades | `/responsabilidades.html` | Matriz de competencias, verificación de acreditaciones, denuncia PAOT |
| Emergencias | `/emergencias.html` | Tres niveles de respuesta (911, alcaldía, SEDEMA) |
| Programas | `/programas.html` | Cinco programas vigentes de arbolado |
| Directorio | `/directorio.html` | Contactos institucionales |
| Política de arbolado | `/politica.html` | Visión sexenal, metas 2024-2030, indicadores |

## Proyecto hermano

**Guardianes del tiempo · Árboles Patrimoniales CDMX**
Sitio dedicado autónomo con identidad diferenciada, alojado en subdominio propio:
`guardianesdeltiempo.sedema.cdmx.gob.mx`

---

## Sistema de diseño

- **Paleta:** guinda institucional `#9D2148`, dorado `#B28E5C`, gris `#55585A`, marfil `#FFFAE9`
- **Tipografía:** Roboto (cuerpo) y Cabin (títulos y encabezados)
- **Tokens:** en `src/assets/css/tokens/`

---

## Estructura del repositorio

```
├── docs/                    Documentación del proyecto
├── src/                     Código fuente publicable
│   ├── *.html               Páginas principales
│   ├── programas/           Subpáginas de programas
│   ├── responsabilidades/   Subpáginas
│   ├── componentes/         Cabecera, pie, utilidad
│   └── assets/              CSS, JS, fuentes, imágenes, datos
├── interno/                 Documentos NO publicables (pendientes, auditorías)
└── entregables/             Notas, oficios, presentaciones institucionales
```

---

## Desarrollo local

Para revisar el sitio en local:

1. Clonar el repositorio
2. Abrir `src/index.html` en el navegador
3. Todas las páginas navegan entre sí por rutas relativas

Para servir con servidor local (recomendado para pruebas de fetch de datos):

```bash
# Con Python
cd src
python -m http.server 8000

# Con Node
npx serve src
```

Después abrir `http://localhost:8000` en el navegador.

---

## Convenciones de trabajo

### Nombres de archivos
- Todo en minúsculas, sin acentos, con guiones medios
- `mi-archivo.html`, no `MiArchivo.html` ni `mi_archivo.html`

### Estructura de commits
- Mensajes en español
- Prefijos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `content:`
- Ejemplo: `content: actualiza contactos del directorio`

### Ramas
- `main` · versión estable y desplegable
- `desarrollo` · integración de nuevas funcionalidades
- `feature/*` · trabajo específico
- `content/*` · actualización de contenidos

---

## Estado actual

Versión 21 · Última versión validada. Ver `CHANGELOG.md` para detalles.

Pendientes críticos para publicación en `docs/pendientes.md`.

---

## Contacto

**Liber Saltijeral**
Área Coordinadora TIMOG
Secretaría del Medio Ambiente
Gobierno de la Ciudad de México
