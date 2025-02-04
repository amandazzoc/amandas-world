'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import MenuContent from "@/components/MenuContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col justify-between lg:py-[10vh] lg:px-[18.5vw] md:py-28 md:px-8 py-14 px-4">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <AnimatePresence mode="wait">
            <motion.div
              key={menuOpen ? "menu" : pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {menuOpen ? <MenuContent /> : children}
            </motion.div>
          </AnimatePresence>

          <Footer />
        </main>
      </body>
    </html>
  );
}

