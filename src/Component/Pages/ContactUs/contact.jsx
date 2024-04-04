import React from "react";

import Footer from "../../Common/Footer/footer";
import NavbarGround from "../../../Component/Common/Navbar/navbground";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

// Icons
import { IoMdCall } from "react-icons/io";
import WhatApp from "../../Common/whatappicon/whatapp";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data, 12233);

    try {
      const response = await axios.post("http://146.190.8.141/sign_m", data);
      const msg = response.data.msg;

      if (msg === "Success") {
        toast.info("Message Successful", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Message failed", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
                      100% Hygienic Raw Fresh Chicken ,Fresh Mutton & 
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="pt-4">
                <label htmlFor="" className="form-label">
                  <span className="text-color-red">*</span>
                  Your Name
                </label>
                <input
                  type="text"
                  className="border border-secondary bg-white form-control p-2"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <div className="text-danger">{errors.name.message}</div>
                )}
              </div>
              <div className="pt-4">
                <label htmlFor="" className="form-label">
                  <span className="text-color-red">*</span>
                  E-mail Address
                </label>
                <input
                  type="email"
                  className="border border-secondary bg-white form-control p-2"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email.message}</div>
                )}
              </div>

              <div class="pt-4">
                <label htmlfor="" class="form-label">
                  <span className="text-color-red">*</span>
                  Enquiry
                </label>
                {/* <textarea
                  class="border border-secondary bg-white form-control p-5"
                  // rows="3"
                ></textarea> */}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="border border-secondary bg-white form-control p-5"
                  {...register("msg", {
                    required: "Enquiry is required",
                  })}
                />
                {errors.enquiry && (
                  <div className="text-danger">{errors.msg.message}</div>
                )}
              </div>
              <Button
                variant=" btn-danger text-light bg-danger px-5 mt-5"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
          <WhatApp />
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
