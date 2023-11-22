"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./active-section-context";
import { ueeSectionInView } from "@/lib/hooks";

const Projects = () => {
  // const { ref, inView, entry } = useInView({
  //   threshold: 0.5,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Projects");
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);
  const { ref } = ueeSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

type projectDataProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: projectDataProps) => {
  return (
    <section className="group mb-3 sm:mb-8 last:mb-0 bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition">
      <div className="sm:max-w-[50%] flex flex-col h-full py-4 px-5 sm:pl-10 sm:pr-2 pt-4 pb-7 group-even:ml-[20rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex gap-2 mt-4 flex-wrap sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase text-white tracking-wider rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        width={`200`}
        height={`200`}
        alt="Project"
        quality={95}
        className="absolute -right-9 top-8 rounded-t-lg shadow-xl group-even:right-[initial] group-even:-left-9 group-hover:-translate-x-3 translate-y-3 group-hover:-rotate-2 
        group-even:group-hover:translate-x-3 group-even:translate-y-3 group-even:group-hover:-rotate-2 
        "
      />
    </section>
  );
};
