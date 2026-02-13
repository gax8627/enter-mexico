export interface City {
  slug: string;
  name: string;
  tagline: string;
  type: string;
  description: string;
  image: string;
  vibe: string[];
  tags: string[];
  stats: {
    cost: number;
    safety: number;
    temp: string;
    population: string;
    internet: string;
    proximity: string;
  };
  costBreakdown: {
    rent: string;
    dining: string;
    transport: string;
    total: string;
  };
  details: {
    rent: string;
    commute: string;
    hospital: string;
  };
}

export const cities: City[] = [
  {
    name: "Mexicali",
    slug: "mexicali",
    tagline: "The Strategic Gateway",
    image: "https://images.unsplash.com/photo-1594895646153-659f63566f12?auto=format&fit=crop&q=80&w=1000",
    description: "The strategic gateway for remote workers and biotech professionals. High internet speeds and zero commute to the US border.",
    vibe: ["Strategic", "Urban", "Tech-Hub"],
    type: "hub",
    stats: { cost: 2, safety: 4, temp: "Hot", internet: "Fiber", population: "1.1M", proximity: "0 mins" },
    tags: ["High Speed Internet", "US Proximity", "Border Lifestyle"],
    costBreakdown: { rent: "$800", dining: "$400", transport: "$100", total: "$1,300" },
    details: { rent: "$800", commute: "5 mins", hospital: "Almater" }
  },
  {
    name: "Rosarito",
    slug: "rosarito",
    tagline: "The Beachfront Escape",
    image: "https://images.unsplash.com/photo-1512813195386-6cf81d50e411?auto=format&fit=crop&q=80&w=1000",
    description: "Ocean breezes and luxury beachfront living just 25 minutes from San Diego.",
    vibe: ["Coastal", "Relaxed", "Expat-Friendly"],
    type: "hub",
    stats: { cost: 3, safety: 3, temp: "Mild", internet: "Cable", population: "70k", proximity: "25 mins" },
    tags: ["Beachfront", "English-Spoken", "Weekend Getaway"],
    costBreakdown: { rent: "$1,400", dining: "$600", transport: "$150", total: "$2,150" },
    details: { rent: "$1,500 - $2,500", commute: "30 mins", hospital: "Red Cross" }
  },
  {
    name: "Merida",
    slug: "merida",
    tagline: "The Safest City in Mexico",
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf47ce7?auto=format&fit=crop&q=80&w=1000",
    description: "The safest city in Mexico. A colonial masterpiece with high-end medical facilities.",
    vibe: ["Colonial", "Safe", "Cultural"],
    type: "hub",
    stats: { cost: 3, safety: 5, temp: "Tropical", internet: "Fiber", population: "900k", proximity: "N/A" },
    tags: ["Extremely Safe", "Colonial Charm", "Medical Excellence"],
    costBreakdown: { rent: "$1,100", dining: "$500", transport: "$120", total: "$1,720" },
    details: { rent: "$1,000 - $1,800", commute: "N/A", hospital: "Star Medica" }
  },
  {
    name: "San Miguel de Allende",
    slug: "san-miguel-de-allende",
    tagline: "The Highland Jewel",
    image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&q=80&w=1000",
    description: "The crown jewel of the highlands. A world-class arts scene and vibrant expat community.",
    vibe: ["Artistic", "Boutique", "Historic"],
    type: "city",
    stats: { cost: 4, safety: 4, temp: "Spring", internet: "Fiber", population: "170k", proximity: "N/A" },
    tags: ["Art Galleries", "UNESCO Site", "Luxury Dining"],
    costBreakdown: { rent: "$2,000", dining: "$900", transport: "$300", total: "$3,200" },
    details: { rent: "$2,000 - $4,000", commute: "N/A", hospital: "H+" }
  },
  {
    name: "Ajijic",
    slug: "ajijic",
    tagline: "Lakefront Serenity",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=1000",
    description: "Ajijic is a sanctuary for retirees and remote workers, offering the world's most stable microclimate. Located on the northern shore of Lake Chapala, it provides a high-quality lifestyle with an established English-speaking social infrastructure.",
    vibe: ["Peaceful", "Community-Focused", "Lakeside"],
    type: "city",
    stats: { cost: 3, safety: 4, temp: "Spring", internet: "Cable", population: "15k", proximity: "45 mins to GDL" },
    tags: ["Retirement Haven", "English Everywhere", "Village Vibe"],
    costBreakdown: { rent: "$1,200", dining: "$500", transport: "$100", total: "$1,800" },
    details: { rent: "$1,000 - $2,500", commute: "45 mins", hospital: "San Antonio" }
  },
  {
    name: "Puerto Vallarta",
    slug: "puerto-vallarta",
    tagline: "The Pacific Social Hub",
    image: "https://images.unsplash.com/photo-1504730655501-24c39ac53f0e?auto=format&fit=crop&q=80&w=1000",
    description: "Puerto Vallarta combines colonial authenticity with modern luxury. It is Mexico's leading inclusive destination, offering a sophisticated culinary scene, world-class hospitals, and a vibrant nightlife nestled between the Sierra Madre and Banderas Bay.",
    vibe: ["Lively", "Tropical", "Inclusive"],
    type: "hub",
    stats: { cost: 4, safety: 4, temp: "Tropical", internet: "Fiber", population: "300k", proximity: "Intl Airport" },
    tags: ["Culinary Capital", "LGBTQ+ Friendly", "Jungle Vibes"],
    costBreakdown: { rent: "$1,800", dining: "$800", transport: "$150", total: "$2,750" },
    details: { rent: "$1,500 - $3,500", commute: "10 mins", hospital: "Joy's" }
  },
  {
    name: "Tulum",
    slug: "tulum",
    tagline: "The Jungle Chic Escape",
    image: "https://images.unsplash.com/photo-1504933350103-e840ede978d4?auto=format&fit=crop&q=80&w=1000",
    description: "Tulum is the global capital of eco-chic living. It attracts high-net-worth nomads looking for a balance between Mayan mysticism and modern wellness. With the new international airport, it is now more accessible than ever for global commuters.",
    vibe: ["Boho", "Eco-Friendly", "Trendy"],
    type: "city",
    stats: { cost: 5, safety: 3, temp: "Tropical", internet: "Starlink/Fiber", population: "40k", proximity: "Intl Airport" },
    tags: ["Beach Clubs", "Wellness Hub", "Mayan History"],
    costBreakdown: { rent: "$2,500", dining: "$1,200", transport: "$200", total: "$3,900" },
    details: { rent: "$2,000 - $5,000", commute: "15 mins", hospital: "Costamed" }
  },
  {
    name: "CDMX (Polanco)",
    slug: "cdmx-polanco",
    tagline: "The Cosmopolitan Peak",
    image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&q=80&w=1000",
    description: "Polanco is the pinnacle of Mexican cosmopolitan life. It offers unparalleled security, Michelin-starred gastronomy, and a standard of luxury that rivals New York's Upper East Side. The ultimate hub for international executives and elite expats.",
    vibe: ["Ultra-Luxury", "Urban", "International"],
    type: "hub",
    stats: { cost: 5, safety: 5, temp: "Mild", internet: "1Gbps Fiber", population: "9M", proximity: "Central" },
    tags: ["Michelin Star", "High Security", "World Class"],
    costBreakdown: { rent: "$3,500", dining: "$1,500", transport: "$400", total: "$5,400" },
    details: { rent: "$3,000 - $10,000", commute: "Walkable", hospital: "ABC Santa Fe" }
  },
  {
    name: "Oaxaca City",
    slug: "oaxaca-city",
    tagline: "The Culinary Soul",
    image: "https://images.unsplash.com/photo-1512813195386-6cf81d50e411?auto=format&fit=crop&q=80&w=1000",
    description: "Oaxaca City is the culinary and artistic soul of Mexico. Famous for its mole and mezcal, it offers a deep cultural experience in a safe, colonial setting. Ideal for those seeking an authentic, slow-paced lifestyle with rich heritage.",
    vibe: ["Authentic", "Foodie", "Colonial"],
    type: "city",
    stats: { cost: 2, safety: 4, temp: "Spring", internet: "Fiber", population: "300k", proximity: "Airport" },
    tags: ["Gastronomy", "Artisan Crafts", "Slow Living"],
    costBreakdown: { rent: "$900", dining: "$400", transport: "$80", total: "$1,380" },
    details: { rent: "$700 - $1,500", commute: "N/A", hospital: "Clinica Hospital" }
  }
];
