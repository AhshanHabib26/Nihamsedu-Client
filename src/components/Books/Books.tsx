import { getAllBoksData } from "@/data/booksData";
import { TBook } from "@/types/types.global";
import Container from "@/utils/Container";
import BookCard from "./BookCard";
import Link from "next/link";

const Books = () => {
  const books = getAllBoksData();

  return (
    <Container>
      <div className="mt-12">
        <h1 className="text-3xl hind-siliguri-bold text-center">
          সকল বই <span className="text-customSecondery">কালেকশন</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 gap-4 max-w-6xl mx-auto">
          {books.slice(0, 6).map((book: TBook) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center">
          <Link
            className=" px-4 py-2 bg-customSecondery text-lg text-white rounded-lg"
            href="/all-books"
          >
            সকল বই দেখুন
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Books;
