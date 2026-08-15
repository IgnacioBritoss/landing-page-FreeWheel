// ============================================================================
//  Trust — Verificación de identidad y rangos
// ----------------------------------------------------------------------------
//  Responde la única pregunta que importa antes de prestarle el auto a un
//  desconocido: quién es esta persona.
//
//  Dos mitades:
//   · los cuatro pasos de la verificación, como una línea de tiempo vertical;
//   · los cuatro rangos, con el escudo redibujado igual que en la app
//     (components/RankBadge.jsx). Cada escudo lleva el color de su metal, y el
//     platino además un brillo: el rango se distingue de un vistazo sin tener
//     que leer el nombre.
// ============================================================================
import { TIERS } from "../data/content";
import { useT } from "../i18n/core";
import TierShield from "./ui/TierShield";
import "./trust.css";

export default function Trust() {
  const t = useT();

  return (
    <section className="section trust" id="confianza">
      <div className="wrap">
        <header className="trust__head">
          <span className="label" data-reveal="up">
            <span className="label__n">04</span>
            {t.trust.label}
            <span className="label__rule" />
          </span>
          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            {t.trust.title}
          </h2>
          <p className="section-lead" data-reveal="up" style={{ "--i": 2 }}>
            {t.trust.lead}
          </p>
        </header>

        <div className="trust__grid">
          {/* ── Verificación ───────────────────────────────────────── */}
          <div className="kyc" data-reveal="up">
            <h3 className="trust__sub">{t.trust.kycTitle}</h3>
            <p className="trust__sub-note">{t.trust.kycNote}</p>

            <ol className="kyc__steps">
              {t.trust.kyc.map(([title, text], i) => (
                <li key={title}>
                  <span className="kyc__n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ol>

            <p className="kyc__foot">{t.trust.kycFoot}</p>
          </div>

          {/* ── Rangos ─────────────────────────────────────────────── */}
          <div className="tiers" data-reveal="up" style={{ "--i": 1 }}>
            <h3 className="trust__sub">{t.trust.tiersTitle}</h3>
            <p className="trust__sub-note">
              {t.trust.tiersNote} <em>{t.trust.tiersNoteEm}</em>.
            </p>

            <ul className="tiers__list">
              {/* La clave del metal sale de content.js y el nombre del
                  diccionario: "Oro", "Gold" y "黄金" son el mismo escudo. */}
              {TIERS.map((key, i) => (
                <li className="tier" key={key}>
                  <TierShield tier={key} size={28} />
                  <div>
                    <strong>{t.trust.tiers[i].name}</strong>
                    <span>{t.trust.tiers[i].req}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="kyc__foot">{t.trust.tiersFoot}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
