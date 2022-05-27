import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
//import Header from "components/headers/light.js";
//import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-indigo-500`;
const Phone = tw.span`text-sm mt-0 block text-indigo-500`;

export default () => {
  return (
    <AnimationRevealPage>
   
      <ContactUsForm />
      <ContactDetails
        cards={[
         
        {
          title: "Address: ",
          description: (<Address>
                  <AddressLine>424 Jones Street</AddressLine>
                  <AddressLine>San Francisco, CA</AddressLine>
                </Address>
          )
        },
        { title: "Email: ",
        description: (<> <Email>glowingflower@gmail.com</Email></>
                )},
                {
                title: "Phone: ",
                description: (
                  <><Phone>+1 (415) 961 - 9846</Phone></>
                )
                }
        ]}
      />
     
    </AnimationRevealPage>
  );
};
