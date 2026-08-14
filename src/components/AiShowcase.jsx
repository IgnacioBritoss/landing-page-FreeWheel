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
import { useInView } from "../hooks/useReveal";
import "./ai.css";

const LINE_MS = 420;   // cuánto tarda en aparecer cada renglón
const HOLD_MS = 2200;  // cuánto se queda la respuesta completa antes de pasar

export default function AiShowcase() {
  const [active, setActive] = useState(0);
  const [lines, setLines] = useState(0);
  const [auto, setAuto] = useState(true);
  const [running, setRunning] = useState(false);

  const ref = useRef(null);
  const use = AI_USES[active];

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
            Inteligencia artificial
            <span className="label__rule" />
          </span>

          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            No está de adorno: hace el trabajo que nadie quiere hacer
          </h2>
          <p className="section-lead" data-reveal="up" style={{ "--i": 2 }}>
            Completar una ficha técnica a mano lleva quince minutos y termina con
            la mitad de los campos vacíos. Revisar que cada foto sea un auto y que
            cada documento se lea, lleva más todavía.
          </p>

          <ul className="ai__tabs" data-reveal="up" style={{ "--i": 3 }}>
            {AI_USES.map((item, i) => (
              <li key={item.key}>
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

          <p className="ai__note" data-reveal="up" style={{ "--i": 4 }}>
            La clave del modelo vive en el servidor, nunca en el navegador. Todo
            lo que empieza con <code>VITE_</code> queda escrito dentro del
            JavaScript que descarga cualquier visitante.
          </p>
        </div>

        {/* ── Derecha: la consola ───────────────────────────────────── */}
        <div className="ai__console" data-reveal="up" style={{ "--i": 2 }}>
          <div className="ai__bar">
            <span className="ai__bar-title">Freewheel · asistente</span>
            <span className="ai__bar-state">en curso</span>
          </div>

          <div className="ai__screen">
            <div className="ai__msg">
              <span className="ai__who">Entrada</span>
              <p className="ai__prompt">{use.prompt}</p>
            </div>

            <div className="ai__msg">
              <span className="ai__who ai__who--out">Respuesta</span>

              <ul className="ai__out">
                {use.output.slice(0, lines).map((line) => {
                  // Un renglón que dice "no se reconoce" es un rechazo: se
                  // marca distinto. Es la misma lógica de la app, donde cada
                  // foto queda aprobada o rechazada.
                  const rejected = /no se reconoce/i.test(line);
                  return (
                    <li key={line} className={rejected ? "is-bad" : ""}>
                      {line}
                    </li>
                  );
                })}

                {lines < use.output.length && (
                  <li className="ai__typing" aria-label="escribiendo">
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
