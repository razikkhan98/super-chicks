import React from "react";
import Footer from "../../../Common/Footer/footer";
import NavbarGround from "../../../Common/Navbar/navbground";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const OrderCheckoutPayment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, 12233);
  };

  return (
    <>
      <NavbarGround />
      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <h2 className="fw-bold text-color-red">Order Ckeckout</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />
                      {errors.name && (
                        <div className="text-danger">{errors.name.message}</div>
                      )}
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
                        {...register("number", {
                          required: "Phone Number is required",
                        })}
                      />
                      {errors.number && (
                        <div className="text-danger">
                          {errors.number.message}
                        </div>
                      )}
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
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <div className="text-danger">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6 pt-4">
                      <label htmlFor="" className="form-label">
                        Flat/Apartment No
                        <span className="text-color-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Flat/Apartment No"
                        {...register("apartment", {
                          required: "Flat/Apartment is required",
                        })}
                      />
                      {errors.apartment && (
                        <div className="text-danger">
                          {errors.apartment.message}
                        </div>
                      )}
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
                        {...register("street", {
                          required: "Street Address is required",
                        })}
                      />
                      {errors.street && (
                        <div className="text-danger">
                          {errors.street.message}
                        </div>
                      )}
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
                        {...register("landmark", {
                          required: "Landmark is required",
                        })}
                      />
                      {errors.landmark && (
                        <div className="text-danger">
                          {errors.landmark.message}
                        </div>
                      )}
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
                        {...register("zipcode", {
                          required: "Zipcode is required",
                        })}
                      />
                      {errors.zipcode && (
                        <div className="text-danger">
                          {errors.zipcode.message}
                        </div>
                      )}
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
                      type="date"
                      className="form-control my-2"
                      placeholder="DD/MM/YYYY"
                      {...register("date", {
                        required: "Delivery Date is required",
                      })}
                    />
                    {errors.date && (
                      <div className="text-danger">{errors.date.message}</div>
                    )}
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
                      {...register("timeslot", {
                        required: " Delivery Time Slot is required",
                      })}
                    />
                    {errors.timeslot && (
                      <div className="text-danger">
                        {errors.timeslot.message}
                      </div>
                    )}
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
                      {...register("additional", {
                        required: "Additional Information is required",
                      })}
                    />
                    {errors.additional && (
                      <div className="text-danger">
                        {errors.additional.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row pe-4">
                <div className="col-lg-8">
                  <div>Your Order</div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6 ps-3 fw-bold">Product</div>
                    <div className="col-lg-6 pe-5 fw-bold text-end">
                      Subtotal
                    </div>
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
                    <div className="col-lg-8 fw-bold">Shipping Charge</div>
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
                {/* <NavLink to="/orderFinal" className="text-decoration-none"> */}
                <div className="d-flex justify-content-end">
                  <Button
                    variant=" btn-danger text-light bg-danger px-5 mt-5"
                    type="submit"
                  >
                    Place Order
                  </Button>
                </div>
                {/* </NavLink> */}
              </div>
            </form>
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
