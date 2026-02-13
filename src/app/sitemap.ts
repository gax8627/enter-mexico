import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://entermexico.com"; // Replace with actual domain later

  // 1. Core Static Pages
  const staticPages = [
    "",
    "/quiz/start",
    "/partner",
    "/about",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Programmatic City Hubs (Managed by SEO Agent logic)
  const cities = ["mexicali", "rosarito", "ensenada", "san-miguel"];
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/city/${city}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. High-Value Strategy Guides (Solvency, etc.)
  const guides = [
    "solvency-2025",
    "fideicomiso-explained",
    "safety-reality-check",
  ];
  const guidePages = guides.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...guidePages];
}
