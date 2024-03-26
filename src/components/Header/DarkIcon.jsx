"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <i
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500 mr-4 bi bi-moon-fill"
          />
        ) : (
          <i
            onClick={() => setTheme("dark")}
            className=" bi bi-brightness-high mr-4 text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
}
