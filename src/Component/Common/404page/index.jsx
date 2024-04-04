import React from "react";
// import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const page404 = () => {
  return (
    <>
      <section className="error-pg">
        <div class="error__wrapper">
          <h1>
            4 <img src="https://c.tenor.com/Nl45qRGQk_0AAAAi/ghost-white.gif" alt="Loading" />
            4
          </h1>
          <p class="frown-it" data-splitting>
            ERROR
          </p>

          <NavLink to="/">Back to home</NavLink>
      
        </div>
      </section>
    </>
  );
};

export default page404;
