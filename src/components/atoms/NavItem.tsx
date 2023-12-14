'use client';
import Underline from '@/svg/Underline';
import React, { useState } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import SubChildNavItem from './SubChildNavItem';
import { PiCodesandboxLogoLight } from 'react-icons/pi';
import { MdExpandMore } from 'react-icons/md';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });
const DATA_CHILDREN_NAV = [
  {
    icon: <PiCodesandboxLogoLight size={20} />,
    label: 'Meet and Greet',
  },
  {
    icon: <PiCodesandboxLogoLight size={20} />,
    label: 'Raya Championship of Cosplay',
  },
  {
    icon: <PiCodesandboxLogoLight size={20} />,
    label: 'FanMate Fest',
  },
  {
    icon: <PiCodesandboxLogoLight size={20} />,
    label: 'Portofolio Review',
  },
  {
    icon: <PiCodesandboxLogoLight size={20} />,
    label: 'Tenant Registration',
  },
];
const NavItem = ({
  isActive,
  label,
  href,
  isHaveChild,
}: {
  isActive?: boolean;
  label: string;
  href: string;
  isHaveChild?: boolean;
}) => {
  const [isOpenChildren, setIsOpenChildren] = useState(false);
  return (
    <Link href={href} className={inter.className + ' font-thin '}>
      <div
        onClick={() => {
          if (isHaveChild) {
            setIsOpenChildren(!isOpenChildren);
          }
        }}
        className={`${
          isActive
            ? 'bg-custom-black-secondary'
            : 'hover:bg-custom-black-secondary'
        } p-4 rounded-full my-3 text-sm relative`}
      >
        <p className="mb-2 flex items-center gap-3">
          {label} {isHaveChild ? <MdExpandMore size={20} /> : null}
        </p>
        {isActive ? <Underline /> : null}
        {isHaveChild ? (
          <div
            className={`absolute ${
              isOpenChildren ? 'block' : 'hidden'
            } top-16 p-5 rounded-lg w-96 my-2 max-h-48 overflow-y-scroll  bg-custom-blue-primary`}
          >
            {DATA_CHILDREN_NAV.map((item) => (
              <SubChildNavItem
                key={item.label}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export default NavItem;
