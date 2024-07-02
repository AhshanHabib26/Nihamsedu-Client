import { TQuizCategoryProps } from "@/types/types.global";
import React from "react";
import Styles from "../../styles/PQuizCategoryCard.module.css";

const PQuizCategoryCard: React.FC<TQuizCategoryProps> = ({ category }) => {
  return (
    <div className="flex items-center justify-around bg-customPrimary p-2 rounded-md cursor-pointer">
      <button className="text-white hind-siliguri-light text-lg">
        {category.name}
      </button>
      <p
        className={`${Styles.PQuizCategoryCardNum} text-md hind-siliguri-light`}
      >
        25
      </p>
    </div>
  );
};

export default PQuizCategoryCard;
