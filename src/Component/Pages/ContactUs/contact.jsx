import React from "react";

import Footer from "../../Common/Footer/footer";
import NavbarGround from "../../../Component/Common/Navbar/navbground";
import { Button } from "react-bootstrap";

// Icons
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <>
      {/* Contact Start */}
      <NavbarGround />
      <div className="back-img-main">
        <section id="section-padding">
          <div class="container px-5">
            <h1 className="fw-bold text-color-red">Contact Us</h1>
            <div className="contact-info d-flex justify-content-evenly rounded border border-secondary mt-5 p-4">
              <div class="row">
                <div class=" col-md-6 col-lg-6">
                  <div className="contact-address">
                    <h3>Order online Raw Chicken & Raw Mutton</h3>
                    <p>
                      SuperChicks deliver halal verified, free of preservative ,
                      fssai registered, always fresh with fair pricing
                    </p>
                    <p>
                      100% Halal Raw Fresh Chicken , Raw Fresh Mutton & Raw
                      Fresh Fish delivery
                    </p>
                    <h5 className=" fw-bold">Order online from our website</h5>
                    <h6 className="fw-semibold">www.SuperChicks.online</h6>
                  </div>
                </div>
                <div class="col-md-3 col-lg-3">
                  <div className="contact-num">
                    <h3>Contact Info</h3>
                    <p>
                      <IoMdCall />
                      +91-9244276667
                    </p>
                  </div>
                </div>
                <div class="col-md-3 col-lg-3">
                  <div className="opening-time">
                    <h3>Opening Time</h3>
                    <p>10AM to 7PM</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="fw-bold text-color-red mt-5">Contact Us</h3>
            <div className="hr"></div>

            <form action="">
              <div className="pt-4">
                <label htmlFor="" className="form-label">
                  <span className="text-color-red">*</span>
                  Your Name
                </label>
                <input
                  type="text"
                  className="border border-secondary bg-white form-control p-2"
                  placeholder="Your Name"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="" className="form-label">
                  <span className="text-color-red">*</span>
                  E-mail Address
                </label>
                <input
                  type="Email"
                  className="border border-secondary bg-white form-control p-2"
                  placeholder="Email Address"
                />
              </div>

              <div class="pt-4">
                <label htmlfor="" class="form-label">
                  <span className="text-color-red">*</span>
                  Enquiry
                </label>
                <textarea
                  class="border border-secondary bg-white form-control p-5"
                  // rows="3"
                ></textarea>
              </div>
              <Button variant=" btn-danger text-light bg-danger px-5 mt-5">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer Start */}
      <Footer />
      {/* Footer End  */}

      {/* Contact End */}
    </>
  );
};

export default Contact;
