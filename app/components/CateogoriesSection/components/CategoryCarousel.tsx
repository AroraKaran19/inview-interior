"use client";
import React, { useEffect, useRef } from "react";

const CategoryCarousel = ( { carouselItems, className, style, interval=5000, autoChange=false, scrollbar=false} : { carouselItems: [string], interval?: number, autoChange?: boolean, scrollbar?: boolean, className?: string, style?: {}} ) => {

	const itemCarouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
    if (autoChange) {
			itemCarouselRef.current?.scrollTo({
				left: 0,
				behavior: "smooth",
			});
      let intervalId: NodeJS.Timeout;
      if (itemCarouselRef) {
        if (itemCarouselRef.current && interval) {
          intervalId = setInterval(() => {
            if (itemCarouselRef.current) {
              itemCarouselRef.current?.scrollBy({
                left: itemCarouselRef.current?.clientWidth + 8 || 0,
                behavior: "smooth",
              });
              if (
                itemCarouselRef.current.scrollLeft >=
                itemCarouselRef.current.scrollWidth -
								itemCarouselRef.current.offsetWidth
              ) {
                itemCarouselRef.current?.scrollTo({
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
		<div className={`category-item-carousel flex overflow-x-scroll w-full h-full items-stretch gap-2 snap-x snap-center snap-mandatory ${className}`} ref={itemCarouselRef} style={style}>
			{carouselItems.map((imageUrl, index) => {
				return (
					<div key={index} className="carousel-image w-full h-full flex-shrink-0" style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: "100% 100%", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
				)
			})}
		</div>
	);
};

export default CategoryCarousel;
