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
import TierShield from "./ui/TierShield";
import "./trust.css";

const KYC = [
  ["Confirma su mail", "Un código de seis dígitos. Sin eso no entra."],
  ["Muestra el DNI", "Frente y dorso. Revisamos que sea el documento y que esté vigente."],
  ["Muestra la licencia", "Sin licencia al día no puede manejar tu auto. Punto."],
  ["Alguien lo revisa", "Si una foto no se lee, se la volvemos a pedir antes de habilitarlo."],
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
            Del otro lado hay alguien con nombre, apellido y antecedentes
          </h2>
          <p className="section-lead" data-reveal="up" style={{ "--i": 2 }}>
            No le estás dejando el auto a un usuario anónimo. Es una persona que
            mostró su documento, su licencia y todo lo que hizo antes en la
            plataforma.
          </p>
        </header>

        <div className="trust__grid">
          {/* ── Verificación ───────────────────────────────────────── */}
          <div className="kyc" data-reveal="up">
            <h3 className="trust__sub">Verificación de identidad</h3>
            <p className="trust__sub-note">Cuatro pasos que hace cada persona antes de poder usar Freewheel.</p>

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
              Tu dirección no se publica. Quien mira tu auto ve el barrio; la
              esquina exacta la sabe recién cuando la reserva está paga.
            </p>
          </div>

          {/* ── Rangos ─────────────────────────────────────────────── */}
          <div className="tiers" data-reveal="up" style={{ "--i": 1 }}>
            <h3 className="trust__sub">Rangos por reseñas reales</h3>
            <p className="trust__sub-note">
              El rango no se compra ni se acelera: <em>se gana alquilando bien</em>.
            </p>

            <ul className="tiers__list">
              {TIERS.map((tier) => (
                <li className="tier" key={tier.key}>
                  <TierShield tier={tier.key} size={28} />
                  <div>
                    <strong>{tier.name}</strong>
                    <span>{tier.req}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="kyc__foot">
              Si alguien recién arranca, te lo decimos: no vas a ver cinco
              estrellas de una cuenta creada ayer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
