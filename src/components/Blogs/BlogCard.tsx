import { FaUserCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa6";
import { TBlogProps } from "@/types/types.global";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/BlogCard.module.css";

const BlogCard: React.FC<TBlogProps> = ({ blog }) => {
  return (
    <div>
      <div
        className={`${Styles.BlogCardContainer} shadow-lg rounded-md relative ${
          blog?.type === "premium" ? " cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <div className=" relative overflow-hidden">
          <Image
            className={`${Styles.BCImage} rounded-t-lg  h-[220px] object-center object-cover opacity-70`}
            src={blog.image}
            alt={blog.title}
            width={500}
            height={500}
          />
        </div>

        <div className="w-full p-3">
          <div className="flex items-center">
            <FaUserCircle size={18} color="#001D25" />
            <p className="text-lg hind-siliguri-regular ml-1">{blog.author}</p>
          </div>
          <h1 className="text-lg hind-siliguri-bold text-customPrimary">
            {blog.title}
          </h1>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <BiLike size={18} color="#001D25" />
                <p className="text-lg hind-siliguri-regular ml-1">
                  {blog.likes}
                </p>
              </div>
              <div className="flex items-center">
                <FaCommentDots size={18} color="#001D25" />
                <p className="text-lg hind-siliguri-regular ml-1">
                  {blog.comments}
                </p>
              </div>
            </div>
            <div>
              {blog.type === "premium" ? (
                <p>Premium</p>
              ) : (
                <Link
                  href=""
                  className="text-lg hind-siliguri-light text-customSecondery"
                >
                  Read more
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
