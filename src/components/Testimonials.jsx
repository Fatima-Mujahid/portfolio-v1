import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/data";
import ReactGA from "react-ga4";

const Testimonials = () => {
  return (
    <section className="container my-36 md:my-56">
      <h1 className="header2 mb-24 lg:mb-40">In their own words</h1>
      <div className="flex flex-col gap-20 md:gap-28 items-start">
        {testimonials.map((testimonial, index) => (
          <div
            key={`testimonial-${index}`}
            className="flex flex-col items-center justify-center flex-1 max-w-[900px] mx-auto"
          >
            <Image
              src={testimonial.image}
              className="w-16 h-16 p-2 object-contain rounded-full shadow-md"
              alt={testimonial.name}
              style={{ backgroundColor: testimonial.color }}
            />
            <p className="my-7 text-center content">{testimonial.text}</p>
            <div className="flex text-[#ffc84b] mb-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <FaStar className="mr-1" key={`star-${index}`} />
              ))}
            </div>
            <Link
              href={testimonial.profile}
              className="flex flex-col items-center mt-3 text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: `Testimonials - ${testimonial.name}`,
                  action: "Click",
                });
              }}
            >
              <p className="subheading2 text-[#646464] mb-[-10px] md:mb-0">
                {testimonial.name}
              </p>
              <p className="subheading2 text-[#646464] scale-90 md:scale-75">
                {testimonial.designation}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
