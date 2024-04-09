import React, { useEffect, useState } from "react";
import Footer from "../../../Common/Footer/footer";
import NavbarGround from "../../../Common/Navbar/navbground";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCartContext } from "../../../Context/cartContext";
import FormatPrice from "../../../Helpers/FormatPrice";
import { useNavigate } from "react-router-dom";

const OrderCheckoutPayment = () => {
  const { setOrderPayment, total_price, shipping_fee, cart } = useCartContext();

  const navigate = useNavigate();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOrderPayment(data);
    console.log(data);
    navigate('/orderFinal')
  };

  const [enteredZipcode, setEnteredZipcode] = useState("");

  const [message, setMessage] = useState('')

  const pincode = [
    451010, 452001, 452002, 452003, 452004, 452005, 452006, 452007, 452008,
    452009, 452010, 452011, 452012, 452013, 452014, 452015, 452016, 452018,
    452020, 453111, 453112, 453331, 453332, 453555, 453556, 453771, 456015
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

  const addressjson = [{

    "address": "123 Main Street green Park Indore ",
    "name": "admin",
    "ctiy": "Paris",
    "zipcode": "452001",
    "number": "1234567"
  }, {
    "address": "777 North West rajwada indore",
    "name": "Berlin",
    "city": "France",
    "zipcode": "452001",
    "number": "1234567"
  },
  {
    "address": "55 anpurna road  Indore",
    "name": "Panel",
    "city": "Indore",
    "zipcode": "452001",
    "number": "1234567"
  }

  ]

  const [showForm, setShowForm] = useState(true);
  var a = 7
  useEffect(() => {
    if (a == 7) {
      setShowForm(false);
    }
  }, []);
  // const [selectedAddress, setSelectedAddress] = useState('');
  // const handleRadioChange = (event) => {
  //   setSelectedAddress(event.target.value);
  // };
  const RadioSubmit = () => {
    if (selectedAddress === '') {
      console.log("Selected Address is empty");
    } else {
      console.log("Selected Address:", selectedAddress);
      navigate('/orderFinal');
    }
  };

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const logSelectedAddress = () => {
    const selected = addressjson.find(address => address.address === selectedAddress);
    console.log(selected);
      navigate('/orderFinal');
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
                          value={enteredZipcode}
                          onChange={handleZipcodeChange}
                        />
                        {errors.zipcode && (
                          <div className="text-danger">
                            {errors.zipcode.message}
                          </div>
                        )}
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


                          <span className="ps-5 fw-bold text-color-black">{link.amount}</span>
                        </div>
                        <div className="col-lg-4 pe-5 fw-bold text-end"><FormatPrice price={link.price * link.amount} /></div>
                      </div>
                    ))}

                    <hr />

                    <div className="row">
                      <div className="col-lg-8 fw-bold">Subtotal</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end"><FormatPrice price={total_price} /></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 fw-bold">Shipping Charge</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end"><FormatPrice price={shipping_fee} /></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 fw-bold">Promo Discount</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">{ }</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 text-color-gray">Order Total</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end"><FormatPrice price={total_price + shipping_fee} /></div>
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
                {/* <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="address"
                    id="address1"
                    value="Address 1"
                    checked={selectedAddress === "Address 1"}
                    onChange={handleRadioChange}
                  />
                  <label className="form-check-label" htmlFor="address1">
                    Address 1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="address"
                    id="address2"
                    value="Address 2"
                    checked={selectedAddress === "Address 2"}
                    onChange={handleRadioChange}
                  />
                  <label className="form-check-label" htmlFor="address2">
                    Address 2
                  </label>
                </div> */}
                <div className="row">
                  {addressjson.map((address, index) => (
                    <div className="col-lg-4 form-check my-1" key={index}>
                      <div onClick={() => handleRadioClick(address.address)} className={"radio-box border rounded w- justify-content-between p-2" + (selectedAddress === address.address ? " border-primary border-3" : "")}>

                        <div className="d-flex justify-content-between align-items-center m-2"><span>Name : <strong className="mx-2">{address.name}</strong></span> <input
                          className="form-check-input text-end float-none m-0"
                          type="radio"
                          name="address"
                          id={"address" + (index + 1)}
                          value={address.address}
                          checked={selectedAddress === address.address}
                          onChange={handleRadioChange}
                        />
                        </div>
                        <span className="my-2 d-block mx-2">Number : <strong className="mx-2">{address.number}</strong></span>

                        <span className="my-2 m-0 px-2 d-block">Address:<strong className="m-0">{address.address}</strong>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button onClick={() => setShowForm(true)}>Fill New Details</Button>
                <div className="my-5 row pe-4">
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


                          <span className="ps-5 fw-bold text-color-black">{link.amount}</span>
                        </div>
                        <div className="col-lg-4 pe-5 fw-bold text-end"><FormatPrice price={link.price * link.amount} /></div>
                      </div>
                    ))}

                    <hr />

                    <div className="row">
                      <div className="col-lg-8 fw-bold">Subtotal</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end"><FormatPrice price={total_price} /></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 fw-bold">Shipping Charge</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end"><FormatPrice price={shipping_fee} /></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 fw-bold">Promo Discount</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end">{ }</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-8 text-color-gray">Order Total</div>
                      <div className="col-lg-4 pe-5 fw-bold text-end"><FormatPrice price={total_price + shipping_fee} /></div>
                    </div>
                  </div>

                  {/* <NavLink to="/orderFinal" className="text-decoration-none"> */}
                  <div className="d-flex justify-content-end">
                    <Button
                      variant=" btn-danger text-light bg-danger px-5 mt-5"
                      type="button" onClick={logSelectedAddress}
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
