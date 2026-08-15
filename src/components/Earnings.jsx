// ============================================================================
//  Earnings — La calculadora de ganancias
// ----------------------------------------------------------------------------
//  Es la pieza que más tiempo retiene de la página, y no por casualidad: la
//  persona deja de leer y empieza a probar. Mueve el control, ve subir el
//  número, cambia de categoría, lo vuelve a mover. Cada movimiento es un motivo
//  más para quedarse, y el resultado es una cifra concreta en pesos.
//
//  LA CUENTA (toda en el navegador, no hay servidor):
//    bruto    = precio por día × días por mes
//    comisión = bruto × 12%
//    neto     = bruto − comisión
//
//  DETALLE FINO: el número grande no salta al mover el control, se desliza
//  hasta el valor nuevo con requestAnimationFrame. Un número que salta se lee
//  como un error; uno que viaja se lee como un cálculo.
// ============================================================================
import { useState, useEffect, useRef, useMemo } from "react";
import { CALC } from "../data/content";
import { useI18n } from "../i18n/core";
import "./earnings.css";

/**
 * El formateador de plata.
 *
 * LA MONEDA NO CAMBIA CON EL IDIOMA: los autos están en Argentina y se cobran
 * en pesos, así que alguien leyendo en inglés tiene que ver pesos igual. Lo que
 * sí cambia es CÓMO SE ESCRIBE ese número, que es cosa de la región y no de la
 * moneda: en castellano de Argentina son $8.500 con punto, en inglés $8,500 con
 * coma, y en chino se escribe el símbolo pegado al número.
 *
 * Se guardan en un caché porque construir un Intl.NumberFormat es caro y acá se
 * usa en cada cuadro de la animación del número.
 */
const formatters = new Map();

function moneyFor(locale) {
  if (!formatters.has(locale)) {
    formatters.set(
      locale,
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
      }),
    );
  }
  return formatters.get(locale);
}

export default function Earnings() {
  const { t, locale } = useI18n();
  const money = moneyFor(locale);
  const [categoryId, setCategoryId] = useState("sedan");
  const [days, setDays] = useState(10);

  const category = CALC.categories.find((c) => c.id === categoryId);

  const { gross, fee, net } = useMemo(() => {
    const grossValue = category.pricePerDay * days;
    const feeValue = Math.round(grossValue * CALC.fee);
    return { gross: grossValue, fee: feeValue, net: grossValue - feeValue };
  }, [category, days]);

  const shown = useSmoothNumber(net);

  return (
    <section className="section earnings" id="duenos">
      <div className="wrap earnings__inner">
        {/* ── Izquierda ──────────────────────────────────────────────── */}
        <div>
          <span className="label" data-reveal="up">
            <span className="label__n">07</span>
            {t.earnings.label}
            <span className="label__rule" />
          </span>

          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            {t.earnings.title}
          </h2>
          <p className="section-lead" data-reveal="up" style={{ "--i": 2 }}>
            {t.earnings.lead}
          </p>

          <dl className="earnings__points" data-reveal="up" style={{ "--i": 3 }}>
            {t.earnings.points.map(([title, text], i) => (
              <div key={i}>
                <dt>{title}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Derecha: la calculadora ────────────────────────────────── */}
        <div className="calc" data-reveal="up" style={{ "--i": 2 }}>
          <div className="calc__head">
            <h3>{t.earnings.calcTitle}</h3>
            <p>{t.earnings.calcSub}</p>
          </div>

          <fieldset className="calc__field">
            <legend className="calc__label">{t.earnings.type}</legend>
            <div className="calc__cats" role="radiogroup" aria-label={t.earnings.type}>
              {CALC.categories.map((c, i) => (
                <button
                  key={c.id}
                  role="radio"
                  aria-checked={c.id === categoryId}
                  className={`calc__cat ${c.id === categoryId ? "is-active" : ""}`}
                  onClick={() => setCategoryId(c.id)}
                >
                  {/* El nombre de la categoría se traduce; los modelos de
                      ejemplo son nombres propios y quedan igual. */}
                  <strong>{t.earnings.categories[i]}</strong>
                  <small>{c.example}</small>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="calc__field">
            <div className="calc__label-row">
              <label className="calc__label" htmlFor="dias">
                {t.earnings.daysLabel}
              </label>
              <output className="calc__days" htmlFor="dias">
                {days}
              </output>
            </div>

            <input
              id="dias"
              className="calc__range"
              type="range"
              min="1"
              max="25"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              // La barra se pinta hasta donde está el control con un degradado
              // de dos colores planos cuyo corte se calcula acá: los
              // navegadores no dan forma de pintar "lo ya recorrido" de un
              // input range solo con CSS.
              style={{ "--fill": `${((days - 1) / 24) * 100}%` }}
            />

            <div className="calc__scale" aria-hidden="true">
              <span>1</span>
              <span>25</span>
            </div>
          </div>

          <div className="calc__result">
            <span className="calc__result-label">{t.earnings.result}</span>
            <div className="calc__amount" aria-live="polite">
              {money.format(shown)}
            </div>

            <div className="calc__rows">
              <div>
                <span>
                  {money.format(category.pricePerDay)} × {days}{" "}
                  {days === 1 ? t.earnings.day : t.earnings.days}
                </span>
                <strong>{money.format(gross)}</strong>
              </div>
              <div>
                <span>
                  {t.earnings.fee} ({Math.round(CALC.fee * 100)}%)
                </span>
                <strong>−{money.format(fee)}</strong>
              </div>
            </div>

            {/* Acá había un botón "Publicar mi auto" que solo bajaba hasta el
                cierre de esta misma página. La nota alcanza: la acción real
                está en la aplicación, y el enlace a la aplicación ya está
                arriba y abajo. */}
            <p className="calc__note">{t.earnings.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Lleva un número hasta su valor nuevo deslizándose, en vez de saltar.
 *
 * Si el usuario sigue moviendo el control, el efecto se limpia y vuelve a
 * empezar desde el valor actual: nunca hay dos animaciones peleándose por el
 * mismo número.
 */
function useSmoothNumber(target, duration = 480) {
  const [display, setDisplay] = useState(target);
  // El valor actual también en una ref: dentro del bucle hace falta leerlo sin
  // volver a disparar el efecto.
  const currentRef = useRef(target);

  useEffect(() => {
    const from = currentRef.current;
    const delta = target - from;
    if (delta === 0) return;

    const quiet = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (quiet) {
      currentRef.current = target;
      setDisplay(target);
      return;
    }

    let frame = 0;
    let startTime = null;

    const tick = (now) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic: rápido al principio, suave al llegar.
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = from + delta * eased;

      currentRef.current = value;
      setDisplay(value);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        currentRef.current = target;
        setDisplay(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return display;
}
