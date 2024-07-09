import { TBookProps } from "@/types/types.global";
import Image from "next/image";
import React from "react";
import Styles from "../../styles/SimilarCategoryBooksCard.module.css";

const SimilarCategoryBooksCard: React.FC<TBookProps> = ({ book }) => {
  return (
    <div
      className={`shadow-xl border border-gray-200 p-2 border-dashed rounded-lg ${Styles.SimilarCategoryBooksCardContainer}`}
    >
      <Image
        src={book.coverImageUrl}
        width={180}
        height={180}
        alt={book.title}
        className="w-[200px] h-[250px] lg:w-[220px] lg:h-[250px] object-fill mx-auto rounded-lg"
      />
      <div className="flex items-center justify-center flex-col my-2">
        <h1 className="text-lg hind-siliguri-light text-center">
          {book.title}
        </h1>
        <p className="text-lg hind-siliguri-light">{book.author}</p>
        <div>
          {book?.offerPrice ? (
            <div>
              {" "}
              <div className="flex items-center">
                <div className="flex items-center">
                  <h1 className="text-xl hind-siliguri-semibold ml-1 line-through text-red-400">
                    TK {book.price}
                  </h1>
                  <h1 className="text-xl hind-siliguri-semibold ml-1 text-[#001D25]">
                    TK {book.offerPrice}
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <h1 className="text-xl hind-siliguri-regular ml-1">
                TK {book.price}
              </h1>
            </div>
          )}
        </div>
      </div>
      <div>
        <button className="bg-customPrimary w-full py-2 mt-2 text-white text-center rounded-lg">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SimilarCategoryBooksCard;
