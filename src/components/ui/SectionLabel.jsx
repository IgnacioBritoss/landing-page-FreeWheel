// ============================================================================
//  SectionLabel — El encabezado de capítulo
// ----------------------------------------------------------------------------
//  "01 — CÓMO FUNCIONA | PARA QUIEN ALQUILA ————————". Es lo que hace que la
//  página se lea como un documento y no como un catálogo de tarjetas.
//
//  Antes esto estaba escrito a mano en las nueve secciones. Se hizo componente
//  al agregarle la marca de público: nueve copias de la misma estructura es
//  justo la cantidad con la que, al tocar una, alguna se queda atrás.
//
//  LA MARCA DE PÚBLICO
//  Freewheel le habla a dos personas con miedos opuestos: la que necesita un
//  auto unos días y la que tiene uno parado. La página no avisaba en ningún
//  lado a cuál de las dos le estaba hablando en cada tramo.
//
//  `audience` puede ser "rent" (quien alquila, violeta), "own" (quien pone su
//  auto, verde) o nada. Sin marca es el estado normal: la mayoría de las
//  secciones —confianza, idiomas, preguntas— le hablan a los dos, y forzarles
//  una etiqueta sería mentir. Solo cuatro de las nueve la llevan; si la
//  llevaran todas dejaría de señalar nada.
//
//  El color no carga el significado solo: al lado va la palabra escrita. Quien
//  no distingue el violeta del verde lee igual a quién le habla la sección, que
//  es la única forma seria de usar color como código.
// ============================================================================
import { useT } from "../../i18n/core";

export default function SectionLabel({ n, children, audience, rule = true, reveal = true }) {
  const t = useT();

  return (
    <span
      className={`label ${audience ? `label--${audience}` : ""}`}
      {...(reveal ? { "data-reveal": "up" } : {})}
    >
      <span className="label__n">{n}</span>
      {children}
      {audience && <span className="label__who">{t.audience[audience]}</span>}
      {/* Journey no lleva la línea: su encabezado vive dentro del bloque
          pegado y ahí la línea estirándose choca con la barra de avance. */}
      {rule && <span className="label__rule" />}
    </span>
  );
}
