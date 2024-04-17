import React, { useEffect, useState } from "react";
import Footer from "../../../Common/Footer/footer";
import NavbarGround from "../../../Common/Navbar/navbground";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCartContext } from "../../../Context/cartContext";
import FormatPrice from "../../../Helpers/FormatPrice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const OrderCheckoutPayment = () => {
  const { setOrderPayment, total_price, shipping_fee, cart, loggedInUser } =
    useCartContext();

  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(true);
  const [enteredZipcode, setEnteredZipcode] = useState("");
  const [message, setMessage] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressData, setAddressdata] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOrderPayment(data);
    reset();
    navigate("/orderFinal");
  };

  const pincode = [
    451010, 452001, 452002, 452003, 452004, 452005, 452006, 452007, 452008,
    452009, 452010, 452011, 452012, 452013, 452014, 452015, 452016, 452018,
    452020, 453111, 453112, 453331, 453332, 453555, 453556, 453771, 456015,
  ];

  const handleZipcodeChange = (event) => {
    const { value } = event.target;
    setEnteredZipcode(value);
    if (pincode.includes(parseInt(value))) {
      setMessage("");
    } else {
      setMessage("Invalid zipcode");
    }
  };

  const Api = "https://api.superchicks.online/address";

  const PostAddress = async () => {
    try {
      const response = await axios.post(
        Api,
        {
          loggedInUser,
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

      const { data } = response;
      setAddressdata(data);
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
  useEffect(() => {
    PostAddress();
  }, []);

  // const addressjson = [
  //   {
  //     address: "123 Main Street green Park Indore ",
  //     name: "admin",
  //     ctiy: "Paris",
  //     zipcode: "452001",
  //     number: "1234567",
  //     landmark: "Kazi clinic",
  //   },
  //   {
  //     address: "777 North West rajwada indore",
  //     name: "Berlin",
  //     city: "France",
  //     zipcode: "452001",
  //     number: "1234567",
  //     landmark: "Kazi clinic",
  //   },
  //   {
  //     address: "55 anpurna road  Indore",
  //     name: "Panel",
  //     city: "Indore",
  //     zipcode: "452001",
  //     number: "1234567",
  //     landmark: "Kazi clinic",
  //   },
  // ];

  var a = 7;
  useEffect(() => {
    if (a === 7) {
      setShowForm(false);
    }
    if (addressData && addressData.length > 0) {
      const selected = addressData.find(
        (address) => address.address === selectedAddress
      );
      setOrderPayment(selected);
      reset();
      console.log("card");
    } else {
      setShowForm(true);
      console.log("form");
    }
    
  }, []);

  const handleRadioChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const logSelectedAddress = () => {
    // let selected;
    if (addressData.find((address) => address.address === selectedAddress)) {
      navigate("/orderFinal");
    } else {
      console.log("please select");
      toast.info("please select", {
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

  const handleRadioClick = (address) => {
    setSelectedAddress(address);
  };

  return (
    <>
      <NavbarGround />
      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <h2 className="fw-bold text-color-red">Order Ckeckout</h2>
            {showForm ? (
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
                            pattern: {
                              value: /^[a-zA-Z ]+$/g,
                              message: "Only letters are allowed",
                            },
                            minLength: {
                              value: 3,
                              message: "Minimum 3 characters",
                            },
                            maxLength: {
                              value: 20,
                              message: "Maximum 20 characters",
                            },
                          })}
                        />
                        {errors.name && (
                          <div className="text-danger">
                            {errors.name.message}
                          </div>
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
                            pattern: {
                              value: /^\d{10}$/,
                              message: "Invalid phone number",
                            },
                            minLength: {
                              value: 10,
                              message: "Phone number must be exactly 10 digits",
                            },
                            maxLength: {
                              value: 10,
                              message: "Phone number must be exactly 10 digits",
                            },
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
                            pattern: {
                              value:
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                              message: "Invalid email",
                            },
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
                            pattern: {
                              value: /^[a-zA-Z0-9\s]+$/,
                              message: "Invalid street address",
                            },
                            minLength: {
                              value: 3,
                              message:
                                "Street address must be at least 3 characters",
                            },
                            maxLength: {
                              value: 100,
                              message:
                                "Street address must be at most 100 characters",
                            },
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
                            pattern: {
                              value: /^[a-zA-Z0-9\s]+$/,
                              message: "Invalid landmark",
                            },
                            minLength: {
                              value: 3,
                              message: "Landmark must be at least 3 characters",
                            },
                            maxLength: {
                              value: 100,
                              message:
                                "Landmark must be at most 100 characters",
                            },
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
                          value={enteredZipcode}
                          onChange={handleZipcodeChange}
                        />

                        <div className="text-color-red">{message}</div>
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
                    {cart.map((link) => (
                      <div className="row">
                        <div className="col-lg-8 text-color-gray">
                          {link.name}

                          <span className="ps-5 fw-bold text-color-black">
                            {link.amount}
                          </span>
                        </div>
                        <div className="col-lg-4 pe-5 fw-bold text-end">
                          <FormatPrice price={link.price * link.amount} />
                        </div>
                      </div>
                    ))}

                    <hr />

                    <div className="row">
                      <div className="col-lg-8 fw-bold">Subtotal</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">
                        <FormatPrice price={total_price} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 fw-bold">Shipping Charge</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">
                        <FormatPrice price={shipping_fee} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 fw-bold">Promo Discount</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">{}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 text-color-gray">
                        Order Total
                      </div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">
                        <FormatPrice price={total_price + shipping_fee} />
                      </div>
                    </div>
                  </div>

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
            ) : (
              <>
                <div className="row">
                  {addressData.map((address, index) => (
                    <div
                      className="col-lg-6 col-sm-12 form-check my-1"
                      key={index}
                    >
                      <div
                        onClick={() => handleRadioClick(address.address)}
                        className={
                          "radio-box border rounded justify-content-between p-2" +
                          (selectedAddress === address.address
                            ? " border-success border-3"
                            : "")
                        }
                      >
                        <div className="d-flex justify-content-between align-items-center m-2">
                          <div>
                            Name :
                            <strong className="mx-2">{address.name}</strong>
                          </div>
                          <input
                            className="form-check-input text-end float-none m-0"
                            type="radio"
                            name="address"
                            id={"address" + (index + 1)}
                            value={address.address}
                            checked={selectedAddress === address.address}
                            onChange={handleRadioChange}
                          />
                        </div>
                        <div className="my-2 d-block mx-2">
                          Number :
                          <strong className="mx-2">{address.number}</strong>
                        </div>

                        <div className="my-2 m-0 px-2 d-block">
                          Address:
                          <strong className="mx-2">{address.address}</strong>
                        </div>
                        <div className="my-2 m-0 px-2 d-block">
                          Nearest Landmark:
                          <strong className="mx-2">{address.address}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <Button onClick={() => setShowForm(true)}>
                  Fill New Details
                </Button> */}
                <div className="d-flex justify-content-start">
                  <Button
                    variant=" btn-danger text-light bg-danger px-5 mt-5"
                    onClick={() => setShowForm(true)}
                  >
                    Fill New Details
                  </Button>
                </div>

                <div className="my-5 row pe-4">
                  <div className="col-lg-8">
                    <div>Your Order</div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-6 ps-3 fw-bold">
                        Productyhfyujfiyfyuf
                      </div>
                      <div className="col-lg-6 pe-5 fw-bold text-end">
                        Subtotal
                      </div>
                    </div>
                    <hr />
                    {cart.map((link) => (
                      <div className="row">
                        <div className="col-lg-8 text-color-gray">
                          {link.name}

                          <h3>x</h3>
                          <span className="ps-5 fw-bold text-color-black">
                            {link.amount}
                          </span>
                        </div>
                        <div className="col-lg-4 pe-5 fw-bold text-end">
                          <FormatPrice price={link.price * link.amount} />
                        </div>
                      </div>
                    ))}

                    <hr />

                    <div className="row">
                      <div className="col-lg-8 fw-bold">Subtotal</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">
                        <FormatPrice price={total_price} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 fw-bold">Shipping Charge</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">
                        <FormatPrice price={shipping_fee} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 fw-bold">Promo Discount</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">{}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 text-color-gray">
                        Order Total
                      </div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">
                        <FormatPrice price={total_price + shipping_fee} />
                      </div>
                    </div>
                  </div>

                  {/* <NavLink to="/orderFinal" className="text-decoration-none"> */}
                  <div className="d-flex justify-content-end">
                    <Button
                      variant=" btn-danger text-light bg-danger px-5 mt-5"
                      type="button"
                      onClick={logSelectedAddress}
                    >
                      Place Order
                    </Button>
                  </div>
                  {/* </NavLink> */}
                </div>
              </>
            )}
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
