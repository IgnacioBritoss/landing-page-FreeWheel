// ============================================================================
//  Nav — La barra de arriba
// ----------------------------------------------------------------------------
//  Transparente sobre la portada; al bajar aparece el fondo blanco y la línea
//  de 1px que la separa del contenido. Nada de vidrio esmerilado ni sombras:
//  una línea alcanza.
//
//  Abajo va la barrita de avance de lectura. Es retención pura: quien ve que
//  le falta poco, termina de bajar.
//
//  ACCESIBILIDAD DEL MENÚ DE CELULAR:
//   · aria-expanded le dice al lector de pantalla si está abierto;
//   · con Escape se cierra;
//   · mientras está abierto se bloquea el scroll del fondo, si no la página de
//     atrás se mueve debajo del menú.
// ============================================================================
import { useState, useEffect } from "react";
import { useScroll } from "../hooks/useScroll";
import { NAV_LINKS, APP_URL } from "../data/content";
import Logo from "./ui/Logo";
import { Arrow, ExternalArrow } from "./Hero";
import "./nav.css";

export default function Nav() {
  const { progress, scrolled } = useScroll();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        {/* La franja de la bandera, arriba de todo. Es lo primero que se ve al
            entrar y le da un borde a la página: sin ella el tope quedaba liso.
            Tres píxeles alcanzan — con más, deja de ser un detalle y se
            convierte en una decoración. */}
        <span className="nav__flag" aria-hidden="true" />

        <div className="nav__inner wrap">
          <a href="#top" className="nav__brand" aria-label="Freewheel, ir al inicio">
            <Logo height={20} />
          </a>

          <nav className="nav__links" aria-label="Secciones de la página">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            {/* El único enlace que saca de la landing, y lleva a la aplicación
                de verdad. Antes acá había un "Iniciar sesión" y un "Crear
                cuenta" que apuntaban a otra sección de esta misma página: dos
                botones que prometían una pantalla y entregaban un scroll. */}
            <a
              href={APP_URL}
              className="btn btn--solid nav__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Freewheel
              <ExternalArrow />
            </a>

            <button
              className={`nav__burger ${open ? "is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar el menú" : "Abrir el menú"}
            >
              {/* Dos líneas que se cruzan en una X. */}
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* La barra de avance. Se escala en X en vez de cambiar el ancho:
            escalar no obliga al navegador a recalcular el layout. */}
        <div className="nav__progress" aria-hidden="true">
          <div className="nav__progress-fill" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </header>

      <div id="menu-movil" className={`sheet ${open ? "is-open" : ""}`}>
        <nav className="sheet__links">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="sheet__link"
              // El retardo en cascada: cada link entra 55ms después del
              // anterior. La variable la lee el CSS.
              style={{ "--i": i }}
              onClick={() => setOpen(false)}
            >
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="sheet__link-label">{link.label}</span>
              <Arrow size={18} />
            </a>
          ))}
        </nav>

        <div className="sheet__foot" style={{ "--i": NAV_LINKS.length }}>
          <a
            href={APP_URL}
            className="btn btn--solid"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Abrir Freewheel
            <ExternalArrow />
          </a>
        </div>
      </div>
    </>
  );
}
