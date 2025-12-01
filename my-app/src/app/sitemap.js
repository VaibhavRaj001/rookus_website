// src/app/sitemap.js

export default function sitemap() {
  return [
    {
      url: "https://rookus.co.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Add more pages if you have (like /pricing, /features)
  ];
}
