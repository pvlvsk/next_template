"use client";

import { EThemes, ELocalStorageKey } from "@entities/index";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<EThemes>(EThemes.LIGTH);


  useEffect(() => {
    const savedTheme: EThemes =
      (localStorage.getItem(ELocalStorageKey.THEME) as EThemes) ||
      EThemes.LIGTH;
    setTheme(savedTheme);
    (document.getElementById('body') as HTMLElement).setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === EThemes.LIGTH ? EThemes.DARK : EThemes.LIGTH;
    setTheme(newTheme);
    (document.getElementById('body') as HTMLElement).setAttribute('data-theme', newTheme);
    localStorage.setItem(ELocalStorageKey.THEME, newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Сменить тему на {theme === "light" ? "темную" : "светлую"}
    </button>
  );
};

export default ThemeToggle;
