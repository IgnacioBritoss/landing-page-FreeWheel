// ============================================================================
//  Languages — Los cinco idiomas
// ----------------------------------------------------------------------------
//  La app está traducida entera a cinco idiomas. La forma más corta de
//  demostrarlo no es decirlo: es cambiar la frase delante de la persona.
//
//  Se toca un idioma y el saludo de la pantalla de inicio cambia. El atributo
//  `lang` del elemento se actualiza también, que no es decorativo: es lo que
//  usan el corrector ortográfico del navegador y los lectores de pantalla para
//  elegir la voz correcta. La app hace lo mismo con el <html>.
// ============================================================================
import { useState } from "react";
import { LANGUAGES } from "../data/content";
import "./languages.css";

export default function Languages() {
  const [active, setActive] = useState("es");
  const current = LANGUAGES.find((l) => l.code === active);

  return (
    <section className="section section--tint langs" id="idiomas">
      <div className="wrap langs__inner">
        <div className="langs__copy">
          <span className="label" data-reveal="up">
            <span className="label__n">08</span>
            Idiomas
            <span className="label__rule" />
          </span>

          <h2 className="langs__title" data-reveal="up" style={{ "--i": 1 }}>
            Un turista puede alquilar un auto acá
          </h2>
          <p className="langs__text" data-reveal="up" style={{ "--i": 2 }}>
            La aplicación está traducida entera a cinco idiomas: cada pantalla,
            cada aviso y cada mensaje de error. Alguien que llega de afuera se
            verifica, reserva y coordina la entrega sin tener que entender una
            palabra de castellano.
          </p>

          <ul className="langs__list" role="tablist" aria-label="Idiomas" data-reveal="up" style={{ "--i": 3 }}>
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  role="tab"
                  aria-selected={lang.code === active}
                  className={`langs__btn ${lang.code === active ? "is-active" : ""}`}
                  onClick={() => setActive(lang.code)}
                >
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* La `key` remonta el bloque en cada cambio para que la animación de
            entrada vuelva a correr. */}
        <div className="langs__demo" key={current.code} data-reveal="up" style={{ "--i": 2 }}>
          <span className="langs__demo-label">Pantalla de inicio</span>
          <strong lang={current.code}>{current.greeting}</strong>
          <span className="langs__caret" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
