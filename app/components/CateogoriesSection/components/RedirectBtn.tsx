"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RedirectBtn = ({ redirectUrl } : { redirectUrl: string }) => {

  const router = useRouter();

  return (
    <div className="redirect-btn bg-white text-black absolute top-2 right-2 p-4 rounded-full cursor-pointer select-none"
      onClick={() => { router.push(redirectUrl) }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default RedirectBtn;
