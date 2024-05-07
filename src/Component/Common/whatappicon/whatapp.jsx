import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatApp = () => {
  return (
    <>
      <div>
        <ReactWhatsapp
          className="whatsapp-sect"
          number="+91 9244276667"
          message="Hello"
        >
          <IoLogoWhatsapp className="text-white btn--shockwave is-active" />
        </ReactWhatsapp>
      </div>
    </>
  );
};

export default WhatApp;
