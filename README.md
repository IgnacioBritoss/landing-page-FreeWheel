# Landing page de Freewheel

Página de presentación de **Freewheel**, la plataforma de alquiler de autos
entre particulares. Es un sitio estático: no habla con ningún backend.

## Cómo correrlo

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ para revisarlo antes de publicar
```

## Con qué está hecho

React 19 + Vite y **nada más**. Sin Tailwind, sin librerías de animación
(nada de GSAP ni Framer Motion), sin fuentes de Google. Todo el movimiento
está escrito a mano con CSS y dos APIs del navegador:
`IntersectionObserver` y `requestAnimationFrame`.

Eso no es capricho: son ~230 KB de JavaScript en total (70 KB comprimidos), la
página no hace ni un pedido de red a terceros, y cada efecto se puede explicar
línea por línea.

## Las animaciones principales

**1. El auto que llega manejando** (`components/Hero.jsx`)
Al cargar la página, el auto entra desde afuera de la pantalla por la
izquierda, se pasa de largo y vuelve **marcha atrás** para estacionar, como
cuando uno se pasa de la cochera. Está en el `@keyframes park` de `hero.css`.
Lo que hace que la maniobra se lea como un auto y no como un deslizamiento son
las curvas: el tramo de entrada desacelera fuerte, el de marcha atrás es más
lento.

**2. La sección que se queda fija** (`components/Journey.jsx`)
Mide cuatro pantallas de alto, pero lo de adentro está pegado
(`position: sticky`): mientras se scrollea, el bloque no se mueve y van
cambiando los cuatro pasos. Para seguir bajando hay que pasar por los cuatro.

**3. La frase que se ilumina palabra por palabra** (`components/Statement.jsx`)
No se puede leer de un vistazo: hay que bajar para terminarla.

Las dos últimas van **atadas al scroll**: no se disparan y terminan, avanzan y
retroceden con la rueda del mouse. El motor es `hooks/useScrollProgress.js`,
que escribe el avance (un número de 0 a 1) en una **variable CSS** en vez de
guardarlo en el estado de React. Por eso la página no se re-renderiza mientras
se scrollea. Está explicado en detalle en los comentarios de ese archivo.

Además, `components/Showcase.jsx` tiene tres piezas de la aplicación
redibujadas: el **escaneo del DNI** (con la línea que recorre el documento y
los cuatro controles que hace el modelo), el **mapa con los autos disponibles**
(pines y zonas aproximadas, con los mismos colores y medidas que usa Leaflet en
la app) y el **chat** (con la nota de voz transcripta). Las tres arrancan
recién cuando entran en pantalla.

## Cómo personalizarla

### Los textos y el enlace a la aplicación

Están **todos** en `src/data/content.js`, ninguno dentro de un componente.
Para cambiar un título, agregar una pregunta al FAQ o sumar una función a la
lista de la plataforma, se edita ese archivo y listo. No hace falta tocar JSX.

La dirección de la aplicación en funcionamiento es la constante `APP_URL`, al
principio de ese mismo archivo. Es el **único** enlace que saca de la landing y
aparece dos veces: en la barra de arriba y en el cierre.

No hay botones de "iniciar sesión", "registrarse", "buscar un auto" ni
"publicar mi auto" repartidos por la página. Los había, y todos apuntaban a
otra sección de esta misma página: prometían una pantalla y entregaban un
scroll. Un botón que no hace lo que dice es peor que no tenerlo.

### Los colores

Están todos en `src/styles/tokens.css`. Son los mismos de la aplicación
(`src/styles/theme.css` del proyecto Freewheel), así que la landing y el
producto se ven de la misma familia. Cambiando `--blue` cambia la página
entera.

La regla del diseño: **color plano, nunca degradado**. El peso visual lo dan
el tamaño de la tipografía, el aire y las líneas de 1px. El azul se usa solo
en lo que se puede tocar; si aparece en todos lados, deja de señalar.

### La calculadora de ganancias

Los precios por categoría y la comisión están en `CALC`, dentro de
`content.js`. Se cambian ahí y se recalcula sola.

### El logo

`src/components/ui/Logo.jsx`. Es una silueta de auto: un cuerpo relleno con
dos muescas semicirculares (los pasos de rueda) y dos círculos apoyados
adentro. Al ser una sola forma con huecos, se sigue leyendo a 16 píxeles,
donde un contorno de trazo se convierte en una mancha gris.

El mismo dibujo está en `public/favicon.svg`.

## Estructura

```text
src/
  data/content.js            todos los textos y datos
  styles/
    tokens.css               colores, tipografía, medidas
    base.css                 reset y elementos comunes
    animations.css           keyframes y aparición al scrollear
  hooks/
    useReveal.js             aparición de elementos al entrar en pantalla
    useScroll.js             avance de lectura de la barra de arriba
    useScrollProgress.js     motor de las animaciones atadas al scroll
  components/
    Nav.jsx                  barra de arriba y menú de celular
    Hero.jsx                 portada + el auto que llega y estaciona
    Statement.jsx            la frase que se ilumina
    Journey.jsx              los cuatro pasos, sección fija
    Platform.jsx             las ocho capacidades del producto
    AiShowcase.jsx           los cuatro usos de IA, con demo
    Trust.jsx                verificación de identidad y rangos
    Showcase.jsx             escaneo del DNI, mapa y chat
    AppPreview.jsx           la app dentro de un teléfono
    Earnings.jsx             calculadora de ganancias
    Languages.jsx            los cinco idiomas
    Faq.jsx                  preguntas frecuentes
    Close.jsx                cierre oscuro + pie de página
    ui/Logo.jsx              la marca
  App.jsx                    el orden de las secciones
```

## Accesibilidad

- Todo el movimiento se reduce si el sistema tiene activado
  `prefers-reduced-motion` (vértigo, migraña, trastornos vestibulares).
- El foco del teclado siempre se ve; solo se oculta el contorno cuando el
  clic vino del mouse.
- Los acordeones y las pestañas son `<button>` de verdad, con `aria-expanded`
  y `aria-controls`.
- El rango de una persona se distingue por **cantidad de barras** en el
  escudo, no solo por color: se lee igual con daltonismo o impreso en blanco
  y negro. Ese criterio viene de la app.

## Una aclaración sobre los datos

La página **no muestra números inventados**. No dice cuántos autos hay
publicados ni cuántas reservas se hicieron, porque la plataforma todavía no
tiene esos datos. Lo que sí se afirma —verificación de identidad, revisión de
fotos y documentos con IA, entrega con código, cinco idiomas— es
funcionalidad que la aplicación tiene implementada.

Los pagos de Freewheel están simulados, y la landing lo dice en el pie y en
las preguntas frecuentes.

## Publicar

El repo trae `vercel.json` con el rewrite a `index.html`. En Vercel:
framework Vite, build `npm run build`, carpeta de salida `dist`.
