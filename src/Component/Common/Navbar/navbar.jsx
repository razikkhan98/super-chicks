import React from "react";
import Logo from "../../asset/img/Logo/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <div className="logo-img">
            <img src={Logo} alt="Loading"  />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto  my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true" href="/">
                About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-disabled="true" href="/">
                <i className="fa-regular fa-user"></i>Account
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-disabled="true" href="/">
                <i className="fa-regular fa-cart-shopping"></i>
                </a>
              </li>

              <li className="login-btn nav-item">
                <a className="nav-link " aria-disabled="true" href="/">
                  Login
                </a>
              </li>
            </ul>


            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
