export interface City {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  vibe: string[];
  stats: {
    cost: number; // 1-5 ($)
    safety: number; // 1-5 (Shields)
    temp: string; // e.g., "Hot", "Mild"
    population: string;
    internet: string; // e.g. "Fiber"
  };
  details: {
    rent: string;
    commute: string;
    hospital: string;
  };
}

export const cities: City[] = [
  {
    slug: "mexicali",
    name: "Mexicali",
    tagline: "The Strategic Commuter Hub",
    description: "The capital of Baja California and the safest border city. Ideal for veterans and remote workers who need daily access to the US (Calexico).",
    image: "https://images.unsplash.com/photo-1565678822567-28d8495c2560?auto=format&fit=crop&q=80", // Placeholder
    vibe: ["Urban", "Desert", "Medical"],
    stats: {
      cost: 1,
      safety: 5,
      temp: "Hot",
      population: "1.1M",
      internet: "Fiber (Infinitum)",
    },
    details: {
      rent: "$800 - $1,200",
      commute: "15 mins (Sentri)",
      hospital: "Almater (Mayo Clinic Network)",
    },
  },
  {
    slug: "rosarito",
    name: "Rosarito",
    tagline: "The Weekend Escape",
    description: "A beachside community just 30 minutes from San Diego. Famous for lobster, surfing, and a large expat community.",
    image: "https://images.unsplash.com/photo-1549646698-1d2a420b9e8d?auto=format&fit=crop&q=80",
    vibe: ["Beach", "Party", "Relaxed"],
    stats: {
      cost: 3,
      safety: 4,
      temp: "Mild",
      population: "70k",
      internet: "Starlink",
    },
    details: {
      rent: "$1,500 - $2,500",
      commute: "45 mins",
      hospital: "Red Cross / TJ General",
    },
  },
  {
    slug: "ensenada",
    name: "Ensenada",
    tagline: "The Napa of Mexico",
    description: "Home to the Valle de Guadalupe wine country and a deep-water port. A foodie paradise with a cooler climate.",
    image: "https://images.unsplash.com/photo-1599596397262-c0e633d7d748?auto=format&fit=crop&q=80",
    vibe: ["Wine", "Foodie", "Port"],
    stats: {
      cost: 2,
      safety: 5,
      temp: "Cool",
      population: "450k",
      internet: "Fiber (Totalplay)",
    },
    details: {
      rent: "$1,000 - $1,800",
      commute: "90 mins",
      hospital: "UNIME",
    },
  },
  {
    slug: "san-miguel",
    name: "San Miguel de Allende",
    tagline: "The Cultural Crown Jewel",
    description: "A UNESCO World Heritage site in the central highlands. Cobblestone streets, baroque architecture, and zero humidity.",
    image: "https://images.unsplash.com/photo-1579166820546-a4c3f59247f1?auto=format&fit=crop&q=80",
    vibe: ["Colonial", "Arts", "Retiree"],
    stats: {
      cost: 4,
      safety: 5,
      temp: "Spring",
      population: "170k",
      internet: "Fiber (Megacable)",
    },
    details: {
      rent: "$2,000 - $4,000",
      commute: "N/A (Fly from BJX)",
      hospital: "H+ San Miguel",
    },
  },
];
