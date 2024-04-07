import React from "react";
import FormatPrice from "../../../Helpers/FormatPrice";
import { useCartContext } from "../../../Context/cartContext";

// Icons
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

// Image
import ChickenMixBone1 from "../../../asset/img/Description/Chicken mix with bones/chicken-mix-bones-1.jpg"
import ChickenBone1 from "../../../asset/img/Description/Chicken Boneless/chicken-bonless-1.jpg"
import ChickenDurmtick61 from "../../../asset/img/Description/Chicken drumstick 6 pieces/chicken-drumstick-6-1.jpg"
import ChickenDurmtick21 from "../../../asset/img/Description/Chicken drumstick 2 pieces/chicken-durmstick-2.jpg"
import ChickenWings1 from "../../../asset/img/Description/Chicken wings/chicken-wings-1.jpg"
import Chickenkeema1 from "../../../asset/img/Description/Chicken keema/chickenkeema-1.jpg"
import ChickenBreast1 from "../../../asset/img/Description/Chicken Breast/chicken-breast-1.jpg"

const CartItem = ({ id,name, image, price, amount }) => {
  const { removeItem, setDecrement, setIncrement ,singleImage} = useCartContext();

  const images = [
    {
      id: "ch-721",
      title: "Chicken mixed with bone",
      imgs: [
        {
          imgs1: ChickenMixBone1,
        },
       
      ],
    },
    {
      id: "ch-722",
      title: "Chicken (Boneless)",
      imgs: [
        {
          imgs1: ChickenBone1,
        },
       
      ],
    },
    {
      id: "ch-723",
      title: "Chicken Drumstick of 6 Piece",
      imgs: [
        {
          imgs1: ChickenDurmtick61,
        },
      ],
    },
    {
      id: "ch-724",
      title: "Chicken Drumstick of 2 Piece",
      imgs: [
        {
          imgs1: ChickenDurmtick21,
        },
       
      ],

    },
    {
      id: "ch-725",
      title: "Chicken Wings",
      imgs: [
        {
          imgs1: ChickenWings1,
        },
       
      ],
    },
    {
      id: "ch-726",
      title: "Chicken Mince (Keema)",
      imgs: [
        {
          imgs1: Chickenkeema1,
        },
       
      ],
    },
    {
      id: "ch-727",
      title: "Chicken Breast",
      imgs: [
        {
          imgs1: ChickenBreast1,
        },
       
      ],
    },
  ];

  const img = images.filter((item) => item.id === singleImage)[0];
  const { imgs } = img;
  const { imgs1 } = imgs[0];



  return (
    <>
      <div className="row ">
        <div className="col-lg-2 text-center my-2">
          <img src={imgs1} className="cart-img rounded ps-3 me-3" alt="Loading" />
        </div>
        <div className="col-lg-2 align-items-center justify-content-center text-center my-2 d-flex">
          {name}
        </div>
        <div className="col-lg-2 text-center justify-content-center my-2 ps-3 fw-bold d-flex align-items-center">
        <FormatPrice price={price} />
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
