import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Home from "./pages/Home/Home";
import AppLayout from "./pages/AppLayout/AppLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PagesNavBar from "./components/NavComponents/PagesNavBar/PagesNavBar";
import Login from "./pages/Login/Login";

import "./index.css";
import CityList from "./components/CityComponents/CityList/CityList";
import { useEffect, useState } from "react";

const URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL}/cities`);
        const data = await response.json();
        setCities(data);
        setIsLoading(false);
      } catch (error) {
        // console.error("Error fetching cities:", error);
        alert("Error fetching cities:" + error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <div style={{ backgroundColor: "var(--color-bg--main)" }}>
      <BrowserRouter>
        <PagesNavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="countries" element={<p>List of countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
