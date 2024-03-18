import React from "react";
import TopContent from "../../Common/TopContent/topContent.jsx";
import Sign from "../../asset/img/Sign/Sign.png";
import Footer from "../../Common/Footer/footer.jsx";

const SignLogin = () => {
  return (
    <>
    {/* Top Content Start */}
      <TopContent
        title="Sign in / Sign up"
        title2="to your Account"
        title3=""
        description="Please Sign In into your SuperChicks Account"
        button=""
        img={Sign}
      />
      {/* Top Content End */}

      

      <div className="back-img-main">
        <section id="section-padding">
          <div className="container px-5">
            <div className="fs-4 fw-bold">Sign in /Sign up to your Account</div>
            <div className="my-4">
              <div className="my-3">
                <label htmlFor="">Phone Number or Email ID</label>
              </div>
              <div>
                <input type="text" name="" className="w-100" />
              </div>
            </div>
            <div className="my-4">
              <div className="my-3">
                <label htmlFor="">Password</label>
              </div>
              <div>
                <input type="password" name="" className="w-100" />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <a className="sign-up-button" href="/">
                Sign In / Sign Up
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center w-50 m-auto">
              <hr className="w-25" />

              <span className="mx-2">or</span>

              <hr className="w-25" />
            </div>
            <div className="d-flex justify-content-center fw-bold">Login In with</div>
            <div className="d-flex justify-content-center py-3">
              <div className="px-2">
                <a href="/">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_0_2607)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M39.7323 22.0059H25.3169C25.3169 23.505 25.3169 26.5031 25.3077 28.0022H33.6611C33.341 29.5014 32.206 31.6006 30.6025 32.6575C30.6025 32.6575 30.5994 32.6663 30.5963 32.6648C28.4644 34.0725 25.6508 34.392 23.5617 33.9722C20.2872 33.3216 17.6957 30.9467 16.6435 27.9304C16.6496 27.9259 16.6543 27.8844 16.6588 27.8814C16.0003 26.0104 16.0003 23.505 16.6588 22.0059H16.6573C17.5058 19.2504 20.1754 16.7365 23.4545 16.0484C26.0919 15.4892 29.0678 16.0945 31.2565 18.1423C31.5475 17.8575 35.2845 14.2087 35.5648 13.9119C28.0876 7.14019 16.1151 9.52228 11.6352 18.2669H11.6337C11.6337 18.2669 11.6352 18.2672 11.626 18.2837C9.40982 22.5788 9.50171 27.6398 11.6413 31.7295C11.6352 31.734 11.6306 31.7367 11.626 31.7412C13.565 35.5041 17.0938 38.3899 21.3455 39.4888C25.8622 40.6731 31.6102 39.8637 35.4607 36.3811L35.4653 36.3855C38.7276 33.4472 40.7585 28.4418 39.7323 22.0059Z"
                        fill="#DB1516"
                      />
                    </g>
                    <circle
                      cx="25"
                      cy="25"
                      r="24"
                      stroke="#DB1516"
                      stroke-width="2"
                    />
                    <defs>
                      <clipPath id="clip0_0_2607">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(10 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="px-2">
                <a href="/">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24"
                      stroke="#3B5998"
                      stroke-width="2"
                    />
                    <path
                      d="M31.25 12.5H27.5C25.8424 12.5 24.2527 13.1585 23.0806 14.3306C21.9085 15.5027 21.25 17.0924 21.25 18.75V22.5H17.5V27.5H21.25V37.5H26.25V27.5H30L31.25 22.5H26.25V18.75C26.25 18.4185 26.3817 18.1005 26.6161 17.8661C26.8505 17.6317 27.1685 17.5 27.5 17.5H31.25V12.5Z"
                      fill="#3B5998"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer Start */}
      <Footer/>
      {/* Footer End */}
    </>
  );
};

export default SignLogin;
