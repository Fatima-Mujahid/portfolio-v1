import React, { useRef } from "react";
import CircularMe from "./CircularMe";
import { motion, useTransform, useScroll } from "framer-motion";

const Header = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x1 = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "3.5%"]);

  return (
    <div className="pt-36 sm:pt-44 md:pt-56">
      <div className="container">
        <h1 className="header">
          Turninig ideas into <br className="hidden md:inline" /> powerful software
          that <br className="hidden md:inline" /> drive results
        </h1>
        <div className="flex flex-col-reverse md:flex-row justify-between items-end gap-3 md:gap-12 my-8 md:my-14 lg:my-[72px]">
          <div className="me-[105px] md:me-0 ms-0 md:ms-6 lg:ms-10">
            <CircularMe />
          </div>
          <div className="subheading w-full md:w-[41ch]">
            I'm a digital product designer with 8 years of experience, based in
            Switzerland. I like to understand people to solve their problems and
            craft digital solutions that resonate.
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
