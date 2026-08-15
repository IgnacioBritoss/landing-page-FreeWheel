// ============================================================================
//  content.js — TODOS los textos de la landing, en un solo lugar
// ----------------------------------------------------------------------------
//  Ningún componente tiene texto escrito adentro. Todo sale de acá.
//
//  POR QUÉ: para cambiar un título, un precio o agregar una pregunta al FAQ no
//  hay que entrar a tocar JSX ni entender React. Se edita este archivo y listo.
//  Es el mismo criterio que la app usa con i18n/es.js.
//
//  ─────────────────────────────────────────────────────────────────────────
//  UNA REGLA: NO HAY NÚMEROS INVENTADOS.
//  No dice "1.240 autos publicados" ni "8.600 reservas": la plataforma todavía
//  no los tiene, y un dato inflado es lo primero que un lector atento detecta.
//  Lo que sí se afirma —verificación de identidad, revisión con IA, entrega con
//  QR, cinco idiomas— es funcionalidad que la aplicación tiene implementada.
//  ─────────────────────────────────────────────────────────────────────────
// ============================================================================

/**
 * La aplicación en funcionamiento. Todos los enlaces que sacan de la landing
 * apuntan acá: no hay botones de "iniciar sesión" ni de "registrarse"
 * repetidos por la página, porque esas pantallas ya existen del otro lado y
 * duplicarlas acá solo agrega botones que no hacen nada.
 */
export const APP_URL = "https://freewheel-5a.vercel.app/";

/** Links del menú. El href apunta al id de cada <section>. */
export const NAV_LINKS = [
  { href: "#recorrido", label: "Cómo funciona" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#confianza", label: "Confianza" },
  { href: "#duenos", label: "Para dueños" },
  { href: "#preguntas", label: "Preguntas" },
];

/** La portada. Cada línea del titular sube por separado. */
export const HERO = {
  kicker: "Alquiler de autos entre particulares · Argentina",
  titleLines: ["El auto que necesitás", "está a tres cuadras"],
  lead:
    "Alquilá el auto de alguien de tu barrio por el día que lo necesites, o hacé que el tuyo trabaje los días que está parado. Las dos partes verifican su identidad antes de empezar, y la entrega queda registrada.",
  scrollHint: "Seguí bajando",
};

/**
 * La frase que abre la página, debajo del hero. Se resalta palabra por palabra
 * a medida que se scrollea (ver components/Statement.jsx).
 * El resaltado se hace por PALABRA, así que conviene que sea corta.
 */
export const STATEMENT = {
  text: "Prestarle el auto a un desconocido no es un problema de tecnología. Es un problema de confianza. Todo lo que hay acá abajo existe para resolver eso.",
  // Estas palabras se pintan de azul cuando les toca.
  highlight: ["confianza"],
};

/** Los cuatro pasos de la sección fija. */
export const STEPS = [
  {
    n: "01",
    title: "Creás tu cuenta en cinco minutos",
    text: "Cargás tus datos, confirmás el mail y sacás una foto del DNI y de la licencia. Se revisan al instante y te avisamos ahí mismo si alguna salió movida, así no esperás dos días para enterarte de que hay que repetirla.",
    aside: "Lo hacés una sola vez. Después reservás en dos toques.",
  },
  {
    n: "02",
    title: "Encontrás el auto que te sirve",
    text: "Buscás cerca tuyo, ponés los días que lo necesitás y ves solamente los autos que están libres en esas fechas. Filtrás por tamaño, caja automática o manual, combustible y hasta cuánto querés gastar por día.",
    aside: "Nunca vas a escribirle a alguien para que te diga que justo esos días no puede.",
  },
  {
    n: "03",
    title: "Reservás y arreglan la entrega",
    text: "Pagás desde la aplicación y se abre el chat con el dueño para acordar dónde y a qué hora. Podés mandarle un audio mientras manejás o una foto de la esquina donde lo esperás.",
    aside: "El pago queda hecho antes de que se vean, así nadie anda con efectivo encima.",
  },
  {
    n: "04",
    title: "Se entregan el auto con un código",
    text: "En el momento de la entrega, uno muestra su código en la pantalla y el otro lo confirma. Queda asentado quién entregó, quién recibió y a qué hora. Al devolverlo se repite al revés.",
    aside: "Si después aparece un desacuerdo, hay un registro con hora, no la palabra de uno contra la del otro.",
  },
];

/**
 * La plataforma, contada como una lista enumerada y no como una grilla de
 * tarjetas: son capacidades del producto, se leen mejor en fila.
 */
export const PLATFORM = [
  {
    n: "01",
    title: "Nadie entra sin decir quién es",
    text: "Para publicar o para reservar hay que subir el DNI y la licencia de conducir. Los revisamos antes de habilitar la cuenta. La persona que te va a alquilar el auto tuvo que hacer exactamente lo mismo que vos.",
  },
  {
    n: "02",
    title: "Las fotos son del auto que vas a recibir",
    text: "Cada imagen que se publica se revisa antes de salir. No entran fotos bajadas de internet ni de un modelo distinto: lo que ves en la publicación es el auto que te van a entregar.",
  },
  {
    n: "03",
    title: "Publicar te lleva un minuto",
    text: "Ponés la marca, el modelo y el año, y la ficha se completa sola: baúl, puertas, potencia, consumo. No tenés que buscar el manual del auto para llenar quince campos.",
  },
  {
    n: "04",
    title: "Tu auto solo se alquila cuando vos querés",
    text: "Marcás los días que lo vas a usar y desaparecen del calendario. Nadie puede reservarte el fin de semana que te vas a la costa.",
  },
  {
    n: "05",
    title: "Se arregla todo por chat, sin dar tu teléfono",
    text: "Mensajes, fotos, archivos y audios dentro de la aplicación. Los audios se transcriben, así que podés leerlos en el colectivo sin auriculares.",
  },
  {
    n: "06",
    title: "Si algo sale mal, hay a quién avisarle",
    text: "Podés reportar una publicación o a una persona adjuntando la prueba. Cada caso lo revisa alguien del equipo, y las cuentas que no corresponden se dan de baja.",
  },
  {
    n: "07",
    title: "Sabés con quién estás tratando",
    text: "Cada persona arrastra las reseñas de sus alquileres terminados y un rango que se gana con el tiempo. Un platino no se compra: son treinta alquileres con casi cinco estrellas de promedio.",
  },
  {
    n: "08",
    title: "Funciona igual si no hablás castellano",
    text: "La aplicación entera está en español, inglés, portugués, italiano y chino. Un turista se verifica, reserva y coordina la entrega en su idioma.",
  },
];

/** Los cuatro usos de IA, para la demo escrita. */
export const AI_USES = [
  {
    key: "ficha",
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
    key: "fotos",
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
    key: "documento",
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
    key: "asistente",
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
];

/** Los rangos, con los umbrales reales de services/rank.js de la app. */
export const TIERS = [
  { key: "bronze", name: "Bronce", bars: 1, req: "su primer alquiler terminado" },
  { key: "silver", name: "Plata", bars: 2, req: "5 alquileres, 4 estrellas o más" },
  { key: "gold", name: "Oro", bars: 3, req: "15 alquileres, 4.5 de promedio" },
  { key: "platinum", name: "Platino", bars: 4, req: "30 alquileres, casi cinco estrellas" },
];

/**
 * Calculadora de ganancias.
 * ► PERSONALIZAR: `pricePerDay` es el precio sugerido por categoría y `fee` la
 *   comisión. Cambiá estos valores y la calculadora se recalcula sola.
 */
export const CALC = {
  fee: 0.12,
  categories: [
    { id: "hatchback", label: "Hatchback", example: "Volkswagen Polo, Peugeot 208", pricePerDay: 6500 },
    { id: "sedan", label: "Sedán", example: "Toyota Corolla, Fiat Cronos", pricePerDay: 8500 },
    { id: "suv", label: "SUV", example: "Volkswagen T-Cross, Renault Duster", pricePerDay: 12000 },
    { id: "premium", label: "Premium", example: "BMW Serie 3, Audi A4", pricePerDay: 20000 },
  ],
};

/** Las pantallas de la maqueta del teléfono. */
export const SCREENS = [
  { key: "buscar", label: "Buscar", title: "¿A dónde vas hoy?" },
  { key: "detalle", label: "Ficha del auto", title: "Toyota Corolla 2021" },
  { key: "reserva", label: "Reserva", title: "Elegí las fechas" },
  { key: "qr", label: "Entrega", title: "Retiro del vehículo" },
];

/**
 * Los autos publicados, sobre el mapa REAL de la Ciudad de Buenos Aires.
 *
 * `lat` y `lng` son coordenadas de verdad, las del centro de cada barrio: el
 * mapa de la landing es el mismo Leaflet sobre OpenStreetMap que usa la
 * aplicación, así que acá van coordenadas y no porcentajes.
 */
export const MAP_CENTER = [-34.5985, -58.4265];
export const MAP_ZOOM = 12;

export const MAP_CARS = [
  { id: 1, lat: -34.5620, lng: -58.4560, name: "Volkswagen T-Cross", price: "$12.000", zone: "Belgrano" },
  { id: 2, lat: -34.5780, lng: -58.4240, name: "Toyota Corolla", price: "$8.500", zone: "Palermo" },
  { id: 3, lat: -34.6100, lng: -58.4200, name: "Peugeot 208", price: "$6.800", zone: "Almagro" },
  { id: 4, lat: -34.6180, lng: -58.4430, name: "Fiat Cronos", price: "$7.200", zone: "Caballito" },
  { id: 5, lat: -34.6280, lng: -58.4640, name: "Renault Duster", price: "$11.000", zone: "Flores" },
];

/**
 * ► PERSONALIZAR — LA FOTO DEL AUTO EN EL CHAT
 * Poné un archivo (por ejemplo `auto.jpg`) dentro de la carpeta `public/` y
 * escribí acá su ruta: "/auto.jpg". Mientras esto sea null, se dibuja una
 * ilustración vectorial de un auto en tres cuartos, que no depende de ningún
 * archivo y nunca deja el hueco gris de una imagen que no cargó.
 */
export const CHAT_PHOTO = null;

/** La otra persona de la conversación. Su perfil se abre al tocar el nombre. */
export const CHAT_PEER = {
  name: "Ignacio Britos",
  initials: "IB",
  car: "Toyota Corolla 2021",
  since: "En Freewheel desde marzo de 2026",
  tier: "Platino",
  tierBars: 4,
  trips: 34,
  ratingAsOwner: 5.0,
  reviewCount: 32,
  reviews: [
    {
      author: "Martina G.",
      role: "Como dueña del auto",
      date: "12 de marzo de 2026",
      stars: 5,
      body: "Puntual, cuidadoso y me devolvió el auto con el tanque lleno. Ojalá todos alquilaran así.",
    },
    {
      author: "Lucas P.",
      role: "Como dueño del auto",
      date: "28 de febrero de 2026",
      stars: 5,
      body: "Avisó cada cosa por chat y coordinó la entrega sin una sola vuelta. Un lujo.",
    },
    {
      author: "Sofía M.",
      role: "Como dueña del auto",
      date: "9 de febrero de 2026",
      stars: 5,
      body: "Segunda vez que le alquilo. Devuelve el auto impecable y siempre a horario.",
    },
  ],
};

/**
 * La conversación del chat.
 *   side  — "them" es la otra persona, "me" quien está mirando la pantalla.
 *   kind  — cambia cómo se dibuja el mensaje (texto, audio, foto).
 *   state — solo en los propios: "sent" un tilde, "delivered" dos tildes
 *           grises, "read" dos tildes celestes. La animación los recorre en
 *           ese orden, igual que cualquier mensajería.
 */
export const CHAT = [
  { side: "them", kind: "text", body: "Hola, sí, está disponible esos días.", time: "10:02" },
  { side: "me", kind: "text", body: "Genial. ¿Dónde lo retiro?", time: "10:03" },
  {
    side: "them",
    kind: "voice",
    seconds: 8,
    transcript: "En Godoy Cruz y Santa Fe, a una cuadra del subte. Te espero a las diez.",
    time: "10:05",
  },
  { side: "them", kind: "image", caption: "Estado actual del auto", time: "10:06" },
  { side: "me", kind: "text", body: "Perfecto, nos vemos ahí. Gracias!", time: "10:07" },
];

/**
 * El código QR de la pantalla de entrega. ES UN QR DE VERDAD: escaneándolo con
 * la cámara del teléfono se abre APP_URL.
 *
 * La matriz está calculada de antemano y guardada acá como texto (un "1" es un
 * módulo negro). Se hace así, y no generándola en el navegador, porque el
 * contenido nunca cambia: calcular siempre lo mismo en cada visita costaría una
 * librería de varios kilobytes para llegar exactamente a esta matriz.
 *
 * Versión 3, corrección de errores Q (tolera hasta un 25% del código tapado).
 */
export const QR_MATRIX = [
  "11111110011111001010101111111",
  "10000010000111001001101000001",
  "10111010110110101110101011101",
  "10111010000101010011001011101",
  "10111010111000100110001011101",
  "10000010100100111101101000001",
  "11111110101010101010101111111",
  "00000000000011101101000000000",
  "01001010110100011101110110100",
  "01000000011010000010001110011",
  "00101111001000101110110111001",
  "01001101101110011110110000011",
  "00010011000100100101000100001",
  "00100101110101010000001010101",
  "01001110110100000100001010011",
  "11110000100001100111101101011",
  "00001010001110010101110100011",
  "10100101000010100000011110101",
  "00111110000001010010100111001",
  "00101001111010100111000011011",
  "11111010110101010101111111000",
  "00000000110001011011100010101",
  "11111110011110010101101010001",
  "10000010000011010101100011001",
  "10111010100101000101111110010",
  "10111010010001010100000101101",
  "10111010001001111101110001011",
  "10000010101101011100111100011",
  "11111110010111000100101011010",
];

/** Los cinco idiomas traducidos de punta a punta. */
export const LANGUAGES = [
  { code: "es", name: "Español", greeting: "¿A dónde vas hoy?" },
  { code: "en", name: "English", greeting: "Where are you headed?" },
  { code: "pt", name: "Português", greeting: "Para onde você vai?" },
  { code: "it", name: "Italiano", greeting: "Dove vai oggi?" },
  { code: "zh", name: "中文", greeting: "今天去哪里？" },
];

/** Preguntas frecuentes. Agregar una es agregar un objeto a esta lista. */
export const FAQS = [
  {
    q: "¿Qué necesito para alquilar un auto?",
    a: "Ser mayor de 18, tener la licencia de conducir vigente y un medio de pago. Subís la licencia y el DNI una sola vez, cuando creás la cuenta; a partir de ahí reservás en dos toques.",
  },
  {
    q: "¿Cómo sé que la persona que me alquila es de fiar?",
    a: "Porque pasó por lo mismo que vos: sin DNI y licencia aprobados no se puede publicar un auto ni reservar uno. Además vas a ver sus reseñas de alquileres terminados y su rango, que se gana con el tiempo y no se puede comprar.",
  },
  {
    q: "¿Y si el auto aparece con un golpe?",
    a: "La entrega y la devolución quedan registradas con un código de cada parte, con fecha y hora. En el momento pueden sacarse fotos por el chat, y cualquiera de los dos puede abrir un reporte adjuntando esa prueba. No queda en la palabra de uno contra la del otro.",
  },
  {
    q: "¿Puedo usar mi auto cuando lo necesito?",
    a: "Es tuyo, así que sí. Marcás los días que lo vas a usar y desaparecen del calendario: nadie te lo puede reservar esos días. Lo publicás cuando querés y lo sacás cuando querés.",
  },
  {
    q: "¿Cuánto se puede ganar con un auto parado?",
    a: "Depende del modelo, del estado y de cuántos días al mes lo dejes disponible. Más arriba en esta página hay una calculadora para hacerte una idea con tu caso. Publicar no cuesta nada: Freewheel cobra una comisión solamente cuando alguien te alquila.",
  },
  {
    q: "¿Qué pasa si tengo un problema en el medio del alquiler?",
    a: "Tenés el chat con la otra persona y un asistente dentro de la aplicación que responde a cualquier hora. Y si el problema es serio, el reporte llega a alguien del equipo que lo revisa.",
  },
];

/** Pie de página. */
export const FOOTER = {
  tagline: "Alquiler de autos entre particulares. Hecho en Argentina.",
  /* Cada enlace lleva a una sección REAL de esta página. Antes todos
     apuntaban al tope: tres columnas de enlaces que hacían todos lo mismo, que
     es no hacer nada. */
  columns: [
    {
      title: "Cómo funciona",
      links: [
        { label: "El recorrido completo", href: "#recorrido" },
        { label: "La plataforma", href: "#plataforma" },
        { label: "La aplicación por dentro", href: "#app" },
      ],
    },
    {
      title: "Confianza",
      links: [
        { label: "Verificación de identidad", href: "#confianza" },
        { label: "Reseñas y rangos", href: "#confianza" },
        { label: "Preguntas frecuentes", href: "#preguntas" },
      ],
    },
    {
      title: "Para dueños",
      links: [
        { label: "Cuánto podés ganar", href: "#duenos" },
        { label: "Cómo se publica", href: "#recorrido" },
        { label: "Idiomas disponibles", href: "#idiomas" },
      ],
    },
  ],
};
