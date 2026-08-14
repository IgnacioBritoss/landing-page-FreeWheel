// ============================================================================
//  Showcase — Tres pantallas de la aplicación, tal como son
// ----------------------------------------------------------------------------
//  Acá no se explica nada con palabras: se muestra la pantalla. Son tres piezas
//  reales de Freewheel, redibujadas con divs y SVG.
//
//   1. LA VERIFICACIÓN DEL DNI. El documento se escanea y una línea recorre la
//      foto mientras el modelo lo revisa. Después aparecen los cuatro controles
//      que hace de verdad: tipo de documento, nombre, número y vigencia.
//   2. EL MAPA CON LOS AUTOS DISPONIBLES. Los pines son los mismos que dibuja
//      la aplicación: un punto azul de 14px con borde blanco, y un círculo
//      alrededor que marca la ZONA APROXIMADA, no la dirección exacta.
//   3. EL CHAT ENTRE LAS DOS PERSONAS. Con texto, una nota de voz transcripta y
//      una foto del estado del auto.
//
//  Las tres se animan cuando entran en pantalla, no antes: si arrancaran al
//  cargar la página, para cuando alguien baje hasta acá ya habrían terminado.
//  Eso lo resuelve useInView, que avisa la primera vez que el bloque se ve.
// ============================================================================
import { useState, useRef, useCallback } from "react";
import { MAP_CARS, CHAT } from "../data/content";
import { useInView } from "../hooks/useReveal";
import "./showcase.css";

export default function Showcase() {
  return (
    <section className="section showcase" id="pantallas">
      <div className="wrap">
        <header className="showcase__head">
          <span className="label" data-reveal="up">
            <span className="label__n">05</span>
            Así se ve
            <span className="label__rule" />
          </span>
          <h2 className="section-title" data-reveal="up" style={{ "--i": 1 }}>
            Tres pantallas, sin maquillaje
          </h2>
          <p className="section-lead" data-reveal="up" style={{ "--i": 2 }}>
            Son las de la aplicación funcionando, redibujadas para que se vean
            nítidas en cualquier pantalla.
          </p>
        </header>

        <div className="showcase__list">
          <Block
            n="01"
            title="El documento se revisa solo"
            text="Subís la foto del DNI y el modelo la lee en el momento: confirma que sea el documento que se pidió, que el nombre y el número se lean, y que esté vigente. Si algo no se ve, te lo dice y lo volvés a sacar."
          >
            <ScanDni />
          </Block>

          <Block
            n="02"
            title="Los autos, sobre el mapa"
            text="Cada punto es un auto publicado. El círculo alrededor es la zona aproximada, no la puerta: la dirección exacta aparece recién cuando la reserva está confirmada."
            reverse
          >
            <MapCars />
          </Block>

          <Block
            n="03"
            title="Se coordina por chat"
            text="Texto, fotos, archivos y notas de voz. Los audios se transcriben solos, para poder leerlos cuando no se puede escuchar."
          >
            <ChatDemo />
          </Block>
        </div>
      </div>
    </section>
  );
}

/** El armazón de cada bloque: texto de un lado, pantalla del otro. */
function Block({ n, title, text, children, reverse = false }) {
  return (
    <article className={`showcase__block ${reverse ? "is-reverse" : ""}`}>
      <div className="showcase__copy" data-reveal="up">
        <span className="showcase__n">{n}</span>
        <h3 className="showcase__title">{title}</h3>
        <p className="showcase__text">{text}</p>
      </div>
      <div className="showcase__art" data-reveal="up" style={{ "--i": 1 }}>
        {children}
      </div>
    </article>
  );
}

/* ============================================================================
   1) El escaneo del DNI
   ----------------------------------------------------------------------------
   El documento está dibujado (no es la foto de un DNI real, obviamente). Una
   línea azul lo recorre de arriba a abajo mientras "se revisa", y después
   aparecen los cuatro controles de a uno.

   La línea de escaneo es un degradado angosto que se mueve con transform: no
   cambia de posición con `top`, que obligaría a recalcular el layout en cada
   cuadro.
   ========================================================================== */
function ScanDni() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  const begin = useCallback(() => setStarted(true), []);
  useInView(ref, begin, { threshold: 0.45 });

  const checks = [
    "Tipo de documento correcto",
    "Nombre legible",
    "Número legible",
    "Dentro de la fecha de vigencia",
  ];

  return (
    <div className={`scan ${started ? "is-on" : ""}`} ref={ref}>
      {/* ── El documento ─────────────────────────────────────────── */}
      <div className="scan__doc">
        <div className="scan__doc-top">
          <span className="scan__doc-country">REPÚBLICA ARGENTINA</span>
          <span className="scan__doc-kind">DNI</span>
        </div>

        <div className="scan__doc-body">
          {/* El retrato: una silueta genérica, no una persona. */}
          <div className="scan__photo" aria-hidden="true">
            <svg viewBox="0 0 40 48" fill="none">
              <circle cx="20" cy="16" r="9" fill="currentColor" />
              <path d="M4 48c0-9.4 7.2-17 16-17s16 7.6 16 17" fill="currentColor" />
            </svg>
          </div>

          <div className="scan__fields">
            {/* Los renglones del documento son barras, no texto inventado: no
                hace falta poner un nombre y un número falsos para que se
                entienda que ahí va el nombre y el número. */}
            <span className="scan__label">Apellido y nombre</span>
            <span className="scan__bar" style={{ "--w": "78%" }} />
            <span className="scan__label">Documento</span>
            <span className="scan__bar" style={{ "--w": "52%" }} />
            <span className="scan__label">Vencimiento</span>
            <span className="scan__bar" style={{ "--w": "38%" }} />
          </div>
        </div>

        {/* Las esquinas del encuadre y la línea que recorre. */}
        <span className="scan__corner scan__corner--tl" />
        <span className="scan__corner scan__corner--tr" />
        <span className="scan__corner scan__corner--bl" />
        <span className="scan__corner scan__corner--br" />
        <span className="scan__beam" aria-hidden="true" />
      </div>

      {/* ── Los controles ────────────────────────────────────────── */}
      <ul className="scan__checks">
        {checks.map((label, i) => (
          <li key={label} style={{ "--i": i }}>
            <span className="scan__mark" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================================
   2) El mapa con los autos disponibles
   ----------------------------------------------------------------------------
   El mapa de la aplicación es Leaflet sobre OpenStreetMap. Acá está dibujado:
   una trama de calles en SVG, y encima los pines con los mismos colores y
   medidas que usa la app (punto azul de 14px con borde blanco de 2px, y un
   círculo de zona en #2563eb sobre relleno #bfdbfe al 18%).

   Al pasar el mouse por un punto se abre la tarjeta del auto, igual que el
   popup del mapa real.
   ========================================================================== */
function MapCars() {
  // Cuál está abierto. Arranca en el primero para que se entienda de entrada
  // que los puntos se pueden tocar.
  const [open, setOpen] = useState(MAP_CARS[0].id);

  return (
    <div className="map">
      {/* La trama de calles. Son líneas rectas cruzadas, no un mapa real: lo
          que tiene que quedar claro es que es un plano, no la geografía. */}
      <svg className="map__grid" viewBox="0 0 400 300" aria-hidden="true">
        {[40, 92, 150, 208, 262].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} />
        ))}
        {[54, 118, 186, 250, 320].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" />
        ))}
        {/* Dos avenidas más gruesas, para que la trama no sea perfectamente
            uniforme y se lea como una ciudad. */}
        <line className="map__ave" x1="0" y1="150" x2="400" y2="150" />
        <line className="map__ave" x1="186" y1="0" x2="186" y2="300" />
      </svg>

      {MAP_CARS.map((car) => (
        <div
          key={car.id}
          className={`map__pin ${open === car.id ? "is-open" : ""}`}
          style={{ left: `${car.x}%`, top: `${car.y}%` }}
          onMouseEnter={() => setOpen(car.id)}
          onFocus={() => setOpen(car.id)}
        >
          {/* La zona aproximada. */}
          <span className="map__zone" aria-hidden="true" />

          <button className="map__dot" aria-label={`${car.name} en ${car.zone}`} />

          {/* La tarjeta, igual que el popup del mapa de la app. */}
          <div className="map__card">
            <strong>{car.name}</strong>
            <span className="map__card-zone">
              {car.zone} <em>(zona aprox.)</em>
            </span>
            <span className="map__card-price">
              {car.price}
              <em>/día</em>
            </span>
          </div>
        </div>
      ))}

      <span className="map__credit">Sobre OpenStreetMap en la aplicación</span>
    </div>
  );
}

/* ============================================================================
   3) El chat
   ----------------------------------------------------------------------------
   Los mensajes aparecen de a uno cuando el bloque entra en pantalla, con el
   indicador de "escribiendo" entre uno y otro. Es lo que hace que se lea como
   una conversación pasando y no como una captura de pantalla.
   ========================================================================== */
function ChatDemo() {
  const [shown, setShown] = useState(0);
  const ref = useRef(null);

  // Al entrar en pantalla, se van sumando mensajes de a uno. El temporizador
  // se vuelve a agendar solo mientras falten: no hace falta un setInterval que
  // después haya que cancelar.
  const begin = useCallback(() => {
    let count = 0;
    const next = () => {
      count += 1;
      setShown(count);
      if (count < CHAT.length) setTimeout(next, 950);
    };
    setTimeout(next, 350);
  }, []);

  useInView(ref, begin, { threshold: 0.4 });

  return (
    <div className="chat" ref={ref}>
      <header className="chat__head">
        <span className="chat__avatar">R</span>
        <div>
          <strong>Roberto O.</strong>
          <span>Toyota Corolla 2021</span>
        </div>
      </header>

      <div className="chat__body">
        {CHAT.slice(0, shown).map((msg, i) => (
          <div key={i} className={`msg msg--${msg.side}`}>
            {msg.kind === "text" && <p className="msg__text">{msg.body}</p>}

            {msg.kind === "voice" && (
              <div className="msg__voice">
                <div className="msg__wave" aria-hidden="true">
                  {/* Las barras del audio. Las alturas son fijas y no
                      aleatorias: con Math.random() el dibujo cambiaría en cada
                      render y la onda temblaría. */}
                  {[8, 14, 20, 11, 17, 23, 13, 9, 16, 21, 12, 7, 15, 19, 10].map((h, j) => (
                    <span key={j} style={{ height: `${h}px`, "--j": j }} />
                  ))}
                </div>
                <span className="msg__secs">0:0{msg.seconds}</span>
                <p className="msg__transcript">
                  <span>Transcripción</span>
                  {msg.transcript}
                </p>
              </div>
            )}

            {msg.kind === "image" && (
              <div className="msg__image">
                <div className="msg__thumb" aria-hidden="true">
                  <svg viewBox="0 0 48 22" fill="none">
                    <path
                      d="M1 12.4C1 11.2 1.8 10.2 3 9.9L13.2 7.6L18.6 3.2C19.4 2.6 20.3 2.3 21.3 2.3H29.5C30.8 2.3 32 2.8 32.9 3.7L38.4 9.2L45 10.6C46.2 10.9 47 11.9 47 13.1V15.3C47 16 46.4 16.5 45.7 16.5H40.5A4.3 4.3 0 0 0 31.9 16.5H16.1A4.3 4.3 0 0 0 6.5 16.5H2.3C1.6 16.5 1 16 1 15.3V12.4Z"
                      fill="currentColor"
                    />
                    <circle cx="11.8" cy="16.5" r="3" fill="currentColor" />
                    <circle cx="36.2" cy="16.5" r="3" fill="currentColor" />
                  </svg>
                </div>
                <span className="msg__caption">{msg.caption}</span>
              </div>
            )}

            <span className="msg__time">{msg.time}</span>
          </div>
        ))}

        {/* Mientras falten mensajes, los tres puntitos. */}
        {shown > 0 && shown < CHAT.length && (
          <div className="msg msg--them">
            <div className="msg__typing" aria-label="escribiendo">
              <i /><i /><i />
            </div>
          </div>
        )}
      </div>

      <div className="chat__bar" aria-hidden="true">
        <span>Escribí un mensaje</span>
        <span className="chat__mic" />
      </div>
    </div>
  );
}
