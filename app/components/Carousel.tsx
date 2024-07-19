"use client";
import React, { useEffect, useRef, useState } from 'react';
import ServicesCard from './ServicesCard';

interface CarouselProps {
  items: {
    title: string,
    description?: string
    imageUrl?: string
  }[]
}

const Carousel = ({ items }: CarouselProps) => {

  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / items.length;
      // const itemsPerPage = 3;
      // const newIndex = index * itemsPerPage;
      const newIndex = index;
      carouselRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {

    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }

    const handleScroll = () => {
      if (carouselRef.current) {
        const cardWidth = carouselRef.current.scrollWidth / items.length;
        const itemsPerPage = 3;
        const index = Math.floor(carouselRef.current.scrollLeft / (cardWidth * itemsPerPage));
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

  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2 },
  //   { width: 768, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 4 },
  // ];

  // const dotCount = Math.ceil(items.length / 3);

  return (
    <>
      <div className="carousel-container flex gap-16 overflow-x-scroll transition-all duration-500 ease-in-out" ref={carouselRef}>
        {items.map((item, index) => (
          <ServicesCard key={index} title={item.title} description={item.description} imageUrl={item.imageUrl} />
        ))}
      </div>
      <div className="dots-container flex justify-center mt-4">
        {/* {Array.from({ length: dotCount }).map((_, index) => (
          <button
            key={index}
            className={`dot w-4 h-4 rounded-full mx-2 transition-all ease-in-out duration-150 ${index === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => scrollToIndex(index)}
          />
        ))} */}
        <button
            className={`dot w-4 h-4 rounded-full mx-2 transition-all ease-in-out duration-150 ${0 === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => scrollToIndex(0)}
          />
          <button
            className={`dot w-4 h-4 rounded-full mx-2 transition-all ease-in-out duration-150 ${1 === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => scrollToIndex(3)}
          />
      </div>
      <div className="absolute left-0 top-[50%] hover:cursor-pointer" onClick={() => scrollToIndex(0)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div className="absolute right-0 top-[50%] hover:cursor-pointer" onClick={() => scrollToIndex(3)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </>
  )
}

export default Carousel;