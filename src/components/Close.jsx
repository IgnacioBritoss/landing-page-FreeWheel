// ============================================================================
//  Close — El cierre: llamada a la acción + pie de página
// ----------------------------------------------------------------------------
//  EL ÚNICO BLOQUE OSCURO DE TODA LA PÁGINA. Después de recorrer diez
//  secciones sobre blanco, este corte es lo que hace que el ojo se clave acá y
//  no siga de largo. Es un recurso de una sola vez: si hubiera tres bloques
//  oscuros, ninguno llamaría la atención.
//
//  El color es #111827, el mismo que la app usa para su texto principal y para
//  el fondo de su bloque de portada. No es "un negro cualquiera": es el negro
//  de la marca.
//
//  La llamada a la acción y el pie viven en el mismo componente porque son un
//  solo bloque visual: separarlos obligaría a repetir el fondo, el borde y las
//  reglas de color invertido en dos archivos.
// ============================================================================
import { FOOTER_HREFS, APP_URL } from "../data/content";
import { useT } from "../i18n/core";
import Logo from "./ui/Logo";
import { ExternalArrow } from "./Hero";
import "./close.css";

export default function Close() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <section className="close" id="cierre">
      {/* ── La llamada a la acción ─────────────────────────────────── */}
      <div className="wrap close__cta">
        <h2 className="close__title" data-reveal="up">
          <span className="curtain">
            <span>{t.close.titleLines[0]}</span>
          </span>
          <span className="curtain">
            <span style={{ "--i": 1 }}>{t.close.titleLines[1]}</span>
          </span>
        </h2>

        <div className="close__actions" data-reveal="up" style={{ "--i": 2 }}>
          <a
            href={APP_URL}
            className="btn btn--paper"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.close.cta}
            <ExternalArrow />
          </a>
        </div>

        <p className="close__note" data-reveal="up" style={{ "--i": 3 }}>
          {t.close.note}
        </p>
      </div>

      {/* ── El pie ─────────────────────────────────────────────────── */}
      <footer className="close__footer">
        <div className="wrap">
          <div className="close__top">
            <div className="close__brand">
              <Logo height={20} className="logo--ink" />
              <p>{t.close.tagline}</p>
            </div>

            <nav className="close__cols" aria-label={t.close.footerNav}>
              {t.close.columns.map((col, c) => (
                <div key={c}>
                  <h3>{col.title}</h3>
                  <ul>
                    {/* Cada enlace baja a una sección real de esta página.
                        Antes los nueve apuntaban al tope: nueve enlaces que
                        hacían exactamente lo mismo, que es nada.

                        El destino sale de content.js y la etiqueta del
                        diccionario, emparejados por posición. */}
                    {col.links.map((label, i) => (
                      <li key={i}>
                        <a href={FOOTER_HREFS[c][i]}>{label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="close__bottom">
            <span>© {year} Freewheel</span>
            <span>{t.close.bottom}</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
