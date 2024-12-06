"use client";
import { categoryData } from "@/app/utils/categories";
import React, { useEffect, useState } from "react";
import CopyBtn from "./CopyBtn";

const CategoryContent = ({
  categoryName,
  className,
}: {
  categoryName: string;
  className?: string;
}) => {
  const [data, setData] = useState<any[]>([]);
  const [loadedImages, setLoadedImages] = useState<number>(5);

  useEffect(() => {
    if (categoryName === "All") {
      setData(categoryData);
    } else {
      setData(categoryData.filter((item) => item.tag === categoryName));
    }
    setLoadedImages(4);
  }, [categoryName]);

  const loadMoreImages = () => {
    if (loadedImages + 4 < data.length) {
      setLoadedImages(loadedImages + 4);
    } else {
      setLoadedImages(data.length);
    }
  };

  useEffect(() => {
    if (data.filter((item) => item.shareCopy === true)) {
      const newData = [...data];
      newData.map((item) => {
        item.shareCopy = false;
      });
      const timeoutId = setTimeout(() => {
        setData(newData);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [data]);

  return (
    <div
      className={`category-content w-full flex flex-wrap gap-4 justify-center p-4 px-8 sm:px-0 ${className}`}
    >
      {data.slice(0, loadedImages).map((item, index) => (
        <div
          key={index}
          className="category-item w-[calc(100%/4-16px)] relative rounded-3xl overflow-hidden sm:w-full md:w-[calc(100%/2-32px)] lg:w-[calc(100%/3-16px)]"
        >
          <img
            src={item.image}
            alt={item.tag}
            className="w-full h-full object-cover select-none"
            draggable={false}
          />
          <div className="details-btn bg-white/70 backdrop-blur-sm text-black absolute top-5 left-5 py-2 px-5 rounded-xl cursor-pointer select-none">
            LEARN DETAILS
          </div>
          <div className="redirect-btn bg-white text-black absolute top-2 right-2 p-4 rounded-full cursor-pointer select-none">
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
          <div className="category-item-title absolute bottom-5 left-5 bg-white text-black p-2 rounded-xl max-w-[50%]">
            {item.redirect}
					</div>
          <CopyBtn item={item} index={index} data={data} send={setData} />
        </div>
      ))}
      {loadedImages < data.length && (
        <div className="load-more w-full flex justify-center">
          <button
            className="load-more-btn py-2 px-4 bg-black text-white rounded-lg"
            onClick={loadMoreImages}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryContent;
