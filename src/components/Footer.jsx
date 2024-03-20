import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white relative overflow-hidden mt-36 md:mt-56">
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
      <div className="container pt-12">
        <div
          style={{
            background: `url('stars.svg')`,
            backgroundSize: "800px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#333333]/50 flex flex-col items-center justify-center">
            <h1 className="header2 scale-100 lg:scale-75 font-semibold leading-tight pt-24 text-center">
              Have a vision for an amazing software? Let's turn it into a
              reality.
            </h1>
            <Link
              href="mailto:fatimamujahid01@gmail.com"
              className="bg-white text-black px-8 md:px-12 py-5 md:py-7 rounded-full mt-8 mb-36 text-[16px] lg:text-[18px]"
            >
              Let's chat
            </Link>
          </div>
        </div>
        <hr />
        <div className="py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-6 label">
          <p>&copy; Built by Fatima with &#9829;</p>
          <div className="flex gap-8">
            <Link
              href="https://linkedin.com/in/fatimamujahid"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn&nbsp;
              <MdArrowOutward />
            </Link>
            <Link
              href="https://instagram.com/_dev_logs"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram&nbsp;
              <MdArrowOutward />
            </Link>
            <Link
              href="https://github.com/Fatima-Mujahid"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github&nbsp;
              <MdArrowOutward />
            </Link>
            <Link
              href="https://www.upwork.com/freelancers/~01e4fc3dc3f77f80f7"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upwork&nbsp;
              <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
