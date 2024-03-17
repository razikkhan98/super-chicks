import React from "react";

// Common
import TopContent from "../../Common/TopContent/topContent";
import Card from "../../Common/Card/card";

// Image
import Order1 from "../../asset/img/Order/order-1.png";
import OrderChicken1 from "../../asset/img/Order/Order-Chicken-1.png";
import OrderChicken2 from "../../asset/img/Order/Order-Chicken-2.png";
import OrderChicken3 from "../../asset/img/Order/Order-Chicken-3.png";
import OrderChicken4 from "../../asset/img/Order/Order-Chicken-4.png";
import OrderChicken5 from "../../asset/img/Order/Order-Chicken-5.png";
import OrderChicken6 from "../../asset/img/Products/products-1.png";
import OrderChicken7 from "../../asset/img/Products/products-2.png";
import OrderChicken8 from "../../asset/img/Order/Order-Chicken-6.png";
import Goat from "../../asset/img/Order/Goat.svg";
import Hen from "../../asset/img/Order/Hen.svg";
import Chicken from "../../asset/img/Order/Chicken.svg";
import Footer from "../../Common/Footer/footer";

const OrderNow = () => {
  const OrderData = [
    {
      image: OrderChicken1,
      title: "Chicken mixed with bone",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
    {
      image: OrderChicken2,
      title: "Chicken (Boneless)",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
    {
      image: OrderChicken3,
      title: "Chicken Drumstick",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
    {
      image: OrderChicken4,
      title: "Chicken Wings",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
    {
      image: OrderChicken5,
      title: "Chicken Mince (Keema)",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
    {
      image: OrderChicken6,
      title: "Chicken Breast",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
  ];

  const DesiChicken = [
    {
      image: OrderChicken7,
      title: "Chicken Mince (Keema)",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
    {
      image: OrderChicken8,
      title: "Chicken Breast",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
  ];

  const Mutton = [
    {
      image: OrderChicken3,
      title: "Mutton mixed with bone",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
    {
      image: OrderChicken4,
      title: "Mutton (Boneless)",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
    {
      image: OrderChicken2,
      title: "Mutton Mince (Keema)",
      kilogram: "500gms | 1Kg",
      amount: "Amt",
      button: "Add to Cart",
    },
  ];


  return (
    <>
      {/* Top Content Start */}
      <TopContent
        title="Order raw meat & get it delivered at your door steps."
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

            {/* Mutton End */}

            
          </div>
          
        </section>
        {/* Footer Start  */}

        <Footer />

{/* Footer End */}
      </div>
    </>
  );
};

export default OrderNow;
