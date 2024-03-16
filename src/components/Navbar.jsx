import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 flex justify-between text-base text-[#333333] bg-[#ffffff]/80 backdrop-blur-lg items-center py-7 md:py-10 px-6 md:px-8 lg:px-14">
      <a href="/" className="label w-1/3">
        Fatima Mujahid
      </a>
      <p className="label w-1/3 text-center hidden md:inline">Software Engineer</p>
      <div className="flex items-end justify-end gap-8 md:gap-12 w-1/3">
        <a href="#" className="label">
          Work
        </a>
        <a href="/about" className="label">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
