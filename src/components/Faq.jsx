// ============================================================================
//  Faq — Preguntas frecuentes
// ----------------------------------------------------------------------------
//  Solo puede haber una abierta: se guarda el ÍNDICE de la abierta, no un
//  booleano por pregunta. Abrir una cierra la otra sin escribir nada extra.
//
//  ACCESIBILIDAD: cada pregunta es un <button> de verdad (se llega con Tab y
//  se activa con Enter o Espacio), con aria-expanded para que el lector de
//  pantalla anuncie si está abierta, y aria-controls apuntando al panel.
//
//  La animación de apertura está explicada en faq.css: es el truco de la
//  grilla de 0fr a 1fr, que evita tener que medir el alto con JavaScript.
// ============================================================================
import { useState } from "react";
import { useT } from "../i18n/core";
import "./faq.css";

export default function Faq() {
  const t = useT();

  // Arranca con la primera abierta: una lista toda cerrada no deja ver que hay
  // respuestas adentro.
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="preguntas">
      <div className="wrap faq__inner">
        <header className="faq__head">
          <span className="label" data-reveal="up">
            <span className="label__n">09</span>
            {t.faq.label}
            <span className="label__rule" />
          </span>
          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            {t.faq.title}
          </h2>
          <p className="section-lead" data-reveal="up" style={{ "--i": 2 }}>
            {t.faq.lead}
          </p>
        </header>

        <ul className="faq__list">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                <h3>
                  <button
                    className="faq__q"
                    // Volver a tocar la pregunta abierta la cierra.
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                  >
                    <span>{item.q}</span>
                    <span className="faq__sign" aria-hidden="true" />
                  </button>
                </h3>

                {/* La envoltura extra es parte del truco: la grilla anima la
                    FILA, y el div de adentro es el que recorta el contenido. */}
                <div
                  className="faq__panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                >
                  <div className="faq__panel-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
