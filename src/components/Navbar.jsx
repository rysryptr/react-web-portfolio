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
    <div className="navbar fixed top-0 left-0 w-full flex items-center justify-between backdrop-blur-md  md:bg-slate-900 z-45 px-6 py-4">
      <div className="logo p-4">
        <h1
          className={`font-bold text-2xl md:text-3xl md:block
          ${active ? "hidden" : "block p-0"}
          `}
        >
          <span className="text-sky-500">Port</span>folio
        </h1>
      </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-4 transition-all duration-300 md:static md:opacity-100 md:bg-transparent
      ${
        active
          ? "fixed top-0 left-1/2 p-5 -translate-x-1/2 opacity-100 rounded-br-2xl rounded-bl-2xl"
          : "opacity-0 -top-10"
      }
    `}
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
