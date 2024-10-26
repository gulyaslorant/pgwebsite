/** @format */
"use client";

import Link from "next/link";
import {
  RiPaypalFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiFacebookFill,
} from "react-icons/ri";

const icons = [
  {
    path: "/",
    name: <RiPaypalFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiPaypalFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div
      className={`
    ${containerStyles}`}
    >
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
