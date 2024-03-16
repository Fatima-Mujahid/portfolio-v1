import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const y = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);
  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden flex-nowrap">
        <div className="text-[5.5rem] font-semibold leading-tight whitespace-nowrap">
          <motion.div style={{ x: y }}>
            <p>Illustration Illustration Illustration</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
