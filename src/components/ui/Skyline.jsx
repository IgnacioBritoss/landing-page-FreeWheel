// ============================================================================
//  Skyline — Buenos Aires en el horizonte
// ----------------------------------------------------------------------------
//  La silueta de la ciudad, apoyada en el borde de abajo de la pantalla y
//  detrás de todo.
//
//  ES EL RESPALDO DEL FONDO, NO EL PLAN A. El fondo de verdad son las fotos de
//  Buenos Aires que están en public/ciudad/ (ver CityPhotos.jsx). Esta silueta
//  se dibuja desde el primer instante y se funde hacia afuera en cuanto entra
//  la primera foto, así que cubre los dos huecos donde si no habría un fondo
//  vacío: el rato que las fotos tardan en cargar, y el caso de que los archivos
//  no estén o tengan otro nombre.
//
//  Vale la pena que exista: una página que depende de que tres archivos estén
//  bien nombrados es una página que se rompe en silencio, y el fondo es lo
//  último que alguien va a mirar cuando algo falle. Pesa unos 3 KB y se ve
//  nítido en cualquier pantalla y cualquier zoom.
//
//  QUÉ SE RECONOCE, DE IZQUIERDA A DERECHA
//    · casas bajas y un petit hôtel con techo de mansarda, el París porteño;
//    · la Torre de los Ingleses, con su reloj;
//    · la cúpula del Congreso;
//    · EL OBELISCO, que es el que hace que esto sea Buenos Aires y no una
//      ciudad genérica. Va casi en el centro y es lo más alto de todo;
//    · las torres de Puerto Madero, de vidrio y rectas, contra las de al lado.
//
//  Sin ventanas ni detalles: a la opacidad a la que esto vive, cualquier cosa
//  más chica que una silueta se convierte en ruido gris.
// ============================================================================
export default function Skyline({ className = "" }) {
  return (
    <svg
      className={`ambient__city ${className}`}
      viewBox="0 0 1600 260"
      /* "slice" recorta a los costados en vez de deformar: en una pantalla
         angosta se ve el centro —el Obelisco— y se pierden las puntas. */
      preserveAspectRatio="xMidYMax slice"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* ── Casas bajas ─────────────────────────────────────────────── */}
      <rect x="0" y="196" width="72" height="64" />
      <rect x="66" y="176" width="54" height="84" />
      <rect x="114" y="206" width="40" height="54" />

      {/* ── Petit hôtel con mansarda ────────────────────────────────── */}
      <path d="M150 260V162h104v98Z" />
      <path d="M146 162l22-30h64l22 30Z" />
      <path d="M196 132v-14h12v14Z" />

      <rect x="258" y="146" width="46" height="114" />
      <rect x="300" y="182" width="38" height="78" />

      {/* ── Torre de los Ingleses ───────────────────────────────────── */}
      <path d="M358 260V96h48v164Z" />
      <path d="M354 96l28-42 28 42Z" />
      <path d="M379 54v-16h6v16Z" />
      {/* El reloj: un hueco, para que se lea la torre y no un bloque. */}
      <circle cx="382" cy="134" r="13" fill="var(--paper)" />

      <rect x="414" y="188" width="52" height="72" />
      <rect x="462" y="164" width="44" height="96" />
      <rect x="502" y="200" width="34" height="60" />

      {/* ── Cúpula del Congreso ─────────────────────────────────────── */}
      <rect x="542" y="198" width="124" height="62" />
      <rect x="572" y="170" width="64" height="30" />
      <path d="M572 172a32 32 0 0 1 64 0Z" />
      <path d="M598 156h12v16h-12Z" />
      <circle cx="604" cy="150" r="7" />

      <rect x="672" y="184" width="46" height="76" />
      <rect x="714" y="212" width="38" height="48" />
      <rect x="748" y="178" width="34" height="82" />

      {/* ── EL OBELISCO ─────────────────────────────────────────────────
          Lo más alto del dibujo y casi en el centro. Se estrecha hacia
          arriba: de 30 de ancho en la base a 14 en la punta, más el remate
          en pirámide. Sin ese estrechamiento parece una antena. */}
      <path d="M786 260l7-224h14l7 224Z" />
      <path d="M793 36l7-22 7 22Z" />

      <rect x="828" y="206" width="40" height="54" />
      <rect x="864" y="176" width="48" height="84" />
      <rect x="908" y="210" width="36" height="50" />
      <rect x="940" y="190" width="44" height="70" />

      {/* ── Puerto Madero ───────────────────────────────────────────────
          Rectas, altas y sin remate: es lo que las distingue de todo lo
          demás del dibujo, que tiene techos y cúpulas. */}
      <rect x="1000" y="70" width="52" height="190" />
      <rect x="1058" y="42" width="58" height="218" />
      <rect x="1122" y="88" width="46" height="172" />
      <rect x="1164" y="130" width="40" height="130" />

      <rect x="1212" y="192" width="50" height="68" />
      <rect x="1256" y="164" width="42" height="96" />
      <rect x="1294" y="206" width="38" height="54" />
      <rect x="1328" y="180" width="52" height="80" />

      {/* ── Otro petit hôtel, para cerrar como empezó ───────────────── */}
      <path d="M1392 260v-84h88v84Z" />
      <path d="M1388 176l18-26h56l18 26Z" />

      <rect x="1486" y="198" width="46" height="62" />
      <rect x="1528" y="214" width="72" height="46" />
    </svg>
  );
}
