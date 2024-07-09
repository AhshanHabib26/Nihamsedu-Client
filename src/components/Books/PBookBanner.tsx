import React from "react";
import Styles from "../../styles/PBookBanner.module.css";
import { CiSearch } from "react-icons/ci";

const PBookBanner = () => {
  return (
    <div className={`${Styles.PBookBannerBG} relative py-28`}>
      <div className={`${Styles.PBookBannerInner} w-[80%] lg:w-[50%]`}>
        <div className="flex items-center">
          <input
            className=" w-full h-[50px] relative rounded-md bg-gray-200 outline-none pl-3 text-lg hind-siliguri-light"
            type="text"
            name="quiz"
            id="quiz"
            placeholder="বাংলা হ্যান্ডনোট, ইংরেজি হ্যান্ডনোট..."
          />
          <CiSearch className=" absolute right-3 cursor-pointer" size={22} />
        </div>
      </div>
    </div>
  );
};

export default PBookBanner;
