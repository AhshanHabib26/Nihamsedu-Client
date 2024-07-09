import Container from "@/utils/Container";
import Image from "next/image";
import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { IoLayersOutline } from "react-icons/io5";
import Styles from "../../../../styles/BookPageDetails.module.css";
import SimilarCategoryBooks from "@/components/Books/SimilarCategoryBooks";

const book = {
  id: "1",
  title: "গণিত সমাধান হ্যান্ডনোট(২য় শ্রেণী)",
  author: "এহছান হাবীব",
  publicationDate: "1925-04-10",
  price: 320,
  offerPrice: 299,
  genre: "Education",
  pages: 180,
  publisher: "Nihamsedu",
  isbn: "9780743273565",
  description:
    "A novel set in the Roaring Twenties that tells the story of the mysterious Jay Gatsby and his obsession with Daisy Buchanan.",
  coverImageUrl:
    "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg",
};

const BookPageDetails = ({ params }: any) => {
  // const { bookId } = params;

  return (
    <div className="mt-10">
      <Container>
        <div
          className={`flex flex-col lg:flex-row shadow-lg gap-2 max-w-6xl mx-auto ${Styles.BookPageDetailsContainer}`}
        >
          <div>
            <Image
              src={book.coverImageUrl}
              width={500}
              height={500}
              alt={book.title}
              className="w-full lg:w-[350px] h-[500px] lg:h-[400px] object-fill shrink-0"
            />
          </div>
          <div className="p-3">
            <h1 className="text-2xl hind-siliguri-regular">{book.title}</h1>
            <p className="text-lg hind-siliguri-light text-gray-700">
              By {book.author} | Published {book.publicationDate}
            </p>

            <h1 className="text-xl hind-siliguri-light ml-1">
              {book.description}
            </h1>

            <div className="flex items-center">
              <h1 className="text-lg hind-siliguri-light ml-1">Category - </h1>
              <p className="text-lg hind-siliguri-light ml-1">{book.genre}</p>
            </div>
            <div className="flex items-center">
              <IoLayersOutline size={18} color="#001D25" />
              <h1 className="text-lg hind-siliguri-light ml-1">
                {book.pages} Pages
              </h1>
            </div>

            <div>
              {book?.offerPrice ? (
                <div>
                  {" "}
                  <div className="flex items-center">
                    <IoMdPricetags size={18} color="#001D25" />
                    <div className="flex items-center">
                      <h1 className="text-xl hind-siliguri-semibold ml-1 line-through text-red-400">
                        TK {book.price}
                      </h1>
                      <h1 className="text-2xl hind-siliguri-semibold ml-1 text-[#001D25]">
                        TK {book.offerPrice}
                      </h1>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <IoMdPricetags size={18} color="#001D25" />
                  <h1 className="text-2xl hind-siliguri-regular ml-1">
                    TK {book.price}
                  </h1>
                </div>
              )}
            </div>
            <hr className="my-4  border-slate-300 border-dashed" />
            <div>
              <div className="flex items-center">
                <FaRegHeart
                  size={18}
                  color="#001D25"
                  className="cursor-pointer"
                />
                <p className="text-lg hind-siliguri-light ml-1 ">
                  Add Book List
                </p>
              </div>
              <div className="flex items-center">
                <FaShareAlt
                  size={18}
                  color="#001D25"
                  className="cursor-pointer"
                />
                <p className="text-lg hind-siliguri-light ml-1 ">
                  Share This Book
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="bg-customSecondery px-4 py-2 text-lg hind-siliguri-regular rounded-md text-white">
                একটু পড়ুন
              </button>
              <button className="bg-customPrimary px-4 py-2 text-lg hind-siliguri-regular rounded-md text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <SimilarCategoryBooks />
        </div>
      </Container>
    </div>
  );
};

export default BookPageDetails;
