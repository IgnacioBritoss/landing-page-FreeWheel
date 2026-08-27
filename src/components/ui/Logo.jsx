// ============================================================================
//  Logo — La marca de Freewheel
// ----------------------------------------------------------------------------
//  UN PIN DE MAPA CON UN VOLANTE ADENTRO. Las dos mitades del producto en un
//  solo símbolo: el pin dice DÓNDE (el auto del vecino, a tres cuadras) y el
//  volante dice QUÉ (manejarlo). Ninguno de los dos solo cuenta la historia:
//  un pin es cualquier app de mapas y un volante es cualquier cosa de autos.
//
//  ─────────────────────────────────────────────────────────────────────────
//  LO QUE ESTABA MAL EN EL MOLDE Y ACÁ ESTÁ CORREGIDO
//
//  El volante estaba bajo. Es un error clásico y tiene una explicación: el pin
//  NO es un círculo, es una gota, y su centro geométrico —el punto medio entre
//  el borde de arriba y la punta de abajo— cae bastante más abajo que el
//  centro de la parte redonda. Si el volante se centra contra la figura
//  entera, queda hundido, y el hueco blanco de arriba se ve más grueso que el
//  de abajo. Que es exactamente lo que pasaba.
//
//  Acá el volante se centra contra la CABEZA REDONDA del pin, no contra la
//  gota completa: mismo centro y mismo eje que el círculo de arriba. El anillo
//  blanco que lo rodea queda parejo en las cuatro direcciones.
//
//  Los números son explícitos abajo, en HEAD, justamente para que esto no se
//  pueda volver a desalinear sin querer.
//  ─────────────────────────────────────────────────────────────────────────
//
//  CÓMO ESTÁ CONSTRUIDO
//   · el PIN es una forma llena con un agujero circular calado —fill-rule
//     "evenodd": el trazado tiene dos subtrazados, el de afuera pinta y el de
//     adentro descuenta—. Por el agujero se ve el fondo de la página;
//   · el VOLANTE va apoyado dentro del agujero, en el mismo color que el pin:
//     un aro, la barra horizontal, el rayo de abajo y el cubo del centro. Es
//     el volante de tres rayos de toda la vida.
//
//  Por qué relleno y hueco, y no líneas: un contorno fino a 16 píxeles —el
//  tamaño real del ícono de una pestaña— se convierte en una mancha gris. Una
//  forma llena con espacios adentro se sigue leyendo.
//
//  Todo hereda `currentColor`, así el mismo componente sirve en oscuro sobre
//  claro y en claro sobre el bloque oscuro del cierre, sin duplicar nada.
// ============================================================================
import "./logo.css";

/* La geometría, en un solo lugar.
   El lienzo es 40 × 53. La cabeza del pin es un círculo de radio 17 centrado
   en (20, 19); la punta baja hasta y = 50.6. */
const HEAD = { cx: 20, cy: 19, r: 17 };

/* El agujero calado. 13.2 deja un borde de 3.8 de pin alrededor: menos que eso
   y a tamaño de favicon el borde se corta. */
const HOLE = 13.2;

/* El volante, todo referido al MISMO centro que la cabeza. */
const RING = 10.2;      // radio medio del aro
const RING_W = 2.7;     // grosor del aro
const SPOKE = 1.25;     // medio grosor de los rayos
const HUB = 2.6;        // radio del cubo central

/* La gota. Dos curvas que salen tangentes a la cabeza y se juntan en la punta.
   El agujero va como segundo subtrazado y, con fill-rule="evenodd", descuenta
   en vez de sumar. */
const PIN =
  "M20 2C10.6 2 3 9.6 3 19C3 31.75 20 50.6 20 50.6C20 50.6 37 31.75 37 19" +
  "C37 9.6 29.4 2 20 2Z" +
  `M${HEAD.cx} ${HEAD.cy - HOLE}` +
  `a${HOLE} ${HOLE} 0 1 0 0 ${HOLE * 2}` +
  `a${HOLE} ${HOLE} 0 1 0 0 ${-HOLE * 2}Z`;

/** Solo el símbolo, sin la palabra. Lo usa el pie y el ícono de la pestaña. */
export function LogoMark({ height = 22, className = "" }) {
  return (
    <svg
      className={className}
      width={(height * 40) / 53}
      height={height}
      viewBox="0 0 40 53"
      fill="none"
      aria-hidden="true"
    >
      <path d={PIN} fill="currentColor" fillRule="evenodd" />

      {/* El aro. Se dibuja con trazo y no como dos círculos porque así el
          grosor es un número solo y no una resta de radios. */}
      <circle
        cx={HEAD.cx}
        cy={HEAD.cy}
        r={RING}
        fill="none"
        stroke="currentColor"
        strokeWidth={RING_W}
      />

      {/* La barra horizontal y el rayo de abajo. Los extremos se meten dentro
          del aro para que la unión no deje una costura a tamaño chico. */}
      <rect
        x={HEAD.cx - RING - RING_W / 2}
        y={HEAD.cy - SPOKE}
        width={(RING + RING_W / 2) * 2}
        height={SPOKE * 2}
        rx={SPOKE}
        fill="currentColor"
      />
      <rect
        x={HEAD.cx - SPOKE}
        y={HEAD.cy}
        width={SPOKE * 2}
        height={RING + RING_W / 2}
        rx={SPOKE}
        fill="currentColor"
      />

      {/* El cubo va lleno y no calado. En el molde era un puntito blanco, pero
          a 16 píxeles ese punto mide medio píxel y se convierte en una mancha
          gris en el medio del volante. Lleno, el centro se lee siempre. */}
      <circle cx={HEAD.cx} cy={HEAD.cy} r={HUB} fill="currentColor" />
    </svg>
  );
}

/* 26 y no 21: el pin es angosto —mide 40 de ancho por 53 de alto—, así que a la
   misma altura que el símbolo de auto anterior ocupaba menos de la mitad del
   ancho y al lado de la palabra se veía chico. Subiendo la altura recupera
   presencia sin robarle lugar a nada. */
export default function Logo({ height = 26, withText = true, className = "" }) {
  return (
    <span className={`logo ${className}`}>
      <LogoMark height={height} className="logo__mark" />
      {withText && <span className="logo__text">Freewheel</span>}
    </span>
  );
}
