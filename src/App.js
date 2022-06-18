import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React, { useEffect } from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js"
import Footer from "components/footers/MiniCenteredFooter.js";
import AdminPage from "admin/Admin.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

import Home from "pages/Home.js";
import ComponentRenderer from "ComponentRenderer.js";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPage from 'pages/shop/shop.component';
import SignInAndSignUpPage from 'pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from 'pages/checkout/checkout.component';
import BookingPage from "pages/booking/booking.component";

import { selectCurrentUser } from 'redux/user/user.selectors';
import { checkUserSession } from 'redux/user/user.actions';

function App({ checkUserSession, currentUser }) {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <AnimationRevealPage>
      <Router>
        <Header />

        <Switch>
          <Route path="/components/:type/:subtype/:name">
            <ComponentRenderer />
          </Route>
          <Route path="/components/:type/:name">
            <ComponentRenderer />
          </Route>
          <Route path="/booking">
            <BookingPage/>
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/terms">
            <TermsOfServicePage />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicyPage />
          </Route>
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />

          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/contact">
            <ContactUsPage />
          </Route>
          <Route exact path="/admin" render={() => currentUser ? <AdminPage /> : <Redirect to="/" />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AnimationRevealPage>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);