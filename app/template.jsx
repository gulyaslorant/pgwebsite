/** @format */

"use client";

//Framer Motion

import { motion } from "framer-motion";

//Hooks
import useScrollProgress from "@/hooks/useScrollProgress";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const template = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="hidden"
        transition={{ duration: 0.4, type: "linear", delay: 0.2 }}
      >
        {children}
      </motion.main>

      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="h-[3500px]"></div>
    </>
  );
};

export default template;
