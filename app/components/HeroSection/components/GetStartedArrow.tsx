"use client";
import React from "react";

const GetStartedArrow = () => {

  const handleGetStarted = () => {
    const navbarHeight = document.querySelector(".navbar")?.clientHeight;
    window.scrollTo({
      top: document.querySelector("#category")?.clientTop! - navbarHeight!,
      behavior: "smooth",
    });
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-6 sm:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
        />
      </svg>
    </>
  );
};

export default GetStartedArrow;
