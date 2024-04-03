import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Image from "next/image";
import Projects from "@/sections/Projects";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Intro />
      <Projects />
    </main>
  );
}
