import React from "react";
import DataImage from "../data.js";

export const Hero = () => {
  return (
    <>
      <div
        className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 md:mt-24 gap-4 xl:gap-0 md:gap-6"
        id="home"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s mt-10 md:mt-0">
          <h1 className="text-4xl/tight font-bold mb-6">
            Hi, I'm Riyo Surya Putra
          </h1>
          <p className="text-base/loose text-slate-400 mb-12">
            Frontend Developer with a strong passion for crafting user-friendly,
            responsive, and accessible web applications.
          </p>
          <div className="flex gap-4 bg-slate-800 rounded-2xl p-4 w-fit mb-16 items-center">
            <img
              src={DataImage.HeroImage}
              alt="Qoute Image"
              className="w-10 rounded-md"
            />
            <q>
              Everyone has their own starting line. What matters most is that we
              started.
            </q>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 justify-center md:justify-start">
            <a
              href="/cv/CV-Riyo_Surya_Putra.pdf"
              download
              className="p-4 bg-sky-500 hover:bg-sky-400 rounded-full flex items-center gap-2 hover:cursor-pointer"
            >
              Download CV
              <i className="ri-download-line ri-lg animate-float-arrow transition-all duration-300"></i>
            </a>
            <a
              href="#projects"
              className="p-4 min-w-40 bg-slate-500 hover:bg-slate-400 rounded-full group flex gap-2 items-center hover:cursor-pointer"
            >
              My Projects
              <i className="ri-arrow-right-line ri-lg group-hover:ml-2 group-hover:-pl-4 transition-all duration-300"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-fit md:w-[400px] md:h-[500px] lg:h-[550px] mx-auto md:ml-auto rounded-tl-[100px] rounded-br-[100px] animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>
    </>
  );
};
