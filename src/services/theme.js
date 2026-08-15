// ============================================================================
//  theme.js — Claro y oscuro
// ----------------------------------------------------------------------------
//  Escribe un atributo `data-theme` en el <html>, y el CSS hace todo el resto
//  (ver el bloque de modo oscuro en styles/tokens.css).
//
//  HAY TRES ESTADOS, NO DOS:
//    "system" → no se escribe ningún atributo y manda el sistema operativo;
//    "dark"   → oscuro elegido a mano;
//    "light"  → claro elegido a mano.
//
//  El tercero importa: alguien con el sistema en oscuro puede querer la página
//  en claro igual. Con un booleano no se puede expresar eso.
//
//  POR QUÉ NO SE INVIERTE LA PÁGINA CON UN FILTRO
//  La aplicación resuelve el modo oscuro con `filter: invert()`, y por eso
//  tiene que ir marcando a mano cada bloque que ya es oscuro para volver a
//  invertirlo. Funciona, pero el azul de la marca se vuelve naranja y toda
//  foto o mapa sale en negativo. Acá, redefiniendo las variables, el azul
//  sigue siendo azul y el mapa se ve normal.
//
//  EL PARPADEO AL CARGAR
//  El tema se aplica en un script del index.html que corre ANTES de que React
//  monte. Si se aplicara recién al montar, la página se vería un instante en
//  blanco y después saltaría a oscuro.
// ============================================================================

const KEY = "fw-theme";

/** Lo que la persona eligió, o "system" si nunca eligió. */
export function getTheme() {
  try {
    return localStorage.getItem(KEY) || "system";
  } catch {
    // Almacenamiento bloqueado (modo incógnito): se usa el sistema y no se
    // recuerda la elección. No es grave.
    return "system";
  }
}

/** ¿Un tema dado se ve oscuro? Para "system", pregunta al sistema operativo. */
function darkFor(theme) {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

/** ¿Se está viendo oscuro ahora mismo? */
export function isDark() {
  return darkFor(getTheme());
}

/** Aplica un tema y lo recuerda. */
export function setTheme(theme) {
  const root = document.documentElement;

  if (theme === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }

  // La barra del navegador en el celular tiene que acompañar, si no queda una
  // franja blanca arriba de una página oscura.
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", darkFor(theme) ? "#0f141c" : "#ffffff");

  try {
    localStorage.setItem(KEY, theme);
  } catch { /* no es grave */ }
}

/** Cambia al opuesto de lo que se está viendo. */
export function toggleTheme() {
  const next = isDark() ? "light" : "dark";
  setTheme(next);
  return next;
}
