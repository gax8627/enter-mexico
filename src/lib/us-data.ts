export interface USCity {
  name: string;
  slug: string;
  rent: number;
  dining: number;
  transport: number;
  total: number;
}

export const usCities: USCity[] = [
  { name: "San Francisco", slug: "san-francisco", rent: 3500, dining: 1200, transport: 400, total: 5100 },
  { name: "Los Angeles", slug: "los-angeles", rent: 2800, dining: 1000, transport: 600, total: 4400 },
  { name: "New York", slug: "new-york", rent: 3800, dining: 1500, transport: 300, total: 5600 },
  { name: "Austin", slug: "austin", rent: 2200, dining: 800, transport: 400, total: 3400 },
  { name: "Seattle", slug: "seattle", rent: 2500, dining: 900, transport: 300, total: 3700 },
  { name: "San Diego", slug: "san-diego", rent: 2700, dining: 900, transport: 500, total: 4100 },
  { name: "Chicago", slug: "chicago", rent: 2100, dining: 1000, transport: 200, total: 3300 },
  { name: "Miami", slug: "miami", rent: 2600, dining: 1100, transport: 500, total: 4200 },
  { name: "Denver", slug: "denver", rent: 2000, dining: 800, transport: 300, total: 3100 },
  { name: "Phoenix", slug: "phoenix", rent: 1800, dining: 700, transport: 400, total: 2900 }
];
