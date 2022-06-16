import React from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
//import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from '../../helpers/useAnimatedNavToggler.js';

import logo from '../../images/glowing-flowers.svg';
import { ReactComponent as MenuIcon } from 'feather-icons/dist/icons/menu.svg';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import { selectCurrentUser } from 'redux/user/user.selectors';
import { signOutStart } from 'redux/user/user.actions';

const Header = tw.header`
  flex flex-row justify-center items-center bg-transparent
  max-w-screen-xl flex-nowrap mx-auto sm:bg-transparent md:bg-transparent text-blue-900 z-50
`;

export const NavLinks = tw.div`inline-block justify-evenly`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-indigo-900 will apply the bg-indigo-900 class on hover or focus
 */
export const NavLink = tw.a`
  z-50! text-lg my-2 lg:text-lg lg:ml-1 lg:mr-5 lg:my-0
  font-normal tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-indigo-500 hocus:text-blue-900
`;

export const PrimaryLink = tw(NavLink)`
  z-50! lg:mx-0
  px-8 py-3 rounded bg-indigo-900 text-indigo-100
  hocus:bg-indigo-900 hocus:text-indigo-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`z-50! flex items-center font-bold border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-80 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between m-0 w-screen`;
export const NavToggle = tw.button`
  lg:hidden md:absolute z-20 focus:outline-none hocus:text-blue-900 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-50! fixed top-0 inset-x-0 mx-4 my-8 p-10 border text-center rounded-lg
  text-blue-900 bg-white sm:w-screen`}
  ${NavLinks} {
    ${tw`flex flex-col justify-center items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center z-50!
`;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    roundedHeaderButton = true,
    logoLink,
    links,
    className,
    currentUser,
    hidden,
    emailSignInStart,
    signOutStart,
    collapseBreakpointClass = 'lg',
  }) => {
    /*
     * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
     * This links props should be an array of "NavLinks" components which is exported from this file.
     * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
     * This allows this Header to be multi column.
     * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
     * Left part will be LogoLink, and the right part will be the the NavLinks component you
     * supplied.
     * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
     * You can also choose to directly modify the links here by not passing any links from the parent component and
     * changing the defaultLinks variable below below.
     * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
     */
    const defaultLinks = [
      <NavLinks key={1}>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/shop/ ">Shop</NavLink>
        <NavLink href="/booking">Book</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
        {hidden ? null : <CartDropdown />}
        {currentUser ? (
          <PrimaryLink
            css={roundedHeaderButton && tw`rounded-full`}
            href="/"
            as="div"
            onClick={signOutStart}
          >
            SIGN OUT
          </PrimaryLink>
        ) : (
          <PrimaryLink
            css={roundedHeaderButton && tw`rounded-full`}
            href="/signin"
            as="button"
            onClick={emailSignInStart}
          >
            SIGN IN
          </PrimaryLink>
        )}
        <CartIcon />
        {/* <NavLink href="/login" tw="lg:ml-12!">

        Login
      </NavLink>
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="/#">Sign Up</PrimaryLink> */}
      </NavLinks>,
    ];

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
    const collapseBreakpointCss =
      collapseBreakPointCssMap[collapseBreakpointClass];

    const defaultLogoLink = (
      <LogoLink href="/">
        <img src={logo} alt="logo" />
      </LogoLink>
    );

    logoLink = logoLink || defaultLogoLink;
    links = links || defaultLinks;

    return (
      <Header className={className || 'header-light'}>
        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          {logoLink}
          {links}
        </DesktopNavLinks>

        <MobileNavLinksContainer
          css={collapseBreakpointCss.mobileNavLinksContainer}
        >
          {logoLink}
          <MobileNavLinks
            initial={{ x: '150%', display: 'none' }}
            animate={animation}
            css={collapseBreakpointCss.mobileNavLinks}
          >
            {links}
          </MobileNavLinks>
          <NavToggle
            onClick={toggleNavbar}
            className={showNavLinks ? 'open' : 'closed'}
          >
            {showNavLinks ? (
              <CloseIcon tw="w-6 h-6" />
            ) : (
              <MenuIcon tw="w-6 h-6" />
            )}
          </NavToggle>
        </MobileNavLinksContainer>
      </Header>
    );
  }
);
/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
