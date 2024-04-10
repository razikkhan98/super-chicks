import React, { useState } from "react";
import Footer from "../../../Common/Footer/footer";
import { Button } from "react-bootstrap";
import NavbarGround from "../../../Common/Navbar/navbground";
import { useForm } from "react-hook-form";

// Icons
import { useCartContext } from "../../../Context/cartContext";

// Image
import Upi from "../../../asset/img/Order/UPI.jpg";
import SuccesModel from "../../../Common/Modal/succesModel";
import { toast } from "react-toastify";
import axios from "axios";

const FinallPayment = () => {
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
  };

  return (
    <>
      <NavbarGround />
      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <h2 className="fw-bold text-color-red">Payment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="justify-content-end d-flex">
                <div className="w-50 text-center shadow rounded py-2 background-color-footer">

                  <h3>UPI NO : 9876543210</h3> <h3>UPI ID :Chicks@Kotak</h3>
                </div>
              </div> */}
              <div className="row ">
                <div className="col-lg-6 py-3 text-center py-3">
                  <img src={Upi} alt="Upi" className="img-fluid w-50 rounded" />
                </div>
                <div className="col-lg-5 py-3">
                  <div className="text-center shadow rounded py-2 background-color-footer">
                    <h3>UPI NO : 9876543210</h3> <h3>UPI ID :Chicks@Kotak</h3>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5 my-4">
                  <label htmlFor="" className="form-label">
                    Name
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
                <div className="col-lg-5 my-4 position-relative">
                  <label htmlFor="" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Mobile Number"
                    {...register("number", {
                      required: "Mobile Number is required",
                    })}
                  />
                  {errors.number && (
                    <div className="text-danger">{errors.number.message}</div>
                  )}
                  {/* <CiCreditCard1 className="card-payment-icon" /> */}
                </div>
                <div className="col-lg-5 my-4">
                  <label htmlFor="" className="form-label">
                    Transaction ID
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Transaction ID"
                    {...register("transaction", {
                      required: "Transaction ID is required",
                    })}
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

export default FinallPayment;
