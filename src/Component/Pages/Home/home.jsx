import React from "react";

// Common
import TopContent from "../../Common/TopContent/topContent";
import Categories from "../../Common/Categories";
import Card from "../../Common/Cart/card";
import Footer from "../../Common/Footer/footer";
import About from "../../Common/About/about";

// Icons
import { FaStar } from "react-icons/fa";

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
import team1 from "../../asset/img/costumer/costumer-1.png";
import team2 from "../../asset/img/costumer/costumer-2.png";
import team3 from "../../asset/img/costumer/costumer-3.png";
import team4 from "../../asset/img/costumer/costumer-4.png";

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
      comingsoon: "Coming Soon"
      // kilogram: "500gms | 1Kg",
      // amount: "Amt",
      // button: "Order Now",
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

  const CostumerImgfirst = [
    {
      name: "ABC",
      description:
        "There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority.",
      img: team1,
    },
    {
      name: "ABC",
      description:
        "There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority.",
      img: team2,
    },
  ];

  const CostumerImgsecond = [
    {
      name: "ABC",
      description1:
        "There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority.",

      img1: team3,
    },
    {
      name: "ABC",
      description1:
        "There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority.",
      img1: team4,
    },
  ];

  return (
    <>
      {/* Top Content Start */}
      <TopContent
        title="We Deliver"
        title2="Fresh & Premium"
        title3="Meats Everyday."
        description="Why leave the house? Chicken delivery coming through."
        button="Categories"
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
            <div className="halal-img-grid">
              {HalalImg.map((link, index) => (
                <div className="my-2">
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
          <div className="container">
            <div className="heading-section mb-5">
              <h3>
                <span>Hear from our </span>
              </h3>
              <h3>Happy Customers</h3>

              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="card-slide">
                      <div className="costumer-wrapper">
                        {CostumerImgfirst.map((link, index) => (
                          <>
                            <div className="costumer-single position-relative costumer-card">
                              <div className="costumer-content d-flex align-items-center">
                                <div className="costumer-author-img">
                                  <img src={link.img} alt="Loading" />
                                </div>
                                <div className="costumer-author-info">
                                  <h4>{link.name}</h4>
                                  <div className="costumer-rate">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                  </div>
                                </div>
                              </div>
                              <div className="costumer-quote">
                                <p>{link.description}</p>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card-slide">
                      <div className="costumer-wrapper">
                        {CostumerImgsecond.map((link, index) => (
                          <>
                            <div className="costumer-single position-relative costumer-card">
                              <div className="costumer-content d-flex align-items-center">
                                <div className="costumer-author-img">
                                  <img src={link.img1} alt="Loading" />
                                </div>
                                <div className="costumer-author-info">
                                  <h4>{link.name}</h4>
                                  <div className="costumer-rate">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                  </div>
                                </div>
                              </div>
                              <div className="costumer-quote">
                                <p>{link.description1}</p>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* This Section Continue Shumaila */}
            </div>
          </div>
        </section>

        {/* Customer End */}

        {/* Footer Start */}

        <Footer />

        {/* Footer End  */}
      </div>
    </>
  );
};

export default Home;
