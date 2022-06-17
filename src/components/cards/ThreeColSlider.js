import React, { useState } from 'react';
import Slider from 'react-slick';

import tw from 'twin.macro';
import styled from 'styled-components';

import { SectionHeading } from 'components/misc/Headings';

import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons';
import { ReactComponent as PriceIcon } from 'feather-icons/dist/icons/dollar-sign.svg';
import { ReactComponent as LocationIcon } from 'feather-icons/dist/icons/map-pin.svg';
import { ReactComponent as StarIcon } from 'feather-icons/dist/icons/star.svg';
import { ReactComponent as ChevronLeftIcon } from 'feather-icons/dist/icons/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from 'feather-icons/dist/icons/chevron-right.svg';

import ProductData from '../../data/product.data';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl my-20 mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2 bg-indigo-900`}
  svg {
    ${tw`w-6 h-6`}
  }
`;

const PrevButton = tw(ControlButton)`
`;

const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = styled.div(() => [
  `backdrop-filter: blur(12px);`,
  tw`h-full hover:shadow-xl flex! flex-col sm:border-none w-3 sm:rounded-tl-4xl sm:rounded-br-5xl relative outline-none shadow-none`,
]);
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");
  z-index:40;`,
  `background-color:  background: linear-gradient(135deg, #9495fa, #9c6df4 );`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);
const BackgroundImageOverlay = styled.div(() => [
  `background-size: cover;
background-position:center;
background: linear-gradient(145deg, rgba(32,42,68, 1) 10%, rgba(32, 42, 68, 0.9) 84%);

opacity: 1;
border: none;
position: absolute;
z-index: 50;
mix-blend-mode: screen;
`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6 text-blue-900 text-lg`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm font-normal text-blue-900 leading-loose mt-2 sm:mt-4`;
const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-indigo-200 text-blue-900`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-blue-900`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6 bg-indigo-900 hover:bg-indigo-700`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Change this according to your needs */
  const cards = [...ProductData];

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Browse Our Selection</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((product, index) => (
            <Card key={index}>
              <BackgroundImageOverlay />
              <CardImage imageSrc={product.imageSrc} />

              <TextInfo>
                <TitleReviewContainer>
                  <Title>{product.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{product.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{product.dimensions}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{product.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{product.description}</Description>
              </TextInfo>
              <PrimaryButton>Order Now</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
