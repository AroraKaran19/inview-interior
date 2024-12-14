"use client";
import { categoryData } from "@/app/utils/categories";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CategoryItem from "./CategoryItem";
import CategoryCarousel from "./CategoryCarousel";
import ItemContainerCloseBtn from "./ItemContainerCloseBtn";

const CategoryContent = ({
  categoryName,
  className,
}: {
  categoryName: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any[]>([]);
  const [loadedImages, setLoadedImages] = useState<number>(5);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const router = useRouter();
  const totalItems =
    categoryName == "All"
      ? categoryData.length
      : categoryData.filter((item) => item.tag === categoryName).length;

  useEffect(() => {
    if (categoryName === "All") {
      setData(categoryData);
    } else {
      setData(categoryData.filter((item) => item.tag === categoryName));
    }
    setLoadedImages(totalItems > 8 ? 8 : 4);
    // Only to be used to persist images from db or within same cateogory
    // const showDetailsFlag = categoryData.filter((item) => categoryName == "All" ? item : item.tag === categoryName).some((item) => item.showDetails ? item.showDetails === true : false);
    // setShowDetails(showDetailsFlag); // uncomment this to use and comment below line
    setShowDetails(false);
  }, [categoryName]);

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

  const handleDetailsClose = () => {
    const changeData = [...data];
    changeData.map((item) => {
      item.showDetails = false;
      item.Details = false;
    });
    setData(changeData);
    setShowDetails(false);
  };

  return (
    <div
      className={`category-content w-full relative flex flex-wrap gap-4 justify-center p-4 px-8 sm:px-0 ${className}`}
      ref={containerRef}
    >
      <div
        className={`category-wrapper absolute flex justify-center items-center w-full h-full top-0 p-4 px-8 transition-all duration-300 ease-in-out z-50 sm:p-0 ${
          showDetails
            ? "bg-white/30 backdrop-blur-sm pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        <div
          className={`item-container w-11/12 h-full p-5 bg-white/75 animate-CardsInFromLeft max-h-[600px] sm:w-full sm:pt-5 ${
            showDetails ? "flex sm:flex-col" : "hidden"
          }`}
        >
          <div className="item-container-left w-1/2 h-full overflow-hidden sm:w-full sm:h-1/3">
            {data
              .filter((item) => item.showDetails == true)
              .map((item, index) => {
                return (
                  <CategoryCarousel
                    key={index}
                    carouselItems={item.list_images}
                    autoChange={true}
                  />
                );
              })}
          </div>
          <div className="item-container-right w-1/2 h-full relative sm:w-full sm:h-1/3">
            <ItemContainerCloseBtn handleDetailsClose={handleDetailsClose} />
            {data
              .filter((item) => item.showDetails == true)
              .map((item, index) => {
                return (
                  <Fragment key={index}>
                    <h3 className="item-container-heading text-center text-3xl select-none">{item.tag}</h3>
                    <p className="item-container-description text-center text-lg select-none">{item.description}</p>
                  </Fragment>
                );
              })}
          </div>
        </div>
      </div>
      {data.slice(0, loadedImages).map((item, index) => (
        <CategoryItem
          key={index}
          item={item}
          index={index}
          setShowDetails={setShowDetails}
          data={data}
          setData={setData}
          className="animate-CardsIn"
        />
      ))}
      {loadedImages < totalItems && loadedImages < 12 ? (
        <div className="load-more w-full flex justify-center">
          <button
            className="load-more-btn py-2 px-4 bg-black text-white rounded-lg"
            onClick={() => {
              setLoadedImages(loadedImages + 4);
            }}
          >
            Load More
          </button>
        </div>
      ) : loadedImages < totalItems ? (
        <div className="view-all w-full flex justify-center">
          <button
            className="view-all-btn py-2 px-4 bg-black text-white rounded-lg flex gap-2 justify-center items-center"
            onClick={() => {
              router.push("/categories");
            }}
          >
            <span>View More</span>
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
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CategoryContent;
