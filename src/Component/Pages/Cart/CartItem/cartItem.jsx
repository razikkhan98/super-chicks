import React from "react";
import FormatPrice from "../../../Helpers/FormatPrice";
import { useCartContext } from "../../../Context/cartContext";

// Icons
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();



  return (
    <>
      <div className="row ">
        <div className="col-lg-2 text-center my-2">
          <img src={image} className="cart-img rounded ps-3 me-3" alt="Loading" />
        </div>
        <div className="col-lg-2 align-items-center justify-content-center text-center my-2 d-flex">
          {name}
        </div>
        <div className="col-lg-2 text-center justify-content-center my-2 ps-3 fw-bold d-flex align-items-center">
        <FormatPrice price={price}/>
        </div>
        <div className="col-lg-2 text-center justify-content-center my-2 ps-3 fw-bold d-flex align-items-center">
          <CiCircleMinus className="fs-3" onClick={() => setDecrement(id)}/>
          <span> {amount}</span>
          <CiCirclePlus className="fs-3" onClick={() => setIncrement(id)}/>
        </div>
        <div className="col-lg-2 text-center justify-content-center my-2 ps-3 fw-bold d-flex align-items-center">
        <FormatPrice price={price * amount}/>
        </div>
        {/* <div className="fs-3 d-flex justify-content-end  align-items-center  text-color-red pe-5">
          <RiDeleteBin6Line onClick={() => removeItem(id)} />
        </div> */}
        <div className="col-lg-2 text-center justify-content-center my-2 ps-3 fw-bold d-flex align-items-center text-color-red fs-3">
          <RiDeleteBin6Line onClick={() => removeItem(id)} />
        </div>
      </div>
      
    </>
  );
};

export default CartItem;
