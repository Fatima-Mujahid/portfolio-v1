import React from "react";
import profile from "@/assets/profile.png";
import Image from "next/image";

const CircularMe = () => {
  return (
    <div className="md:mt-[-130px] lg:mt-[-142px] xl:mt-[-155px]">
      <div className="absolute">
        <div className="rounded-text rotating">
          <svg viewBox="0 0 200 200">
            <path
              id="textPath"
              d="M 65,0 A 65,65 0 0 1 -65,0 A 65,65 0 0 1 65,0"
              transform="translate(100,100)"
              fill="none"
              strokeWidth="0"
            ></path>
            <g fontSize="18px" fill="#646464">
              <text textAnchor="start">
                <textPath href="#textPath" startOffset="0%">
                  ✦ FATIMA MUJAHID ✦ SOFTWARE ENGINEER
                </textPath>
              </text>
            </g>
          </svg>
        </div>
      </div>
      <Image
        src={profile}
        className="w-16 h-16 rounded-full object-center object-cover relative top-12 left-12"
        alt="Fatima"
      ></Image>
    </div>
  );
};

export default CircularMe;
