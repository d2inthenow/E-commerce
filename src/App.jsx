import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Header from "./components/Header";
import OrderTracking from "./components/Pages/Order_Tracking";
import HelpCenter from "./components/Pages/Help_Center";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/help-center" element={<HelpCenter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
