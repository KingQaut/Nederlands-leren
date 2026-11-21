// All resources on the site. One entry per resource; texts in Dutch (nl) and English (en).
// This file is meant to be (re)generated automatically; the site shows a disclaimer saying so.
//
// Fields
//   name     name of the resource
//   topics   topic keys from topics.js where it is listed (first = main topic)
//   url      link to the provider (the source of truth)
//   cat      start | speaking | courses | exam | literacy | work | children (used by the 'help me choose' page)
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
    topics: ["practice", "video"],
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
    topics: ["apps"],
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
    topics: ["video"],
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
    topics: ["practice"],
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
    topics: ["practice"],
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
    topics: ["talk", "library"],
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
    topics: ["talk", "library"],
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
    topics: ["talk"],
    url: "https://www.hetbegintmettaal.nl/",
    cat: "speaking", levels: ["A0", "A1", "A2", "B1"], cost: "free", formats: ["conversation"],
    langs: ["nl"], where: "national", trust: "ngo",
    sum: {
      nl: "Landelijk netwerk van vrijwilligers: een taalmaatje of taalgroep om Nederlands te oefenen in het dagelijks leven.",
      en: "National network of volunteers: a language buddy or group to practise Dutch in everyday life.",
    },
  },
  {
    name: "Staatsexamens NT2",
    topics: ["exam"],
    url: "https://www.staatsexamensnt2.nl/",
    cat: "exam", levels: ["B1", "B2"], cost: "paid", formats: ["exam", "website"],
    langs: ["nl"], where: "national", trust: "official",
    sum: {
      nl: "Officiële staatsexamens Nederlands op B1 of B2, vaak nodig voor studie of werk. Met oefenexamens.",
      en: "Official state exams in Dutch at B1 or B2, often needed for study or work. With practice exams.",
    },
  },
  {
    name: "UvA Talen",
    topics: ["course", "onlineclass"],
    url: "https://www.uvatalen.nl/",
    cat: "courses", levels: ["A0", "A1", "A2", "B1", "B2"], cost: "paid", formats: ["class", "online"],
    langs: ["en", "nl"], where: "amsterdam", trust: "university",
    sum: {
      nl: "Taalcentrum van de Universiteit van Amsterdam: betaalde cursussen Nederlands van beginner tot gevorderd.",
      en: "Language centre of the University of Amsterdam: paid Dutch courses from beginner to advanced.",
    },
  },
  {
    name: "Stichting Lezen & Schrijven",
    topics: ["literacy"],
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
    topics: ["library", "literacy"],
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
    topics: ["kids", "library"],
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
    topics: ["kids", "video"],
    url: "https://schooltv.nl/",
    cat: "children", levels: ["A1", "A2", "B1"], cost: "free", formats: ["video"],
    langs: ["nl"], where: "online", trust: "official",
    sum: {
      nl: "Gratis korte educatieve video's van de publieke omroep. Goed om samen met uw kinderen Nederlands te leren.",
      en: "Free short educational videos from Dutch public broadcasting. Good for learning Dutch together with your children.",
    },
  },
];
