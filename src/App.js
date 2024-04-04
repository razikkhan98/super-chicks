import "./App.css";
import Home from "./Component/Pages/Home/home";
import OrderNow from "./Component/Pages/OrderNow/order";
import OrderNowPayment from "./Component/Pages/OrderNow/OrderPayment/orderpayment";
import OrderNowFinal from "./Component/Pages/OrderNow/Final payment/payment";
import SingleProduct from "./Component/Pages/SingleProduct/singleProduct";
import ErrorPage from "./Component/Common/404page/index";
import Cart from "./Component/Pages/Cart/cart";
import About from "./Component/Pages/About/about";
import Contact from "./Component/Pages/ContactUs/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import ScrollToTop from "./Component/Common/ScrollToTop/scroll";


function App() {
  // const location = useLocation();

  useEffect(() => {
    // AOS.init();
    // AOS.refresh();

    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;

        setTimeout(() => {
          const header = document.getElementById("header");
          const topbar = document.getElementById("topbar");

          if (header && topbar) {
            const isHeaderScrolled = window.scrollY > 100;
            header.classList.toggle("header-scrolled", isHeaderScrolled);
            topbar.classList.toggle("topbar-scrolled", isHeaderScrolled);
          }

          isScrolling = false;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      const navbarlinks = document.querySelectorAll("#navbar .scrollto");

      navbarlinks.forEach((navbarlink) => {
        const sectionId = navbarlink.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);

        if (
          section &&
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.scrollTo(0, 0);

    navbarlinksActive();
  }, []);

 
  return (
    <>
    <ToastContainer/>
      <Router>
      <ScrollToTop /> {/* Place the ScrollToTop component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<OrderNow />} />
          <Route path="/orderPayment" element={<OrderNowPayment />} />
          <Route path="/orderFinal" element={<OrderNowFinal />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/single/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
