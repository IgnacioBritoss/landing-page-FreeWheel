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
//  SIN BARRAS. Antes el rango se contaba con una a cuatro rayitas blancas
//  adentro del escudo; ensuciaban la pieza y la hacían ver como un ícono de
//  interfaz en vez de una insignia. El nombre del rango va escrito al lado de
//  cada escudo, así que la información no se pierde ni depende del color.
//
//  EL PLATINO lleva además un destello: una franja clara y angosta cruzando la
//  cara, como el reflejo sobre una superficie pulida. Es lo único que lo
//  separa de la plata a primera vista, porque los dos son grises; el platino
//  es el más frío, el más claro y el único que brilla.
// ============================================================================
import "./tier-shield.css";

const METAL = {
  bronze: { light: "#c98a52", dark: "#a05f2b", rim: "#7d4a20" },
  silver: { light: "#b4bfcb", dark: "#8b97a5", rim: "#6d7986" },
  gold: { light: "#e8bd48", dark: "#c1901a", rim: "#9a7210" },
  // Más claro y más frío que la plata, para que no se confundan.
  platinum: { light: "#dce7f5", dark: "#9db4d2", rim: "#7d95b6", shine: true },
};

// El contorno del escudo: hombros rectos, laterales que se cierran y base en
// punta. Es el mismo de la aplicación, ahora relleno en vez de trazado.
const SHIELD = "M10 1.2 18.4 3.5V11.5C18.4 16.5 15 20.5 10 22.8 5 20.5 1.6 16.5 1.6 11.5V3.5L10 1.2Z";

// La mitad izquierda, la cara que "recibe la luz". Recorre el mismo borde pero
// solo del lado izquierdo y cierra por el eje central.
const FACET = "M10 1.2 1.6 3.5V11.5C1.6 16.5 5 20.5 10 22.8Z";

export default function TierShield({ tier = "bronze", size = 26, className = "" }) {
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

      {/* El destello del platino: una franja clara en diagonal, como el
          reflejo sobre metal pulido. Va recortada con la forma del escudo para
          que no se salga por los bordes. */}
      {metal.shine && (
        <>
          <defs>
            <clipPath id={`shine-${tier}`}>
              <path d={SHIELD} />
            </clipPath>
          </defs>
          <g clipPath={`url(#shine-${tier})`}>
            <path d="M13.5 -2 20 4 8 24 1.5 18Z" fill="#ffffff" opacity="0.5" />
            <path d="M18.5 1 21 3.4 10.5 24 8 21.6Z" fill="#ffffff" opacity="0.35" />
          </g>
        </>
      )}

    </svg>
  );
}
