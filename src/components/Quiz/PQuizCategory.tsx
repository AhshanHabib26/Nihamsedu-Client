
import React from "react";
import PQuizCategoryCard from "./PQuizCategoryCard";
import { getAllQuizCategories } from "@/data/QuizCategoryData";
import { TQuizCategory } from "@/types/types.global";

const PQuizCategory = () => {
  const categories = getAllQuizCategories()

  return (
    <div className="mt-8">
      <h1 className="text-3xl hind-siliguri-bold text-center">
        কুইজ ক্যাটেগরি
      </h1>
      <div className=" grid grid-cols-2 lg:grid-cols-5 gap-3 mt-5 max-w-5xl mx-auto">
        {categories.map((category: TQuizCategory) => (
          <PQuizCategoryCard category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default PQuizCategory;
