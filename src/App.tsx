import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Home from "./pages/Home/Home";
import AppLayout from "./pages/AppLayout/AppLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PagesNavBar from "./components/NavComponents/PagesNavBar/PagesNavBar";
import Login from "./pages/Login/Login";
import CityList from "./components/CityComponents/CityList/CityList";
import CityDetails from "./components/CityComponents/CityDetails/CityDetails";
import CountryList from "./components/CountryComponents/CountryList/CountryList";
import Form from "./components/Form/Form";
import { CitiesProvider } from "./contexts/CityContext";
import "./index.css";

function App() {
  return (
    <CitiesProvider>
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
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<CityDetails />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CitiesProvider>
  );
}

export default App;
