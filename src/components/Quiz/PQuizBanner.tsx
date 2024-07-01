import React from "react";
import Styles from "../../styles/PQuizBanner.module.css";
import { CiSearch } from "react-icons/ci";

const PQuizBanner = () => {
  return (
    <div className={`${Styles.PQuizBannerBG} relative py-28`}>
      <div className={`${Styles.PQuizBannerInner} w-[80%] lg:w-[50%]`}>
        <div className="flex items-center">
          <input
            className=" w-full h-[50px] relative rounded-md bg-gray-200 outline-none pl-3 text-lg hind-siliguri-light"
            type="text"
            name="quiz"
            id="quiz"
            placeholder="বাংলা কুইজ, প্রোগ্রামিং কুইজ..."
          />
          <CiSearch className=" absolute right-3 cursor-pointer" size={22} />
        </div>
      </div>
    </div>
  );
};

export default PQuizBanner;
