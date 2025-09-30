import "./globals.css";
import React from "react";

export const metadata = {
  title: "RICHMAN Forex Bot — Landing",
  description: "Алгоритмическая торговая система RICHMAN. До 250% годовых, AI, 24/7, демо и лицензии."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
