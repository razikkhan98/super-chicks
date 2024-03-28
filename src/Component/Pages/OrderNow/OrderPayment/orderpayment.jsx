import React from "react";
import Footer from "../../../Common/Footer/footer";
import NavbarGround from "../../../Common/Navbar/navbground";

const OrderCheckoutPayment = () => {
  return (
    <>
            <NavbarGround/>
      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <h2 className="fw-bold text-color-red">Order Ckeckout</h2>
            <form action="">
              <div className="row my-5">
                <div className="col-lg-8">
                  <h5 className="fw-bold">Shipping Address</h5>
                  <div className="row ">
                    <div className="col-lg-6 pt-4">
                      <label htmlFor="" className="form-label">
                        Name
                        <span className="text-color-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-lg-6 pt-4">
                      <label htmlFor="" className="form-label">
                        Phone Number
                        <span className="text-color-red">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control my-2"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-lg-6 pt-4">
                      <label htmlFor="" className="form-label">
                        Email
                        <span className="text-color-red">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control my-2"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-lg-6 pt-4">
                      <label htmlFor="" className="form-label">
                        Flat/Apartment No
                        <span className="text-color-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="lat/Apartment No"
                      />
                    </div>
                    <div className="col-lg-6 pt-4">
                      <label htmlFor="" className="form-label">
                        Street Address
                        <span className="text-color-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Street Address"
                      />
                    </div>
                    <div className="col-lg-6 pt-4">
                      <label htmlFor="" className="form-label">
                        Nearest Landmark
                        <span className="text-color-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Nearest Landmark"
                      />
                    </div>
                    <div className="col-lg-6 pt-4">
                      <label htmlFor="" className="form-label">
                        Zipcode
                        <span className="text-color-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Zipcode"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5 className="fw-bold pb-4">
                    Select Delivery Date & Time Slot
                  </h5>
                  <div>
                    <label htmlFor="" className="form-label">
                      Delivery Date
                      <span className="text-color-red">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control my-2"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>

                  <div className="pt-4">
                    <label htmlFor="" className="form-label">
                      Delivery Time Slot
                      <span className="text-color-red">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control my-2"
                      placeholder="2PM - 5PM"
                    />
                  </div>
                  <div className="pt-4">
                    <label htmlFor="" className="form-label">
                      Additional Information
                      <span className="text-color-red">*</span>
                    </label>
                    <div className="text-color-gray pb-2">
                      Order Notes (Optional)
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      className="textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="row pe-4">
              <div className="col-lg-8">
                <div>Your Order</div>
                <hr />
                <div className="row">
                  <div className="col-lg-6 ps-3 fw-bold">Product</div>
                  <div className="col-lg-6 pe-5 fw-bold text-end">Subtotal</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-8 text-color-gray">
                    Chicken (Boneless) - Net Wt:500 Grams{" "}
                    <span className="ps-5 fw-bold text-color-black">x2</span>
                  </div>
                  <div className="col-lg-4 pe-5 fw-bold text-end">-----</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-8 text-color-gray">
                    Mutton Mince (Keema) - Net Wt:500 Grams{" "}
                    <span className="ps-5 fw-bold text-color-black">x2</span>
                  </div>
                  <div className="col-lg-4 pe-5 fw-bold text-end">-----</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-8 fw-bold">Subtotal</div>
                  <div className="col-lg-4 pe-5 fw-bold text-end">-----</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-8 fw-bold">
                    Shipping Charge
                  </div>
                  <div className="col-lg-4 pe-5 fw-bold text-end">-----</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-8 fw-bold">Promo Discount</div>
                  <div className="col-lg-4 pe-5 fw-bold text-end">-----</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-8 text-color-gray">Order Total</div>
                  <div className="col-lg-4 pe-5 fw-bold text-end">-----</div>
                </div>
              </div>

              <div className="col-lg-4 ps-4 ">Payment Method</div>
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

export default OrderCheckoutPayment;
