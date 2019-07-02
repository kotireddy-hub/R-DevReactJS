import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginComponent from "./components/login/login";
import DashBoard from "./components/DashBoard/DashBoard";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={LoginComponent} />
          <Route path="/DashBoard" component={DashBoard} />
        </div>
      </Router>
    );
  }
}
export default App;
