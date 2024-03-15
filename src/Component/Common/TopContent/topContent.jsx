import React from "react";



const TopContent = ({ title, description, button, img }) => {
  return (
    <>
      {/* <!--Top_content--> */}
      <div className="top-back-ground">
        <div className="container">
          <div className="top-content">
            <div className="row">
              <div className="col-lg-5 col-sm-7">
                <div className="home-heading">
                  <h2 className="fw-medium">{title}</h2>
                  <p>{description}</p>
                  <a href="/" className="order-now-button">
                    {button}
                    
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-sm-5">
                <img src={img} alt="Loading" className="back-ground-ch" />
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
