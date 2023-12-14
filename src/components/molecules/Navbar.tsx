import Logo from '@/svg/Logo';
import React from 'react';
import NavItem from '../atoms/NavItem';
import Button from '../atoms/Button';

const Navbar = () => {
  return (
    <nav className="flex fixed z-50 w-full justify-between items-center px-20 backdrop-blur text-white ">
      <div className="w-40 h-fit">
        <Logo />
      </div>
      <div className="flex gap-2">
        <NavItem isActive href="#" label="Home" />
        <NavItem href="#" label="Guest" />
        <NavItem href="#" label="Rundown" />
        <NavItem href="#" label="Tenants" />
        <NavItem href="#" label="Promo" />
        <NavItem href="#" label="Gallery" />
        <NavItem isHaveChild href="#" label="More" />
      </div>
      <div>
        <Button>Get Your Tikcet</Button>
      </div>
    </nav>
  );
};

export default Navbar;
