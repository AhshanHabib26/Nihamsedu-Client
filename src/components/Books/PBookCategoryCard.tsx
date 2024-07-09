import { TBookCategoryProps } from "@/types/types.global";
import React from "react";
import Styles from "../../styles/PQuizCategoryCard.module.css";

const PBookCategoryCard: React.FC<TBookCategoryProps> = ({ category }) => {
  return (
    <div className="flex items-center justify-center  bg-customPrimary p-2 rounded-md cursor-pointer">
      <button className="text-white hind-siliguri-light text-lg">
        {category.categoryName}
      </button>
    </div>
  );
};

export default PBookCategoryCard;
