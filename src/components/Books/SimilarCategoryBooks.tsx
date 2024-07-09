import { getAllBoksData } from "@/data/booksData";
import Container from "@/utils/Container";
import React from "react";
import SimilarCategoryBooksCard from "./SimilarCategoryBooksCard";
import { TBook } from "@/types/types.global";

const SimilarCategoryBooks = () => {
  const books = getAllBoksData();

  return (
    <div className="mt-12">
      <Container>
        <h1 className="text-3xl hind-siliguri-bold text-center">
          Similar Category{" "}
          <span className="text-customSecondery">Best Selling Books</span>
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-5xl mx-auto mt-10">
          {books.slice(0, 8).map((book: TBook) => (
            <SimilarCategoryBooksCard book={book} key={book.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SimilarCategoryBooks;
