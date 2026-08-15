// ============================================================================
//  lang.js — El idioma elegido
// ----------------------------------------------------------------------------
//  Mismo criterio que theme.js: la elección se guarda en el navegador y se
//  escribe en el <html>. La diferencia es que acá no hay un estado "system":
//  el idioma se ADIVINA la primera vez a partir del navegador y desde ahí queda
//  fijo, porque cambiar de idioma es una decisión mucho más consciente que
//  cambiar de tema.
//
//  POR QUÉ EL ATRIBUTO lang DEL <html> NO ES UN ADORNO
//  Es lo que usan el corrector ortográfico, el traductor automático del
//  navegador, los lectores de pantalla —para elegir la voz correcta y no leer
//  chino con acento castellano— y el propio navegador para partir palabras al
//  final del renglón. Una página entera en inglés con lang="es" se lee mal, en
//  el sentido literal. La app hace exactamente lo mismo.
// ============================================================================

const KEY = "fw-lang";

/** Los cinco idiomas, en el orden en que aparecen en el selector.
 *
 *  `locale` es distinto de `code` porque los formatos de número y de hora son
 *  regionales, no del idioma: el castellano de Argentina escribe $8.500 con
 *  punto y el inglés $8,500 con coma. Eso lo resuelve Intl con el locale, no
 *  con el código de idioma suelto. */
export const LANGS = [
  { code: "es", name: "Español", short: "ES", locale: "es-AR" },
  { code: "en", name: "English", short: "EN", locale: "en-US" },
  { code: "pt", name: "Português", short: "PT", locale: "pt-BR" },
  { code: "it", name: "Italiano", short: "IT", locale: "it-IT" },
  { code: "zh", name: "中文", short: "中", locale: "zh-CN" },
];

export const DEFAULT_LANG = "es";

const CODES = LANGS.map((l) => l.code);

export function isLang(code) {
  return CODES.includes(code);
}

/** El locale regional de un idioma, para Intl. */
export function localeOf(code) {
  return LANGS.find((l) => l.code === code)?.locale ?? "es-AR";
}

/**
 * Qué idioma mostrar.
 *   1. el que la persona eligió alguna vez;
 *   2. si nunca eligió, el del navegador —se compara solo la primera parte,
 *      así "pt-BR", "pt-PT" y "pt" caen todos en portugués—;
 *   3. y si el navegador está en un idioma que la página no habla, castellano.
 */
export function getLang() {
  try {
    const saved = localStorage.getItem(KEY);
    if (isLang(saved)) return saved;
  } catch {
    /* almacenamiento bloqueado: se sigue con la detección */
  }

  const list = typeof navigator !== "undefined" ? navigator.languages || [navigator.language] : [];
  for (const tag of list) {
    const base = String(tag || "").toLowerCase().split("-")[0];
    if (isLang(base)) return base;
  }

  return DEFAULT_LANG;
}

/** Aplica un idioma y lo recuerda. */
export function setLang(code) {
  const next = isLang(code) ? code : DEFAULT_LANG;

  document.documentElement.setAttribute("lang", next);

  try {
    localStorage.setItem(KEY, next);
  } catch {
    /* no es grave: se pierde la elección al cerrar, nada más */
  }

  return next;
}
