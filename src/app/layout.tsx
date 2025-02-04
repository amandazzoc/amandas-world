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

  const isCentered = pathname === "/" || menuOpen

  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen overflow-hidden`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <main className={`flex overflow-y-auto lg:px-[18.5vw] md:px-8 px-4  ${isCentered ? "items-center justify-center" : ""}`}>
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
        </main>
        
        <Footer />
      </body>
    </html>
  );
}

