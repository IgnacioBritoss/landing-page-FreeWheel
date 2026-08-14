// ============================================================================
//  Showcase — Tres pantallas de la aplicación, tal como son
// ----------------------------------------------------------------------------
//  Acá no se explica nada con palabras: se muestra la pantalla. Son tres piezas
//  reales de Freewheel, redibujadas con divs y SVG.
//
//   1. LA VERIFICACIÓN DEL DNI. Una línea recorre el documento mientras el
//      modelo lo revisa, y después aparecen los cuatro controles que hace.
//   2. EL MAPA DE LA CIUDAD DE BUENOS AIRES, con los autos publicados. Los
//      pines son los mismos que dibuja la aplicación: un punto azul de 14px con
//      borde blanco, y un círculo que marca la ZONA APROXIMADA, no la
//      dirección exacta.
//   3. EL CHAT. Con el audio que se reproduce, los tildes de entregado y
//      leído, y el perfil de la otra persona, que se abre al tocar el nombre.
//
//  Las tres arrancan cuando entran en pantalla, no antes: si empezaran al
//  cargar la página, para cuando alguien baje hasta acá ya habrían terminado.
// ============================================================================
import { useState, useRef, useCallback, useEffect } from "react";
import { MAP_CARS, CHAT, CHAT_PEER, CHAT_PHOTO } from "../data/content";
import { useInView } from "../hooks/useReveal";
import TierShield from "./ui/TierShield";
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
            text="Cada punto es un auto publicado en la Ciudad, ubicado sobre su barrio y no sobre su puerta: la dirección exacta aparece recién cuando la reserva está confirmada."
            reverse
          >
            <MapCars />
          </Block>

          <Block
            n="03"
            title="Se coordina por chat"
            text="Texto, fotos, archivos y notas de voz. Los audios se transcriben solos para poder leerlos cuando no se puede escuchar, y tocando el nombre se abre el perfil de la otra persona con sus reseñas."
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
   ========================================================================== */
function ScanDni() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  const begin = useCallback(() => setStarted(true), []);
  useInView(ref, begin, { threshold: 0.35 });

  const checks = [
    "Tipo de documento correcto",
    "Nombre legible",
    "Número legible",
    "Dentro de la fecha de vigencia",
  ];

  return (
    <div className={`scan ${started ? "is-on" : ""}`} ref={ref}>
      <div className="scan__doc">
        <div className="scan__doc-top">
          <span className="scan__doc-country">REPÚBLICA ARGENTINA</span>
          <span className="scan__doc-kind">DNI</span>
        </div>

        <div className="scan__doc-body">
          <div className="scan__photo" aria-hidden="true">
            <svg viewBox="0 0 40 48" fill="none">
              <circle cx="20" cy="16" r="9" fill="currentColor" />
              <path d="M4 48c0-9.4 7.2-17 16-17s16 7.6 16 17" fill="currentColor" />
            </svg>
          </div>

          <div className="scan__fields">
            {/* Los renglones del documento son barras, no texto: no hace falta
                inventar un nombre y un número para que se entienda qué va ahí. */}
            <span className="scan__label">Apellido y nombre</span>
            <span className="scan__bar" style={{ "--w": "78%" }} />
            <span className="scan__label">Documento</span>
            <span className="scan__bar" style={{ "--w": "52%" }} />
            <span className="scan__label">Vencimiento</span>
            <span className="scan__bar" style={{ "--w": "38%" }} />
          </div>
        </div>

        <span className="scan__corner scan__corner--tl" />
        <span className="scan__corner scan__corner--tr" />
        <span className="scan__corner scan__corner--bl" />
        <span className="scan__corner scan__corner--br" />
        <span className="scan__beam" aria-hidden="true" />
      </div>

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
   2) El mapa de la Ciudad de Buenos Aires
   ----------------------------------------------------------------------------
   El contorno es el de CABA: el Río de la Plata al noreste, la Avenida General
   Paz cerrando por el oeste y el Riachuelo por el sur. Adentro van la trama de
   calles y las avenidas principales.

   Está dibujado y no es un mapa de imágenes por una razón práctica: un mapa de
   verdad son decenas de pedidos a un servidor de mosaicos, que tardan, a veces
   fallan y dejan el recuadro gris. Acá el plano ya está en la página. El mapa
   de VERDAD, con Leaflet y OpenStreetMap, está en la aplicación.
   ========================================================================== */
function MapCars() {
  const [open, setOpen] = useState(MAP_CARS[1].id);

  return (
    <div className="map">
      <svg className="map__plane" viewBox="0 0 400 300" aria-hidden="true">
        <defs>
          {/* Todo lo que se dibuje adentro de este recorte queda dentro de los
              límites de la Ciudad: así las calles no se salen al río. */}
          <clipPath id="caba">
            <path d="M243 14 L272 40 L305 78 L332 128 L336 168 L318 214 L296 246
                     L232 252 L168 258 L118 250 L86 214 L64 168 L62 120 L86 74
                     L128 40 L182 18 Z" />
          </clipPath>
        </defs>

        {/* El río, detrás de todo */}
        <path
          className="map__river"
          d="M243 14 L272 40 L305 78 L332 128 L336 168 L318 214 L296 246
             L400 300 L400 0 Z"
        />

        <g clipPath="url(#caba)">
          {/* La superficie de la ciudad */}
          <rect x="0" y="0" width="400" height="300" className="map__land" />

          {/* La trama de calles, en diagonal: el damero de Buenos Aires está
              girado respecto del norte, y esa inclinación es justamente lo que
              lo hace reconocible. */}
          <g className="map__streets" transform="rotate(-33 200 150)">
            {Array.from({ length: 26 }).map((_, i) => (
              <line key={`a${i}`} x1="-140" y1={-40 + i * 18} x2="540" y2={-40 + i * 18} />
            ))}
            {Array.from({ length: 34 }).map((_, i) => (
              <line key={`b${i}`} x1={-140 + i * 22} y1="-140" x2={-140 + i * 22} y2="440" />
            ))}
          </g>

          {/* Las avenidas. Van sin rotar porque cada una tiene su traza. */}
          <g className="map__aves">
            {/* Rivadavia, que parte la ciudad al medio de este a oeste */}
            <path d="M330 150 L64 160" />
            {/* 9 de Julio */}
            <path d="M296 96 L318 230" />
            {/* Del Libertador, siguiendo la costa */}
            <path d="M232 22 L286 92 L318 168" />
            {/* Corrientes */}
            <path d="M308 122 L96 96" />
            {/* Juan B. Justo */}
            <path d="M290 66 L92 148" />
          </g>

          {/* Los parques: Bosques de Palermo y Parque Centenario */}
          <g className="map__parks">
            <ellipse cx="268" cy="66" rx="30" ry="20" />
            <circle cx="176" cy="150" r="9" />
          </g>
        </g>

        {/* El borde de la Ciudad, encima de todo */}
        <path
          className="map__edge"
          d="M243 14 L272 40 L305 78 L332 128 L336 168 L318 214 L296 246
             L232 252 L168 258 L118 250 L86 214 L64 168 L62 120 L86 74
             L128 40 L182 18 Z"
        />

        <text className="map__hood" x="252" y="46">BELGRANO</text>
        <text className="map__hood" x="278" y="128">PALERMO</text>
        <text className="map__hood" x="196" y="176">ALMAGRO</text>
        <text className="map__hood" x="132" y="196">CABALLITO</text>
        <text className="map__hood" x="92" y="228">FLORES</text>
        <text className="map__water" x="352" y="96">RÍO DE LA PLATA</text>
      </svg>

      {MAP_CARS.map((car) => (
        <div
          key={car.id}
          className={`map__pin ${open === car.id ? "is-open" : ""}`}
          style={{ left: `${car.x}%`, top: `${car.y}%` }}
          onMouseEnter={() => setOpen(car.id)}
          onFocus={() => setOpen(car.id)}
        >
          <button className="map__dot" aria-label={`${car.name} en ${car.zone}`} />

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

      <span className="map__credit">Ciudad de Buenos Aires</span>
    </div>
  );
}

/* ============================================================================
   3) El chat
   ----------------------------------------------------------------------------
   Los mensajes aparecen de a uno con el indicador de "escribiendo" en el medio,
   así se lee como una conversación pasando y no como una captura.
   ========================================================================== */
function ChatDemo() {
  const [shown, setShown] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);
  // Lo que la persona escribe y manda de verdad. Se guarda aparte de la
  // conversación de ejemplo para no tocar los datos de content.js.
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState([]);
  const ref = useRef(null);
  const endRef = useRef(null);

  const begin = useCallback(() => {
    let count = 0;
    const next = () => {
      count += 1;
      setShown(count);
      if (count < CHAT.length) setTimeout(next, 880);
    };
    setTimeout(next, 300);
  }, []);

  useInView(ref, begin, { threshold: 0.35 });

  // Al mandar, el mensaje se agrega al final y la conversación baja sola hasta
  // él: si el chat quedara arriba, parecería que no pasó nada.
  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const time = new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
    setSent((list) => [...list, { body: text, time }]);
    setDraft("");
  };

  useEffect(() => {
    if (sent.length) endRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [sent.length]);

  return (
    <div className="chat" ref={ref}>
      <header className="chat__head">
        {/* El nombre es un botón: abre el perfil, igual que en la aplicación. */}
        <button className="chat__peer" onClick={() => setProfileOpen(true)}>
          <span className="chat__avatar">{CHAT_PEER.initials}</span>
          <span className="chat__peer-text">
            <strong>{CHAT_PEER.name}</strong>
            <span>{CHAT_PEER.car}</span>
          </span>
        </button>
      </header>

      <div className="chat__body">
        {CHAT.slice(0, shown).map((msg, i) => (
          <div key={i} className={`msg msg--${msg.side}`}>
            {msg.kind === "text" && <p className="msg__text">{msg.body}</p>}
            {msg.kind === "voice" && <VoiceNote msg={msg} />}
            {msg.kind === "image" && <PhotoMessage caption={msg.caption} />}

            <span className="msg__meta">
              {msg.time}
              {/* Los tildes solo van en los mensajes propios. */}
              {msg.side === "me" && <Ticks />}
            </span>
          </div>
        ))}

        {shown > 0 && shown < CHAT.length && (
          <div className="msg msg--them">
            <div className="msg__typing" aria-label="escribiendo">
              <i /><i /><i />
            </div>
          </div>
        )}

        {/* Los que escribe la persona que está mirando la página. Llevan los
            mismos tildes que los demás: enviado, entregado y leído. */}
        {sent.map((m, i) => (
          <div key={`sent-${i}`} className="msg msg--me">
            <p className="msg__text">{m.body}</p>
            <span className="msg__meta">
              {m.time}
              <Ticks />
            </span>
          </div>
        ))}

        <div ref={endRef} />
      </div>

      {/* La barra de abajo, con los mismos controles que la aplicación:
          adjuntar, escribir, grabar y enviar. El campo funciona: lo que se
          escribe y se manda aparece en la conversación. */}
      <form className="chat__bar" onSubmit={send}>
        <span className="chat__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.4 11.5 12 19.9a5.5 5.5 0 0 1-7.8-7.8l8.5-8.4a3.7 3.7 0 0 1 5.2 5.2l-8.5 8.5a1.8 1.8 0 0 1-2.6-2.6l7.9-7.8" />
          </svg>
        </span>

        <input
          className="chat__input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Escribí un mensaje..."
          aria-label="Escribí un mensaje"
          maxLength={140}
        />

        <span className="chat__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2.5" width="6" height="11" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0M12 18.5v3" />
          </svg>
        </span>

        {/* Deshabilitado mientras no haya nada escrito: un botón de enviar que
            no envía nada es un botón que miente. */}
        <button className="chat__send" type="submit" disabled={!draft.trim()} aria-label="Enviar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 12 20 4.5 15.5 20l-4-6.5-7-1.5Z" />
          </svg>
        </button>
      </form>

      {profileOpen && <ProfileModal onClose={() => setProfileOpen(false)} />}
    </div>
  );
}

/**
 * La nota de voz. Se reproduce de verdad —la barra avanza y el botón cambia a
 * pausa—, solo que sin audio: es una maqueta. El botón existe porque una nota
 * de voz sin botón de reproducir no se lee como una nota de voz.
 */
function VoiceNote({ msg }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // El avance corre mientras está reproduciendo. Cuando llega al final se
  // frena solo y vuelve a cero, listo para escucharlo de nuevo.
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + 100 / (msg.seconds * 10);
        if (next >= 100) {
          setPlaying(false);
          return 0;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(id);
  }, [playing, msg.seconds]);

  // El segundo en el que va, para el contador.
  const current = Math.round((progress / 100) * msg.seconds);
  const label = playing ? `0:0${current}` : `0:0${msg.seconds}`;

  return (
    <div className="voice">
      <div className="voice__row">
        <button
          className="voice__play"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? "Pausar la nota de voz" : "Reproducir la nota de voz"}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="7" y="5" width="3.6" height="14" rx="1.2" />
              <rect x="13.4" y="5" width="3.6" height="14" rx="1.2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.6c0-.9 1-1.5 1.8-1l8 6.4c.7.5.7 1.5 0 2l-8 6.4c-.8.5-1.8-.1-1.8-1V5.6Z" />
            </svg>
          )}
        </button>

        {/* La onda. Las barras que ya pasaron quedan en azul, las que faltan en
            gris: el corte lo marca la variable --played. */}
        <div className="voice__wave" style={{ "--played": `${progress}%` }} aria-hidden="true">
          {[9, 15, 22, 12, 18, 25, 14, 10, 17, 23, 13, 8, 16, 21, 11, 19, 24, 12, 9, 15].map(
            (h, j) => (
              <span key={j} style={{ height: `${h}px`, "--j": j }} data-on={playing ? "1" : "0"} />
            ),
          )}
        </div>

        <span className="voice__time">{label}</span>
      </div>

      <p className="voice__transcript">
        <span>Transcripción</span>
        {msg.transcript}
      </p>
    </div>
  );
}

/**
 * La foto del auto. Si en content.js se cargó una foto real (CHAT_PHOTO), va
 * esa; si no, se dibuja un auto en tres cuartos. La ilustración no depende de
 * ningún archivo, así que nunca queda el hueco gris de una imagen que no cargó.
 */
function PhotoMessage({ caption }) {
  return (
    <div className="photo">
      <div className="photo__frame">
        {CHAT_PHOTO ? (
          <img src={CHAT_PHOTO} alt={caption} loading="lazy" />
        ) : (
          <svg className="photo__draw" viewBox="0 0 320 200" aria-hidden="true">
            {/* El piso y la sombra debajo del auto */}
            <ellipse className="photo__shadow" cx="160" cy="163" rx="118" ry="12" />

            {/* Carrocería, vista de tres cuartos delantera */}
            <path
              className="photo__body"
              d="M42 148c-12 0-20-8-20-19v-16c0-9 6-17 15-19l38-9 30-27c7-6 16-10 25-10h68c11 0 21 5 28 13l24 27 34 9c11 3 18 12 18 23v9c0 11-8 19-19 19H42Z"
            />
            {/* Parabrisas y ventanillas */}
            <path className="photo__glass" d="M115 62h55c7 0 13 3 18 8l18 21h-96l5-29Z" />
            <path className="photo__glass" d="M104 63l-5 28-31 8 24-24c4-4 8-8 12-12Z" />
            {/* Línea de la puerta y manija */}
            <path className="photo__line" d="M118 91v50M170 91v50" />
            <rect className="photo__handle" x="126" y="104" width="14" height="4" rx="2" />
            {/* Ópticas */}
            <rect className="photo__lamp" x="256" y="106" width="30" height="12" rx="5" />
            <rect className="photo__lamp" x="30" y="106" width="20" height="10" rx="4" />
            {/* Ruedas */}
            <circle className="photo__tyre" cx="88" cy="148" r="27" />
            <circle className="photo__rim" cx="88" cy="148" r="12" />
            <circle className="photo__tyre" cx="234" cy="148" r="27" />
            <circle className="photo__rim" cx="234" cy="148" r="12" />
          </svg>
        )}
      </div>
      <span className="photo__caption">{caption}</span>
    </div>
  );
}

/**
 * Los tildes de estado: uno gris (enviado), dos grises (entregado) y dos
 * celestes (leído). Avanzan solos apenas se monta el mensaje, que es lo que
 * pasa de verdad cuando uno manda algo y del otro lado lo abren.
 */
function Ticks() {
  const [state, setState] = useState("sent");

  useEffect(() => {
    const a = setTimeout(() => setState("delivered"), 700);
    const b = setTimeout(() => setState("read"), 1800);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  return (
    <span className={`ticks is-${state}`} aria-label={
      state === "read" ? "Leído" : state === "delivered" ? "Entregado" : "Enviado"
    }>
      <svg viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* El segundo tilde aparece recién en "entregado". */}
        <path className="ticks__b" d="M9 8.5 12.5 12 19 3" />
        <path className="ticks__a" d="M1 8.5 4.5 12 11 3" />
      </svg>
    </span>
  );
}

/**
 * El perfil de la otra persona, con el mismo contenido que el modal de la
 * aplicación: verificación, rango, promedio y las reseñas recibidas.
 *
 * ACCESIBILIDAD: se cierra con Escape y con el botón, y el foco arranca en el
 * botón de cerrar. Un modal del que no se puede salir con el teclado es un
 * modal roto.
 */
function ProfileModal({ onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="profile" role="dialog" aria-modal="true" aria-label="Perfil">
      {/* El fondo también cierra al tocarlo: es lo que la gente intenta primero. */}
      <button className="profile__scrim" onClick={onClose} aria-label="Cerrar el perfil" />

      <div className="profile__card">
        <header className="profile__top">
          <h4>Perfil</h4>
          <button className="profile__close" onClick={onClose} ref={closeRef} aria-label="Cerrar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div className="profile__id">
          <span className="profile__avatar">{CHAT_PEER.initials}</span>
          <div>
            <strong>{CHAT_PEER.name}</strong>
            <span>{CHAT_PEER.since}</span>
            <div className="profile__chips">
              <span className="chip chip--ok">Identidad verificada</span>
              <span className="chip chip--tier">
                <TierShield tier="platinum" size={15} />
                {CHAT_PEER.tier}
              </span>
            </div>
          </div>
        </div>

        <div className="profile__ratings">
          <h5>Calificaciones</h5>
          <p>
            Como dueño: <Stars n={5} />
            <strong>{CHAT_PEER.ratingAsOwner.toFixed(1)}</strong>
            <em>({CHAT_PEER.reviewCount})</em>
          </p>
          <p className="profile__trips">{CHAT_PEER.trips} alquileres completados</p>
        </div>

        <div className="profile__reviews">
          <h5>Reseñas recibidas ({CHAT_PEER.reviewCount})</h5>
          {CHAT_PEER.reviews.map((r) => (
            <article key={r.author}>
              <div className="profile__review-top">
                <strong>{r.author}</strong>
                <Stars n={r.stars} />
              </div>
              <span className="profile__review-meta">
                {r.role} · {r.date}
              </span>
              <p>{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Las estrellas del promedio. Rellenas, que es como se leen de un vistazo. */
function Stars({ n }) {
  return (
    <span className="stars" aria-label={`${n} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={i < n ? "" : "is-off"}>
          <path d="m12 2.8 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.4l6.2-.9L12 2.8Z" />
        </svg>
      ))}
    </span>
  );
}
