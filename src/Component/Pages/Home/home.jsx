import React from "react";
// Common
import TopContent from "../../Common/TopContent/topContent";
// Image
import HomeIMG from "../../asset/img/Home/image1.png";
import About from "../About/about";


const Home = () => {
  return (
    <>
    <TopContent title=' We Deliver Fresh & Premium Meats Everyday.' description='Why leave the house? Chicken delivery coming through.' button='Order Now' img={HomeIMG}/>
    <About/>

     
    </>
  );
};

export default Home;
