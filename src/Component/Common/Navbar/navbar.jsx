import React from "react";
import { NavLink } from "react-router-dom";

// Image
import Logo from "../../asset/img/Logo/logo.png";
// react icon
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  let size = 0;
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
                <NavLink to="/" className="nav-link">
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
              <li className="nav-item">
                <NavLink to="/account" className="nav-link d-flex align-items-center">
                  <FaRegUser className="mx-2" />
                  Account
                </NavLink>

                {/* </a> */}
              </li>
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
              <li className="login-btn">
                <NavLink to="/sign" className="nav-link login-button">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
