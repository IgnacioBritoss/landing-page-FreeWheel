// ============================================================================
//  i18n/index.jsx — El proveedor de idioma
// ----------------------------------------------------------------------------
//  Este archivo exporta SOLO el componente proveedor. Todo lo demás —la lista de
//  idiomas, el hook useI18n, los diccionarios— vive en core.js, igual que en la
//  aplicación: la regla de recarga en caliente de React pide que un archivo con
//  componentes no exporte además constantes ni funciones.
//
//  Uso:
//    // en main.jsx
//    <I18nProvider><App /></I18nProvider>
//
//    // en cualquier sección
//    import { useT } from "../i18n/core";
//    const t = useT();
//    <h2>{t.platform.title}</h2>
//    {t.platform.items.map((item) => ...)}
// ============================================================================
import { useCallback, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANG, I18nContext, dictFor, getLang, localeOf, setLang } from "./core";

export function I18nProvider({ children }) {
  // Arranca en castellano y se corrige apenas monta, por el mismo motivo que el
  // tema: la función del useState también correría en un render de servidor,
  // donde no hay ni navigator ni localStorage. El atributo lang del <html> ya
  // quedó bien antes, en el script del index.html.
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    setLangState(setLang(getLang()));
  }, []);

  const change = useCallback((code) => setLangState(setLang(code)), []);

  const t = dictFor(lang);

  // El título de la pestaña y la descripción para el buscador también cambian.
  // Si no, alguien que comparte el enlace estando en inglés manda una tarjeta de
  // vista previa escrita en castellano.
  useEffect(() => {
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [t]);

  const value = useMemo(
    () => ({ lang, setLang: change, t, locale: localeOf(lang) }),
    [lang, change, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
