import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import PagesNavBar from "./components/NavComponents/PagesNavBar/PagesNavBar";
import Login from "./pages/Login";

import "./index.css";

function App() {
  return (
    <div style={{ backgroundColor: "var(--color-bg--main)" }}>
      <BrowserRouter>
        <PagesNavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<p>INDEX LIST</p>} />
            <Route path="cities" element={<p>List of cities</p>} />
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
