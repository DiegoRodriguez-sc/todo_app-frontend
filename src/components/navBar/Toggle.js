import React, {useEffect, useState } from "react";
import Moon from "./Moon";
import Sun from "./Sun";

const Toggle = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme("dark")
    } else {
      document.documentElement.classList.remove('dark')
      setTheme("light")
    }
  }, []);


  const handleChangeTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light")
    }
  };

  return <div className="cursor-pointer mx-2 text-xl" onClick={handleChangeTheme}>{theme === "dark" ? <Sun /> : <Moon />}</div>;
};

export default Toggle;
