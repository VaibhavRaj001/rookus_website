// src/app/layout.jxs
import "./globals.css"; 

export const metadata = {
  title: "Rookus",
  description: "Next.js Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
