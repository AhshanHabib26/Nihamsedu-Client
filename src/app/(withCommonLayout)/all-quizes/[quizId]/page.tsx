import Container from "@/utils/Container";
import React from "react";
import QuizImg from "../../../../assets/images/quizImg.jpg";
import Image from "next/image";
import { MdOutlineQuiz } from "react-icons/md";
import { IoDocumentTextOutline, IoPricetagsOutline } from "react-icons/io5";
import { LuFileQuestion } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import QuizBank from "@/components/Quiz/QuizBank";
import PQuizDetails from "@/components/Quiz/PQuizDetails";


const QuizPageDetails = ({ params }: any) => {
  const { quizId } = params;

  return (
    <div className="mt-10">
      <PQuizDetails />
    </div>
  );
};

export default QuizPageDetails;
