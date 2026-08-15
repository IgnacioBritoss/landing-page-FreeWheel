// ============================================================================
//  i18n/core.js — El contexto, los diccionarios y el hook
// ----------------------------------------------------------------------------
//  Todo el idioma menos el componente proveedor, que está en index.jsx. La
//  separación es la misma que usa la aplicación (src/i18n/core.js allá) y no es
//  un capricho: la recarga en caliente de React pide que un archivo que exporta
//  componentes no exporte además constantes ni hooks, o deja de refrescar bien
//  mientras se programa.
//
//  ─────────────────────────────────────────────────────────────────────────
//  ¿POR QUÉ ACÁ ES `t.hero.lead` Y EN LA APLICACIÓN ES `t("home.title")`?
//
//  Porque son dos problemas distintos. La aplicación traduce ETIQUETAS SUELTAS
//  —el título de una pantalla, el texto de un botón, un mensaje de error— y ahí
//  una función con la clave por texto es lo más cómodo, además de dejar meter
//  variables: t("home.availableCount", { count: 15 }).
//
//  Esta landing traduce LISTAS: los ocho puntos de la plataforma, los seis del
//  FAQ, los cuatro pasos del recorrido, las tres reseñas. Con una función habría
//  que escribir t("platform.items.3.title") y perder el .map(); con el objeto se
//  hace t.platform.items.map(...), que es exactamente lo que los componentes ya
//  hacían cuando los textos estaban en content.js.
//  ─────────────────────────────────────────────────────────────────────────
//
//  ─────────────────────────────────────────────────────────────────────────
//  LA MEZCLA CON EL CASTELLANO
//
//  es.js define QUÉ claves existen; los otros cuatro son traducciones. Si a uno
//  le falta una clave —porque se agregó un texto nuevo y todavía no se tradujo—
//  se usa la castellana. Agregar una frase a la página nunca deja un `undefined`
//  colgando en cuatro idiomas: la deja en castellano hasta que se traduzca, que
//  es feo pero no roto.
//
//  La mezcla se hace UNA VEZ por idioma y queda en un caché: recorrer el
//  diccionario entero en cada render sería absurdo para algo que cambia cuando
//  alguien toca el selector.
//  ─────────────────────────────────────────────────────────────────────────
// ============================================================================
import { createContext, useContext } from "react";
import { localeOf } from "../services/lang";

import es from "./es";
import en from "./en";
import pt from "./pt";
import it from "./it";
import zh from "./zh";

export const DICTIONARIES = { es, en, pt, it, zh };

export { LANGS, DEFAULT_LANG, getLang, setLang, localeOf } from "../services/lang";

/**
 * Completa `over` con lo que falte de `base`, en profundidad.
 * Las listas se completan por posición: si la traducción tiene tres de los
 * cuatro pasos, el cuarto sale en castellano en vez de desaparecer.
 */
function fill(base, over) {
  if (over === undefined || over === null) return base;

  if (Array.isArray(base)) {
    if (!Array.isArray(over)) return base;
    return base.map((item, i) => (i < over.length ? fill(item, over[i]) : item));
  }

  if (base && typeof base === "object") {
    if (typeof over !== "object" || Array.isArray(over)) return base;
    const out = {};
    for (const key of Object.keys(base)) out[key] = fill(base[key], over[key]);
    return out;
  }

  return over;
}

const cache = new Map([["es", es]]);

/** El diccionario completo de un idioma, con el castellano tapando los huecos. */
export function dictFor(code) {
  if (!cache.has(code)) cache.set(code, fill(es, DICTIONARIES[code] ?? {}));
  return cache.get(code);
}

export const I18nContext = createContext(null);

/** `const { t, lang, setLang, locale } = useI18n()`. */
export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n() se usó fuera de <I18nProvider>");
  return value;
}

/** Atajo para los componentes que solo necesitan leer textos. */
export function useT() {
  return useI18n().t;
}
