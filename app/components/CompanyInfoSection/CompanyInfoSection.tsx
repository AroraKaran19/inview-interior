"use client";
import React, { useState } from "react";
import NumberCounter from "../common/NumberCounter";
import Star from "../common/svgs/Star";

interface InfoProps {
  heading: string;
  count: number;
  className?: string;
  style?: React.CSSProperties;
  decimal?: boolean;
  duration?: number;
  name?: string;
}

const CompanyInfoSection = () => {
  const [info, setInfo] = useState<InfoProps[]>([
    {
      heading: "Satisfied Clients",
      count: 550,
      name: "clients",
    },
    {
      heading: "Projects Completed",
      count: 400,
      name: "projects",
    },
    {
      heading: "Satisfied Client Rating",
      count: 4.5,
      decimal: true,
      duration: 1,
      name: "rating",
    },
  ]);

  return (
    <div className="company-info-section w-full flex justify-center items-center pt-16 gap-7 sm:flex-col">
      {info.map((item, index) => {
        return (
          <div
            key={index}
            className={`info-item-container p-5 flex flex-col justify-center items-center rounded-2xl w-[300px] ${
              item.className ? item.className : ""
            }`}
            style={item.style}
          >
            <div className="info-item-count flex gap-1 select-none items-stretch">
              <NumberCounter
                from={0}
                to={item.count}
                decimal={item.decimal}
                duration={item.duration}
              />
              {item.name == "rating" ? <Star className="size-8 aspect-square sm:size-4" /> : <span>+</span>}
            </div>
            <p className="info-item-heading">{item.heading}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyInfoSection;
