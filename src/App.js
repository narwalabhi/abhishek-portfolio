import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
        <div>
          <NavigationBar />
        </div>
    );
  }
}

export default App;
