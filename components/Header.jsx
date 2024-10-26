/** @format */

"use client";

import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";

//Import Components
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`
    ${
      header
        ? "py-4 bg-white shadow-lg dark:bg-accent"
        : "py-6 dark:bg-transparent"
    }
    sticky top-0 z-30 transition-all ?{pathname === '/' && 'bg-[#fff]
    }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo className="text-primary" />

          <div className="flex items-center gap-x-6">
            {/* Navigations Abschnitt */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />

            {/* Mobile Navigation */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
