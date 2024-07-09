import React from "react";
import { TBookCategory, TQuizCategory } from "@/types/types.global";
import PBookCategoryCard from "./PBookCategoryCard";
import { getAllBookCategories } from "@/data/BookCategoryData";

const PBookCategory = () => {
  const categories = getAllBookCategories();

  return (
    <div className="mt-8">
      <h1 className="text-3xl hind-siliguri-bold text-center">
        বই ক্যাটেগরি
      </h1>
      <div className=" grid grid-cols-2 lg:grid-cols-5 gap-3 mt-5 max-w-5xl mx-auto">
        {categories.map((category: TBookCategory) => (
          <PBookCategoryCard category={category} key={category.categoryId} />
        ))}
      </div>
    </div>
  );
};

export default PBookCategory;
