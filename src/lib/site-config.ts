export const siteConfig = {
  name: "Kalvotek",
  fullName: "Kalvotek",
  tagline: "Car tinting, window film, PPF, and headlight care for a cooler, sharper ride.",
  // Verified against kalvotek.com.
  phone: "+358 44 210 2511",
  phoneHref: "tel:+358442102511",
  email: "kalvotek@gmail.com",
  // Finnish business ID (Y-tunnus), per Suomen Asiakastieto Oy's public register.
  businessId: "2481842-1",
  address: {
    line1: "Postitorvenkatu 30",
    line2: "",
    city: "Tampere",
    region: "Pirkanmaa",
    postalCode: "33840",
    country: "Finland",
    full: "Postitorvenkatu 30, 33840 Tampere, Finland",
    mapsQuery: "Postitorvenkatu+30+33840+Tampere+Finland",
  },
  hours: [
    { day: "Monday", hours: "9:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 5:00 PM" },
    { day: "Friday", hours: "9:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
  // TODO: replace with the real external booking system URL.
  reservationUrl: "https://booking.kalvotek.com/reserve",
} as const;

export type TintShade = {
  vlt: number;
  label: string;
  description: string;
  swatch: string;
};

// VLT (Visible Light Transmission) — lower % lets in less light and looks darker.
export const tintShades: TintShade[] = [
  {
    vlt: 5,
    label: "5%",
    description: "Limo dark. Near-blackout privacy, maximum heat and glare rejection.",
    swatch: "#0a0a0c",
  },
  {
    vlt: 10,
    label: "10%",
    description: "Very dark. A popular aggressive look with strong privacy.",
    swatch: "#151517",
  },
  {
    vlt: 15,
    label: "15%",
    description: "Dark. Noticeably tinted while still easy to see out of at night.",
    swatch: "#232427",
  },
  {
    vlt: 25,
    label: "25%",
    description: "Medium. A balanced factory-plus look, common on daily drivers.",
    swatch: "#3a3d43",
  },
  {
    vlt: 35,
    label: "35%",
    description: "Light-medium. Subtle shade that keeps interiors bright.",
    swatch: "#565b63",
  },
  {
    vlt: 50,
    label: "50%",
    description: "Light. A soft factory-style tint with mild heat rejection.",
    swatch: "#7a808a",
  },
];

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "car-window-tinting",
    name: "Car Window Tinting",
    shortDescription: "Precision-cut film in six shades, backed by a 5-year warranty.",
    description:
      "Premium American window film installed with a computer-plotted or hand cut for a flush, gap-free edge on every window. Choose from six shades, 5% to 50% VLT, and preview them on our 3D visualizer before you book.",
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
];

export type CarModelOption = {
  id: string;
  name: string;
  bodyType: string;
};

// Modeled on Volvo's current lineup as the visualizer's demo vehicle —
// pick whichever silhouette is closest to your own car's shape.
export const carModels: CarModelOption[] = [
  { id: "s60", name: "S60", bodyType: "Volvo sedan" },
  { id: "xc90", name: "XC90", bodyType: "Volvo 3-row SUV" },
  { id: "v60", name: "V60", bodyType: "Volvo wagon" },
  { id: "c40", name: "C40", bodyType: "Volvo coupe SUV" },
];

export type CarColorOption = {
  id: string;
  name: string;
  hex: string;
  metalness: number;
  roughness: number;
};

export const carColors: CarColorOption[] = [
  { id: "alpine-white", name: "Alpine White", hex: "#f2f3f5", metalness: 0.6, roughness: 0.25 },
  { id: "jet-black", name: "Jet Black", hex: "#131417", metalness: 0.7, roughness: 0.2 },
  { id: "silver", name: "Brilliant Silver", hex: "#c7cbd1", metalness: 0.8, roughness: 0.2 },
  { id: "gunmetal", name: "Gunmetal Grey", hex: "#4b4f57", metalness: 0.75, roughness: 0.25 },
  { id: "midnight-blue", name: "Midnight Blue", hex: "#132743", metalness: 0.6, roughness: 0.25 },
  { id: "crimson", name: "Crimson Red", hex: "#7a1420", metalness: 0.55, roughness: 0.3 },
  { id: "racing-green", name: "Racing Green", hex: "#12392b", metalness: 0.55, roughness: 0.3 },
  { id: "sunset-orange", name: "Sunset Orange", hex: "#c1531f", metalness: 0.5, roughness: 0.35 },
];

export const processSteps = [
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
];

export const totalProcessDuration = "About 2 hours for a standard 4-door vehicle (full car).";

export const nuances = [
  {
    title: "Curing takes days, not hours",
    body:
      "The film looks finished when you drive off, but it needs 3–7 days (longer in cold weather) to fully cure and bond to the glass. Small water haze or a few tiny bubbles during this window is normal and will clear on its own.",
  },
  {
    title: "Keep windows up and glass dry",
    body:
      "Leave windows rolled up for at least 3–4 days after install. Avoid washing the inside of tinted glass for a week, and skip pressure washers near the edges for a full month.",
  },
  {
    title: "Know your local VLT limit",
    body:
      "Most states and provinces set a minimum legal VLT% for front side windows. We'll flag if your requested shade is likely to fail a roadside inspection before we install anything.",
  },
  {
    title: "Factory tint changes your options",
    body:
      "Many newer vehicles come with a factory-tinted rear windshield. We factor that in when recommending a shade so the final look stays even front-to-back.",
  },
  {
    title: "Heat rejection isn't just about darkness",
    body:
      "Our ceramic and carbon film lines reject significant infrared heat even at lighter shades like 35% or 50% — you don't have to go dark to feel a real difference in cabin temperature.",
  },
  {
    title: "Warranty follows the film, not just the shade",
    body:
      "Every install is backed by a lifetime warranty against bubbling, peeling, and color shift, regardless of which of our six shades you choose.",
  },
];

export const faqs = [
  {
    question: "How long does a full tint job actually take?",
    answer:
      "Plan for about 2 hours for a standard 4-door sedan with all windows done. SUVs, trucks, and vehicles with complex curved glass can run a bit longer. We'll give you a time estimate when you book.",
  },
  {
    question: "What tint shades do you offer?",
    answer:
      "We install six shades: 5%, 10%, 15%, 25%, 35%, and 50% VLT. Use our 3D visualizer to preview each one on your vehicle's color and body style before you decide.",
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
      "Not with our film. Every installation includes a lifetime warranty covering bubbling, peeling, cracking, and color fade — the film we use is dyed and ceramic-infused, not the cheap dyed film that discolors in the sun.",
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
];

export const nearbyLandmarks = [
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
];
