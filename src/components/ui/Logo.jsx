// ============================================================================
//  Logo — La marca de Freewheel
// ----------------------------------------------------------------------------
//  UN AUTO, NO UN VOLANTE. Y una silueta, no un dibujo con detalles.
//
//  Cómo está construido el símbolo:
//   · el CUERPO es una sola forma llena: el perfil de un sedán reducido a lo
//     mínimo que todavía se lee como auto. Bajo y largo (48 × 22 unidades), con
//     el parabrisas inclinado hacia adelante. Las proporciones importan: con la
//     cabina más alta y las curvas más redondas el símbolo se vuelve un autito
//     de juguete;
//   · las RUEDAS no están dibujadas con líneas. El cuerpo tiene dos muescas
//     semicirculares —los pasos de rueda— y las ruedas son dos círculos
//     apoyados adentro, separados por un aire de 1.3 unidades. Ese aire es lo
//     que hace que la marca funcione en un solo color: no hay contornos, hay
//     formas y espacios entre formas.
//
//  Por qué relleno y no contorno de trazo: un contorno fino a 16 píxeles —el
//  tamaño real del ícono de una pestaña— se convierte en una mancha gris. Una
//  forma llena con huecos se sigue leyendo.
//
//  El símbolo hereda el color del texto (`currentColor`), así el mismo
//  componente sirve en negro sobre blanco y en blanco sobre el bloque oscuro
//  del cierre, sin duplicar nada.
// ============================================================================
import "./logo.css";

// El trazado del cuerpo. Las dos "A" (arcos) del final son las muescas de los
// pasos de rueda: muerden el borde de abajo hacia arriba.
const BODY =
  "M1 12.4C1 11.2 1.8 10.2 3 9.9L13.2 7.6L18.6 3.2C19.4 2.6 20.3 2.3 21.3 " +
  "2.3H29.5C30.8 2.3 32 2.8 32.9 3.7L38.4 9.2L45 10.6C46.2 10.9 47 11.9 47 " +
  "13.1V15.3C47 16 46.4 16.5 45.7 16.5H40.5A4.3 4.3 0 0 0 31.9 16.5H16.1A4.3 " +
  "4.3 0 0 0 7.5 16.5H2.3C1.6 16.5 1 16 1 15.3V12.4Z";

/** Solo el símbolo, sin la palabra. Lo usa el pie y la maqueta del teléfono. */
export function LogoMark({ height = 22, className = "" }) {
  return (
    <svg
      className={className}
      width={(height * 48) / 22}
      height={height}
      viewBox="0 0 48 22"
      fill="none"
      aria-hidden="true"
    >
      <path d={BODY} fill="currentColor" />
      <circle cx="11.8" cy="16.5" r="3" fill="currentColor" />
      <circle cx="36.2" cy="16.5" r="3" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ height = 21, withText = true, className = "" }) {
  return (
    <span className={`logo ${className}`}>
      <LogoMark height={height} className="logo__mark" />
      {withText && <span className="logo__text">Freewheel</span>}
    </span>
  );
}
