import React from "react";
import Project from "./Project";

function ProjectsView({ Projects }) {
  return (
    <div className="row mt-30-reverse">
      {Projects.map((project) => (
        <div className="col-lg-4 col-md-6 col-12 mt-30" key={project.id}>
          <Project content={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectsView;
