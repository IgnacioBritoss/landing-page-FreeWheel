import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// La landing no habla con ningún backend: es estática. Solo React + Vite, sin
// librerías de animación — todo el movimiento está escrito a mano con CSS y
// IntersectionObserver (ver src/hooks/).
export default defineConfig({
  plugins: [react()],
});
