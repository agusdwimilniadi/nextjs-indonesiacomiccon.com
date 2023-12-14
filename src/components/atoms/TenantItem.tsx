import Image from 'next/image';
import React from 'react';

const TenantItem = ({ src, label }: { src: string; label: string }) => {
  return (
    <div className="w-40 h-40 flex items-center flex-col justify-center">
      <div className=" w-20 h-20 bg-white rounded-3xl mx-3">
        <Image
          src={src}
          alt="marble-spinner"
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <p className="text-center mt-2 font-thin">{label}</p>
    </div>
  );
};

export default TenantItem;
