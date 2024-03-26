import React from "react";

import Footer from "../../Common/Footer/footer";
import NavbarGround from "../../../Component/Common/Navbar/navbground";
import { Button } from "react-bootstrap";

// Images
import img from "../../asset/img/Order/Order-Chicken-2.png";
import img1 from "../../asset/img/Order/mutton-1.png"
// Icons
import { CiCircleMinus, CiCirclePlus,} from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const cart = () => {
  return (
    <>
      <NavbarGround />

      <div className="back-img-main">
        <section id="section-padding">
          <div className="container">
            <div className="row pe-4">
              <div className="col-lg-12">
                <h1 className="fw-bold text-color-red mb-5">Your Cart</h1>
                <hr />
                <div className="row">
                  <div className="col-lg-6 ps-3 fw-bold d-flex justify-content-center">Product</div>
                  <div className="col-lg-2 ps-3 fw-bold">Price</div>
                  <div className="col-lg-2 ps-3 fw-bold">Quantity</div>
                  <div className="col-lg-2 pe-5 fw-bold">Total</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-6">
                   <img src={img} className="cart-img rounded ps-3 me-3" alt="Loading" /> 
                   Chicken (Boneless) - Net Wt:500 Grams{" "}
                  </div>
                  <div className="col-lg-2 ps-3 fw-bold d-flex align-items-center">Amt.</div>
                  <div className="col-lg-2 ps-3 fw-bold d-flex align-items-center">
                    <CiCircleMinus className="fs-3"/>
                    <span> 2 </span>
                    <CiCirclePlus className="fs-3" />
                  </div>
                  <div className="col-lg-2 ps-3 fw-bold d-flex align-items-center">Amt.</div>
                  <div className="fs-3 d-flex justify-content-end  align-items-center  text-color-red pe-5"><RiDeleteBin6Line /></div>
                </div>
                <hr />
                <div className="row d-flex">
                  <div className="col-lg-6">
                    <img src={img1} className="cart-img rounded ps-3 me-3" alt="Loading" />
                    Mutton Mince (Keema) - Net Wt:500 Grams{" "}
                  </div>

                  <div className="col-lg-2 ps-3 fw-bold d-flex align-items-center">Amt.</div>
                  <div className="col-lg-2 ps-3 fw-bold d-flex align-items-center">
                    <CiCircleMinus className="fs-3"/>
                     <span> 2 </span>
                    <CiCirclePlus className="fs-3" />
                  </div>
                  <div className="col-lg-2 ps-3 fw-bold d-flex align-items-center">Amt.</div>
                <div className=" fs-3 d-flex justify-content-end  align-items-center text-color-red pe-5"><RiDeleteBin6Line /></div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-lg-8 fw-bold ps-5">Items Total</div>
                  <div className="col-lg-4 pe-5 fw-bold text-end">----</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-8 fw-bold ps-5">Shipping Charge</div>
                  <div className="col-lg-4 pe-5 fw-bold text-end text-color-red">
                    Maybe Applicable
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-8 fw-bold ps-5">Subtotal</div>
                  <div className="col-lg-4 pe-5 fw-bold text-end">----</div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Button variant=" btn-danger text-light bg-danger px-5 mt-5">
                Proceed To Checkout
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Start */}
      <Footer />
      {/* Footer End  */}
    </>
  );
};

export default cart;
