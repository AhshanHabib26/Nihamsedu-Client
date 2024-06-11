const booksData = [
  {
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
  },
  {
    id: "2",
    title: "ইংরেজি গ্রামার হ্যান্ডনোট",
    author: "এহছান হাবীব",
    publicationDate: "1960-07-11",
    genre: "Education",
    price: 350,
    offerPrice: 299,
    pages: 281,
    publisher: "এন এস পাবলিকেশন",
    isbn: "9780061120084",
    description:
      "A novel about the serious issues of rape and racial inequality told through the eyes of a young girl in the Deep South.",
    coverImageUrl: "https://m.media-amazon.com/images/I/61aAEse5x-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    publicationDate: "1949-06-08",
    genre: "Dystopian",
    pages: 328,
    price: 399.99,
    publisher: "Secker & Warburg",
    isbn: "9780451524935",
    description:
      "A dystopian novel set in a totalitarian society ruled by Big Brother.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/71kXYs4tCvL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationDate: "1813-01-28",
    genre: "Romance",
    pages: 279,
    price: 350,
    offerPrice: 340,
    publisher: "T. Egerton, Whitehall",
    isbn: "9781503290563",
    description:
      "A classic novel that explores the issues of class, marriage, and morality in 19th-century England.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/91E9-FyfvGL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationDate: "1951-07-16",
    genre: "Fiction",
    pages: 214,
    price: 580,
    offerPrice: 450,
    publisher: "Little, Brown and Company",
    isbn: "9780316769488",
    description:
      "A novel about the experiences of a young man named Holden Caulfield as he navigates life in New York City.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/7108sdEUEGL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "6",
    title: "Moby-Dick",
    author: "Herman Melville",
    publicationDate: "1851-10-18",
    genre: "Adventure",
    pages: 635,
    price: 699,
    offerPrice: 649,
    publisher: "Harper & Brothers",
    isbn: "9781503280786",
    description:
      "A novel about the obsessive quest of Captain Ahab to hunt the white whale, Moby-Dick.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/81R91ODA9DL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "7",
    title: "War and Peace",
    author: "Leo Tolstoy",
    publicationDate: "1869-01-01",
    genre: "Historical",
    pages: 1225,
    price: 850,
    publisher: "The Russian Messenger",
    isbn: "9780199232765",
    description:
      "A novel that chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/91FXycpulgL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "8",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationDate: "1937-09-21",
    genre: "Fantasy",
    pages: 310,
    price: 449,
    publisher: "George Allen & Unwin",
    isbn: "9780547928227",
    description:
      "A fantasy novel that follows the journey of Bilbo Baggins as he embarks on an adventure to reclaim the Lonely Mountain.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "9",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publicationDate: "1866-01-01",
    genre: "Psychological",
    pages: 671,
    price: 999,
    offerPrice: 949,
    publisher: "The Russian Messenger",
    isbn: "9780486415871",
    description:
      "A novel that explores the mental anguish and moral dilemmas of a young man who commits murder.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "10",
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    publicationDate: "1884-12-10",
    genre: "Adventure",
    pages: 366,
    price: 899,
    offerPrice: 549,
    publisher: "Chatto & Windus / Charles L. Webster And Company",
    isbn: "9780486280615",
    description:
      "A novel that follows the journey of a young boy named Huck Finn as he travels down the Mississippi River.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/51EU6zFkbEL._AC_UF1000,1000_QL80_.jpg",
  },
];

export const getAllBoksData = () => {
  return booksData;
};
