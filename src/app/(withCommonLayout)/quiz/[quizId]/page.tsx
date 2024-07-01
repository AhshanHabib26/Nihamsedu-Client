import React from "react";

const QuizPageDetails = ({ params }: any) => {
  const { quizId } = params;

  return <div>QuizPageDetails: {quizId}</div>;
};

export default QuizPageDetails;
