"use client";
import React, { useEffect, useRef } from "react";

interface HeroSectionCarouselProps {
  interiorItems: {
    imgSrc: string;
    redirectUrl: string;
  }[];
  className?: string;
  interval?: number;
  autoChange?: boolean;
	scrollbar?: boolean;
}

const HeroSectionCarousel = ({
  interiorItems,
  className,
  interval,
  autoChange,
	scrollbar,
}: HeroSectionCarouselProps) => {
  const CarouselRef = useRef<HTMLDivElement | null>(null);
  interval = interval || 5000;
	autoChange = autoChange || false;
	scrollbar = scrollbar || false;

  useEffect(() => {
    if (autoChange) {
      let intervalId: NodeJS.Timeout;
      if (CarouselRef) {
        if (CarouselRef.current && interval) {
          intervalId = setInterval(() => {
            if (CarouselRef.current) {
              CarouselRef.current?.scrollBy({
                left: CarouselRef.current?.clientWidth + 32 || 0,
                behavior: "smooth",
              });
              if (
                CarouselRef.current.scrollLeft >=
                CarouselRef.current.scrollWidth -
                  CarouselRef.current.offsetWidth
              ) {
                CarouselRef.current?.scrollTo({
                  left: 0,
                  behavior: "smooth",
                });
              }
            }
          }, interval);
        }
      }
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [interval, autoChange]);

  return (
    <>
      <div
        className={`hero-section-carousel w-4/5 flex items-stretch gap-8 overflow-x-scroll snap-x snap-center snap-mandatory ${className} relative ${scrollbar ? "scrollbar" : ""}`}
        ref={CarouselRef}
      >
        {interiorItems.map((item, index) => (
          <div
            key={index}
            className="hero-section-carousel-item w-full aspect-video flex flex-col gap-4 flex-shrink-0"
            style={{
              backgroundImage: `url(${item.imgSrc})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default HeroSectionCarousel;
