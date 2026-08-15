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
//
//  ─────────────────────────────────────────────────────────────────────────
//  EL CHINO NO TIENE ESPACIOS
//
//  En los cuatro idiomas latinos la frase se corta por espacios y cada palabra
//  es una unidad. En chino no hay espacios: cortar por " " devolvería UNA sola
//  unidad de setenta caracteres, y toda la frase se encendería de golpe.
//
//  Por eso en chino se corta por CARÁCTER. Sale incluso mejor que en los otros
//  idiomas —el barrido es más fino— y de paso resuelve solo el corte de
//  renglón, que en chino puede caer en cualquier carácter.
//  ─────────────────────────────────────────────────────────────────────────
// ============================================================================
import { useI18n } from "../i18n/core";
import { useScrollProgress } from "../hooks/useScrollProgress";
import "./statement.css";

export default function Statement() {
  const { t, lang } = useI18n();
  const ref = useScrollProgress({ mode: "cover" });

  const { text, highlight } = t.statement;
  const byChar = lang === "zh";

  // Las unidades que se encienden de a una: palabras, o caracteres en chino.
  const units = byChar ? Array.from(text) : text.split(" ");

  // ── Qué unidades van en azul ────────────────────────────────────────────
  // Se resuelve por POSICIÓN dentro de la frase y no comparando palabra contra
  // palabra. Comparar strings obligaba a limpiar la puntuación a mano para que
  // "confianza." coincidiera con "confianza", y en chino no funcionaba en
  // absoluto porque ahí una unidad es un carácter suelto.
  //
  // Acá se busca dónde CAE cada palabra destacada dentro del texto, y después
  // se marca toda unidad que se superponga con alguno de esos tramos.
  const spans = [];
  let cursor = 0;
  for (const unit of units) {
    spans.push([cursor, cursor + unit.length]);
    cursor += unit.length + (byChar ? 0 : 1);
  }

  const marked = [];
  for (const word of highlight) {
    let at = text.indexOf(word);
    while (at !== -1) {
      marked.push([at, at + word.length]);
      at = text.indexOf(word, at + word.length);
    }
  }

  const isKey = (i) =>
    marked.some(([from, to]) => spans[i][0] < to && spans[i][1] > from);

  return (
    <section className="statement" ref={ref}>
      <div className="wrap">
        <p className="statement__text" style={{ "--count": units.length }}>
          {units.map((unit, i) => (
            <span
              key={`${unit}-${i}`}
              className={`statement__word ${isKey(i) ? "is-key" : ""}`}
              style={{ "--w": i }}
            >
              {/* El espacio va adentro del <span> para que se apague y se
                  encienda junto con su palabra. En chino no lleva ninguno. */}
              {byChar ? unit : `${unit} `}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
