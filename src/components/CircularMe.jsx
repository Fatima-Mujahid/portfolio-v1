import React from "react";

const CircularMe = () => {
  return (
    <div>
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
            <g fontSize="18px">
              <text textAnchor="start">
                <textPath
                  href="#textPath"
                  startOffset="0%"
                  className="text-[#0c0c0c]"
                >
                  ✦ FATIMA MUJAHID ✦ SOFTWARE ENGINEER
                </textPath>
              </text>
            </g>
          </svg>
        </div>
      </div>
      <img
        src="https://framerusercontent.com/images/FRvXGLpRfOwPbYeVxaoIOl5kjqo.jpg"
        className="w-16 h-16 rounded-full object-center object-cover relative top-12 left-12"
      />
    </div>
  );
};

export default CircularMe;
