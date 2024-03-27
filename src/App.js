import "./App.css";
import Home from "./Component/Pages/Home/home";
import OrderNow from "./Component/Pages/OrderNow/order";
import SingleProduct from "./Component/Pages/SingleProduct/singleProduct";
import ErrorPage from "./Component/Common/404page/index";
import Cart from "./Component/Pages/Cart/cart";
import About from "./Component/Pages/About/about";
import SignLogin from "./Component/Pages/Login/signlogin";
import Account from "./Component/Pages/Account/account";
import Contact from "./Component/Pages/ContactUs/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<OrderNow />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sign" element={<SignLogin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
