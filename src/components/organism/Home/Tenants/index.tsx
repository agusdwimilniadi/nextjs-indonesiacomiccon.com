import TenantItem from '@/components/atoms/TenantItem';
import { Barlow_Condensed } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { HiArrowUpRight } from 'react-icons/hi2';

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: '700' });

const DATA_TENANTS = [
  {
    label: 'TAHILALATS',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-perusahaan-elyyus-sunarsa_1698138099-sm.png',
  },
  {
    label: 'TAWAKAL ANIMATION',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-tawakal_1698145084-sm.png',
  },
  {
    label: 'TELKOMSEL',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-telkomsel_1698403789-sm.png',
  },
  {
    label: 'TELKOMSEL TOYS',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-tsel-telkomsel-toys_1698206765-sm.png',
  },
  {
    label: 'TIKAM SAMURAI',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-tikam-samurai_1698903016-sm.png',
  },
  {
    label: 'UVERSENI SYNCRO',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-uverseni_1698402843-sm.png',
  },
  {
    label: 'VIDIO',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-vidio_1698384609-sm.png',
  },
  {
    label: 'VISION+',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-vision_1698401123-sm.png',
  },
  {
    label: 'WARNER BROS INDONESIA',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-provaliant-warner-bros_1698207153-sm.png',
  },
  {
    label: 'WEAR KARURU',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-wear-kuruu_1698142688-sm.png',
  },
  {
    label: 'WETV',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-wetv-for-icc-2023-1-line-full-color-black-vtirta_1698209041-sm.png',
  },
  {
    label: 'YOTAKUSHOP',
    img: 'https://api.indonesiacomiccon.com/storage/files/logo-yotakushop_1698385979-sm.png',
  },
];

const Tenants = () => {
  return (
    <div>
      <div className="h-fit w-full flex justify-center items-center">
        <h1
          className={
            barlowCondensed.className +
            ' text-[15vw] text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/100'
          }
        >
          TENANTS
        </h1>
      </div>
      <div>
        <Marquee>
          {DATA_TENANTS.map((item) => {
            return (
              <TenantItem src={item.img} label={item.label} key={item.img} />
            );
          })}
        </Marquee>
        <Link
          className="hover:underline mt-10 text-center w-full flex items-center justify-center gap-3 pb-5"
          href={'#'}
        >
          View all tenants <HiArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default Tenants;
