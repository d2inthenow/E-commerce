import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Header from "./components/Header";
import OrderTracking from "./components/Pages/Order_Tracking";
import HelpCenter from "./components/Pages/Help_Center";
import ProductListing from "./components/Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route path="/orderTracking" element={<OrderTracking />} />
          <Route path="/helpCenter" element={<HelpCenter />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
