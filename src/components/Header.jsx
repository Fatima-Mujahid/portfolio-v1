import React, { useRef } from "react";
import CircularMe from "./CircularMe";
import { motion, useTransform, useScroll } from "framer-motion";

const Header = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x1 = useTransform(scrollYProgress, [0, 1], ["35%", "0.8%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "3%"]);
  return (
    <div className="pt-36 md:pt-56">
      <div className="container">
        <h1 className="header">
          Designing emotional digital experiences that people love
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-12 my-12">
          <CircularMe />
          <div className="flex flex-col gap-8 md:gap-14 w-full md:w-[60%]">
            <p className="subheading">
              I'm a digital product designer with 8 years of experience, based
              in Switzerland. I like to understand people to solve their
              problems and craft digital solutions that resonate.
            </p>
          </div>
        </div>
      </div>
      <div ref={targetRef} className="relative h-[175vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden flex-nowrap">
          <div className="header2 whitespace-nowrap">
            <motion.div style={{ x: x2 }} className="mb-2 md:mb-4">
              <p>Software Design • Web Dev • DevOps</p>
            </motion.div>
            <motion.div style={{ x: x1 }}>
              <p>Generative AI • Mobile App Dev • Testing</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
