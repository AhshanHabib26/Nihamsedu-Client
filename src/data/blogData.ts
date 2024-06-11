import ImgOne from "../assets/images/courseImgOne.jpg";
import ImgTwo from "../assets/images/courseImgTwo.jpg";
import ImgThree from "../assets/images/courseImgThree.jpg";
import ImgFour from "../assets/images/courseImgFour.jpg";

const blogData = [
  {
    id: "1",
    title: "কোর্স বাচাই করার গুরুত্ব",
    author: "Ahshan Habib",
    date: "2024-03-11",
    content:
      "In today's fast-paced world, selecting the right courses has become a necessity rather than a luxury. With rapidly evolving industries and job markets, individuals need to carefully consider their educational choices to stay competitive. This blog explores the significance of necessity in course selection and offers insights into making informed decisions.",
    tags: ["education", "course selection", "career development"],
    likes: 102,
    comments: 15,
    image: ImgOne,
    type: "free",
  },
  {
    id: "2",
    title: "The Role of Necessity in Course Selection",
    author: "Ahshan Habib",
    date: "2024-03-10",
    content:
      "Industries are constantly evolving, driven by technological advancements and changing consumer demands. To thrive in such dynamic environments, individuals must embrace the necessity of updating their skill sets through relevant courses. This blog delves into the importance of necessity in course selection and provides strategies for staying ahead in rapidly changing industries.",
    tags: ["career", "skill development", "industry trends"],
    likes: 85,
    comments: 12,
    image: ImgTwo,
    type: "free",
  },
  {
    id: "3",
    title: "A Necessity for Career Advancement",
    author: "Ahshan Habib",
    date: "2024-03-09",
    content:
      "Career advancement often hinges on acquiring the right skills and knowledge. Recognizing the necessity of selecting appropriate courses is key to unlocking new opportunities and achieving professional growth. This blog discusses the essential role of necessity in course selection and offers practical advice for individuals seeking to advance their careers.",
    tags: ["professional development", "career growth", "skill acquisition"],
    likes: 93,
    comments: 18,
    image: ImgThree,
    type: "premium",
  },
  {
    id: "4",
    title: "Understanding the Necessity Factor",
    author: "Ahshan Habib",
    date: "2024-03-08",
    content:
      "With a myriad of educational options available, individuals often find themselves overwhelmed when it comes to selecting courses. However, by understanding the necessity factor and aligning educational choices with personal and professional goals, individuals can make more informed decisions. This blog explores the importance of necessity in course selection and provides guidance on navigating the educational landscape.",
    tags: ["education", "personal development", "goal setting"],
    likes: 76,
    comments: 10,
    image: ImgFour,
    type: "free",
  },
  {
    id: "5",
    title: "কোর্স বাচাই করার গুরুত্ব",
    author: "Ahshan Habib",
    date: "2024-03-11",
    content:
      "In today's fast-paced world, selecting the right courses has become a necessity rather than a luxury. With rapidly evolving industries and job markets, individuals need to carefully consider their educational choices to stay competitive. This blog explores the significance of necessity in course selection and offers insights into making informed decisions.",
    tags: ["education", "course selection", "career development"],
    likes: 102,
    comments: 15,
    image: ImgOne,
    type: "free",
  },
  {
    id: "6",
    title: "A Necessity for Career Advancement",
    author: "Ahshan Habib",
    date: "2024-03-09",
    content:
      "Career advancement often hinges on acquiring the right skills and knowledge. Recognizing the necessity of selecting appropriate courses is key to unlocking new opportunities and achieving professional growth. This blog discusses the essential role of necessity in course selection and offers practical advice for individuals seeking to advance their careers.",
    tags: ["professional development", "career growth", "skill acquisition"],
    likes: 93,
    comments: 18,
    image: ImgThree,
    type: "premium",
  },
];

export const getAllBlogData = () => {
  return blogData;
};
