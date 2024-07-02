"use client";

import Container from "@/utils/Container";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import QuizImg from "../../assets/images/quizImg.jpg";
import { MdOutlineQuiz } from "react-icons/md";
import { IoDocumentTextOutline, IoPricetagsOutline } from "react-icons/io5";
import { LuFileQuestion } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import QuizBank from "./QuizBank";
import { parseQuizDuration } from "@/libs/ConvertDurationBanglaToEnglish";
import Swal from "sweetalert2";

const data = {
  id: 1,
  title: "মৌলিক গণিত কুইজ",
  description:
    "সহজ গাণিতিক প্রশ্নের মাধ্যমে আপনার মৌলিক গণিত দক্ষতা পরীক্ষা করুন এবং গণিতের প্রতি আপনার ভালোবাসা বাড়িয়ে তুলুন।",
  numberOfQuestions: "৫ প্রশ্ন",
  duration: "1 minute",
  difficultyLevel: "Easy",
};

const PQuizDetails = () => {
  const [showQuizBank, setShowQuizBank] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const quizDurationMinutes = parseQuizDuration(data.duration);

  const startTimer = useCallback(() => {
    setTimeLeft(quizDurationMinutes * 60);
    setTimerRunning(true);
  }, [quizDurationMinutes]);

  const stopTimer = useCallback(() => {
    setTimerRunning(false);
  }, []);

  const handleButtonClick = () => {
    if (clickCount < 4) {
      setShowQuizBank((prevState) => !prevState);
      setClickCount((prevCount) => prevCount + 1);

      if (timerRunning) {
        stopTimer();
      } else {
        startTimer();
      }
    }
  };

  useEffect(() => {
    if (!timerRunning || timeLeft <= 0) {
      if (timeLeft <= 0 && showQuizBank) {
        Swal.fire({
          title: "সময় শেষ!",
          text: "আপনার সময় শেষ হয়েছে।",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#001D25",
          cancelButtonColor: "#FF3158",
          confirmButtonText: "কুইজ পুনরায় শুরু করুন",
          cancelButtonText: "কুইজ পৃষ্ঠায় যান",
        }).then((result) => {
          if (result.isConfirmed) {
            startTimer();
          } else {
            setShowQuizBank(false);
            stopTimer();
          }
        });
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, timerRunning, showQuizBank, startTimer, stopTimer]); // Include stopTimer in the dependency array

  useEffect(() => {
    return () => {
      setTimerRunning(false);
    };
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <Container>
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 max-w-5xl mx-auto border p-3 rounded-lg">
          <div className="shrink-0">
            <Image
              className="rounded-lg"
              src={QuizImg}
              width={250}
              height={250}
              alt={data.title}
            />
          </div>
          <div className="shrink mt-3 lg:mt-0">
            <div className="flex items-center gap-1">
              <MdOutlineQuiz className="text-customPrimary" size={18} />
              <h1 className="text-xl hind-siliguri-regular">{data.title}</h1>
            </div>
            <div className="my-1 flex gap-1">
              <IoDocumentTextOutline
                className="text-customPrimary shrink-0"
                size={18}
              />
              <p className="text-lg hind-siliguri-regular">
                {data.description}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <LuFileQuestion className="text-customPrimary" size={18} />
              <p className="text-lg hind-siliguri-light">
                {data.numberOfQuestions}
              </p>
            </div>
            <div className="my-1 flex items-center gap-1">
              <FaRegClock className="text-customPrimary" size={18} />
              <p className="text-lg hind-siliguri-light">{data.duration}</p>
            </div>
            <div className="flex items-center gap-1">
              <IoPricetagsOutline className="text-customPrimary" size={18} />
              <p
                className={`text-lg hind-siliguri-light ${
                  data.difficultyLevel === "Easy"
                    ? "text-orange-500"
                    : data.difficultyLevel === "Medium"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {data.difficultyLevel}
              </p>
            </div>
            <div className="mt-5 flex items-end justify-end">
              <button
                onClick={handleButtonClick}
                disabled={clickCount >= 4}
                className={`bg-customPrimary px-5 py-3 text-white text-lg hind-siliguri-regular rounded-md ${
                  clickCount >= 4 ? "cursor-not-allowed opacity-70" : "cursor-pointer"
                }`}
              >
                কুইজ শুরু করুন
              </button>
            </div>
          </div>
        </div>
        {showQuizBank && (
          <div className="max-w-5xl mx-auto mt-5">
            <div className="flex items-center mb-4">
              <h1 className=" bg-customPrimary px-4 py-2 text-lg hind-siliguri-regular text-white rounded-s-lg">Times Reamainig</h1>
              <h1 className=" bg-customSecondery w-[80px] p-2 text-lg hind-siliguri-regular text-center text-white rounded-e-lg">{formatTime(timeLeft)}</h1>
            </div>
            <QuizBank />
          </div>
        )}
      </Container>
    </div>
  );
};

export default PQuizDetails;
