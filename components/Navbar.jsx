"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed w-full z-50 rounded-xl"
        >
          <div className="max-container flex justify-between items-center px-12 py-5 bg-black my-8">
            <p className="bold-36 text-white">KYLE WEBSITE</p>
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
