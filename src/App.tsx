import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Home from "./pages/Home/Home";
import AppLayout from "./pages/AppLayout/AppLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PagesNavBar from "./components/NavComponents/PagesNavBar/PagesNavBar";
import Login from "./pages/Login/Login";
import CityList from "./components/CityComponents/CityList/CityList";
import CityDetails from "./components/CityComponents/CityDetails/CityDetails";
import { City } from "./types";
import CountryList from "./components/CountryComponents/CountryList/CountryList";
import "./index.css";

const URL = "http://localhost:9000";
import citiesData from "../data/cities.json";
import Form from "./components/Form/Form";

function App() {
  const [cities, setCities] = useState<City[]>([]);
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
        alert("Error fetching cities:" + error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    // fetchCities();

    setCities(citiesData.cities);
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
              // element={<CityList cities={cities} isLoading={isLoading} />}
              element={<Navigate to="/app/cities" replace />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities/:id"
              element={<CityDetails cities={cities} />}
            />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
