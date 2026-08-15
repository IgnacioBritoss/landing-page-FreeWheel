// ============================================================================
//  it.js — Italiano
// ----------------------------------------------------------------------------
//  Traducción de es.js. El italiano es el idioma más largo de los cinco: las
//  mismas frases ocupan entre un 10% y un 15% más que en castellano. Por eso
//  los títulos se acortaron a propósito —"Nessun banco, nessuna fila"— para que
//  no se desarmen los renglones de la portada ni las pestañas de la demo.
// ============================================================================

export default {
  meta: {
    title: "Freewheel — Noleggia l'auto di un vicino. O guadagna con la tua.",
    description:
      "Freewheel è la piattaforma argentina di noleggio auto tra privati: identità verificata, calendario reale di disponibilità, consegna con codice, chat con note vocali e supporto in cinque lingue.",
  },

  nav: {
    links: ["Come funziona", "Piattaforma", "Fiducia", "Per proprietari", "Domande"],
    home: "Freewheel, torna all'inizio",
    sections: "Sezioni della pagina",
    toLight: "Passa alla modalità chiara",
    toDark: "Passa alla modalità scura",
    light: "Modalità chiara",
    dark: "Modalità scura",
    language: "Lingua",
    languageOf: "Vedi la pagina in",
    cta: "Apri Freewheel",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },

  hero: {
    kicker: "Noleggio auto tra privati · Argentina",
    titleLines: ["L'auto che ti serve", "è a tre isolati"],
    lead:
      "Noleggia l'auto di qualcuno del tuo quartiere per i giorni in cui ti serve davvero, oppure fai lavorare la tua nei giorni in cui resta ferma. Entrambe le parti verificano l'identità prima di iniziare, e la consegna resta registrata.",
    scrollHint: "Continua a scorrere",
    flag: "Argentina",
  },

  statement: {
    text: "Prestare l'auto a uno sconosciuto non è un problema di tecnologia. È un problema di fiducia. Tutto quello che c'è qui sotto esiste per risolverlo.",
    highlight: ["fiducia"],
  },

  journey: {
    label: "Come funziona",
    titleLines: ["Nessun banco, nessuna fila", "e nessuna cauzione"],
    steps: [
      {
        title: "Crei il tuo account in cinque minuti",
        text: "Inserisci i tuoi dati, confermi l'email e fotografi documento e patente. Vengono controllati subito, e se una foto è venuta mossa te lo diciamo sul momento, invece di farti aspettare due giorni per scoprire che va rifatta.",
        aside: "Lo fai una volta sola. Poi prenoti con due tocchi.",
      },
      {
        title: "Trovi l'auto che fa per te",
        text: "Cerchi vicino a te, indichi i giorni che ti servono e vedi solo le auto davvero libere in quelle date. Filtri per dimensione, cambio automatico o manuale, carburante e quanto vuoi spendere al giorno.",
        aside: "Non scriverai mai a qualcuno per sentirti dire che proprio quei giorni non può.",
      },
      {
        title: "Prenoti e vi mettete d'accordo",
        text: "Paghi dall'applicazione e si apre la chat con il proprietario per decidere dove e a che ora. Puoi mandare un vocale mentre guidi o la foto dell'angolo dove lo aspetti.",
        aside: "Il pagamento è già fatto prima di incontrarvi, così nessuno gira con contanti addosso.",
      },
      {
        title: "Vi consegnate l'auto con un codice",
        text: "Al momento della consegna, uno mostra il suo codice sullo schermo e l'altro lo conferma. Resta scritto chi ha consegnato, chi ha ricevuto e a che ora. Alla restituzione si ripete al contrario.",
        aside: "Se più tardi nasce un disaccordo, c'è un registro con l'orario, non la parola di uno contro quella dell'altro.",
      },
    ],
  },

  platform: {
    label: "La piattaforma",
    title: "Tutto quello che abbiamo fatto perché tu possa fidarti",
    lead:
      "Prestare la propria auto o guidare quella di un altro mette ansia. Ognuna di queste otto cose toglie di mezzo una di quelle ansie.",
    items: [
      {
        title: "Nessuno entra senza dire chi è",
        text: "Per pubblicare o per prenotare bisogna caricare documento e patente. Li controlliamo prima di attivare l'account. Chi noleggerà la tua auto ha dovuto fare esattamente quello che hai fatto tu.",
      },
      {
        title: "Le foto sono dell'auto che riceverai",
        text: "Ogni immagine pubblicata viene controllata prima di andare online. Niente foto prese da internet né di un altro modello: quello che vedi nell'annuncio è l'auto che ti consegneranno.",
      },
      {
        title: "Pubblicare ti prende un minuto",
        text: "Inserisci marca, modello e anno, e la scheda si completa da sola: bagagliaio, porte, potenza, consumi. Non devi cercare il libretto per riempire quindici campi.",
      },
      {
        title: "La tua auto si noleggia solo quando vuoi tu",
        text: "Segni i giorni in cui la userai e spariscono dal calendario. Nessuno può prenotarti il fine settimana in cui vai al mare.",
      },
      {
        title: "Si organizza tutto in chat, senza dare il tuo numero",
        text: "Messaggi, foto, file e vocali dentro l'applicazione. I vocali vengono trascritti, così li leggi in autobus senza auricolari.",
      },
      {
        title: "Se qualcosa va storto, c'è a chi dirlo",
        text: "Puoi segnalare un annuncio o una persona allegando la prova. Ogni caso viene esaminato da qualcuno del team, e gli account che non c'entrano vengono chiusi.",
      },
      {
        title: "Sai con chi hai a che fare",
        text: "Ogni persona si porta dietro le recensioni dei noleggi conclusi e un livello che si guadagna col tempo. Il platino non si compra: sono trenta noleggi con quasi cinque stelle di media.",
      },
      {
        title: "Funziona uguale se non parli spagnolo",
        text: "L'applicazione intera è in spagnolo, inglese, portoghese, italiano e cinese. Un turista si verifica, prenota e organizza la consegna nella sua lingua.",
      },
    ],
  },

  ai: {
    label: "Intelligenza artificiale",
    title: "Ti togliamo di mezzo la parte noiosa",
    lead:
      "Pubblicare un'auto altrove sono quindici minuti a riempire campi che non sai a memoria. Qui inserisci marca, modello e anno, e il resto viene da sé. Lo stesso con i documenti: li controlliamo subito invece di farti aspettare due giorni.",
    barTitle: "Freewheel · assistente",
    barState: "in corso",
    input: "Ingresso",
    output: "Risposta",
    typing: "sta scrivendo",
    uses: [
      {
        label: "Completare la scheda tecnica",
        prompt: "Toyota Corolla 2021",
        output: [
          "Bagagliaio 371 litri",
          "Porte 4",
          "Potenza 122 CV",
          "Consumo misto 6.8 l/100km",
          "Trazione anteriore",
        ],
        note: "Inserisci marca, modello e anno. Il resto si completa da solo, e quello che non torna lo correggi tu.",
      },
      {
        label: "Controllare le foto dell'auto",
        prompt: "4 immagini caricate",
        output: [
          "Immagine 1 · veicolo rilevato",
          "Immagine 2 · veicolo rilevato",
          "Immagine 3 · nessun veicolo riconosciuto",
          "Immagine 4 · veicolo rilevato",
        ],
        note: "Ogni foto viene controllata prima di essere pubblicata. Quello che vedi nell'annuncio è l'auto che ti consegneranno.",
      },
      {
        label: "Verificare il documento",
        prompt: "Fronte del documento",
        output: [
          "Tipo di documento corretto",
          "Nome leggibile",
          "Numero leggibile",
          "Entro la data di scadenza",
        ],
        note: "Controlliamo documento e patente sul momento e ti diciamo subito se la foto va rifatta.",
      },
      {
        label: "Rispondere alle domande",
        prompt: "Come annullo una prenotazione?",
        output: [
          "Vai su Le mie prenotazioni",
          "Apri la prenotazione da annullare",
          "Tocca Annulla e scegli il motivo",
          "Il proprietario riceve l'avviso subito",
        ],
        note: "Un assistente presente in ogni schermata, che conosce la tua prenotazione, a qualsiasi ora.",
      },
    ],
  },

  trust: {
    label: "Fiducia",
    title: "Dall'altra parte c'è una persona con nome, cognome e storico",
    lead:
      "Non stai lasciando l'auto a un utente anonimo. È una persona che ha mostrato il documento, la patente e tutto quello che ha fatto prima sulla piattaforma.",
    kycTitle: "Verifica dell'identità",
    kycNote: "Quattro passaggi che ogni persona completa prima di poter usare Freewheel.",
    kyc: [
      ["Conferma la sua email", "Un codice di sei cifre. Senza quello non entra."],
      ["Mostra il documento", "Fronte e retro. Controlliamo che sia il documento e che sia valido."],
      ["Mostra la patente", "Senza patente in regola non guida la tua auto. Punto."],
      ["Qualcuno lo controlla", "Se una foto non si legge, la richiediamo prima di attivare l'account."],
    ],
    kycFoot:
      "Il tuo indirizzo non viene pubblicato. Chi guarda la tua auto vede il quartiere; l'angolo esatto lo sa solo quando la prenotazione è pagata.",
    tiersTitle: "Livelli da recensioni reali",
    tiersNote: "Il livello non si compra e non si accelera:",
    tiersNoteEm: "si guadagna noleggiando bene",
    tiers: [
      { name: "Bronzo", req: "il primo noleggio concluso" },
      { name: "Argento", req: "5 noleggi, 4 stelle o più" },
      { name: "Oro", req: "15 noleggi, media 4.5" },
      { name: "Platino", req: "30 noleggi, quasi cinque stelle" },
    ],
    tiersFoot:
      "Se una persona è appena arrivata, te lo diciamo: non vedrai cinque stelle su un account creato ieri.",
  },

  showcase: {
    label: "Com'è",
    title: "Guarda com'è fatta dentro",
    lead: "Non sono bozzetti: è l'applicazione che gira. Muovi la mappa, ascolta il vocale, apri il profilo.",
    blocks: [
      {
        title: "Ti verifichi in un minuto, non in tre giorni",
        text: "Fotografi il documento e ti diciamo lì per lì se va bene. Niente email da mandare aspettando che qualcuno la guardi lunedì. E se è venuta mossa, la rifai sul momento.",
      },
      {
        title: "Trovane una dietro l'angolo di casa",
        text: "Ogni punto è un'auto disponibile. Vedi il quartiere in cui si trova, non il portone del proprietario: l'indirizzo esatto compare quando la prenotazione è fatta. È la stessa privacy che vorrai tu quando pubblicherai la tua.",
      },
      {
        title: "Organizzate la consegna senza dare il telefono",
        text: "Tutto avviene dentro l'applicazione: messaggi, foto dello stato dell'auto e vocali trascritti per leggerli in autobus. E toccando il nome vedi chi è l'altra persona prima di incontrarla.",
      },
    ],

    scan: {
      country: "REPUBBLICA ARGENTINA",
      kind: "DOC",
      fields: ["Cognome e nome", "Documento", "Scadenza"],
      checks: [
        "Tipo di documento corretto",
        "Nome leggibile",
        "Numero leggibile",
        "Entro la data di scadenza",
      ],
    },

    map: {
      approx: "(zona appross.)",
      perDay: "/giorno",
    },

    chat: {
      messages: [
        { body: "Ciao! Sì, è disponibile in quei giorni." },
        { body: "Ottimo. Dove la ritiro?" },
        { transcript: "All'angolo tra Godoy Cruz e Santa Fe, a un isolato dalla metro. Ti aspetto alle dieci." },
        { caption: "Stato attuale dell'auto" },
        { body: "Perfetto, ci vediamo lì. Grazie!" },
      ],
      placeholder: "Scrivi un messaggio...",
      send: "Invia",
      typing: "sta scrivendo",
      transcript: "Trascrizione",
      play: "Riproduci la nota vocale",
      pause: "Metti in pausa la nota vocale",
      sent: "Inviato",
      delivered: "Consegnato",
      read: "Letto",
    },

    profile: {
      open: "Profilo",
      close: "Chiudi",
      closeScrim: "Chiudi il profilo",
      since: "Su Freewheel da marzo 2026",
      verified: "Identità verificata",
      ratings: "Valutazioni",
      asOwner: "Come proprietario:",
      trips: "noleggi completati",
      reviewsTitle: "Recensioni ricevute",
      stars: "su 5 stelle",
      reviews: [
        {
          role: "Come proprietaria dell'auto",
          date: "12 marzo 2026",
          body: "Puntuale, attento e mi ha riportato l'auto con il pieno. Magari noleggiassero tutti così.",
        },
        {
          role: "Come proprietario dell'auto",
          date: "28 febbraio 2026",
          body: "Ha avvisato di ogni cosa in chat e ha organizzato la consegna senza un intoppo. Un lusso.",
        },
        {
          role: "Come proprietaria dell'auto",
          date: "9 febbraio 2026",
          body: "Seconda volta che gliela noleggio. Riporta l'auto impeccabile e sempre in orario.",
        },
      ],
    },
  },

  preview: {
    label: "L'applicazione",
    title: "Quattro schermate, un solo percorso",
    screens: [
      { label: "Cerca", title: "Dove vai oggi?" },
      { label: "Scheda auto", title: "Toyota Corolla 2021" },
      { label: "Prenotazione", title: "Scegli le date" },
      { label: "Consegna", title: "Ritiro del veicolo" },
    ],
    tabs: ["Home", "Cerca", "Prenotazioni", "Profilo"],
    search: {
      rows: [
        ["Dove", "Palermo, Buenos Aires"],
        ["Ritiro", "18 mar"],
        ["Riconsegna", "21 mar"],
      ],
      button: "Cerca auto",
      results: [
        ["Toyota Corolla 2021", "$8.500", "Palermo · 4.8"],
        ["Volkswagen T-Cross 2022", "$12.000", "Belgrano · 4.6"],
      ],
    },
    detail: {
      specs: [
        ["Bagagliaio", "371 L"],
        ["Porte", "4"],
        ["Potenza", "122 CV"],
        ["Consumo", "6.8 L"],
      ],
      owner: "Roberto O.",
      ownerMeta: "Livello oro · identità verificata",
      note: "L'indirizzo esatto viene mostrato quando la prenotazione è confermata.",
    },
    booking: {
      picked: "Scelti",
      taken: "Occupati",
      total: "$8.500 × 3 giorni",
      totalValue: "$25.500",
      button: "Conferma prenotazione",
    },
    qr: {
      alt: "Codice QR che apre",
      steps: ["Pagamento confermato", "Auto pronta per il ritiro", "Ritiro confermato"],
    },
  },

  earnings: {
    label: "Per proprietari",
    title: "La tua auto perde soldi ogni giorno in cui non la usi",
    lead:
      "Assicurazione, bollo e box costano uguale che stia in strada o nel tuo garage. Pubblicarla è gratis, scegli tu in quali giorni è disponibile, e chi la noleggia ha mostrato documento e patente prima di poter prenotare.",
    points: [
      ["Non resti mai senza auto", "Blocchi i giorni in cui ti serve e nessuno può prenotarli."],
      ["Sai chi la guida", "Vedi il nome, le recensioni e il livello prima di accettare."],
      ["Incassi senza rincorrere nessuno", "Il pagamento arriva con la prenotazione, prima di dare le chiavi."],
    ],
    calcTitle: "Quanto potresti guadagnare?",
    calcSub: "Muovilo e guarda il numero.",
    type: "Tipo di auto",
    categories: ["Utilitaria", "Berlina", "SUV", "Premium"],
    daysLabel: "Giorni noleggiata al mese",
    result: "Ti resta al mese",
    day: "giorno",
    days: "giorni",
    fee: "Commissione Freewheel",
    note: "Stima indicativa. Il prezzo finale lo decidi tu quando pubblichi.",
  },

  languages: {
    label: "Lingue",
    title: "Un turista può noleggiare un'auto qui",
    text:
      "L'applicazione è tradotta da cima a fondo in cinque lingue: ogni schermata, ogni avviso e ogni messaggio di errore. Chi arriva dall'estero si verifica, prenota e organizza la consegna senza capire una parola di spagnolo.",
    list: "Lingue",
    demoLabel: "Schermata iniziale",
  },

  faq: {
    label: "Domande",
    title: "Quello che di sicuro ti stai chiedendo",
    lead:
      "E se ti resta un dubbio, dentro l'applicazione c'è un assistente che risponde a qualsiasi ora.",
    items: [
      {
        q: "Cosa mi serve per noleggiare un'auto?",
        a: "Avere più di 18 anni, la patente in corso di validità e un metodo di pagamento. Carichi patente e documento una volta sola, quando crei l'account; da lì in poi prenoti con due tocchi.",
      },
      {
        q: "Come faccio a sapere che chi mi noleggia è affidabile?",
        a: "Perché ha fatto lo stesso percorso tuo: senza documento e patente approvati non si può pubblicare un'auto né prenotarne una. In più vedrai le recensioni dei noleggi conclusi e il livello, che si guadagna col tempo e non si può comprare.",
      },
      {
        q: "E se l'auto torna con un'ammaccatura?",
        a: "Consegna e restituzione restano registrate con un codice per parte, con data e ora. Sul momento si possono scattare foto dalla chat, e ognuno dei due può aprire una segnalazione allegando quella prova. Non resta la parola di uno contro quella dell'altro.",
      },
      {
        q: "Posso usare la mia auto quando mi serve?",
        a: "È tua, quindi sì. Segni i giorni in cui la userai e spariscono dal calendario: nessuno può prenotarla in quei giorni. La pubblichi quando vuoi e la togli quando vuoi.",
      },
      {
        q: "Quanto si può guadagnare con un'auto ferma?",
        a: "Dipende dal modello, dallo stato e da quanti giorni al mese la lasci disponibile. Più in alto in questa pagina c'è un calcolatore per farti un'idea sul tuo caso. Pubblicare non costa nulla: Freewheel trattiene una commissione solo quando qualcuno noleggia da te.",
      },
      {
        q: "Cosa succede se ho un problema durante il noleggio?",
        a: "Hai la chat con l'altra persona e un assistente dentro l'applicazione che risponde a qualsiasi ora. E se il problema è serio, la segnalazione arriva a qualcuno del team che la esamina.",
      },
    ],
  },

  close: {
    titleLines: ["C'è un'auto libera", "a tre isolati da casa tua"],
    cta: "Apri Freewheel",
    note:
      "Creare l'account è gratis e non chiede la carta. Verifichi la tua identità una volta sola e puoi già prenotare, oppure pubblichi la tua e inizi a incassare nei giorni in cui non la usi.",
    tagline: "Noleggio auto tra privati. Fatto in Argentina.",
    footerNav: "Link del piè di pagina",
    columns: [
      {
        title: "Come funziona",
        links: ["Il percorso completo", "La piattaforma", "L'applicazione dentro"],
      },
      {
        title: "Fiducia",
        links: ["Verifica dell'identità", "Recensioni e livelli", "Domande frequenti"],
      },
      {
        title: "Per proprietari",
        links: ["Quanto puoi guadagnare", "Come si pubblica", "Lingue disponibili"],
      },
    ],
    bottom: "Noleggio auto tra privati · Argentina",
  },
};
