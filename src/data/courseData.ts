import ImgOne from "../assets/images/courseImgOne.jpg";
import ImgTwo from "../assets/images/courseImgTwo.jpg";
import ImgThree from "../assets/images/courseImgThree.jpg";
import ImgFour from "../assets/images/courseImgFour.jpg";
import ImgFive from "../assets/images/courseImgFive.jpg";
import ImgSix from "../assets/images/courseImgSix.jpg";
import ImgSeven from "../assets/images/courseImgSeven.jpg";
import ImgEight from "../assets/images/courseImgEight.jpg";
import ImgNine from "../assets/images/courseImgNine.jpg";
import ImgTen from "../assets/images/courseImgTen.jpg";
import ImgEleven from "../assets/images/cybersecurity.jpg";
import ImgTwelve from "../assets/images/dataScience.jpg";

export const courseData = [
  {
    id: "1",
    title: "প্রাথমিক পাইথন প্রোগ্রামিং কোর্স",
    description:
      "This course offers a comprehensive introduction to Python, a versatile programming language used in a variety of applications. It covers fundamental concepts such as variables, data types, control flow, and functions. Students will also learn about more advanced topics like object-oriented programming and file handling. The course includes hands-on exercises and projects to reinforce learning. Whether you're new to programming or looking to expand your skills, this course provides a solid foundation in Python programming.",
    instructor: "এহছান হাবিব",
    image: ImgOne,
    price: "৪৫০০",
    rating: 4.9,
    ratingCount: 12,
    duration: "৮ সপ্তাহ",
    level: "Beginner",
    category: "Programming",
  },
  {
    id: "2",
    title: "ওয়েব ডেভেলপমেন্ট ফান্ডামেন্টাল",
    description:
      "This course covers the basics of web development, including HTML, CSS, and JavaScript. Students will learn how to create and style web pages, as well as how to add interactivity with JavaScript. The course also introduces popular frameworks and libraries such as Bootstrap and jQuery. By the end of the course, students will have the skills to create their own websites from scratch.",
    instructor: "শানজিদা প্রধান",
    image: ImgTwo,
    price: "৫৯৯৯",
    rating: 4.5,
    ratingCount: 10,
    duration: "১০ সপ্তাহ",
    level: "Intermediate",
    category: "Web Development",
  },
  {
    id: "3",
    title: "মেসিন লার্নিং এসেনসিয়াল",
    description:
      "Machine learning is a rapidly growing field with applications in various industries, from finance to healthcare. This course provides an introduction to the key concepts and techniques used in machine learning, such as regression, classification, clustering, and neural networks. Students will learn how to apply machine learning algorithms to real-world datasets and evaluate their performance. The course also covers best practices for data preprocessing and model evaluation.",
    instructor: "হাবিব আরিয়ান",
    image: ImgTwelve,
    price: "৭৯৯৯",
    rating: 4.9,
    ratingCount: 16,
    duration: "১২ সপ্তাহ",
    level: "Intermediate",
    category: "Data Science",
  },
  {
    id: "4",
    title: "iOS App Development with Swift",
    description:
      "Learn how to develop iOS applications using the Swift programming language. This course covers the basics of Swift syntax, UI design principles, and the iOS development environment. Students will build several iOS apps throughout the course, gaining practical experience with features such as navigation, data persistence, and networking. By the end of the course, students will be able to create their own iOS apps and deploy them to the App Store.",
    instructor: "সারাহ জাহান",
    image: ImgThree,
    price: "৭৯৯৯",
    rating: 3.5,
    ratingCount: 8,
    duration: "১০ সপ্তাহ",
    level: "Intermediate",
    category: "Mobile Development",
  },
  {
    id: "5",
    title: "Introduction to Data Analysis",
    description:
      "Data analysis is an essential skill for anyone working with data. This course covers the basics of data analysis, including data wrangling, exploratory data analysis, and data visualization. Students will learn how to use popular libraries such as pandas, numpy, and matplotlib in Python to analyze and visualize data. The course also covers statistical concepts and techniques for drawing insights from data.",
    instructor: "এহছান হাবীব",
    image: ImgFour,
    price: "৫৯৯৯",
    rating: 4,
    ratingCount: 18,
    duration: "৮ সপ্তাহ",
    level: "Beginner",
    category: "Data Science",
  },
  {
    id: "6",
    title: "JavaScript Advanced Techniques",
    description:
      "Take your JavaScript skills to the next level with this advanced course. Learn about advanced JavaScript concepts such as closures, prototypes, async programming, and functional programming. The course also covers modern JavaScript features introduced in ES6 and beyond, such as arrow functions, destructuring, and modules. Students will gain a deeper understanding of JavaScript and learn how to write more efficient and maintainable code.",
    instructor: "এহছান হাবীব",
    image: ImgFive,
    price: "৩৯৯৯",
    rating: 4.8,
    ratingCount: 50,
    duration: "১০ সপ্তাহ",
    level: "Advanced",
    category: "Web Development",
  },
  {
    id: "7",
    title: "Introduction to Artificial Intelligence",
    description:
      "Artificial intelligence (AI) is revolutionizing industries and transforming our daily lives. This course provides a gentle introduction to AI concepts and techniques, including search algorithms, knowledge representation, machine learning, and natural language processing. Students will learn how to apply AI techniques to solve real-world problems and gain insights into the future of AI.",
    instructor: "Dr. Sophia Rodriguez",
    image: ImgSix,
    price: "89.99",
    rating: 2.5,
    ratingCount: 16,
    duration: "12 weeks",
    level: "Intermediate",
    category: "Artificial Intelligence",
  },
  {
    id: "8",
    title: "Game Development with Unity",
    description:
      "Learn how to create games using the Unity game engine, one of the most popular game development platforms. This course covers the basics of game development, including game design principles, scripting with C#, and working with assets in Unity. Students will build several games throughout the course, gaining practical experience with features such as physics, animation, and user interfaces.",
    instructor: "Mark Thompson",
    image: ImgSeven,
    price: "99.99",
    rating: 3.5,
    ratingCount: 7,
    duration: "12 weeks",
    level: "Intermediate",
    category: "Game Development",
  },
  {
    id: "9",
    title: "Cybersecurity Fundamentals",
    description:
      "With cyber threats on the rise, cybersecurity has never been more important. This course provides an introduction to cybersecurity principles and practices, including network security, cryptography, risk management, and ethical hacking. Students will learn how to identify common cyber threats and protect against them using industry-standard tools and techniques.",
    instructor: "Dr. Rachel Williams",
    image: ImgEleven,
    price: "69.99",
    rating: 4.8,
    ratingCount: 26,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Cybersecurity",
  },
  {
    id: "10",
    title: "Blockchain Fundamentals",
    description:
      "Blockchain technology is revolutionizing industries such as finance, supply chain management, and healthcare. This course provides a comprehensive introduction to blockchain concepts and applications, including cryptocurrencies, smart contracts, and decentralized applications. Students will learn how blockchain works, its potential benefits and challenges, and how to develop blockchain-based solutions.",
    instructor: "James Carter",
    image: ImgEight,
    price: "79.99",
    rating: 4.2,
    ratingCount: 13,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Blockchain",
  },
  {
    id: "11",
    title: "Digital Marketing Strategy",
    description:
      "Digital marketing is essential for businesses to reach their target audience and grow their brand online. This course covers the fundamentals of digital marketing, including search engine optimization (SEO), social media marketing, email marketing, and content marketing. Students will learn how to create effective digital marketing strategies and measure their success.",
    instructor: "Anna Davis",
    image: ImgNine,
    price: " 49.99",
    rating: 4.0,
    ratingCount: 16,
    duration: "8 weeks",
    level: "Beginner",
    category: "Marketing",
  },
  {
    id: "12",
    title: "Introduction to Cloud Computing",
    description:
      "Cloud computing has transformed the way businesses deploy and manage IT resources. This course provides an introduction to cloud computing concepts and services, including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS). Students will learn about popular cloud platforms such as Amazon Web Services (AWS) and Microsoft Azure, as well as cloud deployment models and security best practices.",
    instructor: "David Wilson",
    image: ImgTen,
    price: "59.99",
    rating: 4.8,
    ratingCount: 24,
    duration: "8 weeks",
    level: "Beginner",
    category: "Cloud Computing",
  },
];

const getAllCourses = () => {
  return courseData;
};

export default getAllCourses;
