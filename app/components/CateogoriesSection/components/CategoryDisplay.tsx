"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryContent from "./CategoryContent";

const CategoryDisplay = () => {
  const router = useRouter();

  const [categories, setCategories] = useState([
    {
      name: "All",
      active: true,
      redirect: "",
    },
    {
      name: "Drawing Room",
      active: false,
      redirect: "",
    },
    {
      name: "Bedroom",
      active: false,
      redirect: "",
    },
    {
      name: "Kitchen",
      active: false,
      redirect: "",
    },
    {
      name: `View More →`,
      active: false,
      redirect: "/categories",
    },
  ]);
  const [activeCategory, setActiveCategory] = useState("All");
  
  useEffect(() => {
    setActiveCategory(categories.find((category) => category.active)?.name || "All");
  }, [categories]);

  const handleCateogoryClick = (index: number, name?: string) => {
    if (categories[index].name == "View More →") {
      router.push(categories[index].redirect);
    } else {
      const updatedCategory = categories.map((item, i) => ({
        ...item,
        active: index == i,
      }));
      setCategories(updatedCategory);
    }
  };

  return (
    <div className="w-full flex flex-col pt-12">
      <div className="category-selector w-full flex flex-wrap gap-5 justify-evenly items-stretch bg-black text-white px-8 py-7 rounded-3xl">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-name cursor-pointer transition-all duration-200 ease-in-out hover:text-white/80 relative select-none ${
              category.active ? "active" : ""
            }`}
            onClick={() => handleCateogoryClick(index)}
          >
            {category.name}
          </div>
        ))}
      </div>
      <CategoryContent categoryName={activeCategory} />
    </div>
  );
};

export default CategoryDisplay;
