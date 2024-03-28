import React from "react";
import Footer from "../../../Common/Footer/footer";
import { Button } from "react-bootstrap";
import { CiCreditCard1 } from "react-icons/ci";
import NavbarGround from "../../../Common/Navbar/navbground";

// Icons
import { IoMdCheckmarkCircle } from "react-icons/io";

const FinallPayment = () => {
  return (
    <>
      <NavbarGround />
      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <h2 className="fw-bold text-color-red">Payment</h2>
            <form action="">
              <div className="row">
                <div className="col-lg-12 my-4">
                  <label htmlFor="" className="form-label">
                    CARDHOLDER’S NAME
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Name on card"
                  />
                </div>
                <div className="col-lg-12 my-4 position-relative">
                  <label htmlFor="" className="form-label">
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="--- --- --- ---"
                  />
                  <CiCreditCard1 className="card-payment-icon" />
                </div>
                <div className="col-lg-6 my-4">
                  <label htmlFor="" className="form-label">
                    EXPIRY DATE
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div className="col-lg-6 my-4">
                  <label htmlFor="" className="form-label">
                    EXPIRY DATE
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Code"
                  />
                </div>
                <div className="col-lg-5">
                  <Button variant=" btn-danger px-5">Done</Button>
                </div>
              </div>
              </form>

              <div class="alert bg-light position-relative w-50" role="alert">
                <div className="position-absoulte top-0 start-50 alert-icon d-flex justify-content-center">
                  <IoMdCheckmarkCircle class="alert-heading fs-1" />
                </div>
                <h3 className="fw-bold  text-center">Success</h3>
                <p className="text-center">
                  Check your email for a booking confirmation.We’ll see you soon
                  You can always track your orders in the “Orders” section under
                  profile{" "}
                </p>
                <div className="d-flex justify-content-center">
                  <button className="btn alert-button">HOME</button>
                </div>
              </div>
          </div>
        </section>
      </div>

      {/* Footer Start*/}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default FinallPayment;
