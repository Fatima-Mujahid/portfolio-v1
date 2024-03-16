import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Blogs = () => {
  return (
    <section className="flex flex-col md:flex-row relative gap-3 mx-12">
      <a href="#" className="flex-1">
        <div
          style={{
            background: `url('https://framerusercontent.com/images/TzFal3pKOSQxMaLyBqk9fsOQf8M.png')`,
          }}
          className="rounded-md h-[26.75rem]"
        >
          <div className="p-5 text-left flex flex-col justify-between h-[26.75rem]">
            <p className="bg-[#fbfbfb99] max-w-fit py-1 px-2 rounded-full text-[#354b6f] text-xs">
              Market Analysis
            </p>
            <div>
              <p className="text-xl md:text-4xl md:max-w-xl font-bold text-black pb-3">
                Market update: Is now the time to buy or sell?
              </p>
              <p className="text-sm text-white">Jan 28, 2024</p>
            </div>
          </div>
        </div>
      </a>
      <div className="flex flex-col gap-3">
        <a href="#" className="md:max-w-80">
          <div
            style={{
              background: `url('https://framerusercontent.com/images/TzFal3pKOSQxMaLyBqk9fsOQf8M.png')`,
            }}
            className="rounded-md h-52"
          >
            <div className="p-5 text-left flex flex-col justify-between h-52">
              <p className="bg-[#fbfbfb99] max-w-fit py-1 px-2 rounded-full text-[#354b6f] text-xs">
                Market Analysis
              </p>
              <div>
                <p className="text-xl font-bold text-black pb-3">
                  Market update: Is now the time to buy or sell?
                </p>
                <p className="text-sm text-white">Jan 28, 2024</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="md:max-w-80">
          <div className="rounded-md h-52 bg-slate-600">
            <div className="p-5 text-left flex flex-col justify-end h-52">
              <div>
                <p className="text-xl font-bold text-black pb-3">
                  View All Posts
                </p>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <MdArrowOutward fontSize={24} />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Blogs;
