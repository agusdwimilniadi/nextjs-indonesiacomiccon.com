'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';
import { Barlow_Condensed } from 'next/font/google';
import Star from '@/svg/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Slider from '@/components/molecules/Slider';

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: '700' });

const GuestStar = () => {
  return (
    <>
      <div className="h-fit w-full flex justify-between relative">
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Star />
        </div>
        <h1 className={barlowCondensed.className + ' text-[15vw] '}>GUEST</h1>
        <h1 className={barlowCondensed.className + ' text-[15vw] '}>STARS</h1>
      </div>
      <div>
        <Slider />
      </div>
    </>
  );
};

export default GuestStar;
