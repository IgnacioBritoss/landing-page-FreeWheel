// ============================================================================
//  AiShowcase — Los cuatro usos de IA, funcionando
// ----------------------------------------------------------------------------
//  No cuenta lo que hace la inteligencia artificial: lo MUESTRA. Las respuestas
//  se escriben renglón por renglón, como si el modelo estuviera contestando en
//  ese momento.
//
//  Un renglón cada 420ms. Cuando la lista termina, espera y pasa sola a la
//  pestaña siguiente: la persona ve las cuatro funciones sin tocar nada. Pero
//  si toca una pestaña, la rotación automática se apaga — quien tomó el control
//  lo conserva. Que la página siga cambiando sola después de un clic es de las
//  cosas más molestas que existen.
//
//  POR QUÉ setTimeout Y NO setInterval
//  Con setInterval habría que cancelar y recrear el intervalo en cada cambio de
//  pestaña, y si alguno queda vivo aparecen dos renglones por vez. Con un
//  setTimeout que se vuelve a agendar en cada efecto, React limpia el anterior
//  solo (la función de cleanup) y nunca hay dos corriendo a la vez.
// ============================================================================
import { useState, useEffect, useRef, useCallback } from "react";
import { AI_USES } from "../data/content";
import { useT } from "../i18n/core";
import { useInView } from "../hooks/useReveal";
import "./ai.css";

const LINE_MS = 420;   // cuánto tarda en aparecer cada renglón
const HOLD_MS = 2200;  // cuánto se queda la respuesta completa antes de pasar

export default function AiShowcase() {
  const t = useT();
  const [active, setActive] = useState(0);
  const [lines, setLines] = useState(0);
  const [auto, setAuto] = useState(true);
  const [running, setRunning] = useState(false);

  const ref = useRef(null);
  // La demo se arma de dos mitades: los textos salen del diccionario y de
  // content.js sale lo estructural —cuál de los renglones es un rechazo—.
  const use = t.ai.uses[active];
  const shape = AI_USES[active];

  // La demo no arranca hasta que la sección se ve. Si arrancara al cargar la
  // página, para cuando la persona baje hasta acá ya habría terminado.
  const begin = useCallback(() => setRunning(true), []);
  useInView(ref, begin, { threshold: 0.3 });

  useEffect(() => {
    if (!running) return;

    if (lines < use.output.length) {
      const id = setTimeout(() => setLines((n) => n + 1), LINE_MS);
      return () => clearTimeout(id);
    }

    if (auto) {
      const id = setTimeout(() => {
        setActive((i) => (i + 1) % AI_USES.length);
        setLines(0);
      }, HOLD_MS);
      return () => clearTimeout(id);
    }
  }, [running, lines, use.output.length, auto]);

  const pick = (index) => {
    setActive(index);
    setLines(0);
    setAuto(false);
  };

  return (
    <section className="section section--tint ai" id="ia" ref={ref}>
      <div className="wrap ai__inner">
        {/* ── Izquierda ──────────────────────────────────────────────── */}
        <div className="ai__copy">
          <span className="label" data-reveal="up">
            <span className="label__n">03</span>
            {t.ai.label}
            <span className="label__rule" />
          </span>

          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            {t.ai.title}
          </h2>
          <p className="section-lead" data-reveal="up" style={{ "--i": 2 }}>
            {t.ai.lead}
          </p>

          <ul className="ai__tabs" data-reveal="up" style={{ "--i": 3 }}>
            {t.ai.uses.map((item, i) => (
              <li key={AI_USES[i].key}>
                <button
                  className={`ai__tab ${i === active ? "is-active" : ""}`}
                  onClick={() => pick(i)}
                  aria-pressed={i === active}
                >
                  <span className="ai__tab-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ai__tab-label">{item.label}</span>
                  {/* La barra que se llena mientras esta pestaña está activa:
                      avisa que va a cambiar sola. */}
                  {i === active && auto && <span className="ai__tab-bar" />}
                </button>
              </li>
            ))}
          </ul>

        </div>

        {/* ── Derecha: la consola ───────────────────────────────────── */}
        <div className="ai__console" data-reveal="up" style={{ "--i": 2 }}>
          <div className="ai__bar">
            <span className="ai__bar-title">{t.ai.barTitle}</span>
            <span className="ai__bar-state">{t.ai.barState}</span>
          </div>

          <div className="ai__screen">
            <div className="ai__msg">
              <span className="ai__who">{t.ai.input}</span>
              <p className="ai__prompt">{use.prompt}</p>
            </div>

            <div className="ai__msg">
              <span className="ai__who ai__who--out">{t.ai.output}</span>

              <ul className="ai__out">
                {use.output.slice(0, lines).map((line, i) => (
                  // Cuál renglón es un rechazo lo dice content.js por posición
                  // y no una búsqueda de texto: buscar "no se reconoce" dentro
                  // de la frase andaba en castellano y fallaba en los otros
                  // cuatro idiomas.
                  <li key={line} className={shape.bad?.includes(i) ? "is-bad" : ""}>
                    {line}
                  </li>
                ))}

                {lines < use.output.length && (
                  <li className="ai__typing" aria-label={t.ai.typing}>
                    <i /><i /><i />
                  </li>
                )}
              </ul>

              {/* La nota aparece recién cuando terminó de escribir: antes, se
                  leería antes que la respuesta. */}
              {lines >= use.output.length && <p className="ai__explain">{use.note}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
