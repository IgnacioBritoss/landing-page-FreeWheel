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
import { FOOTER, APP_URL } from "../data/content";
import Logo from "./ui/Logo";
import { ExternalArrow } from "./Hero";
import "./close.css";

export default function Close() {
  const year = new Date().getFullYear();

  return (
    <section className="close" id="cierre">
      {/* ── La llamada a la acción ─────────────────────────────────── */}
      <div className="wrap close__cta">
        <h2 className="close__title" data-reveal="up">
          <span className="curtain">
            <span>Tu próximo viaje empieza</span>
          </span>
          <span className="curtain">
            <span style={{ "--i": 1 }}>con un auto que ya está acá</span>
          </span>
        </h2>

        <div className="close__actions" data-reveal="up" style={{ "--i": 2 }}>
          <a
            href={APP_URL}
            className="btn btn--paper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir Freewheel
            <ExternalArrow />
          </a>
        </div>

        <p className="close__note" data-reveal="up" style={{ "--i": 3 }}>
          La aplicación está funcionando. El registro es gratis, no pide tarjeta
          y la verificación de identidad se hace una sola vez.
        </p>
      </div>

      {/* ── El pie ─────────────────────────────────────────────────── */}
      <footer className="close__footer">
        <div className="wrap">
          <div className="close__top">
            <div className="close__brand">
              <Logo height={20} className="logo--ink" />
              <p>{FOOTER.tagline}</p>
            </div>

            <nav className="close__cols" aria-label="Enlaces del pie de página">
              {FOOTER.columns.map((col) => (
                <div key={col.title}>
                  <h3>{col.title}</h3>
                  <ul>
                    {col.links.map((link) => (
                      <li key={link}>
                        {/* Son enlaces de muestra: la landing todavía no tiene
                            esas páginas. Apuntan al inicio y no a "#" a secas,
                            que en algunos navegadores salta de golpe. */}
                        <a href="#top">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="close__bottom">
            <span>© {year} Freewheel</span>
            <span>{FOOTER.legal}</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
