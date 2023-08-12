import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

function CurrencyCard({ currencyName, currencySymbol }) {
  return (
    <Link
      to={`/${currencySymbol}`}
      className="currency-card relative w-full flex justify-center items-center px-2 py-2 h-[6cm]"
    >
      <button
        type="button"
        className="absolute right-4 top-2"
      >
        <BsArrowRightCircle color="white" size={30} />
      </button>
      <h3 className="absolute right-4 bottom-2 text-white text-right">
        <p className="text-xl 400px:px-2 500px:text-2xl font-semibold">
          {currencyName}
        </p>
        <p>{currencyName?.slice(0, 2)}</p>
      </h3>
      <div>
        <h3 className="text-4xl 500px:text-7xl font-bold uppercase">
          {currencySymbol}
        </h3>
      </div>
    </Link>
  );
}

CurrencyCard.propTypes = {
  currencyName: PropTypes.string,
  currencySymbol: PropTypes.string,
};

CurrencyCard.defaultProps = {
  currencyName: 'Unknown',
  currencySymbol: '...',
};

export default CurrencyCard;
