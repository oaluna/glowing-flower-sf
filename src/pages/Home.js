import React from "react";
//import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import HomePage from "pages/homepage/homepage.component";
import AboutUs from "./AboutUs";
import MenuItemHeader from "components/menu-item/menu-item-header.component";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/cards/ThreeColSlider.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
//import FAQ from "components/faqs/SimpleWithSideImage.js";
//import Footer from "components/footers/MiniCenteredFooter.js";

const Home = () => (
  <>
  <Hero/>
  <MainFeature />
  <MenuItemHeader />
  <HomePage />
  <AboutUs/>
  <Testimonial />
  </>
)
export default Home;
