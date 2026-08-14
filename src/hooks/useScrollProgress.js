// ============================================================================
//  useScrollProgress — Cuánto se recorrió de UN elemento, de 0 a 1
// ----------------------------------------------------------------------------
//  ES EL MOTOR DE LAS DOS ANIMACIONES GRANDES de la página: el auto que se
//  dibuja en la portada y la sección fija de los cuatro pasos.
//
//  La diferencia con una animación normal es importante: acá nada se
//  "dispara". El dibujo AVANZA Y RETROCEDE con la rueda del mouse. Si la
//  persona sube, el auto se desdibuja. Eso es lo que hace que se sienta que
//  uno está manejando la animación, y es la razón por la que este tipo de
//  efecto retiene: da algo que hacer mientras se lee.
//
//  ─────────────────────────────────────────────────────────────────────────
//  POR QUÉ NO SE GUARDA EL PROGRESO EN UN useState
//
//  Sería lo primero que uno intenta, y es un error: el scroll dispara decenas
//  de eventos por segundo, y cada setState re-renderiza el componente. Con dos
//  secciones animadas, la página se traba en cualquier celular.
//
//  Acá el número se escribe DIRECTO en una variable CSS del elemento
//  (--progress). El CSS la lee y el navegador repinta solamente lo que
//  cambió. React ni se entera. Es la misma técnica que usa la luz que sigue al
//  mouse, llevada al scroll.
//
//  Para lo que sí necesita saber React —qué paso está activo de los cuatro—
//  hay un callback aparte que se llama SOLO cuando el paso cambia de verdad,
//  no en cada píxel. De cientos de avisos por segundo pasan a ser cuatro en
//  toda la sección.
//  ─────────────────────────────────────────────────────────────────────────
//
//  ACOPLARSE AL RITMO DE DIBUJADO (rAF throttling)
//  El listener de scroll no calcula nada: solo marca "hay que recalcular" y
//  pide un requestAnimationFrame. Como el navegador dibuja una vez por cuadro,
//  el cálculo corre como mucho una vez por cuadro por más que el evento se
//  haya disparado veinte veces en el medio.
//
//  { passive: true } le promete al navegador que este listener no va a llamar
//  a preventDefault(), así puede scrollear sin esperar a que termine nuestro
//  código. Sin eso, el scroll con el dedo se siente pegajoso.
// ============================================================================
import { useEffect, useRef } from "react";

/**
 * @param {object} options
 * @param {number} options.steps      Si es > 0, además del progreso avisa en
 *                                    qué tramo de N está (0..steps-1).
 * @param {(i: number) => void} options.onStep  Se llama solo cuando cambia el
 *                                    tramo, nunca en cada cuadro.
 * @param {"cover"|"fill"} options.mode
 *        "cover" → 0 cuando el elemento asoma por abajo de la pantalla, 1
 *                  cuando terminó de salir por arriba. Sirve para un bloque
 *                  común (la portada).
 *        "fill"  → 0 cuando el elemento toca el borde de arriba, 1 cuando su
 *                  final llega a ese borde. Es el que corresponde para una
 *                  sección con contenido fijo (position: sticky).
 *
 * @returns ref — hay que colgarla del elemento a medir.
 */
export function useScrollProgress({ steps = 0, onStep, mode = "cover" } = {}) {
  const ref = useRef(null);
  // El último tramo avisado. En una ref y no en un estado: cambiarlo no tiene
  // que provocar ningún render.
  const lastStep = useRef(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const compute = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      let progress;
      if (mode === "fill") {
        // Cuánto del elemento ya pasó por el borde de arriba de la pantalla.
        // El recorrido útil es su alto menos una pantalla: ese es el tramo en
        // el que el contenido pegado queda quieto.
        const travel = rect.height - vh;
        progress = travel > 0 ? -rect.top / travel : 0;
      } else {
        // El elemento recorre desde que asoma abajo hasta que sale por arriba.
        const travel = rect.height + vh;
        progress = (vh - rect.top) / travel;
      }

      // Fuera del rango 0..1 no tiene sentido: se recorta.
      progress = Math.min(Math.max(progress, 0), 1);

      // El número va a una variable CSS, no al estado de React.
      el.style.setProperty("--progress", progress.toFixed(4));

      if (steps > 0) {
        // El último tramo se cierra en `steps - 1` y no en `steps`: con
        // progress === 1 exacto, la cuenta daría un índice que no existe.
        const index = Math.min(Math.floor(progress * steps), steps - 1);
        if (index !== lastStep.current) {
          lastStep.current = index;
          onStep?.(index);
        }
      }
    };

    const onScroll = () => {
      if (ticking) return; // ya hay un cálculo agendado para el próximo cuadro
      ticking = true;
      requestAnimationFrame(compute);
    };

    compute(); // estado inicial, por si se recarga la página a mitad de camino
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps, onStep, mode]);

  return ref;
}
