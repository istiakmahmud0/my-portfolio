"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { ueeSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { once } from "events";

const Skills = () => {
  const { ref } = ueeSectionInView("Skills", 0.75);
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section id="skills" className="mb-28 max-w-[45rem]" ref={ref}>
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex justify-center gap-2 text-lg text-gray-800 flex-wrap">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5"
            variants={fadeInAnimationVariants}
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
