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
import { useState, useEffect } from "react";
import { LANGUAGES } from "../data/content";
import { useI18n } from "../i18n/core";
import "./languages.css";

export default function Languages() {
  const { t, lang } = useI18n();
  // La demo arranca mostrando el idioma en el que se está leyendo la página, y
  // desde ahí la persona prueba los otros cuatro. Antes arrancaba siempre en
  // castellano: alguien que entraba en inglés veía la sección que promete
  // cinco idiomas abriendo en un idioma que no eligió.
  const [active, setActive] = useState(lang);

  // El idioma de la página se resuelve recién después de montar (hay que leer
  // el navegador y el almacenamiento), así que la demo se sincroniza acá. Y de
  // paso queda atada al selector de arriba: cambiar el idioma de la página
  // mueve también esta muestra.
  useEffect(() => setActive(lang), [lang]);
  const current = LANGUAGES.find((l) => l.code === active);

  return (
    <section className="section section--tint langs" id="idiomas">
      <div className="wrap langs__inner">
        <div className="langs__copy">
          <span className="label" data-reveal="up">
            <span className="label__n">08</span>
            {t.languages.label}
            <span className="label__rule" />
          </span>

          <h2 className="langs__title" data-reveal="up" style={{ "--i": 1 }}>
            {t.languages.title}
          </h2>
          <p className="langs__text" data-reveal="up" style={{ "--i": 2 }}>
            {t.languages.text}
          </p>

          <ul className="langs__list" role="tablist" aria-label={t.languages.list} data-reveal="up" style={{ "--i": 3 }}>
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
            entrada vuelva a correr.

            NO LLEVA data-reveal, y es a propósito: este elemento se remonta
            cada vez que se toca un idioma, y lo que se remonta se sale del
            barrido del observador de apariciones y queda invisible. Su entrada
            ya la hace la animación `pop-in` del CSS, que es justamente la que
            tiene que volver a correr en cada cambio. */}
        <div className="langs__demo" key={current.code}>
          <span className="langs__demo-label">{t.languages.demoLabel}</span>
          <strong lang={current.code}>{current.greeting}</strong>
          <span className="langs__caret" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
