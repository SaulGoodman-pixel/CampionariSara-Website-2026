import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campionari Sara Group",
  description: "Campionari tessili e soluzioni espositive per il settore arredamento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
