import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import PropTypes from "prop-types";

function SingleExchangeCard({name, rate}) {
  return (
    <div className="singleCurrency col-span-2 md:col-span-1 py-2 grid grid-cols-10 bg-primary text-white px-2 items-center">
      <h3 className=" col-span-6 text-2xl md:text-xl font-semibold">{name}</h3>
      <h3 className=" col-span-3">{rate.toFixed(6)}</h3>
      <button className="">
        <BsArrowRightCircle color="white" size={30} />
      </button>
    </div>
  );
}

SingleExchangeCard.propTypes= {
    name: PropTypes.string,
    rate: PropTypes.number,
}

SingleExchangeCard.defaultProps={
    name: "Unkown",
    rate: 0.0000,
}

export default SingleExchangeCard;
