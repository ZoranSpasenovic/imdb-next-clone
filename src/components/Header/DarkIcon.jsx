import { useState, useEffect } from "react";

export default function DarkIcon() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    JSON.stringify(localStorage.setItem("darkMode", darkMode));
    document.documentElement.className = darkMode ? "dark" : "";
  }, [darkMode]);
  return (
    <i
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className={
        darkMode ? "bi bi-brightness-high text-white mr-4" : "bi bi-moon-fill mr-4"
      }
    ></i>
  );
}
