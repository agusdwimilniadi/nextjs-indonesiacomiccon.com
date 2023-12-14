'use client';
import Image from 'next/image';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Ads = () => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
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
                'https://indonesiacomiccon.com/_nuxt/img/telkomsel-banner.36432df.webp'
              }
              alt="marble-spinner"
              width={300}
              height={300}
              className="w-full object-cover "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={
                'https://indonesiacomiccon.com/_nuxt/img/zenmarket-banner.4352207.webp'
              }
              alt="marble-spinner"
              width={500}
              height={500}
              className="w-full object-cover "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={
                'https://indonesiacomiccon.com/_nuxt/img/wetv-banner.5c8f70e.webp'
              }
              alt="marble-spinner"
              width={500}
              height={500}
              className="w-full object-cover "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={'https://indonesiacomiccon.com/_nuxt/img/will.e62ede8.webp'}
              alt="marble-spinner"
              width={500}
              height={500}
              className="w-full object-cover "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={
                'https://indonesiacomiccon.com/_nuxt/img/larissa.4c558b7.webp'
              }
              alt="marble-spinner"
              width={500}
              height={500}
              className="w-full object-cover "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ads;
