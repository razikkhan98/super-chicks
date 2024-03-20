import './App.css';
import Home from './Component/Pages/Home/home';
import OrderNow from './Component/Pages/OrderNow/order';
import SingleProduct from './Component/Pages/SingleProduct/singleProduct';
import ErrorPage from './Component/Pages/ErrorPage/errorPage';
import Cart from './Component/Pages/Cart/cart';
import SignLogin from './Component/Pages/Login/signlogin';
import Account from './Component/Pages/Account/account';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './Component/Pages/About/about';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/order" element={<OrderNow/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/sign" element={<SignLogin/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
