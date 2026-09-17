export const siteConfig = {
  name: "Kalvotek",
  fullName: "Kalvotek",
  // Used for the static <meta> description only; visible UI copy is translated.
  tagline: "Auton kalvotus, ikkunakalvot, PPF ja ajovalojen huolto viileämpää ja terävämpää ajoa varten.",
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
  // TODO: replace with the real external booking system URL.
  reservationUrl: "https://booking.kalvotek.com/reserve",
} as const;

export type TintShade = {
  vlt: number;
  label: string;
  swatch: string;
};

// VLT (Visible Light Transmission) — lower % lets in less light and looks darker.
export const tintShades: TintShade[] = [
  { vlt: 5, label: "5%", swatch: "#0a0a0c" },
  { vlt: 10, label: "10%", swatch: "#151517" },
  { vlt: 15, label: "15%", swatch: "#232427" },
  { vlt: 25, label: "25%", swatch: "#3a3d43" },
  { vlt: 35, label: "35%", swatch: "#565b63" },
  { vlt: 50, label: "50%", swatch: "#7a808a" },
];
