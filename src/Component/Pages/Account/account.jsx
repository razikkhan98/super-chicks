import React, { useState } from "react";
import Footer from "../../Common/Footer/footer";
import { Button, Modal } from "react-bootstrap";
import NavbarGround from "../../Common/Navbar/navbground";

const Account = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showModal, setShowModal] = useState(false);

  const handleTabClick = (cityName) => {
    setActiveTab(cityName);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <NavbarGround/>
      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
              <ul className="indicator">
                <li
                  // className={activeTab === "Dashboard" ? "active" : ""}
                  className={`btn ${
                    activeTab === "Dashboard" ? "active b-0" : ""
                  }`}
                  id="home-button"
                  onClick={() => handleTabClick("Dashboard")}
                >
                  Dashboard
                </li>
                <li
                  // className={activeTab === "MyOrder" ? "active" : ""}
                  className={`btn ${
                    activeTab === "MyOrder" ? "active b-0" : ""
                  }`}
                  id="profile-button"
                  onClick={() => handleTabClick("MyOrder")}
                >
                  <i className="ph-user-circle"></i> My Order
                </li>
                <li
                  // className={activeTab === "AddressList" ? "active" : ""}
                  className={`btn ${
                    activeTab === "AddressList" ? "active b-0" : ""
                  }`}
                  id="contact-button"
                  onClick={() => handleTabClick("AddressList")}
                >
                  Address List
                </li>
                <li
                  // className={activeTab === "Account" ? "active" : ""}
                  className={`btn ${
                    activeTab === "Account" ? "active b-0" : ""
                  }`}
                  id="settings-button"
                  onClick={() => handleTabClick("Account")}
                >
                  Account Details
                </li>
                <li
                  // className={activeTab === "Logout" ? "active" : ""}
                  className={`btn ${
                    activeTab === "Logout" ? "active b-0" : ""
                  }`}
                  id="settings-button"
                  onClick={() => handleTabClick("Logout")}
                >
                  Logout
                </li>
              </ul>
              </div>
              <div className="col-lg-9 col-sm-12">
              <ul className="content">
                <li
                  className={activeTab === "Dashboard" ? "active" : ""}
                  id="home"
                >
                  <h1 className="mt-5">Dashboard</h1>
                  <span className="mt-3 text-color-black">Hello</span>
                  <span className="mt-3 text-color-black px-2">ABC</span>
                  <div className="mt-3 text-color-gray">
                    Thank you for signing in to your account. You can use this
                    dashboard to view your order details, change or edit
                    address, update email id and other account details.
                  </div>
                </li>
                <li
                  className={activeTab === "MyOrder" ? "active" : ""}
                  id="profile"
                >
                  <h1 className="mt-5">MyOrder</h1>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Order Details</th>
                        <th scope="col">Shipping Details</th>
                        <th scope="col">Product Details</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>order 1</td>
                        <td>indore</td>
                        <td>Fish</td>
                        <td>125</td>
                        <td>success</td>
                      </tr>
                      <tr>
                        <td>order 1</td>
                        <td>indorenton</td>
                        <td>Fish</td>
                        <td>125</td>
                        <td>pending</td>
                      </tr>
                      <tr>
                        <td>order 1</td>
                        <td>indoreBird</td>
                        <td>Fishtter</td>
                        <td>125</td>
                        <td>success</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li
                  className={activeTab === "AddressList" ? "active" : ""}
                  id="contact"
                >
                  <h1 className="mt-5">Address</h1>
                  <button
                    type="button"
                    className="btn btn-outline-danger fw-bold add-new-button my-3"
                    onClick={handleShow}
                  >
                    Add New
                  </button>

                  <Modal show={showModal} onHide={handleClose} size="lg">
                    <Modal.Header>
                      <Modal.Title className="text">
                        Add New Address
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form action="">
                        <div className="row mb-3">
                          <div className="col-lg-6 px-3">
                            <label htmlFor="" className="form-label">
                              Name
                              <span className="text-color-red">*</span>
                            </label>
                            <input type="text" className="form-control my-2" />
                          </div>
                          <div className="col-lg-6 px-3">
                            <label htmlFor="" className="form-label">
                              Phone
                              <span className="text-color-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control my-2"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-lg-6 px-3">
                            <label htmlFor="" className="form-label">
                              Email
                              <span className="text-color-red">*</span>
                            </label>
                            <input
                              type="email Address"
                              className="form-control my-2"
                            />
                          </div>
                          <div className="col-lg-6 px-3">
                            <label htmlFor="" className="form-label">
                              Flat/Apartment No
                              <span className="text-color-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control my-2"
                              placeholder="Flat/Apartment No"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-lg-6 px-3">
                            <label htmlFor="" className="form-label">
                              Street Address
                              <span className="text-color-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control my-2"
                              placeholder="Street Address"
                            />
                          </div>
                          <div className="col-lg-6 px-3">
                            <label htmlFor="" className="form-label">
                              Nearest Landmark
                              <span className="text-color-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control my-2"
                              placeholder="Nearest Landmark"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-lg-6 px-3">
                            <label htmlFor="" className="form-label">
                              Zipcode
                              <span className="text-color-red ">*</span>
                            </label>
                            <input
                              type="number"
                              className="form-control mt-2"
                            />
                          </div>
                          <div className="col-lg-6 px-3 d-flex align-items-end ">
                            <Button
                              variant="secondary me-2 cancel"
                              onClick={handleClose}
                            >
                              Cancel
                            </Button>
                            <Button variant=" btn-danger">Add Address</Button>
                          </div>
                        </div>
                      </form>
                    </Modal.Body>
                  </Modal>
                </li>
                <li
                  className={activeTab === "Account" ? "active" : ""}
                  id="contact">
                  <h1 className="mt-5">Account Details</h1>
                  <form action="">
                    <div className="row mb-3">
                      <div className="col-lg-6 px-3">
                        <label htmlFor="" className="form-label">
                          First Name
                          <span className="text-color-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control my-2"
                          placeholder="-------"
                        />
                      </div>
                      <div className="col-lg-6 px-3">
                        <label htmlFor="" className="form-label">
                          Last Name
                          <span className="text-color-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control my-2"
                          placeholder="--------"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-6 px-3">
                        <label htmlFor="" className="form-label">
                          Email
                          <span className="text-color-red">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control my-2"
                          placeholder="--------"
                        />
                      </div>
                      <div className="col-lg-6 px-3">
                        <label htmlFor="" className="form-label">
                          Phone
                          <span className="text-color-red">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control my-2"
                          placeholder="-------------"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-9"></div>
                      <div className="col-lg-3">
                        <Button variant="btn-danger text-white primary px-5">Submit</Button>
                      </div>
                    </div>
                  </form>
                </li>

                <li
                  className={activeTab === "Logout" ? "active" : ""}
                  id="contact"
                >
                  <h1>Logout</h1>
                </li>
              </ul>
              </div>
             
              
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Account;