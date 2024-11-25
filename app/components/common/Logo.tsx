"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      className="logo flex items-stretch gap-2 cursor-pointer select-none"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        router.push("/");
      }}
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        draggable={false}
        className="h-[55px] w-auto place-self-center"
      />
      <div className="logo-text flex flex-col items-center justify-center text-black">
        <p>INVIEW</p>
        <p>INTERIOR</p>
      </div>
    </div>
  );
};

export default Logo;
