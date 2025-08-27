import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viaggio in Sicilia - Siracusa e Dintorni",
  description:
    "Itinerario di 4 giorni tra Siracusa, Noto, Taormina e Marzamemi con piatti tipici e consigli di viaggio.",
  keywords: ["Sicilia", "Siracusa", "Noto", "Taormina", "Marzamemi", "Itinerario", "Viaggio"],
  authors: [{ name: "Luca & Co." }],
  openGraph: {
    title: "Viaggio in Sicilia - Siracusa e Dintorni",
    description:
      "Scopri un itinerario indimenticabile di 4 giorni tra arte, mare e gastronomia siciliana.",
    url: "https://kina67.github.io/Sicilia_itinerario_4_giorni/",
    siteName: "Sicilia Itinerario 4 Giorni",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viaggio in Sicilia - Siracusa e Dintorni",
    description:
      "Scopri un itinerario indimenticabile di 4 giorni tra arte, mare e gastronomia siciliana.",
  },
  // 👇 Aggiunta per usare l'icona Logo.svg come favicon
  icons: {
    icon: [
      {
        url: "https://kina67.github.io/Sicilia_itinerario_4_giorni/Logo.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "https://kina67.github.io/Sicilia_itinerario_4_giorni/Logo.svg",
    apple: "https://kina67.github.io/Sicilia_itinerario_4_giorni/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
