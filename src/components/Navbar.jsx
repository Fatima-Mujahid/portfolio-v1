import React from "react";

const Navbar = () => {
  return (
    <nav className="label fixed w-full z-10 flex justify-between text-base text-[#333333] bg-[#ffffff]/80 backdrop-blur-lg items-center py-10 px-6 md:px-8 lg:px-14">
      <a href="/" className="w-1/3 hover:font-bold transition-all">
        Fatima Mujahid
      </a>
      <p className="w-1/3 text-center hidden md:inline">Software Engineer</p>
      <div className="flex items-end justify-end gap-8 md:gap-12 w-1/3">
        <a href="#" className="hover:font-bold transition-all">
          Work
        </a>
        <a href="/about" className="hover:font-bold transition-all">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
