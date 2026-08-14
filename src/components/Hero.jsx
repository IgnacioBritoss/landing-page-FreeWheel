// ============================================================================
//  Hero — La portada
// ----------------------------------------------------------------------------
//  Sin degradados, sin resplandores y sin tarjetas flotando. La jerarquía la
//  dan el tamaño de la tipografía, el aire y una línea de 1px.
//
//  LA PIEZA CENTRAL: EL AUTO QUE SE DIBUJA
//  Debajo del titular hay un auto de UN SOLO TRAZO continuo que se dibuja a
//  medida que se scrollea. No es una animación que se dispara y termina: el
//  trazo AVANZA Y RETROCEDE con la rueda del mouse. Si la persona sube, el auto
//  se desdibuja.
//
//  Cómo funciona, que es más simple de lo que parece:
//   1. `pathLength="1"` le dice al navegador que, para las cuentas de guiones,
//      considere que el trazado mide 1 (sin importar su largo real en píxeles).
//      Sin esto habría que medirlo con getTotalLength() en JavaScript.
//   2. `stroke-dasharray: 1` crea un guion que cubre el trazado entero.
//   3. `stroke-dashoffset` lo corre. En 1, el guion está completamente fuera y
//      no se ve nada; en 0, está calzado y se ve todo.
//   4. El hook useScrollProgress escribe el avance del scroll (de 0 a 1) en una
//      variable CSS, y el CSS calcula el offset como (1 - avance).
//
//  Nada de esto pasa por el estado de React: la variable se escribe directo
//  sobre el elemento, así que la página no se re-renderiza mientras se
//  scrollea (ver el comentario largo en hooks/useScrollProgress.js).
// ============================================================================
import { HERO } from "../data/content";
import { useScrollProgress } from "../hooks/useScrollProgress";
import "./hero.css";

// El perfil del auto, en un trazado continuo. Arranca en el paragolpes trasero,
// recorre el piso, sube por los dos pasos de rueda, dobla en la trompa y vuelve
// por el capó, el parabrisas, el techo y la luneta. Es el mismo lenguaje del
// logo —un sedán bajo y largo—, pero acá dibujado con línea en vez de relleno.
const CAR_PATH = `
  M 18 214
  L 96 214
  A 46 46 0 0 1 188 214
  L 470 214
  A 46 46 0 0 1 562 214
  L 648 214
  C 684 214 704 194 704 166
  C 704 142 690 126 662 118
  L 588 96
  L 512 44
  C 496 30 476 24 452 24
  L 300 24
  C 274 24 252 34 236 54
  L 176 108
  L 78 128
  C 42 136 18 160 18 192
  Z
`;

export default function Hero() {
  // mode "out": el avance arranca EN CERO con la página recién cargada y
  // llega a 1 cuando la portada termina de salir por arriba. Es lo que hace
  // que el auto se vaya llenando a medida que se baja, en vez de aparecer ya
  // dibujado.
  const ref = useScrollProgress({ mode: "out" });

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="wrap">
        <p className="hero__kicker">
          {HERO.kicker}
          <Flag />
        </p>

        <h1 className="hero__title">
          {HERO.titleLines.map((line, i) => (
            // Cada línea es una "cortina": el <span> de adentro sube desde
            // abajo y el contenedor recorta lo que sobresale.
            <span className="curtain" key={line} style={{ "--i": i }}>
              <span>{line}</span>
            </span>
          ))}
        </h1>

        {/* Sin botones. Antes había un "Buscar un auto" y un "Publicar el mío"
            que no llevaban a ninguna parte: eran anclas a otra sección de esta
            misma página. Un botón que no hace lo que dice es peor que no
            tenerlo. Lo único que saca de acá es el enlace a la aplicación de
            verdad, y está una sola vez, en la barra de arriba y en el cierre. */}
        <div className="hero__foot">
          <p className="hero__lead">{HERO.lead}</p>
        </div>

        {/* El aviso de que hay más abajo. Va DENTRO del flujo y no pegado al
            borde inferior: ahí abajo está el auto, y el cartel le quedaba
            encima del trazo. */}
        <a href="#recorrido" className="hero__scroll">
          <span>{HERO.scrollHint}</span>
          <span className="hero__mouse">
            <span className="hero__wheel" />
          </span>
        </a>
      </div>

      {/* ── El auto ─────────────────────────────────────────────────────
          LLEGA MANEJANDO. Entra desde la izquierda, pasa de largo el lugar y
          vuelve marcha atrás para estacionar, como cuando uno se pasa de la
          cochera. Toda la maniobra está en el @keyframes `park` de hero.css.

          aria-hidden porque es decorativo: no aporta información que no esté
          escrita en el titular, y describírselo a un lector de pantalla sería
          ruido. */}
      <div className="hero__car">
        <div className="hero__car-move">
          <svg viewBox="0 0 720 260" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
            {/* El humo, saliendo del caño de escape. Va en el extremo DERECHO
                (x≈700), que es la cola de este auto: la trompa es la izquierda,
                donde el capó sube lento y largo hasta el parabrisas. */}
            <g className="hero__smoke">
              <circle cx="706" cy="208" r="9" />
              <circle cx="706" cy="208" r="7" />
              <circle cx="706" cy="208" r="11" />
            </g>

            {/* El contorno gris: el auto que llega. */}
            <path className="hero__car-ghost" d={CAR_PATH} pathLength="1" />

            {/* El trazo azul, que se va dibujando con el scroll por encima del
                contorno. Es el auto "llenándose". */}
            <path className="hero__car-line" d={CAR_PATH} pathLength="1" />

            {/* Las luces traseras, sobre la cola: extremo DERECHO del dibujo.
                El auto mira a la IZQUIERDA —el capó largo y bajo que sube hasta
                el parabrisas está de ese lado, y la caída corta y empinada de
                la luneta está acá—. Antes estaban en la trompa.
                Se encienden cuando pone la marcha atrás. */}
            <g className="hero__lamps">
              <rect className="hero__lamp-glow" x="654" y="132" width="56" height="48" rx="24" />
              <rect className="hero__lamp" x="664" y="142" width="34" height="16" rx="8" />
              <rect className="hero__lamp hero__lamp--low" x="670" y="165" width="24" height="9" rx="4.5" />
            </g>

          </svg>
        </div>

        {/* La línea del piso: es la calle sobre la que llega. Se extiende con
            el scroll, así que el bloque sigue teniendo algo atado al scroll
            después de que el auto terminó de estacionar. */}
        <span className="hero__ground" />
      </div>
    </section>
  );
}

/**
 * La bandera argentina, chica, al lado de la palabra "Argentina".
 *
 * Está dibujada y no es un emoji a propósito: los emojis de bandera los dibuja
 * cada sistema operativo a su manera —en Windows ni siquiera se ven, salen
 * como dos letras— y además el proyecto no usa emojis en ningún lado. Con SVG
 * se ve igual en todas las máquinas y se puede ajustar el tamaño al del texto.
 *
 * El sol va simplificado a un círculo con rayos cortos: a 16 píxeles, la cara
 * del sol de mayo se convierte en una mancha.
 */
export function Flag({ width = 18 }) {
  return (
    <svg
      className="flag"
      width={width}
      height={(width * 11) / 18}
      viewBox="0 0 18 11"
      aria-label="Argentina"
      role="img"
    >
      <rect width="18" height="11" rx="1.6" fill="#fff" />
      <rect width="18" height="3.6" rx="1.6" fill="#74acdf" />
      <rect y="7.4" width="18" height="3.6" rx="1.6" fill="#74acdf" />
      {/* Se recortan las esquinas de arriba y abajo para que el redondeo del
          borde no se coma las franjas celestes. */}
      <rect y="2" width="18" height="7" fill="#fff" />
      <rect width="18" height="3" fill="#74acdf" />
      <rect y="8" width="18" height="3" fill="#74acdf" />
      <circle cx="9" cy="5.5" r="1.5" fill="#f6b40e" />
      <circle cx="9" cy="5.5" r="2.2" fill="none" stroke="#f6b40e" strokeWidth="0.5" />
    </svg>
  );
}

/**
 * La flecha diagonal de los enlaces que salen del sitio. Es la convención de
 * toda la web: una flecha hacia afuera avisa que el clic abre otra pestaña,
 * antes de hacer clic. Si el enlace abre una pestaña nueva sin avisar, la
 * persona pierde el botón "atrás" y no entiende qué pasó.
 */
export function ExternalArrow({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 16 16 8M9 8h7v7" />
    </svg>
  );
}

/** La flecha de los botones. Va acá y no en el juego de íconos porque es la
 *  única forma que se repite en toda la página. */
export function Arrow({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
