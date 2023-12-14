'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import EmojiGlases from '@/svg/EmojiGlases';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import { Plus_Jakarta_Sans } from 'next/font/google';

const akiraFont = localFont({
  src: '../../../../../font/Akira.otf',
  display: 'swap',
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
});
const LeftSide = () => {
  return (
    <div className="relative">
      <p
        className={
          plusJakartaSans.className +
          ' bg-clip-text bg-gradient-to-r from-white/50 to-white/100 text-transparent'
        }
      >
        INDONESIA COMIC CON 2023 ⚡️
      </p>
      <p className={akiraFont.className + ' text-4xl'}>
        BRINGING <br /> THE BEST
        <br />
        <span className="text-red-500">POP</span>{' '}
        <span className="text-custom-yellow">CULTURE</span>
        <br />
        EXPERIENCE
      </p>
      <Image
        src={
          'https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-3.83d6c0d.svg'
        }
        alt="gambar-robot"
        width={100}
        height={100}
        className="absolute -top-6 right-16 hover:scale-110 transition-all"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="bg-white/60 absolute -top-20 -left-10  rounded-full w-20 h-20 flex items-center justify-center"
      >
        <span className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 -rotate-12">
          <EmojiGlases />
        </span>
      </motion.div>
      <div className="mt-10 flex gap-2">
        <Button className="py-5 px-8 text-base">Get Your Ticket</Button>
        <Button className="py-5 px-8 text-base bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all">
          Be part of ICC
        </Button>
      </div>
      <div className="absolute -left-20 flex w-full">
        <Image
          src={
            'https://indonesiacomiccon.com/_nuxt/img/thunderbolt.86d554d.svg'
          }
          alt="thunderbolt"
          width={100}
          height={100}
        />
        <div className="w-full mt-5 bg-red-500 h-1"></div>
        <div className="w-full mt-5 bg-custom-yellow h-1"></div>
        <div className="w-full mt-5 bg-blue-500 h-1"></div>
      </div>
    </div>
  );
};

export default LeftSide;
