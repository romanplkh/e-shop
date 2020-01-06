import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import CheckoutPage from "./pages/checkout/checkout";
import ShopPage from "./pages/shop/shoppage";
import Navheader from "./components/nav-header/nav-header";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import Auth from "./pages/auth/auth";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { Footer } from "./components/footer/footer";

const App = ({ dispatch, currentUser }) => {
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Navheader />
      <Switch>
        <ErrorBoundary>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
          />
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps)(App);
