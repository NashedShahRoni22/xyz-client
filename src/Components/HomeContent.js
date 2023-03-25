import React from "react";

const HomeContent = () => {
  const ContentImages =
  [
    { "ContentImage": "https://i.ibb.co/qFxqSWv/Pest-Control-Services.jpg" },
    { "ContentImage": "https://i.ibb.co/r2SjGq5/Plumbing-Sanitary-Services.jpg"},
    { "ContentImage": "https://i.ibb.co/qFxqSWv/Pest-Control-Services.jpg" },
    { "ContentImage": "https://i.ibb.co/yks0DGG/Home-Cleaning-Services.jpg" }
  ]
  return (
    <div className="py-10">
      <h2 className="text-center font-extrabold  text-4xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to bg-purple-500">
        {/* {HomeContent?.ContentTitle} */}
        Checkout our activities
      </h2>

      <div className="py-10 grid place-items-center md:grid-cols-4 gap-4">
        {ContentImages.map((ci,i) => (
          <div key={i} className="relative group">
            <img src={ci.ContentImage} alt="" className="rounded" />
            <div className="group-hover:opacity-100 opacity-0 absolute top-0 h-full w-full bg-black/60 flex flex-col justify-center items-center">
              <p className="text-white text-3xl font-bold absolute bottom-5 left-5">
                Services Name
              </p>
              <button className="px-4 py-2 bg-sky-500 border border-sky-500 hover:bg-transparent text-white rounded">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
