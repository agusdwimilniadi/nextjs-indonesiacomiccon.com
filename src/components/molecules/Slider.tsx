import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import Image from 'next/image';
import { Barlow_Condensed, Plus_Jakarta_Sans } from 'next/font/google';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '700',
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: '200',
});

const Slider = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <div className="relative ">
      <Swiper
        navigation={{ prevEl, nextEl }}
        slidesPerView={4}
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
                'https://indonesiacomiccon.com/_nuxt/img/ed-westwick.d55a99c.webp'
              }
              alt="marble-spinner"
              width={100}
              height={100}
              className="w-full object-cover "
            />
            <div
              className={
                barlowCondensed.className + ' text-white mt-10 text-4xl'
              }
            >
              <h1>Ed Westwick</h1>
              <p className={plusJakartaSans.className + ' text-sm'}>
                <span>Actor &apos; Nov 4-5</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={
                'https://indonesiacomiccon.com/_nuxt/img/hakaosan.6397957.webp'
              }
              alt="marble-spinner"
              width={100}
              height={100}
              className="w-full object-cover "
            />
            <div
              className={
                barlowCondensed.className + ' text-white mt-10 text-4xl'
              }
            >
              <h1>Hakaosan</h1>
              <p className={plusJakartaSans.className + ' text-sm'}>
                <span>Cosplayer &apos; Nov 4-5</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={'https://indonesiacomiccon.com/_nuxt/img/ely.80e985b.webp'}
              alt="marble-spinner"
              width={100}
              height={100}
              className="w-full object-cover "
            />
            <div
              className={
                barlowCondensed.className + ' text-white mt-10 text-4xl'
              }
            >
              <h1>Ely</h1>
              <p className={plusJakartaSans.className + ' text-sm'}>
                <span>Cosplayer &apos; Nov 4-5</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={'https://indonesiacomiccon.com/_nuxt/img/will.e62ede8.webp'}
              alt="marble-spinner"
              width={100}
              height={100}
              className="w-full object-cover "
            />
            <div
              className={
                barlowCondensed.className + ' text-white mt-10 text-4xl'
              }
            >
              <h1>Will</h1>
              <p className={plusJakartaSans.className + ' text-sm'}>
                <span>Cosplayer &apos; Nov 4-5</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={
                'https://indonesiacomiccon.com/_nuxt/img/larissa.4c558b7.webp'
              }
              alt="marble-spinner"
              width={100}
              height={100}
              className="w-full object-cover "
            />
            <div
              className={
                barlowCondensed.className + ' text-white mt-10 text-4xl'
              }
            >
              <h1>Larissa Rochefort</h1>
              <p className={plusJakartaSans.className + ' text-sm'}>
                <span>Cosplayer &apos; Nov 4</span>
              </p>
            </div>
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
        View all guest <HiArrowUpRight />
      </Link>
    </div>
  );
};

export default Slider;
