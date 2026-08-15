// ============================================================================
//  content.js — Los datos de la landing que NO son texto
// ----------------------------------------------------------------------------
//  Antes acá vivían también todas las frases. Ahora las frases están en
//  i18n/es.js y sus cuatro traducciones, y en este archivo quedó solamente lo
//  que es IGUAL EN LOS CINCO IDIOMAS:
//
//    · enlaces y anclas       #recorrido, #plataforma, la URL de la app
//    · números                los precios sugeridos, la comisión
//    · coordenadas            dónde está cada auto en el mapa
//    · la matriz del QR       el dibujo del código
//    · nombres propios        Toyota Corolla, Palermo, Ignacio Britos
//
//  La regla para saber dónde va algo nuevo: si al cambiar la página a inglés
//  esa cosa tiene que cambiar, va en i18n. Si no, va acá.
//
//  ─────────────────────────────────────────────────────────────────────────
//  UNA REGLA QUE NO CAMBIÓ: NO HAY NÚMEROS INVENTADOS.
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

/** Los destinos del menú. Las etiquetas están en i18n (`nav.links`), y se
 *  emparejan por posición: el tercer href lleva la tercera etiqueta. */
export const NAV_HREFS = ["#recorrido", "#plataforma", "#confianza", "#duenos", "#preguntas"];

/**
 * Los cuatro usos de IA. Lo único que no es texto es cuál de los renglones de
 * la respuesta es un RECHAZO: en la demo de las fotos, la tercera imagen no se
 * reconoce y se pinta distinta.
 *
 * Antes esto se adivinaba buscando "no se reconoce" con una expresión regular
 * sobre el texto. En castellano andaba; en chino, no. El dato estructural va
 * acá y el texto en el diccionario, que es donde va cada cosa.
 */
export const AI_USES = [
  { key: "ficha" },
  { key: "fotos", bad: [2] },
  { key: "documento" },
  { key: "asistente" },
];

/** Los rangos, con los umbrales reales de services/rank.js de la app. El
 *  nombre y el requisito de cada uno están en i18n (`trust.tiers`). */
export const TIERS = ["bronze", "silver", "gold", "platinum"];

/**
 * Calculadora de ganancias.
 * ► PERSONALIZAR: `pricePerDay` es el precio sugerido por categoría y `fee` la
 *   comisión. Cambiá estos valores y la calculadora se recalcula sola. Los
 *   nombres de las categorías están en i18n (`earnings.categories`); acá va el
 *   ejemplo de modelos, que son nombres propios y no se traducen.
 */
export const CALC = {
  fee: 0.12,
  categories: [
    { id: "hatchback", example: "Volkswagen Polo, Peugeot 208", pricePerDay: 6500 },
    { id: "sedan", example: "Toyota Corolla, Fiat Cronos", pricePerDay: 8500 },
    { id: "suv", example: "Volkswagen T-Cross, Renault Duster", pricePerDay: 12000 },
    { id: "premium", example: "BMW Serie 3, Audi A4", pricePerDay: 20000 },
  ],
};

/** Las pantallas de la maqueta del teléfono. El nombre y el título de cada una
 *  están en i18n (`preview.screens`). */
export const SCREENS = ["buscar", "detalle", "reserva", "qr"];

/**
 * Los autos publicados, sobre el mapa REAL de la Ciudad de Buenos Aires.
 *
 * `lat` y `lng` son coordenadas de verdad, las del centro de cada barrio: el
 * mapa de la landing es el mismo Leaflet sobre OpenStreetMap que usa la
 * aplicación, así que acá van coordenadas y no porcentajes.
 *
 * Los modelos y los barrios son nombres propios: Palermo se llama Palermo en
 * los cinco idiomas. Lo único traducido del globito es la aclaración de que la
 * zona es aproximada y el "por día" del precio.
 *
 * El precio es un NÚMERO y no el texto "$8.500": el separador de miles cambia
 * con el idioma —8.500 en castellano, 8,500 en inglés— y escrito a mano quedaba
 * como un error de tipeo en la mitad de los idiomas. Lo escribe Intl.
 */
export const MAP_CENTER = [-34.5985, -58.4265];
export const MAP_ZOOM = 12;

export const MAP_CARS = [
  { id: 1, lat: -34.5620, lng: -58.4560, name: "Volkswagen T-Cross", price: 12000, zone: "Belgrano" },
  { id: 2, lat: -34.5780, lng: -58.4240, name: "Toyota Corolla", price: 8500, zone: "Palermo" },
  { id: 3, lat: -34.6100, lng: -58.4200, name: "Peugeot 208", price: 6800, zone: "Almagro" },
  { id: 4, lat: -34.6180, lng: -58.4430, name: "Fiat Cronos", price: 7200, zone: "Caballito" },
  { id: 5, lat: -34.6280, lng: -58.4640, name: "Renault Duster", price: 11000, zone: "Flores" },
];

/**
 * ► PERSONALIZAR — LA FOTO DEL AUTO EN EL CHAT
 * Poné un archivo (por ejemplo `auto.jpg`) dentro de la carpeta `public/` y
 * escribí acá su ruta: "/auto.jpg". Mientras esto sea null, se dibuja una
 * ilustración vectorial de un auto en tres cuartos, que no depende de ningún
 * archivo y nunca deja el hueco gris de una imagen que no cargó.
 */
export const CHAT_PHOTO = null;

/** La otra persona de la conversación. Su perfil se abre al tocar el nombre.
 *  El nombre, el modelo del auto y quién escribió cada reseña son nombres
 *  propios; el resto del perfil está en i18n (`showcase.profile`). */
export const CHAT_PEER = {
  name: "Ignacio Britos",
  initials: "IB",
  car: "Toyota Corolla 2021",
  tier: "platinum",
  trips: 34,
  ratingAsOwner: 5.0,
  reviewCount: 32,
  reviews: [
    { author: "Martina G.", stars: 5 },
    { author: "Lucas P.", stars: 5 },
    { author: "Sofía M.", stars: 5 },
  ],
};

/**
 * La conversación del chat.
 *   side  — "them" es la otra persona, "me" quien está mirando la pantalla.
 *   kind  — cambia cómo se dibuja el mensaje (texto, audio, foto).
 * El contenido de cada mensaje —el texto, la transcripción del audio, el pie
 * de la foto— está en i18n (`showcase.chat.messages`), emparejado por posición.
 *
 * Los tildes de los mensajes propios ("sent" un tilde, "delivered" dos grises,
 * "read" dos celestes) los recorre solo el componente, igual que cualquier
 * mensajería.
 */
export const CHAT = [
  { side: "them", kind: "text", time: "10:02" },
  { side: "me", kind: "text", time: "10:03" },
  { side: "them", kind: "voice", seconds: 8, time: "10:05" },
  { side: "them", kind: "image", time: "10:06" },
  { side: "me", kind: "text", time: "10:07" },
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

/**
 * El saludo de la pantalla de inicio en los cinco idiomas.
 *
 * ESTO NO ES EL SELECTOR DE IDIOMA DE LA PÁGINA: es la demostración de la
 * sección "Idiomas", donde se ven las cinco frases una al lado de la otra sin
 * importar en qué idioma se esté leyendo la landing. Por eso está escrito acá,
 * en los cinco idiomas a la vez, y no en los diccionarios.
 *
 * El selector de verdad está en la barra de arriba y sale de services/lang.js.
 */
export const LANGUAGES = [
  { code: "es", name: "Español", greeting: "¿A dónde vas hoy?" },
  { code: "en", name: "English", greeting: "Where are you headed?" },
  { code: "pt", name: "Português", greeting: "Para onde você vai?" },
  { code: "it", name: "Italiano", greeting: "Dove vai oggi?" },
  { code: "zh", name: "中文", greeting: "今天去哪里？" },
];

/** Los destinos de los enlaces del pie, por columna. Cada uno baja a una
 *  sección REAL de esta página; los títulos y las etiquetas están en i18n
 *  (`close.columns`). */
export const FOOTER_HREFS = [
  ["#recorrido", "#plataforma", "#app"],
  ["#confianza", "#confianza", "#preguntas"],
  ["#duenos", "#recorrido", "#idiomas"],
];
