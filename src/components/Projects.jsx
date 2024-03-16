import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const OPTIONS = {};
const SLIDES = ["Tutorania", "Creativerse", "MMI Forms", "Flowy"];
const projectsContent = {
  Tutorania: {
    detail: "detail 1",
    image:
      "https://images.unsplash.com/photo-1682686581221-c126206d12f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Creativerse: {
    detail: "detail 2",
    image:
      "https://images.unsplash.com/photo-1682686581221-c126206d12f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  "MMI Forms": {
    detail: "detail 3",
    image:
      "https://images.unsplash.com/photo-1682686581221-c126206d12f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Flowy: {
    detail: "detail 4",
    image:
      "https://images.unsplash.com/photo-1682686581221-c126206d12f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

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
      emblaMainApi.scrollTo(SLIDES.indexOf(index));
    },
    [emblaMainApi, emblaThumbsApi]
  );
  return (
    <div className="bg-black text-white projects">
      <div className="container md:hidden">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto
          amet dignissimos illo non at eius itaque possimus libero consequatur?
        </p>
        <ProjectsCarousel
          slides={SLIDES}
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
                {SLIDES.map((index) => (
                  <Thumb
                    key={index}
                    onClick={() => onThumbClick(index)}
                    selected={SLIDES.indexOf(index) === selectedIndex}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ProjectsCarousel
          slides={SLIDES}
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
                  <p>{projectsContent[index]["detail"]}</p>
                  <img src={projectsContent[index]["image"]} />
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
