"use client";
import React from "react";

const Contact = ({ className } : { className? : string }) => {
  return (
    <>
      <button className={`contact-btn flex items-stretch gap-2 text-black border-black rounded-3xl border-2 relative transition-all duration-500 ease-in-out overflow-hidden ${className}`}>
        <div className="hovered-bg absolute top-1/2 left-1/2 h-0 w-0 bg-black -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out rounded-full"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 z-[1]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>

        <a href="mailto:help@inviewinterior.in" className="flex items-center contact-link whitespace-nowrap z-[1] w-max">
          Contact Us
        </a>
      </button>
    </>
  );
};

export default Contact;
