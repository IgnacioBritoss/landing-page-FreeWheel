// ============================================================================
//  Ambient — El fondo que respira
// ----------------------------------------------------------------------------
//  La página era papel blanco liso de punta a punta. Editorial, sí, pero frío:
//  sin nada detrás, la pantalla se lee como un documento impreso y no como algo
//  que está vivo.
//
//  Cinco capas, de atrás hacia adelante, todas decorativas:
//
//   1. LA CIUDAD. Fotos de Buenos Aires en gris y muy apagadas, cambiando cada
//      trece segundos. Mientras no estén los archivos —o si fallan— va en su
//      lugar la silueta dibujada en vectores. Ver CityPhotos.jsx y Skyline.jsx.
//
//   2. LA TRAMA de puntos cada 34 píxeles, casi invisible. No se ve: se siente.
//      Es lo que hace que el blanco deje de parecer un vacío y pase a parecer
//      un papel con textura.
//
//   3. LAS MANCHAS DE COLOR, enormes y desenfocadas, que se desplazan muy
//      despacio —entre 34 y 52 segundos cada vuelta, sin sincronizarse entre
//      ellas—. Nunca se las ve moverse; lo que se nota es que el fondo no está
//      quieto. Son los colores de los dos públicos (violeta para quien alquila,
//      verde para quien pone su auto) más el azul de la marca, así que el
//      ambiente está hecho de las tres cosas que la página cuenta.
//
//   4. LA LLUVIA: hilos finos en diagonal, cayendo despacio. Buenos Aires y la
//      lluvia van juntas, y una textura en movimiento sobre el color le da al
//      fondo dos velocidades en vez de una. Cae MUY despacio a propósito: a
//      velocidad de lluvia de verdad se convierte en un protector de pantalla
//      y la página deja de ser lo importante.
//
//   5. EL VELO: un paño del color del papel, apenas opaco, encima de todo lo
//      anterior. Es lo que garantiza que por más que se suba el color o entre
//      una foto con mucho contraste, el texto de arriba siga teniendo el mismo
//      fondo de siempre debajo. Sin él, cada foto nueva obligaría a revisar la
//      legibilidad de toda la página.
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
//  ACCESIBILIDAD: con "reducir movimiento" activado las manchas y la lluvia se
//  quedan quietas y las fotos dejan de rotar —todo sigue estando, sigue dando
//  color y textura—. Quien pidió menos movimiento no tiene por qué recibir
//  además una página más fea.
//
//  aria-hidden y pointer-events:none: es decoración pura. No la anuncia ningún
//  lector de pantalla y no se come un solo clic.
// ============================================================================
import { useCallback, useState } from "react";
import CityPhotos from "./CityPhotos";
import Skyline from "./Skyline";
import "./ambient.css";

export default function Ambient() {
  // La silueta dibujada se muestra desde el primer instante y se funde hacia
  // afuera cuando entra la primera foto. Así no hay ni un momento con el fondo
  // vacío: ni mientras cargan, ni si los archivos no están.
  const [hasPhoto, setHasPhoto] = useState(false);
  const onFirst = useCallback(() => setHasPhoto(true), []);

  return (
    <div className="ambient" aria-hidden="true">
      <CityPhotos onFirst={onFirst} />
      <Skyline className={hasPhoto ? "is-out" : ""} />

      <span className="ambient__grid" />

      <span className="ambient__blob ambient__blob--rent" />
      <span className="ambient__blob ambient__blob--own" />
      <span className="ambient__blob ambient__blob--blue" />

      <span className="ambient__rain" />
      <span className="ambient__veil" />
    </div>
  );
}
