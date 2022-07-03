import { css } from '@emotion/css';
import styled, { keyframes } from 'styled-components';

const heroCSS = css`
  height: 70vh;
`;

const fadeInAnimation = keyframes`
from {
  opacity: 0;
  margin-left: 40vw;
 }
to {
  opacity: 1;
float: none;
transition: 3s ease-in;
 }
`

const headerHeroImgCSS = css`
  height: 70vh;
  width: 100%;
  object-fit: cover;
  backdrop-filter: screen;
  opacity: 0.75;
  margin-top: 10vh;
  z-index: 0;
`;

const HeroTextCSS = styled.h1`
 font-family: Archivo, serif;
  font-size: 36px;
  width: 60%;
  padding-top: 25%;
  padding-left: 15%;
  color: white;
  font-weight: 700;
  position: absolute;
  opacity: 1;
  z-index: 5;
  animation: ${fadeInAnimation} 3s ease-in;
  @media screen and (min-width: 900px) {
    font-size: 65px;
    padding-top: 20%;
  }

`;

function Hero() {
  return (
    <div className={heroCSS}>
    <HeroTextCSS>
      Artistic and Affordable Arrangements for your Home, here at the heart of San Francisco.
    </HeroTextCSS>
      <video
        className={headerHeroImgCSS}
        autoplay={'true'}
        loop={'true'}
        muted={'true'}
        playback={'0.5'}
      >
        <source
          src="https://player.vimeo.com/external/470085081.hd.mp4?s=8e56b4eb8acc843a3545846a32ec1cceea44454d&profile_id=172&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Hero;
