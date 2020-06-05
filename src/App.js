import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <div className="App">
            <h1>This is the App.js file - we are testing Github branches.</h1>
            <body>I am adding a body here to practice documenting a change.</body>
            {/* <Route path="/" exact component={ChickenButt} /> */}
            <Route component={NoMatch} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
