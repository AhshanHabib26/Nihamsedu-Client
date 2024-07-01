import { getAllQuizData } from "@/data/QuizData";
import Container from "@/utils/Container";
import Link from "next/link";
import React from "react";
import QuizCard from "./QuizCard";
import { TQuiz } from "@/types/types.global";

const Quiz = () => {
  const quizes = getAllQuizData();

  return (
    <div>
      <Container>
        <div className="mt-12">
          <h1 className="text-3xl hind-siliguri-bold text-center">
            জনপ্রিয় <span className="text-customSecondery">সকল কুইজ</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 gap-4 max-w-6xl mx-auto">
            {quizes.slice(0, 6).map((quiz: TQuiz) => (
              <QuizCard quiz={quiz} key={quiz.id} />
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center">
            <Link
              className=" px-4 py-2 bg-customSecondery text-lg text-white rounded-lg"
              href="/all-quizes"
            >
              সকল কুইজ দেখুন
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Quiz;
