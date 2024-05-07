import React from "react";
import FormatPrice from "../../../Helpers/FormatPrice";
import { useCartContext } from "../../../Context/cartContext";

// Icons
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

// Image
import ChickenMixBone4 from "../../../asset/Superchicks images/Chicken Product image/Chiken Mixed With Bones.jpeg";
import ChickenBone4 from "../../../asset/Superchicks images/Chicken Product image/Chiken Boneless.jpeg";
import ChickenDurmtick64 from "../../../asset/Superchicks images/Chicken Product image/Chiken drumstik pack of 6.jpg";
import ChickenDurmtick24 from "../../../asset/Superchicks images/Chicken Product image/Chiken drumstik pack of 2.jpg";
import ChickenWings4 from "../../../asset/Superchicks images/Chicken Product image/Chiken WIngs.jpeg";
import Chickenkeema4 from "../../../asset/Superchicks images/Chicken Product image/chicken Mince [keema].jpeg";
import ChickenBreast4 from "../../../asset/Superchicks images/Chicken Product image/Chicken Breast.jpg";

const CartItem = ({ id,name, image, price, amount }) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();

  const imageData = {
    "ch-721": ChickenMixBone4,
    "ch-722": ChickenBone4,
    "ch-723": ChickenDurmtick64,
    "ch-724": ChickenDurmtick24,
    "ch-725": ChickenWings4,
    "ch-726": Chickenkeema4,
    "ch-727": ChickenBreast4
  };
  const prdimg = imageData[id];



  return (
    <>
      <div className="row ">
        <div className="col-lg-2 text-center my-2">
          <img src={prdimg} className="cart-img rounded ps-3 me-3" alt="Loading" />
        </div>
        <div className="col-lg-2 align-items-center justify-content-center text-center my-2 d-flex">
          {name}
        </div>
        <div className="col-lg-2 text-center justify-content-center my-2 ps-3 fw-bold d-flex align-items-center">
        <FormatPrice price={price} />
        </div>
        <div className="col-lg-2 text-center justify-content-center my-2 ps-3 fw-bold d-flex align-items-center">
          <CiCircleMinus className="fs-3 cursor-pointer" onClick={() => setDecrement(id)}/>
          <span> {amount}</span>
          <CiCirclePlus className="fs-3 cursor-pointer" onClick={() => setIncrement(id)}/>
        </div>
        <div className="col-lg-2 text-center justify-content-center my-2 ps-3 fw-bold d-flex align-items-center">
        <FormatPrice price={price * amount}/>
        </div>
        {/* <div className="fs-3 d-flex justify-content-end  align-items-center  text-color-red pe-5">
          <RiDeleteBin6Line onClick={() => removeItem(id)} />
        </div> */}
        <div className="col-lg-2 text-center justify-content-center my-2 ps-3 fw-bold d-flex align-items-center text-color-red fs-3 cursor-pointer">
          <RiDeleteBin6Line onClick={() => removeItem(id)} />
        </div>
      </div>
      
    </>
  );
};

export default CartItem;
