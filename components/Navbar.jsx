"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Github, Linkedin } from 'lucide-react';

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
          className="fixed w-full z-50"
        >
          <div className="max-container flex justify-between items-center px-12 py-5 bg-black lg:my-8">
            <p className="md:bold-36 text-white bold-24">KYLE WEBSITE</p>
            <div className="flex gap-6">
              <Link href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100003533029100">
                <Facebook className="text-white cursor-pointer hover:scale-110" />
              </Link>
              <Link href="https://www.instagram.com/kyletzeng0514/">
                <Instagram className="text-white cursor-pointer hover:scale-110" />
              </Link>
              <Link href="https://github.com/TzengKyle">
                <Github className="text-white cursor-pointer hover:scale-110" />
              </Link>
              <Link href="https://www.linkedin.com/in/kyle-tzeng-8944bb2a4/">
                <Linkedin className="text-white cursor-pointer hover:scale-110" />
              </Link>
            </div>



          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
