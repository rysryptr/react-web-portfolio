import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      className="footer flex flex-col md:flex-row gap-4 items-center justify-between py-8 mt-24"
      id="contact"
    >
      <h1
        className="font-bold text-xl md:text-3xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <span className="text-sky-500">Port</span>folio
      </h1>
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <div>
          <i className="ri-whatsapp-fill"></i> +62 812 2191 3166
        </div>
        <div>
          <i className="ri-mail-fill"></i> riyosurya18@gmail.com
        </div>
      </div>
      <div
        className="flex items-center justify-center gap-4 text-3xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <a href="https://gitlab.com/rysryptr" target="_blank">
          <i className="ri-gitlab-fill"></i>
        </a>
        <a href="https://github.com/rysryptr" target="_blank">
          <i className="ri-github-fill"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/riyo-surya-putra-310853130/"
          target="_blank"
        >
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <a href="https://www.instagram.com/riyosuryaa/" target="_blank">
          <i className="ri-instagram-fill"></i>
        </a>
      </div>
    </div>
  );
};
