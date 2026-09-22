// ============================================================================
//  AppPreview — La aplicación adentro de un teléfono
// ----------------------------------------------------------------------------
//  Cuatro pantallas reales de Freewheel, dibujadas con divs. Ni una captura.
//
//  POR QUÉ DIBUJADAS Y NO CON CAPTURAS DE PANTALLA
//   · una captura pesa cientos de kilobytes y se ve borrosa en pantallas de
//     alta densidad, salvo que se suban dos versiones de cada una;
//   · queda desactualizada apenas se toca un color de la app;
//   · dibujada se puede animar por dentro (el calendario que marca los días
//     ocupados, el código que se arma) y eso es justamente lo que hace que la
//     maqueta no se sienta una foto pegada.
//
//  El teléfono es un rectángulo con borde de 1px, del mismo gris que el resto
//  de la página. Sin marco metálico ni reflejos: no es el producto, es el
//  contenedor.
// ============================================================================
import { useState } from "react";
import { SCREENS, QR_MATRIX, APP_URL } from "../data/content";
import { useT } from "../i18n/core";
import SectionLabel from "./ui/SectionLabel";
import "./preview.css";

export default function AppPreview() {
  const t = useT();
  const [active, setActive] = useState(0);
  // `key` es cuál de las cuatro pantallas dibujar (dato estructural, de
  // content.js) y `screen` son sus textos (del diccionario).
  const key = SCREENS[active];
  const screen = t.preview.screens[active];

  return (
    <section className="section section--tint preview" id="app">
      <div className="wrap">
        <header className="preview__head">
          <SectionLabel n="06">{t.preview.label}</SectionLabel>
          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            {t.preview.title}
          </h2>
        </header>

        <div className="preview__grid">
          {/* ── Selector ──────────────────────────────────────────── */}
          <ol className="preview__tabs" data-reveal="up">
            {SCREENS.map((id, i) => (
              <li key={id}>
                <button
                  className={`preview__tab ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className="preview__tab-n">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="preview__tab-label">{t.preview.screens[i].label}</span>
                </button>
              </li>
            ))}
          </ol>

          {/* ── El teléfono ───────────────────────────────────────── */}
          <div className="preview__phone-wrap" data-reveal="up" style={{ "--i": 1 }}>
            <div className="phone">
              <div className="phone__screen">
                <div className="phone__status" aria-hidden="true">
                  <span>9:41</span>
                  <span className="phone__batt" />
                </div>

                {/* La `key` fuerza a React a montar un nodo nuevo en cada
                    cambio: sin ella reutilizaría el mismo elemento y la
                    animación de entrada no volvería a correr. */}
                <div className="phone__head" key={`h-${key}`}>
                  <h3>{screen.title}</h3>
                </div>

                <div className="phone__body" key={`b-${key}`}>
                  {key === "buscar" && <ScreenSearch t={t} />}
                  {key === "detalle" && <ScreenDetail t={t} />}
                  {key === "reserva" && <ScreenBooking t={t} />}
                  {key === "qr" && <ScreenQr t={t} />}
                </div>

                <div className="phone__nav" aria-hidden="true">
                  {t.preview.tabs.map((l, i) => (
                    <span key={i} className={i === 0 ? "is-active" : ""}>
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   LAS CUATRO PANTALLAS
   ----------------------------------------------------------------------------
   Una función por pantalla, todas con la misma forma: reciben el diccionario ya
   resuelto (`t`) y devuelven solo el CONTENIDO del cuerpo del teléfono. El
   marco, la barra de estado, el encabezado y la barra de abajo los pone
   AppPreview una sola vez y no se repiten acá.

   NINGUNA TIENE ESTADO PROPIO. Son funciones que devuelven lo mismo para la
   misma entrada: no guardan nada, no miden nada, no se enganchan a ningún
   evento. Toda la animación de adentro (la cascada de entrada, el código que se
   arma, la pantalla que entra desde el costado) la hace el CSS con la variable
   --i que se le pasa a cada pieza. Por eso son tan cortas.

   EL --i DE CADA ELEMENTO es su número de orden, y es lo único "de programación"
   que hay acá: preview.css lo convierte en un retardo (40ms por posición), y
   eso arma la cascada. Si se agrega un renglón nuevo hay que darle su --i, o
   entra todo junto con el primero.

   Reciben `t` por parámetro en vez de llamar a useT() cada una. Da lo mismo en
   funcionamiento, pero deja claro de dónde sale el texto y las vuelve probables
   sin montar el contexto de idiomas.
   ========================================================================== */

/* ── Pantalla 1: buscar ───────────────────────────────────────────────────
   El formulario de búsqueda y dos resultados. Los precios y los nombres salen
   del diccionario y no de content.js porque acá son EJEMPLOS de pantalla, no
   los autos del mapa: cada idioma escribe su número como corresponde. */
function ScreenSearch({ t }) {
  return (
    <>
      <div className="ph-form">
        {t.preview.search.rows.map(([k, v], i) => (
          <div className="ph-form__row" key={i}>
            <span>{k}</span>
            <strong>{v}</strong>
          </div>
        ))}
        <button className="ph-btn">{t.preview.search.button}</button>
      </div>

      {t.preview.search.results.map(([name, price, meta], i) => (
        <div className="ph-item" key={i} style={{ "--i": i }}>
          <div>
            <strong>{name}</strong>
            <span>{meta}</span>
          </div>
          <b>{price}</b>
        </div>
      ))}
    </>
  );
}

/* ── Pantalla 2: ficha ──────────────────────────────────────────────── */
function ScreenDetail({ t }) {
  return (
    <>
      <div className="ph-specs">
        {t.preview.detail.specs.map(([k, v], i) => (
          <div key={i} style={{ "--i": i }}>
            <span>{k}</span>
            <strong>{v}</strong>
          </div>
        ))}
      </div>

      <div className="ph-owner">
        <span className="ph-owner__initial">{t.preview.detail.owner.charAt(0)}</span>
        <div>
          <strong>{t.preview.detail.owner}</strong>
          <span>{t.preview.detail.ownerMeta}</span>
        </div>
      </div>

      <p className="ph-note">{t.preview.detail.note}</p>
    </>
  );
}

/* ── Pantalla 3: reserva ──────────────────────────────────────────────────
   El calendario con los días ocupados y los tres elegidos.

   MUESTRA DÍAS OCUPADOS A PROPÓSITO. Un calendario todo libre no dice nada; con
   días tomados se entiende de una que el auto es de alguien que también lo usa,
   que es la diferencia entre esto y una agencia de alquiler. */
function ScreenBooking({ t }) {
  // 0 = libre, 1 = ocupado, 2 = elegido.
  //
  // Va como números y no como tres listas separadas ni como objetos: son
  // veintiún casilleros con tres estados posibles, y así se lee de un vistazo
  // dónde caen los ocupados. La línea de abajo convierte cada número en su
  // clase buscándolo por posición en un arreglo de tres nombres.
  const days = [0, 0, 1, 1, 0, 0, 0, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <>
      <div className="ph-cal">
        {days.map((state, i) => (
          // ["", "is-taken", "is-picked"][state] → el estado 0 no lleva clase,
          // el 1 lleva "is-taken" y el 2 "is-picked".
          <span key={i} className={["", "is-taken", "is-picked"][state]} style={{ "--i": i }}>
            {i + 1}
          </span>
        ))}
      </div>

      <div className="ph-legend">
        <span><i className="sw sw--picked" />{t.preview.booking.picked}</span>
        <span><i className="sw sw--taken" />{t.preview.booking.taken}</span>
      </div>

      <div className="ph-total">
        <div className="ph-total__row">
          <span>{t.preview.booking.total}</span>
          <strong>{t.preview.booking.totalValue}</strong>
        </div>
        <button className="ph-btn">{t.preview.booking.button}</button>
      </div>
    </>
  );
}

/* ── Pantalla 4: entrega ────────────────────────────────────────────── */
function ScreenQr({ t }) {
  return (
    <>
      {/* ES UN CÓDIGO QR DE VERDAD: escaneándolo con la cámara del teléfono
          se abre la aplicación. La matriz está calculada de antemano y
          guardada en content.js, porque el contenido nunca cambia: generarla
          en el navegador costaría una librería entera para llegar siempre al
          mismo dibujo. */}
      <div className="ph-code">
        <div
          className="ph-code__grid"
          style={{ "--n": QR_MATRIX.length }}
          role="img"
          aria-label={`${t.preview.qr.alt} ${APP_URL}`}
        >
          {QR_MATRIX.map((row, y) =>
            row.split("").map((cell, x) => (
              <span
                key={`${y}-${x}`}
                className={cell === "1" ? "on" : ""}
                // Los módulos se encienden en diagonal, como si el código se
                // fuera armando. El retardo sale de la suma de fila y columna:
                // todos los casilleros de una misma diagonal dan el mismo
                // número, así que se encienden juntos.
                //
                // EL RESTO DE 14 ES LO QUE HACE QUE SE PUEDA VER. La diagonal
                // más larga de una matriz de 29×29 suma 56, y a 35ms por
                // posición el último módulo tardaría casi dos segundos. Dando
                // la vuelta cada 14 el código se arma en medio segundo, en
                // cuatro olas que se persiguen.
                style={{ "--i": (x + y) % 14 }}
              />
            )),
          )}
        </div>
      </div>

      <p className="ph-code__text">FW-8K2N-4XQ7</p>

      <div className="ph-steps">
        {/* Los dos primeros pasos están hechos y el tercero no: eso es
            estructura de la pantalla, no texto, así que se decide por
            posición y no repitiendo un booleano en los cinco diccionarios. */}
        {t.preview.qr.steps.map((label, i) => (
          <div key={i} className={i < 2 ? "is-done" : ""} style={{ "--i": i }}>
            <span className="ph-steps__bar" />
            {label}
          </div>
        ))}
      </div>
    </>
  );
}
