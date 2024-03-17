import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { blogs } from "@/data/blog";
import Image from "next/image";

const Blogs = () => {
  return (
    <section className="container flex flex-col md:flex-row relative gap-5 mx-12">
      <a
        href={blogs[0].url}
        className="rounded-lg shadow-md bg-[#fc7e1c] bg-opacity-20 flex-1 p-5 md:p-8 flex flex-col justify-between h-52 md:h-[420px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="tag">{blogs[0]?.category}</p>
        <div className="flex flex-col gap-5">
          <Image
            src={blogs[0].image}
            className="h-6 md:h-24 object-left object-contain"
          />
          <p className="text-md md:text-4xl md:max-w-2xl">{blogs[0].title}</p>
          <p className="text-xs md:text-sm text-[#646464]">{blogs[0].date}</p>
        </div>
      </a>
      <div className="flex flex-col gap-5">
        <a
          href={blogs[1].url}
          className="blog-sm bg-[#f1545b] bg-opacity-20 justify-between"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="tag">{blogs[1]?.category}</p>
          <div className="flex flex-col gap-2">
            <Image
              src={blogs[1].image}
              className="h-6 object-left object-contain"
            />
            <p className="text-md">{blogs[1].title}</p>
            <p className="text-xs text-[#646464]">{blogs[1].date}</p>
          </div>
        </a>
        <a
          href="https://medium.com/@fatimamujahid01"
          className="blog-sm bg-[#f5f5f5] justify-end gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <MdArrowOutward fontSize={24} />
          </div>
          <p className="text-md">View All Posts</p>
        </a>
      </div>
    </section>
  );
};

export default Blogs;
