// ============================================================================
//  Trust — Verificación de identidad y rangos
// ----------------------------------------------------------------------------
//  Responde la única pregunta que importa antes de prestarle el auto a un
//  desconocido: quién es esta persona.
//
//  Dos mitades:
//   · los cuatro pasos de la verificación, como una línea de tiempo vertical;
//   · los cuatro rangos, con el escudo redibujado igual que en la app
//     (components/RankBadge.jsx). El rango se lee por CANTIDAD DE BARRAS, no
//     por color: así se distingue igual con daltonismo o impreso en blanco y
//     negro. Ese detalle está en la app y se respeta acá.
// ============================================================================
import { TIERS } from "../data/content";
import "./trust.css";

const KYC = [
  ["Email confirmado", "Un código de seis dígitos antes de poder entrar."],
  ["DNI, frente y dorso", "Revisado por el modelo: tipo, legibilidad y vigencia."],
  ["Licencia de conducir", "Sin licencia válida no se puede reservar."],
  ["Revisión del panel", "Un administrador puede volver a pedir lo que no se lea."],
];

export default function Trust() {
  return (
    <section className="section trust" id="confianza">
      <div className="wrap">
        <header className="trust__head">
          <span className="label" data-reveal="up">
            <span className="label__n">04</span>
            Confianza
            <span className="label__rule" />
          </span>
          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            Del otro lado hay una persona con nombre y apellido
          </h2>
          <p className="section-lead" data-reveal="up" style={{ "--i": 2 }}>
            Ninguna cuenta puede publicar ni reservar sin pasar por acá. Y el
            historial no se compra: se construye alquilando.
          </p>
        </header>

        <div className="trust__grid">
          {/* ── Verificación ───────────────────────────────────────── */}
          <div className="kyc" data-reveal="up">
            <h3 className="trust__sub">Verificación de identidad</h3>
            <p className="trust__sub-note">Una sola vez, al crear la cuenta.</p>

            <ol className="kyc__steps">
              {KYC.map(([title, text], i) => (
                <li key={title}>
                  <span className="kyc__n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ol>

            <p className="kyc__foot">
              La dirección exacta del auto aparece recién cuando la reserva está
              confirmada. Antes se ve la zona.
            </p>
          </div>

          {/* ── Rangos ─────────────────────────────────────────────── */}
          <div className="tiers" data-reveal="up" style={{ "--i": 1 }}>
            <h3 className="trust__sub">Rangos por reseñas reales</h3>
            <p className="trust__sub-note">
              Los umbrales piden cantidad <em>y</em> promedio a la vez.
            </p>

            <ul className="tiers__list">
              {TIERS.map((tier) => (
                <li className="tier" key={tier.key}>
                  <Shield bars={tier.bars} />
                  <div>
                    <strong>{tier.name}</strong>
                    <span>{tier.req}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="kyc__foot">
              Sin ninguna reseña no se muestra rango ni promedio: se dice que
              todavía no hay. Un puntaje inventado es peor que no mostrar nada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * El escudo del rango: hombros rectos, laterales que se cierran y base en
 * punta. Las barras se apilan de abajo hacia arriba, una por nivel. Es el
 * mismo dibujo que components/RankBadge.jsx de la aplicación.
 */
function Shield({ bars, size = 26 }) {
  return (
    <svg
      className="tier__shield"
      width={size}
      height={Math.round(size * 1.2)}
      viewBox="0 0 20 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 1.4 18.2 3.6V11.4C18.2 16.3 14.9 20.2 10 22.4 5.1 20.2 1.8 16.3 1.8 11.4V3.6L10 1.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {Array.from({ length: bars }).map((_, i) => (
        // Cada barra 3 unidades más arriba que la anterior.
        <rect key={i} x="6" y={14.6 - i * 3} width="8" height="1.9" rx="0.4" fill="currentColor" />
      ))}
    </svg>
  );
}
