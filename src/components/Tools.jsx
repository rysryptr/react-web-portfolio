import React from "react";
import { listTools } from "../data";

export const Tools = () => {
  return (
    <div className="tools mt-24 md:mt-36 lg:mt-54" id="tools">
      <h1
        className="text-4xl/snug font-bold mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Tools
      </h1>
      <p
        className="w-full text-base/loose opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Here are the some of tools I use to build websites and designs
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 object-center mt-4">
        {listTools.map((tool) => (
          <div
            className="flex flex-col rounded-md bg-slate-800 items-center justify-center p-8 leading-10 hover:bg-sky-600 transition-all duration-200"
            key={tool.id}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay={tool.dad}
          >
            <img src={tool.image} alt="" className="w-16" loading="lazy" />
            <h4 className="font-bold text-md">{tool.name}</h4>
            <p className="opacity-50">{tool.ket}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
