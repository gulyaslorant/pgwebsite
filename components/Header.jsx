/** @format */

"use client";

import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";

//Import Components
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo className="text-primary" />

          <div className="flex items-center gap-x-6">
            {/* Navigations Abschnitt */}
            <Nav containerStyles="hidden xl:flex gap-x-8 items-center" />
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
