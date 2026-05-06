import type { Metadata } from "next";
import "./globals.css";

import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: "Event Host - Premium Professional Event Hosting",
  description: "Professional event hosting services for weddings, corporate events, and celebrations. Creating unforgettable moments with style and elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
