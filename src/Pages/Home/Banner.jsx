"use client";
import CategoryNav from "@/app/components/CategoryNav";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "@/assets/banner/image1.jpg"
import image2 from "@/assets/banner/image2.jpg"
import image3 from "@/assets/banner/image3.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="pr-20 hidden md:block rounded-l-2xl border">
          <CategoryNav></CategoryNav>
        </div>

        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper flex-1"
        >
          <SwiperSlide className="h-60 md:h-80  "><Image className="h-60 md:h-80   md:rounded-r-2xl" src={image1} alt="imageBanner"></Image></SwiperSlide>
          <SwiperSlide className="h-60 md:h-80  "><Image className="h-60 md:h-80   md:rounded-r-2xl" src={image2} alt="imageBanner"></Image></SwiperSlide>
          <SwiperSlide className="h-60 md:h-80  "><Image className="h-60 md:h-80   md:rounded-r-2xl" src={image3} alt="imageBanner"></Image></SwiperSlide>
          <SwiperSlide className="h-60 md:h-80  "><Image className="h-60 md:h-80   md:rounded-r-2xl" src={image1} alt="imageBanner"></Image></SwiperSlide>
          <SwiperSlide className="h-60 md:h-80  "><Image className="h-60 md:h-80   md:rounded-r-2xl" src={image2} alt="imageBanner"></Image></SwiperSlide>
          <SwiperSlide className="h-60 md:h-80  "><Image className="h-60 md:h-80   md:rounded-r-2xl" src={image3} alt="imageBanner"></Image></SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
