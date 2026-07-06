import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tempo Café — Specialty Coffee",
  description: "Demo landing page — Tempo Café — Specialty Coffee",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
