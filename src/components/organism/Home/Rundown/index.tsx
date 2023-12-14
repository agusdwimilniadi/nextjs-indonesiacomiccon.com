'use client';
import React, { useState } from 'react';
import { Barlow_Condensed, Plus_Jakarta_Sans } from 'next/font/google';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: '700' });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: '200',
});
const Rundown = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <div>
      <div className="h-fit w-full flex justify-center items-center">
        <h1
          className={
            barlowCondensed.className +
            ' text-[15vw] text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/100'
          }
        >
          RUNDOWN
        </h1>
      </div>
      <div>
        <div className="relative ">
          <Swiper
            navigation={{ prevEl, nextEl }}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper cursor-grab"
          >
            <SwiperSlide>
              <div>
                <Image
                  src={
                    'https://indonesiacomiccon.com/img/rundown/Day1-SuperStage.webp'
                  }
                  alt="marble-spinner"
                  width={350}
                  height={350}
                  className="w-full object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={
                    'https://indonesiacomiccon.com/img/rundown/Day1-WonderStage.webp'
                  }
                  alt="marble-spinner"
                  width={350}
                  height={350}
                  className="w-full object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={
                    'https://indonesiacomiccon.com/img/rundown/Day2-SuperStage.webp'
                  }
                  alt="marble-spinner"
                  width={350}
                  height={350}
                  className="w-full object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={
                    'https://indonesiacomiccon.com/img/rundown/Day2-WonderStage.webp'
                  }
                  alt="marble-spinner"
                  width={350}
                  height={350}
                  className="w-full object-cover "
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="absolute bottom-20 z-50 flex gap-3  left-1/2 transform -translate-x-1/2">
            <button
              ref={(node) => setPrevEl(node)}
              className="  text-white bg-custom-blue-primary p-2 font-thin rounded-full "
            >
              <MdKeyboardArrowLeft size={35} />
            </button>
            <button
              ref={(node) => setNextEl(node)}
              className="  text-white bg-custom-blue-primary p-2 rounded-full"
            >
              <MdKeyboardArrowRight size={35} />
            </button>
          </div>
          <Link
            className="hover:underline mt-10 text-center w-full flex items-center justify-center gap-3 pb-5"
            href={'#'}
          >
            View rundown <HiArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rundown;
