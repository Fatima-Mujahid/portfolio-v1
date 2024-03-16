import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white relative overflow-hidden">
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="mx-12 pt-12">
        <div
          style={{
            background: `url('stars.svg')`,
            backgroundSize: "800px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#333333]/50 flex flex-col items-center justify-center">
            <h1 className="text-6xl font-semibold leading-tight pt-16">
              Let's work together
            </h1>
            <a
              href="mailto:fatimamujahid01@gmail.com"
              className="bg-white text-black p-7 rounded-full mt-12 mb-28"
            >
              Send Message
            </a>
          </div>
        </div>
        <hr />
        <div className="py-10 flex justify-between">
          <p>&copy; Built by Fatima with &#9829;</p>
          <div className="flex gap-8">
            <a href="#" className="flex items-center">
              LinkedIn&nbsp;
              <MdArrowOutward />
            </a>
            <a href="#" className="flex items-center">
              Instagram&nbsp;
              <MdArrowOutward />
            </a>
            <a href="#" className="flex items-center">
              Upwork&nbsp;
              <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
