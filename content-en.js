/* ==========================================================================
   VERSION ANGLAISE du contenu (English version of content.js).
   Chaque ligne ajoute la traduction anglaise d'un texte de content.js.
   Si une traduction manque, le site affiche le français.
   ========================================================================== */
(function () {
  var S = window.SITE;
  function en(o, s) { o.en = s; }

  /* ---------- Interface ---------- */
  S.ui.en = {
    skip: "Skip to content",
    nav: { about: "About", research: "Research", publications: "Publications", talks: "Conferences", teaching: "Teaching", career: "Career", roles: "Networks", news: "News", contact: "Contact" },
    switchLabel: "Switch language",
    ctaPubs: "View publications",
    ctaContact: "Get in touch",
    about: "About",
    research: "Research and expertise",
    publications: "Publications",
    pubSearch: "Search publications…",
    pubAll: "All",
    pubCount: function (n) { return n + " publication" + (n > 1 ? "s" : ""); },
    pubNone: "No publication matches your search.",
    openLink: "Read",
    talks: "Conference papers",
    teaching: "Teaching and supervision",
    teachingCourses: "Courses taught",
    career: "Career",
    degrees: "Degrees and academic rank",
    positions: "Positions and experience",
    training: "Professional training",
    roles: "Responsibilities and networks",
    languages: "Languages and tools",
    news: "News",
    contact: "Contact",
    contactText: "For collaboration, conference invitations or questions about my work, feel free to write to me.",
    write: "Send an email",
    present: "present",
    cl: { pro: "Work email", perso: "Personal email", landline: "Landline", mobile: "Mobile", postal: "Postal address", show: "Show" },
    updated: "Site updated in November 2026",
    profiles: "Academic profiles",
    types: {
      article: "Journal articles",
      chapter: "Book chapters",
      book: "Books and textbooks",
      proceedings: "Conference proceedings",
      report: "Reports and guides",
      thesis: "Thesis",
      other: "Other writings"
    }
  };

  /* ---------- Identité ---------- */
  var P = S.person;
  en(P.name, "Wassim El-Khatib");
  en(P.title, "Full Professor of Education Sciences");
  en(P.affiliation, "Lebanese University — Faculty of Education");
  en(P.tagline, "Curricula and competency frameworks · Assessment · Teacher education");
  en(P.location, "Beiteddine, Lebanon");

  S.about.en = [
    "I am a Full Professor of Education Sciences at the Lebanese University (Faculty of Education). My work focuses on the design of curricula and competency frameworks, on assessment (of learning, programmes and teaching) and on teacher education.",
    "I hold a PhD in Education Sciences from Aix-Marseille I University (2009, highest honours with the jury’s congratulations); my thesis dealt with the implementation of a competency-based approach to French language learning in Lebanon. I was Dean of the Faculty of Education – Branch 1 (2017-2019), Secretary General of the National Assessment System (2012-2014), and took part in drafting the new Lebanese national curriculum (2022-2026).",
    "I am the first delegate of ADMEE-Lebanon, the Lebanese section of the Association for the Development of Assessment Methodologies in Education."
  ];

  /* ---------- Recherche ---------- */
  var R = S.research;
  en(R[0].title, "Curricula and the competency-based approach");
  en(R[0].text, "Design of curricula, frameworks and competency standards; curricular and administrative conditions for implementing a competency-based approach; integration of 21st-century skills into programmes and learning units.");
  en(R[1].title, "Assessment in education");
  en(R[1].text, "Assessment cultures and policies; assessment of learning, language competencies, programmes and teaching in higher education; quality assurance and accreditation.");
  en(R[2].title, "Teacher education and university pedagogy");
  en(R[2].text, "Portfolios, action research and professional dissertations; pedagogical supervision; professional development of higher-education teachers.");
  en(R[3].title, "French language teaching (FSL, FFL) and educational technology");
  en(R[3].text, "Teaching French as a second and foreign language, the action-oriented approach, French grammar for Arabic speakers; use of digital technology in teaching and assessment.");

  /* ---------- Communications ---------- */
  var T = S.talks;
  var tl = [
    ["Université du Luxembourg", "University of Luxembourg", "8-10 January 2025"],
    ["Braga, Portugal", "Braga, Portugal", "24-26 January 2024"],
    ["Mons, Belgique", "Mons, Belgium", "3-5 April 2023"],
    ["Guadeloupe, France", "Guadeloupe, France", "1-4 April 2022"],
    ["En ligne", "Online", "30 March - 1 April 2021"],
    ["CY Cergy Paris Université (visioconférence)", "CY Cergy Paris University (videoconference)", "11-12 March 2021"],
    ["Thessalonique, Grèce", "Thessaloniki, Greece", "2-5 September 2018"],
    ["Beyrouth, Liban", "Beirut, Lebanon", "10 May 2018"],
    ["Nicosie, Chypre", "Nicosia, Cyprus", "22-25 September 2016"],
    ["Lisbonne, Portugal", "Lisbon, Portugal", "13-15 January 2016"],
    ["Liège, Belgique", "Liège, Belgium", "28-30 January 2015"],
    ["Marrakech, Maroc", "Marrakech, Morocco", "15-17 January 2014"],
    ["Université Saint-Esprit de Kaslik (USEK), Liban", "Holy Spirit University of Kaslik (USEK), Lebanon", "12-13 June 2014"],
    ["Université de Balamand, Liban", "University of Balamand, Lebanon", "15-16 May 2013"]
  ];
  tl.forEach(function (x, i) {
    if (T[i]) { en(T[i].place, x[1]); en(T[i].date, x[2]); }
  });

  /* ---------- Enseignement ---------- */
  var TE = S.teaching;
  en(TE.intro, "Teaching and research supervision at the Lebanese University (Faculty of Education) and, from 2009 to 2014, at Saint-Joseph University, across several programmes: university diploma in higher-education pedagogy, research and professional master’s, doctorate.");
  var courses = ["Evolution of educational thought", "Assessment", "Curricula", "Sociology of education", "Documentary research", "Teaching the language code", "Psychological theories of learning", "Introduction to education", "Competency-based approach", "Research methodology"];
  courses.forEach(function (c, i) { en(TE.courses[i], c); });
  en(TE.supervision, "Coordinator of the master’s in Pedagogical Supervision (2015-2017); supervision of master’s dissertations and research.");

  /* ---------- Parcours : titres ---------- */
  var D = S.degrees;
  en(D[0].text, "Professor (certificate no. 645/R from the President of the Lebanese University, 17/04/2019)");
  en(D[1].text, "Associate Professor (certificate no. 1214/R from the President of the Lebanese University, 09/09/2016)");
  en(D[2].text, "PhD in Education Sciences, Aix-Marseille I University — highest honours with the jury’s congratulations. Thesis: “Implementing a competency-based approach to French language learning in the Lebanese context: stakes and difficulties” (supervisor: Jeanne Mallet).");
  en(D[3].text, "DEA (postgraduate diploma) in Education Sciences, Aix-Marseille I University (Good). Dissertation: assessment in the new Lebanese programmes, between control procedures and assessment serving the learner and learning.");
  en(D[4].text, "French as a Foreign Language (FFL) specialisation of the bachelor’s degree, University of Caen Normandy (Good)");
  en(D[5].text, "Teaching bachelor’s degree in French Literature, Lebanese University");

  /* ---------- Parcours : fonctions ---------- */
  var G = S.positions;
  en(G[0].group, "Higher education and research");
  en(G[0].items[0].period, "2014 – present");
  en(G[0].items[0].role, "Full Professor of Education Sciences");
  en(G[0].items[0].org, "Lebanese University, Faculty of Education");
  en(G[0].items[0].text, "Teaching in several programmes, research and research supervision; coordinator of the master’s in Pedagogical Supervision (2015-2017).");
  en(G[0].items[1].period, "2009 – 2014");
  en(G[0].items[1].role, "Part-time Professor of Education Sciences");
  en(G[0].items[1].org, "Lebanese University; Saint-Joseph University");
  en(G[0].items[1].text, "Teaching (university diploma in higher-education pedagogy, master’s, doctorate), design of programmes and competency frameworks, teacher training; faculty representative.");

  en(G[1].group, "Leadership and governance");
  en(G[1].items[0].period, "2017 – 2019");
  en(G[1].items[0].role, "Dean of the Faculty of Education – Branch 1");
  en(G[1].items[0].org, "Lebanese University, Beirut");
  en(G[1].items[0].text, "Pedagogical, administrative and social duties; teaching and coordination.");
  en(G[1].items[1].period, "2012 – 2014");
  en(G[1].items[1].role, "Secretary General of the National Assessment System");
  en(G[1].items[1].org, "Ministry of Education and Higher Education and International Organisation of La Francophonie (OIF)");
  en(G[1].items[1].text, "Administrative management and national-scale surveys.");
  en(G[1].items[2].period, "2001 – 2005");
  en(G[1].items[2].role, "Head of a school following the French curriculum");
  en(G[1].items[2].org, "Shouf National College (French section), Baakline");
  en(G[1].items[2].text, "Implementation of the French programmes; main achievement: official recognition of the primary school and lower secondary school following a favourable opinion from the AEFE (Agency for French Education Abroad).");
  en(G[1].items[3].period, "1996 – 2001");
  en(G[1].items[3].role, "Head of a school following the Lebanese curriculum");
  en(G[1].items[3].org, "Irfan School, Hasbaya (a school of 5 branches and over 3,000 pupils)");
  en(G[1].items[3].text, "Administrative and pedagogical management, leadership of teaching teams, coordination of French teaching across all branches; high pass rates in national examinations.");

  en(G[2].group, "Curricula, competency frameworks and quality assurance");
  en(G[2].items[0].period, "2022 – 2026");
  en(G[2].items[0].role, "Design of the new Lebanese national curriculum");
  en(G[2].items[0].org, "Centre for Educational Research and Development (CERD), Beirut");
  en(G[2].items[0].text, "Member of the planning committee and of the committee drafting the new Curriculum Framework; member of the committees writing the papers on the competency-based approach and on assessment policy (two of the eleven documents supplementing the Framework).");
  en(G[2].items[1].period, "2023");
  en(G[2].items[1].role, "Programme evaluation");
  en(G[2].items[1].org, "Saint-Joseph University, Beirut");
  en(G[2].items[1].text, "Coaching faculties in setting up programme evaluation, as part of quality assurance and accreditation.");
  en(G[2].items[2].period, "2014");
  en(G[2].items[2].role, "Development of competency frameworks");
  en(G[2].items[2].org, "Saint-Joseph University, Beirut");
  en(G[2].items[2].text, "Coaching faculties in developing frameworks based on the competency-based approach.");
  en(G[2].items[3].period, "1996 – 1997");
  en(G[2].items[3].role, "Design of the new curricula in Lebanon");
  en(G[2].items[3].org, "CERD, Beirut");
  en(G[2].items[3].text, "Member of the committees in charge of the French curricula for Cycles 2 and 3.");

  en(G[3].group, "Educational technology and training");
  en(G[3].items[0].period, "AUF – LU");
  en(G[3].items[0].role, "Accredited digital referent");
  en(G[3].items[0].org, "Agence universitaire de la Francophonie and Lebanese University");
  en(G[3].items[0].text, "Leading training sessions on the use of digital technology in teaching and assessment for Lebanese University teachers (the country’s only public university, with over 80,000 students and 5,000 professors).");
  en(G[3].items[1].period, "1996 – 2001");
  en(G[3].items[1].role, "Teacher trainer");
  en(G[3].items[1].org, "Teacher Training College of Hasbaya");
  en(G[3].items[1].text, "Initial and in-service training of public-sector teachers; supervision of field placements.");

  en(G[4].group, "School teaching and French as a foreign language");
  en(G[4].items[0].period, "2005 – 2014");
  en(G[4].items[0].role, "Permanent teacher of French in secondary education");
  en(G[4].items[0].org, "Ministry of Education and Higher Education");
  en(G[4].items[0].text, "Teaching French as a second language in lower and upper secondary school.");
  en(G[4].items[1].period, "1993 – 2005");
  en(G[4].items[1].role, "Part-time teacher of French as a foreign language");
  en(G[4].items[1].org, "French Cultural Mission, Lebanon");
  en(G[4].items[1].text, "Design and teaching of FFL and French for specific purposes (FOS) courses for adults; training sessions for French teachers and administrative staff in the public and private sectors.");
  en(G[4].items[2].period, "1990 – 1996");
  en(G[4].items[2].role, "French teacher");
  en(G[4].items[2].org, "Irfan School, Hasbaya");
  en(G[4].items[2].text, "Teaching French in primary and intermediate grades; coordination of French teaching in the school.");

  /* ---------- Formations ---------- */
  var tr = [
    "CIEP (France) — Assessment and certification (3 weeks)",
    "CCIP (France) — Teaching and assessing FOS (3 weeks)",
    "CIEP (France) — School development plan (1 month)",
    "CIEP (France) — Teaching methodology for FFL, FSL, FOS (1 month)",
    "IUFM Aix-en-Provence (France) — School development plan (3 weeks)",
    "IUFM Aix-en-Provence (France) — Teaching spoken and written French (1 month)",
    "CIEP (France) — Teaching methodology for FSL and FFL (9 months)",
    "IUFM Douai and IUFM Nancy (France) — Teaching methodology for FSL and FFL (1 month each)"
  ];
  tr.forEach(function (x, i) { en(S.training[i].text, x); });

  /* ---------- Réseaux ---------- */
  var RO = S.roles;
  en(RO[0].name, "ADMEE-Lebanon");
  en(RO[0].text, "First delegate of the Lebanese section of the Association for the Development of Assessment Methodologies in Education (ADMEE-Europe), a francophone research network on assessment.");
  en(RO[1].name, "Lebanese Association for Educational Studies (LAES)");
  en(RO[1].text, "Member of the association.");
  en(RO[2].name, "Centre for Educational Research and Development (CERD)");
  en(RO[2].text, "Participation in national curriculum design committees (1996-1997; 2022-2026).");

  en(S.languages.langs, "Arabic (native) · French (bilingual) · English (intermediate)");
  en(S.languages.tools, "Word, PowerPoint, Moodle, Google Classroom, Zoom.");

  /* ---------- Actualités ---------- */
  if (S.news && S.news[0]) {
    en(S.news[0].title, "Chapter published on forty years of assessment in Lebanon");
    en(S.news[0].text, "Co-authored with Patricia Azoury, in Évaluation en éducation et formation : Ancrages et perspectives (Les Presses de l’ADMEE).");
  }
})();
