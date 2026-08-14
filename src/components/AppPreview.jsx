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
import "./preview.css";

export default function AppPreview() {
  const [active, setActive] = useState(0);
  const screen = SCREENS[active];

  return (
    <section className="section section--tint preview" id="app">
      <div className="wrap">
        <header className="preview__head">
          <span className="label" data-reveal="up">
            <span className="label__n">06</span>
            La aplicación
            <span className="label__rule" />
          </span>
          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            Cuatro pantallas, un solo recorrido
          </h2>
        </header>

        <div className="preview__grid">
          {/* ── Selector ──────────────────────────────────────────── */}
          <ol className="preview__tabs" data-reveal="up">
            {SCREENS.map((s, i) => (
              <li key={s.key}>
                <button
                  className={`preview__tab ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className="preview__tab-n">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="preview__tab-label">{s.label}</span>
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
                <div className="phone__head" key={`h-${screen.key}`}>
                  <h3>{screen.title}</h3>
                </div>

                <div className="phone__body" key={`b-${screen.key}`}>
                  {screen.key === "buscar" && <ScreenSearch />}
                  {screen.key === "detalle" && <ScreenDetail />}
                  {screen.key === "reserva" && <ScreenBooking />}
                  {screen.key === "qr" && <ScreenQr />}
                </div>

                <div className="phone__nav" aria-hidden="true">
                  {["Inicio", "Buscar", "Reservas", "Perfil"].map((l, i) => (
                    <span key={l} className={i === 0 ? "is-active" : ""}>
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

/* ── Pantalla 1: buscar ─────────────────────────────────────────────── */
function ScreenSearch() {
  return (
    <>
      <div className="ph-form">
        {[["Dónde", "Palermo, CABA"], ["Retiro", "18 mar"], ["Devolución", "21 mar"]].map(
          ([k, v]) => (
            <div className="ph-form__row" key={k}>
              <span>{k}</span>
              <strong>{v}</strong>
            </div>
          ),
        )}
        <button className="ph-btn">Buscar autos</button>
      </div>

      {[["Toyota Corolla 2021", "$8.500", "Palermo · 4.8"],
        ["Volkswagen T-Cross 2022", "$12.000", "Belgrano · 4.6"]].map(([name, price, meta], i) => (
        <div className="ph-item" key={name} style={{ "--i": i }}>
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
function ScreenDetail() {
  return (
    <>
      <div className="ph-specs">
        {[["Baúl", "371 L"], ["Puertas", "4"], ["Potencia", "122 CV"], ["Consumo", "6.8 L"]].map(
          ([k, v], i) => (
            <div key={k} style={{ "--i": i }}>
              <span>{k}</span>
              <strong>{v}</strong>
            </div>
          ),
        )}
      </div>

      <div className="ph-owner">
        <span className="ph-owner__initial">R</span>
        <div>
          <strong>Roberto O.</strong>
          <span>Rango oro · identidad verificada</span>
        </div>
      </div>

      <p className="ph-note">
        La dirección exacta se muestra cuando la reserva está confirmada.
      </p>
    </>
  );
}

/* ── Pantalla 3: reserva ────────────────────────────────────────────── */
function ScreenBooking() {
  // 0 = libre, 1 = ocupado, 2 = elegido.
  const days = [0, 0, 1, 1, 0, 0, 0, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <>
      <div className="ph-cal">
        {days.map((state, i) => (
          <span key={i} className={["", "is-taken", "is-picked"][state]} style={{ "--i": i }}>
            {i + 1}
          </span>
        ))}
      </div>

      <div className="ph-legend">
        <span><i className="sw sw--picked" />Elegidos</span>
        <span><i className="sw sw--taken" />Ocupados</span>
      </div>

      <div className="ph-total">
        <div className="ph-total__row">
          <span>$8.500 × 3 días</span>
          <strong>$25.500</strong>
        </div>
        <button className="ph-btn">Confirmar reserva</button>
      </div>
    </>
  );
}

/* ── Pantalla 4: entrega ────────────────────────────────────────────── */
function ScreenQr() {
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
          aria-label={`Código QR que abre ${APP_URL}`}
        >
          {QR_MATRIX.map((row, y) =>
            row.split("").map((cell, x) => (
              <span
                key={`${y}-${x}`}
                className={cell === "1" ? "on" : ""}
                // Los módulos se encienden en diagonal, como si el código se
                // fuera armando. El retardo sale de la suma de fila y columna.
                style={{ "--i": (x + y) % 14 }}
              />
            )),
          )}
        </div>
      </div>

      <p className="ph-code__text">FW-8K2N-4XQ7</p>

      <div className="ph-steps">
        {[["Pago confirmado", true], ["Auto listo para retiro", true], ["Retiro confirmado", false]].map(
          ([label, done], i) => (
            <div key={label} className={done ? "is-done" : ""} style={{ "--i": i }}>
              <span className="ph-steps__bar" />
              {label}
            </div>
          ),
        )}
      </div>
    </>
  );
}
