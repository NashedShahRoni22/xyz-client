import React from "react";
import Image from "../imgs/mordern-creative.jpg";
import Image2 from "../imgs/banner-img.jpg";

const HomeAboutUs = () => {
  return (
    <div className="md:flex">
      <div className="relative md:w-1/2">
        <img src={Image} alt="" className="" />
        <div className="absolute top-0 h-full w-full bg-black/80 flex flex-col justify-center p-8">
          <h2 className="font-extrabold  text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to bg-purple-500">
            Who are we?
          </h2>
          <p className="text-white mt-3">
            There’s no shame in admitting how your business strategy — or even
            your way of thinking — has changed since you began. In fact, these
            evolutions can improve the story you tell to website visitors.
            <br />
            About pages are perfect spaces to talk about where you started, how
            you’ve grown, and the ideals that have helped your organization
            mature. Use these moments to show people that you're always ready to
            change and adapt to the needs of your industry.
          </p>
        </div>
      </div>
      <div className="relative md:w-1/2">
        <img src={Image2} alt="" className="" />
        <div className="absolute top-0 h-full w-full bg-black/80 flex flex-col justify-center p-8">
          <h2 className="font-extrabold  text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to bg-purple-500">
            Our Mission & Vision
          </h2>
          <p className="text-white mt-3">
            There’s no shame in admitting how your business strategy — or even
            your way of thinking — has changed since you began. In fact, these
            evolutions can improve the story you tell to website visitors.
            <br />
            About pages are perfect spaces to talk about where you started, how
            you’ve grown, and the ideals that have helped your organization
            mature. Use these moments to show people that you're always ready to
            change and adapt to the needs of your industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
