import React from "react";
import Button from "../Button/button";
import Navbar from "../Navbar/navbar";

const TopContent = ({ title,title2,title3, description, button, img }) => {
  return (
    <>
      {/* <!--Top_content--> */}
      <div className="top-back-ground">
        <Navbar/>
        <div className="container px-5">
          <div className="top-content">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="home-heading ms-5">
                  <h2 className="fw-medium fw-bold">{title}</h2>
                  <h2 className="fw-medium fw-bold">{title2}</h2>
                  <h2 className="fw-medium fw-bold">{title3}</h2>

                  <p>{description}</p>
                  {button.length === 0 ? null : <Button button={button} />}
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 text-end">
                <img
                  src={img}
                 
                  alt="Loading"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Top_content--> */}
    </>
  );
};

export default TopContent;
