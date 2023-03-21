import React from "react";
import BannerImg from "../imgs/banner-image.png";

const HomeBanner = () => {
  return (
    <section className="md:mx-20 text-white h-[100vh] flex items-center gap-8">
      <div className="text-center md:text-start md:w-1/2">
        <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500">
          Where the world builds software
        </h2>
        <p className="text-lg md:text-2xl text-gray-400 mt-5">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <button className="px-4 py-2 font-semibold bg-sky-500 border border-sky-500 hover:bg-transparent  rounded shadow-lg" >Learn More</button>
            <button className="px-4 py-2 font-semibold bg-gray-600 border border-gray-600 hover:bg-transparent rounded shadow-lg" >Get Started</button>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img src={BannerImg} alt="bannerImg" className="w-[600px]"/>
      </div>
    </section>
  );
};

export default HomeBanner;
