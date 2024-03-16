import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="flex flex-col md:flex-row container gap-20 md:gap-8 my-44 md:my-52">
      {testimonials.map((testimonial) => (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={testimonial.image}
            className="w-16 h-16 p-2 object-contain rounded-full shadow-md"
            style={{ backgroundColor: testimonial.color }}
          />
          <p className="my-7 text-center content">{testimonial.text}</p>
          <div className="flex text-[#ffc84b] mb-3">
            {[1, 2, 3, 4, 5].map((index) => (
              <FaStar className="mr-1" key={`star-${index}`} />
            ))}
          </div>
          <div className="flex flex-col gap-1 lg:gap-3 items-center mt-3">
            <p className="subheading2">{testimonial.name}</p>
            <p className="subheading2 scale-90">{testimonial.designation}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
