import PQuizBanner from "@/components/Quiz/PQuizBanner";
import PQuizCategory from "@/components/Quiz/PQuizCategory";
import PQuizPagination from "@/components/Quiz/PQuizPagination";
import QuizCard from "@/components/Quiz/QuizCard";
import { getAllQuizData } from "@/data/QuizData";
import { TQuiz } from "@/types/types.global";
import Container from "@/utils/Container";
import React from "react";

const QuizPage = () => {
  const quizes = getAllQuizData();

  return (
    <div>
      <PQuizBanner />
      <Container>
        <PQuizCategory />
        <hr className="my-8  border-slate-300 border-dashed" />
        <div>
          {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 gap-4 max-w-6xl mx-auto">
              {quizes.map((quiz: TQuiz) => (
                <QuizCard quiz={quiz} key={quiz.id} />
              ))}
            </div>
          }
        </div>
        <div className="mt-8 flex items-center justify-center">
          <PQuizPagination />
        </div>
      </Container>
    </div>
  );
};

export default QuizPage;
