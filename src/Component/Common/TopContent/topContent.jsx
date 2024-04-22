import React from "react";
import Button from "../Button/button";
import Navbar from "../Navbar/navbar";
import { NavLink } from "react-router-dom";

const TopContent = ({ title,title2,title3, description, button, img }) => {
  
  return (
    <>
      {/* <!--Top_content--> */}
      <div className="top-back-ground">
        <Navbar/>
        <div className="container px-5 header-content">
          <div className="top-content">
            <div className="row home-heading">
              <div className="col-lg-6 col-sm-12">
                <div className="title pt-5 d-block">
                  <h2 className="fs-1 fw-medium fw-bold">{title}</h2>
                  <h2 className="fs-1 fw-medium fw-bold">{title2}</h2>
                  <h2 className="fw-1 fw-medium fw-bold">{title3}</h2>

                  <p className="mt-4">{description}</p>
                  <NavLink to='/order' className='text-decoration-none'>
                  {button.length === 0 ? null : <Button button={button} />}
                </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 text-end py-3">
                <img
                  src={img}
                 
                  alt="Loading"
                  className="img-fluid header-img w-100"
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
