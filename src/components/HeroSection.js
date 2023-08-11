import React from 'react';
import { BsCurrencyExchange } from 'react-icons/bs';

function HeroSection() {
  return (
    <div className="hero w-full py-10 min-h-[5cm] grid grid-cols-3 px-2 600px:px-10">
      <div className=" col-span-1 flex justify-center items-center">
        <BsCurrencyExchange size={150} className="text-primary" />
      </div>
      <div className=" col-span-2 flex justify-end items-center">
        <h1 className="text-2xl 600px:text-3xl text-right font-bold text-white px-3">
          Currency Exchange with CashFlow Pro
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
