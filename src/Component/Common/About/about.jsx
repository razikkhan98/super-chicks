import React from "react";
// Image
import Logo from "../../asset/img/Logo/logo.png";
import About1 from "../../asset/img/About/about-1.png";
import About2 from "../../asset/img/About/about-2.png";
import About3 from "../../asset/img/About/about-3.png";
import About4 from "../../asset/img/About/about-4.png";

const About = () => {
  return (
    <section className="" id="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="py-3">
              <img src={Logo} alt="Logo" className="about-img" />
            </div>
            <div className="about-content">
              <h3>
                About
                <span> SuperChicks</span>
              </h3>
              <p>
                SuperChicks provides you fresh and hygienic meat products at
                very reasonable price. Forget the old days of purchasing meat
                from stinky and unhygienic shops. Now just order it online and
                get it delivered to your door steps.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6 offset-sm-1 align-self-center mt-4 ">
                  <span className="hover-effect mb-2">
                    <img
                      className="img-fluid w-100"
                      src={About4}
                      alt="Loading"
                    />
                  </span>
                </div>
                <div className="col-sm-5 align-self-end mb-2">
                  <span className="hover-effect">
                    <img
                      className="img-fluid w-100"
                      src={About3}
                      alt="Loading"
                    />
                  </span>
                </div>
                <div className="col-sm-6 offset-sm-1 align-self-start mb-2">
                  <span className="hover-effect">
                    <img
                      className="img-fluid w-100"
                      src={About2}
                      alt="Loading"
                    />
                  </span>
                </div>
                <div className="col-sm-5 mb-2">
                <span className="hover-effect">
                    <img
                      className="img-fluid w-100"
                      src={About1}
                      alt="Loading"
                    />
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
