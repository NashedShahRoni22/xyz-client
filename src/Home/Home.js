import React from "react";
import HomeAboutUs from "../Components/HomeAboutUs";
import HomeBanner from "../Components/HomeBanner";
import HomeContent from "../Components/HomeContent";
import HomeFocus from "../Components/HomeFocus";
import HeadBar from "../Shared/HeadBar";

const Home = () => {
  return (
    <main className="container mx-auto">
      <HeadBar />
      <HomeBanner />
      <HomeFocus />
      <HomeAboutUs/>
      <HomeContent/>
    </main>
  );
};

export default Home;
