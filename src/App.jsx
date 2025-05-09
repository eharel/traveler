import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import PagesNavBar from "./components/PagesNavBar";
import Login from "./pages/Login";

import "./index.css";

function App() {
  return (
    <div style={{ backgroundColor: "var(--color-bg--main)" }}>
      <BrowserRouter>
        <PagesNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
