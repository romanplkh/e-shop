import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

function App() {
  const BarbellsPage = () => {
    return <div>Barbells</div>;
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/barbells" component={BarbellsPage} />
      </Switch>
    </div>
  );
}

export default App;

//  <div className="App">
//       <HomePage />
//     </div>
