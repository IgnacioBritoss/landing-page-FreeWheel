// ============================================================================
//  Journey — Los cuatro pasos, en una sección que se queda fija
// ----------------------------------------------------------------------------
//  LA SEGUNDA PIEZA GRANDE DE LA PÁGINA.
//
//  La sección mide cuatro pantallas de alto, pero lo que se ve por dentro está
//  PEGADO (position: sticky): mientras se scrollea esas cuatro pantallas, el
//  bloque no se mueve y lo que cambia es el contenido. Al llegar al cuarto
//  paso, la sección se despega y sigue la página.
//
//  Por qué vale la pena: en una grilla común de cuatro tarjetas, la gente lee
//  la primera y saltea el resto. Acá, para seguir bajando hay que pasar por los
//  cuatro. Es el recurso que usan casi todas las landings buenas cuando tienen
//  un proceso que contar, y este producto tiene exactamente eso.
//
//  ─────────────────────────────────────────────────────────────────────────
//  EL DETALLE QUE HACE QUE NO SE TRABE
//
//  El avance del scroll se escribe en una variable CSS (la barra de progreso y
//  la línea vertical la leen de ahí, sin pasar por React).
//
//  Lo único que React necesita saber es CUÁL de los cuatro pasos está activo,
//  y eso cambia cuatro veces en toda la sección, no en cada píxel. Por eso el
//  hook avisa con un callback que solo se dispara cuando el número de paso
//  cambia de verdad. Cuatro renders en total.
//
//  `useCallback` no es un adorno: sin él, la función que se le pasa al hook
//  sería nueva en cada render, el efecto del hook se rearmaría en cada render y
//  el listener de scroll se agregaría y sacaría todo el tiempo.
//  ─────────────────────────────────────────────────────────────────────────
// ============================================================================
import { useState, useCallback } from "react";
import { useT } from "../i18n/core";
import { useScrollProgress } from "../hooks/useScrollProgress";
import "./journey.css";

export default function Journey() {
  const t = useT();
  const steps = t.journey.steps;
  const [active, setActive] = useState(0);

  const onStep = useCallback((index) => setActive(index), []);

  // mode "fill": el avance va de 0 (la sección toca el borde de arriba) a 1
  // (su final llega a ese borde). Es el modo que corresponde para una sección
  // con contenido pegado.
  const ref = useScrollProgress({ mode: "fill", steps: steps.length, onStep });

  return (
    <section className="journey" id="recorrido" ref={ref}>
      <div className="journey__sticky">
        <div className="wrap journey__inner">
          {/* ── Encabezado ──────────────────────────────────────────── */}
          <div className="journey__head">
            <span className="label">
              <span className="label__n">01</span>
              {t.journey.label}
            </span>
            <h2 className="journey__title">
              {t.journey.titleLines[0]}
              <br />
              {t.journey.titleLines[1]}
            </h2>
          </div>

          {/* ── Los cuatro números, con la línea que avanza ──────────── */}
          <ol className="journey__rail">
            {/* La línea de fondo y la que se llena con el scroll. La segunda
                se escala en Y con el avance, no cambia de alto: escalar no
                obliga al navegador a recalcular el layout. */}
            <span className="journey__track" aria-hidden="true">
              <span className="journey__fill" />
            </span>

            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`journey__tick ${i === active ? "is-active" : ""} ${
                  i < active ? "is-done" : ""
                }`}
              >
                <span className="journey__dot" aria-hidden="true" />
                <span className="journey__tick-n">{num(i)}</span>
                <span className="journey__tick-label">{step.title}</span>
              </li>
            ))}
          </ol>

          {/* ── El contenido ────────────────────────────────────────────
              Se dibujan LOS CUATRO paneles, siempre. En escritorio el CSS
              esconde los que no están activos; en el celular —donde la sección
              no se queda pegada— se muestran los cuatro, uno abajo del otro.

              Dibujarlos todos y esconder con CSS (en vez de dibujar solo el
              activo) tiene dos ventajas: el celular no necesita ninguna lógica
              aparte, y la animación de entrada vuelve a correr sola en cada
              cambio, porque un elemento que pasa de display:none a visible
              reinicia sus animaciones. */}
          <div className="journey__panels">
            {steps.map((step, i) => (
              <article
                key={step.title}
                className={`journey__panel ${i === active ? "is-active" : ""}`}
              >
                <span className="journey__panel-n">{num(i)}</span>
                <h3 className="journey__panel-title">{step.title}</h3>
                <p className="journey__panel-text">{step.text}</p>
                <p className="journey__panel-aside">{step.aside}</p>
              </article>
            ))}
          </div>
        </div>

        {/* La barra de avance de toda la sección, abajo de todo. */}
        <div className="journey__bar" aria-hidden="true">
          <span className="journey__bar-fill" />
        </div>
      </div>
    </section>
  );
}

/** "01", "02"... El número del paso sale de su posición y no del diccionario:
 *  es lo mismo en los cinco idiomas y repetirlo cinco veces sería pedir que
 *  algún día no coincidan. */
function num(i) {
  return String(i + 1).padStart(2, "0");
}
