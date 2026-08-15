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
//  A la derecha viven las tres cosas que la persona puede cambiar: el idioma,
//  el tema y el enlace a la aplicación. Van en ese orden a propósito —de la
//  preferencia más "de fondo" a la acción— y las dos primeras sin recuadro,
//  para que ninguna compita con el botón.
//
//  ACCESIBILIDAD DEL MENÚ DE CELULAR:
//   · aria-expanded le dice al lector de pantalla si está abierto;
//   · con Escape se cierra;
//   · mientras está abierto se bloquea el scroll del fondo, si no la página de
//     atrás se mueve debajo del menú.
// ============================================================================
import { useState, useEffect, useRef } from "react";
import { isDark, toggleTheme } from "../services/theme";
import { useScroll } from "../hooks/useScroll";
import { useI18n, LANGS } from "../i18n/core";
import { NAV_HREFS, APP_URL } from "../data/content";
import Logo from "./ui/Logo";
import { Arrow, ExternalArrow } from "./Hero";
import "./nav.css";

export default function Nav() {
  const { t } = useI18n();
  const { progress, scrolled } = useScroll();
  const [open, setOpen] = useState(false);
  // Arranca en false y se corrige apenas monta. No se lee el tema directo en
  // el useState porque esa función corre también si algún día la página se
  // renderiza en el servidor, donde no existe ni window ni localStorage.
  const [dark, setDark] = useState(false);

  useEffect(() => setDark(isDark()), []);

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
          <a href="#top" className="nav__brand" aria-label={t.nav.home}>
            <Logo height={20} />
          </a>

          <nav className="nav__links" aria-label={t.nav.sections}>
            {NAV_HREFS.map((href, i) => (
              <a key={href} href={href} className="nav__link">
                {t.nav.links[i]}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <LangPicker />

            {/* Claro / oscuro. El ícono muestra a qué se va a cambiar, no en
                qué modo se está: si estoy en claro, muestra la luna. */}
            <button
              className="nav__theme"
              onClick={() => setDark(toggleTheme() === "dark")}
              aria-label={dark ? t.nav.toLight : t.nav.toDark}
              title={dark ? t.nav.light : t.nav.dark}
            >
              {dark ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4.2" />
                  <path d="M12 2v2.6M12 19.4V22M4.2 4.2l1.9 1.9M17.9 17.9l1.9 1.9M2 12h2.6M19.4 12H22M4.2 19.8l1.9-1.9M17.9 6.1l1.9-1.9" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
                </svg>
              )}
            </button>

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
              {t.nav.cta}
              <ExternalArrow />
            </a>

            <button
              className={`nav__burger ${open ? "is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
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
          {NAV_HREFS.map((href, i) => (
            <a
              key={href}
              href={href}
              className="sheet__link"
              // El retardo en cascada: cada link entra 55ms después del
              // anterior. La variable la lee el CSS.
              style={{ "--i": i }}
              onClick={() => setOpen(false)}
            >
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="sheet__link-label">{t.nav.links[i]}</span>
              <Arrow size={18} />
            </a>
          ))}
        </nav>

        <div className="sheet__foot" style={{ "--i": NAV_HREFS.length }}>
          <a
            href={APP_URL}
            className="btn btn--solid"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            {t.nav.cta}
            <ExternalArrow />
          </a>
        </div>
      </div>
    </>
  );
}

/**
 * EL SELECTOR DE IDIOMA
 * ----------------------------------------------------------------------------
 * Un botón con el globo y el código del idioma actual, y abajo la lista de los
 * cinco. Cada opción está escrita EN SU PROPIO IDIOMA —"Português", no
 * "Portugués"— porque quien busca su idioma en una lista busca la palabra que
 * conoce, no su traducción al castellano. Es la regla que siguen todos los
 * selectores de idioma que funcionan.
 *
 * El atributo `lang` en cada opción hace que el lector de pantalla la pronuncie
 * con la voz correcta en vez de leer "中文" letra por letra en castellano.
 *
 * La lista se DIBUJA SOLO CUANDO ESTÁ ABIERTA, no se esconde con CSS: así los
 * cinco botones no quedan en el orden de tabulación de una lista invisible,
 * que es el error clásico de los menús desplegables.
 *
 * Se cierra de las tres maneras que la gente intenta: eligiendo, tocando
 * afuera y con Escape.
 */
function LangPicker() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    // `pointerdown` y no `click`: si se escucha el clic, tocar el botón que
    // abre el menú lo cierra en el mismo gesto y parece que no pasa nada.
    const onDown = (e) => {
      if (!boxRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div className="lang" ref={boxRef}>
      <button
        className={`lang__btn ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="lang-menu"
        aria-label={`${t.nav.language}: ${current.name}`}
        title={t.nav.language}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          {/* El meridiano y los paralelos: con dos curvas y una línea el globo
              se lee a 18px. Con los continentes de verdad, no. */}
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
        <span className="lang__code">{current.short}</span>
      </button>

      {open && (
        <div className="lang__menu" id="lang-menu">
          {LANGS.map((l) => (
            <button
              key={l.code}
              lang={l.code}
              className={`lang__opt ${l.code === lang ? "is-active" : ""}`}
              aria-current={l.code === lang}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
            >
              <span className="lang__opt-code">{l.short}</span>
              {l.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
