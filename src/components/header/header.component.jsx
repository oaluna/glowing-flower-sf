import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "components/cart-icon/cart-icon.component";
import CartDropdown from "components/cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "redux/cart/cart.selectors";
import { selectCurrentUser } from "redux/user/user.selectors";
import { signOutStart } from "redux/user/user.actions";

import {
  HeaderContainer,
  LogoContainer,
  LogoText,
  HeaderTitle,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

//import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden, emailSignInStart, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer>
      <OptionLink to="/">{/* <Logo className='logo' /> */}</OptionLink>
    </LogoContainer>
    <HeaderTitle>
      <LogoText>Glowing Flowers, Plants, & Gifts</LogoText>
    </HeaderTitle>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/booking">BOOK</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin" onClick={emailSignInStart}>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
