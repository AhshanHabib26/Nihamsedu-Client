"use client";

import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay } from "swiper/modules";
import Image from "next/image";
import Styles from "../../styles/Global.module.css";
import Link from "next/link";
import { getAllBannerData } from "@/data/BannerData";
import Container from "@/utils/Container";
const Banner = () => {
  const banners = getAllBannerData();

  return (
    <div className={`${Styles.mainContainer} py-14`}>
      <Container>
        <SwiperComponent
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <div>
            {banners.map((banner) => (
              <div key={banner.id}>
                <SwiperSlide>
                  <div
                    className={`flex items-center flex-col lg:flex-row lg:justify-around`}
                  >
                    <div className=" mr-5">
                      <p className="text-3xl lg:text-5xl text-white hind-siliguri-bold  justify-center select-none">
                        {banner.title}
                      </p>
                      <div className="my-3">
                        <p className="text-white hind-siliguri-light text-lg max-w-[60ch] select-none">
                          {banner.description}
                        </p>
                      </div>
                      <div className="mt-5">
                        <Link
                          className="bg-customSecondery px-3 py-2 text-white hind-siliguri-regular text-lg rounded-lg select-none"
                          href={banner.link}
                        >
                          বিস্তারিত দেখুন
                        </Link>
                      </div>
                    </div>
                    <div className="shrink-0 mt-10 lg:mt-0">
                      <Image
                        className="w-full h-[320px] lg:h-[350px] rounded-xl object-cover select-none"
                        src={banner.imageUrl}
                        width={500}
                        height={500}
                        alt={banner.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </SwiperComponent>
      </Container>
    </div>
  );
};

export default Banner;
