import React from "react";

// Common
import Button from "../Button/button";
import { NavLink } from "react-router-dom";

const Card = (link) => {
  const { id, title, kilogram, amount, button, image, comingsoon } = link;

  return (
    <>
      <div class="card card-shadow">
        <img src={image} class="card-img-top" alt="Loading" />
        <div class="card-body">
          <div></div>
          <h5 class="card-title fw-bold mb-1">{title}</h5>
          {comingsoon ? (
            <>
              <span class="card-title fw-bold text-color-red">Coming Soon</span>
            </>
          ) : null}

          <div className="card-icon">
            {kilogram ? (
              <>
                <span className="ps-2">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_0_157)">
                      <path
                        d="M14 6.125C14.9665 6.125 15.75 5.3415 15.75 4.375C15.75 3.4085 14.9665 2.625 14 2.625C13.0335 2.625 12.25 3.4085 12.25 4.375C12.25 5.3415 13.0335 6.125 14 6.125Z"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.375 4.375H12.25"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 4.375H23.625"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 6.125V18.375"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.875 14.875C0.875 16.8 2.45 18.375 4.375 18.375C6.3 18.375 7.875 16.8 7.875 14.875H0.875Z"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.375 4.375L0.875 14.875H7.875L4.375 4.375Z"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.125 14.875C20.125 16.8 21.7 18.375 23.625 18.375C25.55 18.375 27.125 16.8 27.125 14.875H20.125Z"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23.625 4.375L20.125 14.875H27.125L23.625 4.375Z"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 0.875V2.625"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 26.25H7L7.4375 24.85C7.7 24.15 8.3125 23.625 9.1 23.625H18.8125C19.6 23.625 20.2125 24.15 20.475 24.85L21 26.25Z"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 23.625H12.25V19.25C12.25 18.725 12.6 18.375 13.125 18.375H14.875C15.4 18.375 15.75 18.725 15.75 19.25V23.625Z"
                        stroke="#DB1516"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_157">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </>
            ) : null}

            <span className="ps-3">{kilogram}</span>
          </div>

          <div className="d-flex justify-content-between align-items-baseline">
            <div className="card-icon d-flex justify-content-between">
              {kilogram ? (
                <>
                  <span className="ps-2">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5385 23.8629C16.2251 23.8458 15.9426 23.6862 15.7643 23.4266L8.22845 12.4054C7.91553 11.9466 8.03387 11.3191 8.49178 11.0054C8.5197 10.9866 8.54595 10.9704 8.57303 10.9554C8.72095 10.8683 8.8972 10.8204 9.07678 10.8204H11.4005C13.3905 10.8204 15.0101 9.09998 15.0101 6.98498C15.0101 6.9204 15.0085 6.85581 15.0055 6.79206H4.47095C3.91553 6.79206 3.46387 6.3404 3.46387 5.78498C3.46387 5.22956 3.91553 4.7779 4.47095 4.7779H14.3501C13.6776 3.7654 12.5755 3.14998 11.4001 3.14998H4.47095C3.91553 3.14998 3.46387 2.69831 3.46387 2.14331C3.46387 1.5879 3.91553 1.13623 4.47095 1.13623H20.5293C21.0847 1.13623 21.5364 1.5879 21.5364 2.14331C21.5364 2.69873 21.0847 3.1504 20.5293 3.1504H15.643C16.0476 3.63456 16.3764 4.18831 16.6072 4.77831H20.5285C21.0835 4.77831 21.5351 5.22998 21.5351 5.78498C21.5351 6.3404 21.0835 6.79206 20.528 6.79206H17.0201C17.0222 6.85623 17.023 6.9204 17.023 6.98498C17.023 10.2104 14.4993 12.8346 11.3993 12.8346H10.9605L17.4264 22.2891C17.7385 22.7475 17.621 23.3741 17.1639 23.6879C16.996 23.8016 16.7993 23.8637 16.5955 23.8637L16.5385 23.8629Z"
                        fill="#DB1516"
                      />
                    </svg>
                  </span>

                  <span className="pe-2">{amount} Amt</span>
                </>
              ) : null}
            </div>
            {button ? (
              <>
                {" "}
                <div>
                  {button === "Order Now" ? (
                    <>
                      <NavLink
                        to="/order"
                        className="text-decoration-none"
                        // onClick={() => handlechange()}
                      >
                        <Button button={button} />
                      </NavLink>
                    </>
                  ) : (
                    <>
                      {/* <NavLink
                        to={`/singleproduct/${pid}`}
                        className="text-decoration-none"
                      >
                        <Button button={button} />
                      </NavLink> */}
                      <NavLink
                        to={`/singleproduct/${id}`}
                        className="text-decoration-none"
                      >
                        <Button button={button} />
                      </NavLink>
                    </>
                  )}
                </div>
              </>
            ) : null}
            {/* <div>
              {button === "Order Now" ? (
                <>
                  <NavLink to="/order" className="text-decoration-none">
                    <Button button={button} />
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to={`/singleproduct/${id}`}
                    className="text-decoration-none"
                  >
                    <Button button={button} />
                  </NavLink>
                </>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
