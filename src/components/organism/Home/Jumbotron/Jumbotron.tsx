import React from 'react';
import LeftSide from './children/LeftSide';
import { Barlow_Condensed } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import { GrFormNextLink } from 'react-icons/gr';
import { BsArrowDownRight } from 'react-icons/bs';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '800',
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
});
const akiraExpanded = localFont({
  src: '../../../../font/Akira.otf',
  display: 'swap',
});
const Jumbotron = () => {
  return (
    <section className="px-20 pb-10 text-white grid grid-cols-3 items-center pt-36">
      <div>
        <LeftSide />
      </div>
      <div className="col-span-2">
        <div className=" grid grid-cols-2 gap-5">
          <div className="bg-custom-red-primary h-60 group text-white overflow-hidden rounded-xl relative flex flex-col justify-center text-center">
            <span className={barlowCondensed.className + ' text-4xl '}>
              Nov 4-5, 2023
            </span>{' '}
            <br />{' '}
            <span className={plusJakartaSans.className}>
              Jakarta Convention Center (JCC) Senayan, <br /> Assembly,
              Cendrawasih, and Plenary Hall
            </span>{' '}
            <br />{' '}
            <span className={plusJakartaSans.className}>10 AM - 9 PM</span>
            <Image
              alt="captain pose"
              width={100}
              height={100}
              className="absolute -right-8 top-0 group-hover:scale-110 transition-all"
              src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-4.a33ab79.webp"
            />
          </div>
          <div className="bg-custom-yellow h-60 group text-white  overflow-hidden rounded-xl relative flex flex-col justify-center text-center">
            <p>The biggest event in the year to celebrate</p>
            <p className={barlowCondensed.className + ' text-4xl '}>
              5 POP CULTURE <br />
              PILLARS
            </p>
            <p
              style={{ WebkitTextStroke: '1px black' }}
              className={
                akiraExpanded.className + ' text-4xl mt-5 stroke-black'
              }
            >
              TOYS
            </p>
            <Image
              alt="captain pose"
              width={100}
              height={100}
              className="absolute -left-8 -bottom-8 rotate-12 group-hover:rotate-[25deg] transition-all"
              src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-1.df3ac13.svg"
            />
          </div>
          <div className="h-60 group  text-white  rounded-xl relative flex flex-col justify-center text-center">
            <Image
              src={
                'https://indonesiacomiccon.com/_nuxt/img/hero-gallery-04.61344aa.webp'
              }
              alt="captain pose"
              width={500}
              height={500}
              className="w-full object-cover hover:rotate-2 absolute top-14 scale-[0.85] rounded-lg transition-all"
            />
            <Image
              src={
                'https://indonesiacomiccon.com/_nuxt/img/hero-gallery-03.dac5b72.webp'
              }
              alt="captain pose"
              width={500}
              height={500}
              className="w-full object-cover hover:rotate-2 absolute top-10 scale-90 rounded-lg transition-all"
            />
            <Image
              src={
                'https://indonesiacomiccon.com/_nuxt/img/hero-gallery-02.8639736.webp'
              }
              alt="captain pose"
              width={500}
              height={500}
              className="w-full object-cover hover:rotate-2 absolute top-5 scale-95 rounded-lg transition-all"
            />
            <Image
              src={
                'https://indonesiacomiccon.com/_nuxt/img/hero-gallery-01.1a1c50c.webp'
              }
              alt="captain pose"
              width={500}
              height={500}
              className="w-full object-cover hover:rotate-2 absolute top-0 left-0 rounded-lg transition-all"
            />
            <Link
              className="mt-[22rem] hover:underline absolute -bottom-20 left-[50%] tramsform translate-x-[-50%] text-sm  text-white flex items-center justify-center gap-3"
              href="#"
            >
              View the last edition of ICC`s excitement{' '}
              <GrFormNextLink size={25} />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-fit p-px rounded-2xl bg-gradient-to-r from-red-500">
              <div className="bg-gradient-to-r from-gray-900 to-gray-950 w-full h-full rounded-2xl p-5 flex items-center gap-3">
                <div>
                  <h1 className={barlowCondensed.className + ' text-3xl'}>
                    DG Awards 2023
                  </h1>
                  <p className="text-sm line-clamp-2 mt-2">
                    The biggest gaming award event in Indonesia is Coming
                  </p>
                </div>
                <Link href={'#'}>
                  <div className="bg-white h-16 w-16 hover:scale-105 transition-all text-black flex items-center justify-center rounded-full">
                    <BsArrowDownRight size={15} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="h-fit p-px rounded-2xl bg-gradient-to-r from-custom-yellow">
              <div className="bg-gradient-to-r from-gray-900 to-gray-950 w-full h-full rounded-2xl p-5 flex items-center gap-3">
                <div>
                  <h1 className={barlowCondensed.className + ' text-3xl'}>
                    FanMate Fest
                  </h1>
                  <p className="text-sm line-clamp-2 mt-2">
                    Get a chance to win a huge prize and have a chance to be the
                    next Cosplay Idol, Sign-up FanMate account and register as a
                    creator!
                  </p>
                </div>
                <Link href={'#'}>
                  <div className="bg-white h-16 w-16 hover:scale-105 transition-all text-black flex items-center justify-center rounded-full">
                    <BsArrowDownRight size={15} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="h-fit p-px rounded-2xl bg-gradient-to-r from-blue-500">
              <div className="bg-gradient-to-r from-gray-900 to-gray-950 w-full h-full rounded-2xl p-5 flex items-center gap-3">
                <div>
                  <h1 className={barlowCondensed.className + ' text-3xl'}>
                    DG Awards 2023
                  </h1>
                  <p className="text-sm">
                    The biggest gaming award event in Indonesia is Coming
                  </p>
                </div>
                <Link href={'#'}>
                  <div className="bg-white h-16 w-16 hover:scale-105 transition-all text-black flex items-center justify-center rounded-full">
                    <BsArrowDownRight size={15} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
