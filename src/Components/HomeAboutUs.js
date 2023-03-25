import React, { useEffect, useState } from "react";
const HomeAboutUs = () => {
  const [AboutData, setAboutData] = useState("");
  useEffect(()=>{
    fetch("https://react-landing-page-server.vercel.app/aboutData")
    .then(res => res.json())
    .then(data => setAboutData(data[0]))
  })
  return (
    <div className="md:flex py-10">
      <div className="relative md:w-1/2">
        <img src={AboutData?.AboutUsImage} alt="" className="" />
        <div className="absolute top-0 h-full w-full bg-black/80 flex flex-col justify-center p-8">
          <h2 className="font-extrabold  text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to bg-purple-500">
            {AboutData?.AboutUsTitle}
          </h2>
          <p className="text-white mt-3 text-justify">
            {AboutData?.AboutUsDetails}
          </p>
        </div>
      </div>
      <div className="relative md:w-1/2">
        <img src={AboutData?.AboutUsImage2} alt="" className="" />
        <div className="absolute top-0 h-full w-full bg-black/80 flex flex-col justify-center p-8">
          <h2 className="font-extrabold  text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to bg-purple-500">
            {AboutData?.AboutUsTitle2}
          </h2>
          <p className="text-white mt-3 text-justify">
            {AboutData?.AboutUsDetails2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
