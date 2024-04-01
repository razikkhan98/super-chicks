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
import product1 from "../../asset/img/Order/Order-Chicken-3.png";
import product2 from "../../asset/img/Order/Order-Chicken-4.png";
import product3 from "../../asset/img/Products/products-1.png";
import product4 from "../../asset/img/Order/Order-Chicken-5.png";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const { addToCart } = useCartContext();

  const ProductData = [
    {
      id: 1,
      img: product1,
      title: "Chicken Drumstick",
      amt: "Rs250",
      delamt: "Rs350",
    },
    {
      id: 2,
      img: product2,
      title: "Chicken Wings",
      amt: "Rs250",
      delamt: "Rs350",
    },
    {
      id: 3,
      img: product3,
      title: "Chicken Breast",
      amt: "Rs250",
      delamt: "Rs350",
    },
    {
      id: 4,
      img: product4,
      title: "Chicken Keema",
      amt: "Rs250",
      delamt: "Rs350",
    },
  ];

  const { id } = useParams();

  console.log(id,"id");
  
  const [singleProduct, setSingleProduct] = useState([]);
  const [amount, setAmount] = useState(1);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { loggedInUser } = useCartContext();


  console.log(id,122322)

  const { id:alias, name, price, description, stock, image ,offers,discount} = singleProduct;

  console.log(singleProduct,'singleProduct')

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < 10 ? setAmount(amount + 1) : setAmount(10);
  };

  //   Api Function single Product Id

  const api = "http://192.168.1.9:8000/product?id=";

  const getSingleProduct = async (id) => {
    const response = await axios.get(`${api}${id}`);
    console.log(response.data,1222222);

    return response.data;
  };

  useEffect(() => {
    getSingleProduct(id).then((data) => {
      setSingleProduct(data);
    });
  }, [id]);

  const AddToCart = () => {
    if (loggedInUser === 'Success') {
      addToCart(id, amount, singleProduct);
    } else {
      console.log("login first");
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
                <MyImage imgs={image} />
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
                <div className="Product-quantity d-flex">
                  Quantity:
                  <div className="product-quantity-btn d-flex align-items-center ms-3 mb-3">
                    {/* <button className="btn">-</button> */}
                    <button
                      className="btn bg-white m-1"
                      onClick={() => setDecrease()}
                    >
                      <FaMinus />
                    </button>
                    <div>{amount}</div>
                    {/* <button className="btn">+</button> */}
                    <button
                      className="btn bg-white m-1"
                      onClick={() => setIncrease()}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <ReactWhatsapp className="border-0 bg-white text-decoration-underline text-danger" number="91 9244276667" message="please mention your order">
                  For more than 20kg click here
                  </ReactWhatsapp>
                </div>

                <h4 className="price-heading">Raw Chicken Mince with Bone</h4>
                <p className="description">{description}</p>
                <div className="product-offer">Offers</div>
                <div className="product-offer-card d-flex justify-content-evenly my-3">
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
                </div>
              </div>
              {/* {stock > 0 && ( */}
                <div className="col-lg-7 col-sm-12">
                  <div
                    className=" d-flex justify-content-end"
                    onClick={() => addToCart(id, amount, singleProduct)}
                    // onAbort={AddToCart}
                  >
                    <div className="add-to-cart-button mt-2">
                      <BsHandbag /> Add to Cart
                    </div>
                  </div>
                </div>
              {/* )} */}

              {/* {stock > 0 && ( */}
                <div className="col-lg-5 col-sm-12">
                  <div className="d-flex justify-content-star mt-2">
                    {/* <a className="sign-up-button" href="/"> */}
                    <NavLink to='/orderPayment' className="sign-up-button">
                    Buy Now
                    </NavLink>
                    {/* </a> */}
                  </div>
                </div>
              {/* )} */}
            </div>

            <div className="hr"></div>

            <div className="description-card-heading mt-5">
              <h1>Similar Products</h1>
            </div>
            <div className="row">
              {ProductData.map((link, index) => (
                <>
                  <div className="col-md-3  mt-3">
                    <div className="similar-prooduct-img">
                      <img src={link.img} alt="Loading" />
                    </div>
                    <div className="similar-product-name mt-4">
                      <h4> {link.title}</h4>
                    </div>
                    <div className="similar-product-price d-flex">
                      <h5>{link.amt}</h5>
                      <del>
                        <h5>{link.delamt}</h5>
                      </del>
                    </div>
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

      {/* Description End */}
    </>
  );
};

export default SingleProduct;
