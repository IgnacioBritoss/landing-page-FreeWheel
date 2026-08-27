// ============================================================================
//  CityPhotos — Buenos Aires de fondo
// ----------------------------------------------------------------------------
//  Las tres fotos de la ciudad, en gris y muy apagadas, cambiando de a una cada
//  trece segundos con un fundido largo. No se mira ninguna: lo que se percibe
//  es que atrás hay una ciudad, y que cada tanto es otra.
//
//  ─────────────────────────────────────────────────────────────────────────
//  TRES DECISIONES QUE HACEN QUE ESTO NO ROMPA NADA
//
//  1. SI FALTA UN ARCHIVO, NO PASA NADA. Cada foto avisa por `onError` si no
//     cargó y se la saca de la rotación. Si no carga ninguna —porque todavía no
//     se subieron, o porque se les cambió el nombre— el fondo dibuja la silueta
//     de la ciudad en vectores y no queda ningún hueco. La página se ve entera
//     con fotos y sin fotos.
//
//  2. NO SE CARGAN HASTA QUE EL NAVEGADOR ESTÁ DESOCUPADO. Son decoración: no
//     pueden competir por ancho de banda con la tipografía ni con el titular.
//     Se pide el espacio libre con requestIdleCallback, y donde eso no existe
//     —Safari viejo— se espera un segundo y medio. Sin esto, tres fotos de
//     fondo retrasan lo primero que la persona ve.
//
//  3. NO SE USA mix-blend-mode. Sería el camino "elegante" para fundir una foto
//     con el fondo, pero la capa de ambiente es un contexto de apilamiento
//     propio (va con z-index: -1), y adentro de un contexto aislado el modo de
//     fusión mezcla contra un fondo transparente y da resultados raros.
//     Escala de grises más opacidad baja hace lo mismo y es predecible.
//  ─────────────────────────────────────────────────────────────────────────
//
//  Las fotos van SIN alt y con aria-hidden: no aportan información, y un lector
//  de pantalla anunciando "foto de Buenos Aires" tres veces sería ruido.
// ============================================================================
import { useEffect, useState } from "react";
import { CITY_PHOTOS } from "../../data/content";

/** Cada cuánto cambia de foto. Largo a propósito: si cambia rápido, se nota. */
const HOLD_MS = 13000;

export default function CityPhotos({ onFirst }) {
  // Arranca sin pedir nada. `start` se enciende cuando el navegador está libre.
  const [start, setStart] = useState(false);
  const [ok, setOk] = useState([]);   // índices de las que cargaron
  const [active, setActive] = useState(0);

  useEffect(() => {
    const go = () => setStart(true);
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(go, { timeout: 2500 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(go, 1500);
    return () => clearTimeout(id);
  }, []);

  // La rotación arranca recién cuando hay dos o más: con una sola no hay nada
  // que rotar, y un intervalo corriendo para nada es un intervalo corriendo.
  useEffect(() => {
    if (ok.length < 2) return;
    const id = setInterval(() => setActive((i) => (i + 1) % ok.length), HOLD_MS);
    return () => clearInterval(id);
  }, [ok.length]);

  // En cuanto entra la primera se avisa hacia arriba, y la silueta dibujada se
  // funde y sale. Al revés —esperar a que fallen todas para mostrarla— dejaría
  // el fondo vacío durante la carga.
  //
  // La condición es "hay al menos una" y NO "hay exactamente una". Parece lo
  // mismo y no lo es: si las tres fotos terminan de cargar en el mismo ciclo
  // —cosa que pasa siempre cuando ya están en la caché del navegador— React
  // agrupa los tres avisos en un solo lote y el contador salta de 0 a 3 sin
  // pasar nunca por 1. Con "exactamente una", la silueta no se iba nunca y
  // quedaba dibujada encima de la foto.
  useEffect(() => {
    if (ok.length > 0) onFirst?.();
  }, [ok.length, onFirst]);

  if (!start || CITY_PHOTOS.length === 0) return null;

  const shown = ok[active];

  return (
    <>
      {CITY_PHOTOS.map((src, i) => (
        <img
          key={src}
          className={`ambient__photo ${i === shown ? "is-on" : ""}`}
          src={src}
          alt=""
          aria-hidden="true"
          decoding="async"
          onLoad={() => setOk((list) => (list.includes(i) ? list : [...list, i].sort((a, b) => a - b)))}
          /* Si el archivo no está, esta foto simplemente no entra en la
             rotación. No hay nada que limpiar: el <img> queda transparente. */
          onError={() => {}}
        />
      ))}
    </>
  );
}
