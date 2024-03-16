import { interests, experience } from "@/data/about";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";
import about3 from "@/assets/about3.png";

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1.25 }),
  ]);

  return (
    <section>
      <div className="container pt-36 md:pt-56">
        <h1 className="header mb-10">
          Hello,<span className="hidden md:inline">&nbsp;</span>
          <br className="block md:hidden" />
          I'm Fatima Mujahid<span className="inline md:hidden">,</span>
          <br /> a developer by heart
        </h1>
        <div className="flex flex-col md:flex-row gap-0 md:gap-8 lg:gap-12 mt-14 md:mt-24 mb-52 md:mb-60 md:items-center lg:items-end md:justify-between">
          <Image
            src={about1}
            className="w-[88%] mx-auto lg:mx-0 md:w-[415px] h-[600px] md:h-[550px] object-cover rounded-lg shadow-md shadow-[#333333]"
          />
          <div className="hidden md:flex flex-col md:gap-8 max-w-full">
            <Image
              src={about3}
              className="lg:ms-[-30%] xl:ms-[-60%] w-[420px] h-[285px] lg:h-[300px] object-cover rounded-lg shadow-md shadow-[#333333]"
            />
            <Image
              src={about2}
              className="lg:mt-[-200px] w-[420px] h-[285px] lg:h-[300px] object-cover rounded-lg shadow-md shadow-[#333333]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <h1 className="title">About</h1>
          <div className="flex flex-col gap-8 md:gap-14 w-full md:w-[55%]">
            <p className="subheading">
              I have always been intrigued by how technology has the ability to
              connect people and enhance our daily experiences. As a digital
              designer, I recognize my duty to develop designs that are
              aesthetically pleasing, user-friendly, intuitive, and accessible
              to all.
            </p>
            <p className="subheading">
              In my professional experience, I have been fortunate to work on
              diverse projects such as web and mobile app design, as well as
              developing branding and marketing materials for several
              organizations. I am highly motivated to explore new challenges and
              strive to expand my knowledge and abilities.
            </p>
          </div>
        </div>
      </div>
      <div className="my-52 md:my-60">
        <div className="embla mt-10 mb-32 bg-[#F5F5F5]">
          <div className="clients">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {interests?.map((item, index) => (
                  <div
                    className="flex-shrink-0 flex-grow-0 min-w-0"
                    key={`interest-${index}`}
                  >
                    <div className="embla__slide__number">
                      <p className="subheading font-semibold my-12 mx-16">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-36 md:pb-56">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <h1 className="title">Experience</h1>
          <div className="flex flex-col gap-7 md:gap-11 w-full md:w-[55%]">
            {experience?.map((item, index) => (
              <div
                key={`experience-${index}`}
                className="border-b-[0.75px] border-[#c0c0c0] pb-8 md:pb-12"
              >
                <h4 className="heading mb-[4px]">{item.company}</h4>
                <p className="subheading mb-5 md:mb-6">{item.title}</p>
                <p className="subheading2">{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
