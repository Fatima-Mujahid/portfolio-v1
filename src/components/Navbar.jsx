import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between text-base text-[#333333] bg-[#ffffff]/60 backdrop-filter items-center py-10 px-12">
      <a href="/" className="w-48 hover:font-bold transition-all">
        Fatima Mujahid
      </a>
      <p className="w-48 text-center">Software Engineer</p>
      <div className="flex items-end gap-12">
        <a href="#" className="hover:font-bold transition-all w-10">
          Work
        </a>
        <a href="/about" className="hover:font-bold transition-all w-10">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
