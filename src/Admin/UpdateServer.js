import React, { useContext } from "react";
import { AppContext } from "../App";

const UpdateServer = () => {
  const { HomeBanner, HomeFocus, HomeAboutUs, HomeContent } = useContext(AppContext);
  const handleUpdate=(e)=>{
    e.preventDefault();
    const form = e.target; 
    const BannerTitle = form.BannerTitle.value;
    const BannerDetails = form.BannerDetails.value;
    const BannerImage = form.BannerImage.value;

    const FocusTitle = form.FocusTitle.value; 

    const AboutUsImage = form.AboutUsImage.value;
    const AboutUsImage2 = form.AboutUsImage2.value;
    const AboutUsTitle = form.AboutUsTitle.value;
    const AboutUsTitle2 = form.AboutUsTitle2.value;
    const AboutUsDetails = form.AboutUsDetails.value;
    const AboutUsDetails2 = form.AboutUsDetails2.value;

    const ContentTitle = form.ContentTitle.value;

    console.log(BannerTitle, BannerDetails, BannerImage, FocusTitle, AboutUsImage, AboutUsImage2, AboutUsTitle, AboutUsTitle2, AboutUsDetails, AboutUsDetails2, ContentTitle);
  }

  return (
    <div className="container mx-auto py-10">
      <form className="mt-5" onSubmit={handleUpdate}>
        <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home Banner</p>
          <input name="BannerTitle" className="px-4 py-2" defaultValue={HomeBanner?.BannerTitle}/>
          <textarea name="BannerDetails" className="px-4 py-2 h-24" defaultValue={HomeBanner?.BannerDetails}/>
          <input name="BannerImage" className="px-4 py-2" defaultValue={HomeBanner?.BannerImage}/>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home Focus</p>
          <input name="FocusTitle" className="px-4 py-2" defaultValue={HomeFocus?.FocusTitle}/>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home About Us</p>
          <input name="AboutUsImage" className="px-4 py-2" defaultValue={HomeAboutUs?.AboutUsImage}/>
          <input name="AboutUsTitle" className="px-4 py-2" defaultValue={HomeAboutUs?.AboutUsTitle}/>
          <textarea name="AboutUsDetails" className="px-4 py-2 h-24" defaultValue={HomeAboutUs?.AboutUsDetails}/>
          <input name="AboutUsImage2" className="px-4 py-2" defaultValue={HomeAboutUs?.AboutUsImage2}/>
          <input name="AboutUsTitle2" className="px-4 py-2" defaultValue={HomeAboutUs?.AboutUsTitle2}/>
          <textarea name="AboutUsDetails2" className="px-4 py-2 h-24" defaultValue={HomeAboutUs?.AboutUsDetails2}/>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home Content</p>
          <input name="ContentTitle" className="px-4 py-2" defaultValue={HomeContent?.ContentTitle}/>
          {HomeContent?.ContentImages.map((ci,i) => (
            <input name="ContentImage" key={i} defaultValue={ci.ContentImage} className="px-4 py-2"/>
        ))}
        </div>
        </div>
        <button className="px-4 py-2 rounded bg-green-500 font-bold mt-5 text-white hover:bg-transparent border border-green-500" >Update</button>
      </form>
    </div>
  );
};

export default UpdateServer;
