"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light"); 
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); // Marca o componente como montado no cliente

    // Obtém o tema salvo ou o do sistema
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    setTheme(storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Só renderiza quando o componente já estiver montado
  if (!isMounted) return null;

  return (
    <img
      className="md:w-auto w-12 cursor-pointer"
      src={theme === "dark" ? "/img/light.svg" : "/img/dark.svg"}
      alt="Ícone para alterar tema"
      onClick={toggleTheme}
    />
  );
}
