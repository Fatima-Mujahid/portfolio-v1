import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { blogs } from "@/data/blog";

const Blogs = () => {
  return (
    <section className="container flex flex-col md:flex-row relative gap-5 mx-12 mb-28">
      <a href={blogs[0].url} className="flex-1">
        <div
          style={{
            background: `url('https://framerusercontent.com/images/TzFal3pKOSQxMaLyBqk9fsOQf8M.png')`,
          }}
          className="rounded-md h-52 md:h-[26.75rem]"
        >
          <div className="p-5 text-left flex flex-col justify-between h-52 md:h-[26.75rem]">
            <p className="bg-[#fbfbfb99] max-w-fit py-1 px-2 rounded-full text-[#354b6f] text-xs">
              {blogs[0]?.category}
            </p>
            <div>
              <p className="text-xl md:text-4xl md:max-w-xl font-bold text-black pb-3">
                {blogs[0].title}
              </p>
              <p className="text-sm text-white">{blogs[0].date}</p>
            </div>
          </div>
        </div>
      </a>
      <div className="flex flex-col gap-5">
        <a href={blogs[1].url} className="md:max-w-80">
          <div
            style={{
              background: `url('https://framerusercontent.com/images/TzFal3pKOSQxMaLyBqk9fsOQf8M.png')`,
            }}
            className="rounded-md h-52"
          >
            <div className="p-5 text-left flex flex-col justify-between h-52">
              <p className="bg-[#fbfbfb99] max-w-fit py-1 px-2 rounded-full text-[#354b6f] text-xs">
                {blogs[1]?.category}
              </p>
              <div>
                <p className="text-xl font-bold text-black pb-3">
                  {blogs[1].title}
                </p>
                <p className="text-sm text-white">{blogs[1].date}</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="md:max-w-80">
          <div className="rounded-md h-52 bg-[#F5F5F5]">
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
