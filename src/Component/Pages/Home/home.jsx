import React from "react";

// Common
import TopContent from "../../Common/TopContent/topContent";
import Categories from "../../Common/Categories";
import Card from "../../Common/Card/card";
import Footer from "../../Common/Footer/footer";
import About from "../About/about";



// Image
import HomeIMG from "../../asset/img/Home/image1.png";
import Products1 from "../../asset/img/Products/products-1.png";
import Products2 from "../../asset/img/Products/products-2.png";
import Products3 from "../../asset/img/Products/products-3.png";
import HalalImage1 from "../../asset/img/HalalVerified/Halal-Verified-1.png";
import HalalImage2 from "../../asset/img/HalalVerified/Halal-Verified-2.png";
import HalalImage3 from "../../asset/img/HalalVerified/Halal-Verified-3.png";
import HalalImage4 from "../../asset/img/HalalVerified/Halal-Verified-4.png";
import HalalImage5 from "../../asset/img/HalalVerified/Halal-Verified-5.png";



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

  const HalalImg = [
    {
      image: HalalImage1,
      title: "Halal",
      title2: "VERIFIED",
    },
    {
      image: HalalImage2,
      title: "FREE OF",
      title2: "PRESERVATIVES",
    },
    {
      image: HalalImage3,
      title: "DELIVERED",
      title2: "FRESH",
    },
    {
      image: HalalImage4,
      title: "FSSAI",
      title2: "REGISTERED",
    },
    {
      image: HalalImage5,
      title: "FAIR",
      title2: "PRICING",
    },
  ];

  return (
    <>
      {/* Top Content Start */}
      <TopContent
        title=" We Deliver Fresh & Premium Meats Everyday."
        description="Why leave the house? Chicken delivery coming through."
        button="Order Now"
        img={HomeIMG}
      />
      {/* Top Content End */}

      <div className="back-img-main">
        {/* About Start */}
        <About />
        {/* About End */}

        {/* Categories Start */}
        <Categories />
        {/* Categories End */}

        {/* Products Start */}
        <section id="section-padding">
          <div className="container">
            <div className="heading-section mb-5">
              <h3>
                <span>Most Popular</span> Products
              </h3>
            </div>

            <div className="row">
              {CardData.map((link, index) => (
                <>
                  <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                    <Card
                      image={link.image}
                      title={link.title}
                      kilogram={link.kilogram}
                      amount={link.amount}
                      button={link.button}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        {/* Products End */}

        {/* Halal Verified Start */}
        <section id="section-padding">
          <div className="container">
            <div className="heading-section mb-5">
              <h3>
                <span> Why order from</span> SuperChicks?
              </h3>
              <p className="pb-5">
                We deliver halal verified, free of preservative , fssai
                registered, always fresh with fair pricing
              </p>
            </div>
            <div className="d-flex justify-content-between">
              {HalalImg.map((link, index) => (
                <div>
                  <img
                    src={link.image}
                    alt="Loading"
                    className="img-fluid halal-img"
                    key={index}
                  />
                  <div className="text-center pe-3 pt-2 text-uppercase">
                    {link.title}
                  </div>
                  <div className="text-center pe-3 text-uppercase">
                    {link.title2}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Halal Verified End */}

        {/* Customer Start */}
        <section id="section-padding">
          <div className="heading-section mb-5">
            <h3>
              <span>Hear from our </span>
            </h3>
            <h3>Happy Customers</h3>

            {/* This Section Continue Shumaila */}
          </div>
        </section>
        {/* Customer End */}

        {/* Footer Start */}

        <Footer/>

        {/* Footer End  */}
      </div>
    </>
  );
};

export default Home;
