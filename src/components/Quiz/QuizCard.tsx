import { TQuizProps } from "@/types/types.global";
import React from "react";
import QuizImg from "../../assets/images/quizImg.jpg";
import Image from "next/image";
import { MdOutlineQuiz } from "react-icons/md";
import { FaPlay, FaRegClock } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuFileQuestion } from "react-icons/lu";
import Styles from "../../styles/QuizCard.module.css";
import Link from "next/link";

const QuizCard: React.FC<TQuizProps> = ({ quiz }) => {
  return (
    <div
      className={`flex gap-2 border p-3 rounded-lg ${Styles.QCMainContainer}`}
    >
      <div>
        <Image
          className=" rounded-lg select-none"
          src={QuizImg}
          width={100}
          height={100}
          alt={quiz.title}
        />
      </div>
      <div className=" w-full">
        <div className="flex items-center gap-1">
          <MdOutlineQuiz className=" text-customPrimary" size={16} />
          <h1 className="text-xl hind-siliguri-regular">{quiz.title}</h1>
        </div>
        <div className=" flex items-center justify-between my-1">
          <div className="flex items-center gap-1">
            <LuFileQuestion className=" text-customPrimary" size={16} />
            <p className="text-md hind-siliguri-light">
              {quiz.numberOfQuestions}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegClock className=" text-customPrimary" size={16} />
            <p className="text-md hind-siliguri-light">{quiz.duration}</p>
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IoPricetagsOutline className=" text-customPrimary" size={16} />
            <p
              className={`text-md hind-siliguri-light ${
                quiz.difficultyLevel === "Easy"
                  ? "text-orange-500"
                  : quiz.difficultyLevel === "Medium"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {quiz.difficultyLevel}
            </p>
          </div>
          <Link href={`/all-quizes/${quiz.id}`}>
            <FaPlay className=" text-customPrimary cursor-pointer" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
