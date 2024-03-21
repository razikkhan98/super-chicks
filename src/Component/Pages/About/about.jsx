import React from "react";
import AboutImg from "../../asset/img/About/about-img.png";
import Footer from "../../Common/Footer/footer";
import NavbarGround from "../../Common/Navbar/navbground";

const About = () => {
  return (
    <>
      <NavbarGround/>
      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="about-content">
                  <h3 className="fw-bold">
                    About <span>SuperChicks</span>
                  </h3>
                  <p className="fs-5 text-color-black">
                    Delivering fresh Chicken,fresh Mutton,and fresh Fish to your
                    doorstep
                  </p>
                </div>
                <div className="text-color-gray text-about">
                  SuperChicks supplies provides you fresh and hygienic meat
                  products at very reasonable price. Forget the old days of
                  purchasing meat from stinky and unhygienic shops. Now just
                  order it online and get it delivered to your door steps.
                  SuperChicks supplies provides you fresh and hygienic meat
                  products at very reasonable price. Forget the old days of
                  purchasing meat from stinky and unhygienic shops. Now just
                  order it online and get it delivered to your door steps. Our
                  online store allows you to conveniently purchase raw, 100%
                  fresh food, including chicken, freshwater fish and mutton that
                  is never frozen. As a leading online company, SuperChicks is
                  committed to offering the finest quality and freshness in
                  chicken, fish and mutton. Our products are sourced from fresh
                  slaught and processed just a few hours before being delivered
                  to your doorstep, ensuring hygiene and quality at every
                  step.Our products come with 100% quality satisfaction promise
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center my-4 ">
                <div className="about-page-img text-center">
                  <img src={AboutImg} alt="Loading" />
                </div>
              </div>
              <div className="col-lg-12 mt-4">
                <p className="fs-5 text-color-black mb-2">
                  How does your order reach your doorstep?
                </p>
                <p className="fs-6 text-color-gray ">
                  When you place an order with us, we guarantee a one-hour
                  delivery. Our team ensures that the products are fresh,
                  hygienic, and processed shortly before being handed over to
                  our delivery executive.
                </p>
              </div>
              <div className="col-lg-12 mt-4">
                <p className="fs-5 text-color-black mb-2">
                  The benefits of ordering from AL MURGH:
                </p>
                <p className="fs-6 text-color-gray ">
                  We offer Cash on Delivery (COD) and as well as online mode of
                  payment to give customers the freedom to inspect the quality
                  and freshness of our products. We prioritize delivering only
                  fresh products and take prompt action to rectify any issues.
                </p>
                <p className="fs-6 text-color-gray mt-5">
                  If you are looking for the best experience and highest quality
                  meat and fish online, SuperChicks is the right choice for you.
                  Our products are tender and live-slaughtered just before
                  delivery, ensuring the utmost freshness and quality. We are
                  here to deliver on our promises and provide you with an
                  excellent culinary experience.
                </p>
              </div>
              <div className="col-lg-12">
                <p className="fs-6 text-color-red mt-5">
                  Choose SuperChicks for your meat and fish needs, and we
                  guarantee your satisfaction with every order.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer Start*/}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default About;
