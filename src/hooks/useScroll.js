// ============================================================================
//  useScroll — Cuánto se scrolleó, sin trabar la página
// ----------------------------------------------------------------------------
//  Devuelve dos cosas:
//   · progress → de 0 a 1, cuánto de la página se recorrió (para la barrita de
//     progreso de arriba).
//   · scrolled → true cuando ya se bajó lo suficiente como para que la barra de
//     navegación se ponga opaca.
//
//  EL PROBLEMA DEL EVENTO 'scroll'
//  Se dispara MUCHÍSIMAS veces por segundo. Si en cada disparo se llama a
//  setState, React vuelve a renderizar decenas de veces por segundo y la página
//  se traba.
//
//  LA SOLUCIÓN: acoplarse al ritmo de dibujado
//  El listener no calcula nada: solo marca "hay que recalcular" y pide un
//  requestAnimationFrame. Como el navegador dibuja una vez por cuadro, el
//  cálculo corre como mucho una vez por cuadro por más que el evento se haya
//  disparado veinte veces en el medio. Es la técnica conocida como "rAF
//  throttling".
//
//  { passive: true } es la otra mitad: le promete al navegador que este
//  listener NO va a llamar a preventDefault(), así puede scrollear sin esperar
//  a que termine nuestro código. Sin esto, el scroll con el dedo en el celular
//  se siente pegajoso.
// ============================================================================
import { useState, useEffect } from "react";

export function useScroll() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      const y = window.scrollY;
      // Alto total scrolleable = alto del documento menos lo que se ve.
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      setScrolled(y > 40);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return; // ya hay un cálculo agendado para el próximo cuadro
      ticking = true;
      requestAnimationFrame(compute);
    };

    compute(); // estado inicial: si se recarga la página a mitad de camino
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { progress, scrolled };
}
