import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductZoom from "./components/ProductZoom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { IoCloseSharp } from "react-icons/io5";
import Home from "./Pages/Home";
import Header from "./components/Header";
import OrderTracking from "./Pages/Order_Tracking";
import HelpCenter from "./Pages/Help_Center";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import ProductDetailsComponent from "./components/ProductDetailsComponent";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CartPage from "./Pages/Cart";
import Verify from "./Pages/Verify";
import ForgotPassWord from "./Pages/ForgotPassWord";
import toast, { Toaster } from "react-hot-toast";
import Checkout from "./Pages/Checkout";
import MyAccount from "./Pages/MyAccount";
import MyList from "./Pages/MyList";
import Orders from "./Pages/Orders";

const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  // Open Cart Panel
  const [openCartPanel, setOpenCartPanel] = useState(false);

  //Login
  const [isLogin, setIsLogin] = useState(false);

  // API URL
  const apiUrl = import.meta.env.VITE_API_URL;

  const toggleDrawer = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleDrawer,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/orderTracking"}
              exact={true}
              element={<OrderTracking />}
            />
            <Route path={"/helpCenter"} exact={true} element={<HelpCenter />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/productDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route
              path={"/forgot-password"}
              exact={true}
              element={<ForgotPassWord />}
            />
            <Route path={"/checkout"} exact={true} element={<Checkout />} />
            <Route path={"/my-account"} exact={true} element={<MyAccount />} />
            <Route path={"/my-list"} exact={true} element={<MyList />} />
            <Route path={"/my-orders"} exact={true} element={<Orders />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="productDetailsModalContainer flex items-center w-full relative">
            <Button
              className="!w-[40px] !h-[40px] !min-m-[40px] !bg-[#000]
               !rounded-full !text-white !absolute top-[15px] right-[15px] z-50"
              onClick={handleCloseProductDetailsModal}
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%] !px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] !py-8 !px-8 !pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { MyContext };
