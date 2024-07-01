import { getAllBlogData } from "@/data/blogData";
import Container from "@/utils/Container";
import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";

const Blogs = () => {
  const blogs = getAllBlogData();

  return (
    <div>
      {" "}
      <Container>
        <div className="mt-12">
          <h1 className="text-3xl hind-siliguri-bold text-center">
            জনপ্রিয় <span className="text-customSecondery">সকল ব্লগ</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-8">
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center">
            <Link
              className=" px-4 py-2 bg-customSecondery text-lg text-white rounded-lg"
              href="/"
            >
              সকল ব্লগ দেখুন
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
