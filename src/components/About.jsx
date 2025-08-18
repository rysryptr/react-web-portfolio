import React from "react";
import DataImage from "../data.js";

export const About = () => {
  return (
    <div
      className="about flex flex-col gap-4 md:gap-8 w-full mt-24 md:mt-42 lg:mt-54 p-8 lg:w-4/5 xl:w-3/5 mx-auto rounded-3xl bg-slate-800"
      id="about"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <img
        src={DataImage.HeroImage}
        alt="Hero Image"
        className="w-16 rounded-md sm:hidden block mx-auto"
      />
      <p className="text-base/loose">
        I am an entry-level Frontend Developer, currently transitioning into Web
        development, with a strong focus on building modern, Interactive, and
        Responsive user interfaces. I actively improving skills through
        self-directed learning and personal project using React.js, Vue.js,
        JavaScript, and Tailwind CSS hosted on GitHub. Experienced in developing
        UI components, managing application state, and integrating with REST
        API. I am also quick to learn and adapt to new tools and technologies.
      </p>
      <div className="flex items-center justify-between gap-2">
        {/* <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-16 rounded-md sm:block hidden"
        /> */}
        <div className="flex gap-2 md:gap-6">
          <div>
            <p className="text-3xl">
              5<span className="text-sky-500">+</span>
            </p>
            <p>Personal Projects</p>
          </div>
          <div>
            <p className="text-3xl">
              1<span className="text-sky-500">+</span>
            </p>
            <p>Year of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};
