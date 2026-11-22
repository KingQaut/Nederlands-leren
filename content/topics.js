// The two sections of the site and their topics (Dutch + English).
// Each resource in resources.js says which topics it belongs to (field `topics`).
// `live` = "search now" buttons: a live Google search for things that change every week
// (`yt: true` searches YouTube instead). `liveText` optionally replaces the text above them.

export const sections = [
  {
    key: "online",
    icon: "💻",
    slug: { nl: "online", en: "online" },
    title: { nl: "Online leren", en: "Learn online" },
    kicker: { nl: "Thuis, op uw telefoon", en: "At home, on your phone" },
    intro: {
      nl: "Leer wanneer het u uitkomt: met apps, oefensites en video's. Veel is gratis.",
      en: "Learn whenever it suits you: with apps, practice websites and videos. Much of it is free.",
    },
    topics: [
      {
        key: "apps", icon: "📱",
        slug: { nl: "apps", en: "apps" },
        title: { nl: "Apps", en: "Apps" },
        intro: {
          nl: "Leer elke dag een paar minuten Nederlands op uw telefoon. Goed om mee te beginnen, maar oefen ook met praten.",
          en: "Learn a few minutes of Dutch every day on your phone. A good start, but practise speaking too.",
        },
      },
      {
        key: "practice", icon: "🧩",
        slug: { nl: "oefensites", en: "practice-websites" },
        title: { nl: "Oefensites en grammatica", en: "Practice sites and grammar" },
        intro: {
          nl: "Websites met oefeningen voor woorden, grammatica, lezen en luisteren. Gratis en op elk niveau.",
          en: "Websites with exercises for vocabulary, grammar, reading and listening. Free and at every level.",
        },
      },
      {
        key: "video", icon: "🎬",
        slug: { nl: "videos", en: "videos" },
        title: { nl: "Video's", en: "Videos" },
        intro: {
          nl: "Kijken en luisteren: video's met uitleg, en korte filmpjes in eenvoudig Nederlands.",
          en: "Watch and listen: videos with explanations, and short clips in simple Dutch.",
        },
      },
      {
        key: "youtube", icon: "▶️",
        slug: { nl: "youtube-kanalen", en: "youtube-channels" },
        title: { nl: "YouTube-kanalen", en: "YouTube channels" },
        intro: {
          nl: "Gratis kanalen op YouTube: lessen met uitleg, echt Nederlands op straat, en gewone Nederlandse tv. Zet de ondertitels aan.",
          en: "Free YouTube channels: lessons with explanations, real Dutch on the street, and ordinary Dutch TV. Turn on the subtitles.",
        },
        liveText: {
          nl: "Van deze kanalen weten we het precieze adres niet zeker. Deze knoppen zoeken ze op YouTube, zodat u niet op een verkeerd kanaal komt.",
          en: "For these channels we are not sure of the exact address. These buttons search for them on YouTube, so you do not end up on a wrong channel.",
        },
        live: [
          { yt: true, q: "Learn Dutch with Videos", t: { nl: "Learn Dutch with Videos (alledaags Nederlands)", en: "Learn Dutch with Videos (everyday Dutch)" } },
          { yt: true, q: "Het Klokhuis", t: { nl: "Het Klokhuis (kinder-tv, ook goed voor volwassenen)", en: "Het Klokhuis (children's TV, good for adults too)" } },
          { yt: true, q: "LUBACH RTL", t: { nl: "LUBACH (satire op RTL 4, voor gevorderden)", en: "LUBACH (satire on RTL 4, for advanced learners)" } },
        ],
      },
      {
        key: "onlineclass", icon: "👩‍🏫",
        slug: { nl: "online-les", en: "online-classes" },
        title: { nl: "Online les met een docent", en: "Online classes with a teacher" },
        intro: {
          nl: "Les van een echte docent, via uw computer. Meestal betaald.",
          en: "Lessons from a real teacher, on your computer. Usually paid.",
        },
        live: [{ q: "online cursus Nederlands NT2", t: { nl: "Online cursussen Nederlands", en: "Online Dutch courses" } }],
      },
      {
        key: "exam", icon: "📝",
        slug: { nl: "examen-oefenen", en: "exam-practice" },
        title: { nl: "Examens", en: "Exams" },
        intro: {
          nl: "Officiële examens Nederlands en oefenexamens, bijvoorbeeld voor studie of werk.",
          en: "Official Dutch exams and practice exams, for example for study or work.",
        },
      },
    ],
  },
  {
    key: "inperson",
    icon: "🤝",
    slug: { nl: "op-locatie", en: "in-person" },
    title: { nl: "Op locatie leren", en: "Learn in person" },
    kicker: { nl: "Met andere mensen", en: "With other people" },
    intro: {
      nl: "Praat Nederlands met echte mensen: in de bibliotheek, in een taalcafé, met een taalmaatje of in de klas.",
      en: "Speak Dutch with real people: at the library, in a language café, with a language buddy or in class.",
    },
    topics: [
      {
        key: "talk", icon: "🗣️",
        slug: { nl: "taalcafe-en-taalmaatje", en: "language-cafe-and-buddy" },
        title: { nl: "Taalcafé en taalmaatje", en: "Language café and buddy" },
        intro: {
          nl: "De snelste manier om te leren praten: samen Nederlands spreken, gratis, met vrijwilligers en andere nieuwkomers.",
          en: "The fastest way to learn to speak: practise Dutch together, for free, with volunteers and other newcomers.",
        },
        live: [
          { q: "taalcafé Amsterdam", t: { nl: "Taalcafés in Amsterdam", en: "Language cafés in Amsterdam" } },
          { q: "taalmaatje Amsterdam", t: { nl: "Taalmaatje in Amsterdam", en: "Language buddy in Amsterdam" } },
        ],
      },
      {
        key: "library", icon: "📚",
        slug: { nl: "bibliotheek", en: "library" },
        title: { nl: "Bibliotheek en Taalhuis", en: "Library and Taalhuis" },
        intro: {
          nl: "De bibliotheek helpt gratis met Nederlands: in het Taalhuis, met taalcafés en met boeken in makkelijk Nederlands.",
          en: "Public libraries help with Dutch for free: in the Taalhuis, with language cafés and with books in easy Dutch.",
        },
      },
      {
        key: "course", icon: "🏫",
        slug: { nl: "cursus", en: "courses" },
        title: { nl: "Cursussen en scholen", en: "Courses and schools" },
        intro: {
          nl: "Les in een klas, met een docent en een vast programma. Meestal betaald; vraag naar het niveau en de prijs.",
          en: "Lessons in a class, with a teacher and a set programme. Usually paid; ask about the level and the price.",
        },
        live: [
          { q: "cursus Nederlands Amsterdam", t: { nl: "Cursus Nederlands in Amsterdam", en: "Dutch course in Amsterdam" } },
          { q: "Nederlands op de werkvloer cursus", t: { nl: "Nederlands voor uw werk", en: "Dutch for work" } },
        ],
      },
      {
        key: "literacy", icon: "✏️",
        slug: { nl: "lezen-en-schrijven", en: "reading-and-writing" },
        title: { nl: "Leren lezen en schrijven", en: "Learn to read and write" },
        intro: {
          nl: "Voor wie het Latijnse alfabet nog leert of moeite heeft met lezen en schrijven. Er is gratis hulp.",
          en: "For people still learning the Latin alphabet or who find reading and writing hard. Free help is available.",
        },
      },
      {
        key: "kids", icon: "🧸",
        slug: { nl: "met-kinderen", en: "with-children" },
        title: { nl: "Samen met kinderen", en: "Together with children" },
        intro: {
          nl: "Leer samen met uw kinderen: voorlezen, boeken en filmpjes. Goed voor u én voor hen.",
          en: "Learn together with your children: reading aloud, books and videos. Good for you and for them.",
        },
      },
    ],
  },
];
