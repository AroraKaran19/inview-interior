"use client";
import React, { useEffect, useRef, useState } from 'react';
import ServicesCard from './ServicesCard';

interface CarouselProps {
  items: {
    title: string,
    description?: string
    imageUrl?: string
    redirectUrl?: string
  }[]
}

const Carousel = ({ items }: CarouselProps) => {

  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [scrollActive, setScrollActive] = useState<Boolean>(false);

  useEffect(() => {
    // This is used to set the width of the window
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToIndex = (index: number) => {
    setScrollActive(true);
    if (carouselRef.current && index >= 0 && index < items.length) {
      const cardWidth = carouselRef.current.scrollWidth / items.length;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    // This is used to scroll to the first index when the component is mounted
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }

    const handleScroll = () => {
      // This is used to set the current index of the carousel when the user scrolls (Only for Mobile and Tablet)
      if (carouselRef.current) {
        const cardWidth = carouselRef.current.scrollWidth / items.length;
        const index = Math.round(carouselRef.current.scrollLeft / cardWidth);
        setCurrentIndex(index);
      }
    };

    const refCurrent = carouselRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('scroll', handleScroll);
      return () => {
        refCurrent.removeEventListener('scroll', handleScroll);
      };
    }
  }, [items.length]);

  const handleBreakPoints = () => {
    // This helps in handling the breakpoints for the carousel 1 means mobile, 2 means tablet, 3 means desktop, 4 means large desktop
    if (width < 550 && width > 1) {
      return 1;
    } else if (width < 1200) {
      return 2;
    } else if (width > 1200) {
      return 3;
    } else {
      return 4;
    }
  }

  const dotCount = () => {
    const br = handleBreakPoints();
    let itemsPerPage = 0;
    if (br === 1 || br === 2) {
      itemsPerPage = 1;
    } else {
      itemsPerPage = 3;
    }
    return items.length / itemsPerPage;
  }

  return (
    <>
      <div className="carousel-content relative h-full w-full">
        <div className="relative carousel-container flex gap-16 overflow-x-scroll overflow-y-hidden transition-all duration-500 ease-in-out p-5" ref={carouselRef}>
          {items.map((item, index) => (
            <ServicesCard key={index} title={item.title} description={item.description} imageUrl={item.imageUrl} redirectUrl={item.redirectUrl} />
          ))}
        </div>
        <div className="arrows absolute left-[-2%] top-0 hover:cursor-pointer py-5 h-full" onClick={() => { if (handleBreakPoints() === 1 || handleBreakPoints() === 2) { scrollToIndex(currentIndex - 1) } else { scrollToIndex(currentIndex - 3) } }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full size-6 flex justify-center items-center">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="arrows absolute right-[-2%] top-0 hover:cursor-pointer py-5 h-full" onClick={() => { if (handleBreakPoints() === 1 || handleBreakPoints() === 2) { scrollToIndex(currentIndex + 1) } else { scrollToIndex(currentIndex + 3) } }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full size-6 flex justify-center items-center">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div className="dots-container flex justify-center mt-4">
        {Array.from({ length: dotCount() }).map((_, index) => (
          <button
            key={index}
            className={`dot w-4 h-4 rounded-full mx-2 transition-all ease-in-out duration-150 ${handleBreakPoints() === 1 || handleBreakPoints() === 2 ? (currentIndex === index ? 'bg-[#000]' : 'bg-[#D4D4D4]') : (currentIndex === index * 3 ? 'bg-[#000]' : 'bg-[#D4D4D4]')}`}
            onClick={() => { if (handleBreakPoints() === 1 || handleBreakPoints() === 2) { scrollToIndex(index) } else { scrollToIndex(index * 3) } }}
          />
        ))}
      </div>
    </>
  )
}

export default Carousel;