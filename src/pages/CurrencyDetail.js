import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import SingleExchangeCard from "../components/singleExchangeCard";

function CurrencyDetail() {
  const dates = [
    {
      date: "",
      label: "Today",
      id: 1,
    },
    {
      date: "",
      label: "Last week",
      id: 2,
    },
    {
      date: "",
      label: "Last month",
      id: 3,
    },
    {
      date: "",
      label: "Last year",
      id: 4,
    },
  ];
  const [currentDate, setCurrentDate] = useState({
    date: "",
    active: 1,
  });

  return (
    <div className="w-full pb-20">
      <Link
        to=".."
        relative="path"
        className="w-full text-xl text-white py-2 bg-primary mt-1 flex flex-row gap-1 items-center"
      >
        <MdArrowBackIosNew size={30} />
        Back
      </Link>

      <div className="w-full h-[5cm] grid grid-cols-2 items-center">
        <h3 className="text-center text-3xl font-extrabold 500px:text-6xl text-primary">
          GHC
        </h3>
        <h3 className="text-right 500px:text-center text-white px-4">
          <p className="text-3xl 500px:text-5xl font-semibold">Ghana cedi</p>
          <p className="">Ghana cedi</p>
        </h3>
      </div>

      <div className="w-full text-[18px] text-white py-2 bg-primary mt-1 flex flex-row gap-1 items-center font-semibold px-10">
        Exchange rates of Ghana cedi
      </div>

      <div className="w-full mt-2 px-2 whitespace-nowrap overflow-x-auto">
        <div className=" inline-block">
          {dates.map((date) => (
            <button
              type="button"
              className={`${
                currentDate.active === date.id
                  ? "bg-white text-primary font-semibold "
                  : "bg-primary text-white"
              } inline-block mx-2 px-3 py-1  rounded-md`}
            >
              {date.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full py-2 grid grid-cols-2 mt-5">
        <SingleExchangeCard />
      </div>
    </div>
  );
}

export default CurrencyDetail;
