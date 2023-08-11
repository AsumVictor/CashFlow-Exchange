import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

function SingleExchangeCard() {
  return (
    <div className="col-span-2 md:col-span-1 py-2 grid grid-cols-10 bg-primary text-white px-2 items-center">
      <h3 className=" col-span-6 text-2xl md:text-xl font-semibold">Ghana cedis</h3>
      <h3 className=" col-span-3">42.000</h3>
      <button className="">
        <BsArrowRightCircle color="white" size={30} />
      </button>
    </div>
  );
}

export default SingleExchangeCard;
