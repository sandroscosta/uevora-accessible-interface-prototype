"use client";

import { createContext, useContext } from "react";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({ theme: "light" });

export default function MainLayout({ children }: LayoutProps) {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <ThemeContext.Provider value={theme}>
          {children}
        </ThemeContext.Provider>
      </main>
    </div>
  );
}