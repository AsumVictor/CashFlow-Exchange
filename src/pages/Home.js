import React from "react";
import HeroSection from "../components/HeroSection.js";
import CurrencyCard from "../components/CurrencyCard.js";
import { useSelector } from "react-redux";

function Home() {
  const { data, isFetching, isFetchError } = useSelector(
    (state) => state.allCurrencies
  );

  return (
    <div className="w-full py-2">
      <HeroSection />
      <div className="w-full py-2 bg-primary">
        <h1 className="text-xl text-white font-semibold text-center">
          All Currencies ({data.length})
        </h1>
      </div>
      <div className="w-full py-2 grid grid-cols-2 md:px-10">
        {data.slice(0,10).map(({ code, name }) => (
          <CurrencyCard currencyName={name} key={code} currencySymbol={code} />
        ))}
      </div>
    </div>
  );
}

export default Home;
