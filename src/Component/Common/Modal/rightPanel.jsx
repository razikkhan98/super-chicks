import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

// Images
import logo from "../../asset/img/Logo/logo.png";

const RightPanel = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Click</button>
      <Modal
        show={showModal} // Show modal based on state
        onHide={() => setShowModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="border-0 fs-5 fw-bolder" closeButton>
          Login :-
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-center">
                  <img src={logo} className="w-25" alt="logo" />
                  <h4 className="mt-1 mb-3 pb-1">SUPER-CHICKS</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* <p className="mb-3">hwllo</p> */}
                  <div className="form-outline  mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example11">
                      User Number
                    </label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Enter Phone Number"
                      {...register("username", {
                        required: "User Number is required",
                      })}
                    />
                    {errors.username && (
                      <div className="text-danger">
                        {errors.username.message}
                      </div>
                    )}
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example22">
                      OTP
                    </label>
                    <input
                      type="password"
                      className="form-control border"
                      placeholder="Enter OTP"
                      {...register("password", {
                        required: "OTP is required",
                      })}
                    />
                    {errors.password && (
                      <div className="text-danger">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="text-center pt-1  pb-1">
                    <button
                      className="btn btn-primary text-white border-0 gradient-custom-2 mb-3 w-75 text-color-black"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                {/* <LoginForm/> */}
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center  gradient-custom-2">
                <div className="text-white text-center px-2">
                  <h4 className="mb-4 text-color-black">About SuperChicks</h4>
                  <p className="small mb-0 text-color-black">
                    SuperChicks supplies provides you fresh and hygienic meat
                    products at very reasonable price. Forget the old days of
                    purchasing meat from stinky and unhygienic shops. Now just
                    order it online and get it delivered to your door steps.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RightPanel;
