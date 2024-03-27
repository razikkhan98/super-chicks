import React from "react";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const MyImage = ({ imgs = [{ url: "" }] }) => {

  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <div className="button-img ">
            {imgs.map((curElm, index) => (
              <img
                src={curElm.url}
                alt={"Slide" + (index + 1)}
                key={index}
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={"Slide" + (index + 1)}
              />
            ))}
            ;
          </div>
        </div>

        <div className="carousel-inner">
          {imgs.map((link, index) => (
            <div
              className={"carousel-item " + (index === 0 ? "active" : "")}
              key={index}
            >
              <div className="description-carousel-img">
                <img
                  src={link.url}
                  className="d-block w-100"
                  alt={"Slide " + (index + 1)}
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <IoChevronBackCircleOutline
            className="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <IoChevronForwardCircleOutline
            className="carousel-control-next-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default MyImage;
