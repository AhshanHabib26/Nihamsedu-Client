import React, { useState } from "react";
import Styles from "../styles/DropdownGenerators.module.css";
import { DropdownProps } from "../types/types.global";
import Link from "next/link";


const DropdownGenerators: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        className="text-lg text-primaryColor hover:text-seconderyColor flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`ml-1 h-6 w-6 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`${Styles.dropdownContainer} ${isOpen ? Styles.active : ""}`}
      >
        <div className="py-1">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center px-2 py-1 text-lg text-primaryColor hover:text-seconderyColor"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownGenerators;
