// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Rookus – AI Design Automation Platform",
  description: "Rookus uses AI to generate designs, automate workflows, and boost your brand’s creativity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
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
      </head>

      <body>{children}</body>
    </html>
  );
}
