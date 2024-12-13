import React from "react";
import RedirectBtn from "./RedirectBtn";
import CopyBtn from "./CopyBtn";
import { ItemCategory } from "@/app/utils/categories";

interface CategoryItemProps {
  item: {
    tag: string;
    redirect: string;
    image: string;
    Details: boolean;
    showDetails: boolean;
    shareCopy: boolean;
  };
  index: number;
  setShowDetails: (value: boolean) => void;
  data: ItemCategory[];
  setData: (value: ItemCategory[]) => void;
	className?: string;
}

const CategoryItem = ({
  item,
  index,
  setShowDetails,
  data,
  setData,
	className,
}: CategoryItemProps) => {

  const handleDetails = (index: number) => {
    const newData = [...data];
    newData[index].showDetails = !newData[index].showDetails;
    newData[index].Details = !newData[index].Details;
    if (newData[index].showDetails) {
      setShowDetails(true);
    } else {
      setShowDetails(false);
    }
    setData(newData);

    setTimeout(() => {
      if (newData[index].showDetails) {
        const itemContainer = document.querySelector(".item-container");
        if (itemContainer) {
          itemContainer.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    }, 0);
  };

  return (
    <div
      key={index}
      className={`category-item relative w-[calc(100%/4-16px)] rounded-3xl overflow-hidden sm:w-full md:w-[calc(100%/2-32px)] lg:w-[calc(100%/3-16px)] animate-CardsIn ${className}`}
    >
      <img
        src={item.image}
        alt={item.tag}
        className="w-full h-full object-cover select-none"
        draggable={false}
      />
      <div
        className={`details-btn absolute top-5 left-5 py-2 px-5 rounded-xl cursor-pointer select-none transition-all duration-200 ease-in-out ${
          item.Details
            ? "bg-black text-white backdrop-blur-0"
            : "bg-white/70 backdrop-blur-sm text-black"
        }`}
        onClick={() => handleDetails(index)}
        title={`Get Details of ${item.tag}`}
      >
        LEARN DETAILS
      </div>
      <RedirectBtn redirectUrl={item.redirect} />
      <div className="category-item-title absolute bottom-5 left-5 bg-white text-black p-2 rounded-xl max-w-[50%]">
        {item.redirect}
      </div>
      <CopyBtn item={item} index={index} data={data} send={setData} title="Copy Link to Clipboard" />
    </div>
  );
};

export default CategoryItem;
