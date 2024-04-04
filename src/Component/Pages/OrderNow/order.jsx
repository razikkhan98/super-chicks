import React, { useEffect, useState } from "react";

// Common
import TopContent from "../../Common/TopContent/topContent";
import Card from "../../Common/Cart/card";
import Footer from "../../Common/Footer/footer";
import WhatApp from "../../Common/whatappicon/whatapp";

// Image
import Order1 from "../../asset/img/Home/home-1.png";
import OrderChicken1 from "../../asset/Superchicks images/Chicken Product image/Chiken Mixed With Bones.jpeg";
import OrderChicken2 from "../../asset/Superchicks images/Chicken Product image/Chiken Boneless.jpeg";
import OrderChicken3 from "../../asset/Superchicks images/Chicken Product image/Chiken drumstik pack of 6.jpg";
import OrderChicken4 from "../../asset/Superchicks images/Chicken Product image/Chiken WIngs.jpeg";
import OrderChicken5 from "../../asset/Superchicks images/Chicken Product image/chicken Mince [keema].jpeg";
import OrderChicken6 from "../../asset/Superchicks images/Chicken Product image/Chicken Breast.jpg";
import OrderChicken7 from "../../asset/img/Products/products-2.png";
import OrderChicken8 from "../../asset/img/Order/Order-Chicken-6.png";
import OrderChicken9 from "../../asset/Superchicks images/Chicken Product image/Chiken drumstik pack of 2.jpg";
import Goat from "../../asset/img/Order/Goat.svg";
import Hen from "../../asset/img/Order/Hen.svg";
import Chicken from "../../asset/img/Order/Chicken.svg";
import MuttonProducts from "../../asset/img/Order/Order-Mutton-1.jpg";
import MuttonProducts2 from "../../asset/img/Order/Order-Mutton-2.jpg";
import MuttonProducts3 from "../../asset/img/Order/Order-Mutton-3.jpg";



const OrderNow = () => {
  const OrderData = [
    {
      id: "ch-721",
      image: OrderChicken1,
      title: "Chicken mixed with bone",
      kilogram: "500gms | Serve 4",
      amount: "148 Rs",
      del:"185 Rs",
      button: "Add to Cart",
    },
    {
      id: "ch-722",
      image: OrderChicken2,
      title: "Chicken (Boneless)",
      kilogram: "500gms | Serve 4",
      amount: "319 Rs",
      del:"399 Rs",
      button: "Add to Cart",
    },
    {
      id: "ch-723",
      image: OrderChicken3,
      title: "Chicken Drumstick of 6 Piece",
      kilogram: "500gms | Serve 2 - 3",
      amount: "311 Rs",
      del:"389 Rs",
      button: "Add to Cart",
    },
    {
      id: "ch-724",
      image: OrderChicken9,
      title: "Chicken Drumstick of 2 Piece",
      kilogram: "500gms | Serve 1 - 2",
      amount: "119 Rs",
      del:"149 Rs",
      button: "Add to Cart",
    },
    {
      id: "ch-725",
      image: OrderChicken4,
      title: "Chicken Wings",
      kilogram: "500gms | Serve 4",
      amount: "175 Rs",
      del:"219 Rs",
      button: "Add to Cart",
    },
    {
      id: "ch-726",
      image: OrderChicken5,
      title: "Chicken Mince (Keema)",
      kilogram: "500gms | Serve 5 - 6",
      amount: "311 Rs",
      del:"389 Rs",
      button: "Add to Cart",
    },
    {
     id: "ch-727",
      image: OrderChicken6,
      title: "Chicken Breast",
      kilogram: "500gms | Serve 4",
      amount: "271 Rs",
      del:"339 Rs",
      button: "Add to Cart",
    },
  ];


  const DesiChicken = [
    {
      id: 7,
      image: OrderChicken7,
      title: "Alive Desi Chicken",
      // kilogram: "500gms | 1Kg",
      // amount: "Amt",
      // button: "Add to Cart",
      comingsoon: "Coming Soon"
 
    },
    {
      id: 9,
      image: OrderChicken8,
      title: "Alive Kadaknath Chicken",
      // kilogram: "500gms | 1Kg",
      // amount: "Amt",
      // button: "Add to Cart",
      comingsoon: "Coming Soon"

    },
  ];

  const Mutton = [
    {
      id: 13,
      image: MuttonProducts2,
      title: "Mutton mixed with bone",
      // kilogram: "500gms | 1Kg",
      // amount: "Amt",
      // button: "Add to Cart",
      comingsoon: "Coming Soon"

    },
    {
      id: 43,
      image: MuttonProducts,
      title: "Mutton (Boneless)",
      // kilogram: "500gms | 1Kg",
      // amount: "Amt",
      // button: "Add to Cart",
      comingsoon: "Coming Soon"

    },
    {
      id: 73,
      image: MuttonProducts3,
      title: "Mutton Mince (Keema)",
      // kilogram: "500gms | 1Kg",
      // amount: "Amt",
      // button: "Add to Cart",
      comingsoon: "Coming Soon"

    },
  ];


  


  return (
    <>
      {/* Top Content Start */}
      <TopContent
        title="Order raw meat & "
        title2="get it delivered at"
        title3="your door steps."
        description="Absolutely fresh Chicken 100% Natural & Chemical free"
        button=""
        img={Order1}
      />
      {/* Top Content End */}

      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-4">
            <div className="heading-section mb-5">
              <h3>
                <span>Order Fresh Chicken, Mutton & Fish from </span>
              </h3>
              <h3>SuperChicks</h3>
            </div>
            {/* Chicken Start */}
            <div className="order-category-chicken">
              <span className="text-uppercase fw-bolder fs-6">Chicken </span>
              <span>
                <img src={Chicken} alt="Loading" className="img-fluid w-100" />
              </span>
            </div>
            <div className="row">
              {OrderData.map((link, index) => (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 my-2 pb-5"
                    key={index}
                  >
                    <Card
                      // image={link.image}
                      // title={link.title}
                      // kilogram={link.kilogram}
                      // amount={link.amount}
                      // button={link.button}
                      key={link.id}
                      {...link}
                    />
                  </div>
                </>
              ))}
            </div>
            {/* Chicken End */}

            {/* Alive Desi Chicken Start */}
            <div className="order-category-desi-chicken">
              <span className="text-uppercase fw-bolder fs-6">
                Alive Desi Chicken
              </span>
              <span>
                <img src={Hen} alt="Loading" className="img-fluid w-100" />
              </span>
            </div>
            <div className="row">
              {DesiChicken.map((link, index) => (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 my-2 pb-5"
                    key={index}
                  >
                    <Card
                      // image={link.image}
                      // title={link.title}
                      // kilogram={link.kilogram}
                      // amount={link.amount}
                      // button={link.button}
                      key={link.id}
                      {...link}
                    />
                  </div>
                </>
              ))}
            </div>
            {/* Alive Desi Chicken End */}

            {/* Mutton Start */}

            <div className="order-category-chicken">
              <span className="text-uppercase fw-bolder fs-6">Mutton </span>
              <span>
                <img src={Goat} alt="Loading" className="img-fluid w-100" />
              </span>
            </div>
            <div className="row">
              {Mutton.map((link, index) => (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 my-2 pb-5"
                    key={index}
                  >
                    <Card
                      // image={link.image}
                      // title={link.title}
                      // kilogram={link.kilogram}
                      // amount={link.amount}
                      // button={link.button}
                      key={link.id}
                      {...link}
                    />
                  </div>
                </>
              ))}
            </div>

            {/* Mutton End */}
          </div>
          <WhatApp/>
        </section>
        {/* Footer Start  */}

        <Footer />

        {/* Footer End */}
      </div>
    </>
  );
};

export default OrderNow;
