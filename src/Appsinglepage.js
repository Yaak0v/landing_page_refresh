import { IconContext } from "react-icons"
import { FaSolarPanel, FaSun } from "react-icons/fa";
import './App.css';
import Navbar from './components/nav/navbar';
import { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <IconContext.Provider value = {{ size: "2em"}}>
        <body className="landing-page-body text-center">
            <Navbar />
          <div className="cover-container d-flex flex-column h-100">
              <div className="row justify-content-md-center mx-0 mt-auto">
                <div className="col-1">
                    <FaSun color="blue" />
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row justify-content-md-center mx-0 mt-5">
                <div className="col-1">
                    <FaSolarPanel/>
                </div>
                <div className="col-1">
                  <FaSolarPanel/>
                </div>
                <div className="col-1">
                  <FaSolarPanel/>
                </div>
            </div>
            <div className="row justify-content-md-center mt-3 mx-0">
                <div className="col-md-8 align-self-center">
                    <h1 className="text-center">Renewables Built Right</h1>
                </div>
            </div>
            <div className="row justify-content-md-center mt-3 mx-0 mb-auto">
                <div className="col-md-8">
                    <a className="btn btn-primary mb-auto" href="products.html">Learn More</a>
                </div>
            </div>
          </div>
      </body>
      </IconContext.Provider>
    );
  }
}

export default App;
