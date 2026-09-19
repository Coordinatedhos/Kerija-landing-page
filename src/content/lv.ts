/**
 * Latvian — the site's default language, served at `/lv`, and the shape every
 * other language file has to match (`Copy` in ./index.ts is `typeof lv`, so a
 * missing or misspelled key in `en.ts` is a type error).
 *
 * Only words live here. Photo paths and crops are in ./site.ts; the alt text
 * for each of those photos is the `alts` block in each section.
 */
export const lv = {
  /** Shown in the language switcher, in its own language. */
  languageName: "Latviešu",

  meta: {
    title: "Bloom Studio | Rokdarbu radošās darbnīcas",
    description:
      "Radošās darbnīcas ikvienam notikumam — dzimšanas dienām, bērnu ballītēm, vecmeitu ballītēm, pilsētas svētkiem, korporatīvajiem pasākumiem un privātām svinībām.",
  },

  brand: {
    tagline: "Rokdarbu radošās darbnīcas",
  },

  marquee: {
    // Alternates "RADĪSIM" and "VEIDOSIM" exactly as the mockup alternates
    // "CREATE" and "DESIGN".
    phrases: [
      "REZERVĀCIJAS 2026. GADAM",
      "RADĪSIM KOPĀ",
      "REZERVĀCIJAS 2026. GADAM",
      "RADĪSIM KOPĀ",
      "REZERVĀCIJAS 2026. GADAM",
      "RADĪSIM KOPĀ",
      "REZERVĀCIJAS 2026. GADAM",
      "VEIDOSIM KOPĀ",
      "REZERVĀCIJAS 2026. GADAM",
      "VEIDOSIM KOPĀ",
    ],
  },

  masthead: {
    leftQuestion: "Vajag radošu pieskārienu tavam pasākumam?",
    // The double space is the mockup's, and the line is set `whitespace-pre`.
    leftLink: "APSKATI  DARBNĪCU PIEDĀVĀJUMU",
    rightQuestion: "Plāno saliedēšanās pasākumu vai svinības?",
    rightNote: "SALIEDĒ SAVUS CILVĒKUS AR RADOŠUMU.",
  },

  /** Read out by screen readers, never shown on the page. */
  a11y: {
    menu: "Izvēlne",
    language: "Valoda",
  },

  nav: {
    home: "SĀKUMS",
    about: "PAR MUMS",
    workshops: "DARBNĪCAS",
    contacts: "KONTAKTI",
    events: "PASĀKUMI",
    reserve: "REZERVĒ TAGAD",
  },

  hero: {
    heading: "KUR ZIED RADOŠUMS?",
    body: "Radošās darbnīcas ikvienam notikumam. No dzimšanas dienām un bērnu ballītēm līdz vecmeitu ballītēm, pilsētas svētkiem, korporatīvajiem pasākumiem un privātām svinībām — mēs atvedam radošumu tieši uz tavu pasākumu. Katra darbnīca tiek rūpīgi pielāgota taviem viesiem, radot jautru un neaizmirstamu pieredzi, kurā ikviens var izveidot kaut ko ar savām rokām.",
    cta: "REZERVĒ SAVU AKTIVITĀTI",
    alts: {
      photo:
        "Ar rokām apgleznoti māla puķupodi ar ziediem, ķiršiem un meža durvīm, apkārt krāsas un otas",
    },
  },

  about: {
    heading: "Par Bloom Studio",
    body: [
      "Bloom Studio tic, ka radošums saved cilvēkus kopā. Mēs veidojam praktiskas radošās darbnīcas dzimšanas dienām, bērnu ballītēm, vecmeitu ballītēm, korporatīvajiem pasākumiem, festivāliem un privātām svinībām.",
      "Katra darbnīca tiek rūpīgi pielāgota tavam pasākumam, radot īpašu un neaizmirstamu pieredzi ikvienam viesim. Mākslinieciskas priekšzināšanas nav vajadzīgas — pietiek ar ziņkāri un prieku radīt kaut ko ar savām rokām.",
      "Mēs nodrošinām materiālus, padomu un iedvesmu, lai ikviens varētu izbaudīt radošo procesu un paņemt mājās pašu rokām darinātu darbu, kas piepildīts ar atmiņām.",
    ],
  },

  workshops: {
    heading: "PIELĀGOTS TIEŠI TAVAM PASĀKUMAM",
    body: [
      "Radošās darbnīcas ikvienam vecumam un notikumam, pielāgotas tavam pasākumam un viesiem.",
      "Darini pats savus darbus — no aprocēm, auskariem, svecēm un atslēgu piekariņiem līdz personalizētiem pilsētas foto magnētiem un citām idejām.",
      "Mākslinieciskas priekšzināšanas nav vajadzīgas — ņem līdzi radošumu un izbaudi kaut kā unikāla tapšanu.",
    ],
    alts: {
      fan: "Viese apglezno smalkus ziedus uz saliekamā vēdekļa",
      glasses:
        "Ar rokām apgleznotas glāzes ar ziediem, zemenēm un citroniem, turētas pret zāli",
      keychainChild:
        "Bērns tur koka atslēgu piekariņu, uz kura uzgleznota tulpe un saule",
      keychainOwl:
        "Ar akmentiņiem rotāts pūces atslēgu piekariņš uz atvērtas plaukstas",
    },
  },

  howItWorks: {
    heading: "KĀ TAS NOTIEK",
    steps: [
      {
        title: "Pastāsti par savu pasākumu",
        body: "Katrs pasākums ir citāds, tāpēc katru darbnīcu veidojam īpaši tev.",
      },
      {
        title: "Mēs pielāgojam darbnīcu",
        body: "Ņemot vērā pasākumu, vecuma grupu, viesu skaitu un vēlmes, ieteiksim piemērotāko radošo aktivitāti.",
      },
      {
        title: "Saņem individuālu piedāvājumu",
        body: "Kad zināsim pasākuma detaļas, sagatavosim tev individuālu piedāvājumu ar darbnīcu, materiāliem, ilgumu un cenu.",
      },
      {
        title: "Apstiprini rezervāciju",
        body: "Patīk ideja? Vienkārši apstiprini piedāvājumu, un mēs parūpēsimies par sagatavošanos.",
      },
      {
        title: "Radi un izbaudi",
        body: "Mēs atvedam visu darbnīcai nepieciešamo. Viesi var atpūsties, radīt, izklaidēties un paņemt mājās pašu darinātu darbu.",
      },
    ],
  },

  eventsWeDo: {
    heading: "PASĀKUMI, KUROS PIEDALĀMIES",
    body: [
      "Lai ko tu svinētu, izveidosim radošu darbnīcu, kas iederas tavā pasākumā, atbilst viesiem un tavai iecerei.",
      "No nelielām dzimšanas dienas svinībām līdz komandas pasākumiem un neaizmirstamām vecmeitu ballītēm — Bloom Studio saved cilvēkus kopā ar radošumu.",
    ],
    /** Far too long for one line, so the strip scrolls through the whole list. */
    types: [
      "Dzimšanas dienas ballītes",
      "Bērnu ballītes",
      "Bērnu svētki",
      "Topošās līgavas svinības",
      "Vecmeitu ballītes",
      "Korporatīvie pasākumi",
      "Saliedēšanās pasākumi",
      "Festivāli",
      "Skolu pasākumi",
      "Sezonas pasākumi",
      "Mazuļa gaidīšanas svinības",
      "Radošās darbnīcas",
      "Īpaši pasākumi un aktivācijas",
      "Pasākumi pēc pasūtījuma",
    ],
    alts: {
      photo:
        "Viesi apglezno puķupodus un mielojas uz pikniku segām parkā zem kokiem",
    },
  },

  personalised: {
    heading: "KATRS PASĀKUMS IR CITĀDS.",
    subheading: "Kāpēc lai darbnīca būtu viena un tā pati?",
    body: "Katru pieredzi pielāgojam tavam pasākumam, viesu skaitam, vecuma grupai, norises vietai un vēlmēm.",
    alts: {
      brushes:
        "Roku aplis, kas paceļ bambusa matu sukas, apgleznotas ar ziediem, vārdiem un mežģīņu bantēm",
      children:
        "Bērni pie āra galda rotā koka atslēgu piekariņus ar krāsu marķieriem",
      supplies:
        "Akrila krāsu marķieru komplekti un kaste ar krellēm, lentēm un rotu detaļām uz darbnīcas galda",
    },
    consider: {
      heading: "KO MĒS ŅEMAM VĒRĀ",
      items: [
        {
          // No emoji on this one, as the mockup has it.
          label: "Viesu skaits",
          body: "Neliels pulciņš vai liela grupa — darbnīcu pielāgojam tavai grupai.",
        },
        {
          icon: "🎨",
          label: "Pasākuma veids",
          body: "Bērniem, pieaugušajiem, korporatīvs, privāts vai kas pavisam īpašs.",
        },
        {
          icon: "✨",
          label: "Tavas vēlmes",
          body: "Izvēlies aktivitāti, tēmu un krāsas vai ļauj mums ieteikt savu ideju.",
        },
        {
          icon: "📍",
          label: "Vieta un iekārtojums",
          body: "Pārrunāsim telpu, iekārtojumu un praktiskās detaļas tavam pasākumam.",
        },
      ],
    },
  },

  plan: {
    // Split so the second half can be set in script, as the reference does.
    lead: "Ieplāno savu",
    accent: "radošo pieredzi",
    body: "Izvēlies sev piemērotu datumu.",
    cta: "REZERVĒ SAVU AKTIVITĀTI",
    alts: {
      photo:
        "Ar rokām apgleznoti saliekamie vēdekļi uz galda ar krāsu zīmuļu kastītēm, akvareļu paletēm un otām",
      inset: "Koka atslēgu piekariņš ar apgleznotu zaķi",
    },
  },

  footer: {
    menuHeading: "Izvēlne",
    note: "Saliedē savus cilvēkus ar radošumu.",
    cta: "REZERVĒ SAVU AKTIVITĀTI",
  },
};

/**
 * The shape of a language file, taken from the Latvian one because it is the
 * default: whatever is written here is what every other language has to supply.
 */
export type Copy = typeof lv;
