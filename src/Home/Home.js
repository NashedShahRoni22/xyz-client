import React from "react";
import HomeAboutUs from "../Components/HomeAboutUs";
import HomeBanner from "../Components/HomeBanner";
import HomeContent from "../Components/HomeContent";
import HomeFocus from "../Components/HomeFocus";
import HeadBar from "../Shared/HeadBar";
import BottomBar from "../Shared/BottomBar";

const Home = () => {
  return (
    <main className="container mx-auto">
      <HeadBar />
      <HomeBanner/>
      <HomeFocus />
      <HomeAboutUs/>
      <HomeContent/>
      <BottomBar/>
    </main>
  );
};

export default Home;
