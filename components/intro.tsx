"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "./active-section-context";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            // src="/my-pic.jpg"
            src="/rmtdev.png"
            height="192"
            width="192"
            alt=""
            quality="95"
            priority={true}
            className="w-24 h-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>
      {/* <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mahmud.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1> */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Lorem.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold"> years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex gap-2 justify-center flex-col sm:flex-row text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 rounded-full flex gap-2 
          items-center outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950
          active:scale-105 transition group
          "
        >
          Contact me here
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 rounded-full flex items-center 
          outline-none focus:scale-110 hover:scale-110
          active:scale-105 transition border border-black/10
          "
        >
          Download CV <HiDownload className="group-hover:translate-y-1" />
        </a>
        <a
          href=""
          className="bg-white p-4 rounded-full flex items-center gap-2 first-letter 
          focus:scale-110 hover:scale-110
          active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          className="bg-white p-4 rounded-full flex items-center gap-2 first-letter 
          focus:scale-110 hover:scale-110
          active:scale-105 transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
        l
      </motion.div>
    </section>
  );
};

export default Intro;
