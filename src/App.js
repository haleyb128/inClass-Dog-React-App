import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/Home";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";
import NavTabs from "./components/NavTabs";
import "./App.css";
const App = () => (
  <div>
    <div class="container">
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    </div>
  </div>
);

export default App;
