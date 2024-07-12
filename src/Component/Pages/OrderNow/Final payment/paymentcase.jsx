import React, { useState } from "react";
import Footer from "../../../Common/Footer/footer";
import { Button } from "react-bootstrap";
import NavbarGround from "../../../Common/Navbar/navbground";
import { useForm } from "react-hook-form";

// Icons
import { useCartContext } from "../../../Context/cartContext";

// Image
// import Upi from "../../../asset/img/Order/UPI.jpg";
import SuccesModel from "../../../Common/Modal/succesModel";
import { toast } from "react-toastify";
import axios from "axios";

const FinallPaymentCase = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    cart,
    orderPayment,
    total_price,
    shipping_fee,
    clearCart,
    loggedInUser,
  } = useCartContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (finalPayment) => {
    const fullData = { cart, orderPayment, finalPayment, loggedInUser };
    try {
      const res = await axios.post(
        "https://api.superchicks.online/order_data",
        fullData
      );
      const datasets = res.data.msg;
      if (datasets === "Success") {
        setShowSuccessModal(true);
        toast.success("Order is successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        clearCart();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("Network Error: Please check your internet connection");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <NavbarGround />
      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <h2 className="fw-bold text-color-red">Payment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className="row justify-content-center">
                <div className="col-lg-5 my-4">
                  <label htmlFor="" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Name"
                    value={orderPayment.name}
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name.message}</div>
                  )}
                </div>
                <div className="col-lg-5 my-4 position-relative">
                  <label htmlFor="" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Mobile Number"
                    value={orderPayment.number}
                    {...register("number", {
                      required: "Mobile Number is required",
                    })}
                  />
                  {errors.number && (
                    <div className="text-danger">{errors.number.message}</div>
                  )}
                </div>
                <div className="col-lg-5 my-4">
                  <label htmlFor="" className="form-label">
                    Payment Method
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Transaction ID"
                    value={'CASH PAYMENT'}
                  />
                </div>
                <div className="col-lg-5 my-4">
                  <label htmlFor="" className="form-label">
                    Amount
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    value={total_price + shipping_fee}
                    {...register("amount", {
                      required: "Amount is required",
                    })}
                  />
                </div>
                <div className="col-lg-5 d-flex justify-content-center">
                  <Button
                    variant=" btn-danger text-light bg-danger px-5 mt-1"
                    type="submit"
                  >
                    Done
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Modal Succes Start */}

      <SuccesModel
        showModal={showSuccessModal}
        setShowModal={setShowSuccessModal}
      />

      {/* Modal Succes End */}

      {/* Footer Start*/}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default FinallPaymentCase;
