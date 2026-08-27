// ============================================================================
//  Ambient — El fondo que respira
// ----------------------------------------------------------------------------
//  La página era papel blanco liso de punta a punta. Editorial, sí, pero frío:
//  sin nada detrás, la pantalla se lee como un documento impreso y no como algo
//  que está vivo.
//
//  Esto arregla eso con dos capas, las dos apoyadas atrás de todo:
//
//   1. UNA TRAMA de puntos cada 34 píxeles, casi invisible. No se ve: se
//      siente. Es lo que hace que el blanco deje de parecer un vacío y pase a
//      parecer un papel con textura. Si al abrir la página uno nota los
//      puntitos, están demasiado fuertes.
//
//   2. TRES MANCHAS DE COLOR enormes y desenfocadas, que se desplazan muy
//      despacio —entre 34 y 52 segundos cada vuelta, sin sincronizarse entre
//      ellas—. Nunca se las ve moverse; lo que se nota es que el fondo no está
//      quieto. Son los colores de los dos públicos (violeta para quien alquila,
//      verde para quien pone su auto) más el azul de la marca, así que el
//      ambiente está hecho literalmente de las tres cosas que la página cuenta.
//
//  ─────────────────────────────────────────────────────────────────────────
//  POR QUÉ NO LLEVA filter: blur()
//  Desenfocar de verdad una superficie del tamaño de la pantalla es de las
//  cosas más caras que se le pueden pedir a un navegador, y hay que rehacerla
//  en cada cuadro de la animación: en un celular de gama media eso solo ya
//  come el presupuesto de los 60 cuadros por segundo.
//
//  Un degradado radial con el color desvaneciéndose hasta transparente ya SE
//  VE desenfocado, sin serlo, y no cuesta nada. Lo único que se anima es
//  `transform`, que el navegador resuelve en la placa de video sin volver a
//  dibujar nada.
//
//  Y va en `position: fixed`: la capa no participa del scroll, así que
//  scrollear la página no obliga a repintarla.
//  ─────────────────────────────────────────────────────────────────────────
//
//  ACCESIBILIDAD: con "reducir movimiento" activado las manchas se quedan
//  quietas —siguen estando, siguen dando color— y la trama no se toca. Quien
//  pidió menos movimiento no tiene por qué recibir además una página más fea.
//
//  aria-hidden y pointer-events:none: es decoración pura. No la anuncia ningún
//  lector de pantalla y no se come un solo clic.
// ============================================================================
import "./ambient.css";

export default function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient__grid" />
      <span className="ambient__blob ambient__blob--rent" />
      <span className="ambient__blob ambient__blob--own" />
      <span className="ambient__blob ambient__blob--blue" />
    </div>
  );
}
