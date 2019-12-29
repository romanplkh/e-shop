import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import CheckoutPage from "./pages/checkout/checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage";
import Navheader from "./components/nav-header/nav-header";
import Auth from "./pages/auth/auth";
import { firebaseAuth, addUserProfile } from "./firebase/firebase.helpers";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  firebaseAuthSubscription = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    //Set observer ref
    this.firebaseAuthSubscription = firebaseAuth.onAuthStateChanged(
      async user => {
        if (user) {
          //TRY TO ADD USER PROFILE TO DB
          const userRef = await addUserProfile(user);
          //IF USER PROFILE ALREADY EXISTS --> POPULATE STATE WITH THIS DATA
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data() //GET REST OF ELEMENTS AND TRANSFORM SNAPSHOT TO DATA
            });
          });
        } else {
          setCurrentUser(user); //WILL BE NULL
        }
      },
      err => console.log(err)
    );
  }

  componentWillUnmount() {
    //Close subscription
    this.firebaseAuthSubscription();
  }

  render() {
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
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Auth />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
