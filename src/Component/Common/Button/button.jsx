import React from "react";

const Button = ({ button }) => {
  return (
    <>
      <a href="/" className="order-now-button fs-6">
        {button}
      </a>
    </>
  );
};

export default Button;
