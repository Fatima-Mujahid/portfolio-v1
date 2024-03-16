import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "@/data/projects";

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
      emblaMainApi.scrollTo(Objects.keys(projects).indexOf(index));
    },
    [emblaMainApi, emblaThumbsApi]
  );
  return (
    <div className="bg-black text-white projects mt-20 md:mt-40">
      <div className="container md:hidden">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto
          amet dignissimos illo non at eius itaque possimus libero consequatur?
        </p>
        <ProjectsCarousel
          slides={Object.keys(projects)}
          setSelectedIndex={setSelectedIndex}
          emblaMainRef={emblaMainRef}
          emblaMainApi={emblaMainApi}
          emblaThumbsApi={emblaThumbsApi}
        />
      </div>
      <div className="hidden container md:flex">
        <div>
          <h1>Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            iusto amet dignissimos illo non at eius itaque possimus libero
            consequatur?
          </p>
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
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div>
                  <h1>{index}</h1>
                  <p>{projects[index]["detail"]}</p>
                  <img src={projects[index]["image"]} />
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
        className={`embla-thumbs__slide__number ${
          selected ? "opacity-100" : "opacity-50"
        }`}
      >
        {index}
      </button>
    </div>
  );
};

export default Projects;
