# Arquitectura del Micrositio

## Modelo mental · Entrada por tarea ciudadana

El sitio está organizado por lo que el ciudadano necesita hacer, no por el organigrama institucional.

### Los 5 perfiles ciudadanos rectores

Toda decisión arquitectónica se valida contra estos 5 perfiles:

1. **Vecino preocupado** · árbol grande frente a su casa que parece riesgoso
2. **Propietario constructor** · quiere edificar y tiene árboles en el predio
3. **Habitante con árbol en jardín privado** · quiere podar y no sabe si necesita permiso
4. **Testigo de poda sospechosa** · quiere denunciar pero no sabe ante quién
5. **Protector del arbolado** · quiere que un árbol emblemático sea reconocido

Si un contenido no responde a la duda de ninguno de estos perfiles, sobra.

### Rutas desde portada

Cada perfil tiene destino diferenciado:

| Perfil | Destino |
|---|---|
| 1 · Árbol frente a casa | `/emergencias.html` |
| 2 · Voy a construir | `/hazlo.html#caso-construccion` |
| 3 · Podar árbol de jardín | `/hazlo.html#caso-jardin-privado` |
| 4 · Poda sospechosa | `/responsabilidades.html#denunciar` |
| 5 · Proteger árbol notable | `https://guardianesdeltiempo.sedema.cdmx.gob.mx` |

## Las 7 secciones

Cada sección tiene un propósito único, sin solapamientos:

1. **Inicio** · orientación por perfil
2. **Hazlo** · procedimientos y casos concretos
3. **Responsabilidades** · quién autoriza y quién ejecuta según el suelo
4. **Emergencias** · qué llamar según el nivel de riesgo
5. **Programas** · portafolio operativo de SEDEMA (5 programas)
6. **Directorio** · contactos institucionales completos
7. **La Política** · marco estratégico y publicaciones rectoras

## Reglas de contenido

- Cada afirmación con implicación jurídica cita artículo y norma específicos
- Nunca se usa "conforme a la normativa aplicable"
- Toda cifra en valor concreto, no en fórmulas
- Segunda persona ("tú puedes", "necesitas")
- Voz activa, frases cortas, sin pasivas burocráticas

## Componentes compartidos

- **Cabecera** con navegación de 7 secciones
- **Pie** con contactos institucionales y marco jurídico
- **Utilidad** al final de cada página ("¿Te sirvió esta página?")
