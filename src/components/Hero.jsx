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
  // mode "cover": 0 cuando la portada está entera en pantalla, 1 cuando
  // terminó de salir por arriba. El auto se dibuja durante ese recorrido.
  const ref = useScrollProgress({ mode: "cover" });

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="wrap">
        <p className="hero__kicker">{HERO.kicker}</p>

        <h1 className="hero__title">
          {HERO.titleLines.map((line, i) => (
            // Cada línea es una "cortina": el <span> de adentro sube desde
            // abajo y el contenedor recorta lo que sobresale.
            <span className="curtain" key={line} style={{ "--i": i }}>
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero__foot">
          <p className="hero__lead">{HERO.lead}</p>

          <div className="hero__actions">
            <a href="#duenos" className="btn btn--blue">
              {HERO.ctaPrimary}
              <Arrow />
            </a>
            <a href="#duenos" className="btn btn--line">
              {HERO.ctaSecondary}
            </a>
          </div>
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
          aria-hidden porque es decorativo: no aporta información que no esté
          escrita en el titular, y describírselo a un lector de pantalla sería
          ruido. */}
      <div className="hero__car">
        <svg viewBox="0 0 720 260" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
          {/* Dos trazados encima del otro:
              · el "fantasma", muy tenue, que muestra el recorrido completo para
                que se entienda que el dibujo va a alguna parte;
              · el trazo azul, que es el que se dibuja con el scroll. */}
          <path className="hero__car-ghost" d={CAR_PATH} pathLength="1" />
          <path className="hero__car-line" d={CAR_PATH} pathLength="1" />
        </svg>

        {/* La línea del piso, que también crece con el scroll. */}
        <span className="hero__ground" />
      </div>
    </section>
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
