import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Image
import Logo from "../../asset/img/Logo/logo.png";
// react icon
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";
import { useCartContext } from "../../Context/cartContext";
import RightPanel from "../Modal/rightPanel";
import { AiOutlineLogin } from "react-icons/ai";
import { RiShutDownLine } from "react-icons/ri";
import Cookies from "js-cookie";

const Navbar = () => {
  const { cart, loggedInUser, setLoggedInUser } = useCartContext();
  const [showModal, setShowModal] = useState(false);

  let size = cart.length;

  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("superChicks");
    setLoggedInUser(null);
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/"> */}
          <div className="logo-img">
            <img src={Logo} alt="Loading" className="img-fluid w-100" />
          </div>
          {/* </a> */}
          <button
            className="navbar-toggler mx-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <RiMenu2Line />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto d-flex align-items-center mx-3">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" aria-disabled="true" href="/"> */}
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>

                {/* </a> */}
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link d-flex align-items-center"
                >
                  <FaRegUser className="mx-2" />
                  Account
                </NavLink>

              </li> */}
              <li className="nav-item cart-trolley-link">
                <NavLink to="/cart" className="nav-link">
                  <FiShoppingCart className="cart-trolley" />
                  {size === 0 ? (
                    <>
                      <span className="cart-total-item"></span>
                    </>
                  ) : (
                    <>
                      <span className="cart-total">{size}</span>
                    </>
                  )}
                </NavLink>
              </li>
              {/* <li className="login-btn">
                <div className="nav-link login-button ">
                  Sign
                </div>
              </li> */}
              <li className="nav-item">Sign</li>
              {loggedInUser ? (
                <>
                  <li className="nav-item logo-width logo-width" id="cart">
                    <div className="d-flex justify-content-center">
                      <div className="dropdown">
                      <RiShutDownLine />
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <hr />
                          <li className="px-4">
                            <button
                              className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                              onClick={handleLogout}
                            >
                              <RiShutDownLine />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  {/* <RightPanel/> */}
                  <div
                    className="text-color-red fs-3 d-flex"
                    onClick={() => setShowModal(true)}
                  >
                    <AiOutlineLogin />
                  </div>
                </li>
              )}
            </ul>
            <RightPanel showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
