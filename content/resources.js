// All resources on the site. One entry per resource; texts in Dutch (nl) and English (en).
// This file is meant to be (re)generated automatically; the site shows a disclaimer saying so.
//
// Fields
//   name     name of the resource
//   url      link to the provider (the source of truth)
//   cat      start | speaking | courses | exam | literacy | work | children
//   levels   any of A0 A1 A2 B1 B2 (A0 = no Dutch at all)
//   cost     free | paid
//   formats  any of app website video class online conversation book exam
//   langs    languages the explanations are in (nl en ar uk tr ti ...)
//   where    national | online | amsterdam
//   address  optional street address (local places only)
//   trust    official | library | university | quality | ngo | community | app
//   sum      one-line summary, max ~25 words

export const generated = "2026-11-21";

export const resources = [
  {
    name: "Oefenen.nl",
    url: "https://oefenen.nl/",
    cat: "start", levels: ["A0", "A1", "A2"], cost: "free", formats: ["website", "video"],
    langs: ["nl"], where: "online", trust: "ngo",
    sum: {
      nl: "Gratis oefenprogramma's voor Nederlands, lezen en schrijven, met veel beeld en geluid. Goed om mee te beginnen.",
      en: "Free practice programmes for Dutch, reading and writing, with lots of pictures and audio. A good place to start.",
    },
  },
  {
    name: "Duolingo",
    url: "https://www.duolingo.com/",
    cat: "start", levels: ["A0", "A1", "A2"], cost: "free", formats: ["app"],
    langs: ["en", "ar", "tr", "uk"], where: "online", trust: "app",
    sum: {
      nl: "Gratis app met korte dagelijkse lessen Nederlands. Uitleg in veel talen; een betaalde versie is optioneel.",
      en: "Free app with short daily Dutch lessons. Explanations in many languages; a paid version is optional.",
    },
  },
  {
    name: "Learn Dutch (Bart de Pau)",
    url: "https://www.learndutch.org/",
    cat: "start", levels: ["A0", "A1", "A2", "B1"], cost: "free", formats: ["video", "website"],
    langs: ["en"], where: "online", trust: "community",
    sum: {
      nl: "Honderden gratis video's met uitleg over Nederlandse grammatica en woorden, in het Engels.",
      en: "Hundreds of free videos explaining Dutch grammar and vocabulary, in English.",
    },
  },
  {
    name: "DutchGrammar.com",
    url: "https://www.dutchgrammar.com/",
    cat: "start", levels: ["A1", "A2", "B1", "B2"], cost: "free", formats: ["website"],
    langs: ["en"], where: "online", trust: "community",
    sum: {
      nl: "Uitgebreide gratis website over Nederlandse grammatica, met oefeningen. Uitleg in het Engels.",
      en: "Extensive free website on Dutch grammar, with exercises. Explanations in English.",
    },
  },
  {
    name: "NT2 TaalMenu",
    url: "https://www.nt2taalmenu.nl/",
    cat: "start", levels: ["A0", "A1", "A2", "B1"], cost: "free", formats: ["website"],
    langs: ["nl"], where: "online", trust: "community",
    sum: {
      nl: "Gratis oefeningen voor woorden, grammatica, lezen en luisteren, geordend per niveau.",
      en: "Free exercises for vocabulary, grammar, reading and listening, sorted by level.",
    },
  },
  {
    name: "Bibliotheek: Taalhuis en taalcafé",
    url: "https://www.bibliotheek.nl/",
    cat: "speaking", levels: ["A0", "A1", "A2", "B1"], cost: "free", formats: ["class", "conversation"],
    langs: ["nl"], where: "national", trust: "library",
    sum: {
      nl: "Bijna elke bibliotheek heeft een Taalhuis of taalcafé: gratis hulp en samen Nederlands praten. Vraag het bij de bibliotheek in de buurt.",
      en: "Almost every public library has a Taalhuis or language café: free help and Dutch conversation. Ask at your local library.",
    },
  },
  {
    name: "OBA, Openbare Bibliotheek Amsterdam",
    url: "https://www.oba.nl/",
    cat: "speaking", levels: ["A0", "A1", "A2", "B1"], cost: "free", formats: ["class", "conversation"],
    langs: ["nl"], where: "amsterdam", address: "Oosterdokskade 143, Amsterdam", trust: "library",
    sum: {
      nl: "De Amsterdamse bibliotheek biedt taalcafés, een Taalhuis en gratis hulp bij Nederlands in vestigingen door de hele stad.",
      en: "Amsterdam's public library runs language cafés, a Taalhuis and free help with Dutch in branches across the city.",
    },
  },
  {
    name: "Het Begint met Taal",
    url: "https://www.hetbegintmettaal.nl/",
    cat: "speaking", levels: ["A0", "A1", "A2", "B1"], cost: "free", formats: ["conversation"],
    langs: ["nl"], where: "national", trust: "ngo",
    sum: {
      nl: "Landelijk netwerk van vrijwilligers: een taalmaatje of taalgroep om Nederlands te oefenen in het dagelijks leven.",
      en: "National network of volunteers: a language buddy or group to practise Dutch in everyday life.",
    },
  },
  {
    name: "Inburgeren.nl (DUO)",
    url: "https://www.inburgeren.nl/",
    cat: "exam", levels: ["A1", "A2", "B1"], cost: "free", formats: ["website", "exam"],
    langs: ["nl", "en"], where: "national", trust: "official",
    sum: {
      nl: "Officiële website over inburgering: wat u moet doen, welke examens er zijn en gratis oefenexamens.",
      en: "Official civic integration website: what you need to do, which exams there are, and free practice exams.",
    },
  },
  {
    name: "Staatsexamens NT2",
    url: "https://www.staatsexamensnt2.nl/",
    cat: "exam", levels: ["B1", "B2"], cost: "paid", formats: ["exam", "website"],
    langs: ["nl"], where: "national", trust: "official",
    sum: {
      nl: "Officiële staatsexamens Nederlands op B1 of B2, vaak nodig voor studie of werk. Met oefenexamens.",
      en: "Official state exams in Dutch at B1 or B2, often needed for study or work. With practice exams.",
    },
  },
  {
    name: "Gemeente Amsterdam: inburgeren",
    url: "https://www.amsterdam.nl/",
    cat: "exam", levels: ["A0", "A1", "A2", "B1"], cost: "free", formats: ["class"],
    langs: ["nl", "en"], where: "amsterdam", trust: "official",
    sum: {
      nl: "Moet u inburgeren en woont u in Amsterdam? De gemeente maakt met u een persoonlijk plan. Zoek op de site naar 'inburgeren'.",
      en: "Must you complete civic integration and live in Amsterdam? The municipality makes a personal plan with you. Search the site for 'inburgeren'.",
    },
  },
  {
    name: "Blik op Werk: scholen met Keurmerk Inburgeren",
    url: "https://www.blikopwerk.nl/",
    cat: "courses", levels: ["A0", "A1", "A2", "B1"], cost: "paid", formats: ["class", "online"],
    langs: ["nl"], where: "national", trust: "quality",
    sum: {
      nl: "Zoek een inburgeringsschool met het Keurmerk Inburgeren. Alleen bij deze scholen kunt u lenen bij DUO.",
      en: "Find a civic integration school with the Keurmerk Inburgeren quality mark. Only these schools accept a DUO loan.",
    },
  },
  {
    name: "UvA Talen",
    url: "https://www.uvatalen.nl/",
    cat: "courses", levels: ["A0", "A1", "A2", "B1", "B2"], cost: "paid", formats: ["class", "online"],
    langs: ["en", "nl"], where: "amsterdam", trust: "university",
    sum: {
      nl: "Taalcentrum van de Universiteit van Amsterdam: betaalde cursussen Nederlands van beginner tot gevorderd.",
      en: "Language centre of the University of Amsterdam: paid Dutch courses from beginner to advanced.",
    },
  },
  {
    name: "VU Amsterdam: Nederlands leren voor inburgering",
    url: "https://vu.nl/nl/onderwijs/meer-over/nederlands-leren-voor-inburgering",
    cat: "courses", levels: ["A1", "A2", "B1"], cost: "paid", formats: ["class"],
    langs: ["nl"], where: "amsterdam", trust: "university",
    sum: {
      nl: "Cursussen Nederlands voor inburgering bij de Vrije Universiteit in Amsterdam.",
      en: "Dutch courses for civic integration at the Vrije Universiteit in Amsterdam.",
    },
  },
  {
    name: "Stichting Lezen & Schrijven",
    url: "https://www.lezenenschrijven.nl/",
    cat: "literacy", levels: ["A0", "A1"], cost: "free", formats: ["website", "class"],
    langs: ["nl"], where: "national", trust: "ngo",
    sum: {
      nl: "Hulp voor wie moeite heeft met lezen en schrijven, ook als u het Latijnse alfabet nog leert.",
      en: "Help for people who find reading and writing hard, including if you are still learning the Latin alphabet.",
    },
  },
  {
    name: "Makkelijk Lezen Plein",
    url: "https://www.makkelijklezenplein.nl/",
    cat: "literacy", levels: ["A1", "A2", "B1"], cost: "free", formats: ["book", "website"],
    langs: ["nl"], where: "national", trust: "library",
    sum: {
      nl: "Boeken in eenvoudig Nederlands, gekozen door de bibliotheek. Te leen bij de bibliotheek.",
      en: "Books in easy Dutch, chosen by public libraries. Borrow them at the library.",
    },
  },
  {
    name: "BoekStart",
    url: "https://www.boekstart.nl/",
    cat: "children", levels: ["A0", "A1", "A2"], cost: "free", formats: ["book"],
    langs: ["nl"], where: "national", trust: "library",
    sum: {
      nl: "Samen voorlezen met baby's en peuters, met een gratis koffertje boeken van de bibliotheek.",
      en: "Reading together with babies and toddlers, with a free case of books from the library.",
    },
  },
  {
    name: "Schooltv",
    url: "https://schooltv.nl/",
    cat: "children", levels: ["A1", "A2", "B1"], cost: "free", formats: ["video"],
    langs: ["nl"], where: "online", trust: "official",
    sum: {
      nl: "Gratis korte educatieve video's van de publieke omroep. Goed om samen met uw kinderen Nederlands te leren.",
      en: "Free short educational videos from Dutch public broadcasting. Good for learning Dutch together with your children.",
    },
  },
];

// "Search now" buttons: things that change every week (dates, times, places),
// so the site opens a live search instead of keeping a list.
export const searchNow = [
  { cat: "speaking", q: "taalcafé Amsterdam", t: { nl: "Taalcafés in Amsterdam", en: "Language cafés in Amsterdam" } },
  { cat: "speaking", q: "taalmaatje Amsterdam", t: { nl: "Taalmaatje in Amsterdam", en: "Language buddy in Amsterdam" } },
  { cat: "courses", q: "cursus Nederlands Amsterdam", t: { nl: "Cursus Nederlands in Amsterdam", en: "Dutch course in Amsterdam" } },
  { cat: "work", q: "Nederlands op de werkvloer cursus", t: { nl: "Nederlands voor uw werk", en: "Dutch for work" } },
];
