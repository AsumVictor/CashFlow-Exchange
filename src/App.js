import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  CurrencyDetailPage,
} from './Routes';
import PageLayout from './layout/PageLayout';
import { getCurrencies } from './redux/currency/currencySlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:code" element={<CurrencyDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
