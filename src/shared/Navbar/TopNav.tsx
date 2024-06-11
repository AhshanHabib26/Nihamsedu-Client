import { formattedBanglaDate } from "@/libs/ConvertDateInBangla";
import Container from "@/utils/Container";
import Link from "next/link";
import React from "react";
import {
  FaArrowTrendUp,
  FaFacebookF,
  FaLinkedinIn,
  FaRegClock,
  FaYoutube,
} from "react-icons/fa6";

const TopNav = () => {
  return (
    <div className="bg-customPrimary">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className=" flex items-center">
            <FaArrowTrendUp color="#fff" size={18} />
            <p className=" hind-siliguri-light text-lg ml-2 text-white">
              রিয়্যাক্ট ভার্চুয়াল ডম বিস্তারিত
            </p>
          </div>
          <div className=" hidden lg:block">
            <div className=" flex items-center gap-3">
              <div className=" flex items-center">
                <FaRegClock color="#fff" size={18} />
                <p className="hind-siliguri-light text-lg ml-1 text-white">
                  {formattedBanglaDate}
                </p>
              </div>
              <hr className=" border-[#fff] border h-[16px]" />
              <div className=" flex items-center">
                <Link href="/">
                  <FaFacebookF
                    className="text-white hover:text-customSecondery transition-colors duration-300"
                    size={18}
                  />
                </Link>
                <Link href="/">
                  {" "}
                  <FaLinkedinIn
                    className="text-white hover:text-customSecondery transition-colors duration-300 mx-2"
                    size={18}
                  />
                </Link>
                <Link href="/">
                  {" "}
                  <FaYoutube
                    className="text-white hover:text-customSecondery transition-colors duration-300"
                    size={18}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
