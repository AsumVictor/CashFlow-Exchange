import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HomePage,
  CurrencyDetailPage,
  FavoritePage,
  ConversionPage,
} from "./Routes.js";
import PageLayout from "./layout/PageLayout.js";

function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<CurrencyDetailPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/conversion" element={<ConversionPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
