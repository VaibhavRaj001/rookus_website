export default function sitemap() {
  const baseUrl = "https://rookus.co.in";

  // Google-safe timestamp format (no milliseconds)
  const lastModified = new Date().toISOString().split(".")[0] + "Z";

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
