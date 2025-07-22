import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar flex items-center justify-between lg:sticky">
      <div className="logo">
        <h1 className="font-bold text-2xl md:text-3xl">
          <span className="text-sky-500">Port</span>folio
        </h1>
      </div>
      <ul
        className={`menu flex items-center z-40 sm:gap-10 gap-4 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl transition-all duration-300 fixed left-1/2 -translate-x-1/2 md:static md:-translate-x-0 md:opacity-100 md:transition-all md:duration-300 md:bg-transparent ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li>
          <a href="#home" className="sm:text-lg text-base font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="sm:text-lg text-base font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="sm:text-lg text-base font-medium">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="sm:text-lg text-base font-medium">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
