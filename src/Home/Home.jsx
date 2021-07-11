import React from "react";
import HomeBanner from "./HomeBanner";
import Groundtruth from "./Groundtruth";
import Works from "./Works";
import WorkData from "./WorkData";
import Bar from "./Bar";
import BarData from "./BarData";
import BarCard from "./BarCard";
import ForVideo from "./ForVideo";
import SliderData from "./SliderData";
import MatterPort from "./MatterPort";
import ContactUs from "./ContactUs";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Progress from "./Progress";
const Home = () => {
  return (
    <>
    <Header />
    <HomeBanner />
    <Groundtruth />
    <Works 
    works="How It Works"
    />
    <WorkData />
      <Bar fee="Waterfall Fee Structure" />
      <Progress />
      <BarData
        data="Drag the slider around based on what you think it will cost to repair the property.
      Move forward based on the estimated fee structure below."
      />
      <BarCard />
      <ForVideo />
      <SliderData slidetext="Immaculate. Impartial. [ESX]" />
      <MatterPort matter="MATTERPORT TRUEPLAN™ FOR XACTIMATE™" />
      <ContactUs contactus="Contact Us" />
      <Footer />
    </>
  );
};

export default Home;
