import React from "react";
import Footer from "../../../Common/Footer/footer";
import { Button } from "react-bootstrap";
import { CiCreditCard1 } from "react-icons/ci";
import NavbarGround from "../../../Common/Navbar/navbground";
import { useForm } from "react-hook-form";

// Icons
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useCartContext } from "../../../Context/cartContext";

const FinallPayment = () => {

  const {totalCartPrice } = useCartContext();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, 12233);
  };



  return (
    // <>
    //   <NavbarGround />
    //   <div className="back-img-main">
    //     <section id="section-padding">
    //       <div className="container px-5">
    //         <h2 className="fw-bold text-color-red">Payment</h2>
    //         <form action="">
    //           <div className="row">
    //             <div className="col-lg-12 my-4">
    //               <label htmlFor="" className="form-label">
    //                 CARDHOLDER’S NAME
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control my-2"
    //                 placeholder="Name on card"
    //               />
    //             </div>
    //             <div className="col-lg-12 my-4 position-relative">
    //               <label htmlFor="" className="form-label">
    //                 CARD NUMBER
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control my-2"
    //                 placeholder="--- --- --- ---"
    //               />
    //               <CiCreditCard1 className="card-payment-icon" />
    //             </div>
    //             <div className="col-lg-6 my-4">
    //               <label htmlFor="" className="form-label">
    //                 EXPIRY DATE
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control my-2"
    //                 placeholder="MM/YYYY"
    //               />
    //             </div>
    //             <div className="col-lg-6 my-4">
    //               <label htmlFor="" className="form-label">
    //                 EXPIRY DATE
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control my-2"
    //                 placeholder="Code"
    //               />
    //             </div>
    //             <div className="col-lg-5">
    //               <Button variant=" btn-danger px-5">Done</Button>
    //             </div>
    //           </div>
    //           </form>

    //           <div class="alert bg-light position-relative w-50" role="alert">
    //             <div className="position-absoulte top-0 start-50 alert-icon d-flex justify-content-center">
    //               <IoMdCheckmarkCircle class="alert-heading fs-1" />
    //             </div>
    //             <h3 className="fw-bold  text-center">Success</h3>
    //             <p className="text-center">
    //               Check your email for a booking confirmation.We’ll see you soon
    //               You can always track your orders in the “Orders” section under
    //               profile{" "}
    //             </p>
    //             <div className="d-flex justify-content-center">
    //               <button className="btn alert-button">HOME</button>
    //             </div>
    //           </div>
    //       </div>
    //     </section>
    //   </div>

    //   {/* Footer Start*/}
    //   <Footer />
    //   {/* Footer End */}
    // </>
    <>
      <NavbarGround />
      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <h2 className="fw-bold text-color-red">Payment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="justify-content-end d-flex">
                <div className="w-25 text-center shadow rounded py-2 background-color-footer">
                  <h3>UPI NO : 9876543210</h3> <h3>UPI ID :Chicks@Kotak</h3>
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
                    <div className="text-danger">
                      {errors.number.message}
                    </div>
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
                      required: "Transaction ID required",
                    })}
                  />
                  {errors.transaction && (
                    <div className="text-danger">
                      {errors.transaction.message}
                    </div>
                  )}
                </div>
                <div className="col-lg-5 my-4">
                  <label htmlFor="" className="form-label">
                    Amount
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    defaultValue={totalCartPrice}
                  />
                  {errors.amount && (
                    <div className="text-danger">
                      {errors.amount.message}
                    </div>
                  )}
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

      {/* Footer Start*/}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default FinallPayment;
