import React from "react";

// Image
import Logo from "../../asset/img/Logo/logo.png";
import FooterImg from "../../asset/img/Footer/footer-img.png";

// React Icon
import { MdLocationPin } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      {/* <!-- Footer --> */}
      <div>
        <img src={FooterImg} alt="Loading" className="img-fluid" />
      </div>
      <footer class="text-center text-lg-start background-color-footer">
        {/* <!-- Grid container --> */}
        <div class="container pb-0">
          {/* <!-- Section: Links --> */}
          <section class="">
            {/* <!--Grid row--> */}
            <div class="row">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  <img
                    src={Logo}
                    alt="Loading"
                    className="img-fluid footer-logo"
                  />
                </h6>
                <p className="text-color-gray">
                  <span>SuperChicks </span>
                  delivers fresh & premium meat everyday.We provides you fresh
                  and hygienic meat poducts at very reasonable price
                </p>
              </div>
              {/* <!-- Grid column --> */}

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 class="mb-4 text-color-red">Address</h5>
                <div className="footer my-2">
                  <MdLocationPin className="footer-icon" />
                  <span>Eastern Ring Road Khajrana, Indore</span>
                </div>

                <div className="footer my-2">
                  <FaWhatsapp className="footer-icon" />
                  <span>+91-9244276667</span>
                </div>
                <div className="footer my-2">
                  <MdEmail className="footer-icon" />
                  <span>info@superchicks.online</span>
                </div>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 class="mb-4 text-color-red text-decoration-none">
                  Important Links
                </h5>
                <p>
                <NavLink to='/' className='text-decoration-none text-color-gray'>
                Home
                </NavLink>

                </p>
                <p>
                <NavLink to='/contact' className='text-decoration-none text-color-gray'>
                    ContactUs
                  </NavLink>
                </p>
                <p>
                <NavLink to='/about' className='text-decoration-none text-color-gray'>
                    About
                  </NavLink>
                </p>
                <p>
                <NavLink to='/account' className='text-decoration-none text-color-gray'>
                    Account
                  </NavLink>
                </p>
              </div>

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 class="mb-4 text-color-red text-decoration-none">
                  Social Media
                </h5>

                <div className="social-media-icon ">
                  {/* <!-- Facebook --> */}
                  <a href="#!">
                    <FaFacebookF className="footer-icon" />
                  </a>

                  {/* <!-- Twitter --> */}
                  <a href="#!">
                    <FaTwitter className="footer-icon" />
                  </a>

                  {/* <!-- Instagram --> */}
                  <a href="#!">
                    <FaInstagram className="footer-icon" />
                  </a>
                </div>
              </div>
                {/* <hr className="my-4" /> */}
                <div className="hr"></div>
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}
        </div>

        {/* <!-- Grid container --> */}
      </footer>
      {/* <!-- Footer --> */}
    </section>
  );
};

export default Footer;
