import React, { useContext } from "react";
import { AppContext } from "../App";

const UpdateServer = () => {
  const { HomeBanner, HomeFocus, HomeAboutUs, HomeContent } =
    useContext(AppContext);
  return (
    <div className="container mx-auto py-10">
      <form className="mt-5">
        <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home Banner</p>
          <input className="px-4 py-2" defaultValue={HomeBanner?.BannerTitle}/>
          <textarea className="px-4 py-2 h-24" defaultValue={HomeBanner?.BannerDetails}/>
          <input className="px-4 py-2" defaultValue={HomeBanner?.BannerImage}/>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home Focus</p>
          <input className="px-4 py-2" defaultValue={HomeFocus?.FocusTitle}/>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home About Us</p>
          <input className="px-4 py-2" defaultValue={HomeAboutUs?.AboutUsImage}/>
          <input className="px-4 py-2" defaultValue={HomeAboutUs?.AboutUsTitle}/>
          <textarea className="px-4 py-2 h-24" defaultValue={HomeAboutUs?.AboutUsDetails}/>
          <input className="px-4 py-2" defaultValue={HomeAboutUs?.AboutUsImage2}/>
          <input className="px-4 py-2" defaultValue={HomeAboutUs?.AboutUsTitle2}/>
          <textarea className="px-4 py-2 h-24" defaultValue={HomeAboutUs?.AboutUsDetails2}/>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home Content</p>
          <input className="px-4 py-2" defaultValue={HomeContent?.ContentTitle}/>
          {HomeContent?.ContentImages.map((ci,i) => (
            <input key={i} defaultValue={ci.ContentImage} className="px-4 py-2"/>
        ))}
        </div>
        </div>
        <button className="px-4 py-2 rounded bg-green-500 font-bold mt-5 text-white hover:bg-transparent border border-green-500" >Update</button>
      </form>
    </div>
  );
};

export default UpdateServer;
