import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

function CurrencyCard() {
  return (
    <div className="currency-card relative w-full flex justify-center items-center px-2 py-2 h-[6cm]">
      <Link className="absolute right-4 top-2">
        <BsArrowRightCircle color="white" size={30} />
      </Link>
      <h3 className="absolute right-4 bottom-2 text-white">
        <p className="text-2xl font-semibold">Name</p>
        <p>Symbol</p>
      </h3>
      <div>
        <h3 className="text-7xl font-bold ">GHC</h3>
      </div>
    </div>
  );
}

export default CurrencyCard;
