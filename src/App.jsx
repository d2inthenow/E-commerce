import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          {/* <Route path="/order-tracking" element={<About />} />
          <Route path="/help-center" element={<HelpCenter />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
