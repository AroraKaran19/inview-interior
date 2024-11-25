import React from "react";
import GetStartedArrow from "./GetStartedArrow";

const HeroSection = () => {
  return (
    <>
      <div className="home-hero-section w-full flex items-stretch sm:flex-col gap-8">
        <div className="hero-section-left w-[30%] flex flex-col gap-4 sm:w-full flex-shrink-0 sm:hidden">
          <img
            src="/Home/herosection-1.jpg"
            alt="image-1"
            className="select-none rounded-3xl"
            draggable={false}
          />
          <img
            src="/Home/herosection-2.jpg"
            alt="image-2"
            className="select-none rounded-3xl sm:hidden"
            draggable={false}
          />
        </div>

        <div className="hero-section-center w-2/5 flex flex-col justify-center items-center gap-16 sm:w-full sm:gap-5">
          <div className="hero-section-title flex justify-center gap-5 flex-wrap w-full sm:gap-2">
            <h1>Dream.</h1>
            <h1>Create.</h1>
            <h1>Live.</h1>
          </div>

          <div className="hero-section-subtitle w-3/5 text-center">
            <h3>Transform Your Space with Tailored Design Excellence</h3>
          </div>

          <div className="get-started-arrow">
            <GetStartedArrow />
          </div>

          <img
              src="/Home/herosection-2.jpg"
              alt="image-2"
              className="select-none rounded-3xl hidden w-full sm:block"
              draggable={false}
          />

        </div>

        <div className="hero-section-right w-[30%] flex flex-col gap-4 sm:w-full flex-shrink-0 sm:hidden">
          <img
            src="/Home/herosection-3.jpg"
            alt="image-1"
            className="select-none rounded-3xl"
            draggable={false}
          />
          <img
            src="/Home/herosection-4.jpg"
            alt="image-2"
            className="select-none rounded-3xl"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
