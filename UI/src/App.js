import React, { Component, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import CheckoutPage from "./pages/checkout/checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage";
import Navheader from "./components/nav-header/nav-header";
import Auth from "./pages/auth/auth";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ dispatch, currentUser }) => {
  useEffect(() => {
    dispatch(checkUserSession());
  }, [checkUserSession]);

  return (
    <div>
      <Navheader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps)(App);
