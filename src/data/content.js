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
    "Freewheel conecta a quien tiene un auto parado con quien lo necesita. Identidad verificada, disponibilidad real y entrega registrada de las dos partes.",
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
    title: "Verificás quién sos",
    text: "Registro en cuatro pasos: tus datos, un código al mail, el DNI y la licencia de conducir. Cada documento lo revisa un modelo de visión en el momento y te avisa si la foto salió movida o cortada. Se hace una sola vez.",
    aside: "Sin esto no se puede publicar ni reservar.",
  },
  {
    n: "02",
    title: "Buscás y elegís las fechas",
    text: "Filtrás por zona, categoría, caja, combustible y precio, en lista o sobre el mapa. El calendario ya viene con los días ocupados marcados, así que no podés reservar algo que no está libre.",
    aside: "El mapa muestra la zona, no la puerta.",
  },
  {
    n: "03",
    title: "Reservás y coordinan",
    text: "Pagás desde la app y se abre el chat con el dueño. Coordinan dónde y a qué hora con mensajes, fotos, archivos y notas de voz que se transcriben solas.",
    aside: "El pago queda registrado antes de la entrega.",
  },
  {
    n: "04",
    title: "Se entrega con código",
    text: "Al entregar el auto, uno muestra su código y el otro lo confirma. Queda asentado quién entregó, quién recibió y a qué hora. Al devolverlo, lo mismo al revés.",
    aside: "Ninguna de las dos partes queda sin respaldo.",
  },
];

/**
 * La plataforma, contada como una lista enumerada y no como una grilla de
 * tarjetas: son capacidades del producto, se leen mejor en fila.
 */
export const PLATFORM = [
  {
    n: "01",
    title: "Verificación de identidad",
    text: "DNI y licencia de conducir, revisados por un modelo de visión que confirma el tipo de documento, que se lea el número y que esté vigente. Lo que no se lee, se vuelve a pedir.",
  },
  {
    n: "02",
    title: "Revisión de las fotos publicadas",
    text: "Cada imagen que se sube pasa por el mismo modelo, que confirma que sea realmente un vehículo. Se aprueba o se rechaza una por una, antes de que la publicación salga.",
  },
  {
    n: "03",
    title: "Ficha técnica completada por IA",
    text: "Con la marca, el modelo y el año se completan solos el baúl, las puertas, la potencia, el consumo y la tracción. Después se corrige a mano lo que haga falta.",
  },
  {
    n: "04",
    title: "Disponibilidad que el dueño controla",
    text: "Los días en que usa el auto se bloquean y desaparecen del calendario para todo el mundo. Lo ocupado nunca aparece como libre.",
  },
  {
    n: "05",
    title: "Mensajería con notas de voz",
    text: "Texto, imágenes, archivos y audios. Las notas de voz se transcriben para poder leerlas cuando no se puede escuchar.",
  },
  {
    n: "06",
    title: "Reportes con prueba adjunta",
    text: "Para reportar una publicación o a una persona hay que adjuntar evidencia. Un panel de administración revisa cada caso.",
  },
  {
    n: "07",
    title: "Rangos por reseñas reales",
    text: "Bronce, plata, oro y platino. Los umbrales piden cantidad y promedio a la vez, así que muchas reseñas flojas no suben a nadie. Sin reseñas no se muestra ningún promedio.",
  },
  {
    n: "08",
    title: "Cinco idiomas, la app entera",
    text: "Español, inglés, portugués, italiano y chino. No solo el menú: cada pantalla, cada aviso y cada mensaje de error.",
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
    note: "Se cargan marca, modelo y año. El resto de la ficha se completa sola y después se corrige a mano.",
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
    note: "Un modelo de visión aprueba o rechaza cada foto antes de que la publicación salga.",
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
    note: "El mismo modelo revisa el DNI y la licencia, y avisa cuando la foto no permite leer un dato.",
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
    note: "Un asistente disponible en todas las pantallas de la aplicación, con el contexto de la cuenta.",
  },
];

/** Los rangos, con los umbrales reales de services/rank.js de la app. */
export const TIERS = [
  { key: "bronze", name: "Bronce", bars: 1, req: "desde 1 reseña" },
  { key: "silver", name: "Plata", bars: 2, req: "5 reseñas · 4.0 de promedio" },
  { key: "gold", name: "Oro", bars: 3, req: "15 reseñas · 4.5 de promedio" },
  { key: "platinum", name: "Platino", bars: 4, req: "30 reseñas · 4.8 de promedio" },
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
 * Los autos sobre el mapa de la Ciudad de Buenos Aires.
 * `x` e `y` son porcentajes dentro del recuadro, ubicados sobre el barrio que
 * corresponde en el dibujo. El mapa de la aplicación es Leaflet sobre
 * OpenStreetMap con coordenadas reales; el de acá es el mismo plano dibujado.
 */
export const MAP_CARS = [
  { id: 1, x: 68, y: 22, name: "Volkswagen T-Cross", price: "$12.000", zone: "Belgrano" },
  { id: 2, x: 74, y: 42, name: "Toyota Corolla", price: "$8.500", zone: "Palermo" },
  { id: 3, x: 52, y: 56, name: "Peugeot 208", price: "$6.800", zone: "Almagro" },
  { id: 4, x: 38, y: 62, name: "Fiat Cronos", price: "$7.200", zone: "Caballito" },
  { id: 5, x: 24, y: 72, name: "Renault Duster", price: "$11.000", zone: "Flores" },
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
    a: "Ser mayor de 18, tener la cuenta verificada con DNI y licencia de conducir vigente, y un medio de pago cargado. La verificación se hace una sola vez: después se reserva en dos toques.",
  },
  {
    q: "¿Cómo sé que la otra persona es quien dice ser?",
    a: "Porque no se puede publicar ni reservar sin pasar la verificación de identidad. Cada cuenta subió su DNI y su licencia, y esos documentos los revisó primero un modelo de visión y después el panel de administración. Además cada persona arrastra sus reseñas y su rango, que salen de alquileres terminados.",
  },
  {
    q: "¿Qué pasa si el auto aparece con un daño?",
    a: "El retiro y la devolución quedan registrados con el código de cada parte, con fecha y hora. Desde el chat se pueden mandar fotos en el momento, y cualquiera de los dos puede abrir un reporte adjuntando esa prueba. Sin prueba adjunta el reporte no se envía.",
  },
  {
    q: "¿Puedo bloquear los días que uso mi auto?",
    a: "Sí. Desde el panel de dueño se marcan los días no disponibles y esos días desaparecen del calendario para todo el mundo. Nadie puede reservar un día bloqueado.",
  },
  {
    q: "¿Cuánto puedo ganar publicando mi auto?",
    a: "Depende de la categoría, del estado del vehículo y de cuántos días por mes quede disponible. Más arriba hay una calculadora para estimarlo. La plataforma cobra una comisión sobre cada reserva y el resto es del dueño.",
  },
  {
    q: "¿El pago es real?",
    a: "No. Freewheel es un proyecto académico y el pago está simulado: se crea la intención de pago, se procesa y se confirma o falla, pero no se mueve dinero. El flujo completo está implementado.",
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
