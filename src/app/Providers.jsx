"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <main className="dark:bg-gray-700"> {children}</main>
    </ThemeProvider>
  );
}
