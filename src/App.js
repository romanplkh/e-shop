import React, { Component } from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Navheader from "./components/nav-header/nav-header";
import Auth from "./pages/auth/auth";
import { firebaseAuth, addUserProfile } from "./firebase/firebase.helpers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  firebaseAuthSubscription = null;

  componentDidMount() {
    //Set observer ref
    this.firebaseAuthSubscription = firebaseAuth.onAuthStateChanged(
      async user => {
        if (user) {
          //TRY TO ADD USER PROFILE
          const userRef = await addUserProfile(user);

          //IF USER PROFILE ALREADY EXISTS --> POPULATE STATE WITH THIS DATA
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data() //GET REST OF ELEMENTS AND TRANSFORM SNAPSHOT TO DATA
              }
            })
          })
        } else {
          this.setState({currentUser: user})
       }
      }
    );
  }

  componentWillUnmount() {
    //Close subscription
    this.firebaseAuthSubscription();
  }

  render() {
    return (
      <div>
        <Navheader currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;

//  <div className="App">
//       <HomePage />
//     </div>
