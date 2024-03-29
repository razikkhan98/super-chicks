import React from "react";
import FormatPrice from "../../Helpers/FormatPrice";
import { Button } from "react-bootstrap";

// Common
import Footer from "../../Common/Footer/footer";
import NavbarGround from "../../../Component/Common/Navbar/navbground";
import CartItem from "../Cart/CartItem/cartItem";



// Image
import EmptyCart from "../../asset/img/Order/cart.png"



import { useCartContext } from "../../Context/cartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, total_item,total_price ,shipping_fee ,setTotalCartPrice } = useCartContext();

  const total_cart_price = total_price +shipping_fee
  setTotalCartPrice(total_cart_price)


  let saltlength = cart.length;

  return (
    <>
      <NavbarGround />

      <div className="back-img-main">
        <section id="section-padding">
          {saltlength !== 0 ? (
            <div className="container">
              <div className="row pe-4">
                <div className="col-lg-12">
                  <h1 className="fw-bold text-color-red mb-5">Your Cart</h1>
                  <hr className="product-detail-hr"/>
                  <div className="row product-detail-head">
                    <div className="col-lg-4 ps-3 fw-bold d-flex justify-content-center">
                      Product
                    </div>
                    <div className="col-lg-2 ps-3 fw-bold text-center">Price</div>
                    <div className="col-lg-2 ps-3 fw-bold text-center">Quantity</div>
                    <div className="col-lg-2 pe-5 fw-bold text-center">Total</div>
                    <div  className="col-lg-2 pe-5 fw-bold text-center">Remove</div>
                  </div>
                  <hr />
                  {cart.map((curElem) => {
                    return <CartItem key={curElem.id} {...curElem} />;
                  })}

                  <hr />
                  <div className="row">
                    <div className="col-lg-8 fw-bold ps-5">Items Total</div>
                    <div className="col-lg-4 pe-5 fw-bold text-end">
                      {total_item}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-8 fw-bold ps-5">Shipping Charge</div>
                    <div className="col-lg-4 pe-5 fw-bold text-end text-color-red">
                    <FormatPrice price={shipping_fee}/>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-8 fw-bold ps-5">Subtotal</div>
                    <div className="col-lg-4 pe-5 fw-bold text-end"><FormatPrice price={total_cart_price}/></div>
                  </div>
                </div>
              </div>
              <NavLink to='/orderPayment' className='text-decoration-none'>
              <div className="d-flex justify-content-end">
                <Button variant=" btn-danger text-light bg-danger px-5 mt-5">
                  Proceed To Checkout
                </Button>
              </div>
              </NavLink>
             
            </div>
          ) : (
            <>
            <div>
                <div>
                  <h3 className="shopping-empty">- : Your Basket is Empty : -</h3>
                </div>
                <div className="shopping-empt-icon">
                  <h5>
                    {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                    <img src={EmptyCart}  alt="Loading" className="rounded mx-auto d-block w-75" />

                  </h5>
                </div>
              </div></>
          )}
        </section>
      </div>

      {/* Footer Start */}
      <Footer />
      {/* Footer End  */}
    </>
  );
};

export default Cart;
