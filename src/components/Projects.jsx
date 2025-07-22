import React from "react";
import { listProjects } from "../data";

export const Projects = () => {
  return (
    <div className="tools mt-24 md:mt-36 lg:mt-54" id="projects">
      <h1
        className="text-4xl/snug font-bold mb-4 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Projects
      </h1>
      <p
        className="w-full text-base/loose opacity-50 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        These are my personal projects
      </p>
      <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {listProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-2 p-4 bg-slate-800 group"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay={project.dad}
          >
            <div className="group-hover:overflow-hidden">
              <img
                src={project.image}
                loading="lazy"
                alt="thumbnail project"
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h4 className="font-semibold text-lg">{project.name}</h4>
            <p className="opacity-50">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <p
                  key={index}
                  className="border border-slate-500 rounded-md py-1 px-3 bg-slate-700"
                >
                  {tool}
                </p>
              ))}
            </div>
            <div className="mt-4 text-center">
              <a
                href="#"
                className="w-full block bg-sky-500 p-3 rounded-md hover:bg-sky-400"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
