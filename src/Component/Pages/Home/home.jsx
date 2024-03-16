import React from "react";

// Common
import TopContent from "../../Common/TopContent/topContent";
import Categories from "../../Common/Categories";
import Card from "../../Common/Card/card";

// Image
import HomeIMG from "../../asset/img/Home/image1.png";
import About from "../About/about";
import Products1 from "../../asset/img/Products/products-1.png";
import Products2 from "../../asset/img/Products/products-2.png";
import Products3 from "../../asset/img/Products/products-3.png";

const Home = () => {
  const CardData = [
    {
      image: Products1,
      title: "Fresh Chicken",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Order Now",
    },
    {
      image: Products2,
      title: "Alive Desi Chicken",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Order Now",
    },
    {
      image: Products3,
      title: "Fresh Mutton",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Order Now",
    },
  ];
  return (
    <>
      <TopContent
        title=" We Deliver Fresh & Premium Meats Everyday."
        description="Why leave the house? Chicken delivery coming through."
        button="Order Now"
        img={HomeIMG}
      />
      <div className="back-img-main">
        <About />
        <Categories />
        <section id="section-padding">
          <div className="container">
            <div className="heading-section mb-5">
              <h3>
                <span className="">Most Popular</span> Products
              </h3>
            </div>

            <div className="row">
              {CardData.map((link, index) => (
                <>
                  <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                    <Card  image={link.image} title={link.title} kilogram={link.kilogram} amount={link.amount} button={link.button}/>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
