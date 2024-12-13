"use client";
import React from "react";

const Quote = ({ className }: { className?: string }) => {
  return (
    <>
      <button
        className={`get-quote-btn flex items-stretch gap-1 text-black border-black rounded-3xl border-2 relative transition-all duration-500 ease-in-out overflow-hidden ${className}`}
      >
        <div className="hovered-bg absolute top-1/2 left-1/2 h-0 w-0 bg-black -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out rounded-full"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 z-[1]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <a
          href="mailto:help@inviewinterior.in"
          className="flex items-center quote-link whitespace-nowrap z-[1] w-max"
        >
          Get Quote
        </a>
      </button>
    </>
  );
};

export default Quote;
