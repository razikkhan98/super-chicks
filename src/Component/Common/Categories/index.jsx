import React from "react";
import Logo1 from "../../asset/img/Logo/logo-1.png";
import Logo2 from "../../asset/img/Logo/logo-2.png";
import Logo3 from "../../asset/img/Logo/logo-3.png";

const Categories = () => {
  const Categories = [
    {
      heading: "Fresh Chicken",
      description:
        "Lorem ipsum dolor sit abet consectetur adipisicing elis. Nescient, incident!",
      image: Logo1,
    },
    {
      heading: "Alive Desi Chicken",
      description:
        "Lorem ipsum dolor sit abet consectetur adipisicing elis. Nescient, incident!",
      image: Logo2,
    },
    {
      heading: "Mutton Meat",
      description:
        "Lorem ipsum dolor sit abet consectetur adipisicing elis. Nescient, incident!",
      image: Logo3,
    },
  ];
  return (
    <section id="section-padding">
      <div className="container">
        <div className="heading-categories">
          <h3> Explore Categories</h3>
          <p className="pb-5">We deliver fresh Raw Meat at your doorstep</p>
        </div>
        <div className="row">
          {Categories.map((link, index) => (
            <>
              <div className="col-lg-4 col-md-6 col-sm-12 py-2" key={index}>
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <img src={link.image} alt="Loading" />
                  </div>
                </div>
                <div className="fresh-chicken">
                  <div className="heading">{link.heading}</div>
                  <div className="description">{link.description}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
