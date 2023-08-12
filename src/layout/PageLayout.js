import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/loader';

function PageLayout() {
  const { isFetching } = useSelector((state) => state.allCurrencies);
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden bg-primary_light">
      <Header />
      {isFetching ? <Loader /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default PageLayout;
