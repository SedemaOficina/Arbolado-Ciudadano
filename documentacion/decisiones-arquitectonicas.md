# Decisiones Arquitectónicas · Registro

Este documento registra decisiones estructurales importantes con su justificación, para que futuros iteradores comprendan por qué las cosas están como están.

---

## D001 · Reducción de 11 módulos a 7 secciones

**Fecha:** agosto 2026
**Versión:** v20
**Estado:** aplicado

### Contexto
La versión inicial tenía 11 módulos temáticos que replicaban el organigrama institucional. Esto obligaba al ciudadano a saber la estructura interna de SEDEMA para encontrar información.

### Decisión
Reorganizar en 7 secciones basadas en tarea ciudadana:
Inicio, Hazlo, Responsabilidades, Emergencias, Programas, Directorio, La Política.

### Consecuencias
- Positivo: el ciudadano entra por su necesidad, no por el organigrama
- Positivo: menos superficie de navegación (7 vs 11)
- Riesgo mitigado: contenido no se pierde, se reorganiza

---

## D002 · Patrimoniales migrado a subdominio autónomo

**Fecha:** agosto 2026
**Versión:** v21
**Estado:** aplicado

### Contexto
Patrimoniales tenía identidad y voz editorial distinta al resto del sitio (más contemplativa, cultural). Forzarlo dentro del sitio institucional le restaba carácter y complicaba la navegación.

### Decisión
Migrar a subdominio propio (`sedemaoficina.github.io/arboles-patrimoniales`) con identidad visual diferenciada (morado jacaranda, ilustración protagonista, Anton condensed).

### Consecuencias
- Positivo: cada proyecto respira con su propia identidad
- Positivo: SEDEMA puede crecer el registro sin tocar el sitio institucional
- Positivo: el sitio institucional se enfoca en operación, Guardianes en patrimonio
- Requiere: enlaces cruzados desde tres lugares del sitio institucional

---

## D003 · Sustitución de PATRIMONIALES por PROGRAMAS

**Fecha:** agosto 2026
**Versión:** v21
**Estado:** aplicado

### Contexto
Al migrar Patrimoniales, se abrió espacio para dar visibilidad a otras iniciativas de la Secretaría que antes no aparecían en el sitio: palmeras, inventario, reforestación, viveros.

### Decisión
Nueva sección PROGRAMAS que contiene 5 iniciativas con subpágina propia:
1. Árboles patrimoniales (enlace externo)
2. Retiro y sustitución de palmeras
3. Inventario del arbolado urbano
4. Reforestación urbana
5. Viveros Nezahualcóyotl y Yecapixtla

### Consecuencias
- Positivo: portafolio institucional completo visible
- Positivo: coherencia sistémica con LA POLÍTICA
- Riesgo: Patrimoniales pierde protagonismo relativo, se compensa colocándolo primero en la lista y con chip "Sitio dedicado"

---

## D004 · Eliminación de etiquetas de organización interna

**Fecha:** agosto 2026
**Versión:** v21
**Estado:** aplicado

### Contexto
El sitio exponía al ciudadano numeración interna del proyecto: "SECCIÓN 02", "SUBSECCIÓN 1", "PERFIL 1", "PROGRAMA VIGENTE". Sumaba ~50 apariciones sin valor.

### Decisión
Eliminar todas las etiquetas de numeración interna. Los H1 y H2 se explican solos.

### Consecuencias
- Positivo: 12-18% menos superficie textual sin perder información
- Positivo: aspecto más institucional, menos "sistema documentado en producción"

---

## D005 · Bloque nuevo de denuncia PAOT paso a paso

**Fecha:** agosto 2026
**Versión:** v21
**Estado:** aplicado

### Contexto
La denuncia ante PAOT se mencionaba 5 veces en distintas páginas, pero el proceso no se explicaba en ninguna. Laguna informativa importante.

### Decisión
Crear bloque completo en Responsabilidades: "Cómo denuncias ante la PAOT". Incluye "Las dos preguntas que debes hacer" + "Las tres vías para denunciar" (internet, teléfono, presencial) + qué hace la PAOT + cita al artículo 5 fracción I de la Ley Orgánica de PAOT.

### Consecuencias
- Positivo: se resuelve laguna informativa
- Positivo: destino natural del Perfil 4 (poda sospechosa)
- Positivo: refuerza rol institucional de PAOT
