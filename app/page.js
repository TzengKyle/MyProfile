import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Image from "next/image";
import Projects from "@/sections/Projects";
import ContactUs from "@/sections/ContactUs";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Intro />
      <Projects />
      <ContactUs />
    </main>
  );
}
