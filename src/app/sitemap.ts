import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/30-day-set", priority: 0.9, freq: "weekly" },
    { path: "/manifesto", priority: 0.8, freq: "monthly" },
    { path: "/faq", priority: 0.8, freq: "monthly" },
    { path: "/compare", priority: 0.7, freq: "monthly" },
    { path: "/why-daily", priority: 0.7, freq: "monthly" },
    { path: "/ritual", priority: 0.7, freq: "monthly" },
    { path: "/shape", priority: 0.7, freq: "monthly" },
    { path: "/press", priority: 0.5, freq: "monthly" },
  ];
  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
