import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Navheader from "./components/nav-header/nav-header";
import Auth from "./pages/auth/auth";

function App() {
  return (
    <div>
      <Navheader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;

//  <div className="App">
//       <HomePage />
//     </div>
