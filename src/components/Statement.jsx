// ============================================================================
//  Statement — La frase que se ilumina palabra por palabra
// ----------------------------------------------------------------------------
//  Una sola frase, grande, sobre fondo blanco. Arranca en gris claro y se va
//  poniendo negra PALABRA POR PALABRA a medida que se scrollea. La persona no
//  puede leerla de un vistazo: tiene que bajar para terminarla. Ese es todo el
//  truco, y es de los recursos más efectivos que existen para que alguien
//  llegue al final de una idea en vez de saltearla.
//
//  ─────────────────────────────────────────────────────────────────────────
//  CÓMO SE PINTA CADA PALABRA SIN UNA LÍNEA DE JAVASCRIPT POR PALABRA
//
//  El hook escribe el avance del scroll (0 a 1) en la variable --progress del
//  <section>. Cada palabra sabe su posición en la frase (--w, que le pone el
//  JSX) y la frase entera sabe cuántas palabras tiene (--count).
//
//  Entonces cada palabra calcula su propia opacidad sola, en CSS:
//
//      opacity: clamp(0.16, (progress × count − w) × 1.5, 1)
//
//  Si el frente de avance (progress × count) todavía no llegó a esta palabra,
//  la cuenta da negativo y clamp la deja en 0.16 (gris). Cuando lo pasa, sube
//  a 1. El × 1.5 hace que la transición de una palabra a la otra se solape un
//  poco: sin eso, las palabras se encienden de a una y se ve entrecortado.
//
//  Resultado: ni un render de React mientras se scrollea. El navegador
//  recalcula una opacidad por palabra, que es de las operaciones más baratas
//  que sabe hacer.
//  ─────────────────────────────────────────────────────────────────────────
// ============================================================================
import { STATEMENT } from "../data/content";
import { useScrollProgress } from "../hooks/useScrollProgress";
import "./statement.css";

export default function Statement() {
  const ref = useScrollProgress({ mode: "cover" });

  const words = STATEMENT.text.split(" ");

  return (
    <section className="statement" ref={ref}>
      <div className="wrap">
        <p className="statement__text" style={{ "--count": words.length }}>
          {words.map((word, i) => {
            // La comparación saca los signos de puntuación para que
            // "confianza." también coincida con "confianza".
            const clean = word.replace(/[.,;:]/g, "").toLowerCase();
            const isKey = STATEMENT.highlight.includes(clean);

            return (
              <span
                key={`${word}-${i}`}
                className={`statement__word ${isKey ? "is-key" : ""}`}
                style={{ "--w": i }}
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
