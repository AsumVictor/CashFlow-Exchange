import React from 'react';
import { useSelector } from 'react-redux';
import HeroSection from '../components/HeroSection';
import CurrencyCard from '../components/CurrencyCard';

function Home() {
  const { data, isFetchError } = useSelector(
    (state) => state.allCurrencies,
  );

  if (isFetchError) {
    return (
      <>
        <h1>
          Opps Error occured!...
          {isFetchError}
        </h1>
      </>
    );
  }

  return (
    <div className="w-full py-2">
      <HeroSection />
      <div className="w-full py-2 bg-primary">
        <h1 className="text-xl text-white font-semibold text-center">
          All Currencies (
          {data.length}
          )
        </h1>
      </div>
      <div className="w-full py-2 grid grid-cols-2 md:px-10">
        {data.map(({ code, name }) => (
          <CurrencyCard currencyName={name} key={code} currencySymbol={code} />
        ))}
      </div>
    </div>
  );
}

export default Home;
