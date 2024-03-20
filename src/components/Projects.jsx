import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "@/data";
import Image from "next/image";

const OPTIONS = {};

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(Object.keys(projects).indexOf(index));
    },
    [emblaMainApi, emblaThumbsApi]
  );
  return (
    <div className="bg-[#f5f5f5] projects mt-16 md:mt-24 py-36 md:py-40">
      <div className="container md:hidden">
        <div className="flex flex-col gap-5">
          <h1 className="title">Projects</h1>
          <p className="subheading mb-12">
            I help businesses build software that solves problems and delights
            users.
          </p>
        </div>
        <ProjectsCarousel
          slides={Object.keys(projects)}
          setSelectedIndex={setSelectedIndex}
          emblaMainRef={emblaMainRef}
          emblaMainApi={emblaMainApi}
          emblaThumbsApi={emblaThumbsApi}
        />
      </div>
      <div className="hidden container md:flex gap-8">
        <div className="flex-1 max-w-7/12">
          <div className="flex flex-col gap-8">
            <h1 className="title">Projects</h1>
            <p className="subheading mb-12">
              I help businesses build software that solves problems and delights
              users.
            </p>
          </div>
          <div className="embla-thumbs">
            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
              <div className="embla-thumbs__container">
                {Object.keys(projects).map((index) => (
                  <Thumb
                    key={index}
                    onClick={() => onThumbClick(index)}
                    selected={
                      Object.keys(projects).indexOf(index) === selectedIndex
                    }
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ProjectsCarousel
          slides={Object.keys(projects)}
          setSelectedIndex={setSelectedIndex}
          emblaMainRef={emblaMainRef}
          emblaMainApi={emblaMainApi}
          emblaThumbsApi={emblaThumbsApi}
        />
      </div>
    </div>
  );
};

const ProjectsCarousel = ({
  slides,
  setSelectedIndex,
  emblaMainRef,
  emblaMainApi,
  emblaThumbsApi,
}) => {
  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla flex-1 w-full md:w-5/12">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div className="flex flex-col gap-5 md:gap-8 max-w-[500px] md:max-w-[440px]">
                  <h1 className="heading">{index}</h1>
                  <p className="subheading">{projects[index]["detail"]}</p>
                  <Image
                    src={projects[index]["image"]}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Thumb = ({ selected, index, onClick }) => {
  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? "embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className={`embla-thumbs__slide__number text-[2.5rem] lg:text-[3.25rem] xl:text-[4rem] ${
          selected ? "opacity-100" : "opacity-50"
        }`}
      >
        {index}
      </button>
    </div>
  );
};

export default Projects;
