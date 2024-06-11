"use client"

import { useState } from "react";
import Image from "next/image";
import { TCategoryProps } from "@/types/types.global";

const CategoriesCard: React.FC<TCategoryProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex items-center p-4 rounded-md cursor-pointer ${
        isHovered ? "text-white" : ""
      }`}
      style={{
        backgroundColor: isHovered ? category.hoverColor : category.bgColor,
        transition: "0.5s"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Image className="w-[50px]" src={category.imageUrl} alt="" />
      </div>
      <div className="ml-4">
        <h1 className="text-lg hind-siliguri-bold">{category.title}</h1>
        <p className="text-lg hind-siliguri-light">{category.description}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
