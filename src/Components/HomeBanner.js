import React, { useEffect, useState } from "react";

const HomeBanner = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://react-landing-page-server.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  });

  return (
    <section className="md:mx-20 text-white h-[80vh] flex items-center justify-center gap-8">
      <div className="text-center md:text-start md:w-1/2">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500">
          {data?.BannerTitle}
        </h2>
        <p className="text-lg md:text-2xl text-gray-400 mt-5">
          {data?.BannerDetails}
        </p>
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <button className="px-4 py-2 font-semibold bg-sky-500 border border-sky-500 hover:bg-transparent  rounded shadow-lg">
            Learn More
          </button>
          <button className="px-4 py-2 font-semibold bg-gray-600 border border-gray-600 hover:bg-transparent rounded shadow-lg">
            Get Started
          </button>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img src={data?.BannerImage} alt="" className="w-[600px]" />
      </div>
    </section>
  );
};

export default HomeBanner;
