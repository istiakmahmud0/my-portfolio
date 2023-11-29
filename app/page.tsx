import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/about";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
