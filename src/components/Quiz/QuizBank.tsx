"use client";


import React, { useState } from "react";

const quiz = {
  quizTitle: "মৌলিক গণিত কুইজ",
  quizDescription: "আপনার মৌলিক গণিত দক্ষতা পরীক্ষা করার জন্য একটি কুইজ।",
  questions: [
    {
      questionId: 1,
      questionText: "৫ + ৩ কত?",
      options: [
        {
          optionId: 1,
          optionText: "৬",
          isCorrect: false,
        },
        {
          optionId: 2,
          optionText: "৭",
          isCorrect: false,
        },
        {
          optionId: 3,
          optionText: "৮",
          isCorrect: true,
        },
        {
          optionId: 4,
          optionText: "৯",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 2,
      questionText: "১০ - ৪ কত?",
      options: [
        {
          optionId: 1,
          optionText: "৫",
          isCorrect: false,
        },
        {
          optionId: 2,
          optionText: "৬",
          isCorrect: true,
        },
        {
          optionId: 3,
          optionText: "৭",
          isCorrect: false,
        },
        {
          optionId: 4,
          optionText: "৮",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 3,
      questionText: "৭ * ২ কত?",
      options: [
        {
          optionId: 1,
          optionText: "১২",
          isCorrect: false,
        },
        {
          optionId: 2,
          optionText: "১৩",
          isCorrect: false,
        },
        {
          optionId: 3,
          optionText: "১৪",
          isCorrect: true,
        },
        {
          optionId: 4,
          optionText: "১৫",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 4,
      questionText: "৯ / ৩ কত?",
      options: [
        {
          optionId: 1,
          optionText: "২",
          isCorrect: false,
        },
        {
          optionId: 2,
          optionText: "৩",
          isCorrect: true,
        },
        {
          optionId: 3,
          optionText: "৪",
          isCorrect: false,
        },
        {
          optionId: 4,
          optionText: "৫",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 5,
      questionText: "১৬ এর বর্গমূল কত?",
      options: [
        {
          optionId: 1,
          optionText: "২",
          isCorrect: false,
        },
        {
          optionId: 2,
          optionText: "৩",
          isCorrect: false,
        },
        {
          optionId: 3,
          optionText: "৪",
          isCorrect: true,
        },
        {
          optionId: 4,
          optionText: "৫",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 6,
      questionText: "১০ + ১২ কত?",
      options: [
        {
          optionId: 1,
          optionText: "২০",
          isCorrect: false,
        },
        {
          optionId: 2,
          optionText: "২২",
          isCorrect: true,
        },
        {
          optionId: 3,
          optionText: "২৪",
          isCorrect: false,
        },
        {
          optionId: 4,
          optionText: "২৬",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 7,
      questionText: "১৮ - ৯ কত?",
      options: [
        {
          optionId: 1,
          optionText: "৭",
          isCorrect: false,
        },
        {
          optionId: 2,
          optionText: "৮",
          isCorrect: false,
        },
        {
          optionId: 3,
          optionText: "৯",
          isCorrect: true,
        },
        {
          optionId: 4,
          optionText: "১০",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 8,
      questionText: "৬ * ৬ কত?",
      options: [
        {
          optionId: 1,
          optionText: "৩৬",
          isCorrect: true,
        },
        {
          optionId: 2,
          optionText: "৩৫",
          isCorrect: false,
        },
        {
          optionId: 3,
          optionText: "৩৪",
          isCorrect: false,
        },
        {
          optionId: 4,
          optionText: "৩৩",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 9,
      questionText: "৮ / ২ কত?",
      options: [
        {
          optionId: 1,
          optionText: "৩",
          isCorrect: false,
        },
        {
          optionId: 2,
          optionText: "৪",
          isCorrect: true,
        },
        {
          optionId: 3,
          optionText: "৫",
          isCorrect: false,
        },
        {
          optionId: 4,
          optionText: "৬",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 10,
      questionText: "২৫ এর বর্গমূল কত?",
      options: [
        {
          optionId: 1,
          optionText: "৩",
          isCorrect: false,
        },
        {
          optionId: 2,
          optionText: "৪",
          isCorrect: false,
        },
        {
          optionId: 3,
          optionText: "৫",
          isCorrect: true,
        },
        {
          optionId: 4,
          optionText: "৬",
          isCorrect: false,
        },
      ],
    },
  ],
};

const QuizBank = () => {
  const [userAnswers, setUserAnswers] = useState({});

  const handleOptionChange = (questionId: number, optionId: number) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: optionId,
    });
  };

  const handleSubmitQuiz = () => {
    console.log(userAnswers);
    // const apiUrl = '';

    // fetch(apiUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userAnswers),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Quiz submitted successfully:', data);
    // })
    // .catch(error => {
    //   console.error('Error submitting quiz:', error);
    // });
  };

  return (
    <div>
      {" "}
      {/* <div className=" flex items-center bg-customPrimary w-[350px] text-white justify-center mb-1 py-2 rounded">
        <h1 className="text-lg hind-siliguri-regular mr-2">Time Remaining:</h1>
        <p className="text-lg hind-siliguri-light">
          {timer.minutes} Minutes {timer.seconds} Seconds
        </p>
      </div> */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {quiz.questions.map((question, index) => (
            <div className="border p-3 rounded-lg" key={question.questionId}>
              <div className="flex items-center">
                <p className="text-lg hind-siliguri-regular mr-2">
                  {index + 1}.
                </p>
                <p className="text-lg hind-siliguri-regular">
                  {question.questionText}
                </p>
              </div>
              <ul>
                {question.options.map((option) => (
                  <li key={option.optionId}>
                    <input
                      className="mr-2 cursor-pointer"
                      type="radio"
                      name={`question-${question.questionId}`}
                      value={option.optionId}
                      onChange={() =>
                        handleOptionChange(question.questionId, option.optionId)
                      }
                    />
                    <label className="text-lg hind-siliguri-regular">
                      {option.optionText}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <button
        className="mt-3 bg-customSecondery px-5 py-3 text-white text-lg hind-siliguri-regular rounded-md "
        onClick={handleSubmitQuiz}
      >
        কুইজ সাবমিট করুন
      </button>
    </div>
  );
};

export default QuizBank;
