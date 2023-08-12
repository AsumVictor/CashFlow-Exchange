import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';

function Header() {
  const navLinks = [
    {
      href: '/',
      label: 'All curencies',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full relative py-1 bg-primary h-[1.5cm] flex flex-row items-center px-2 400px:px-10 justify-between">
      <button
        type="button"
        className="text-white 600px:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <HiX size={30} /> : <HiMenuAlt2 size={30} />}
      </button>

      <h2 className="text-2xl font-bold text-white">Cashflow</h2>

      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } absolute top-[1.6cm] 600px:top-0 bg-primary 600px:relative 600px:flex 600px:flex-row gap-3 flex-col px-10 py-10 w-10/12 600px:w-auto 600px:px-0 600px:py-0 rounded-md`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'text-white font-semibold underline' : 'text-gray-200')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-2 py-1 rounded-md bg-white font-bold text-primary">
        <BsFillGearFill />
      </div>
    </header>
  );
}

export default Header;
