import React, { useEffect, useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SingleExchangeCard from '../components/singleExchangeCard';
import { getSingleCurrency } from '../redux/currency/singleCurrency';
import {
  convertMonthAgo,
  convertWeekAgo,
  convertYearAgo,
} from '../helpers/timeConvert';
import Loader from '../components/loader';

function CurrencyDetail() {
  const param = useParams();
  const dispatch = useDispatch();
  const { data: allCurrencies } = useSelector((state) => state.allCurrencies);
  const currentCurrency = allCurrencies.find((i) => i.code === param.code);
  const { data, isFetching } = useSelector(
    (state) => state.currency,
  );
  const [currentDate, setCurrentDate] = useState({
    date: 'latest',
    active: 1,
  });

  const dates = [
    {
      label: 'Latest',
      id: 1,
    },
    {
      label: 'Last week',
      id: 2,
    },
    {
      label: 'Last month',
      id: 3,
    },
    {
      label: 'Last year',
      id: 4,
    },
  ];
  useEffect(() => {
    dispatch(getSingleCurrency({ code: param.code, date: currentDate.date }));
  }, [dispatch, currentDate, param.code]);

  // Handle time
  const handleTimeAgo = (id) => {
    let result = null;
    switch (id) {
      case 1:
        result = 'latest';
        break;
      case 2:
        result = convertWeekAgo();
        break;
      case 3:
        result = convertMonthAgo();
        break;
      case 4:
        result = convertYearAgo();
        break;
      default:
        result = 'latest';
        return;
    }
    setCurrentDate({
      date: result,
      active: id,
    });
  };

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
        <h3 className="text-center text-3xl font-extrabold 500px:text-6xl text-primary uppercase">
          {currentCurrency.code}
        </h3>
        <h3 className="text-right 500px:text-center text-white px-4">
          <p className="text-3xl 500px:text-5xl font-semibold">
            {currentCurrency.name}
          </p>
          <p className="">{currentCurrency.code}</p>
        </h3>
      </div>

      <div className="w-full text-[18px] text-white py-2 bg-primary mt-1 flex flex-row gap-1 items-center font-semibold px-10">
        Exchange rates of
        {' '}
        {currentCurrency.name}
        {' '}
        (
        {currentCurrency.code}
        )
      </div>

      <div className="w-full mt-2 px-2 whitespace-nowrap overflow-x-auto">
        <div className=" inline-block text-white">
          {dates.map((date) => (
            <button
              key={date.id}
              type="button"
              onClick={() => handleTimeAgo(date.id)}
              className={`${
                currentDate.active === date.id
                  ? 'bg-white text-primary font-semibold '
                  : 'bg-primary text-white'
              } inline-block mx-2 px-3 py-1  rounded-md`}
            >
              {date.label}
            </button>
          ))}
          <span>Set date: </span>
          <input
            type="date"
            name="customDate"
            max={new Date().toISOString().split('T')[0]}
            value={currentDate.active === 5 && currentDate.date}
            className="outline-0 rounded-md font-semibold px-2 text-[15px] py-1 text-primary"
            onChange={(e) => {
              setCurrentDate({
                date: e.target.value,
                active: 5,
              });
            }}
          />
        </div>
      </div>
      {isFetching ? (
        <Loader />
      ) : (
        <div className="w-full py-2 grid grid-cols-2 mt-5">
          {Array.isArray(data) ? (
            data.map((currency) => (
              <SingleExchangeCard
                name={currency.code}
                rate={currency.rate}
                key={currency.name}
              />
            ))
          ) : (
            <div className="h-[5cm] col-span-full text-white w-full flex justify-center items-center">
              <h2>Opps! (: Nothing to display about</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CurrencyDetail;
