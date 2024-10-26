/** @format */

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/portfolio", name: "Portfolio" },
  { path: "/projekte", name: "Projekte" },
  { path: "/buchen", name: "Buchen" },
  { path: "/about", name: "Über mich" },
];
const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
