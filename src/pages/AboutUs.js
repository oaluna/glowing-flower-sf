import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; // eslint-disable-line
import { css } from "styled-components/macro"; // eslint-disable-line
// import Header from "components/headers/light.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import logo from "images/glowing-flower.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <MainFeature1
        subheading={<Subheading>
        <img src={logo} alt="logo" />
        </Subheading>}
        heading="We are an artisanal flower shop located at one of San Francisco's most historic neighborhoods."
        buttonRounded={false}
        primaryButtonText="Shop Now"
        imageSrc="https://images.pexels.com/photos/931166/pexels-photo-931166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to provide affordable, elegant floral arrangements for every occasion."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.pexels.com/photos/947914/pexels-photo-947914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We promise the following things with every order:"
        description="We aim to spread the joy that floristry gives us as far and wide as we can. We aim to share our joy with other floristry enthusiasts and to provide arrangements that are not only of excellent quality, but are hard to find elsewhere."
        cards= {[
          {
            imageSrc: SupportIconImage,
            title: "Quality and Love in Every Arrangement",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: ShieldIconImage,
          title: "A Smile With Every Order",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
        ]}
        linkText=""
      />
    </AnimationRevealPage>
  );
};
