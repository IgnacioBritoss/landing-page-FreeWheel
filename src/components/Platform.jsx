// ============================================================================
//  Platform — Lo que trae el producto
// ----------------------------------------------------------------------------
//  Ocho capacidades del producto, escritas como una LISTA ENUMERADA y no como
//  una grilla de tarjetas.
//
//  Es una decisión, no una economía: ocho tarjetas iguales con su iconito se
//  leen como un catálogo y se saltean. Ocho filas numeradas, separadas por una
//  línea de 1px, se leen como un índice —y un índice se recorre entero.
//
//  Cada fila se subraya sola al entrar en pantalla: una línea que se dibuja de
//  izquierda a derecha, en cascada. Es el único movimiento de la sección, y
//  alcanza para que el bloque no se sienta muerto mientras se baja.
// ============================================================================
import { useT } from "../i18n/core";
import "./platform.css";

export default function Platform() {
  const t = useT();

  return (
    <section className="section platform" id="plataforma">
      <div className="wrap">
        <header className="platform__head">
          <span className="label" data-reveal="up">
            <span className="label__n">02</span>
            {t.platform.label}
            <span className="label__rule" />
          </span>

          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            {t.platform.title}
          </h2>
          <p className="section-lead" data-reveal="up" style={{ "--i": 2 }}>
            {t.platform.lead}
          </p>
        </header>

        <ol className="platform__list">
          {t.platform.items.map((item, i) => (
            <li
              className="platform__row"
              key={item.title}
              data-reveal="up"
              // El retardo se reinicia cada tres filas: si siguiera creciendo,
              // la octava tardaría casi un segundo en aparecer y se vería
              // como un retraso, no como una cascada.
              style={{ "--i": i % 3 }}
            >
              <span className="platform__n">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="platform__title">{item.title}</h3>
              <p className="platform__text">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
