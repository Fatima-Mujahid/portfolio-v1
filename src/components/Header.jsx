import React, { useRef } from "react";
import CircularMe from "./CircularMe";
import { motion, useTransform, useScroll } from "framer-motion";

const Header = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x1 = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-45%", "1%"]);
  return (
    <div className="text-[#333333] mt-28">
      <h1 className="px-12 text-[5.5rem] font-semibold leading-tight">
        Designing emotional digital experiences that people love
      </h1>
      <div className="ml-10 mt-14 mb-40 px-12">
        <CircularMe />
        <p className="absolute ml-80 max-w-3xl">
          I'm a digital product designer with 8 years of experience, based in
          Switzerland. I like to understand people to solve their problems and
          craft digital solutions that resonate.
        </p>
      </div>
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden flex-nowrap">
          <div className="text-[5.5rem] font-semibold leading-tight whitespace-nowrap">
            <motion.div style={{ x: x2 }}>
              <p>Illustration Illustration Illustration</p>
            </motion.div>
            <motion.div style={{ x: x1 }}>
              <p>Illustration Illustration Illustration</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
