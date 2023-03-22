import React, { useContext } from "react";
import Image from "../imgs/mordern-creative.jpg";
import Image2 from "../imgs/banner-img.jpg";
import { AppContext } from "../App";

const HomeAboutUs = () => {
  const { HomeAboutUs } = useContext(AppContext);
  return (
    <div className="md:flex">
      <div className="relative md:w-1/2">
        <img src={Image} alt="" className="" />
        <div className="absolute top-0 h-full w-full bg-black/80 flex flex-col justify-center p-8">
          <h2 className="font-extrabold  text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to bg-purple-500">
            {HomeAboutUs?.AboutUsTitle}
          </h2>
          <p className="text-white mt-3 text-justify">
            {HomeAboutUs?.AboutUsDetails}
          </p>
        </div>
      </div>
      <div className="relative md:w-1/2">
        <img src={Image2} alt="" className="" />
        <div className="absolute top-0 h-full w-full bg-black/80 flex flex-col justify-center p-8">
          <h2 className="font-extrabold  text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to bg-purple-500">
            {HomeAboutUs?.AboutUsTitle2}
          </h2>
          <p className="text-white mt-3 text-justify">
            {HomeAboutUs?.AboutUsDetails2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
