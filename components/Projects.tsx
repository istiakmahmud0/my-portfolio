import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

const Project = () => {
  return <div></div>;
};
