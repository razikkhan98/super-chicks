import React from "react";
import { useCartContext } from "../../Context/cartContext";
import CartItem from "./CartItem/cartItem";
import FormatPrice from "../../Helpers/FormatPrice";

const Cart = () => {
  const { cart , total_price , shipping_fee } = useCartContext();
  // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);

  let saltlength = cart.length;

  return (
    <>
      {saltlength !== 0 ? (
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
          
          <div>
            Subtotal : 
            <span><FormatPrice price={total_price}/></span>
          </div>
          
          <div>
            Order Total : 

            <span><FormatPrice price={shipping_fee + total_price}/></span>
          </div>


          <div>
          Shipping Fee :
          <span>{shipping_fee}</span>
          </div>
        
        </>
      ) : (
        <>No Cart in Item</>
      )}
    </>
  );
};

export default Cart;
