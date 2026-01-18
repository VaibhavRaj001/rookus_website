export default function sitemap() {
  const baseUrl = "https://rookus.co.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    }
  ];
}
