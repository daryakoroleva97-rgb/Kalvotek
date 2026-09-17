export type Locale = "fi" | "en";

export const locales: Locale[] = ["fi", "en"];
export const defaultLocale: Locale = "fi";

type Highlight = { title: string; body: string };
type ServiceItem = { slug: string; name: string; shortDescription: string; description: string };
type FaqItem = { question: string; answer: string };
type HourEntry = { day: string; hours: string };
type Landmark = { name: string; distance: string; note: string };
type ProcessStep = { title: string; duration: string; description: string };
type Nuance = { title: string; body: string };

export type Translations = {
  nav: {
    home: string;
    services: string;
    tint: string;
    process: string;
    faq: string;
    location: string;
  };
  bookNow: string;
  footer: {
    tagline: string;
    explore: string;
    businessId: string;
    rightsReserved: (year: number, name: string) => string;
  };
  home: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaTint: string;
    photoLabel: string;
    photoCaption: string;
    openTool: string;
    highlights: Highlight[];
    beyondKicker: string;
    beyondTitle: string;
    viewAllServices: string;
    shadeKicker: string;
    shadeTitle: string;
    previewShades: string;
    vltLabel: string;
    expectKicker: string;
    expectTitle: string;
    expectBody1: string;
    expectBody2: string;
    seeFullProcess: string;
    photoCaptions: string[];
    faqKicker: string;
    faqTitle: string;
    faqBody: string;
    readFullFaq: string;
    findUsKicker: string;
    readyTitle: string;
    readyBody: string;
    hoursDirections: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    readyTitle: string;
    readyBody: string;
    items: ServiceItem[];
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    stillTitle: string;
    stillBody: string;
    items: FaqItem[];
  };
  location: {
    kicker: string;
    title: string;
    subtitle: string;
    hoursTitle: string;
    gettingHereTitle: string;
    gettingHereBody: string;
    getDirections: string;
    readyTitle: string;
    hours: HourEntry[];
    landmarks: Landmark[];
  };
  process: {
    kicker: string;
    title: string;
    stepByStep: string;
    nuancesTitle: string;
    nuancesBody: string;
    curiousTitle: string;
    curiousBody: string;
    openTintPreview: string;
    photoCaptions: string[];
    steps: ProcessStep[];
    nuances: Nuance[];
    totalDuration: string;
  };
  tint: {
    kicker: string;
    title: string;
    subtitle: string;
    likeTitle: string;
    likeBody: string;
    carColor: string;
    sideGlassTint: string;
    rearGlassTint: string;
    colorNames: string[];
    glassLabels: string[];
    altText: (color: string) => string;
  };
};

const en: Translations = {
  nav: {
    home: "Home",
    services: "Services",
    tint: "Tint Preview",
    process: "The Process",
    faq: "FAQ",
    location: "Location & Hours",
  },
  bookNow: "Book Now",
  footer: {
    tagline: "Car tinting, window film, PPF, and headlight care for a cooler, sharper ride.",
    explore: "Explore",
    businessId: "Business ID (Y-tunnus):",
    rightsReserved: (year, name) => `© ${year} ${name}. All rights reserved.`,
  },
  home: {
    kicker: "Tampere's window tint specialists",
    title: "A cooler, sharper, more private ride — in about 2 hours.",
    subtitle:
      "Kalvotek installs precision-cut window film in six shades, from a light factory-style 70% down to a limo-dark 5%. Preview every shade before you commit, then book your install online.",
    ctaTint: "Try the Tint Preview",
    photoLabel: "Tint preview",
    photoCaption: "Pick a color & glass tint",
    openTool: "Open tool →",
    highlights: [
      {
        title: "6 precision shades",
        body: "From a subtle 70% to a limo-dark 5%, preview and choose exactly how dark you want to go.",
      },
      {
        title: "~2 hour install",
        body: "A standard full-car install takes about two hours, start to finish, while you wait or run errands nearby.",
      },
      {
        title: "5-year warranty",
        body: "Every install is backed by a 5-year warranty against bubbling, peeling, and color shift.",
      },
    ],
    beyondKicker: "What we do",
    beyondTitle: "Beyond window tint",
    viewAllServices: "View all services",
    shadeKicker: "Shade lineup",
    shadeTitle: "Six shades to choose from",
    previewShades: "Preview shades",
    vltLabel: "VLT",
    expectKicker: "What to expect",
    expectTitle: "The install process, start to finish",
    expectBody1: "About 2 hours for a standard 4-door vehicle (full car).",
    expectBody2:
      "From wash and inspection to the final quality check under bright light, we walk you through every step — plus the curing rules that keep your warranty valid.",
    seeFullProcess: "See the full process",
    photoCaptions: [
      "Precision film cutting",
      "Squeegee application",
      "Finished side window",
      "Quality check under light",
    ],
    faqKicker: "FAQ",
    faqTitle: "Common questions",
    faqBody: "Legal limits, curing time, warranty details — get quick answers before you book.",
    readFullFaq: "Read the full FAQ",
    findUsKicker: "Find us",
    readyTitle: "Ready to book?",
    readyBody: "Reserve your slot online — most full-car installs take about 2 hours.",
    hoursDirections: "Hours & directions",
  },
  services: {
    kicker: "Services",
    title: "Everything we offer",
    subtitle: "From window tint to full paint protection, here's the full lineup.",
    readyTitle: "Ready to book?",
    readyBody: "Reserve a slot online for any of the services above.",
    items: [
      {
        slug: "car-window-tinting",
        name: "Car Window Tinting",
        shortDescription: "Precision-cut film in six shades, backed by a 5-year warranty.",
        description:
          "Premium American window film installed with a computer-plotted or hand cut for a flush, gap-free edge on every window. Choose from six shades, 5% to 70% VLT, and preview them on our tint tool before you book.",
      },
      {
        slug: "residential-window-film",
        name: "Property Window Film",
        shortDescription: "Sun and privacy film for homes, cabins, and businesses.",
        description:
          "The same heat- and glare-rejecting film technology applied to home, cabin, and commercial windows — cuts sun damage and cooling costs while adding privacy, without losing natural light.",
      },
      {
        slug: "headlight-restoration",
        name: "Headlight Polishing & Restoration",
        shortDescription: "Clear up yellowed, foggy headlights and restore full brightness.",
        description:
          "Oxidized, cloudy headlight lenses are wet-sanded and polished back to clarity, restoring both looks and nighttime visibility.",
      },
      {
        slug: "paint-protection-film",
        name: "Paint Protection Film (PPF)",
        shortDescription: "A near-invisible shield against chips, scratches, and road grime.",
        description:
          "Self-healing PPF applied to high-impact panels (or the full vehicle) protects your paint from rock chips, minor scratches, and road debris while staying virtually invisible.",
      },
      {
        slug: "chrome-delete",
        name: "Chrome Trim Wrapping (Chrome Delete)",
        shortDescription: "Wrap factory chrome trim in a matte or gloss black finish.",
        description:
          "Factory chrome trim — window surrounds, grilles, badges — is wrapped in a durable matte or gloss black vinyl for a cleaner, blacked-out look without permanently modifying the trim.",
      },
      {
        slug: "headlight-tinting",
        name: "Headlight Tinting",
        shortDescription: "Smoked or colored film for headlights and taillights.",
        description:
          "A tinted film layer applied over headlight or taillight lenses for a smoked, custom look, installed to stay street-legal for on-road use.",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Frequently asked questions",
    subtitle:
      "Can't find what you're looking for? Give us a call — we're happy to walk through your specific vehicle and local tint laws.",
    stillTitle: "Still have questions?",
    stillBody: "Book a slot and ask us in person, or preview shades first.",
    items: [
      {
        question: "How long does a full tint job actually take?",
        answer:
          "Plan for about 2 hours for a standard 4-door sedan with all windows done. SUVs, trucks, and vehicles with complex curved glass can run a bit longer. We'll give you a time estimate when you book.",
      },
      {
        question: "What tint shades do you offer?",
        answer:
          "We install six shades: 5%, 15%, 20%, 35%, 50%, and 70% VLT. Use our tint preview tool to see each one before you decide.",
      },
      {
        question: "Which shade is legal for my car?",
        answer:
          "Legal limits vary by state/province and by window (front side windows are usually more restricted than rear and rear windshield). Tell us your plate's state when you book and we'll recommend shades that stay street-legal.",
      },
      {
        question: "How soon can I wash my car after tinting?",
        answer:
          "Wait at least 3–4 days before rolling windows down, and avoid cleaning the inside of the glass for about a week while the film cures. A full exterior wash is fine after 48 hours as long as you avoid the edges directly.",
      },
      {
        question: "Will tint bubble, peel, or turn purple over time?",
        answer:
          "Not with our film. Every installation includes a 5-year warranty covering bubbling, peeling, cracking, and color fade — the film we use is dyed and ceramic-infused, not the cheap dyed film that discolors in the sun.",
      },
      {
        question: "Can you remove old or failing tint before installing new film?",
        answer:
          "Yes. Tint removal is available as an add-on and is recommended if your current film is bubbling, purple, or peeling at the edges before we lay new film.",
      },
      {
        question: "Do you tint the windshield?",
        answer:
          "We offer a clear ceramic windshield film for heat rejection without darkening, plus a tinted sun-strip along the top. Full dark windshield tint is restricted in most areas, so we'll walk you through legal options.",
      },
      {
        question: "How do I book an appointment?",
        answer:
          "Use the Book Now button anywhere on the site — it takes you to our online reservation system where you can pick a date, time, and service.",
      },
    ],
  },
  location: {
    kicker: "Visit Us",
    title: "Location & opening hours",
    subtitle: "Easy to find, easy to reach on foot for errands while we work on your car.",
    hoursTitle: "Opening hours",
    gettingHereTitle: "Getting here",
    gettingHereBody: "We're easy to spot and even easier to kill time near while your car is in the bay:",
    getDirections: "Get directions",
    readyTitle: "Ready to book?",
    hours: [
      { day: "Monday", hours: "9:00 AM – 5:00 PM" },
      { day: "Tuesday", hours: "9:00 AM – 5:00 PM" },
      { day: "Wednesday", hours: "9:00 AM – 5:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 5:00 PM" },
      { day: "Friday", hours: "9:00 AM – 5:00 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
    landmarks: [
      {
        name: "ABC Gas Station",
        distance: "0.2 mi",
        note: "Right next door — fill up while you wait, or right before you drop off.",
      },
      {
        name: "IKEA Riverton",
        distance: "0.4 mi",
        note: "A comfortable 8-minute walk. Great for browsing or grabbing a bite while we work on your car.",
      },
    ],
  },
  process: {
    kicker: "The Process",
    title: "What actually happens during a tint install",
    stepByStep: "Step by step",
    nuancesTitle: "Nuances worth knowing",
    nuancesBody:
      "Tint looks finished the moment you drive off, but a few details make the difference between a clean, long-lasting install and one that fails early.",
    curiousTitle: "Curious how a shade will look first?",
    curiousBody: "Try our tint preview, then book your ~2 hour install online.",
    openTintPreview: "Open tint preview",
    photoCaptions: [
      "Vehicle wash & inspection",
      "Computer-plotted film cut",
      "Squeegee & heat shaping",
      "Final quality check",
    ],
    totalDuration: "About 2 hours for a standard 4-door vehicle (full car).",
    steps: [
      {
        title: "Book & consult",
        duration: "5–10 min",
        description:
          "Reserve a slot online, then tell us your vehicle, the look you want, and any local tint-law limits you need to stay within. We'll recommend a shade from our lineup.",
      },
      {
        title: "Wash & inspect",
        duration: "10–15 min",
        description:
          "Every window is cleaned inside and out and checked for existing scratches, chips, or old tint that needs stripping before film goes on.",
      },
      {
        title: "Precision cut",
        duration: "15–20 min",
        description:
          "Film is computer-plotted or hand-cut to the exact curve of each window, so it sits flush against the glass edge with no gaps.",
      },
      {
        title: "Application",
        duration: "45–60 min",
        description:
          "Windows are cleaned again, slip solution applied, and the film is set, squeegeed, and heat-shaped into the glass with zero bubbles or lifted corners.",
      },
      {
        title: "Cure & quality check",
        duration: "10–15 min",
        description:
          "We do a final inspection under bright light for dust, bubbles, or edge lift, then walk you through curing care before handing back your keys.",
      },
    ],
    nuances: [
      {
        title: "Curing takes days, not hours",
        body: "The film looks finished when you drive off, but it needs 3–7 days (longer in cold weather) to fully cure and bond to the glass. Small water haze or a few tiny bubbles during this window is normal and will clear on its own.",
      },
      {
        title: "Keep windows up and glass dry",
        body: "Leave windows rolled up for at least 3–4 days after install. Avoid washing the inside of tinted glass for a week, and skip pressure washers near the edges for a full month.",
      },
      {
        title: "Know your local VLT limit",
        body: "Most states and provinces set a minimum legal VLT% for front side windows. We'll flag if your requested shade is likely to fail a roadside inspection before we install anything.",
      },
      {
        title: "Factory tint changes your options",
        body: "Many newer vehicles come with a factory-tinted rear windshield. We factor that in when recommending a shade so the final look stays even front-to-back.",
      },
      {
        title: "Heat rejection isn't just about darkness",
        body: "Our ceramic and carbon film lines reject significant infrared heat even at lighter shades like 35% or 50% — you don't have to go dark to feel a real difference in cabin temperature.",
      },
      {
        title: "Warranty follows the film, not just the shade",
        body: "Every install is backed by a 5-year warranty against bubbling, peeling, and color shift, regardless of which of our six shades you choose.",
      },
    ],
  },
  tint: {
    kicker: "Tint Preview",
    title: "Choose tinting options",
    subtitle:
      "The original kalvotek.com tint preview tool, carried over as-is: pick a car color, then a side and rear glass tint to see them layered on the photo.",
    likeTitle: "Like what you see?",
    likeBody: "Book your install and we'll match this exact shade.",
    carColor: "Car color",
    sideGlassTint: "Side glass tint",
    rearGlassTint: "Rear glass tint",
    colorNames: ["White", "Silver", "Crimson Red", "Green", "Navy Blue", "Anthracite", "Black"],
    glassLabels: ["No tint", "70%", "50%", "35%", "20%", "15%", "5%"],
    altText: (color) => `Volvo S60, ${color}`,
  },
};

const fi: Translations = {
  nav: {
    home: "Etusivu",
    services: "Palvelut",
    tint: "Kalvon esikatselu",
    process: "Prosessi",
    faq: "UKK",
    location: "Sijainti ja aukioloajat",
  },
  bookNow: "Varaa aika",
  footer: {
    tagline: "Auton kalvotus, ikkunakalvot, PPF ja ajovalojen huolto viileämpää ja terävämpää ajoa varten.",
    explore: "Valikko",
    businessId: "Y-tunnus:",
    rightsReserved: (year, name) => `© ${year} ${name}. Kaikki oikeudet pidätetään.`,
  },
  home: {
    kicker: "Tampereen ikkunakalvoasiantuntija",
    title: "Viileämpi, terävämpi ja yksityisempi ajokokemus — noin 2 tunnissa.",
    subtitle:
      "Kalvotek asentaa tarkasti leikatun ikkunakalvon kuudessa sävyssä, vaalean tehdastyylisestä 70 %:sta limusiinin tummaan 5 %:iin. Esikatsele jokainen sävy ennen päätöstä ja varaa asennus verkossa.",
    ctaTint: "Kokeile kalvon esikatselua",
    photoLabel: "Kalvon esikatselu",
    photoCaption: "Valitse väri ja kalvon sävy",
    openTool: "Avaa työkalu →",
    highlights: [
      {
        title: "6 tarkkaa sävyä",
        body: "Aina hienovaraisesta 70 %:sta limusiinin tummaan 5 %:iin — esikatsele ja valitse juuri sopiva tummuus.",
      },
      {
        title: "~2 tunnin asennus",
        body: "Tavallinen koko auton asennus kestää alusta loppuun noin kaksi tuntia — odota paikan päällä tai hoida asioita lähistöllä.",
      },
      {
        title: "5 vuoden takuu",
        body: "Jokainen asennus on suojattu 5 vuoden takuulla kuplimista, irtoamista ja värimuutosta vastaan.",
      },
    ],
    beyondKicker: "Mitä teemme",
    beyondTitle: "Muutakin kuin ikkunakalvoja",
    viewAllServices: "Katso kaikki palvelut",
    shadeKicker: "Sävyvalikoima",
    shadeTitle: "Kuusi sävyä valittavana",
    previewShades: "Esikatsele sävyjä",
    vltLabel: "VLT",
    expectKicker: "Mitä odottaa",
    expectTitle: "Asennusprosessi alusta loppuun",
    expectBody1: "Noin 2 tuntia tavalliselle nelioviselle autolle (koko auto).",
    expectBody2:
      "Pesusta ja tarkastuksesta viimeiseen laaduntarkastukseen kirkkaassa valossa — käymme kanssasi läpi jokaisen vaiheen sekä kuivumisajan säännöt, jotka pitävät takuusi voimassa.",
    seeFullProcess: "Katso koko prosessi",
    photoCaptions: [
      "Tarkka kalvon leikkuu",
      "Levityslasta työssä",
      "Valmis sivuikkuna",
      "Laaduntarkastus valossa",
    ],
    faqKicker: "UKK",
    faqTitle: "Yleisiä kysymyksiä",
    faqBody: "Lain sallimat rajat, kuivumisaika, takuun tiedot — nopeat vastaukset ennen varausta.",
    readFullFaq: "Lue koko UKK",
    findUsKicker: "Löydä meidät",
    readyTitle: "Valmis varaamaan?",
    readyBody: "Varaa aikasi verkossa — useimmat koko auton asennukset kestävät noin 2 tuntia.",
    hoursDirections: "Aukioloajat ja reittiohjeet",
  },
  services: {
    kicker: "Palvelut",
    title: "Kaikki palvelumme",
    subtitle: "Ikkunakalvoista täydelliseen maalinsuojaukseen — tässä koko valikoima.",
    readyTitle: "Valmis varaamaan?",
    readyBody: "Varaa aika verkossa mille tahansa yllä olevista palveluista.",
    items: [
      {
        slug: "car-window-tinting",
        name: "Auton ikkunakalvotus",
        shortDescription: "Tarkasti leikattu kalvo kuudessa sävyssä, 5 vuoden takuulla.",
        description:
          "Laadukas amerikkalainen ikkunakalvo asennetaan tietokoneohjatusti tai käsin leikaten, jolloin reuna istuu tiiviisti jokaiseen ikkunaan. Valitse kuudesta sävystä, 5–70 % VLT, ja esikatsele niitä kalvotyökalullamme ennen varausta.",
      },
      {
        slug: "residential-window-film",
        name: "Kiinteistöjen ikkunakalvot",
        shortDescription: "Aurinko- ja suojakalvo koteihin, mökkeihin ja yrityksiin.",
        description:
          "Sama lämpöä ja häikäisyä torjuva kalvoteknologia asennettuna koti-, mökki- ja liikeikkunoihin — vähentää auringon aiheuttamia vaurioita ja jäähdytyskustannuksia sekä lisää yksityisyyttä luonnonvaloa menettämättä.",
      },
      {
        slug: "headlight-restoration",
        name: "Ajovalojen kiillotus ja kunnostus",
        shortDescription: "Kirkasta kellastuneet, sameat ajovalot ja palauta täysi valoteho.",
        description:
          "Hapettuneet, sameat ajovalojen lasit hiotaan märkähionnalla ja kiillotetaan kirkkaiksi, mikä palauttaa sekä ulkonäön että näkyvyyden pimeällä.",
      },
      {
        slug: "paint-protection-film",
        name: "Maalipinnan suojakalvo (PPF)",
        shortDescription: "Lähes näkymätön suoja sirpaleita, naarmuja ja tienpölyä vastaan.",
        description:
          "Itsestään korjautuva PPF-kalvo asennetaan alttiimpiin osiin tai koko autoon ja suojaa maalipintaa kivensiruilta, pieniltä naarmuilta ja tienroskilta pysyen silti lähes näkymättömänä.",
      },
      {
        slug: "chrome-delete",
        name: "Kromilistojen teippaus (Chrome Delete)",
        shortDescription: "Peitä tehtaan kromilistat mattamustalla tai kiiltävällä pinnalla.",
        description:
          "Tehtaan kromilistat — ikkunanreunukset, säleiköt, merkit — teipataan kestävällä matta- tai kiiltomustalla vinyylillä siistimmän, mustatun ilmeen saamiseksi listoja pysyvästi muuttamatta.",
      },
      {
        slug: "headlight-tinting",
        name: "Ajovalojen tummennus",
        shortDescription: "Savutettu tai värillinen kalvo ajo- ja takavaloihin.",
        description:
          "Tummennettu kalvokerros asennetaan ajo- tai takavalojen laseille savutetun, yksilöllisen ilmeen saamiseksi — asennus tehdään tieliikennekelpoisena pysyen.",
      },
    ],
  },
  faq: {
    kicker: "UKK",
    title: "Usein kysytyt kysymykset",
    subtitle:
      "Etkö löytänyt etsimääsi? Soita meille — kerromme mielellämme lisää juuri sinun autostasi ja paikallisista kalvotuslaeista.",
    stillTitle: "Onko sinulla vielä kysyttävää?",
    stillBody: "Varaa aika ja kysy meiltä paikan päällä, tai esikatsele sävyt ensin.",
    items: [
      {
        question: "Kuinka kauan koko auton kalvotus oikeasti kestää?",
        answer:
          "Varaudu noin 2 tuntiin tavallisella neliovisella sedanilla, kun kaikki ikkunat kalvotetaan. Katumaasturit, pakettiautot ja mutkikkaan lasimuodon ajoneuvot voivat viedä hieman kauemmin. Annamme arvion kestosta varauksen yhteydessä.",
      },
      {
        question: "Mitä kalvosävyjä tarjoatte?",
        answer:
          "Asennamme kuutta sävyä: 5, 15, 20, 35, 50 ja 70 % VLT. Käytä kalvon esikatselutyökaluamme nähdäksesi jokaisen ennen päätöstä.",
      },
      {
        question: "Mikä sävy on lain mukaan sallittu autooni?",
        answer:
          "Sallitut rajat vaihtelevat alueen ja ikkunan mukaan (etusivuikkunat ovat yleensä tiukemmin rajoitettuja kuin taka- ja takalasi). Kerro meille rekisteröintialueesi varauksen yhteydessä, niin suosittelemme lain mukaan sallittuja sävyjä.",
      },
      {
        question: "Kuinka pian voin pestä autoni kalvotuksen jälkeen?",
        answer:
          "Odota vähintään 3–4 päivää ennen ikkunoiden avaamista, ja vältä lasien sisäpuolen puhdistusta noin viikon ajan kalvon kuivuessa. Koko auton ulkopesu onnistuu 48 tunnin jälkeen, kunhan vältät reunojen suoraa pesua.",
      },
      {
        question: "Kuplivatko, irtoavatko tai muuttuvatko kalvot violeteiksi ajan myötä?",
        answer:
          "Ei meidän kalvomme kanssa. Jokainen asennus sisältää 5 vuoden takuun kuplimista, irtoamista, halkeilua ja värin haalistumista vastaan — käyttämämme kalvo on värjätty ja keraamipitoinen, ei halpaa värjättyä kalvoa, joka haalistuu auringossa.",
      },
      {
        question: "Voitteko poistaa vanhan tai huonokuntoisen kalvon ennen uuden asennusta?",
        answer:
          "Kyllä. Kalvon poisto on saatavilla lisäpalveluna, ja sitä suositellaan, jos nykyinen kalvosi kuplii, on muuttunut violetiksi tai irtoaa reunoista ennen uuden kalvon asennusta.",
      },
      {
        question: "Kalvotatteko tuulilasin?",
        answer:
          "Tarjoamme kirkkaan keraamisen tuulilasikalvon, joka torjuu lämpöä tummentamatta lasia, sekä tummennetun aurinkosuikaleen yläreunaan. Täysin tumma tuulilasikalvo on useimmilla alueilla kiellettyä, joten käymme kanssasi läpi lain sallimat vaihtoehdot.",
      },
      {
        question: "Miten varaan ajan?",
        answer:
          "Käytä Varaa aika -painiketta missä tahansa sivustolla — se vie sinut verkkovarausjärjestelmäämme, jossa voit valita päivän, ajan ja palvelun.",
      },
    ],
  },
  location: {
    kicker: "Käy luonamme",
    title: "Sijainti ja aukioloajat",
    subtitle: "Helppo löytää ja kätevä hoitaa asioita kävellen, kun autosi on meillä huollossa.",
    hoursTitle: "Aukioloajat",
    gettingHereTitle: "Näin löydät meille",
    gettingHereBody: "Meidät on helppo löytää, ja lähistöllä on vielä helpompi kuluttaa aikaa autosi ollessa huollossa:",
    getDirections: "Näytä reitti",
    readyTitle: "Valmis varaamaan?",
    hours: [
      { day: "Maanantai", hours: "9.00–17.00" },
      { day: "Tiistai", hours: "9.00–17.00" },
      { day: "Keskiviikko", hours: "9.00–17.00" },
      { day: "Torstai", hours: "9.00–17.00" },
      { day: "Perjantai", hours: "9.00–17.00" },
      { day: "Lauantai", hours: "Suljettu" },
      { day: "Sunnuntai", hours: "Suljettu" },
    ],
    landmarks: [
      {
        name: "ABC-huoltoasema",
        distance: "0,3 km",
        note: "Aivan vieressä — täytä tankki odottaessasi tai juuri ennen kuin jätät auton.",
      },
      {
        name: "IKEA Riverton",
        distance: "0,6 km",
        note: "Mukava 8 minuutin kävelymatka. Hyvä paikka katsella tai syödä välipalaa, kun autosi on huollossa.",
      },
    ],
  },
  process: {
    kicker: "Prosessi",
    title: "Mitä kalvotusasennuksessa oikeasti tapahtuu",
    stepByStep: "Vaihe vaiheelta",
    nuancesTitle: "Yksityiskohtia, jotka kannattaa tietää",
    nuancesBody:
      "Kalvotus näyttää valmiilta heti kun ajat pois, mutta muutama yksityiskohta ratkaisee, kestääkö asennus pitkään vai pettääkö se ennenaikaisesti.",
    curiousTitle: "Haluatko nähdä miltä sävy näyttää ensin?",
    curiousBody: "Kokeile kalvon esikatselua ja varaa sitten noin 2 tunnin asennuksesi verkossa.",
    openTintPreview: "Avaa kalvon esikatselu",
    photoCaptions: [
      "Auton pesu ja tarkastus",
      "Tietokoneohjattu kalvon leikkuu",
      "Levitys ja lämpömuotoilu",
      "Lopullinen laaduntarkastus",
    ],
    totalDuration: "Noin 2 tuntia tavalliselle nelioviselle autolle (koko auto).",
    steps: [
      {
        title: "Varaus ja konsultaatio",
        duration: "5–10 min",
        description:
          "Varaa aika verkossa ja kerro meille autostasi, haluamastasi ilmeestä sekä paikallisista kalvotuslain rajoista. Suosittelemme sopivan sävyn valikoimastamme.",
      },
      {
        title: "Pesu ja tarkastus",
        duration: "10–15 min",
        description:
          "Jokainen ikkuna pestään sisä- ja ulkopuolelta ja tarkastetaan naarmujen, sirpaleiden tai poistettavan vanhan kalvon varalta ennen uuden kalvon asennusta.",
      },
      {
        title: "Tarkka leikkuu",
        duration: "15–20 min",
        description:
          "Kalvo leikataan tietokoneohjatusti tai käsin jokaisen ikkunan muodon mukaan, jotta se istuu tiiviisti lasin reunaan ilman rakoja.",
      },
      {
        title: "Asennus",
        duration: "45–60 min",
        description:
          "Ikkunat puhdistetaan uudelleen, liuosta levitetään ja kalvo asetetaan, levitetään lastalla ja muotoillaan lämmöllä lasiin ilman kuplia tai irtoavia kulmia.",
      },
      {
        title: "Kuivuminen ja laaduntarkastus",
        duration: "10–15 min",
        description:
          "Teemme lopullisen tarkastuksen kirkkaassa valossa pölyn, kuplien tai reunojen irtoamisen varalta ja käymme kanssasi läpi kuivumisajan hoito-ohjeet ennen avainten luovutusta.",
      },
    ],
    nuances: [
      {
        title: "Kuivuminen kestää päiviä, ei tunteja",
        body: "Kalvo näyttää valmiilta heti ajaessasi pois, mutta se tarvitsee 3–7 päivää (kylmällä säällä kauemmin) kuivuakseen ja kiinnittyäkseen täysin lasiin. Pieni vesisumu tai muutama pieni kupla tänä aikana on normaalia ja häviää itsestään.",
      },
      {
        title: "Pidä ikkunat kiinni ja lasi kuivana",
        body: "Pidä ikkunat kiinni vähintään 3–4 päivää asennuksen jälkeen. Vältä kalvotetun lasin sisäpuolen pesua viikon ajan ja painepesuria reunojen lähellä koko kuukauden ajan.",
      },
      {
        title: "Tunne paikallinen VLT-raja",
        body: "Useimmilla alueilla on vähimmäis-VLT-raja etusivuikkunoille. Kerromme, jos toivomasi sävy todennäköisesti ei läpäise tienvarsitarkastusta, ennen kuin asennamme mitään.",
      },
      {
        title: "Tehdaskalvo vaikuttaa vaihtoehtoihisi",
        body: "Monissa uudemmissa autoissa on valmiiksi tummennettu takalasi. Otamme tämän huomioon sävyä suositellessamme, jotta lopputulos näyttää tasaiselta edestä taakse.",
      },
      {
        title: "Lämmöntorjunta ei riipu vain tummuudesta",
        body: "Keraami- ja hiilikalvomallistomme torjuvat merkittävästi infrapunalämpöä myös vaaleammissa sävyissä, kuten 35 % tai 50 % — sinun ei tarvitse valita tummaa sävyä huomataksesi todellisen eron sisälämpötilassa.",
      },
      {
        title: "Takuu koskee kalvoa, ei vain sävyä",
        body: "Jokaisen asennuksen takana on 5 vuoden takuu kuplimista, irtoamista ja värimuutosta vastaan, riippumatta siitä, minkä kuudesta sävystämme valitset.",
      },
    ],
  },
  tint: {
    kicker: "Kalvon esikatselu",
    title: "Valitse kalvotusasetukset",
    subtitle:
      "Alkuperäinen kalvotek.comin esikatselutyökalu sellaisenaan: valitse auton väri ja sen jälkeen sivu- ja takalasin tummuus nähdäksesi ne kuvan päällä.",
    likeTitle: "Pidätkö näkemästäsi?",
    likeBody: "Varaa asennuksesi, niin toteutamme juuri tämän sävyn.",
    carColor: "Auton väri",
    sideGlassTint: "Sivulasin tummuus",
    rearGlassTint: "Takalasin tummuus",
    colorNames: ["Valkoinen", "Hopea", "Tulipunainen", "Vihreä", "Laivastonsininen", "Antrasiitti", "Musta"],
    glassLabels: ["Ei kalvoa", "70 %", "50 %", "35 %", "20 %", "15 %", "5 %"],
    altText: (color) => `Volvo S60, ${color}`,
  },
};

export const translations: Record<Locale, Translations> = { en, fi };
