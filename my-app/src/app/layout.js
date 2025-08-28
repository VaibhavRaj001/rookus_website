// src/app/layout.jxs
import "./globals.css";  // ✅ must be at the very top

export const metadata = {
  title: "My App",
  description: "Next.js + Chakra UI App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
