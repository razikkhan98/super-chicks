import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

// Common
import Footer from "../../Common/Footer/footer";
import MyImage from "../../Common/MyImage/myImage";
import { useCartContext } from "../../Context/cartContext";
import NavbarGround from "../../Common/Navbar/navbground";

//React icons

import { BsHandbag } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";

// Image
import product1 from "../../asset/img/Order/Order-Chicken-3.png";
import product2 from "../../asset/img/Order/Order-Chicken-4.png";
import product3 from "../../asset/img/Products/products-1.png";
import product4 from "../../asset/img/Order/Order-Chicken-5.png";

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
  const [singleProduct, setSingleProduct] = useState([]);
  const [amount, setAmount] = useState(1);

  const { id: alias, name, price, description, stock, image } = singleProduct;

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < 10 ? setAmount(amount + 1) : setAmount(10);
  };

  //   Api Function single Product Id

  const api = "https://api.pujakaitem.com/api/products";

  const getSingleProduct = async (id) => {
    const response = await axios.get(`${api}/${id}`);
    return response.data;
  };

  useEffect(() => {
    getSingleProduct(id).then((data) => {
      setSingleProduct(data);
    });
  }, [id]);

  return (
    <>
      {/* Description Start */}
      <NavbarGround />
      <div className="back-img-main">
        <section id="section-padding">
          <div class="container">
            <div class="row">
              <div className="col-md-6">
                {/* <div
                  id="carouselExampleDark"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <div className="button-img ">
                      {image.map((link, index) => (
                        <img
                          src={link.image}
                          alt={"Slide" + (index + 1)}
                          key={index}
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to={index}
                          className={index === 0 ? "active" : ""}
                          aria-current={index === 0 ? "true" : "false"}
                          aria-label={"Slide" + (index + 1)}
                        />
                      ))}
                      ;
                    </div>
                  </div>

                  <div className="carousel-inner">
                    {image.map((link, index) => (
                      <div
                        className={
                          "carousel-item " + (index === 0 ? "active" : "")
                        }
                        key={index}
                      >
                        <div className="description-carousel-img">
                          <img
                            src={link.image}
                            className="d-block w-100"
                            alt={"Slide " + (index + 1)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                  >
                    <IoChevronBackCircleOutline
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                  >
                    <IoChevronForwardCircleOutline
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div> */}
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
                {stock > 0 && (
                  <div className="d-flex justify-content-end">
                    {/* <a className="add-to-cart-button mt-4" href="/">
                   <BsHandbag /> Add to Cart
                 </a> */}
                    <NavLink
                      to="/cart"
                      className="add-to-cart-button mt-4"
                      onClick={() => addToCart(id, amount, singleProduct)}
                    >
                      <BsHandbag /> Add to Cart
                    </NavLink>
                  </div>
                )}
              </div>

              <div class="col-lg-6">
                <div className="description-heading">
                  <h1>{name}</h1>
                </div>
                <div className="product-price d-flex">
                  <h1 className="price-1">Rs {price}</h1>
                  <h3 className="price-2">
                    <del> Rs400</del>
                  </h3>
                  <h1 className="price-off"> 50%OFF</h1>
                </div>
                <div className="hr"></div>
                <div className="Product-quantity d-flex">
                  Quantity:
                  <div className="product-quantity-btn d-flex">
                    {/* <button className="btn">-</button> */}
                    <button className="btn" onClick={() => setDecrease()}>
                      <FaMinus />
                    </button>
                    <div>{amount}</div>
                    {/* <button className="btn">+</button> */}
                    <button className="btn" onClick={() => setIncrease()}>
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <h4 className="price-heading">Raw Chicken Mince with Bone</h4>
                <p className="description">{description}</p>
                <div className="product-offer">Offers</div>
                <div className="product-offer-card d-flex mt-3 mb-3">
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
                {stock > 0 && (
                  <div className="d-flex justify-content-start">
                    <a className="sign-up-button mt-4" href="/">
                      Buy Now
                    </a>
                  </div>
                )}
              </div>
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

      {/* Description End */}
    </>
  );
};

export default SingleProduct;
