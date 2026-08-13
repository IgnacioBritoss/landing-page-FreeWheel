// ============================================================================
//  App.jsx — El orden de la página
// ----------------------------------------------------------------------------
//  Acá no hay lógica: solo el ORDEN de las secciones. Cada una es un
//  componente independiente que se puede mover, sacar o repetir cambiando una
//  línea de este archivo.
//
//  EL ORDEN SIGUE EL RECORRIDO DE ALGUIEN QUE NO CONOCE FREEWHEEL:
//
//    Hero .......... ¿qué es esto?              el gancho
//    Statement ..... ¿por qué existe?           el problema, en una frase
//    Journey ....... ¿cómo se usa?              los cuatro pasos
//    Platform ...... ¿qué trae por dentro?      la profundidad
//    AiShowcase .... ¿qué lo hace distinto?     la demo
//    Trust ......... ¿es confiable?             la objeción más grande
//    AppPreview .... ¿cómo se ve?               el producto
//    Earnings ...... ¿qué gano yo?              el otro lado del mercado
//    Languages ..... el alcance
//    Faq ........... las últimas dudas
//    Close ......... la acción y el pie
//
//  La objeción de confianza va DESPUÉS de mostrar las funciones: puesta al
//  principio, respondería una pregunta que la persona todavía no se hizo.
//
//  Los DOS momentos de scroll fuertes están separados a propósito —el auto que
//  se dibuja en la portada y la sección fija de los pasos— con la frase en el
//  medio. Juntos se pisarían.
//
//  useReveal() se llama UNA sola vez, acá. Un único IntersectionObserver se
//  ocupa de todos los [data-reveal] de la página; no hace falta uno por
//  sección.
// ============================================================================
import { useReveal } from "./hooks/useReveal";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Journey from "./components/Journey";
import Platform from "./components/Platform";
import AiShowcase from "./components/AiShowcase";
import Trust from "./components/Trust";
import AppPreview from "./components/AppPreview";
import Earnings from "./components/Earnings";
import Languages from "./components/Languages";
import Faq from "./components/Faq";
import Close from "./components/Close";

export default function App() {
  useReveal();

  return (
    <>
      <Nav />

      {/* <main> y no un <div>: le dice al navegador y a los lectores de
          pantalla dónde empieza el contenido principal. */}
      <main>
        <Hero />
        <Statement />
        <Journey />
        <Platform />
        <AiShowcase />
        <Trust />
        <AppPreview />
        <Earnings />
        <Languages />
        <Faq />
        <Close />
      </main>
    </>
  );
}
