// ============================================================================
//  es.js — Castellano. EL DICCIONARIO DE REFERENCIA.
// ----------------------------------------------------------------------------
//  Este archivo es la fuente de la verdad: define QUÉ claves existen. Los otros
//  cuatro idiomas son traducciones de este, y si a alguno le falta una clave se
//  usa la de acá (ver la mezcla en i18n/index.jsx).
//
//  Por eso, para agregar un texto nuevo a la página se empieza SIEMPRE por este
//  archivo. Si se agrega solo en inglés, el resto de los idiomas ni se entera.
//
//  Lo que NO está acá está en data/content.js: enlaces, coordenadas, precios,
//  la matriz del QR. Eso no se traduce, es la misma información en los cinco
//  idiomas.
// ============================================================================

export default {
  /* Lo que ve el buscador y la pestaña del navegador. Cambia con el idioma:
     el <title> y la descripción los reescribe el proveedor. */
  meta: {
    title: "Freewheel — Alquilá el auto de un vecino. O ganá con el tuyo.",
    description:
      "Freewheel es la plataforma argentina de alquiler de autos entre particulares: identidad verificada, reservas con calendario real, entrega con código, chat con notas de voz y soporte en cinco idiomas.",
  },

  /* ── La barra de arriba ────────────────────────────────────────────── */
  nav: {
    links: ["Cómo funciona", "Plataforma", "Confianza", "Para dueños", "Preguntas"],
    home: "Freewheel, ir al inicio",
    sections: "Secciones de la página",
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
    light: "Modo claro",
    dark: "Modo oscuro",
    language: "Idioma",
    languageOf: "Ver la página en",
    cta: "Abrir Freewheel",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
  },

  /* ── La portada ────────────────────────────────────────────────────── */
  hero: {
    kicker: "Alquiler de autos entre particulares · Argentina",
    titleLines: ["El auto que necesitás", "está a tres cuadras"],
    lead:
      "Alquilá el auto de alguien de tu barrio por el día que lo necesites, o hacé que el tuyo trabaje los días que está parado. Las dos partes verifican su identidad antes de empezar, y la entrega queda registrada.",
    scrollHint: "Seguí bajando",
    flag: "Argentina",
  },

  /* ── La frase que se ilumina palabra por palabra ───────────────────── */
  statement: {
    text: "Prestarle el auto a un desconocido no es un problema de tecnología. Es un problema de confianza. Todo lo que hay acá abajo existe para resolver eso.",
    highlight: ["confianza"],
  },

  /* ── Los cuatro pasos ──────────────────────────────────────────────── */
  journey: {
    label: "Cómo funciona",
    titleLines: ["Sin mostrador, sin fila", "y sin depósito en garantía"],
    steps: [
      {
        title: "Creás tu cuenta en cinco minutos",
        text: "Cargás tus datos, confirmás el mail y sacás una foto del DNI y de la licencia. Se revisan al instante y te avisamos ahí mismo si alguna salió movida, así no esperás dos días para enterarte de que hay que repetirla.",
        aside: "Lo hacés una sola vez. Después reservás en dos toques.",
      },
      {
        title: "Encontrás el auto que te sirve",
        text: "Buscás cerca tuyo, ponés los días que lo necesitás y ves solamente los autos que están libres en esas fechas. Filtrás por tamaño, caja automática o manual, combustible y hasta cuánto querés gastar por día.",
        aside: "Nunca vas a escribirle a alguien para que te diga que justo esos días no puede.",
      },
      {
        title: "Reservás y arreglan la entrega",
        text: "Pagás desde la aplicación y se abre el chat con el dueño para acordar dónde y a qué hora. Podés mandarle un audio mientras manejás o una foto de la esquina donde lo esperás.",
        aside: "El pago queda hecho antes de que se vean, así nadie anda con efectivo encima.",
      },
      {
        title: "Se entregan el auto con un código",
        text: "En el momento de la entrega, uno muestra su código en la pantalla y el otro lo confirma. Queda asentado quién entregó, quién recibió y a qué hora. Al devolverlo se repite al revés.",
        aside: "Si después aparece un desacuerdo, hay un registro con hora, no la palabra de uno contra la del otro.",
      },
    ],
  },

  /* ── Las ocho capacidades ──────────────────────────────────────────── */
  platform: {
    label: "La plataforma",
    title: "Todo lo que hicimos para que puedas confiar",
    lead:
      "Prestar el auto o manejar el de otro da nervios. Cada una de estas ocho cosas saca uno de esos nervios del medio.",
    items: [
      {
        title: "Nadie entra sin decir quién es",
        text: "Para publicar o para reservar hay que subir el DNI y la licencia de conducir. Los revisamos antes de habilitar la cuenta. La persona que te va a alquilar el auto tuvo que hacer exactamente lo mismo que vos.",
      },
      {
        title: "Las fotos son del auto que vas a recibir",
        text: "Cada imagen que se publica se revisa antes de salir. No entran fotos bajadas de internet ni de un modelo distinto: lo que ves en la publicación es el auto que te van a entregar.",
      },
      {
        title: "Publicar te lleva un minuto",
        text: "Ponés la marca, el modelo y el año, y la ficha se completa sola: baúl, puertas, potencia, consumo. No tenés que buscar el manual del auto para llenar quince campos.",
      },
      {
        title: "Tu auto solo se alquila cuando vos querés",
        text: "Marcás los días que lo vas a usar y desaparecen del calendario. Nadie puede reservarte el fin de semana que te vas a la costa.",
      },
      {
        title: "Se arregla todo por chat, sin dar tu teléfono",
        text: "Mensajes, fotos, archivos y audios dentro de la aplicación. Los audios se transcriben, así que podés leerlos en el colectivo sin auriculares.",
      },
      {
        title: "Si algo sale mal, hay a quién avisarle",
        text: "Podés reportar una publicación o a una persona adjuntando la prueba. Cada caso lo revisa alguien del equipo, y las cuentas que no corresponden se dan de baja.",
      },
      {
        title: "Sabés con quién estás tratando",
        text: "Cada persona arrastra las reseñas de sus alquileres terminados y un rango que se gana con el tiempo. Un platino no se compra: son treinta alquileres con casi cinco estrellas de promedio.",
      },
      {
        title: "Funciona igual si no hablás castellano",
        text: "La aplicación entera está en español, inglés, portugués, italiano y chino. Un turista se verifica, reserva y coordina la entrega en su idioma.",
      },
    ],
  },

  /* ── La demo de inteligencia artificial ────────────────────────────── */
  ai: {
    label: "Inteligencia artificial",
    title: "Te sacamos de encima la parte tediosa",
    lead:
      "Publicar un auto en otro lado son quince minutos llenando campos que no sabés de memoria. Acá ponés marca, modelo y año, y el resto sale solo. Lo mismo con los documentos: los revisamos al instante en vez de hacerte esperar dos días.",
    barTitle: "Freewheel · asistente",
    barState: "en curso",
    input: "Entrada",
    output: "Respuesta",
    typing: "escribiendo",
    uses: [
      {
        label: "Completar la ficha técnica",
        prompt: "Toyota Corolla 2021",
        output: [
          "Baúl 371 litros",
          "Puertas 4",
          "Potencia 122 CV",
          "Consumo mixto 6.8 l/100km",
          "Tracción delantera",
        ],
        note: "Ponés marca, modelo y año. El resto se completa solo, y si algo no coincide lo corregís vos.",
      },
      {
        label: "Revisar las fotos del auto",
        prompt: "4 imágenes subidas",
        output: [
          "Imagen 1 · vehículo detectado",
          "Imagen 2 · vehículo detectado",
          "Imagen 3 · no se reconoce un vehículo",
          "Imagen 4 · vehículo detectado",
        ],
        note: "Cada foto se revisa antes de publicarse. Lo que ves en el aviso es el auto que te van a entregar.",
      },
      {
        label: "Verificar el documento",
        prompt: "Frente del DNI",
        output: [
          "Tipo de documento correcto",
          "Nombre legible",
          "Número legible",
          "Dentro de la fecha de vigencia",
        ],
        note: "Revisamos el DNI y la licencia en el momento y te avisamos ahí mismo si hay que repetir la foto.",
      },
      {
        label: "Responder consultas",
        prompt: "¿Cómo cancelo una reserva?",
        output: [
          "Entrá a Mis reservas",
          "Abrí la reserva que querés cancelar",
          "Tocá Cancelar y elegí el motivo",
          "El dueño recibe el aviso al instante",
        ],
        note: "Un asistente que está en todas las pantallas y conoce tu reserva, a cualquier hora.",
      },
    ],
  },

  /* ── Confianza: verificación y rangos ──────────────────────────────── */
  trust: {
    label: "Confianza",
    title: "Del otro lado hay alguien con nombre, apellido y antecedentes",
    lead:
      "No le estás dejando el auto a un usuario anónimo. Es una persona que mostró su documento, su licencia y todo lo que hizo antes en la plataforma.",
    kycTitle: "Verificación de identidad",
    kycNote: "Cuatro pasos que hace cada persona antes de poder usar Freewheel.",
    kyc: [
      ["Confirma su mail", "Un código de seis dígitos. Sin eso no entra."],
      ["Muestra el DNI", "Frente y dorso. Revisamos que sea el documento y que esté vigente."],
      ["Muestra la licencia", "Sin licencia al día no puede manejar tu auto. Punto."],
      ["Alguien lo revisa", "Si una foto no se lee, se la volvemos a pedir antes de habilitarlo."],
    ],
    kycFoot:
      "Tu dirección no se publica. Quien mira tu auto ve el barrio; la esquina exacta la sabe recién cuando la reserva está paga.",
    tiersTitle: "Rangos por reseñas reales",
    tiersNote: "El rango no se compra ni se acelera:",
    tiersNoteEm: "se gana alquilando bien",
    tiers: [
      { name: "Bronce", req: "su primer alquiler terminado" },
      { name: "Plata", req: "5 alquileres, 4 estrellas o más" },
      { name: "Oro", req: "15 alquileres, 4.5 de promedio" },
      { name: "Platino", req: "30 alquileres, casi cinco estrellas" },
    ],
    tiersFoot:
      "Si alguien recién arranca, te lo decimos: no vas a ver cinco estrellas de una cuenta creada ayer.",
  },

  /* ── Las tres pantallas en vivo ────────────────────────────────────── */
  showcase: {
    label: "Así se ve",
    title: "Mirá cómo se ve por dentro",
    lead: "No son bocetos: es la aplicación andando. Tocá el mapa, escuchá el audio, abrí el perfil.",
    blocks: [
      {
        title: "Te verificás en un minuto, no en tres días",
        text: "Sacás la foto del DNI y te decimos ahí mismo si está bien. Nada de mandar un correo y esperar a que alguien lo mire el lunes. Y si salió movida, la repetís en el momento.",
      },
      {
        title: "Encontrá uno a la vuelta de tu casa",
        text: "Cada punto es un auto disponible. Vas a ver el barrio donde está, no la puerta del dueño: la dirección exacta aparece cuando la reserva ya está hecha. Es la privacidad que vos también vas a querer cuando publiques el tuyo.",
      },
      {
        title: "Arreglan la entrega sin dar el teléfono",
        text: "Todo pasa dentro de la aplicación: mensajes, fotos del estado del auto y audios que se transcriben para leerlos en el colectivo. Y tocando el nombre ves quién es la otra persona antes de encontrarte con ella.",
      },
    ],

    scan: {
      country: "REPÚBLICA ARGENTINA",
      kind: "DNI",
      fields: ["Apellido y nombre", "Documento", "Vencimiento"],
      checks: [
        "Tipo de documento correcto",
        "Nombre legible",
        "Número legible",
        "Dentro de la fecha de vigencia",
      ],
    },

    map: {
      approx: "(zona aprox.)",
      perDay: "/día",
    },

    chat: {
      messages: [
        { body: "Hola, sí, está disponible esos días." },
        { body: "Genial. ¿Dónde lo retiro?" },
        { transcript: "En Godoy Cruz y Santa Fe, a una cuadra del subte. Te espero a las diez." },
        { caption: "Estado actual del auto" },
        { body: "Perfecto, nos vemos ahí. Gracias!" },
      ],
      placeholder: "Escribí un mensaje...",
      send: "Enviar",
      typing: "escribiendo",
      transcript: "Transcripción",
      play: "Reproducir la nota de voz",
      pause: "Pausar la nota de voz",
      sent: "Enviado",
      delivered: "Entregado",
      read: "Leído",
    },

    profile: {
      open: "Perfil",
      close: "Cerrar",
      closeScrim: "Cerrar el perfil",
      since: "En Freewheel desde marzo de 2026",
      verified: "Identidad verificada",
      ratings: "Calificaciones",
      asOwner: "Como dueño:",
      trips: "alquileres completados",
      reviewsTitle: "Reseñas recibidas",
      stars: "de 5 estrellas",
      reviews: [
        {
          role: "Como dueña del auto",
          date: "12 de marzo de 2026",
          body: "Puntual, cuidadoso y me devolvió el auto con el tanque lleno. Ojalá todos alquilaran así.",
        },
        {
          role: "Como dueño del auto",
          date: "28 de febrero de 2026",
          body: "Avisó cada cosa por chat y coordinó la entrega sin una sola vuelta. Un lujo.",
        },
        {
          role: "Como dueña del auto",
          date: "9 de febrero de 2026",
          body: "Segunda vez que le alquilo. Devuelve el auto impecable y siempre a horario.",
        },
      ],
    },
  },

  /* ── La aplicación adentro del teléfono ────────────────────────────── */
  preview: {
    label: "La aplicación",
    title: "Cuatro pantallas, un solo recorrido",
    screens: [
      { label: "Buscar", title: "¿A dónde vas hoy?" },
      { label: "Ficha del auto", title: "Toyota Corolla 2021" },
      { label: "Reserva", title: "Elegí las fechas" },
      { label: "Entrega", title: "Retiro del vehículo" },
    ],
    tabs: ["Inicio", "Buscar", "Reservas", "Perfil"],
    search: {
      rows: [
        ["Dónde", "Palermo, CABA"],
        ["Retiro", "18 mar"],
        ["Devolución", "21 mar"],
      ],
      button: "Buscar autos",
      results: [
        ["Toyota Corolla 2021", "$8.500", "Palermo · 4.8"],
        ["Volkswagen T-Cross 2022", "$12.000", "Belgrano · 4.6"],
      ],
    },
    detail: {
      specs: [
        ["Baúl", "371 L"],
        ["Puertas", "4"],
        ["Potencia", "122 CV"],
        ["Consumo", "6.8 L"],
      ],
      owner: "Roberto O.",
      ownerMeta: "Rango oro · identidad verificada",
      note: "La dirección exacta se muestra cuando la reserva está confirmada.",
    },
    booking: {
      picked: "Elegidos",
      taken: "Ocupados",
      total: "$8.500 × 3 días",
      totalValue: "$25.500",
      button: "Confirmar reserva",
    },
    qr: {
      alt: "Código QR que abre",
      steps: ["Pago confirmado", "Auto listo para retiro", "Retiro confirmado"],
    },
  },

  /* ── La calculadora ────────────────────────────────────────────────── */
  earnings: {
    label: "Para dueños",
    title: "Tu auto pierde plata todos los días que no lo usás",
    lead:
      "Seguro, patente y garage se pagan igual esté en la calle o en tu cochera. Publicarlo es gratis, vos elegís qué días está disponible, y quien lo alquila mostró su DNI y su licencia antes de poder reservar.",
    points: [
      ["Nunca te quedás sin auto", "Bloqueás los días que lo necesitás y nadie te los puede reservar."],
      ["Sabés quién lo maneja", "Ves su nombre, sus reseñas y su rango antes de aceptar."],
      ["Cobrás sin perseguir a nadie", "El pago entra con la reserva, antes de que le des las llaves."],
    ],
    calcTitle: "¿Cuánto podrías ganar?",
    calcSub: "Movelo y mirá el número.",
    type: "Tipo de auto",
    categories: ["Hatchback", "Sedán", "SUV", "Premium"],
    daysLabel: "Días alquilado por mes",
    result: "Te queda por mes",
    day: "día",
    days: "días",
    fee: "Comisión Freewheel",
    note: "Estimación orientativa. El precio final lo ponés vos al publicar.",
  },

  /* ── Los cinco idiomas ─────────────────────────────────────────────── */
  languages: {
    label: "Idiomas",
    title: "Un turista puede alquilar un auto acá",
    text:
      "La aplicación está traducida entera a cinco idiomas: cada pantalla, cada aviso y cada mensaje de error. Alguien que llega de afuera se verifica, reserva y coordina la entrega sin tener que entender una palabra de castellano.",
    list: "Idiomas",
    demoLabel: "Pantalla de inicio",
  },

  /* ── Preguntas frecuentes ──────────────────────────────────────────── */
  faq: {
    label: "Preguntas",
    title: "Lo que seguro te estás preguntando",
    lead:
      "Y si te queda una duda, adentro de la aplicación hay un asistente que responde a cualquier hora.",
    items: [
      {
        q: "¿Qué necesito para alquilar?",
        a: "Ser mayor de 18, tener la licencia de conducir vigente y un medio de pago. Subís la licencia y el DNI una sola vez, cuando creás la cuenta; a partir de ahí reservás en dos toques.",
      },
      {
        q: "¿Cómo sé que puedo confiar?",
        a: "Porque pasó por lo mismo que vos: sin DNI y licencia aprobados no se puede publicar un auto ni reservar uno. Además vas a ver sus reseñas de alquileres terminados y su rango, que se gana con el tiempo y no se puede comprar.",
      },
      {
        q: "¿Y si aparece un golpe?",
        a: "La entrega y la devolución quedan registradas con un código de cada parte, con fecha y hora. En el momento pueden sacarse fotos por el chat, y cualquiera de los dos puede abrir un reporte adjuntando esa prueba. No queda en la palabra de uno contra la del otro.",
      },
      {
        q: "¿Puedo usarlo cuando quiera?",
        a: "Es tuyo, así que sí. Marcás los días que lo vas a usar y desaparecen del calendario: nadie te lo puede reservar esos días. Lo publicás cuando querés y lo sacás cuando querés.",
      },
      {
        q: "¿Cuánto se puede ganar?",
        a: "Depende del modelo, del estado y de cuántos días al mes lo dejes disponible. Más arriba en esta página hay una calculadora para hacerte una idea con tu caso. Publicar no cuesta nada: Freewheel cobra una comisión solamente cuando alguien te alquila.",
      },
      {
        q: "¿Y si hay un problema?",
        a: "Tenés el chat con la otra persona y un asistente dentro de la aplicación que responde a cualquier hora. Y si el problema es serio, el reporte llega a alguien del equipo que lo revisa.",
      },
    ],
  },

  /* ── El cierre y el pie ────────────────────────────────────────────── */
  close: {
    titleLines: ["Hay un auto libre", "a tres cuadras de tu casa"],
    cta: "Abrir Freewheel",
    note:
      "Crear la cuenta es gratis y no pide tarjeta. Verificás tu identidad una sola vez y ya podés reservar, o publicar el tuyo y empezar a cobrar por los días que no lo usás.",
    tagline: "Alquiler de autos entre particulares. Hecho en Argentina.",
    footerNav: "Enlaces del pie de página",
    columns: [
      {
        title: "Cómo funciona",
        links: ["El recorrido completo", "La plataforma", "La aplicación por dentro"],
      },
      {
        title: "Confianza",
        links: ["Verificación de identidad", "Reseñas y rangos", "Preguntas frecuentes"],
      },
      {
        title: "Para dueños",
        links: ["Cuánto podés ganar", "Cómo se publica", "Idiomas disponibles"],
      },
    ],
    bottom: "Alquiler de autos entre particulares · Argentina",
  },
};
