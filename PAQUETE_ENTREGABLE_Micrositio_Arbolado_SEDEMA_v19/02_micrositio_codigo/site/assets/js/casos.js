/* ==========================================================
   MÓDULO 5 · CASOS COTIDIANOS (25 situaciones resueltas)
========================================================== */

const CASOS = [
  // ===== LUGAR: PREDIO PRIVADO =====
  { id:1, lugar:'privado', urgencia:'baja',
    titulo:'El árbol está en <em>mi jardín</em> y quiero podarlo',
    autoridad:'Alcaldía',
    situacion:'Tengo un árbol grande en mi jardín o patio que necesita poda de mantenimiento.',
    queHacer:'Solicita la autorización a tu Alcaldía con un dictamen técnico. El dictamen lo puede emitir personal de la propia Alcaldía o un dictaminador acreditado por SEDEMA. La Alcaldía debe responder en plazo no mayor a 20 días hábiles.',
    queNoHacer:'No comiences la poda sin autorización por escrito, ni contrates a una persona que no esté en el padrón de SEDEMA. Aun siendo tu árbol, una poda mayor sin permiso puede sancionarse.',
    fundamento:'Ley Ambiental CDMX, art. 106. Ley Orgánica de Alcaldías CDMX, art. 32 fracc. V. NADF-001-RNAT-2015, numerales 5.5 y 6.',
    ver:[{t:'Verifica al podador',h:'modulo-3-competencias.html#verificador'},{t:'Trámites',h:'modulo-8-tramites.html'}] },

  { id:2, lugar:'privado', urgencia:'media',
    titulo:'Las raíces del árbol están <em>levantando mi piso</em> o agrietando paredes',
    autoridad:'Alcaldía con dictamen',
    situacion:'Las raíces de un árbol —mío o del vecino— afectan cimentación, cisterna, tuberías o muros.',
    queHacer:'Solicita dictamen técnico ante tu Alcaldía. La poda de raíces solo procede cuando la afectación es grave y comprobable. El dictaminador puede sugerir alternativas previas: ampliar el cajete, elevar la banqueta, renivelar la guarnición o hacer un saque a la guarnición.',
    queNoHacer:'No cortes raíces por tu cuenta ni autorices a un particular que no esté acreditado. Una poda de raíz mal hecha puede matar el árbol y derivar en sanción y restitución máxima de 16 árboles.',
    fundamento:'NADF-001-RNAT-2015, numerales 6.4.5 y 7.1.3. Ley Ambiental CDMX, art. 106 fracc. IV.',
    ver:[{t:'Glosario · Poda de raíces',h:'modulo-10-glosario.html'},{t:'FAQ 28',h:'modulo-9-faq.html'}] },

  { id:3, lugar:'privado', urgencia:'alta',
    titulo:'Mi árbol está <em>inclinado</em> después de la lluvia',
    autoridad:'Alcaldía (o 911 si hay riesgo inminente)',
    situacion:'Tras una lluvia fuerte o sismo, mi árbol quedó inclinado o el suelo se levantó alrededor del tronco.',
    queHacer:'Mantén a las personas a una distancia mínima de 1.5 veces la altura del árbol. Si hay riesgo inminente de caída sobre personas o vivienda, llama al 911. Si el árbol está estable pero comprometido, repórtalo a tu Alcaldía para dictamen urgente. El derribo procede solo si existe riesgo real y presente, debidamente acreditado.',
    queNoHacer:'No intentes apuntalarlo, cortarlo o moverlo por tu cuenta. El riesgo de caída secundaria es alto.',
    fundamento:'Ley Ambiental CDMX, art. 106 fracc. I. NADF-001-RNAT-2015, numerales 5.4 y 7.4.',
    ver:[{t:'Emergencias',h:'modulo-6-emergencias.html'}] },

  { id:4, lugar:'privado', urgencia:'media',
    titulo:'Tengo un árbol <em>enfermo o con plaga</em> en mi predio',
    autoridad:'Alcaldía con dictamen',
    situacion:'Mi árbol tiene manchas raras, hongos visibles, ramas secas o insectos que lo están matando.',
    queHacer:'Solicita dictamen fitosanitario a tu Alcaldía. Puede requerirse poda sanitaria, tratamiento fitosanitario específico o, en último caso, derribo por saneamiento. El manejo de residuos de árbol plagado tiene reglas especiales para no propagar la plaga.',
    queNoHacer:'No apliques pesticidas por tu cuenta ni podes ramas plagadas y las mezcles con basura común. Puedes agravar el problema o infectar árboles cercanos.',
    fundamento:'NADF-001-RNAT-2015, numerales 5.5 y 11.2 (residuos de árboles plagados).',
    ver:[{t:'FAQ sobre plagas',h:'modulo-9-faq.html'}] },

  { id:5, lugar:'privado', urgencia:'baja',
    titulo:'Quiero <em>plantar un árbol</em> en el jardín de mi casa',
    autoridad:'Sin trámite formal',
    situacion:'Quiero plantar árboles en mi predio particular para dar sombra o mejorar mi jardín.',
    queHacer:'La plantación en predio privado no requiere permiso previo. Elige especies nativas o adaptadas al clima de la CDMX. Considera espacio para el desarrollo radical y aéreo. Consulta el vivero de la Alcaldía o el Programa de Reforestación de SEDEMA para asesoría y, en su caso, donación de plantas.',
    queNoHacer:'No plantes especies invasoras (eucalipto, casuarina, ficus benjamina en zonas urbanas densas) ni ejemplares que a mediano plazo dañen infraestructura por su sistema radical.',
    fundamento:'Programa de Reforestación SEDEMA. NADF-006-RNAT-2012 (especies recomendadas).',
    ver:[{t:'Glosario · Trasplante',h:'modulo-10-glosario.html'}] },

  { id:6, lugar:'secundaria', urgencia:'media',
    titulo:'Hay un árbol <em>caído en la calle</em> bloqueando el paso',
    autoridad:'911 + Alcaldía',
    situacion:'Un árbol se cayó en la calle, la banqueta o sobre un vehículo estacionado.',
    queHacer:'Llama al 911 inmediatamente. Bomberos secciona y retira el árbol para liberar el paso. Reporta también a tu Alcaldía para la limpieza posterior y el retiro completo de residuos. Toma fotos si hay daños a bienes.',
    queNoHacer:'No intentes mover el árbol por tu cuenta, especialmente si tocó cables. No dejes que niños o mascotas se acerquen. El riesgo de electrocución y caída secundaria es real.',
    fundamento:'Ley del Heroico Cuerpo de Bomberos CDMX, art. 6 fracc. IX.',
    ver:[{t:'Directorio',h:'modulo-11-directorio.html'}] },

  { id:7, lugar:'secundaria', urgencia:'alta',
    titulo:'El árbol de la calle tiene <em>rama en riesgo</em> de caer sobre mi casa',
    autoridad:'Alcaldía',
    situacion:'Un árbol de la banqueta o el camellón tiene una rama grande, seca o dañada que amenaza caer sobre mi vivienda, vehículo o cochera.',
    queHacer:'Reporta a tu Alcaldía por SUAC, LOCATEL o ventanilla. Documenta con fotos y ubica el árbol con precisión. La Alcaldía debe realizar dictamen y, en su caso, poda de saneamiento en plazo no mayor a 20 días hábiles. Si el riesgo se agrava, insiste señalando la urgencia.',
    queNoHacer:'No cortes la rama por tu cuenta ni contrates particulares no acreditados. Aunque el árbol amenace tu casa, no está en tu predio: no es de tu competencia intervenirlo.',
    fundamento:'Ley Orgánica de Alcaldías CDMX, art. 32 fracc. V. NADF-001-RNAT-2015, numeral 6.',
    ver:[{t:'Emergencias',h:'modulo-6-emergencias.html'}] },

  { id:8, lugar:'secundaria', urgencia:'baja',
    titulo:'Hay un árbol en <em>vialidad primaria</em> que necesita poda o revisión',
    autoridad:'SOBSE con autorización SEDEMA',
    situacion:'Un árbol en Reforma, Insurgentes, Periférico, un eje vial o cualquier vialidad primaria está descuidado, seco o representa riesgo.',
    queHacer:'Reporta a SEDEMATEL al 55 5278 9931 o LOCATEL al 55 5658 1111. La ejecución material en vialidad primaria corresponde a SOBSE (Dirección General de Servicios Urbanos), pero la autorización ambiental sigue siendo de SEDEMA.',
    queNoHacer:'No lo reportes solo a la Alcaldía: en vialidad primaria no es su competencia. Perderás tiempo y el reporte no llegará al área correcta.',
    fundamento:'Ley Orgánica del Poder Ejecutivo CDMX, art. 38 fracc. I. Ley Ambiental CDMX, arts. 9 y 10.',
    ver:[{t:'Glosario · Cinchamiento',h:'modulo-10-glosario.html'}] },

  { id:9, lugar:'secundaria', urgencia:'media',
    titulo:'Vi a alguien <em>podando o derribando</em> un árbol sin permiso',
    autoridad:'PAOT',
    situacion:'Presencié o estoy presenciando trabajos de poda, derribo o trasplante que no parecen autorizados: sin letrero, sin credenciales visibles, personal no identificado.',
    queHacer:'Presenta denuncia ante PAOT (Procuraduría Ambiental y del Ordenamiento Territorial): en línea (denuncia.paot.cdmx.gob.mx), por teléfono al 55 5265 0780 o presencialmente. Toma fotos, video, placas de vehículos y ubicación exacta. La denuncia puede ser anónima. Verifica al podador en el padrón oficial de SEDEMA.',
    queNoHacer:'No confrontes directamente al personal. Documenta desde distancia segura. No borres evidencia audiovisual: es la base de la investigación.',
    fundamento:'Ley Orgánica de la PAOT, art. 5 fracc. I. Ley Ambiental CDMX, art. 112.',
    ver:[{t:'Denuncia PAOT',h:'https://www.paot.cdmx.gob.mx'}] },


  // ===== LUGAR: VIALIDAD PRIMARIA =====
  { id:10, lugar:'primaria', urgencia:'media',
    titulo:'El árbol está en un <em>Bosque Urbano, Barranca o ANP</em>',
    autoridad:'SEDEMA (DGSANPAVA)',
    situacion:'El árbol se encuentra dentro de Chapultepec, Desierto de los Leones, Xochimilco, alguna Barranca protegida o un Área Natural Protegida.',
    queHacer:'Reporta a SEDEMA directamente al 55 5278 9931. La Dirección General del Sistema de Áreas Naturales Protegidas y Áreas de Valor Ambiental (DGSANPAVA) es competente. No acudas a la Alcaldía: no tiene facultades en esas áreas.',
    queNoHacer:'No ejecutes ningún tipo de intervención por cuenta propia. En ANP y AVA rigen reglas más estrictas: el régimen sancionatorio es agravado (Código Penal CDMX, art. 345 Bis: hasta 20 años de prisión).',
    fundamento:'Ley Ambiental CDMX, arts. 9 y 10. NADF-001-RNAT-2015, numeral 5.4.',
    ver:[{t:'Mapa de competencias',h:'modulo-3-competencias.html'}] },

  { id:11, lugar:'primaria', urgencia:'alta',
    titulo:'Voy a <em>construir en mi predio</em> y tiene árboles',
    autoridad:'SEDEMA (DGEIRA)',
    situacion:'Voy a iniciar obra en mi predio y hay árboles que necesito derribar, trasplantar o intervenir. La obra puede ser vivienda unifamiliar, ampliación, edificio, comercio, etc.',
    queHacer:'Antes de iniciar la obra debes obtener autorización de SEDEMA mediante Evaluación de Impacto Ambiental (EIA). El proyecto requiere dictamen técnico de arbolado elaborado por un dictaminador acreditado. La autorización determina qué árboles se derriban, cuáles se trasplantan y la restitución correspondiente.',
    queNoHacer:'No inicies la obra sin resolución de impacto ambiental. Iniciar sin autorización implica sanción administrativa y, en su caso, penal. La restitución sube al máximo (16 árboles por cada uno derribado).',
    fundamento:'Ley Ambiental CDMX, arts. 34, 46 y 109. Reglamento de Impacto Ambiental y Riesgo, arts. 6, 7 y 12. NADF-001-RNAT-2015, numerales 5.10.1 y 7.4.4.',
    ver:[{t:'Emergencias',h:'modulo-6-emergencias.html'}] },

  { id:12, lugar:'anpava', urgencia:'media',
    titulo:'Necesito saber <em>cuánto pagar</em> por restitución',
    autoridad:'Alcaldía o SEDEMA (según supuesto)',
    situacion:'Voy a derribar árboles con autorización y necesito calcular cuántos árboles debo restituir físicamente o cuál es el monto económico equivalente.',
    queHacer:'La restitución depende del puntaje de valoración del árbol conforme al Anexo 3 y a la Tabla 2 de la NADF-001-RNAT-2015. Puntaje bajo (7-12) = 2 árboles/230 UCDMX c/u. Puntaje medio-bajo (13-18) = 4 árboles/559 UCDMX c/u. Puntaje medio (19-24) = 8 árboles/1,314 UCDMX c/u. Puntaje alto (25-28) = 16 árboles/3,681 UCDMX c/u. El dictaminador lo determina. Consulta la ficha del trámite correspondiente.',
    queNoHacer:'No asumas que la restitución es una decisión negociable. Los factores del Anexo 3 son técnicos y verificables. Tampoco intentes que un dictaminador manipule el puntaje: la responsabilidad profesional y penal recae sobre él.',
    fundamento:'NADF-001-RNAT-2015, numeral 9 y Anexo 3, Tablas 2, 3 y 4.',
    ver:[{t:'Catálogo de áreas',h:'modulo-3-competencias.html'}] },

  { id:13, lugar:'anpava', urgencia:'alta',
    titulo:'El árbol del vecino <em>invade mi propiedad</em>',
    autoridad:'Alcaldía con dictamen · alternativa civil',
    situacion:'Las ramas o las raíces del árbol del vecino se extienden hacia mi predio y me molestan o afectan.',
    queHacer:'Primer paso: intenta acuerdo directo con el vecino. Si no hay acuerdo, solicita dictamen técnico a la Alcaldía para poda controlada de las ramas o raíces del lado que invaden tu predio (nunca del lado del vecino). En paralelo puedes acudir a vía civil (Código Civil CDMX, art. 848) para invasiones documentadas.',
    queNoHacer:'No cortes tú ni ninguna persona no acreditada las ramas o raíces. Aunque invadan tu predio, el árbol sigue protegido por la Ley Ambiental. Puedes ser sancionado.',
    fundamento:'Código Civil CDMX, art. 848. Ley Ambiental CDMX, art. 106. NADF-001-RNAT-2015, numeral 6.',
    ver:[] },


  // ===== SITUACIÓN: CONSTRUCCIÓN =====
  { id:14, lugar:'construccion', urgencia:'media',
    titulo:'El árbol está tocando <em>cables eléctricos</em>',
    autoridad:'911 (si hay chispa) · CFE al 071 · Alcaldía (para poda regular)',
    situacion:'Un árbol tiene ramas tocando cables de luz. Puede haber chispa, cortocircuito o riesgo de incendio.',
    queHacer:'Si hay chispa, humo, cable caído o riesgo inminente: llama al 911 y a CFE al 071 de inmediato. Para poda preventiva de árboles en contacto con cables (sin emergencia): reporta a tu Alcaldía. La poda bajo cableado eléctrico requiere personal especializado y, en muchos casos, coordinación con CFE para corte temporal del suministro.',
    queNoHacer:'Nunca intentes mover ramas del cable por tu cuenta ni contrates a un particular sin acreditación. Riesgo de electrocución mortal.',
    fundamento:'NADF-001-RNAT-2015, numeral 6.4.6 (poda bajo cableado). Ley del Heroico Cuerpo de Bomberos CDMX, art. 6 fracc. IX.',
    ver:[{t:'Trámites',h:'modulo-8-tramites.html'}] },

  { id:15, lugar:'construccion', urgencia:'alta',
    titulo:'Hay un <em>panal, avispero o colonia de abejas</em> en el árbol',
    autoridad:'Bomberos · 911',
    situacion:'En el árbol hay un panal de abejas, avispero o alguna colonia de insectos peligrosos.',
    queHacer:'Llama a Bomberos al 911 o a los canales de emergencia de tu Alcaldía. Bomberos coordina con equipos apicultores especializados que retiran la colmena viva, sin exterminio. Mantén distancia mínima de 15 metros mientras acuden.',
    queNoHacer:'No intentes ahuyentar o exterminar por tu cuenta con humo, agua, pesticidas o fuego. Riesgo de ataque masivo, incendio del árbol y sanción por daño al arbolado y por afectar polinizadores protegidos.',
    fundamento:'Ley del Heroico Cuerpo de Bomberos CDMX, art. 6 fracc. IX. Ley Ambiental CDMX, art. 107 (protección a polinizadores).',
    ver:[] },


  // ===== SITUACIÓN: VECINOS =====
  { id:16, lugar:'vecinos', urgencia:'media',
    titulo:'Vi un árbol que <em>debería ser patrimonial</em>',
    autoridad:'SEDEMA (DGSANPAVA)',
    situacion:'Conozco un árbol excepcional por su edad, tamaño, belleza, valor histórico o cultural que debería tener protección especial.',
    queHacer:'Presenta propuesta ante SEDEMA con: ubicación exacta, fotografías, medidas aproximadas, y justificación (edad estimada, valor biológico, histórico, paisajístico, cultural o social). SEDEMA turna la propuesta al Consejo de Salvaguarda del Patrimonio Urbanístico y Arquitectónico si procede. Consulta el Módulo 07 para los criterios completos.',
    queNoHacer:'No coloques placas ni marcas sobre el árbol sin autorización. La declaratoria patrimonial es acto formal de SEDEMA, no una acción ciudadana espontánea (aunque parte de propuesta ciudadana).',
    fundamento:'Ley Ambiental CDMX, art. 34. NADF-001-RNAT-2015, numeral 5.4 (definición de patrimonial y turno al Consejo).',
    ver:[{t:'Glosario · Aclareo de copa',h:'modulo-10-glosario.html'}] },

  { id:17, lugar:'vecinos', urgencia:'media',
    titulo:'Están <em>talando en una obra</em> y no veo permiso',
    autoridad:'PAOT · SEDEMA (DGEIRA)',
    situacion:'Cerca de mi casa u oficina está una obra donde derribaron o están derribando árboles. No veo letreros de autorización.',
    queHacer:'Toda obra con derribo de arbolado debe portar en sitio visible el letrero de autorización (nombre del proyecto, área, periodo, autoridad emisora). Toma fotos del sitio y la ausencia de letreros. Denuncia ante PAOT (paot.cdmx.gob.mx / 55 5265 0780) y notifica a SEDEMA (DGEIRA) por saber si hay resolución de impacto ambiental para ese predio.',
    queNoHacer:'No confrontes al personal ni bloquees la obra. Riesgo personal y posible imputación por interferir. La vía correcta es la denuncia documentada.',
    fundamento:'Ley Ambiental CDMX, arts. 34 y 109. Ley Orgánica de la PAOT, art. 5 fracc. I. NADF-001-RNAT-2015, numeral 5.10.8.',
    ver:[{t:'Emergencias',h:'modulo-6-emergencias.html'}] },

  { id:18, lugar:'vecinos', urgencia:'alta',
    titulo:'El árbol tiene <em>hongos, huecos o pudrición</em> visible',
    autoridad:'Alcaldía con dictamen',
    situacion:'Veo hongos en la base del tronco, huecos grandes, corteza que se desprende, o el árbol suena hueco.',
    queHacer:'Reporta a tu Alcaldía para dictamen fitosanitario. Estos signos pueden indicar declinación estructural que compromete la resistencia mecánica del árbol. El dictamen determinará si procede poda sanitaria, tratamiento, monitoreo o derribo por saneamiento.',
    queNoHacer:'No taladres el tronco para "revisar el hueco", no rellenes cavidades con cemento (práctica obsoleta y dañina), ni podes por tu cuenta creyendo que ayudas. Puedes agravar la afectación estructural.',
    fundamento:'NADF-001-RNAT-2015, numerales 5.4, 6.4.1 y 7.4.',
    ver:[{t:'FAQ 31',h:'modulo-9-faq.html'}] },

  { id:19, lugar:'fauna', urgencia:'media',
    titulo:'Necesito saber si el <em>podador es real</em>',
    autoridad:'SEDEMA (verificador)',
    situacion:'Contraté o me ofrecen servicio de poda y quiero verificar que la persona sea acreditada por SEDEMA.',
    queHacer:'Pide su credencial física. Verifica: fotografía, folio (formato SEDEMA-POD-AAAA-NNNNN o SEDEMA-DIC-AAAA-NNNNN), vigencia, firma del titular de SEDEMA y huella digital. Consulta el verificador en el homepage del sitio. Si tiene dudas, llama a SEDEMATEL al 55 5278 9931.',
    queNoHacer:'No aceptes credenciales sin foto, con tachaduras, vencidas o cuyo folio no aparece en el padrón. El cliente y el ejecutor son corresponsables ante la ley.',
    fundamento:'NADF-001-RNAT-2015, numerales 5.5 y 5.6.',
    ver:[] },

  { id:20, lugar:'fauna', urgencia:'baja',
    titulo:'Contraté a alguien y <em>dejó el árbol dañado</em>',
    autoridad:'PAOT · vía civil',
    situacion:'Contraté a un particular que se presentó como podador y realizó un trabajo mal ejecutado: cortes indebidos, desmoche, pérdida de la copa, muerte del árbol.',
    queHacer:'Documenta el estado del árbol con fotografías fechadas antes y después (si tienes). Verifica en el padrón si la persona estaba acreditada. Presenta denuncia ante PAOT. En paralelo, puedes reclamar por vía civil daño patrimonial contra el ejecutor. Si la persona no estaba acreditada, tú también puedes ser sancionado como cliente corresponsable, pero podrás alegar buena fe si demuestras que fuiste engañado.',
    queNoHacer:'No hagas nueva poda para "corregir" el error: puede empeorar. Consulta primero con dictaminador acreditado si el árbol es recuperable.',
    fundamento:'Ley Ambiental CDMX, art. 112. Código Civil CDMX, arts. 1910 y ss. (responsabilidad civil).',
    ver:[] },

  { id:21, lugar:'tramite', urgencia:'baja',
    titulo:'Reporté un árbol y <em>la Alcaldía no responde</em>',
    autoridad:'Alcaldía · SEDEMA · Contraloría',
    situacion:'Reporté un árbol en riesgo o solicité autorización a la Alcaldía y no me responden en el plazo de 20 días hábiles establecido por la ley.',
    queHacer:'La Alcaldía debe responder en plazo no mayor a 20 días hábiles. Si no lo hace, opera afirmativa ficta (se entiende resuelto favorablemente). Escala a SEDEMA (55 5278 9931) y, si persiste la omisión, presenta queja ante la Contraloría de la Alcaldía o la Secretaría de la Contraloría General de la CDMX. Guarda todos los folios de tus reportes anteriores.',
    queNoHacer:'No inicies la intervención unilateralmente aunque haya operado afirmativa ficta: necesitas constancia por escrito. No dejes de reportar: cada folio es evidencia.',
    fundamento:'Ley Ambiental CDMX, art. 106 párrafo 3. Ley de Procedimiento Administrativo CDMX, arts. 89 y 90.',
    ver:[{t:'Directorio',h:'modulo-11-directorio.html'}] },

  { id:22, lugar:'tramite', urgencia:'baja',
    titulo:'El árbol produce <em>frutos, flores o savia</em> que ensucian',
    autoridad:'Sin trámite formal · Alcaldía si corresponde',
    situacion:'El árbol frente a mi casa o en mi predio produce frutos, flores, resinas o savia que manchan vehículos, techos o ropa.',
    queHacer:'Este supuesto no justifica derribo ni poda mayor. Puedes solicitar limpieza rutinaria de la calle a tu Alcaldía. Para el propio árbol, considera medidas de mitigación: cubierta protectora sobre vehículos, cambio de estacionamiento estacional, aprovechamiento del fruto si es comestible.',
    queNoHacer:'No solicites derribo por este motivo: no es supuesto legal. El "no derribo por caída de hojas, frutos o flores" está expresamente excluido en el art. 106 de la Ley Ambiental.',
    fundamento:'Ley Ambiental CDMX, art. 106 (no procedencia). NADF-001-RNAT-2015, numeral 7.4.',
    ver:[{t:'Verifica al podador',h:'modulo-3-competencias.html#verificador'}] },

  { id:23, lugar:'tramite', urgencia:'media',
    titulo:'Quiero saber <em>si un árbol es nativo o exótico</em>',
    autoridad:'SEDEMA (identificación) · Vivero Alcaldía',
    situacion:'Quiero identificar la especie de un árbol para saber si es adecuado al clima de la CDMX o si conviene mantenerlo.',
    queHacer:'Consulta el catálogo de especies del Programa de Reforestación de SEDEMA o el vivero de tu Alcaldía. Puedes enviar fotos de hoja, corteza, flor y fruto a SEDEMATEL. Existen apps de identificación (PlantNet, iNaturalist) que dan aproximación, aunque no sustituyen dictamen técnico. Consulta el Glosario para diferencias entre nativo, adaptado y exótico.',
    queNoHacer:'No supongas que un árbol es "malo" solo por ser exótico. Muchos exóticos adaptados aportan servicios ambientales. La decisión de retirarlo o conservarlo requiere criterio técnico, no juicio estético.',
    fundamento:'NADF-006-RNAT-2012 (especies recomendadas). Programa de Reforestación SEDEMA.',
    ver:[] },


  // ===== SITUACIÓN: ÁRBOLES PATRIMONIALES =====
  { id:24, lugar:'patrimonial', urgencia:'baja',
    titulo:'Encontré un <em>árbol maltratado o clavado</em>',
    autoridad:'PAOT · Alcaldía',
    situacion:'Veo un árbol con clavos, alambres, anuncios pegados, pintado con aerosol, quemado o con anillado en el tronco.',
    queHacer:'Denuncia ante PAOT (paot.cdmx.gob.mx / 55 5265 0780) y notifica a tu Alcaldía. El anillado, cinchamiento, quema o vertimiento de sustancias tóxicas constituye derribo por extensión normativa y activa sanción administrativa y penal. Toma fotos y documenta.',
    queNoHacer:'No retires clavos o anuncios por tu cuenta: puedes lesionarte y modificar la evidencia. Documenta primero y deja que la autoridad intervenga.',
    fundamento:'Ley Ambiental CDMX, art. 106 párrafo 2 (derribo por extensión). Código Penal CDMX, arts. 343 a 350.',
    ver:[{t:'Árboles patrimoniales',h:'modulo-7-patrimoniales.html'}] },

  { id:25, lugar:'patrimonial', urgencia:'alta',
    titulo:'La obra vecina <em>amenaza un árbol patrimonial</em>',
    autoridad:'SEDEMA · PAOT · Consejo de Salvaguarda',
    situacion:'Se está construyendo cerca de un árbol emblemático (por edad, tamaño, importancia histórica) que puede ser patrimonial, y la obra pone en riesgo el ejemplar.',
    queHacer:'Reporta de inmediato a SEDEMA al 55 5278 9931 y presenta denuncia ante PAOT. Si el árbol tiene valor patrimonial, corresponde intervenir al Consejo de Salvaguarda del Patrimonio Urbanístico y Arquitectónico. Toma fotos con fecha y video. Aporta datos que sustenten el valor patrimonial: antigüedad, referencia histórica, valor cultural.',
    queNoHacer:'No bloquees la obra ni confrontes al personal. La vía correcta es la denuncia documentada y la solicitud de medidas cautelares por parte de SEDEMA o PAOT.',
    fundamento:'Ley Ambiental CDMX, arts. 34 y 106. NADF-001-RNAT-2015, numeral 5.4 (turno al Consejo).',
    ver:[{t:'PAOT',h:'https://www.paot.cdmx.gob.mx'}] }
];



const FILTROS_LUGAR = [
  { id:'todos',        nombre:'Todos los casos' },
  { id:'privado',      nombre:'Predio privado' },
  { id:'secundaria',   nombre:'Vialidad secundaria' },
  { id:'primaria',     nombre:'Vialidad primaria' },
  { id:'anpava',       nombre:'Bosque, barranca o ANP' },
  { id:'construccion', nombre:'Construcción' },
  { id:'vecinos',      nombre:'Vecindad' },
  { id:'fauna',        nombre:'Fauna asociada' },
  { id:'tramite',      nombre:'Trámite y plantación' },
  { id:'patrimonial',  nombre:'Árbol patrimonial' }
];

const FILTROS_URGENCIA = [
  { id:'todas', nombre:'Toda urgencia' },
  { id:'alta',  nombre:'Urgencia alta' },
  { id:'media', nombre:'Urgencia media' },
  { id:'baja',  nombre:'Atención ordinaria' }
];

let filtroLugarActivo = 'todos';
let filtroUrgenciaActivo = 'todas';
let queryActiva = '';

function renderCasos(){
  const cont = document.getElementById('casos-contenedor');
  if(!cont) return;

  // Conteo por filtro
  const conteoLugar = {};
  FILTROS_LUGAR.forEach(f => {
    conteoLugar[f.id] = f.id === 'todos' ? CASOS.length : CASOS.filter(c => c.lugar === f.id).length;
  });
  const conteoUrgencia = {};
  FILTROS_URGENCIA.forEach(f => {
    conteoUrgencia[f.id] = f.id === 'todas' ? CASOS.length : CASOS.filter(c => c.urgencia === f.id).length;
  });

  // Filtros de lugar
  const lugarCont = document.getElementById('casos-filtro-lugar');
  if(lugarCont){
    lugarCont.innerHTML = '<span class="label-grupo">Lugar</span>' +
      FILTROS_LUGAR.map(f => {
        const c = f.id === 'todos' ? ' activa' : '';
        return '<button class="caso-chip' + c + '" data-tipo="lugar" data-valor="' + f.id + '">' + f.nombre + ' <span class="conteo">' + conteoLugar[f.id] + '</span></button>';
      }).join('');
  }

  // Filtros de urgencia
  const urgCont = document.getElementById('casos-filtro-urgencia');
  if(urgCont){
    urgCont.innerHTML = '<span class="label-grupo">Urgencia</span>' +
      FILTROS_URGENCIA.map(f => {
        const c = f.id === 'todas' ? ' activa' : '';
        return '<button class="caso-chip' + c + '" data-tipo="urgencia" data-valor="' + f.id + '">' + f.nombre + ' <span class="conteo">' + conteoUrgencia[f.id] + '</span></button>';
      }).join('');
  }

  // Render fichas
  const urgenciaLabels = { alta:'Urgencia alta', media:'Urgencia media', baja:'Atención ordinaria' };
  const lugarLabels = {
    privado:'Predio privado', secundaria:'Vialidad secundaria', primaria:'Vialidad primaria',
    anpava:'AVA / ANP', construccion:'Construcción', vecinos:'Vecindad',
    fauna:'Fauna asociada', tramite:'Trámite', patrimonial:'Patrimonial'
  };

  let html = '';
  CASOS.forEach(c => {
    const numero = String(c.id).padStart(2,'0');
    const verTambienHTML = c.ver && c.ver.length
      ? '<div class="caso-ver-tambien"><span class="label">Ver también:</span>' +
        c.ver.map(v => '<a href="' + v.h + '">' + v.t + '</a>').join('') + '</div>'
      : '';
    const noHagasHTML = c.queNoHacer
      ? '<div class="caso-no-hagas"><strong>No hagas esto:</strong>' + c.queNoHacer + '</div>'
      : '';
    const textoIndex = (c.titulo + ' ' + c.situacion + ' ' + c.queHacer + ' ' + (c.queNoHacer||'') + ' ' + c.fundamento).replace(/<[^>]+>/g,'').toLowerCase();

    html += '<article class="caso-ficha urgencia-' + c.urgencia + '" data-id="' + c.id + '" data-lugar="' + c.lugar + '" data-urgencia="' + c.urgencia + '" data-busqueda="' + textoIndex.replace(/"/g,'&quot;') + '">' +
      '<div class="caso-cabecera">' +
        '<div class="caso-cabecera-izq">' +
          '<span class="caso-numero">CASO ' + numero + '</span>' +
          '<h4>' + c.titulo + '</h4>' +
        '</div>' +
        '<div class="caso-meta">' +
          '<span class="caso-tag lugar">' + lugarLabels[c.lugar] + '</span>' +
          '<span class="caso-tag urgencia-' + c.urgencia + '-tag">' + urgenciaLabels[c.urgencia] + '</span>' +
          '<span class="caso-tag autoridad">→ ' + c.autoridad + '</span>' +
        '</div>' +
      '</div>' +
      '<p class="caso-situacion">' + c.situacion + '</p>' +
      '<div class="caso-bloque">' +
        '<div class="caso-bloque-label">Qué hacer</div>' +
        '<div class="caso-bloque-contenido">' + c.queHacer + '</div>' +
      '</div>' +
      noHagasHTML +
      '<div class="caso-fundamento"><strong>FUNDAMENTO JURÍDICO ·</strong> ' + c.fundamento + '</div>' +
      verTambienHTML +
    '</article>';
  });
  cont.innerHTML = html;

  // Listeners
  document.querySelectorAll('.caso-chip').forEach(b => {
    b.addEventListener('click', () => {
      const tipo = b.dataset.tipo;
      const valor = b.dataset.valor;
      document.querySelectorAll('.caso-chip[data-tipo="' + tipo + '"]').forEach(x => x.classList.remove('activa'));
      b.classList.add('activa');
      if(tipo === 'lugar') filtroLugarActivo = valor;
      if(tipo === 'urgencia') filtroUrgenciaActivo = valor;
      aplicarFiltros();
    });
  });

  const input = document.getElementById('casos-busqueda');
  if(input) input.addEventListener('input', () => { queryActiva = input.value.trim().toLowerCase(); aplicarFiltros(); });
}

function aplicarFiltros(){
  const contador = document.getElementById('casos-contador');
  let match = 0;
  document.querySelectorAll('.caso-ficha').forEach(c => {
    const okLugar = filtroLugarActivo === 'todos' || c.dataset.lugar === filtroLugarActivo;
    const okUrgencia = filtroUrgenciaActivo === 'todas' || c.dataset.urgencia === filtroUrgenciaActivo;
    const okBusqueda = !queryActiva || c.dataset.busqueda.includes(queryActiva);
    if(okLugar && okUrgencia && okBusqueda){
      c.classList.remove('oculto');
      match++;
    } else {
      c.classList.add('oculto');
    }
  });

  if(!contador) return;
  const total = CASOS.length;
  if(filtroLugarActivo === 'todos' && filtroUrgenciaActivo === 'todas' && !queryActiva){
    contador.className = 'casos-contador';
  } else if(match === 0){
    contador.className = 'casos-contador visible sin-resultados';
    contador.innerHTML = '<strong>Sin casos que coincidan con los filtros.</strong> Prueba con otra combinación o llama a SEDEMATEL 55 5278 9931.';
  } else {
    contador.className = 'casos-contador visible';
    contador.innerHTML = '<strong>' + match + '</strong> de ' + total + ' ' + (match === 1 ? 'caso' : 'casos') + ' coinciden con los filtros.';
  }
}

function limpiarFiltrosCasos(){
  filtroLugarActivo = 'todos';
  filtroUrgenciaActivo = 'todas';
  queryActiva = '';
  const input = document.getElementById('casos-busqueda');
  if(input) input.value = '';
  document.querySelectorAll('.caso-chip').forEach(x => x.classList.remove('activa'));
  document.querySelector('.caso-chip[data-tipo="lugar"][data-valor="todos"]').classList.add('activa');
  document.querySelector('.caso-chip[data-tipo="urgencia"][data-valor="todas"]').classList.add('activa');
  aplicarFiltros();
}

document.addEventListener('DOMContentLoaded', renderCasos);
