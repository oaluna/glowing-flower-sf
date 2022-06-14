import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
//eslint-disable-next-line
import { css } from 'styled-components/macro';

import ReactModalAdapter from '../../helpers/ReactModalAdapter.js';
//import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

//import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';
import { ReactComponent as SvgDecoratorBlob1 } from '../../images/svg-decorator-blob-1.svg';
import { ReactComponent as SvgDecoratorBlob2 } from '../../images/dot-pattern.svg';
import video from '../../images/video.mp4';
import DesignIllustration from '../../images/design-illustration.svg';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left z-50`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-bold relative! text-6xl md:text-5xl leading-snug max-w-3xl z-50 mt-10 text-indigo-900`;
const Paragraph = tw.p`my-5 lg:my-8 sm:text-lg lg:text-base font-normal text-indigo-800 max-w-lg mx-auto relative lg:mx-0 z-50`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-normal px-8 lg:px-10 py-3 rounded bg-indigo-900 text-indigo-100 hocus:bg-indigo-700 focus:shadow-outline focus:outline-none transition duration-300`;
// const WatchVideoButton = styled.button`
//   ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-indigo-900 focus:outline-none`}
//   .playIcon {
//     ${tw`stroke-1 w-12 h-12`}
//   }
//   .playText {
//     ${tw`ml-2 font-medium`}
//   }
// `;

const IllustrationContainer = tw.div`flex justify-center sm:justify-start md:justify-end items-center relative max-w-3xl lg:max-w-none sm:pt-0`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-indigo-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-pink-900 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-indigo-500`;

export default ({
  heading = 'Artisanal, affordable Floral Arrangements Located at the Heart of San Francisco',
  description = 'Freshly cut floral arrangements, specially made to make every occasion unforgettable.',

  primaryButtonUrl = `/shop`,
  primaryButtonText = `Shop Now`,
  imageSrc = DesignIllustration,
  imageCss = null,
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <PrimaryButton as="a" href={primaryButtonUrl}>
                {primaryButtonText}
              </PrimaryButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <h1
              style={{
                display: 'flex',
                zIndex: 0,
                position: 'fixed',
                textAlign: 'left',
                left: '45rem',
                color: 'darkred',
                transform: 'scale(3)',
                opacity: 0.25,

              }}
            >
              COMING SOON
            </h1>
            <IllustrationContainer>
              <video autoplay="true" loop="true" muted="true">
                <source
                  style={{ zIndex: 0 }}
                  src={video}
                  type="video/mp4"
                ></source>
              </video>
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            {/* <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" /> */}
          </div>
        </StyledModal>
      </Container>
    </>
  );
};
