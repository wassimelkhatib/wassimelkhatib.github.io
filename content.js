/* ==========================================================================
   CONTENU DU SITE — c'est le SEUL fichier à modifier pour mettre à jour le site.
   Chaque texte existe en français (fr) et en arabe (ar).
   Pour ajouter une publication : copiez un bloc { ... } dans "publications".
   ========================================================================== */

window.SITE = {

  /* ---------- Identité ---------- */
  person: {
    name: { fr: "Wassim El-Khatib", ar: "بروفيسور وسيم الخطيب" },
    title: {
      fr: "Professeur titulaire en Sciences de l’Éducation",
      ar: "بروفيسور في علوم التربية"
    },
    affiliation: {
      fr: "Université Libanaise — Faculté de Pédagogie",
      ar: "الجامعة اللبنانية — كلية التربية"
    },
    tagline: {
      fr: "Curricula et référentiels de compétences · Évaluation · Formation des enseignants",
      ar: "المناهج ومرجعيات الكفايات · التقويم · تكوين المعلمين"
    },
    initials: "WK",       // lettres du monogramme (si pas de photo)
    photo: "photo.jpg",            // ex. "photo.jpg" (déposez l'image à côté de index.html). Vide = monogramme.
    email: "wassim.khatib@ul.edu.lb",
    /* Coordonnées masquées au chargement (encodées en base64) : le visiteur clique sur « Afficher ».
       Cela évite que les robots de spam les récupèrent. Pour en changer : encodez le texte sur base64encode.org */
    hidden: {
      emailPerso: "a2hhdGliLndhc3NpbUBnbWFpbC5jb20=",
      mobile: "Kzk2MSAoMykgODMwIDEyNw=="
    },
    postal: {
      fr: "2010-1503 · B.P. 05 · 1503 Beiteddine · Liban",
      ar: "2010-1503 · ص.ب. 05 · 1503 بيت الدين · لبنان",
      en: "2010-1503 · P.O. Box 05 · 1503 Beiteddine · Lebanon"
    },
    location: { fr: "Beiteddine, Liban", ar: "بيت الدين، لبنان" },
    siteUrl: "https://wassimelkhatib.github.io/"   // à remplacer par l'adresse finale du site
  },

  /* ---------- Liens externes (laissez "" pour masquer) ---------- */
  links: {
    academia: "https://wassimelkhatib.academia.edu",
    orcid: "",
    googleScholar: "",
    hal: "",
    researchGate: "",
    linkedin: "https://www.linkedin.com/in/dr-wassim-el-khatib",
    facebook: "https://www.facebook.com/wassim.elkhatib.3"
  },

  /* ---------- Textes de l'interface ---------- */
  ui: {
    fr: {
      skip: "Aller au contenu",
      nav: { about: "Présentation", research: "Recherche", publications: "Publications", talks: "Communications", teaching: "Enseignement", career: "Parcours", roles: "Réseaux", news: "Actualités", contact: "Contact" },
      switchTo: "العربية",
      switchLabel: "Passer en arabe",
      ctaPubs: "Voir les publications",
      ctaContact: "Me contacter",
      about: "Présentation",
      research: "Domaines de recherche et d’expertise",
      publications: "Publications",
      pubSearch: "Rechercher une publication…",
      pubAll: "Toutes",
      pubCount: n => n + " publication" + (n > 1 ? "s" : ""),
      pubNone: "Aucune publication ne correspond à la recherche.",
      openLink: "Consulter",
      talks: "Communications et colloques",
      teaching: "Enseignement et encadrement",
      teachingCourses: "Enseignements dispensés",
      career: "Parcours",
      degrees: "Titres et diplômes",
      positions: "Fonctions et expériences",
      training: "Formations suivies",
      roles: "Responsabilités et réseaux",
      languages: "Langues et outils",
      news: "Actualités",
      contact: "Contact",
      contactText: "Pour une collaboration, une invitation à un colloque ou une question sur mes travaux, vous pouvez m’écrire.",
      write: "Écrire un courriel",
      present: "présent",
      cl: { pro: "Courriel professionnel", perso: "Courriel personnel", landline: "Téléphone fixe", mobile: "Téléphone mobile", postal: "Adresse postale", show: "Afficher" },
      updated: "Site mis à jour en novembre 2026",
      profiles: "Profils académiques",
      types: {
        article: "Articles de revues",
        chapter: "Chapitres d’ouvrages",
        book: "Ouvrages et manuels",
        proceedings: "Actes de colloques",
        report: "Rapports et guides",
        thesis: "Thèse",
        other: "Autres écrits"
      }
    },
    ar: {
      skip: "انتقل إلى المحتوى",
      nav: { about: "نبذة", research: "البحث", publications: "المنشورات", talks: "المشاركات", teaching: "التدريس", career: "المسار", roles: "الشبكات", news: "المستجدات", contact: "التواصل" },
      switchTo: "Français",
      switchLabel: "Passer en français",
      ctaPubs: "تصفّح المنشورات",
      ctaContact: "تواصل معي",
      about: "نبذة",
      research: "مجالات البحث والخبرة",
      publications: "المنشورات",
      pubSearch: "ابحث في المنشورات…",
      pubAll: "الكل",
      pubCount: n => n + " منشورًا",
      pubNone: "لا توجد منشورات مطابقة للبحث.",
      openLink: "اطّلع",
      talks: "المشاركات في المؤتمرات",
      teaching: "التدريس والإشراف",
      teachingCourses: "المقررات التي دُرّست",
      career: "المسار",
      degrees: "الشهادات والرتب",
      positions: "الوظائف والخبرات",
      training: "التكوينات المتابَعة",
      roles: "المسؤوليات والشبكات",
      languages: "اللغات والأدوات",
      news: "المستجدات",
      contact: "التواصل",
      contactText: "للتعاون أو للدعوة إلى مؤتمر أو للاستفسار عن أعمالي، يمكنكم مراسلتي.",
      write: "إرسال بريد إلكتروني",
      present: "حتى اليوم",
      cl: { pro: "البريد المهني", perso: "البريد الشخصي", landline: "الهاتف الثابت", mobile: "الهاتف المحمول", postal: "العنوان البريدي", show: "إظهار" },
      updated: "آخر تحديث للموقع: تشرين الثاني 2026",
      profiles: "الملفات الأكاديمية",
      types: {
        article: "مقالات في مجلات",
        chapter: "فصول في كتب",
        book: "كتب ودلائل مدرسية",
        proceedings: "أعمال مؤتمرات",
        report: "تقارير وأدلة",
        thesis: "أطروحة",
        other: "كتابات أخرى"
      }
    }
  },

  /* ---------- Présentation ---------- */
  about: {
    fr: [
      "Professeur titulaire en Sciences de l’Éducation à l’Université Libanaise (Faculté de Pédagogie), je mène des travaux sur l’élaboration des curricula et des référentiels de compétences, sur l’évaluation (des apprentissages, des programmes et des enseignements) et sur la formation des enseignants.",
      "Docteur en Sciences de l’Éducation de l’Université Aix-Marseille I (2009, mention très honorable avec félicitations du jury), j’ai consacré ma thèse à la mise en place d’une approche par compétences dans l’apprentissage du français au Liban. J’ai dirigé la Faculté de Pédagogie – Section 1 (2017-2019), exercé comme secrétaire général du Dispositif National d’Évaluation (2012-2014) et participé à l’élaboration du nouveau curriculum national libanais (2022-2026).",
      "Je suis premier délégué de l’ADMEE-Liban, section libanaise de l’Association pour le Développement des Méthodologies d’Évaluation en Éducation."
    ],
    ar: [
      "أنا بروفيسور في علوم التربية في الجامعة اللبنانية (كلية التربية). تتناول أعمالي بناء المناهج ومرجعيات الكفايات، والتقويم (تقويم التعلّمات والبرامج والتدريس)، وتكوين المعلمين.",
      "حصلتُ على دكتوراه في علوم التربية من جامعة إكس – مرسيليا الأولى (2009، بتقدير مشرّف جدًا مع تهنئة لجنة المناقشة)، وخصّصتُ أطروحتي لإرساء المقاربة بالكفايات في تعلّم اللغة الفرنسية في لبنان. توليتُ إدارة كلية التربية – الفرع الأول (2017-2019)، وعملتُ أمينًا عامًا للمنظومة الوطنية للتقويم (2012-2014)، وشاركتُ في إعداد المنهج الوطني اللبناني الجديد (2022-2026).",
      "أنا المندوب الأول لـ ADMEE-لبنان، الفرع اللبناني للجمعية من أجل تطوير منهجيات التقويم في التربية."
    ]
  },

  /* ---------- Domaines de recherche et d'expertise ---------- */
  research: [
    {
      title: { fr: "Curricula et approche par compétences", ar: "المناهج والمقاربة بالكفايات" },
      text: {
        fr: "Élaboration de curricula, de cadres et de référentiels de compétences ; conditions curriculaires et administratives de l’implémentation d’une approche par compétences ; intégration des compétences du XXIe siècle dans les programmes et les unités d’enseignement.",
        ar: "بناء المناهج والأطر ومرجعيات الكفايات؛ الشروط المنهجية والإدارية لتطبيق المقاربة بالكفايات؛ دمج كفايات القرن الحادي والعشرين في البرامج ووحدات التعلّم."
      }
    },
    {
      title: { fr: "Évaluation en éducation", ar: "التقويم في التربية" },
      text: {
        fr: "Culture et politiques de l’évaluation ; évaluation des apprentissages, des compétences en langue, des programmes et des enseignements dans le supérieur ; assurance qualité et accréditation.",
        ar: "ثقافة التقويم وسياساته؛ تقويم التعلّمات والكفايات اللغوية والبرامج والتدريس في التعليم العالي؛ ضمان الجودة والاعتماد."
      }
    },
    {
      title: { fr: "Formation des enseignants et pédagogie universitaire", ar: "تكوين المعلمين والبيداغوجيا الجامعية" },
      text: {
        fr: "Portfolio, recherche-action et mémoires professionnels ; supervision pédagogique ; développement professionnel des enseignants du supérieur.",
        ar: "ملف الإنجاز (البورتفوليو)، والبحث الإجرائي، والمذكرات المهنية؛ الإشراف التربوي؛ التنمية المهنية لأساتذة التعليم العالي."
      }
    },
    {
      title: { fr: "Didactique du français (FLS, FLE) et numérique éducatif", ar: "ديداكتيك اللغة الفرنسية والتقنيات الرقمية في التربية" },
      text: {
        fr: "Enseignement du français comme langue seconde et étrangère, perspective actionnelle, grammaire pour arabophones ; usage du numérique dans l’enseignement et l’évaluation.",
        ar: "تعليم الفرنسية لغةً ثانية وأجنبية، والمقاربة الفعلية، وقواعد الفرنسية للناطقين بالعربية؛ توظيف التقنيات الرقمية في التعليم والتقويم."
      }
    }
  ],

  /* ---------- Publications ---------- */
  /* type : article | chapter | book | proceedings | report | thesis | other */
  publications: [
    { year: 2026, type: "chapter", authors: "El-Khatib, W., & Azoury, P.", title: "Quarante ans d’évolution de l’évaluation au Liban : Enjeux, réformes et perspectives", venue: "In C. Gremion & N. Younès (Éds.), Évaluation en éducation et formation : Ancrages et perspectives (pp. 389-407). Les Presses de l’ADMEE.", url: "https://presses.admee.org/2026-01-evaluation-en-education-et-formation-ancrages-et-perspectives/" },
    { year: 2025, type: "chapter", authors: "El-Khatib, W.", title: "Intégration des compétences du XXIe siècle dans les programmes et les unités d’enseignement", venue: "In Manuel de pédagogie universitaire. Mission de pédagogie universitaire, Université Saint-Joseph de Beyrouth.", url: "https://www.usj.edu.lb/mpu/manuel/manuel_pu_a5.php" },
    { year: 2021, type: "article", authors: "El-Khatib, W., & Sawli, N.", title: "Les attitudes des enseignants à l’égard des devoirs scolaires au Liban", venue: "Formation et profession, 29(1), 1-15.", url: "http://dx.doi.org/10.18162/fp.2021.610" },
    { year: 2020, type: "article", authors: "Ariss, A., Salhab, S., & El-Khatib, W.", title: "A Constructivist Proposal to Enhancing Sixth Graders’ Reading Motivation", venue: "Sawt Al-Jamiaa, 14, 7-42.", url: "https://iul.edu.lb/wp-content/uploads/2020/12/Sawt-AlJamiaa-14-ENG.pdf" },
    { year: 2019, type: "article", authors: "El-Khatib, W.", title: "Les mémoires professionnels à la Faculté de Pédagogie de l’Université libanaise : quelle méthodologie pour la recherche-action ?", venue: "Revue internationale Méthodal. Méthodologie de l’enseignement et de l’apprentissage des langues, 3.", url: "https://methodal.net/?article258" },
    { year: 2017, type: "report", authors: "Diab, C. et al.", title: "Guide pour l’élaboration d’un référentiel de formation basé sur une approche visant le développement des compétences", venue: "Projet Tempus, Union européenne.", url: "" },
    { year: 2017, type: "article", authors: "El-Khatib, W.", title: "Les effets pédagogiques de l’utilisation du portfolio comme outil d’évaluation dans la formation des enseignants du secteur public à la Faculté de Pédagogie de l’Université Libanaise", venue: "Manarat Thaqafia, 3, 176-202.", url: "" },
    { year: 2017, type: "article", authors: "El-Khatib, W., & El-Hage, F.", title: "L’évaluation des enseignements au supérieur : attitudes des étudiants et contextualisation. Étude comparative entre deux facultés de pédagogie francophones au Liban", venue: "Éducation et formation, e-307-01, 29-43.", url: "http://revueeducationformation.be/index.php?revue=26&page=3" },
    { year: 2017, type: "article", authors: "El-Khatib, W.", title: "Implémentation de la perspective actionnelle dans l’enseignement du FLE à l’Université Libanaise : défis et perspectives", venue: "Revue internationale Méthodal. Méthodologie de l’enseignement et de l’apprentissage des langues, 1.", url: "https://methodal.net/?article13" },
    { year: 2017, type: "book", authors: "Badr, Z., Di Guira, M., & El-Khatib, W.", title: "Grammaire du français pour arabophones", venue: "Dir. J.-C. Beacco. Beyrouth : Hachette-Antoine.", url: "" },
    { year: 2016, type: "article", authors: "El-Khatib, W.", title: "Les représentations des étudiants à l’égard de l’évaluation des enseignements : le cas de la Faculté de Pédagogie de l’Université Libanaise", venue: "Revue des recherches pédagogiques, 26, 68-86.", url: "" },
    { year: 2016, type: "report", authors: "Beacco, J.-C. et al.", title: "Vers de nouvelles perspectives pour l’enseignement du français au Liban. Rapport final du Dispositif national d’évaluation (DNE)", venue: "Ministère de l’Éducation et de l’Enseignement supérieur, Liban.", url: "https://cutt.ly/4xEH6gi" },
    { year: 2015, type: "chapter", authors: "El-Khatib, W.", title: "Les écueils curriculaires et administratifs entravant l’implémentation d’une approche par compétences au Liban", venue: "In L’Approche par compétences dans les programmes libanais : quels enjeux et quels défis ? (pp. 85-208). Université de Balamand.", url: "" },
    { year: 2015, type: "other", authors: "El-Khatib, W.", title: "Introduction à la recherche-action", venue: "Liaisons, 60, 2-5.", url: "" },
    { year: 2015, type: "proceedings", authors: "Bagdady Adra, B., El-Khatib, W., & Sarraf, S.", title: "L’évaluation des compétences en langue française des élèves libanais au terme de la scolarité en éducation de base (EB9) : situation actuelle et perspectives d’avenir", venue: "Actes du 27e colloque international de l’ADMEE-Europe, Liège, 28-30 janvier 2015.", url: "https://orbi.uliege.be/bitstream/2268/192246/1/admee15_Actes_du_colloque4incp.pdf" },
    { year: 2014, type: "proceedings", authors: "El-Khatib, W.", title: "L’impact de l’inscription paradigmatique sur la culture de l’évaluation dans les programmes libanais", venue: "Actes du 26e colloque de l’ADMEE-Europe, Marrakech, 2014.", url: "http://admee2014.ma/images/actes/el-khatib-wassim-actes%202014.pdf" },
    { year: 2014, type: "chapter", authors: "El-Khatib, W.", title: "L’usage du portfolio", venue: "In Manuel de pédagogie universitaire (2013-2014). Université Saint-Joseph, Mission de pédagogie universitaire.", url: "http://www.mpu.usj.edu.lb/ressources/manuel_de_pedagogie_universitaire_V1/Manuel-D2.pdf" },
    { year: 2013, type: "other", authors: "El-Khatib, W.", title: "Évaluer en didactique des langues/cultures : continuités, tensions, ruptures (note de lecture)", venue: "Le français à l’université (Agence universitaire de la Francophonie), 18(3).", url: "http://www.bulletin.auf.org/index.php?id=1626" },
    { year: 2012, type: "article", authors: "El-Khatib, W.", title: "Les réformes des programmes de français selon la logique des compétences : enjeux, difficultés et implications", venue: "Le français à l’université (Agence universitaire de la Francophonie), 17(2).", url: "http://www.bulletin.auf.org/index.php?id=1229" },
    { year: 2009, type: "thesis", authors: "El-Khatib, W.", title: "Mise en place d’une approche par compétences en apprentissage de la langue française, dans le contexte libanais. Enjeux et difficultés", venue: "Thèse de doctorat, Université Aix-Marseille I. Préface de J.-C. Beacco. ANRT, Université Lille 3, 676 p. ISBN 9782729584733.", url: "http://www.diffusiontheses.fr/66339-these-de-el-khatib-wassim.html" },
    { year: 2008, type: "article", authors: "El-Khatib, W.", title: "La conception de la compétence dans le champ de l’éducation", venue: "Revue Pédagogique (CNRDP, Liban), 43, 19-23.", url: "http://www.crdp.org/fr/details-edumagazine/25273/9906" },
    { year: 2005, type: "article", authors: "El-Khatib, W.", title: "L’évaluation au service de l’apprenant et de l’apprentissage dans les programmes libanais", venue: "Revue Pédagogique (CNRDP, Liban), 33, 24-28.", url: "http://www.crdp.org/fr/details-edumagazine/6535/9665" },
    { year: 2000, type: "book", authors: "Chammas, M., El-Khatib, W., & Gharib, Y.", title: "Français Plus (méthode de français langue seconde)", venue: "Beyrouth : School Press.", url: "" }
  ],

  /* ---------- Communications et colloques ---------- */
  talks: [
    { year: 2025, title: "36e colloque de l’ADMEE-Europe — Paradoxes de l’innovation en évaluation au 21e siècle", place: { fr: "Université du Luxembourg", ar: "جامعة لوكسمبورغ" }, date: { fr: "8-10 janvier 2025", ar: "8-10 كانون الثاني 2025" } },
    { year: 2024, title: "35e colloque de l’ADMEE-Europe — L’évaluation face aux défis de la diversité et de l’inclusion : entre normes et différenciations", place: { fr: "Braga, Portugal", ar: "براغا، البرتغال" }, date: { fr: "24-26 janvier 2024", ar: "24-26 كانون الثاني 2024" } },
    { year: 2023, title: "34e colloque international de l’ADMEE-Europe — Évaluer les apprentissages : continuités et ruptures", place: { fr: "Mons, Belgique", ar: "مونس، بلجيكا" }, date: { fr: "3-5 avril 2023", ar: "3-5 نيسان 2023" } },
    { year: 2022, title: "33e colloque international de l’ADMEE-Europe — Pluralité de contextes, pluralité d’évaluations en éducation : quelles interactions et quels enjeux ?", place: { fr: "Guadeloupe, France", ar: "غوادلوب، فرنسا" }, date: { fr: "1-4 avril 2022", ar: "1-4 نيسان 2022" } },
    { year: 2021, title: "Colloque numérique de l’ADMEE-Europe — Le numérique et l’évaluation des apprentissages, de la menace à l’opportunité", place: { fr: "En ligne", ar: "عن بُعد" }, date: { fr: "30 mars - 1er avril 2021", ar: "30 آذار - 1 نيسان 2021" } },
    { year: 2021, title: "Colloque international — Les représentations métalinguistiques ordinaires et l’enseignement de la linguistique et de la grammaire (aux allophones)", place: { fr: "CY Cergy Paris Université (visioconférence)", ar: "جامعة CY سيرجي باريس (عن بُعد)" }, date: { fr: "11-12 mars 2021", ar: "11-12 آذار 2021" } },
    { year: 2018, title: "2e congrès international Méthodal — Méthodologie de l’apprentissage des langues : vers l’excellence pédagogique, didactique et linguistique", place: { fr: "Thessalonique, Grèce", ar: "سالونيك، اليونان" }, date: { fr: "2-5 septembre 2018", ar: "2-5 أيلول 2018" } },
    { year: 2018, title: "Les dimensions culturelles et interculturelles des enseignements/apprentissages des langues dans les contextes des pays francophones du monde arabe", place: { fr: "Beyrouth, Liban", ar: "بيروت، لبنان" }, date: { fr: "10 mai 2018", ar: "10 أيار 2018" } },
    { year: 2016, title: "1er congrès international Méthodal — Méthodologie de l’apprentissage des langues. Innover : pourquoi et comment ?", place: { fr: "Nicosie, Chypre", ar: "نيقوسيا، قبرص" }, date: { fr: "22-25 septembre 2016", ar: "22-25 أيلول 2016" } },
    { year: 2016, title: "28e colloque international de l’ADMEE-Europe — Évaluation et apprentissages", place: { fr: "Lisbonne, Portugal", ar: "لشبونة، البرتغال" }, date: { fr: "13-15 janvier 2016", ar: "13-15 كانون الثاني 2016" } },
    { year: 2015, title: "27e colloque international de l’ADMEE-Europe — L’évaluation à la lumière des contextes et des disciplines", place: { fr: "Liège, Belgique", ar: "لييج، بلجيكا" }, date: { fr: "28-30 janvier 2015", ar: "28-30 كانون الثاني 2015" } },
    { year: 2014, title: "26e colloque international de l’ADMEE-Europe — Cultures et politiques de l’évaluation en éducation et en formation", place: { fr: "Marrakech, Maroc", ar: "مراكش، المغرب" }, date: { fr: "15-17 janvier 2014", ar: "15-17 كانون الثاني 2014" } },
    { year: 2014, title: "Forum mondial HERACLES — Les centres universitaires de langues au Moyen-Orient : quelles missions pour quels objectifs ?", place: { fr: "Université Saint-Esprit de Kaslik (USEK), Liban", ar: "جامعة الروح القدس – الكسليك، لبنان" }, date: { fr: "12-13 juin 2014", ar: "12-13 حزيران 2014" } },
    { year: 2013, title: "L’approche par compétences dans les programmes libanais : quels enjeux et quels défis ?", place: { fr: "Université de Balamand, Liban", ar: "جامعة البلمند، لبنان" }, date: { fr: "15-16 mai 2013", ar: "15-16 أيار 2013" } }
  ],

  /* ---------- Enseignement ---------- */
  teaching: {
    intro: {
      fr: "Enseignement et encadrement de recherches à l’Université Libanaise (Faculté de Pédagogie) et, de 2009 à 2014, à l’Université Saint-Joseph, dans plusieurs cursus : diplôme universitaire en pédagogie universitaire, master recherche et professionnel, doctorat.",
      ar: "تدريس وإشراف على أبحاث في الجامعة اللبنانية (كلية التربية)، وفي جامعة القديس يوسف بين 2009 و2014، ضمن مسارات متعددة: دبلوم جامعي في البيداغوجيا الجامعية، وماستر بحثي ومهني، ودكتوراه."
    },
    courses: [
      { fr: "Évolution de la pensée pédagogique", ar: "تطوّر الفكر التربوي" },
      { fr: "Évaluation", ar: "التقويم" },
      { fr: "Curricula", ar: "المناهج" },
      { fr: "Sociologie de l’éducation", ar: "علم اجتماع التربية" },
      { fr: "Recherche documentaire", ar: "البحث الوثائقي" },
      { fr: "Enseignement du code de la langue", ar: "تعليم نظام اللغة" },
      { fr: "Théories psychologiques de l’apprentissage", ar: "نظريات التعلّم في علم النفس" },
      { fr: "Introduction à l’éducation", ar: "مدخل إلى التربية" },
      { fr: "Approche par compétences", ar: "المقاربة بالكفايات" },
      { fr: "Méthodologie de la recherche", ar: "منهجية البحث" }
    ],
    supervision: {
      fr: "Coordination du master Supervision pédagogique (2015-2017) ; direction de mémoires de master et encadrement de recherches.",
      ar: "تنسيق ماستر الإشراف التربوي (2015-2017)؛ توجيه مذكرات الماستر والإشراف على الأبحاث."
    }
  },

  /* ---------- Parcours ---------- */
  degrees: [
    { year: "2019", text: { fr: "Professeur (attestation n° 645/R du recteur de l’Université Libanaise, 17/04/2019)", ar: "رتبة أستاذ (بروفيسور) — إفادة رئيس الجامعة اللبنانية رقم 645/R بتاريخ 17/04/2019" } },
    { year: "2016", text: { fr: "Professeur associé (attestation n° 1214/R du recteur de l’Université Libanaise, 09/09/2016)", ar: "رتبة أستاذ مشارك — إفادة رئيس الجامعة اللبنانية رقم 1214/R بتاريخ 09/09/2016" } },
    { year: "2009", text: { fr: "Doctorat en Sciences de l’Éducation, Université Aix-Marseille I — mention très honorable avec félicitations du jury. Thèse : « Mise en place d’une approche par compétences en apprentissage de la langue française, dans le contexte libanais. Enjeux et difficultés » (dir. Jeanne Mallet).", ar: "دكتوراه في علوم التربية، جامعة إكس – مرسيليا الأولى — تقدير مشرّف جدًا مع تهنئة اللجنة. الأطروحة: «إرساء مقاربة بالكفايات في تعلّم اللغة الفرنسية في السياق اللبناني: الرهانات والصعوبات» (بإشراف جان مالي)." } },
    { year: "2002", text: { fr: "DEA en Sciences de l’Éducation, Université Aix-Marseille I (mention Bien). Mémoire : l’évaluation dans les nouveaux programmes au Liban, entre procédures de contrôle et évaluation au service de l’apprenant et de l’apprentissage.", ar: "دبلوم الدراسات المعمّقة في علوم التربية، جامعة إكس – مرسيليا الأولى (تقدير جيد). المذكرة: التقويم في المناهج الجديدة في لبنان بين إجراءات المراقبة والتقويم في خدمة المتعلّم والتعلّم." } },
    { year: "2001", text: { fr: "Mention FLE de la licence, Université de Caen Basse-Normandie (mention Bien)", ar: "إجازة مع اختصاص تعليم الفرنسية لغة أجنبية (FLE)، جامعة كان – النورماندي السفلى (تقدير جيد)" } },
    { year: "1999", text: { fr: "Licence d’enseignement ès lettres françaises, Université Libanaise", ar: "إجازة تعليمية في الآداب الفرنسية، الجامعة اللبنانية" } }
  ],

  positions: [
    {
      group: { fr: "Enseignement supérieur et recherche", ar: "التعليم العالي والبحث" },
      items: [
        { period: { fr: "2014 – présent", ar: "2014 – حتى اليوم" }, role: { fr: "Professeur titulaire en Sciences de l’Éducation", ar: "أستاذ متفرغ في علوم التربية" }, org: { fr: "Université Libanaise, Faculté de Pédagogie", ar: "الجامعة اللبنانية، كلية التربية" }, text: { fr: "Enseignement dans plusieurs cursus, recherche et encadrement de recherches ; coordination du master Supervision pédagogique (2015-2017).", ar: "تدريس في عدة مسارات، وبحث وإشراف على الأبحاث؛ تنسيق ماستر الإشراف التربوي (2015-2017)." } },
        { period: { fr: "2009 – 2014", ar: "2009 – 2014" }, role: { fr: "Professeur vacataire en Sciences de l’Éducation", ar: "أستاذ متعاقد في علوم التربية" }, org: { fr: "Université Libanaise ; Université Saint-Joseph", ar: "الجامعة اللبنانية؛ جامعة القديس يوسف" }, text: { fr: "Enseignement (diplôme universitaire en pédagogie universitaire, master, doctorat), élaboration de programmes et de référentiels de compétences, formation des enseignants ; délégué des enseignants.", ar: "تدريس (دبلوم البيداغوجيا الجامعية، ماستر، دكتوراه)، وإعداد برامج ومرجعيات كفايات، وتكوين المعلمين؛ مندوب الأساتذة." } }
      ]
    },
    {
      group: { fr: "Direction et gouvernance", ar: "الإدارة والحَوكمة" },
      items: [
        { period: { fr: "2017 – 2019", ar: "2017 – 2019" }, role: { fr: "Directeur de la Faculté de Pédagogie – Section 1", ar: "عميد كلية التربية – الفرع الأول" }, org: { fr: "Université Libanaise, Beyrouth", ar: "الجامعة اللبنانية، بيروت" }, text: { fr: "Missions pédagogiques, administratives et sociales ; enseignement et coordination.", ar: "مهام تربوية وإدارية واجتماعية؛ تدريس وتنسيق." } },
        { period: { fr: "2012 – 2014", ar: "2012 – 2014" }, role: { fr: "Secrétaire général du Dispositif National d’Évaluation", ar: "أمين عام المنظومة الوطنية للتقويم" }, org: { fr: "Ministère de l’Éducation et de l’Enseignement supérieur et Organisation internationale de la Francophonie (OIF)", ar: "وزارة التربية والتعليم العالي ومنظمة الفرنكوفونية الدولية" }, text: { fr: "Gestion administrative et enquêtes à l’échelle nationale.", ar: "إدارة إدارية وإجراء مسوح على المستوى الوطني." } },
        { period: { fr: "2001 – 2005", ar: "2001 – 2005" }, role: { fr: "Directeur d’une école à programmes français", ar: "مدير مدرسة تعتمد البرامج الفرنسية" }, org: { fr: "Shouf National College (section française), Baakline", ar: "كلية الشوف الوطنية (القسم الفرنسي)، بعقلين" }, text: { fr: "Mise en place des programmes français ; principale réalisation : homologation de l’école primaire et du collège après avis favorable de l’AEFE.", ar: "إرساء البرامج الفرنسية؛ أبرز الإنجازات: نيل معادلة المرحلة الابتدائية والمتوسطة بعد رأي إيجابي من وكالة التعليم الفرنسي في الخارج (AEFE)." } },
        { period: { fr: "1996 – 2001", ar: "1996 – 2001" }, role: { fr: "Directeur d’une école à programmes libanais", ar: "مدير مدرسة تعتمد البرامج اللبنانية" }, org: { fr: "École Irfan de Hasbaya (établissement de 5 antennes, plus de 3 000 élèves)", ar: "مدرسة عرفان – حاصبيا (مؤسسة من 5 فروع وأكثر من 3000 تلميذ)" }, text: { fr: "Gestion administrative et pédagogique, animation des équipes, coordination de l’enseignement du français dans l’ensemble des antennes ; taux de réussite élevés aux examens nationaux.", ar: "إدارة إدارية وتربوية، وتنشيط الفرق التربوية، وتنسيق تعليم الفرنسية في مختلف الفروع؛ نسب نجاح مرتفعة في الامتحانات الرسمية." } }
      ]
    },
    {
      group: { fr: "Curricula, référentiels et assurance qualité", ar: "المناهج والمرجعيات وضمان الجودة" },
      items: [
        { period: { fr: "2022 – 2026", ar: "2022 – 2026" }, role: { fr: "Élaboration du nouveau curriculum national libanais", ar: "إعداد المنهج الوطني اللبناني الجديد" }, org: { fr: "Centre de recherche et de développement pédagogiques (CRDP), Beyrouth", ar: "المركز التربوي للبحوث والإنماء، بيروت" }, text: { fr: "Membre de la commission de planification et de la commission de rédaction du Cadre du nouveau curriculum ; membre des commissions chargées des « papiers » sur l’approche par compétences et sur la politique de l’évaluation (deux des onze documents complétant le Cadre).", ar: "عضو في لجنة التخطيط ولجنة صياغة إطار المنهج الجديد؛ وعضو في لجنتَي إعداد الورقتين المتعلقتين بالمقاربة بالكفايات وبسياسة التقويم (من أصل إحدى عشرة ورقة تكمّل الإطار)." } },
        { period: { fr: "2023", ar: "2023" }, role: { fr: "Évaluation de programmes", ar: "تقويم البرامج" }, org: { fr: "Université Saint-Joseph, Beyrouth", ar: "جامعة القديس يوسف، بيروت" }, text: { fr: "Accompagnement des facultés pour la mise en place de l’évaluation des programmes, dans le cadre de l’assurance qualité et de l’accréditation.", ar: "مواكبة الكليات في إرساء تقويم البرامج ضمن مسار ضمان الجودة والاعتماد." } },
        { period: { fr: "2014", ar: "2014" }, role: { fr: "Élaboration de référentiels de compétences", ar: "إعداد مرجعيات الكفايات" }, org: { fr: "Université Saint-Joseph, Beyrouth", ar: "جامعة القديس يوسف، بيروت" }, text: { fr: "Accompagnement des facultés dans l’élaboration de référentiels fondés sur l’approche par compétences.", ar: "مواكبة الكليات في إعداد مرجعيات قائمة على المقاربة بالكفايات." } },
        { period: { fr: "1996 – 1997", ar: "1996 – 1997" }, role: { fr: "Élaboration des nouveaux curricula au Liban", ar: "إعداد المناهج اللبنانية الجديدة" }, org: { fr: "CRDP, Beyrouth", ar: "المركز التربوي للبحوث والإنماء، بيروت" }, text: { fr: "Membre des commissions chargées des curricula de français des cycles 2 et 3.", ar: "عضو في لجنتَي إعداد منهج اللغة الفرنسية للحلقتين الثانية والثالثة." } }
      ]
    },
    {
      group: { fr: "Numérique éducatif et formation", ar: "التقنيات الرقمية والتكوين" },
      items: [
        { period: { fr: "AUF – UL", ar: "AUF – الجامعة اللبنانية" }, role: { fr: "Référent numérique accrédité", ar: "مرجع رقمي معتمد" }, org: { fr: "Agence universitaire de la Francophonie et Université Libanaise", ar: "الوكالة الجامعية للفرنكوفونية والجامعة اللبنانية" }, text: { fr: "Animation de sessions de formation sur l’usage du numérique dans l’enseignement et l’évaluation, pour les enseignants de l’Université Libanaise (seule université publique du pays, plus de 80 000 étudiants et 5 000 professeurs).", ar: "تنشيط دورات تدريبية لأساتذة الجامعة اللبنانية (الجامعة الرسمية الوحيدة في البلد، وفيها أكثر من 80 ألف طالب و5000 أستاذ) حول توظيف التقنيات الرقمية في التعليم والتقويم." } },
        { period: { fr: "1996 – 2001", ar: "1996 – 2001" }, role: { fr: "Formateur des enseignants", ar: "مكوّن للمعلمين" }, org: { fr: "École Normale de Hasbaya", ar: "دار المعلمين – حاصبيا" }, text: { fr: "Formation initiale et continue des enseignants du secteur public ; accompagnement des stages sur le terrain.", ar: "تكوين أساسي ومستمر لمعلمي القطاع الرسمي؛ مواكبة التدريب الميداني." } }
      ]
    },
    {
      group: { fr: "Enseignement scolaire et français langue étrangère", ar: "التعليم المدرسي والفرنسية لغة أجنبية" },
      items: [
        { period: { fr: "2005 – 2014", ar: "2005 – 2014" }, role: { fr: "Professeur titulaire de français dans l’enseignement secondaire", ar: "أستاذ متفرغ للغة الفرنسية في التعليم الثانوي" }, org: { fr: "Ministère de l’Éducation et de l’Enseignement supérieur", ar: "وزارة التربية والتعليم العالي" }, text: { fr: "Enseignement du français comme langue seconde au collège et au lycée.", ar: "تعليم الفرنسية لغةً ثانية في المرحلتين المتوسطة والثانوية." } },
        { period: { fr: "1993 – 2005", ar: "1993 – 2005" }, role: { fr: "Professeur vacataire de français langue étrangère", ar: "أستاذ متعاقد للغة الفرنسية لغة أجنبية" }, org: { fr: "Mission culturelle française, Liban", ar: "البعثة الثقافية الفرنسية، لبنان" }, text: { fr: "Conception et enseignement de cours de FLE et de français de spécialité (FOS) pour adultes ; animation de sessions de formation pour enseignants de français et cadres administratifs des secteurs public et privé.", ar: "تصميم وتدريس دورات في الفرنسية لغة أجنبية وفي الفرنسية للأغراض المهنية (FOS) للراشدين؛ تنشيط دورات تدريبية لمعلمي الفرنسية وللإداريين في القطاعين الرسمي والخاص." } },
        { period: { fr: "1990 – 1996", ar: "1990 – 1996" }, role: { fr: "Professeur de français", ar: "أستاذ للغة الفرنسية" }, org: { fr: "École Irfan de Hasbaya", ar: "مدرسة عرفان – حاصبيا" }, text: { fr: "Enseignement du français aux niveaux primaire et intermédiaire ; coordination de l’enseignement du français dans l’école.", ar: "تدريس الفرنسية في المرحلتين الابتدائية والمتوسطة؛ تنسيق تعليم الفرنسية في المدرسة." } }
      ]
    }
  ],

  training: [
    { year: "2010", text: { fr: "CIEP (France) — Évaluation et certification (3 semaines)", ar: "CIEP (فرنسا) — التقويم والاعتماد (3 أسابيع)" } },
    { year: "2010", text: { fr: "CCIP (France) — Enseigner et évaluer le FOS (3 semaines)", ar: "CCIP (فرنسا) — تدريس وتقويم الفرنسية للأغراض المهنية FOS (3 أسابيع)" } },
    { year: "2004", text: { fr: "CIEP (France) — Projet d’établissement (1 mois)", ar: "CIEP (فرنسا) — المشروع المؤسسي (شهر)" } },
    { year: "2003", text: { fr: "CIEP (France) — Didactique du FLE, FLS, FOS (1 mois)", ar: "CIEP (فرنسا) — ديداكتيك FLE وFLS وFOS (شهر)" } },
    { year: "2002", text: { fr: "IUFM d’Aix-en-Provence (France) — Projet d’établissement (3 semaines)", ar: "IUFM إكس-أون-بروفانس (فرنسا) — المشروع المؤسسي (3 أسابيع)" } },
    { year: "2000", text: { fr: "IUFM d’Aix-en-Provence (France) — Apprentissage du français à l’oral et à l’écrit (1 mois)", ar: "IUFM إكس-أون-بروفانس (فرنسا) — تعلّم الفرنسية شفهيًا وكتابيًا (شهر)" } },
    { year: "1992-1993", text: { fr: "CIEP (France) — Didactique du FLS et du FLE (9 mois)", ar: "CIEP (فرنسا) — ديداكتيك الفرنسية لغةً ثانية وأجنبية (9 أشهر)" } },
    { year: "1990-1991", text: { fr: "IUFM de Douai et IUFM de Nancy (France) — Didactique du FLS et du FLE (1 mois chacun)", ar: "IUFM دواي وIUFM نانسي (فرنسا) — ديداكتيك الفرنسية لغةً ثانية وأجنبية (شهر لكل منهما)" } }
  ],

  /* ---------- Responsabilités et réseaux ---------- */
  roles: [
    {
      name: { fr: "ADMEE-Liban", ar: "ADMEE-لبنان" },
      text: { fr: "Premier délégué de la section libanaise de l’Association pour le Développement des Méthodologies d’Évaluation en Éducation (ADMEE-Europe), réseau francophone de recherche sur l’évaluation.", ar: "المندوب الأول للفرع اللبناني للجمعية من أجل تطوير منهجيات التقويم في التربية (ADMEE-Europe)، وهي شبكة ناطقة بالفرنسية للبحث في التقويم." },
      url: "https://www.admee.org"
    },
    {
      name: { fr: "Lebanese Association for Educational Studies (LAES)", ar: "الجمعية اللبنانية للدراسات التربوية (LAES)" },
      text: { fr: "Membre de l’association.", ar: "عضو في الجمعية." },
      url: ""
    },
    {
      name: { fr: "Centre de recherche et de développement pédagogiques (CRDP)", ar: "المركز التربوي للبحوث والإنماء (CRDP)" },
      text: { fr: "Participation aux commissions d’élaboration des curricula nationaux (1996-1997 ; 2022-2026).", ar: "المشاركة في لجان إعداد المناهج الوطنية (1996-1997؛ 2022-2026)." },
      url: ""
    }
  ],

  languages: {
    langs: {
      fr: "Arabe (langue maternelle) · Français (bilingue) · Anglais (niveau moyen)",
      ar: "العربية (لغة أم) · الفرنسية (ثنائي اللغة) · الإنجليزية (مستوى متوسط)"
    },
    tools: {
      fr: "Word, PowerPoint, Moodle, Google Classroom, Zoom.",
      ar: "Word وPowerPoint وMoodle وGoogle Classroom وZoom."
    }
  },

  /* ---------- Actualités (laissez vide [] pour masquer la section) ---------- */
  /* Exemple :
     { date: "2026-11-02", title: { fr: "Titre", ar: "العنوان" }, text: { fr: "…", ar: "…" } } */
  news: [
    { date: "2026-01", title: { fr: "Parution d’un chapitre sur quarante ans d’évolution de l’évaluation au Liban", ar: "صدور فصل حول أربعين عامًا من تطوّر التقويم في لبنان" }, text: { fr: "Avec Patricia Azoury, dans Évaluation en éducation et formation : Ancrages et perspectives (Les Presses de l’ADMEE).", ar: "بالاشتراك مع باتريسيا عزوري، في كتاب «التقويم في التربية والتكوين: ركائز وآفاق» (منشورات ADMEE)." } }
  ]
};
