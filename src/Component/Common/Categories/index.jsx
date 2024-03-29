import React from "react";

// Image
import Logo1 from "../../asset/img/Logo/logo-1.png";
import Logo2 from "../../asset/img/Logo/logo-2.png";
import Logo3 from "../../asset/img/Logo/logo-3.png";
import Logo4 from "../../asset/img/Logo/fish-4.png";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const Categories = [
    {
      heading: "Fresh Chicken",
      image: Logo1,
    },
    {
      heading: "Alive Desi Chicken",
      image: Logo2,
    },
    {
      heading: "Mutton Meat",
      image: Logo3,
      description: "Coming Soon",
    },
    {
      heading: "Fish",
      image: Logo4,
      description: "Coming Soon",

    },
  ];
  return (
    <section id="section-padding">
      <div className="container">
        <div className="heading-section">
          <h3> Explore Categories</h3>
          <p className="pb-5">We deliver fresh Raw Meat at your doorstep</p>
        </div>
        <div className="row">
          {Categories.map((link, index) => (
            <>
              <NavLink
                className="col-lg-3 col-md-6 col-sm-12 py-2 position-relative text-decoration-none"
                to="/order"
              >
                <div key={index}>
                  <div className="d-flex justify-content-center">
                    <div className="circle">
                      <img
                        src={link.image}
                        alt="Loading"
                        className="img-fluid"
                      />
                      <div className="fs-5 fw-bold position-absolute text-color-black">
                        {link.title}
                      </div>
                    </div>
                  </div>
                  <div className="fresh-chicken">
                    <div className="heading text-color-black">{link.heading}</div>
                    <div className="description text-color-red fw-bold">{link.description}</div>
                  </div>
                </div>
              </NavLink>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
