import React from 'react';
import { Barlow_Condensed } from 'next/font/google';
import InstagramCard from '@/components/atoms/InstagramCard';

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: '800' });

const PortofolioReview = () => {
  return (
    <div className="px-20">
      <div className="px-[15%]">
        <h1
          className={
            barlowCondensed.className +
            ' text-[8vw] text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/100'
          }
        >
          PORTFOLIO REVIEW
        </h1>
        <p>
          Calling all artists, content creators, and art enthusiasts! Get your
          art portfolio reviewed by industry professionals who are passionate
          about supporting and nurturing artistic talent.
        </p>
        <br />
        <br />
        <br />
        <h2 className="font-semibold">Notes</h2>
        <ul className="list-disc ms-5">
          <li>
            Portfolio Review will be held on Indonesia Comic Con, Nov 4-5, 2023,
            in Jakarta Convention Center.
          </li>
          <li>
            You may sign up for more than one category or more than one studio.
          </li>
          <li>
            The chosen participants will get a free entry ticket to Indonesia
            Comic Con (no need to buy the ticket).
          </li>
          <li>The registration will be closed on October 19, 2023.</li>
        </ul>
      </div>
      <div className="py-10 grid grid-cols-4 gap-3">
        <InstagramCard
          url="https://indonesiacomiccon.com/_nuxt/img/mkc-studio.a702225.webp"
          description="For Sketch Artist, Line Artist, Colorist, Storyboard Sketsa"
          title="Portfolio Review by MKC Studio"
        />
        <InstagramCard
          url="https://indonesiacomiccon.com/_nuxt/img/tawakal.ac1ffb8.webp"
          description=""
          title="Portfolio Review by Tawakal Animation"
        />
        <InstagramCard
          url="https://indonesiacomiccon.com/_nuxt/img/brandoville.8fae3d1.webp"
          description="For Concept Artist, 2D Animation Artist, 3D Animation Artist, 3D Modeling Artist, Lighting and Compositing Artist, VFX Artist, Technical Director, Game Programmer"
          title="Portfolio Review by Brandoville Academy"
        />
        <InstagramCard
          url="https://indonesiacomiccon.com/_nuxt/img/tawakal.ac1ffb8.webp"
          description="Terbitkan komikmu di penerbit M&C - KOLONI. List genre komik yang dicari: Horror, Thriller, Action/Adventure, Slice of Life, Komedi, Romance, Komik Islami "
          title="Portfolio Review by m&c! - KOLONI"
        />
      </div>
    </div>
  );
};

export default PortofolioReview;
