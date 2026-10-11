/* ==========================================================
   MÓDULO 9 · PREGUNTAS FRECUENTES (50 dudas ciudadanas)
========================================================== */

const FAQ = [

  // ===== BLOQUE 1: CONCEPTOS GENERALES =====

  { id:1, bloque:'generales',
    p:'¿Puedo cortar libremente un árbol que está en mi predio?',
    r:[
      '<strong>No.</strong> Aunque el árbol esté en tu propiedad, su poda, derribo o trasplante requiere autorización previa de la Alcaldía correspondiente o, en su caso, de la SEDEMA. La ley protege el arbolado urbano sin importar la titularidad del suelo.',
      'La Alcaldía o, en su caso, SEDEMA emite la autorización con base en un dictamen técnico que evalúa la condición del árbol y la justificación de la intervención.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 106 (autorización previa). Ley Orgánica de Alcaldías CDMX, art. 32 fracc. V.',
    verTambien:[{t:'Procedimientos',h:'modulo-4-procedimientos.html'},{t:'A quién acudir',h:'modulo-3-competencias.html'}] },

  { id:2, bloque:'generales',
    p:'¿Qué se considera "poda" y qué se considera "derribo"?',
    r:[
      '<strong>Poda</strong> es la eliminación selectiva de ramas, raíces, follaje o partes del árbol para mejorar su estructura, condición sanitaria o evitar interferencias con la infraestructura.',
      '<strong>Derribo</strong> es la eliminación total del árbol. La ley equipara al derribo cualquier acto que provoque su muerte: anillado, cinchamiento, vertimiento de sustancias tóxicas, ahogamiento por concreto, descortezamiento o desmoche severo.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 109 párrafo final. NADF-001-RNAT-2015, numerales 4 y 5.10.7.',
    verTambien:[{t:'Glosario',h:'modulo-10-glosario.html'}] },

  { id:3, bloque:'generales',
    p:'¿Quién puede ejecutar trabajos de poda o derribo en CDMX?',
    r:[
      '<strong>Únicamente personas físicas con acreditación vigente</strong> emitida por SEDEMA. La acreditación es única, personal e intransferible, y debe contener fotografía, huella digital, folio, vigencia y firma del titular de la Secretaría.',
      'El personal de recolección de esquilmos y limpieza queda exento, pero quien ejecuta y supervisa los cortes siempre debe estar acreditado.',
    ],
    fundamento:'NADF-001-RNAT-2015, numerales 5.5, 5.6 y 5.7.',
    verTambien:[{t:'Verifica al podador',h:'modulo-3-competencias.html#verificador'}] },

  { id:4, bloque:'generales',
    p:'¿Qué es un dictamen técnico de arbolado?',
    r:[
      'Es el documento de validez jurídica y administrativa, sustentado en elementos científicos y técnicos, que determina las condiciones del árbol y justifica si procede su poda, derribo o trasplante.',
      'Debe ser elaborado por un dictaminador acreditado por SEDEMA, con nombre, firma y número de acreditación vigente. Sin dictamen técnico válido, la autorización no procede.',
    ],
    fundamento:'NADF-001-RNAT-2015, numerales 4 y 5.10.1.',
    verTambien:[{t:'Verifica al dictaminador',h:'modulo-3-competencias.html#verificador'}] },

  { id:5, bloque:'generales',
    p:'¿Cómo sé si una persona está realmente acreditada?',
    r:[
      'Pide ver su credencial física antes de contratarla. Debe contener fotografía, huella digital, número de folio, fecha de expedición, vigencia y firma del titular de SEDEMA. No es válida si presenta tachaduras o enmendaduras.',
      'Adicionalmente, consulta el padrón oficial en el <a href="index.html#verificador-padron">verificador de este micrositio</a>: puedes buscar por folio o por nombre.',
    ],
    fundamento:'NADF-001-RNAT-2015, numeral 5.5.',
    verTambien:[{t:'Consultar padrón',h:'modulo-3-competencias.html#verificador'}] },

  { id:6, bloque:'generales',
    p:'¿Cuánto tarda la Alcaldía en responder mi solicitud?',
    r:[
      'La Alcaldía debe emitir respuesta en un <strong>plazo no mayor a 20 días hábiles</strong> contados a partir de la fecha de la solicitud. Si la autorización procede, los trabajos derivados deben ejecutarse también en un plazo no mayor a 20 días hábiles bajo supervisión técnica de la Alcaldía.',
      'Si la Alcaldía no responde en ese plazo, puedes presentar información por la vía de transparencia.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 106 párrafos 3 y 5.',
    verTambien:[{t:'Denuncias y reportes',h:'#denuncias'}] },

  { id:7, bloque:'generales',
    p:'¿Es gratuito el trámite de autorización?',
    r:[
      'La autorización en sí no genera un derecho fiscal, pero el dictamen técnico —cuando lo elabora un dictaminador particular— sí tiene costo, definido por la persona acreditada. Cuando el dictamen lo realiza personal de la propia Alcaldía o SEDEMA, no tiene costo. Si el caso requiere Manifestación o Estudio de Impacto Ambiental ante SEDEMA, esos trámites sí causan derechos.',
    ],
    fundamento:'Ley Ambiental CDMX, arts. 106 y 111 (autorización). Código Fiscal de la CDMX (derechos por trámites ambientales).',
    verTambien:[{t:'Trámites',h:'modulo-8-tramites.html'}] },


  // ===== BLOQUE 2: PODA, DERRIBO Y TRASPLANTE =====

  { id:8, bloque:'poda',
    p:'¿En qué supuestos puede autorizarse el derribo de un árbol?',
    r:[
      'La Alcaldía solo puede autorizar derribo, poda o trasplante en cuatro supuestos taxativos: <strong>cuando exista riesgo real y presente para personas o sus bienes inmuebles; cuando exista riesgo real y presente para el patrimonio urbanístico o arquitectónico de la CDMX; cuando sea necesario para el saneamiento o mantenimiento del árbol; o cuando deba evitarse afectación significativa a la infraestructura del lugar.</strong>',
      'En todos los demás casos, la solicitud se resuelve por SEDEMA. El derribo solo procede cuando no existe otra alternativa viable.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 106 fracciones I, II, III y IV.',
    verTambien:[{t:'Casos cotidianos',h:'modulo-5-casos.html'}] },

  { id:9, bloque:'poda',
    p:'¿Qué obligaciones tiene quien me presta el servicio?',
    r:[
      'El podador o dictaminador debe contar en todo momento, durante la ejecución del trabajo, con el <strong>documento de autorización</strong> emitido por la autoridad y con su <strong>acreditación vigente</strong> expedida por SEDEMA.',
      'Debe acordonar y señalizar el área de trabajo, usar equipo de protección personal y abstenerse de realizar prácticas no permitidas como desmoche, anillado o poda mayor al 25% sin justificación.',
    ],
    fundamento:'NADF-001-RNAT-2015, numerales 5.10.3 a 5.10.5.',
    verTambien:[] },

  { id:10, bloque:'poda',
    p:'¿Qué prácticas están prohibidas, aunque haya autorización?',
    r:[
      'Aun con autorización, está prohibido el <strong>anillado, cinchamiento, descortezado, vertimiento de sustancias tóxicas, ahogamiento por concreto o asfalto, desmoche, corte de raíz fuera de norma, daño mecánico</strong> y la poda mayor al 25% sin justificación técnica.',
      'Si detectas alguna de estas prácticas, repórtalo de inmediato. El dictaminador o autoridad que las constate debe dar parte para iniciar procedimiento administrativo.',
    ],
    fundamento:'NADF-001-RNAT-2015, numeral 5.10.7.',
    verTambien:[{t:'Denuncia ante PAOT',h:'https://www.paot.cdmx.gob.mx'}] },

  { id:11, bloque:'poda',
    p:'¿Pueden podar las raíces de un árbol?',
    r:[
      'Sí, cuando afecten infraestructura subterránea como cisternas, tuberías de agua o drenaje, gas, líneas de energía eléctrica o telefónica. La poda de raíces debe seguir los lineamientos técnicos de la norma.',
      'Si te ofrecen cortar raíces sin dictamen previo o sin justificación documentada, no autorices la intervención: una poda de raíz mal hecha puede provocar la muerte del árbol y derivar en sanción.',
    ],
    fundamento:'NADF-001-RNAT-2015, numerales 6.4.5 y 7.1.3.',
    verTambien:[] },

  { id:12, bloque:'poda',
    p:'¿En qué consiste un trasplante y cuándo se hace?',
    r:[
      'El trasplante consiste en extraer el árbol del sitio donde está y plantarlo en otro lugar. Procede cuando el sitio original es inadecuado para su desarrollo o cuando una obra justificada requiere reubicarlo.',
      'Se prefiere realizarlo en ejemplares jóvenes y vigorosos para minimizar daños. Debe ejecutarse máximo <strong>48 horas después del proceso de banqueo</strong> y conforme a la NADF-006-RNAT-2012.',
    ],
    fundamento:'NADF-001-RNAT-2015, numerales 7.1.4 y 8.5.2. NADF-006-RNAT-2012.',
    verTambien:[] },

  { id:13, bloque:'poda',
    p:'¿Las Alcaldías hacen poda gratuita?',
    r:[
      'Sí. Las Alcaldías prestan el servicio de poda de arbolado en espacios de dominio público o en propiedades particulares cuando se requiere para mejorar o restaurar la estructura de los árboles. Solicita el servicio por <strong>LOCATEL</strong> o por <strong>SUAC</strong>; la programación depende de las cargas operativas de cada demarcación.',
      'No confundas: la Alcaldía presta el servicio; pero la autorización para que un particular pode también se tramita ante la Alcaldía.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 110.',
    verTambien:[{t:'Directorio',h:'modulo-11-directorio.html'}] },

  { id:14, bloque:'poda',
    p:'¿Qué es la "restitución" y por qué tengo que cumplirla?',
    r:[
      'La restitución es la obligación de compensar todo árbol derribado. Puede ser <strong>física</strong> (plantar árboles sustitutos), <strong>económica</strong> (aportación al Fondo Ambiental Público) o por <strong>medida equivalente</strong> (suministro de planta, especies ornamentales o rehabilitación de áreas verdes).',
      'En caso de derribo por obra, el número de árboles a restituir depende del puntaje de valoración del ejemplar: va de <strong>2 árboles (puntaje 7 a 12)</strong> hasta <strong>16 árboles (puntaje 25 a 28)</strong>. En los casos de derribo por riesgo la restitución se hace 1 a 1.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 109. NADF-001-RNAT-2015, numeral 9 y Tablas 2, 3 y 4.',
    verTambien:[] },

  { id:15, bloque:'poda',
    p:'¿Dónde se plantan los árboles de restitución?',
    r:[
      'La primera opción es plantarlos en el sitio mismo del derribo. Si no es viable, se planta lo más cerca posible o en el sitio que determinen SEDEMA o la Alcaldía atendiendo al uso del espacio y la tasa de sobrevivencia esperada.',
      'Si tampoco es viable plantar árboles cerca, se considera el cambio a especies ornamentales o actividades de mantenimiento, rehabilitación o fomento de áreas verdes equivalentes en costo a la restitución económica.',
    ],
    fundamento:'NADF-001-RNAT-2015, numerales 9.1.2 y 9.2.1.',
    verTambien:[] },


  // ===== BLOQUE 3: A QUIÉN ACUDIR =====

  { id:16, bloque:'competencias',
    p:'Mi árbol está en la banqueta frente a mi casa, ¿a quién acudo?',
    r:[
      'A la <strong>Alcaldía correspondiente</strong>, a través de su Dirección General de Servicios Urbanos o equivalente. La banqueta forma parte de la vialidad secundaria, competencia territorial de la Alcaldía.',
      'Si la calle es eje vial, avenida principal, periférico o calzada (vialidad primaria), la ejecución del mantenimiento la realiza SOBSE, aunque la autorización ambiental sigue siendo de SEDEMA.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 106. Ley Orgánica del Poder Ejecutivo CDMX, art. 38 fracc. I (SOBSE).',
    verTambien:[{t:'¿Quién hace qué?',h:'modulo-3-competencias.html'}] },

  { id:17, bloque:'competencias',
    p:'¿Y si el árbol está en un Bosque Urbano o Barranca?',
    r:[
      'En Bosques Urbanos, Barrancas y Áreas Naturales Protegidas locales, la administración directa corresponde a <strong>SEDEMA a través de la Dirección General del Sistema de Áreas Naturales Protegidas y Áreas de Valor Ambiental (DGSANPAVA)</strong>. No tramites en la Alcaldía.',
      'En el caso del <strong>Bosque de Chapultepec</strong>, la administración es de la Dirección Ejecutiva del Bosque de Chapultepec. En ANP federales (Desierto de los Leones, Cumbres del Ajusco, El Tepeyac, etc.), la titularidad es de <strong>CONANP</strong> y SEDEMA coadyuva.',
    ],
    fundamento:'Ley Ambiental CDMX, arts. 116, 117, 120, 126 y 127. Reglamento Interior del Poder Ejecutivo CDMX, arts. 184 y 190 Bis.',
    verTambien:[{t:'Buscador de áreas',h:'modulo-3-competencias.html'}] },

  { id:18, bloque:'competencias',
    p:'¿Qué es la PAOT y para qué sirve?',
    r:[
      'La <strong>Procuraduría Ambiental y del Ordenamiento Territorial</strong> es la autoridad que recibe y atiende denuncias ciudadanas ambientales, formula dictámenes técnicos y periciales de daño ambiental, y emite opiniones para restauración o compensación.',
      'No autoriza poda ni derribo: tu denuncia ante PAOT activa una investigación que puede derivar en procedimiento administrativo o en denuncia penal ante la Fiscalía Ambiental.',
    ],
    fundamento:'Ley Orgánica de la PAOT, art. 5, fracciones I y XV.',
    verTambien:[{t:'Denunciar en PAOT',h:'https://www.paot.cdmx.gob.mx'}] },

  { id:19, bloque:'competencias',
    p:'¿En qué casos llamo al 911 por un árbol?',
    r:[
      '<strong>Solo cuando hay riesgo inminente:</strong> árbol caído sobre persona, vehículo o vivienda; rama mayor desprendida bloqueando vía; fractura estructural con riesgo de caída inmediata; o árbol que tocó cable de alta tensión.',
      'Para árboles dañados sin riesgo activo (inclinados, con plaga, con cavidades), no llames al 911: acude a tu Alcaldía o a SEDEMA. Saturar el 911 con casos no urgentes retrasa atención a emergencias reales.',
    ],
    fundamento:'Ley del Heroico Cuerpo de Bomberos de la CDMX, art. 6, fracc. IX.',
    verTambien:[{t:'Niveles de emergencia',h:'modulo-6-emergencias.html'}] },

  { id:20, bloque:'competencias',
    p:'¿Cuál es la diferencia entre SEDEMA y SOBSE en materia de arbolado?',
    r:[
      '<strong>SEDEMA</strong> es la autoridad ambiental: emite normas, acredita podadores, autoriza derribo en obras con impacto ambiental, administra Bosques Urbanos, Barrancas y ANP.',
      '<strong>SOBSE</strong> es la autoridad operativa de mantenimiento en vialidad primaria del gobierno central. Ejecuta mantenimiento, poda y derribo, pero la autorización ambiental sigue siendo de SEDEMA.',
    ],
    fundamento:'Ley Orgánica del Poder Ejecutivo CDMX, art. 38 fracc. I. Ley Ambiental CDMX, art. 111.',
    verTambien:[{t:'Matriz de competencias',h:'modulo-3-competencias.html'}] },

  { id:21, bloque:'competencias',
    p:'¿En qué casos resuelve SEDEMA y no la Alcaldía?',
    r:[
      'SEDEMA resuelve en todos los casos distintos a los cuatro supuestos que puede autorizar la Alcaldía (riesgo a personas o bienes; riesgo al patrimonio urbanístico; saneamiento; afectación a infraestructura).',
      'En particular, SEDEMA resuelve en proyectos sujetos a Evaluación de Impacto Ambiental, intervenciones en Áreas de Valor Ambiental y ANP locales, y casos de excepción justificada técnicamente.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 106 párrafo penúltimo. Reglamento Interior, art. 184.',
    verTambien:[] },

  { id:22, bloque:'construccion',
    p:'Voy a construir y hay árboles en el predio, ¿qué tengo que hacer?',
    r:[
      'Antes de iniciar la obra, debes obtener autorización de SEDEMA mediante el <strong>trámite en materia de Impacto Ambiental</strong>. El proyecto requiere un dictamen técnico de arbolado elaborado por un dictaminador acreditado.',
      'La autorización determina qué árboles se derriban, cuáles se trasplantan y la restitución correspondiente. Iniciar la obra sin esta autorización implica sanción administrativa y, en su caso, penal.',
    ],
    fundamento:'Ley Ambiental CDMX, arts. 34 y 109. NADF-001-RNAT-2015, numerales 5.10.1 y 7.4.4.',
    verTambien:[{t:'Trámite ante SEDEMA',h:'modulo-8-tramites.html'}] },

  { id:23, bloque:'construccion',
    p:'¿Cuánto tengo que pagar por la restitución?',
    r:[
      'Depende del puntaje de valoración del árbol derribado, calculado por el dictaminador. La tabla oficial va de <strong>230 UCDMX (puntaje 7-12)</strong> hasta <strong>3,681 UCDMX (puntaje 25-28)</strong> por cada árbol, sumando suministro, plantación y dos años de mantenimiento.',
      'Para obras de interés público con compensación física imposible, la aportación al Fondo Ambiental Público es de <strong>al menos 3% del monto total de inversión del proyecto</strong>.',
    ],
    fundamento:'NADF-001-RNAT-2015, Tabla 4. Ley Ambiental CDMX, art. 323.',
    verTambien:[] },

  { id:24, bloque:'construccion',
    p:'¿Puede SEDEMA negar la autorización ambiental?',
    r:[
      'Sí. SEDEMA puede negar la autorización cuando el proyecto se contraponga a la normatividad; cuando afecte la salud de la población, especies amenazadas o zonas de salvaguarda; cuando haya falsedad en la información; o cuando la evaluación no garantice la integridad ambiental.',
      'Adicionalmente, la Secretaría está <strong>obligada a negar el derribo de árboles declarados como patrimonio natural o urbanístico</strong> y a privilegiar el trasplante de ejemplares aptos.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 34 fracc. III y párrafos finales.',
    verTambien:[] },

  { id:25, bloque:'construccion',
    p:'¿Qué pasa si derribo árboles sin la autorización?',
    r:[
      'Quien derribe sin autorización está obligado a realizar la <strong>restitución máxima</strong> establecida en la norma ambiental vigente, reparar los daños al ambiente y, además, queda sujeto a sanciones administrativas y, en su caso, penales.',
      'El derribo sin autorización configura el delito previsto en el Código Penal CDMX. Si interviene un servidor público, la sanción se agrava.',
    ],
    fundamento:'Ley Ambiental CDMX, arts. 109 párrafo 3 y 112. Código Penal CDMX, arts. 343 a 350.',
    verTambien:[] },

  { id:26, bloque:'construccion',
    p:'¿Hay obras exentas del proceso completo?',
    r:[
      'Pueden quedar exentas del <strong>Proceso de Consulta Vecinal para Grandes Construcciones</strong> los proyectos del sector salud, educación o de fomento a la vivienda social, cuando lo soliciten justificadamente y SEDEMA funde y motive la determinación.',
      'La exención de consulta no exime de la autorización ambiental ni del trámite de arbolado: estos siguen siendo obligatorios.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 27 (Proceso de Consulta Vecinal).',
    verTambien:[] },

  { id:27, bloque:'construccion',
    p:'¿Qué pasa con los árboles en ANP, AVA o suelo de conservación cuando hay obra?',
    r:[
      'Toda actividad, obra u operación pública o privada en Áreas Naturales Protegidas, Áreas de Valor Ambiental y Suelo de Conservación requiere <strong>manifestación de impacto ambiental</strong> en su modalidad específica o general, además de opinión de uso de suelo cuando proceda.',
      'Estos trámites se presentan ante SEDEMA, no ante la Alcaldía, aunque la obra se ubique territorialmente en una demarcación.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 28.',
    verTambien:[{t:'Áreas SEDEMA',h:'modulo-3-competencias.html'}] },


  // ===== BLOQUE 5: PREDIOS Y VECINOS =====

  { id:28, bloque:'vecinos',
    p:'Las raíces del árbol del vecino están dañando mi pared, ¿qué hago?',
    r:[
      '<strong>No cortes raíces ni intervengas por tu cuenta:</strong> si lo haces, podrías ser tú quien incurra en sanción. Solicita un dictamen técnico ante tu Alcaldía. Si se acredita que las raíces afectan infraestructura, se puede autorizar una poda de raíces controlada conforme a norma.',
      'Documenta el daño con fotografías y, en su caso, con peritaje civil. Si el vecino se niega a colaborar, presenta reporte en la Alcaldía o denuncia en PAOT.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 106 fracc. IV (afectación a infraestructura). NADF-001-RNAT-2015, numerales 6.4.5 y 7.1.3.',
    verTambien:[{t:'Casos cotidianos',h:'modulo-5-casos.html'}] },

  { id:29, bloque:'vecinos',
    p:'Una rama del árbol del vecino llegó hasta mi predio, ¿puedo cortarla?',
    r:[
      '<strong>No por tu cuenta.</strong> Aunque la rama esté en el espacio aéreo de tu propiedad, el árbol está protegido y la poda requiere autorización. Solicita el servicio a la Alcaldía o, si hay riesgo a tu inmueble, presenta solicitud con dictamen técnico.',
      'Si la rama representa <strong>riesgo inminente de caída sobre personas o bienes</strong>, llama al 911. Bomberos puede seccionarla por emergencia.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 106. Ley del Heroico Cuerpo de Bomberos CDMX, art. 6 fracc. IX.',
    verTambien:[{t:'Emergencias',h:'modulo-6-emergencias.html'}] },

  { id:30, bloque:'vecinos',
    p:'El árbol del vecino me da demasiada sombra y no crecen mis plantas, ¿puedo pedir que lo derriben?',
    r:[
      'La sombra <strong>no es causal suficiente</strong> para autorizar derribo. La ley solo permite derribo o poda mayor en cuatro supuestos: riesgo a personas o bienes, riesgo al patrimonio, saneamiento del árbol o afectación significativa a infraestructura.',
      'Lo que sí puedes solicitar es una <strong>poda de aclareo o elevación de copa</strong>, prácticas previstas en la norma que permiten mejorar la entrada de luz sin comprometer la integridad del árbol.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 106 fracciones I a IV. NADF-001-RNAT-2015, numerales 6.1 y 6.2.',
    verTambien:[] },

  { id:31, bloque:'vecinos',
    p:'Un árbol cayó sobre mi auto o mi vivienda, ¿quién responde?',
    r:[
      'Depende de la titularidad del árbol y de si había antecedentes. Si el árbol estaba en bien de dominio público y la autoridad fue notificada previamente sobre su estado de riesgo sin actuar, puedes reclamar la <strong>responsabilidad patrimonial del Estado</strong>.',
      'Si el árbol estaba en predio privado y el propietario fue advertido sin tomar medidas, puede haber responsabilidad civil. Documenta el incidente con fotografías, parte de Bomberos o de la SSC, y peritaje.',
    ],
    fundamento:'Ley Ambiental CDMX, arts. 316 a 318 (responsabilidad y compensación ambiental). Código Civil para el Distrito Federal (responsabilidad civil).',
    verTambien:[] },

  { id:32, bloque:'vecinos',
    p:'¿Puedo plantar un árbol en la banqueta frente a mi casa?',
    r:[
      'La banqueta es bien de dominio público. Plantar requiere <strong>coordinación con tu Alcaldía</strong>: ellas determinan especie, ubicación y mantenimiento iniciales. Algunas Alcaldías tienen viveros y entregan árboles para plantación vecinal.',
      'Plantar especies invasoras o exóticas no recomendadas, o hacerlo sin coordinación, puede derivar en retiro del árbol y, en su caso, sanción.',
    ],
    fundamento:'Ley Ambiental CDMX, arts. 104 a 106. NADF-006-RNAT-2012 (especies y plantación).',
    verTambien:[{t:'Directorio',h:'modulo-11-directorio.html'}] },


  // ===== BLOQUE 6: DENUNCIAS Y REPORTES =====

  { id:33, bloque:'denuncias',
    p:'Vi a alguien podando o derribando un árbol sin permiso, ¿qué hago?',
    r:[
      'Denuncia ante la <strong>PAOT</strong>. Tu denuncia puede ser ciudadana o anónima. Aporta lo que tengas: fotografías, video, hora, ubicación, descripción de personas y vehículos. Cuanta más evidencia, más sólida la investigación.',
      'Si es flagrante y consideras que hay un delito en proceso, también puedes acudir a SSC o a la Fiscalía Ambiental. Las dos vías son compatibles: la administrativa (PAOT) y la penal (Fiscalía).',
    ],
    fundamento:'Ley Orgánica de la PAOT, art. 5 fraccs. I y XV. Código Penal CDMX, arts. 343 a 350.',
    verTambien:[{t:'Denunciar PAOT',h:'https://www.paot.cdmx.gob.mx'}] },

  { id:34, bloque:'denuncias',
    p:'¿Mi denuncia puede ser anónima?',
    r:[
      '<strong>Sí.</strong> La denuncia ante PAOT puede presentarse de forma anónima. Aunque la denuncia firmada permite mejor seguimiento y notificación, la anónima también activa la investigación.',
      'Si das tus datos de contacto, PAOT te informará sobre el avance del expediente y, en su caso, la resolución.',
    ],
    fundamento:'Ley Orgánica de la PAOT, art. 5.',
    verTambien:[] },

  { id:35, bloque:'denuncias',
    p:'¿Cómo identifico que una autorización es falsa?',
    r:[
      'Una autorización legítima incluye <strong>sello, firma de funcionario público responsable, número de expediente y fecha</strong>. Pide ver el documento físico antes de permitir que inicien trabajos.',
      'Cruza el dato con la acreditación del podador en el padrón oficial. Si los datos no coinciden, no permitas la intervención y reporta de inmediato.',
    ],
    fundamento:'NADF-001-RNAT-2015, numerales 5.5, 5.7 y 5.10.5.',
    verTambien:[{t:'Verifica al podador',h:'modulo-3-competencias.html#verificador'}] },

  { id:36, bloque:'denuncias',
    p:'¿Qué hago si un servidor público me pide soborno para autorizar un trámite?',
    r:[
      '<strong>Denúncialo.</strong> La Ley Ambiental establece agravante específica cuando un servidor público interviene en derribo, poda o trasplante de árboles en contravención a la norma, aprovechándose de su cargo. La sanción es la del Código Penal CDMX agravada.',
      'Adicionalmente, repórtalo ante la <strong>Secretaría de la Contraloría General</strong> y la Contraloría Interna de la dependencia, así como en la Fiscalía Anticorrupción.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 112 párrafo 2. Código Penal CDMX, art. 350.',
    verTambien:[] },

  { id:37, bloque:'denuncias',
    p:'¿Qué información debo aportar al denunciar?',
    r:[
      'Ubicación exacta (dirección, referencias, colonia, alcaldía); fecha y hora del hecho; descripción detallada de lo observado; fotografías o videos (de preferencia con metadatos); número aproximado de árboles afectados y especie si la conoces; descripción de personas, herramientas y vehículos involucrados.',
      'Si quien interviene presentó algún documento, descríbelo o fotografíalo. Cuanta más evidencia documental, mayor solidez investigativa.',
    ],
    fundamento:'Ley Orgánica de la PAOT, art. 5 fraccs. I y XV.',
    verTambien:[] },

  { id:38, bloque:'denuncias',
    p:'¿Qué hace PAOT con mi denuncia?',
    r:[
      'PAOT investiga los hechos, recaba pruebas, realiza inspección si procede y emite <strong>dictamen técnico</strong>. Con base en el dictamen, da vista a la autoridad competente (SEDEMA, Alcaldía o, en su caso, Fiscalía Ambiental) para que aplique sanciones o inicie procedimiento penal.',
      'PAOT también puede emitir opiniones para restauración o compensación ambiental.',
    ],
    fundamento:'Ley Orgánica de la PAOT, art. 5 fraccs. I, XV y demás aplicables.',
    verTambien:[] },


  // ===== BLOQUE 7: ÁRBOLES PATRIMONIALES =====

  { id:39, bloque:'patrimonio',
    p:'¿Qué es un árbol patrimonial?',
    r:[
      'Es un ejemplar arbóreo que destaca por una o varias características de tipo <strong>biológico, paisajístico, histórico, cultural o social</strong>, o que por su especie, tamaño, edad o belleza puede considerarse notable, singular o monumental.',
      'La norma obliga a tomar medidas para su protección, conservación y mejora. Los árboles patrimoniales <strong>no son susceptibles de derribo a cambio de restitución</strong>, salvo que representen riesgo real y presente.',
    ],
    fundamento:'NADF-001-RNAT-2015, numeral 7.5. Ley de Salvaguarda del Patrimonio Urbanístico Arquitectónico del Distrito Federal.',
    verTambien:[{t:'Árboles patrimoniales',h:'modulo-7-patrimoniales.html'}] },

  { id:40, bloque:'patrimonio',
    p:'¿Cómo propongo que un árbol sea reconocido como patrimonial?',
    r:[
      '<strong>Cualquier persona puede proponer un ejemplar al registro.</strong> Reúne información del árbol: ubicación exacta, especie (nombre común y científico si lo conoces), altura aproximada, diámetro de tronco, edad estimada, historia del lugar, fotografías y testimonios o referencias documentales sobre su valor cultural.',
      'Presenta la propuesta ante la <strong>Dirección General del Sistema de Áreas Naturales Protegidas y Áreas de Valor Ambiental de SEDEMA</strong> en alguna de las convocatorias vigentes que para ello se emitan, o puedes presentar tu propuesta directamente ante la Secretaría de Cultura. Si el dictaminador presume que un árbol califica como patrimonial, está obligado a turnar el expediente a SEDEMA para su evaluación.',
    ],
    fundamento:'NADF-001-RNAT-2015, numeral 7.5.',
    verTambien:[{t:'Cómo proponer',h:'modulo-7-patrimoniales.html'}] },

  { id:41, bloque:'patrimonio',
    p:'¿Pueden derribar un árbol patrimonial?',
    r:[
      '<strong>Únicamente cuando represente riesgo real y presente.</strong> En todos los demás casos, no es susceptible de derribo a cambio de restitución. La protección incluye obligación de tomar medidas para su conservación y mejora.',
      'En proyectos de impacto ambiental, SEDEMA debe negar el derribo de árboles declarados como patrimonio natural o urbanístico.',
    ],
    fundamento:'NADF-001-RNAT-2015, numeral 7.5. Ley Ambiental CDMX, art. 34 párrafos finales.',
    verTambien:[] },


  // ===== BLOQUE 8: SANCIONES Y RESTITUCIÓN =====

  { id:42, bloque:'sanciones',
    p:'¿Qué pasa si podo o derribo sin autorización?',
    r:[
      'Tres consecuencias simultáneas: <strong>(1) sanción administrativa con multa, (2) obligación de restitución máxima conforme a la norma y (3) responsabilidad penal por delitos contra el ambiente</strong>, con pena de prisión y multa.',
      'Si el caso causa daños a terceros, además puede exigirse responsabilidad civil. Las tres vías son independientes y compatibles.',
    ],
    fundamento:'Ley Ambiental CDMX, arts. 109 y 112. Código Penal CDMX, arts. 343 a 350.',
    verTambien:[] },

  { id:43, bloque:'sanciones',
    p:'¿Qué es la restitución máxima?',
    r:[
      'Es la obligación, para quien derribe arbolado sin autorización o incumpla las condiciones de la misma, de compensar con el <strong>número de árboles más alto previsto en la tabla de restitución (16 árboles por cada árbol derribado, conforme al puntaje 25-28 de la NADF-001-RNAT-2015)</strong>.',
      'Además, el infractor debe reparar los daños ambientales causados, sin perjuicio de las sanciones administrativas y penales aplicables.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 109 párrafo 3. NADF-001-RNAT-2015, Tabla 2.',
    verTambien:[] },

  { id:44, bloque:'sanciones',
    p:'¿Es delito el derribo de árboles sin autorización?',
    r:[
      '<strong>Sí.</strong> El Código Penal CDMX prevé tipos penales específicos contra el ambiente. El derribo, poda o trasplante de árboles en bienes públicos o privados realizado en contravención a la Ley Ambiental constituye delito.',
      'Si interviene un servidor público en ejercicio o aprovechándose de sus funciones, la sanción se agrava conforme al <strong>artículo 350</strong> del propio Código Penal.',
    ],
    fundamento:'Código Penal CDMX, arts. 343 a 350. Ley Ambiental CDMX, art. 112.',
    verTambien:[] },

  { id:45, bloque:'sanciones',
    p:'¿Quién impone las sanciones?',
    r:[
      'Las sanciones administrativas las imponen <strong>SEDEMA o las Alcaldías</strong>, según la competencia. PAOT da vista y emite dictámenes técnicos que sustentan el procedimiento.',
      'Las sanciones penales corresponden al <strong>Ministerio Público de la Fiscalía Ambiental</strong> y son resueltas por jueces en materia penal de la Ciudad de México.',
    ],
    fundamento:'Ley Ambiental CDMX, capítulo de sanciones. Código Penal CDMX, arts. 343-350. Ley Orgánica de la PAOT, art. 5.',
    verTambien:[] },

  { id:46, bloque:'sanciones',
    p:'¿La sanción prescribe?',
    r:[
      'Sí, los procedimientos administrativos y penales tienen plazos de prescripción. Para infracciones administrativas, el plazo se establece en la legislación de procedimiento administrativo aplicable. Para delitos, los plazos están en el Código Penal CDMX.',
      'En todo caso, el plazo se interrumpe con el inicio del procedimiento, por lo que <strong>denunciar oportunamente es decisivo</strong>.',
    ],
    fundamento:'Código Penal CDMX (prescripción). Ley de Procedimiento Administrativo CDMX.',
    verTambien:[] },

  { id:47, bloque:'sanciones',
    p:'¿Reincidir aumenta la sanción?',
    r:[
      '<strong>Sí.</strong> La reincidencia es agravante tanto en materia administrativa como penal. Para personas morales (empresas), aplican daños punitivos que pueden reducirse a su tercera parte si la empresa acredita controles organizacionales activos al menos tres años antes de la conducta dañosa.',
      'Si la reincidencia involucra a servidores públicos, el agravante del artículo 350 del Código Penal CDMX se suma al de reincidencia general.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 325 (daños punitivos). Código Penal CDMX, art. 350.',
    verTambien:[] },

  { id:48, bloque:'sanciones',
    p:'¿Las empresas también pueden ser sancionadas?',
    r:[
      '<strong>Sí.</strong> Las personas morales (constructoras, despachos, empresas de servicios urbanos) están sujetas al régimen de <strong>daños punitivos</strong> previsto en la Ley Ambiental, además de las sanciones administrativas y la responsabilidad penal de quienes intervinieron en el hecho.',
      'La existencia de control interno ambiental, sistema de gestión ambiental, capacitación, seguro de responsabilidad y código de conducta puede reducir la sanción hasta a un tercio del monto.',
    ],
    fundamento:'Ley Ambiental CDMX, art. 325 fraccs. I a VIII.',
    verTambien:[] },

  { id:49, bloque:'sanciones',
    p:'¿Cómo se calcula la compensación económica?',
    r:[
      'Se calcula con base en el <strong>puntaje de valoración</strong> del árbol derribado (de 7 a 28 puntos), siguiendo la Tabla 4 de la NADF-001-RNAT-2015. La aportación se hace al <strong>Fondo Ambiental Público</strong> y se destina exclusivamente a producción de planta, plantación, fomento, mejoramiento y mantenimiento de áreas verdes en la CDMX.',
      'Para obras públicas de interés general con compensación física imposible, la aportación es de al menos <strong>3% del monto total de inversión</strong> del proyecto.',
    ],
    fundamento:'NADF-001-RNAT-2015, Tabla 4 y numeral 9.2. Ley Ambiental CDMX, art. 323.',
    verTambien:[] },

  { id:50, bloque:'sanciones',
    p:'¿A dónde van los recursos económicos por compensación?',
    r:[
      'Al <strong>Fondo Ambiental Público de la CDMX</strong>. La autoridad debe utilizar esos recursos exclusivamente en obras o actividades relacionadas con producción de planta en viveros, plantación, fomento, mejoramiento y mantenimiento de áreas verdes en la Ciudad de México.',
      'El uso del Fondo es público y auditable: cualquier persona puede solicitar información sobre su aplicación por la vía de transparencia.',
    ],
    fundamento:'NADF-001-RNAT-2015, numeral 9.2. Ley Ambiental CDMX, capítulo del Fondo Ambiental Público. Ley de Transparencia, Acceso a la Información Pública y Rendición de Cuentas de la CDMX.',
    verTambien:[] }
];



/* ============ RENDERIZADO ============ */
function renderFAQ(){
  const cont = document.getElementById('faq-contenedor');
  if(!cont) return;

  // Conteo por bloque
  const conteo = {};
  FAQ_BLOQUES.forEach(b => conteo[b.id] = FAQ.filter(f => f.bloque === b.id).length);

  // Filtros temáticos
  const temas = document.getElementById('faq-temas');
  if(temas){
    temas.innerHTML = '<button class="faq-tema activa" data-tema="todos">Todas <span class="contador-tema">' + FAQ.length + '</span></button>' +
      FAQ_BLOQUES.map(b => '<button class="faq-tema" data-tema="' + b.id + '">' + b.nombre + ' <span class="contador-tema">' + conteo[b.id] + '</span></button>').join('');
  }

  // Bloques de preguntas
  let html = '';
  FAQ_BLOQUES.forEach((bloque, idx) => {
    const preguntas = FAQ.filter(f => f.bloque === bloque.id);
    html += '<section class="faq-bloque" data-bloque="' + bloque.id + '">' +
      '<h3 class="faq-bloque-titulo"><span class="num">' + String(idx+1).padStart(2,'0') + '</span>' + bloque.nombre + '</h3>' +
      '<p class="faq-bloque-descripcion">' + bloque.descr + '</p>';
    preguntas.forEach(f => {
      const numero = String(f.id).padStart(2,'0');
      const respuestaHTML = f.r.map(p => '<p>' + p + '</p>').join('');
      const verTambienHTML = f.verTambien && f.verTambien.length
        ? '<div class="ver-tambien"><span>Ver también:</span>' + f.verTambien.map(v => '<a href="' + v.h + '">' + v.t + '</a>').join('') + '</div>'
        : '';
      html += '<article class="faq-item" data-id="' + f.id + '" data-bloque="' + f.bloque + '">' +
        '<button class="faq-pregunta" onclick="toggleFAQ(this)">' +
          '<span class="numero">' + numero + '</span>' +
          '<span class="texto">' + f.p + '</span>' +
          '<span class="toggle">+</span>' +
        '</button>' +
        '<div class="faq-respuesta">' +
          respuestaHTML +
          '<div class="fundamento"><strong>FUNDAMENTO JURÍDICO ·</strong> ' + f.fundamento + '</div>' +
          verTambienHTML +
        '</div>' +
      '</article>';
    });
    html += '</section>';
  });
  cont.innerHTML = html;

  // Tabs
  document.querySelectorAll('.faq-tema').forEach(t => {
    t.addEventListener('click', () => filtrarFAQ(t.dataset.tema, t));
  });

  // Búsqueda con Enter o tecleo
  const input = document.getElementById('faq-busqueda');
  if(input){
    input.addEventListener('input', buscarFAQ);
  }
}

function toggleFAQ(btn){
  const item = btn.closest('.faq-item');
  item.classList.toggle('abierto');
}

function filtrarFAQ(tema, btnActivo){
  document.querySelectorAll('.faq-tema').forEach(b => b.classList.remove('activa'));
  if(btnActivo) btnActivo.classList.add('activa');
  document.querySelectorAll('.faq-bloque').forEach(b => {
    b.style.display = (tema === 'todos' || b.dataset.bloque === tema) ? '' : 'none';
  });
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('oculto');
    i.classList.remove('abierto');
  });
  const input = document.getElementById('faq-busqueda');
  if(input) input.value = '';
  const contador = document.getElementById('faq-contador');
  if(contador) contador.className = 'faq-contador';
}

function buscarFAQ(){
  const input = document.getElementById('faq-busqueda');
  const contador = document.getElementById('faq-contador');
  const q = input.value.trim().toLowerCase();

  // Reset filtro temático
  document.querySelectorAll('.faq-tema').forEach(b => b.classList.remove('activa'));
  document.querySelector('.faq-tema[data-tema="todos"]').classList.add('activa');
  document.querySelectorAll('.faq-bloque').forEach(b => b.style.display = '');

  if(!q){
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('oculto'));
    contador.className = 'faq-contador';
    return;
  }

  let match = 0;
  FAQ.forEach(f => {
    const item = document.querySelector('.faq-item[data-id="' + f.id + '"]');
    if(!item) return;
    const texto = (f.p + ' ' + f.r.join(' ') + ' ' + f.fundamento).toLowerCase();
    if(texto.includes(q)){
      item.classList.remove('oculto');
      match++;
    } else {
      item.classList.add('oculto');
      item.classList.remove('abierto');
    }
  });

  // Ocultar bloques sin coincidencias
  document.querySelectorAll('.faq-bloque').forEach(b => {
    const visibles = b.querySelectorAll('.faq-item:not(.oculto)').length;
    b.style.display = visibles ? '' : 'none';
  });

  if(match === 0){
    contador.className = 'faq-contador visible sin-resultados';
    contador.innerHTML = '<strong>Sin resultados para "' + q + '".</strong> Prueba con un término más general o llama a SEDEMATEL 55 5278 9931.';
  } else {
    contador.className = 'faq-contador visible';
    contador.innerHTML = '<strong>' + match + '</strong> ' + (match === 1 ? 'pregunta encontrada' : 'preguntas encontradas') + ' para "' + q + '".';
  }
}

function limpiarBusquedaFAQ(){
  const input = document.getElementById('faq-busqueda');
  if(input) input.value = '';
  buscarFAQ();
}

document.addEventListener('DOMContentLoaded', renderFAQ);
