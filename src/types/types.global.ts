import { ReactNode } from "react";

export type TContainerProps = {
  children: ReactNode;
};

export interface TNLinkProps {
  linkUrl: string;
  linkText: string;
  bgColor?: string;
}

export type DropdownProps = {
  title: string;
  items: { text: string; link: string; icon: JSX.Element }[];
};

export type TCategory = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  hoverColor: string;
  imageUrl: any;
};

export type TCategoryProps = {
  category: TCategory;
};

export type TBlog = {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  image: any;
  type: string;
};
export type TBlogProps = {
  blog: TBlog;
};

export type TBook = {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
  price: number;
  offerPrice?: number;
  genre: string;
  pages: number;
  publisher?: string;
  isbn: string;
  description?: string;
  coverImageUrl?: string | any;
};

export type TBookProps = {
  book: TBook;
};

export type TPackage = {
  id: string;
  title: string;
  price: string;
  offerPrice: string;
  altTitle: string;
  service: string[];
};
export type TPackageProps = {
  service: TPackage;
};

export type TCourse = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  price: string;
  duration: string;
  level: string;
  category: string;
  rating: number;
  ratingCount: number;
};

export type TCourseProps = {
  course: TCourse;
};
