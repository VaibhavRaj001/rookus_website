// src/app/layout.js
import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://rookus.co.in"),

  title: {
    default: "Rookus – AI Campaign Automation Platform",
    template: "%s | Rookus",
  },

  description:
    "Rookus uses AI to generate Campaigns, automate workflows, and boost your brand’s creativity.",

  keywords: [
    "AI design automation",
    "AI marketing platform",
    "AI content generation",
    "AI campaign management",
    "AI-powered branding",
    "automated marketing tools",
    "creative AI solutions",
    "AI branding platform",
    "AI creative tools",
    "design automation software",
    "Rookus AI",
  ],

  authors: [{ name: "Rookus" }],
  creator: "Rookus",

  openGraph: {
    title: "Rookus – AI Campaign Automation Platform",
    description:
      "Rookus uses AI to generate Campaigns, automate workflows, and boost your brand’s creativity.",
    url: "https://rookus.co.in",
    siteName: "Rookus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rookus AI Campaign Automation Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rookus – AI Campaign Automation Platform",
    description:
      "Rookus uses AI to generate Campaigns, automate workflows, and boost your brand’s creativity.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  verification: {
    google: "dSZnwJiLQ0lifQZ5l9oHB3csqeQmJrkRaRXzwGmlZsU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Structured Data for Google Knowledge Graph */}
        <Script
          id="rookus-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rookus",
              url: "https://rookus.co.in",
              logo: "https://rookus.co.in/favicon.png",
              sameAs: [
                "https://www.linkedin.com/company/rookus-in",
                "https://www.instagram.com/rookus.in/",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
