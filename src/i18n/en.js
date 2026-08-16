// ============================================================================
//  en.js — Inglés
// ----------------------------------------------------------------------------
//  Traducción de es.js, que es el diccionario de referencia. Si acá falta una
//  clave, se usa la castellana: la página nunca queda con un hueco.
//
//  NO ES UNA TRADUCCIÓN LITERAL. El castellano de la página es rioplatense y
//  bastante hablado ("no te quedás sin auto"), así que cada frase se reescribió
//  para que suene igual de natural en inglés en vez de calcarse palabra por
//  palabra. Los precios quedan en pesos porque los autos están en Argentina.
// ============================================================================

export default {
  meta: {
    title: "Freewheel — Rent your neighbour's car. Or earn with yours.",
    description:
      "Freewheel is the Argentine peer-to-peer car rental platform: verified identity, real availability calendars, code-based handover, in-app chat with voice notes and support in five languages.",
  },

  nav: {
    links: ["How it works", "Platform", "Trust", "For owners", "Questions"],
    home: "Freewheel, back to top",
    sections: "Page sections",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    light: "Light mode",
    dark: "Dark mode",
    language: "Language",
    languageOf: "View this page in",
    cta: "Open Freewheel",
    openMenu: "Open the menu",
    closeMenu: "Close the menu",
  },

  hero: {
    kicker: "Peer-to-peer car rental · Argentina",
    titleLines: ["The car you need", "is three blocks away"],
    lead:
      "Rent a car from someone in your neighbourhood for the days you actually need it, or put yours to work on the days it sits still. Both sides verify their identity before anything starts, and every handover is on the record.",
    scrollHint: "Keep scrolling",
    flag: "Argentina",
  },

  statement: {
    text: "Lending your car to a stranger is not a technology problem. It is a trust problem. Everything below this line exists to solve it.",
    highlight: ["trust"],
  },

  journey: {
    label: "How it works",
    titleLines: ["No counter, no queue", "and no security deposit"],
    steps: [
      {
        title: "Create your account in five minutes",
        text: "Fill in your details, confirm your email and photograph your ID and driving licence. They are checked on the spot, and if a photo came out blurry you hear about it right away instead of waiting two days to find out you have to redo it.",
        aside: "You do it once. After that, booking takes two taps.",
      },
      {
        title: "Find the car that suits you",
        text: "Search near you, set the days you need it and see only the cars that are actually free on those dates. Filter by size, automatic or manual, fuel, and how much you want to spend per day.",
        aside: "You will never message someone only to be told those exact days don't work.",
      },
      {
        title: "Book it and arrange the handover",
        text: "You pay inside the app and a chat opens with the owner to agree where and when. Send a voice note while you're driving, or a photo of the corner where you'll be waiting.",
        aside: "Payment is settled before you meet, so nobody has to carry cash around.",
      },
      {
        title: "Hand the car over with a code",
        text: "At handover, one person shows their code on screen and the other confirms it. Who handed over, who received and at what time all get recorded. Returning the car repeats it in reverse.",
        aside: "If a disagreement comes up later, there's a timestamped record instead of one person's word against the other's.",
      },
    ],
  },

  platform: {
    label: "The platform",
    title: "Everything we built so you can trust it",
    lead:
      "Lending your car — or driving someone else's — makes anyone nervous. Each of these eight things takes one of those nerves off the table.",
    items: [
      {
        title: "Nobody gets in without saying who they are",
        text: "To list a car or to book one you have to upload your ID and driving licence. We check them before the account is enabled. The person renting your car went through exactly what you went through.",
      },
      {
        title: "The photos are of the car you'll actually get",
        text: "Every image is reviewed before it goes live. No pictures pulled off the internet, no different model: what you see in the listing is the car that will be handed to you.",
      },
      {
        title: "Listing a car takes a minute",
        text: "Enter the make, model and year and the spec sheet fills itself in: boot space, doors, power, fuel economy. You don't have to dig out the manual to fill in fifteen fields.",
      },
      {
        title: "Your car is only rented when you want it to be",
        text: "Mark the days you'll be using it and they disappear from the calendar. Nobody can book the weekend you're driving to the coast.",
      },
      {
        title: "It's all arranged by chat, without giving out your number",
        text: "Messages, photos, files and voice notes inside the app. Voice notes are transcribed, so you can read them on the bus without headphones.",
      },
      {
        title: "If something goes wrong, there's someone to tell",
        text: "You can report a listing or a person and attach the evidence. Every case is reviewed by someone on the team, and accounts that don't belong here get shut down.",
      },
      {
        title: "You know who you're dealing with",
        text: "Everyone carries the reviews from their completed rentals and a rank earned over time. Platinum can't be bought: it's thirty rentals at close to five stars.",
      },
      {
        title: "It works the same if you don't speak Spanish",
        text: "The whole app is available in Spanish, English, Portuguese, Italian and Chinese. A visitor can verify, book and arrange the handover in their own language.",
      },
    ],
  },

  ai: {
    label: "Artificial intelligence",
    title: "We take the tedious part off your hands",
    lead:
      "Listing a car anywhere else means fifteen minutes filling in fields you don't know by heart. Here you enter make, model and year, and the rest fills itself in. Same with documents: we check them on the spot instead of making you wait two days.",
    barTitle: "Freewheel · assistant",
    barState: "running",
    input: "Input",
    output: "Response",
    typing: "typing",
    uses: [
      {
        label: "Fill in the spec sheet",
        prompt: "Toyota Corolla 2021",
        output: [
          "Boot 371 litres",
          "Doors 4",
          "Power 122 hp",
          "Combined economy 6.8 l/100km",
          "Front-wheel drive",
        ],
        note: "You enter make, model and year. The rest fills itself in, and anything that doesn't match you correct yourself.",
      },
      {
        label: "Review the car photos",
        prompt: "4 images uploaded",
        output: [
          "Image 1 · vehicle detected",
          "Image 2 · vehicle detected",
          "Image 3 · no vehicle recognised",
          "Image 4 · vehicle detected",
        ],
        note: "Every photo is checked before it goes live. What you see in the listing is the car you'll be handed.",
      },
      {
        label: "Verify the document",
        prompt: "Front of the ID card",
        output: [
          "Document type correct",
          "Name legible",
          "Number legible",
          "Within the expiry date",
        ],
        note: "We check the ID and the licence right away and tell you on the spot if the photo has to be retaken.",
      },
      {
        label: "Answer questions",
        prompt: "How do I cancel a booking?",
        output: [
          "Go to My bookings",
          "Open the booking you want to cancel",
          "Tap Cancel and pick a reason",
          "The owner is notified instantly",
        ],
        note: "An assistant on every screen that knows your booking, at any hour.",
      },
    ],
  },

  trust: {
    label: "Trust",
    title: "On the other side there's a person with a name and a track record",
    lead:
      "You're not leaving your car with an anonymous username. It's someone who showed their ID, their licence and everything they've done on the platform before.",
    kycTitle: "Identity verification",
    kycNote: "Four steps everyone completes before they can use Freewheel.",
    kyc: [
      ["They confirm their email", "A six-digit code. Without it, they don't get in."],
      ["They show their ID", "Front and back. We check it's the real document and that it's valid."],
      ["They show their licence", "No valid licence, no driving your car. Full stop."],
      ["A person reviews it", "If a photo can't be read, we ask for it again before enabling the account."],
    ],
    kycFoot:
      "Your address is never published. Anyone looking at your car sees the neighbourhood; they only get the exact corner once the booking is paid.",
    tiersTitle: "Ranks from real reviews",
    tiersNote: "Rank can't be bought or rushed:",
    tiersNoteEm: "it's earned by renting well",
    tiers: [
      { name: "Bronze", req: "their first completed rental" },
      { name: "Silver", req: "5 rentals, 4 stars or more" },
      { name: "Gold", req: "15 rentals, 4.5 average" },
      { name: "Platinum", req: "30 rentals, close to five stars" },
    ],
    tiersFoot:
      "If someone is just starting out, we say so: you won't see five stars on an account created yesterday.",
  },

  showcase: {
    label: "How it looks",
    title: "See what it looks like inside",
    lead: "These aren't mockups: it's the app running. Drag the map, play the voice note, open the profile.",
    blocks: [
      {
        title: "You're verified in a minute, not in three days",
        text: "Photograph your ID and we tell you right there whether it's fine. No sending an email and waiting for someone to look at it on Monday. And if it came out blurry, you retake it on the spot.",
      },
      {
        title: "Find one around the corner from your house",
        text: "Each dot is an available car. You see the neighbourhood it's in, not the owner's front door: the exact address appears once the booking is made. It's the same privacy you'll want when you list yours.",
      },
      {
        title: "Arrange the handover without giving out your number",
        text: "Everything happens inside the app: messages, photos of the car's condition, and voice notes transcribed so you can read them on the bus. And tapping the name shows you who the other person is before you meet them.",
      },
    ],

    scan: {
      country: "REPUBLIC OF ARGENTINA",
      kind: "ID",
      fields: ["Surname and name", "Document", "Expiry"],
      checks: [
        "Document type correct",
        "Name legible",
        "Number legible",
        "Within the expiry date",
      ],
    },

    map: {
      approx: "(approx. area)",
      perDay: "/day",
    },

    chat: {
      messages: [
        { body: "Hi! Yes, it's available those days." },
        { body: "Great. Where do I pick it up?" },
        { transcript: "Corner of Godoy Cruz and Santa Fe, a block from the subway. See you at ten." },
        { caption: "Current condition of the car" },
        { body: "Perfect, see you there. Thanks!" },
      ],
      placeholder: "Write a message...",
      send: "Send",
      typing: "typing",
      transcript: "Transcript",
      play: "Play the voice note",
      pause: "Pause the voice note",
      sent: "Sent",
      delivered: "Delivered",
      read: "Read",
    },

    profile: {
      open: "Profile",
      close: "Close",
      closeScrim: "Close the profile",
      since: "On Freewheel since March 2026",
      verified: "Identity verified",
      ratings: "Ratings",
      asOwner: "As an owner:",
      trips: "completed rentals",
      reviewsTitle: "Reviews received",
      stars: "out of 5 stars",
      reviews: [
        {
          role: "As the car owner",
          date: "12 March 2026",
          body: "On time, careful, and he brought the car back with a full tank. I wish everyone rented like this.",
        },
        {
          role: "As the car owner",
          date: "28 February 2026",
          body: "Kept me posted on everything by chat and sorted the handover without a single hitch. A pleasure.",
        },
        {
          role: "As the car owner",
          date: "9 February 2026",
          body: "Second time renting to him. Returns the car spotless and always on time.",
        },
      ],
    },
  },

  preview: {
    label: "The app",
    title: "Four screens, one single journey",
    screens: [
      { label: "Search", title: "Where are you headed?" },
      { label: "Car details", title: "Toyota Corolla 2021" },
      { label: "Booking", title: "Pick your dates" },
      { label: "Handover", title: "Vehicle pick-up" },
    ],
    tabs: ["Home", "Search", "Bookings", "Profile"],
    search: {
      rows: [
        ["Where", "Palermo, Buenos Aires"],
        ["Pick-up", "18 Mar"],
        ["Return", "21 Mar"],
      ],
      button: "Search cars",
      results: [
        ["Toyota Corolla 2021", "$8,500", "Palermo · 4.8"],
        ["Volkswagen T-Cross 2022", "$12,000", "Belgrano · 4.6"],
      ],
    },
    detail: {
      specs: [
        ["Boot", "371 L"],
        ["Doors", "4"],
        ["Power", "122 hp"],
        ["Economy", "6.8 L"],
      ],
      owner: "Roberto O.",
      ownerMeta: "Gold rank · identity verified",
      note: "The exact address is shown once the booking is confirmed.",
    },
    booking: {
      picked: "Selected",
      taken: "Booked",
      total: "$8,500 × 3 days",
      totalValue: "$25,500",
      button: "Confirm booking",
    },
    qr: {
      alt: "QR code that opens",
      steps: ["Payment confirmed", "Car ready for pick-up", "Pick-up confirmed"],
    },
  },

  earnings: {
    label: "For owners",
    title: "Your car loses money every day you don't drive it",
    lead:
      "Insurance, tax and the garage cost the same whether it's on the road or in your driveway. Listing it is free, you choose which days it's available, and whoever rents it showed their ID and licence before they could book.",
    points: [
      ["You're never left without a car", "Block the days you need it and nobody can book them."],
      ["You know who's driving it", "You see their name, their reviews and their rank before you accept."],
      ["You get paid without chasing anyone", "Payment lands with the booking, before you hand over the keys."],
    ],
    calcTitle: "How much could you earn?",
    calcSub: "Drag it and watch the number.",
    type: "Type of car",
    categories: ["Hatchback", "Saloon", "SUV", "Premium"],
    daysLabel: "Days rented per month",
    result: "You keep per month",
    day: "day",
    days: "days",
    fee: "Freewheel fee",
    note: "Rough estimate. You set the final price when you list the car.",
  },

  languages: {
    label: "Languages",
    title: "A visitor can rent a car here",
    text:
      "The app is translated end to end into five languages: every screen, every notice and every error message. Someone arriving from abroad can verify, book and arrange the handover without understanding a word of Spanish.",
    list: "Languages",
    demoLabel: "Home screen",
  },

  faq: {
    label: "Questions",
    title: "What you're probably wondering",
    lead:
      "And if a doubt is left over, there's an assistant inside the app that answers at any hour.",
    items: [
      {
        q: "What do I need to rent?",
        a: "To be over 18, to hold a valid driving licence and to have a payment method. You upload your licence and ID once, when you create the account; from then on booking takes two taps.",
      },
      {
        q: "How do I know I can trust them?",
        a: "Because they went through the same as you: without an approved ID and licence you can't list a car or book one. On top of that you'll see their reviews from completed rentals and their rank, which is earned over time and can't be bought.",
      },
      {
        q: "What if there is a dent?",
        a: "Handover and return are both recorded with a code from each side, with date and time. Photos can be taken through the chat at that moment, and either party can open a report attaching that evidence. It doesn't come down to one person's word against the other's.",
      },
      {
        q: "Can I use it whenever I want?",
        a: "It's yours, so yes. Mark the days you'll be using it and they disappear from the calendar: nobody can book it on those days. You list it when you want and take it down when you want.",
      },
      {
        q: "How much can you make?",
        a: "It depends on the model, its condition and how many days a month you leave it available. Further up this page there's a calculator to get a sense of your own case. Listing costs nothing: Freewheel only charges a fee when someone rents from you.",
      },
      {
        q: "What if something goes wrong?",
        a: "You have the chat with the other person and an assistant inside the app that answers at any hour. And if the problem is serious, the report reaches someone on the team who reviews it.",
      },
    ],
  },

  close: {
    titleLines: ["There's a car free", "three blocks from your door"],
    cta: "Open Freewheel",
    note:
      "Creating an account is free and asks for no card. Verify your identity once and you can book — or list your own car and start earning on the days you don't use it.",
    tagline: "Peer-to-peer car rental. Made in Argentina.",
    footerNav: "Footer links",
    columns: [
      {
        title: "How it works",
        links: ["The full journey", "The platform", "Inside the app"],
      },
      {
        title: "Trust",
        links: ["Identity verification", "Reviews and ranks", "Frequently asked questions"],
      },
      {
        title: "For owners",
        links: ["How much you could earn", "How to list a car", "Available languages"],
      },
    ],
    bottom: "Peer-to-peer car rental · Argentina",
  },
};
