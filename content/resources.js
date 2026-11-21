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
    topics: ["practice", "video", "literacy"],
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
  {
    name: "Memrise",
    topics: ["apps"],
    url: "https://www.memrise.com/",
    cat: "start", levels: ["A0", "A1", "A2"], cost: "free", formats: ["app", "video"],
    langs: ["en"], where: "online", trust: "app",
    sum: {
      nl: "App met korte video's van echte Nederlanders en oefeningen voor nieuwe woorden. Gratis versie, betaald voor meer.",
      en: "App with short videos of real Dutch speakers and vocabulary exercises. Free version, paid for more.",
    },
  },
  {
    name: "Drops",
    topics: ["apps"],
    url: "https://languagedrops.com/",
    cat: "start", levels: ["A0", "A1"], cost: "free", formats: ["app"],
    langs: ["en"], where: "online", trust: "app",
    sum: {
      nl: "Leer nieuwe woorden met plaatjes, vijf minuten per dag. Gratis versie, betaald voor meer tijd.",
      en: "Learn new words with pictures, five minutes a day. Free version, paid for more time.",
    },
  },
  {
    name: "Babbel",
    topics: ["apps"],
    url: "https://www.babbel.com/",
    cat: "start", levels: ["A0", "A1", "A2", "B1"], cost: "paid", formats: ["app", "website"],
    langs: ["en"], where: "online", trust: "app",
    sum: {
      nl: "Betaalde app met lessen die opbouwen, met spraakherkenning om uitspraak te oefenen. Eerste les gratis.",
      en: "Paid app with lessons that build up, with speech recognition to practise pronunciation. First lesson free.",
    },
  },
  {
    name: "Tandem",
    topics: ["apps", "talk"],
    url: "https://www.tandem.net/",
    cat: "speaking", levels: ["A1", "A2", "B1", "B2"], cost: "free", formats: ["app", "conversation"],
    langs: ["en"], where: "online", trust: "app",
    sum: {
      nl: "App om een taalpartner te vinden: u helpt iemand met uw taal, die persoon helpt u met Nederlands.",
      en: "App to find a language partner: you help someone with your language, they help you with Dutch.",
    },
  },
  {
    name: "Taalklas.nl",
    topics: ["practice", "video"],
    url: "https://www.taalklas.nl/",
    cat: "start", levels: ["A0", "A1", "A2"], cost: "free", formats: ["website", "video"],
    langs: ["nl"], where: "online", trust: "ngo",
    sum: {
      nl: "Gratis online lessen Nederlands met filmpjes over het dagelijks leven, voor beginners.",
      en: "Free online Dutch lessons with videos about everyday life, for beginners.",
    },
  },
  {
    name: "Nedbox",
    topics: ["practice", "video"],
    url: "https://www.nedbox.be/",
    cat: "start", levels: ["A1", "A2", "B1"], cost: "free", formats: ["website", "video"],
    langs: ["nl"], where: "online", trust: "official",
    sum: {
      nl: "Gratis Nederlands oefenen met nieuws, filmpjes en series. Uit Vlaanderen, dus soms Vlaamse woorden.",
      en: "Free Dutch practice with news, videos and series. From Flanders, so sometimes Flemish words.",
    },
  },
  {
    name: "NOS Jeugdjournaal",
    topics: ["video", "kids"],
    url: "https://jeugdjournaal.nl/",
    cat: "children", levels: ["A2", "B1"], cost: "free", formats: ["video", "website"],
    langs: ["nl"], where: "online", trust: "official",
    sum: {
      nl: "Het nieuws, uitgelegd voor kinderen. Duidelijk en langzaam Nederlands, ook goed voor volwassenen.",
      en: "The news, explained for children. Clear, slow Dutch that also works well for adults.",
    },
  },
  {
    name: "Easy Dutch",
    topics: ["video"],
    url: "https://www.youtube.com/@EasyDutch",
    cat: "start", levels: ["A2", "B1", "B2"], cost: "free", formats: ["video"],
    langs: ["nl", "en"], where: "online", trust: "community",
    sum: {
      nl: "Straatinterviews in echt Nederlands, met Nederlandse en Engelse ondertitels.",
      en: "Street interviews in real Dutch, with Dutch and English subtitles.",
    },
  },
  {
    name: "CNaVT: Certificaat Nederlands als Vreemde Taal",
    topics: ["exam"],
    url: "https://cnavt.org/",
    cat: "exam", levels: ["A2", "B1", "B2"], cost: "paid", formats: ["exam"],
    langs: ["nl", "en"], where: "national", trust: "official",
    sum: {
      nl: "Erkend certificaat Nederlands van de Nederlandse Taalunie, op verschillende niveaus. Met oefenexamens.",
      en: "Recognised Dutch certificate from the Dutch Language Union, at several levels. With practice exams.",
    },
  },
  {
    name: "Volksuniversiteit Amsterdam",
    topics: ["course", "onlineclass"],
    url: "https://www.volksuniversiteitamsterdam.nl/",
    cat: "courses", levels: ["A0", "A1", "A2", "B1", "B2"], cost: "paid", formats: ["class", "online"],
    langs: ["nl", "en"], where: "amsterdam", trust: "ngo",
    sum: {
      nl: "Betaalbare avond- en dagcursussen Nederlands in Amsterdam en online, van beginner tot gevorderd.",
      en: "Affordable evening and daytime Dutch courses in Amsterdam and online, from beginner to advanced.",
    },
  },
  {
    name: "ROC van Amsterdam: Nederlands als tweede taal",
    topics: ["course"],
    url: "https://www.rocva.nl/",
    cat: "courses", levels: ["A1", "A2", "B1", "B2"], cost: "paid", formats: ["class"],
    langs: ["nl"], where: "amsterdam", trust: "official",
    sum: {
      nl: "Opleidingen Nederlands als tweede taal (NT2) bij de beroepsschool van Amsterdam, ook als voorbereiding op studie.",
      en: "Dutch as a second language (NT2) programmes at Amsterdam's vocational college, also to prepare for further study.",
    },
  },
  {
    name: "Humanitas: taalmaatje",
    topics: ["talk"],
    url: "https://www.humanitas.nl/",
    cat: "speaking", levels: ["A0", "A1", "A2", "B1"], cost: "free", formats: ["conversation"],
    langs: ["nl"], where: "national", trust: "ngo",
    sum: {
      nl: "Een vrijwilliger die regelmatig met u afspreekt om Nederlands te praten, ook in Amsterdam.",
      en: "A volunteer who meets you regularly to speak Dutch, also in Amsterdam.",
    },
  },
  {
    name: "Online Bibliotheek",
    topics: ["library"],
    url: "https://www.onlinebibliotheek.nl/",
    cat: "literacy", levels: ["A1", "A2", "B1", "B2"], cost: "free", formats: ["book", "app"],
    langs: ["nl"], where: "online", trust: "library",
    sum: {
      nl: "E-books en luisterboeken, ook in makkelijk Nederlands. Gratis met een bibliotheekpas.",
      en: "E-books and audiobooks, including easy Dutch. Free with a library card.",
    },
  },
  {
    name: "Taal voor het Leven",
    topics: ["literacy"],
    url: "https://www.taalvoorhetleven.nl/",
    cat: "literacy", levels: ["A0", "A1", "A2"], cost: "free", formats: ["class", "conversation"],
    langs: ["nl"], where: "national", trust: "ngo",
    sum: {
      nl: "Gratis hulp van een vrijwilliger bij lezen, schrijven en praten, via bibliotheken en Taalhuizen.",
      en: "Free help from a volunteer with reading, writing and speaking, through libraries and Taalhuizen.",
    },
  },
  {
    name: "VoorleesExpress",
    topics: ["kids"],
    url: "https://www.voorleesexpress.nl/",
    cat: "children", levels: ["A0", "A1", "A2"], cost: "free", formats: ["book", "conversation"],
    langs: ["nl"], where: "national", trust: "ngo",
    sum: {
      nl: "Een vrijwilliger komt twintig weken bij u thuis voorlezen aan uw kinderen, en laat zien hoe u dat zelf doet.",
      en: "A volunteer comes to your home for twenty weeks to read to your children, and shows you how to do it yourself.",
    },
  },
  {
    name: "Zappelin",
    topics: ["kids", "video"],
    url: "https://www.zappelin.nl/",
    cat: "children", levels: ["A0", "A1"], cost: "free", formats: ["video", "app"],
    langs: ["nl"], where: "online", trust: "official",
    sum: {
      nl: "Filmpjes en liedjes voor peuters van de publieke omroep. Leer samen met uw kind eenvoudige woorden.",
      en: "Videos and songs for toddlers from Dutch public broadcasting. Learn simple words together with your child.",
    },
  },
];
