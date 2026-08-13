// ============================================================================
//  main.jsx — Punto de entrada de la landing
// ----------------------------------------------------------------------------
//  Monta React sobre el <div id="root"> del index.html y carga las hojas de
//  estilo en el orden que importa:
//    1) tokens.css      → las variables (colores, tipografías, sombras).
//    2) base.css        → el reset y los estilos de los elementos comunes.
//    3) animations.css  → los @keyframes y las clases de aparición.
//  Los estilos de cada sección viven al lado de su componente, en components/.
// ============================================================================
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/animations.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
