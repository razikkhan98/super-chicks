import React from "react";
// Common
import TopContent from "../../Common/TopContent/topContent";
// Image
import HomeIMG from "../../asset/img/Home/image1.png";
import About from "../About/about";
import Categories from "../../Common/Categories";

const Home = () => {
  return (
    <>
      <TopContent
        title=" We Deliver Fresh & Premium Meats Everyday."
        description="Why leave the house? Chicken delivery coming through."
        button="Order Now"
        img={HomeIMG}
      />
      <div className="back-img-main">
        <About />
        <Categories />
      </div>
    </>
  );
};

export default Home;
