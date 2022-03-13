import React, {useState } from "react";
import Moon from "./Moon";
import Sun from "./Sun";

const Toggle = () => {
  const [theme, setTheme] = useState(false);

  const handleChangeTheme = () => {
    setTheme(!theme);
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return <div className="cursor-pointer mx-2 text-xl" onClick={handleChangeTheme}>{!theme ? <Sun /> : <Moon />}</div>;
};

export default Toggle;
