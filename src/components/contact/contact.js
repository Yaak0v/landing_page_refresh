import { Component } from "react";
import { IconContext } from "react-icons";
import Navbar from "../Navbar";
import ContactImage from "../../images/undraw/undraw_Nature_benefits_green.svg";

import "./contact.css";
import ContactForm from "../contactform/contactform";
import FooterNew from "../Footer";

class Home extends Component {
  render() {
    return (
      <IconContext.Provider value={{ size: "2em" }}>
        <Navbar />
        <div className="mt-5 text-center header-color">
          <h1>Let's Get Started</h1>
        </div>
        <div className="container mb-5">
          <div className="row d-flex flex-row justify-content-center">
            <div className="col-md-5 mt-5 px-4">
              <h4 className="header-color mb-3">Ask How We Can Help You</h4>
              <h5 className="mt-2 top-line">project developer?</h5>
              <p className="paragraph-color">
                Euclid has extensive execution and development experience. Ask
                us how we can support projects at any stage.
              </p>
              <h5 className="mt-2 top-line">renewables investor?</h5>
              <p className="paragraph-color">
                Euclid's team has diligenced, underwritten, and invested in 3GW+
                of projects. Ask us how we can support your investment needs.
              </p>
              <div className="justify-content-center my-auto">
                <img
                  src={ContactImage}
                  alt="Calculator"
                  className="contact-image mt-3"
                />
              </div>
            </div>
            <div className="col-md-5 mt-5 px-4">
              <ContactForm />
            </div>
          </div>
        </div>
        <FooterNew />
      </IconContext.Provider>
    );
  }
}

export default Home;
