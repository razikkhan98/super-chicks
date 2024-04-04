import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Similar = (link) => {
  const { id } = link;

  return (
    <div>
      <NavLink to={`/singleproduct/${id}`} className="text-decoration-none">
        <div className="similar-prooduct-img">
          <img src={link.img} alt="Loading" />
        </div>

        <div className="similar-product-name mt-4 text-color-black">
          <h4> {link.title}</h4>
        </div>
        <div className="similar-product-price text-color-black">
          <span>{link.amt}</span>
          <del>{link.del}</del>
        </div>
      </NavLink>
    </div>
  );
};

export default Similar;
