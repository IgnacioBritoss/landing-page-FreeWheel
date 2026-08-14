// ============================================================================
//  TierShield — El escudo de un rango
// ----------------------------------------------------------------------------
//  Antes eran cuatro escudos de contorno fino, todos iguales, distinguidos solo
//  por el color de la línea. Se veían pobres y ninguno parecía hecho del
//  material que dice ser: un bronce y un platino dibujados con el mismo trazo
//  de 1.5px son el mismo objeto pintado distinto.
//
//  CÓMO SE HACE QUE UN DIBUJO PLANO PAREZCA METAL, SIN DEGRADADOS
//  El truco no es el brillo: es la FACETA. Una pieza de metal tiene caras
//  planas que reciben la luz en ángulos distintos, y el ojo lee esa diferencia
//  de tono como volumen. Acá el escudo está partido al medio en dos tonos del
//  mismo color —la mitad izquierda más clara, la derecha más oscura—, con un
//  borde apenas más profundo. Tres tonos planos, cero degradados, y el escudo
//  deja de ser una silueta para convertirse en un objeto.
//
//  Los tonos de cada rango salen de su metal real: el bronce tira a marrón
//  anaranjado, la plata a gris frío, el oro a amarillo cálido y el platino a un
//  gris con azul, que es lo que lo diferencia de la plata.
//
//  EL RANGO SE SIGUE LEYENDO POR CANTIDAD DE BARRAS, no solo por color: una a
//  cuatro, recortadas en blanco sobre el metal. Es el mismo criterio de la
//  aplicación, y es lo que hace que se distinga un bronce de un platino con
//  daltonismo o impreso en blanco y negro.
// ============================================================================
import "./tier-shield.css";

const METAL = {
  bronze: { light: "#c98a52", dark: "#a05f2b", rim: "#7d4a20" },
  silver: { light: "#bcc7d2", dark: "#8b97a5", rim: "#6d7986" },
  gold: { light: "#e8bd48", dark: "#c1901a", rim: "#9a7210" },
  platinum: { light: "#a8bad6", dark: "#7188ad", rim: "#566b8e" },
};

// El contorno del escudo: hombros rectos, laterales que se cierran y base en
// punta. Es el mismo de la aplicación, ahora relleno en vez de trazado.
const SHIELD = "M10 1.2 18.4 3.5V11.5C18.4 16.5 15 20.5 10 22.8 5 20.5 1.6 16.5 1.6 11.5V3.5L10 1.2Z";

// La mitad izquierda, la cara que "recibe la luz". Recorre el mismo borde pero
// solo del lado izquierdo y cierra por el eje central.
const FACET = "M10 1.2 1.6 3.5V11.5C1.6 16.5 5 20.5 10 22.8Z";

export default function TierShield({ tier = "bronze", bars = 1, size = 26, className = "" }) {
  const metal = METAL[tier] ?? METAL.bronze;

  return (
    <svg
      className={`tier-shield ${className}`}
      width={size}
      height={Math.round(size * 1.2)}
      viewBox="0 0 20 24"
      fill="none"
      aria-hidden="true"
    >
      {/* La cara oscura: el escudo entero. */}
      <path d={SHIELD} fill={metal.dark} />
      {/* La cara clara, encima, solo la mitad izquierda. */}
      <path d={FACET} fill={metal.light} />
      {/* El borde, un tono más profundo que las dos caras. */}
      <path d={SHIELD} stroke={metal.rim} strokeWidth="1" strokeLinejoin="round" />

      {/* Las barras del rango, recortadas en blanco de abajo hacia arriba. */}
      {Array.from({ length: bars }).map((_, i) => (
        <rect
          key={i}
          x="6.2"
          y={14.4 - i * 2.9}
          width="7.6"
          height="1.7"
          rx="0.85"
          fill="#fff"
          opacity="0.92"
        />
      ))}
    </svg>
  );
}
