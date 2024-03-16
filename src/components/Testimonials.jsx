import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="flex flex-col md:flex-row container gap-3">
      {testimonials.map((testimonial) => (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={testimonial.image}
            className="w-16 h-16 p-2 object-contain rounded-full shadow-md"
            style={{ backgroundColor: testimonial.color }}
          />
          <p className="my-7">{testimonial.text}</p>
          <div className="flex text-[#f5e836] mb-3">
            {[1, 2, 3, 4, 5].map((index) => (
              <FaStar className="mr-1" key={`star-${index}`} />
            ))}
          </div>
          <p>{testimonial.name}</p>
          <p>{testimonial.designation}</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
