"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./active-section-context";
import { ueeSectionInView } from "@/lib/hooks";

const About = () => {
  // const { ref, inView, entry } = useInView({ threshold: 0.75 });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("About");
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);

  const { ref } = ueeSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 1,
      }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        provident alias incidunt voluptates iure, aliquam earum exercitationem
        doloremque obcaecati quod placeat eligendi commodi rem qui quia nisi
        corrupti eos? Vel tenetur neque, perferendis ullam assumenda libero
        laboriosam nam, facere eius recusandae vitae sequi minus quod. Quod,
        quos quas fugiat, consequatur dicta incidunt reprehenderit corrupti ea
        vel adipisci nihil aspernatur minus hic totam ipsum similique ex
        consequuntur magnam id facere doloribus nobis consectetur. Fuga
        provident nemo quidem quam perferendis iure ducimus ullam, fugit, nobis
        dolorum beatae, quod voluptatem. Similique hic harum expedita reiciendis
        sapiente aliquam, delectus repellat tempora tempore. Nostrum, non.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
};

export default About;
