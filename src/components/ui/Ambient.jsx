// ============================================================================
//  Ambient — El fondo que respira
// ----------------------------------------------------------------------------
//  La página era papel blanco liso de punta a punta. Editorial, sí, pero fría:
//  sin nada detrás, la pantalla se lee como un documento impreso.
//
//  Quedaron DOS capas, las dos fijas, atrás de todo y decorativas:
//
//   1. LA TRAMA de puntos cada 34 píxeles, casi invisible. No se ve: se siente.
//      Es lo que hace que el blanco deje de parecer un vacío y pase a parecer
//      un papel con textura.
//
//   2. UNA MANCHA AZUL enorme y desenfocada, abajo, que se desplaza muy
//      despacio. Nunca se la ve moverse; lo que se nota es que el fondo no está
//      del todo quieto.
//
//  LO QUE SE SACÓ, Y POR QUÉ
//  Había también hilos de lluvia en diagonal y dos manchas más, violeta y
//  verde. Las tres se fueron: las diagonales le daban a todo un aire de papel
//  rayado que no tiene nada que ver con el resto de la página, y el violeta y
//  el verde repartidos por el fondo le sacaban fuerza justo a lo único que
//  tiene que usar esos dos colores —la marca de público de cada capítulo, que
//  ahora va resaltada con marcador—. Un color que está en todos lados deja de
//  señalar.
//
//  Queda la azul porque el azul es el color de la marca y no significa nada
//  más; y porque sin ninguna mancha el fondo vuelve a ser el blanco plano que
//  había que arreglar.
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
//  ACCESIBILIDAD: con "reducir movimiento" la mancha se queda quieta. Sigue
//  estando y sigue dando color: quien pidió menos movimiento no tiene por qué
//  recibir además una página más fea.
//
//  aria-hidden y pointer-events:none: es decoración pura. No la anuncia ningún
//  lector de pantalla y no se come un solo clic.
// ============================================================================
import "./ambient.css";

export default function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient__grid" />
      <span className="ambient__blob" />
    </div>
  );
}
