import React from "react";

const Button = ({ button }) => {
  return (
    <>
      <a href="/" className="order-now-button btn">
        {button}
      </a>
    </>
  );
};

export default Button;
