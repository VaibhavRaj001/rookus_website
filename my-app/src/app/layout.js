// src/app/layout.jxs
import "./globals.css"; 

export const metadata = {
  title: "Rookus – AI Design Automation Platform",
  description: "Rookus uses AI to generate designs, automate workflows, and boost your brand’s creativity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
