import React from "react";
import { useCartContext } from "../../Context/cartContext";
import CartItem from "./CartItem/cartItem";

const Cart = () => {
  const { cart } = useCartContext();
  // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>SubTotal</div>
      </div>
      <hr />
      <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
    </>
  );
};

export default Cart;
