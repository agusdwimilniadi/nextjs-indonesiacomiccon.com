import Image from 'next/image';
import React from 'react';

const MarbleSpinner = () => {
  return (
    <div className="flex justify-center relative py-20">
      <Image
        src={
          'https://indonesiacomiccon.com/_nuxt/img/icc-circular-text.561ce94.svg'
        }
        alt="marble-spinner"
        width={150}
        height={150}
        className=" absolute left-1/2 bsolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 "
      />
      <Image
        src={
          'https://indonesiacomiccon.com/_nuxt/img/marble-gradient.979f33c.webp'
        }
        alt="marble-spinner"
        width={100}
        height={100}
        className=" absolute  left-1/2 bsolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 "
      />
    </div>
  );
};

export default MarbleSpinner;
