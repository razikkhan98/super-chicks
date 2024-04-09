import React from "react";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import ChickenMixBone1 from "../../asset/img/Description/Chicken mix with bones/chicken-mix-bones-1.jpg";
import ChickenMixBone2 from "../../asset/img/Description/Chicken mix with bones/chicken-mix-bones-2.jpg";
import ChickenMixBone3 from "../../asset/img/Description/Chicken mix with bones/chicken-mix-bones-3.jpg";
import ChickenMixBone4 from "../../asset/Superchicks images/Chicken Product image/Chiken Mixed With Bones.jpeg";

import ChickenBone1 from "../../asset/img/Description/Chicken Boneless/chicken-bonless-1.jpg";
import ChickenBone2 from "../../asset/img/Description/Chicken Boneless/chicken-bonless-2.jpg";
import ChickenBone3 from "../../asset/img/Description/Chicken Boneless/chicken-bonless-3.jpg";
import ChickenBone4 from "../../asset/Superchicks images/Chicken Product image/Chiken Boneless.jpeg";

import ChickenDurmtick21 from "../../asset/img/Description/Chicken drumstick 2 pieces/chicken-durmstick-1.jpg";
import ChickenDurmtick22 from "../../asset/img/Description/Chicken drumstick 2 pieces/chicken-durmstick-2.jpg";
import ChickenDurmtick23 from "../../asset/img/Description/Chicken drumstick 2 pieces/chicken-durmstick-3.jpg";
import ChickenDurmtick24 from "../../asset/Superchicks images/Chicken Product image/Chiken drumstik pack of 2.jpg";

import ChickenDurmtick61 from "../../asset/img/Description/Chicken drumstick 6 pieces/chicken-drumstick-6-1.jpg";
import ChickenDurmtick62 from "../../asset/img/Description/Chicken drumstick 6 pieces/chicken-drumstick-6-2.jpg";
import ChickenDurmtick63 from "../../asset/img/Description/Chicken drumstick 6 pieces/chicken-drumstick-6-3.jpg";
import ChickenDurmtick64 from "../../asset/Superchicks images/Chicken Product image/Chiken drumstik pack of 6.jpg";

import ChickenWings1 from "../../asset/img/Description/Chicken wings/chicken-wings-1.jpg";
import ChickenWings2 from "../../asset/img/Description/Chicken wings/chicken-wings-2.jpg";
import ChickenWings3 from "../../asset/img/Description/Chicken wings/chicken-wings-3.jpg";
import ChickenWings4 from "../../asset/Superchicks images/Chicken Product image/Chiken WIngs.jpeg";

import Chickenkeema1 from "../../asset/img/Description/Chicken keema/chickenkeema-1.jpg";
import Chickenkeema2 from "../../asset/img/Description/Chicken keema/chickenkeema-2.jpg";
import Chickenkeema3 from "../../asset/img/Description/Chicken keema/chickenkeema-3.jpg";
import Chickenkeema4 from "../../asset/Superchicks images/Chicken Product image/chicken Mince [keema].jpeg";

import ChickenBreast1 from "../../asset/img/Description/Chicken Breast/chicken-breast-1.jpg";
import ChickenBreast2 from "../../asset/img/Description/Chicken Breast/chicken-breast-2.jpg";
import ChickenBreast3 from "../../asset/img/Description/Chicken Breast/chicken-breast-3.jpg";
import ChickenBreast4 from "../../asset/Superchicks images/Chicken Product image/Chicken Breast.jpg";

import { useParams } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";

const MyImage = () => {
  const { setSingleImage } = useCartContext();

  const image = [
    {
      id: "ch-721",
      title: "Chicken mixed with bone",
      imgs: [
        {
          imgs1: ChickenMixBone1,
        },
        {
          imgs1: ChickenMixBone2,
        },
        {
          imgs1: ChickenMixBone3,
        },
        {
          imgs1: ChickenMixBone4,
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
        {
          imgs1: ChickenBone2,
        },
        {
          imgs1: ChickenBone3,
        },
        {
          imgs1: ChickenBone4,
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
        {
          imgs1: ChickenDurmtick62,
        },
        {
          imgs1: ChickenDurmtick63,
        },
        {
          imgs1: ChickenDurmtick64,
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
        {
          imgs1: ChickenDurmtick22,
        },
        {
          imgs1: ChickenDurmtick23,
        },
        {
          imgs1: ChickenDurmtick24,
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
        {
          imgs1: ChickenWings2,
        },
        {
          imgs1: ChickenWings3,
        },
        {
          imgs1: ChickenWings4,
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
        {
          imgs1: Chickenkeema2,
        },
        {
          imgs1: Chickenkeema3,
        },
        {
          imgs1: Chickenkeema4,
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
        {
          imgs1: ChickenBreast2,
        },
        {
          imgs1: ChickenBreast3,
        },
        {
          imgs1: ChickenBreast4,
        },
      ],
    },
  ];

  const { id } = useParams();
  const img = image.filter((item) => item.id === id)[0];
  setSingleImage(img.id);

  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <div className="button-img ">
            {img.imgs.map((curElm, index) => (
              <img
                src={curElm.imgs1}
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
          {img.imgs.map((link, index) => (
            <div
              className={"carousel-item " + (index === 0 ? "active" : "")}
              key={index}
            >
              <div className="description-carousel-img">
                <img
                  src={link.imgs1}
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
      </div>
    </>
  );
};

export default MyImage;
