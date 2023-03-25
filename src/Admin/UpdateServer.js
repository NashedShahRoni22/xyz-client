import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const UpdateServer = () => {
  const navigate = useNavigate();

  const [BannerData, setBannerData] = useState("");
  const [AboutData, setAboutData] = useState("");

  //banner data loading
  useEffect(() => {
    fetch("https://react-landing-page-server.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setBannerData(data[0]));
  });

  //about us data loading
  useEffect(() => {
    fetch("https://react-landing-page-server.vercel.app/aboutData")
      .then((res) => res.json())
      .then((data) => setAboutData(data[0]));
  });
  
  const homeBannerUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const BannerTitle = form.BannerTitle.value;
    const BannerDetails = form.BannerDetails.value;
    const BannerImage = form.BannerImage.value;

    const UpdatedData = {
      BannerTitle,
      BannerDetails,
      BannerImage,
    };
    fetch(
      `https://react-landing-page-server.vercel.app/data/${BannerData.ID}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdatedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Home Banner Updated!");
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const aboutUsUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const AboutUsImage = form.AboutUsImage.value;
    const AboutUsImage2 = form.AboutUsImage2.value;
    const AboutUsTitle = form.AboutUsTitle.value;
    const AboutUsTitle2 = form.AboutUsTitle2.value;
    const AboutUsDetails = form.AboutUsDetails.value;
    const AboutUsDetails2 = form.AboutUsDetails2.value;

    const UpdatedData = {
      AboutUsImage,
      AboutUsImage2,
      AboutUsTitle,
      AboutUsTitle2,
      AboutUsDetails,
      AboutUsDetails2,
    };
    fetch(
      `https://react-landing-page-server.vercel.app/aboutData/${AboutData.ID}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdatedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("About Us Updated!");
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container mx-auto py-10">
      <form className="mt-5" onSubmit={homeBannerUpdate}>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home Banner</p>
          <input
            type="text"
            name="BannerTitle"
            className="px-4 py-2"
            defaultValue={BannerData?.BannerTitle}
          />
          <textarea
            type="text"
            name="BannerDetails"
            className="px-4 py-2 h-24"
            defaultValue={BannerData?.BannerDetails}
          />
          <input
            type="text"
            name="BannerImage"
            className="px-4 py-2"
            defaultValue={BannerData?.BannerImage}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-green-500 font-bold mt-5 text-white hover:bg-transparent border border-green-500"
        >
          Update
        </button>
      </form>
      <form className="mt-5" onSubmit={aboutUsUpdate}>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-green-500 text-xl font-bold">Home About Us</p>
          <input
            name="AboutUsImage"
            className="px-4 py-2"
            defaultValue={AboutData?.AboutUsImage}
          />
          <input
            name="AboutUsTitle"
            className="px-4 py-2"
            defaultValue={AboutData?.AboutUsTitle}
          />
          <textarea
            name="AboutUsDetails"
            className="px-4 py-2 h-24"
            defaultValue={AboutData?.AboutUsDetails}
          />
          <input
            name="AboutUsImage2"
            className="px-4 py-2"
            defaultValue={AboutData?.AboutUsImage2}
          />
          <input
            name="AboutUsTitle2"
            className="px-4 py-2"
            defaultValue={AboutData?.AboutUsTitle2}
          />
          <textarea
            name="AboutUsDetails2"
            className="px-4 py-2 h-24"
            defaultValue={AboutData?.AboutUsDetails2}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-green-500 font-bold mt-5 text-white hover:bg-transparent border border-green-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateServer;
