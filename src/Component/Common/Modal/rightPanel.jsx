import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineLogin } from "react-icons/ai";
import { useCartContext } from "../../Context/cartContext";

// Images
import logo from "../../asset/img/Logo/logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const RightPanel = ({ showModal, setShowModal }) => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(30);
  const [isCounting, setIsCounting] = useState(false);
  const { setLoggedInUser } = useCartContext();
  const [ otpdata, setOtpdata] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data,12222);

    try {
      const response = await axios.post("https://a167-2401-4900-1c08-2d04-94db-8c05-61e6-1171.ngrok-free.app/sign_m", data);

      console.log("Login successful:", response.data);
      const datasets = response.data.msg;
      if (datasets === "Success") {
        setActive(true);
        setLoggedInUser(datasets);
        startCounting();
        toast.info("Please Enter the Otp", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(datasets, {
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
      toast.error(error, {
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


  
  const ondata = async (data) => {
    console.log(data,'ondata');


    try {
      const response = await axios.post("https://a167-2401-4900-1c08-2d04-94db-8c05-61e6-1171.ngrok-free.app/sign_check", data);

      // console.log("Login successful:", response.data);
      const msg = response.data.msg;
      const Status = response.data.status;


      if (msg === "Success" || Status === "True") {
        setShowModal(false);
        toast.info("Login Successful", {
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
      toast.error(error, {
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


    // if(otpdata === data){
    //   setShowModal(false);
    //   toast.info("Login Successful", {
    //     position: "top-center",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }


    
  }

  const startCounting = () => {
    setIsCounting(true);
    setCount(30);
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsCounting(false);
    }, 31000); // 30 seconds
  };

  return (
    <>
     
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
                {active === false && (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline  mb-3">
                      <div className="d-flex justify-content-between">
                        <label
                          className="form-label mx-2"
                          htmlFor="form2Example11"
                        >
                          Phone Number
                        </label>
                      </div>

                      <input
                        type="text"
                        className="form-control border"
                        placeholder="Enter Phone Number"
                        {...register("num", {
                          required: "Phone Number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid Phone Number",
                          },
                          minLength: {
                            value: 10,
                            message: "Invalid Phone Number",
                          },
                          maxLength: {
                            value: 10,
                            message: "Invalid Phone Number",
                          },
                        })}
                      />
                      {errors.num && (
                        <div className="text-danger">
                          {errors.num.message}
                        </div>
                      )}
                    </div>

                    <div className="text-center py-1">
                      <button
                        className="btn btn-primary text-white border-0 gradient-custom-2 mb-3 w-75 text-color-black"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}

                {active === true && (
                  <form onSubmit={handleSubmit(ondata)}>

                    <div className="form-outline mb-3">
                      <div>
                        <label
                          className="form-label mx-2"
                          htmlFor="form2Example11"
                        >
                          Otp Number
                        </label>
                      </div>
                      <div className="text-color-red pe-3">
                        {isCounting && <span>{count} sec</span>}
                      </div>
                      <input
                        type="otp"
                        className="form-control border"
                        placeholder="Enter Otp Number"
                        {...register("otp", {
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
                )}

                {/* <LoginForm/> */}
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center  gradient-custom-2 rounded">
                <div className="text-white text-center p-3">
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
