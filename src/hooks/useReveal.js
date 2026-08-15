// ============================================================================
//  useReveal — Hacer aparecer los elementos cuando entran en pantalla
// ----------------------------------------------------------------------------
//  ESTE ES EL MOTOR DE LA PÁGINA. Casi todo lo que se mueve al scrollear pasa
//  por acá.
//
//  CÓMO FUNCIONA
//  Se busca en el documento todo lo que tenga el atributo [data-reveal] y se lo
//  entrega a un IntersectionObserver: una API del navegador que avisa cuando un
//  elemento entra o sale de la pantalla. Cuando entra, se le pone la clase
//  .is-visible y el CSS (animations.css) hace la transición.
//
//  POR QUÉ IntersectionObserver Y NO EL EVENTO 'scroll'
//  El evento scroll se dispara decenas de veces por segundo, y en cada disparo
//  habría que preguntarle a cada elemento dónde está con getBoundingClientRect(),
//  que obliga al navegador a recalcular el layout. Con 60 tarjetas eso son
//  miles de cálculos por segundo y la página se traba en un celular.
//  IntersectionObserver hace ese trabajo fuera del hilo principal y solo avisa
//  cuando algo cambió de verdad.
//
//  UNA SOLA VEZ
//  Después de mostrar un elemento se lo deja de observar (unobserve). Si no, al
//  volver a subir el elemento se escondería otra vez y la página "parpadearía"
//  al scrollear para atrás.
//
//  ─────────────────────────────────────────────────────────────────────────
//  POR QUÉ RECIBE UNA LLAVE (y no es un adorno)
//
//  El barrido del documento se hace UNA vez, cuando la página monta. Todo lo
//  que tenga [data-reveal] en ese momento queda observado; lo que aparezca
//  DESPUÉS, no, y como el CSS lo arranca en opacity:0, se queda invisible para
//  siempre.
//
//  Eso es exactamente lo que pasó al agregar los idiomas: al cambiar de idioma,
//  React vuelve a montar los elementos de una lista si su `key` es el texto
//  traducido —cambió la llave, cambió el elemento—, y los nodos nuevos no
//  estaban en el barrido inicial. La sección "La plataforma" quedaba en blanco.
//
//  Se arregló de las dos puntas: las listas ahora usan llaves que no dependen
//  del idioma (así no se remontan), y además el barrido se rehace cuando esta
//  llave cambia. Con una sola de las dos alcanzaba; con las dos, el día que
//  alguien agregue una sección nueva no tiene que acordarse de esto.
//
//  Rehacer el barrido es barato y pasa una vez por cambio de idioma. A lo ya
//  mostrado no lo afecta: conserva su clase .is-visible y volver a observarlo
//  no lo hace parpadear.
//  ─────────────────────────────────────────────────────────────────────────
// ============================================================================
import { useEffect } from "react";

/**
 * @param {unknown} key  Cambiala para rehacer el barrido. La página le pasa el
 *                       idioma, que es lo único que remonta elementos.
 */
export function useReveal(key) {
  useEffect(() => {
    // Si el navegador es viejo y no tiene la API, se muestra todo directamente.
    // Siempre es mejor una página sin animación que una página en blanco.
    if (typeof IntersectionObserver === "undefined") {
      document
        .querySelectorAll("[data-reveal], .curtain")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        // rootMargin recorta la zona de detección. El -12% de abajo hace que el
        // elemento tenga que entrar UN POCO en pantalla antes de animarse, no
        // apenas asoma un píxel: si se dispara demasiado pronto, la animación
        // termina antes de que la persona llegue a mirar el elemento.
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08,
      },
    );

    const targets = document.querySelectorAll("[data-reveal], .curtain");
    targets.forEach((el) => observer.observe(el));

    // Al desmontar hay que desconectar el observer, si no queda escuchando
    // sobre nodos que ya no existen (fuga de memoria).
    return () => observer.disconnect();
  }, [key]);
}

/**
 * Variante para un elemento puntual: devuelve una ref y avisa por callback la
 * primera vez que entra en pantalla. La usan las secciones que necesitan SABER
 * que se las está mirando para arrancar algo (los contadores, la animación de
 * escritura de la IA), no solo para aparecer.
 *
 * @param {(entry: IntersectionObserverEntry) => void} onEnter
 * @param {{ threshold?: number, once?: boolean }} options
 */
export function useInView(ref, onEnter, { threshold = 0.35, once = true } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      onEnter?.();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          onEnter?.(entry);
          if (once) observer.unobserve(entry.target);
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // onEnter viene de un useCallback en quien lo usa, así que la lista está
    // completa y el efecto no se rearma en cada render.
  }, [ref, onEnter, threshold, once]);
}
