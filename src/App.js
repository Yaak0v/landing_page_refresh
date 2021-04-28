import "./App.css";
import Contact from "./components/contact/contact";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import Careers from "./pages/careers";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" component={Home} exact ></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/careers' component={Careers}></Route>
        </Switch>
      </Router>
    </div>
  );
}
