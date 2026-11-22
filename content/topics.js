// The two sections of the site and their topics. Texts in Dutch and English; Arabic and Polish
// only once the owner asks for them (until then the site shows the English text).
// Each resource in resources.js says which topics it belongs to (field `topics`).
// `slug` = the address of the page; Arabic and Polish pages use the English slug.
// `live` = "search now" buttons: a live Google search for things that change every week
// (`yt: true` searches YouTube instead). `liveText` optionally replaces the text above them.

export const sections = [
  {
    key: "online",
    icon: "💻",
    slug: { nl: "online", en: "online" },
    title: { nl: "Online leren", en: "Learn online", ar: "التعلّم عبر الإنترنت", pl: "Nauka online" },
    kicker: { nl: "Thuis, op uw telefoon", en: "At home, on your phone", ar: "في البيت، على هاتفك", pl: "W domu, na telefonie" },
    intro: {
      nl: "Leer wanneer het u uitkomt: met apps, oefensites en video's. Veel is gratis.",
      en: "Learn whenever it suits you: with apps, practice websites and videos. Much of it is free.",
      ar: "تعلّم في الوقت الذي يناسبك: بالتطبيقات ومواقع التدريب والفيديوهات. الكثير منها مجاني.",
      pl: "Ucz się, kiedy Ci pasuje: z aplikacjami, stronami z ćwiczeniami i filmami. Dużo z tego jest bezpłatne.",
    },
    topics: [
      {
        key: "apps", icon: "📱",
        slug: { nl: "apps", en: "apps" },
        title: { nl: "Apps", en: "Apps", ar: "التطبيقات", pl: "Aplikacje" },
        intro: {
          nl: "Leer elke dag een paar minuten Nederlands op uw telefoon. Goed om mee te beginnen, maar oefen ook met praten.",
          en: "Learn a few minutes of Dutch every day on your phone. A good start, but practise speaking too.",
          ar: "تعلّم الهولندية بضع دقائق كل يوم على هاتفك. بداية جيدة، لكن تدرّب على التحدث أيضًا.",
          pl: "Ucz się niderlandzkiego kilka minut dziennie na telefonie. Dobry początek, ale ćwicz też mówienie.",
        },
      },
      {
        key: "practice", icon: "🧩",
        slug: { nl: "oefensites", en: "practice-websites" },
        title: { nl: "Oefensites en grammatica", en: "Practice sites and grammar", ar: "مواقع التدريب والقواعد", pl: "Strony z ćwiczeniami i gramatyka" },
        intro: {
          nl: "Websites met oefeningen voor woorden, grammatica, lezen en luisteren. Gratis en op elk niveau.",
          en: "Websites with exercises for vocabulary, grammar, reading and listening. Free and at every level.",
          ar: "مواقع فيها تمارين للمفردات والقواعد والقراءة والاستماع. مجانية ولكل المستويات.",
          pl: "Strony z ćwiczeniami ze słownictwa, gramatyki, czytania i słuchania. Bezpłatne i na każdym poziomie.",
        },
      },
      {
        key: "video", icon: "🎬",
        slug: { nl: "videos", en: "videos" },
        title: { nl: "Video's", en: "Videos", ar: "الفيديوهات", pl: "Filmy" },
        intro: {
          nl: "Kijken en luisteren: video's met uitleg, en korte filmpjes in eenvoudig Nederlands.",
          en: "Watch and listen: videos with explanations, and short clips in simple Dutch.",
          ar: "شاهد واستمع: فيديوهات فيها شرح، ومقاطع قصيرة بهولندية بسيطة.",
          pl: "Oglądaj i słuchaj: filmy z wyjaśnieniami i krótkie klipy w prostym niderlandzkim.",
        },
      },
      {
        key: "youtube", icon: "▶️",
        slug: { nl: "youtube-kanalen", en: "youtube-channels" },
        title: { nl: "YouTube-kanalen", en: "YouTube channels", ar: "قنوات يوتيوب", pl: "Kanały na YouTube" },
        intro: {
          nl: "Gratis kanalen op YouTube: lessen met uitleg, echt Nederlands op straat, en gewone Nederlandse tv. Zet de ondertitels aan.",
          en: "Free YouTube channels: lessons with explanations, real Dutch on the street, and ordinary Dutch TV. Turn on the subtitles.",
          ar: "قنوات مجانية على يوتيوب: دروس فيها شرح، وهولندية حقيقية في الشارع، وتلفزيون هولندي عادي. شغّل الترجمة المكتوبة.",
          pl: "Bezpłatne kanały na YouTube: lekcje z wyjaśnieniami, prawdziwy niderlandzki na ulicy i zwykła holenderska telewizja. Włącz napisy.",
        },
        liveText: {
          nl: "Van dit kanaal is het precieze adres niet bevestigd. Deze knop zoekt het op YouTube, zodat u niet op een verkeerd kanaal komt.",
          en: "For this channel the exact address has not been confirmed. This button searches for it on YouTube, so you do not end up on a wrong channel.",
          ar: "لم يتم التأكد من العنوان الدقيق لهذه القناة. يبحث هذا الزر عنها على يوتيوب، حتى لا تصل إلى قناة خاطئة.",
          pl: "Dokładny adres tego kanału nie został potwierdzony. Ten przycisk wyszukuje go na YouTube, żeby nie trafić na niewłaściwy kanał.",
        },
        live: [
          { yt: true, q: "Learn Dutch with Videos", t: {
            nl: "Learn Dutch with Videos (alledaags Nederlands)", en: "Learn Dutch with Videos (everyday Dutch)",
            ar: "Learn Dutch with Videos (هولندية يومية)", pl: "Learn Dutch with Videos (codzienny niderlandzki)" } },
        ],
      },
      {
        key: "onlineclass", icon: "👩‍🏫",
        slug: { nl: "online-les", en: "online-classes" },
        title: { nl: "Online les met een docent", en: "Online classes with a teacher", ar: "دروس عبر الإنترنت مع معلّم", pl: "Lekcje online z nauczycielem" },
        intro: {
          nl: "Les van een echte docent, via uw computer. Meestal betaald.",
          en: "Lessons from a real teacher, on your computer. Usually paid.",
          ar: "دروس مع معلّم حقيقي، عبر حاسوبك. غالبًا مدفوعة.",
          pl: "Lekcje z prawdziwym nauczycielem, przez komputer. Zwykle płatne.",
        },
        live: [{ q: "online cursus Nederlands NT2", t: {
          nl: "Online cursussen Nederlands", en: "Online Dutch courses", ar: "دورات هولندية عبر الإنترنت", pl: "Kursy niderlandzkiego online" } }],
      },
      {
        key: "exam", icon: "📝",
        slug: { nl: "examen-oefenen", en: "exam-practice" },
        title: { nl: "Examens", en: "Exams", ar: "الامتحانات", pl: "Egzaminy" },
        intro: {
          nl: "Officiële examens Nederlands en oefenexamens, bijvoorbeeld voor studie of werk.",
          en: "Official Dutch exams and practice exams, for example for study or work.",
          ar: "امتحانات رسمية في الهولندية وامتحانات تجريبية، مثلًا للدراسة أو العمل.",
          pl: "Oficjalne egzaminy z niderlandzkiego i egzaminy próbne, na przykład do nauki lub pracy.",
        },
      },
    ],
  },
  {
    key: "inperson",
    icon: "🤝",
    slug: { nl: "op-locatie", en: "in-person" },
    title: { nl: "Op locatie leren", en: "Learn in person", ar: "التعلّم حضوريًا", pl: "Nauka na miejscu" },
    kicker: { nl: "Met andere mensen", en: "With other people", ar: "مع أشخاص آخرين", pl: "Z innymi ludźmi" },
    intro: {
      nl: "Praat Nederlands met echte mensen: in de bibliotheek, in een taalcafé, met een taalmaatje of in de klas.",
      en: "Speak Dutch with real people: at the library, in a language café, with a language buddy or in class.",
      ar: "تحدّث الهولندية مع أشخاص حقيقيين: في المكتبة، أو في مقهى لغوي، أو مع شريك لغوي، أو في الصف.",
      pl: "Mów po niderlandzku z prawdziwymi ludźmi: w bibliotece, w kawiarni językowej, z partnerem językowym lub na zajęciach.",
    },
    topics: [
      {
        key: "talk", icon: "🗣️",
        slug: { nl: "taalcafe-en-taalmaatje", en: "language-cafe-and-buddy" },
        title: { nl: "Taalcafé en taalmaatje", en: "Language café and buddy", ar: "المقهى اللغوي والشريك اللغوي", pl: "Kawiarnia językowa i partner językowy" },
        intro: {
          nl: "De snelste manier om te leren praten: samen Nederlands spreken, gratis, met vrijwilligers en andere nieuwkomers.",
          en: "The fastest way to learn to speak: practise Dutch together, for free, with volunteers and other newcomers.",
          ar: "أسرع طريقة لتتعلّم الكلام: تحدّث الهولندية مع الآخرين، مجانًا، مع متطوعين وقادمين جدد آخرين.",
          pl: "Najszybszy sposób, żeby nauczyć się mówić: ćwicz niderlandzki z innymi, za darmo, z wolontariuszami i innymi nowo przybyłymi.",
        },
        live: [
          { q: "taalcafé Amsterdam", t: { nl: "Taalcafés in Amsterdam", en: "Language cafés in Amsterdam", ar: "المقاهي اللغوية في أمستردام", pl: "Kawiarnie językowe w Amsterdamie" } },
          { q: "taalmaatje Amsterdam", t: { nl: "Taalmaatje in Amsterdam", en: "Language buddy in Amsterdam", ar: "شريك لغوي في أمستردام", pl: "Partner językowy w Amsterdamie" } },
        ],
      },
      {
        key: "library", icon: "📚",
        slug: { nl: "bibliotheek", en: "library" },
        title: { nl: "Bibliotheek en Taalhuis", en: "Library and Taalhuis", ar: "المكتبة وTaalhuis", pl: "Biblioteka i Taalhuis" },
        intro: {
          nl: "De bibliotheek helpt gratis met Nederlands: in het Taalhuis, met taalcafés en met boeken in makkelijk Nederlands.",
          en: "Public libraries help with Dutch for free: in the Taalhuis, with language cafés and with books in easy Dutch.",
          ar: "تساعدك المكتبة العامة مجانًا في الهولندية: في Taalhuis (بيت اللغة)، وفي المقاهي اللغوية، وبكتب بهولندية سهلة.",
          pl: "Biblioteka publiczna bezpłatnie pomaga z niderlandzkim: w Taalhuis (domu języka), w kawiarniach językowych i z książkami w łatwym niderlandzkim.",
        },
      },
      {
        key: "course", icon: "🏫",
        slug: { nl: "cursus", en: "courses" },
        title: { nl: "Cursussen en scholen", en: "Courses and schools", ar: "الدورات والمدارس", pl: "Kursy i szkoły" },
        intro: {
          nl: "Les in een klas, met een docent en een vast programma. Meestal betaald; vraag naar het niveau en de prijs.",
          en: "Lessons in a class, with a teacher and a set programme. Usually paid; ask about the level and the price.",
          ar: "دروس في صف، مع معلّم وبرنامج ثابت. غالبًا مدفوعة؛ اسأل عن المستوى والسعر.",
          pl: "Lekcje w grupie, z nauczycielem i stałym programem. Zwykle płatne; zapytaj o poziom i cenę.",
        },
        live: [
          { q: "cursus Nederlands Amsterdam", t: { nl: "Cursus Nederlands in Amsterdam", en: "Dutch course in Amsterdam", ar: "دورة هولندية في أمستردام", pl: "Kurs niderlandzkiego w Amsterdamie" } },
          { q: "Nederlands op de werkvloer cursus", t: { nl: "Nederlands voor uw werk", en: "Dutch for work", ar: "الهولندية للعمل", pl: "Niderlandzki do pracy" } },
        ],
      },
      {
        key: "literacy", icon: "✏️",
        slug: { nl: "lezen-en-schrijven", en: "reading-and-writing" },
        title: { nl: "Leren lezen en schrijven", en: "Learn to read and write", ar: "تعلّم القراءة والكتابة", pl: "Nauka czytania i pisania" },
        intro: {
          nl: "Voor wie het Latijnse alfabet nog leert of moeite heeft met lezen en schrijven. Er is gratis hulp.",
          en: "For people still learning the Latin alphabet or who find reading and writing hard. Free help is available.",
          ar: "لمن لا يزال يتعلّم الحروف اللاتينية أو يجد القراءة والكتابة صعبة. توجد مساعدة مجانية.",
          pl: "Dla osób, które dopiero uczą się alfabetu łacińskiego albo mają trudności z czytaniem i pisaniem. Jest bezpłatna pomoc.",
        },
      },
      {
        key: "kids", icon: "🧸",
        slug: { nl: "met-kinderen", en: "with-children" },
        title: { nl: "Samen met kinderen", en: "Together with children", ar: "مع الأطفال", pl: "Razem z dziećmi" },
        intro: {
          nl: "Leer samen met uw kinderen: voorlezen, boeken en filmpjes. Goed voor u én voor hen.",
          en: "Learn together with your children: reading aloud, books and videos. Good for you and for them.",
          ar: "تعلّم مع أطفالك: القراءة بصوت عالٍ، والكتب، والفيديوهات. مفيد لك ولهم.",
          pl: "Ucz się razem z dziećmi: głośne czytanie, książki i filmy. Dobre dla Ciebie i dla nich.",
        },
      },
    ],
  },
];
