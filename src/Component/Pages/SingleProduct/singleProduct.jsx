import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

// Common
import Footer from "../../Common/Footer/footer";
import MyImage from "../../Common/MyImage/myImage";
import { useCartContext } from "../../Context/cartContext";
import NavbarGround from "../../Common/Navbar/navbground";
import RightPanel from "../../Common/Modal/rightPanel";
import ReactWhatsapp from "react-whatsapp";

//React icons

import { BsHandbag } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";

// Image
import OrderChicken1 from "../../asset/Superchicks images/Chicken Product image/Chiken Mixed With Bones.jpeg";
import product2 from "../../asset/Superchicks images/Chicken Product image/Chiken WIngs.jpeg";
import product3 from "../../asset/Superchicks images/Chicken Product image/Chicken Breast.jpg";
import product4 from "../../asset/Superchicks images/Chicken Product image/chicken Mince [keema].jpeg";
import { toast } from "react-toastify";
import LoginPopap from "../../Common/Modal/loginpopap";
import Similar from "../../Common/SimilarProducts";

const SingleProduct = () => {
  const { addToCart } = useCartContext();

  const ProductData = [
    {
      id: "ch-721",
      img: OrderChicken1,
      title: "Chicken mixed with bone",
      kilogram: "500gms | Serve 4",
      amt: "148 Rs",
      del: "185 Rs",
    },
    {
      id: "ch-725",
      img: product2,
      title: "Chicken Wings",
      amt: "175 Rs",
      del: "219 Rs",
    },
    {
      id: "ch-727",
      img: product3,
      title: "Chicken Breast",
      amt: "271 Rs",
      del: "339 Rs",
    },
    {
      id: "ch-726",
      img: product4,
      title: "Chicken Mince (Keema)",
      amt: "311 Rs",
      del: "389 Rs",
    },
  ];

  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);
  const [amount, setAmount] = useState(1);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { loggedInUser, cart } = useCartContext();
  const [showloginpopModal, setShowloginpopModal] = useState(false);

  let saltlength = cart.length;

  const {
    name,
    price,
    description,
    offers,
    discount,
  } = singleProduct;


  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < 10 ? setAmount(amount + 1) : setAmount(10);
  };

  //   Api Function single Product Id

  const api = "http://146.190.8.141/product?id=";

  // const getSingleProduct = async (id) => {
  //   const response = await axios.get(`${api}${id}`);
    

  //   return response.data;
  // };

  const getSingleProduct = async (id) => {
    try {
      const response = await axios.get(`${api}${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.data;
   } catch (error) {
      // Display error using Toastify
      toast.error('Network error occurred');
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getSingleProduct(id).then((data) => {
      setSingleProduct(data);
    });
  }, [id]);

  const AddToCart = () => {
    if (loggedInUser) {
      addToCart(id, amount, singleProduct);
    } else {
      setShowLoginModal(!showLoginModal);
      toast.warn("Please Login", {
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
      {/* Description Start */}
      <NavbarGround />
      <div className="back-img-main">
        <section id="section-padding">
          <div class="container">
            <div class="row">
              <div className="col-md-7">
                <MyImage />
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6">
                    <div className="description-text ms-5">
                      <h5>Delivery Details</h5>
                      <p>Check estimated delivery date/pickup option.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="description-btn">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control "
                          placeholder="Apply Valid Pincode"
                          aria-label="Apply Valid Pincode"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class="btn btn-outline-secondary me-5"
                          type="button"
                          id="button-addon2"
                        >
                          Check
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-5">
                <div className="description-heading">
                  <h1>{name}</h1>
                </div>
                <div className="product-price d-flex">
                  <h1 className="price-1">Rs {price}</h1>
                  <h3 className="price-2">
                    <del> {discount}</del>
                  </h3>
                  <h1 className="price-off">{offers}</h1>
                </div>
                <div className="hr"></div>
                <div className="Product-quantity d-flex align-items-center">
                  Quantity:
                  <div className="product-quantity-btn d-flex align-items-center ms-3 mb-3">
                    <button
                      className="btn bg-white m-1"
                      onClick={() => setDecrease()}
                    >
                      <FaMinus />
                    </button>
                    <div>{amount}</div>
                    <button
                      className="btn bg-white m-1"
                      onClick={() => setIncrease()}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <ReactWhatsapp
                    className="border-0 bg-white text-decoration-underline text-danger"
                    number="91 9244276667"
                    message="please mention your order"
                  >
                    For more than 20kg click here
                  </ReactWhatsapp>
                </div>

                <h4 className="price-heading  pt-2">
                  Raw Chicken Mince with Bone
                </h4>
                <p className="description">{description}</p>
                {/* <div className="product-offer">Offers</div> */}
                {/* <div className="product-offer-card d-flex justify-content-evenly my-3">
                  <div className="offer-card-1 me-2 p-2">
                    <p>Rs125 cashback & Rs475 welcome rewards</p>
                    <a href="/" className="offer-card-terms">
                      Terms & Conditions
                    </a>
                  </div>
                  <div className="offer-card-2 me-2 p-2  ">
                    <p>Get upto 30% Off on order value above Rs100</p>
                    <a href="/" className="offer-card-terms">
                      Terms & Conditions
                    </a>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="offer-card-3 d-flex align-items-center justify-content-center"
                    >
                      View More Offers
                    </a>
                  </div>
                </div> */}
              </div>
              {/* {stock > 0 && ( */}
              <div className="col-lg-7 col-sm-12">
                <div className="add-ot-cart" onClick={AddToCart}>
                  <div className="add-to-cart-button mt-2">
                    <BsHandbag /> Add to Cart
                  </div>
                </div>
              </div>
              {/* )} */}

              {/* {stock > 0 && ( */}

              {saltlength === 0 ? (
                <>
                  <div className="col-lg-5 col-sm-12">
                    <div className="buy-now mt-2">
                      <NavLink to="/cart" className="sign-up-button">
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-5 col-sm-12">
                    <div className="buy-now mt-2">
                      <NavLink to="/orderPayment" className="sign-up-button">
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                </>
              )}

              {/* <div className="col-lg-5 col-sm-12">
                <div className="d-flex justify-content-star mt-2">
                  <div
                    to="/orderPayment"
                    className="sign-up-button"
                  >
                    Buy Now
                  </div>
                </div>
              </div> */}
              {/* )}  */}
            </div>

            <div className="hr"></div>

            <div className="description-card-heading mt-5 ">
              <h3>Similar Products</h3>
            </div>
            <div className="row">
              {ProductData.map((link, index) => (
                <>
                  <div className="col-lg-3 col-sm-12  mt-3 text-center"  key={index}>
                    <Similar key={link.id}
                      {...link}/>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Start */}
      <Footer />
      {/* Footer End  */}
      <RightPanel showModal={showLoginModal} setShowModal={setShowLoginModal} />

      <LoginPopap
        showModal={showloginpopModal}
        setShowModal={setShowloginpopModal}
      />

      {/* Description End */}
    </>
  );
};

export default SingleProduct;
