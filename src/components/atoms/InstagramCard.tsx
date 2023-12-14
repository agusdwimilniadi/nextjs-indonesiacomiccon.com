import Image from 'next/image';
import React from 'react';

const InstagramCard = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => {
  return (
    <div className=" rounded-lg  bg-custom-blue-primary p-10">
      <div className="w-20 h-20 p-1 bg-gradient-to-r from-[#EA9D21] to-[#E33C43] mx-auto rounded-full">
        <Image
          src={url}
          alt="instagram"
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-3 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-sm">{description}</p>
        <button className="bg-blue-500 px-4 py-1  rounded-full">Join</button>
      </div>
    </div>
  );
};

export default InstagramCard;
