import BookCard from "@/components/Books/BookCard";
import PBookBanner from "@/components/Books/PBookBanner";
import PBookCategory from "@/components/Books/PBookCategory";
import PBookPagination from "@/components/Books/PBookPagination";
import { getAllBoksData } from "@/data/booksData";
import { TBook } from "@/types/types.global";
import Container from "@/utils/Container";
import React from "react";

const BookPage = () => {
  const books = getAllBoksData();

  return (
    <div>
      <PBookBanner />
      <Container>
        <PBookCategory />
        <hr className="my-8  border-slate-300 border-dashed" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 gap-4 max-w-6xl mx-auto">
          {books.map((book: TBook) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center">
          <PBookPagination />
        </div>
      </Container>
    </div>
  );
};

export default BookPage;
