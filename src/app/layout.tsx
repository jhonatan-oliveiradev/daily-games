import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Games - Sua plataforma de jogos 🔥",
  description:
    "Encontre e organize seus jogos favoritos, compartilhe com seus amigos e explore um mundo de aventuras e emoções!",
  keywords: ["games", "jogos", "videogames", "steam"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
