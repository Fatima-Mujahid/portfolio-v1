import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 flex justify-between text-base text-[#333333] bg-[#ffffff]/80 backdrop-blur-lg items-center py-7 md:py-10 px-6 md:px-8 lg:px-14">
      <Link href="/" className="label w-1/2 md:w-1/3">
        Fatima Mujahid
      </Link>
      <p className="label w-1/3 text-center hidden md:inline">
        Software Engineer
      </p>
      <div className="flex items-end justify-end gap-8 md:gap-12 w-1/2 md:w-1/3">
        <Link href="/#work" className="label">
          Work
        </Link>
        <Link href="/about" className="label">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
