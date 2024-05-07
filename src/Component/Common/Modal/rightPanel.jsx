import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCartContext } from "../../Context/cartContext";
import Cookies from "js-cookie";

// Images
import logo from "../../asset/img/Logo/logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const RightPanel = ({ showModal, setShowModal }) => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(60);

  const [isCounting, setIsCounting] = useState(false);
  const [numerate, setNumerate] = useState();

  const { setLoggedInUser } = useCartContext();

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = Cookies.get("loggedInUser");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setNumerate(data);

    try {
      const response = await axios.post(
        "https://api.superchicks.online/sign_m",
        {
          msg: "f",
          num: data.num,
        },
        {
          headers: {
            "Content-Type": "application/json", // Adjust content type according to your API requirements
            Authorization: "Bearer yourAccessToken", // Include your authorization token here if needed
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "X-Requested-With,content-type",
          },
        }
      );
      const datasets = response.data.msg;
      if (datasets === "Success") {
        setActive(true);
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
        reset();
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("Network Error: Please check your internet connection");
      } else {
        toast.error("An unexpected error occurred");
      }
      reset();
    }
  };

  const ondata = async (data) => {
    // const FinalData = { otp: data.otp, num: numerate.num };

    try {
      const response = await axios.post(
        "https://api.superchicks.online/sign_check",
        {
          otp: data.otp,
          num: numerate.num,
        },
        {
          headers: {
            "Content-Type": "application/json", // Adjust content type according to your API requirements
            Authorization: "Bearer yourAccessToken", // Include your authorization token here if needed
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "X-Requested-With,content-type",
          },
        }
      );
      const msg = response.data.msg;
      const Status = response.data.status;

      if (msg === "Success" && Status === "True") {
        setShowModal(false);
        const datasets = response.data.uid;
        setLoggedInUser(datasets);
        Cookies.set("loggedInUser", datasets);

        // localStorage.setItem("loggedInUser",datasets);
        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
        setActive(false);
      }
    } catch (error) {
      setShowModal(false);
      setActive(false);
      reset();
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("Network Error: Please check your internet connection");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  const startCounting = () => {
    setIsCounting(true);
    setCount(60);
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsCounting(false);
    }, 61000); // 30 seconds
  };

  const ResendOtp = async () => {
    const ResendData = { msg: "", num: numerate.num };
    try {
      const response = await axios.post(
        "http://192.168.1.9:8000/sign_m",
        ResendData
      );
      const msg = response.data.msg;
      const Status = response.data.status;

      if (msg === "Success" && Status === "True") {
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
        reset();
        setActive(false);
      }
    } catch (error) {
      setShowModal(false);
      setActive(false);
      reset();
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
                        })}
                      />
                      {errors.num && (
                        <div className="text-danger">{errors.num.message}</div>
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
                    <div className="text-center pt-1 pb-1">
                      {count === -1 ? (
                        <>
                          <button
                            className="btn btn-primary text-white border-0 gradient-custom-2 mb-3 w-75 text-color-black"
                            type="submit"
                          >
                            Submit
                          </button>

                          <button
                            className="btn btn-primary text-white border-0 gradient-custom-2 mb-3 w-75 text-color-black"
                            onClick={ResendOtp}
                          >
                            Resend
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="btn btn-primary text-white border-0 gradient-custom-2 mb-3 w-75 text-color-black"
                            type="submit"
                          >
                            Submit
                          </button>
                        </>
                      )}

                      {/* <button
                        className="btn btn-primary text-white border-0 gradient-custom-2 mb-3 w-75 text-color-black"
                        type="submit"
                      >
                        Submit
                      </button> */}
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
