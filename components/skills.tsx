import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";

const Skills = () => {
  return (
    <section id="skills">
      <SectionHeading>My Skills</SectionHeading>
      <ul>
        {skillsData.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
