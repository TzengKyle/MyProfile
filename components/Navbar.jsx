"use client"

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Github, Linkedin, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


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
            <Link href="/" className="md:bold-36 text-white sm:bold-24 bold-20">KYLE WEBSITE</Link>

            {/* desk nav */}
            <div className="gap-6 hidden sm:flex">
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

            {/* mobile nav */}
            <div className="block flexCenter sm:hidden">
              <Sheet >
                <SheetTrigger className="text-white hover:scale-110" ><Menu /></SheetTrigger>
                <SheetContent className="flexCenter flex-col">
                  <SheetHeader>
                    <SheetTitle className="bold-32">其他連結</SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col flexCenter">
                    <Link href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100003533029100">
                      <div className="flex text-black cursor-pointer hover:scale-110 bold-20 hover:bg-gray-300 px-2 rounded-full">Facebook</div>
                    </Link>
                    <Link href="https://www.instagram.com/kyletzeng0514/">
                      <div className="flex text-black cursor-pointer hover:scale-110 hover:bg-gray-300 bold-20 px-2 rounded-full">Instagram</div>
                    </Link>
                    <Link href="https://github.com/TzengKyle">
                      <div className="flex text-black cursor-pointer hover:scale-110 hover:bg-gray-300 bold-20 px-2 rounded-full">Github</div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/kyle-tzeng-8944bb2a4/">
                      <div className="flex text-black cursor-pointer hover:scale-110 hover:bg-gray-300 bold-20 px-2 rounded-full">Linkdein</div>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>



          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
