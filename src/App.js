import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import HomePage from "./containers/HomePage";

import Footer from "./components/Footer";

import NavBar from "./components/NavBar"


function App() {
  return (
    <>

      <Router>
        <NavBar />
        <div className="App">
          <h1>This is the App.js file - we are testing Github branches.</h1>
          <body>I am adding a body here to practice documenting a change.</body>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
