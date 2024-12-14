import React from "react";
import GetStartedArrow from "./components/GetStartedArrow";
import Contact from "../common/Navbar/components/Contact";
import HeroSectionCarousel from "./components/HeroSectionCarousel";

const HeroSection = () => {
  const interiorItems = [
    {
      imgSrc: "/Home/herosection-1.jpg",
      redirectUrl: "",
    },
    {
      imgSrc: "/Home/herosection-2.jpg",
      redirectUrl: "",
    },
    {
      imgSrc: "/Home/herosection-3.jpg",
      redirectUrl: "",
    },
    {
      imgSrc: "/Home/herosection-4.jpg",
      redirectUrl: "",
    },
  ];

  return (
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
          className="select-none rounded-3xl"
          draggable={false}
        />
      </div>

      <div className="hero-section-center w-2/5 flex flex-col justify-center items-center gap-16 sm:w-full sm:gap-5">
        <div className="hero-section-title flex justify-center gap-5 flex-wrap w-full sm:gap-2">
          <h1>Dream.</h1>
          <h1>Create.</h1>
          <h1>Live.</h1>
        </div>

        <HeroSectionCarousel
          interiorItems={interiorItems}
          autoChange={true}
          className="hidden w-full sm:flex"
        />

        <div className="hero-section-subtitle w-3/5 text-center">
          <h3>Transform Your Space with Tailored Design Excellence</h3>
        </div>

        <div className="cta-btn w-full flex justify-center items-center">
          <GetStartedArrow />
          <Contact className="hidden sm:flex" />
        </div>
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
  );
};

export default HeroSection;
