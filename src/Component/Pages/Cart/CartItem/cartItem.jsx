import React from "react";
import FormatPrice from "../../../Helpers/FormatPrice";
// import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../../Context/cartContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem , setDecrement, setIncrement } = useCartContext();

  
  // const setDecrease = () => {
  //   // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrease = () => {
  //   // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <figure>
            <img src={image} alt={id} width={100} height={100} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          {/* <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div> */}
        </div>
        {/* price   */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price} />
          </p>
        </div>
        {/* Quantity  */}
        <div className="Product-quantity d-flex">
          <div className="product-quantity-btn d-flex">
            {/* <button className="btn">-</button> */}
            <button className="btn" onClick={() => setDecrement(id)}>
              <FaMinus />
            </button>
            <div>{amount}</div>
            {/* <button className="btn">+</button> */}
            <button className="btn" onClick={() => setIncrement(id)}>
              <FaPlus />
            </button>
          </div>
        </div>
        {/* <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      /> */}
        {/* //Subtotal */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price * amount} />
          </p>
        </div>
        <div>
          <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
