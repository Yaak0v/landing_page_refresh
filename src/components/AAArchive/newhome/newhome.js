import { Component } from "react";
import "./newhome.css";
import { NavLink } from "react-router-dom";
import {
  FaSolarPanel,
  FaSun,
  FaSquareRootAlt,
  FaPlus,
  FaPercentage,
  FaClipboard,
  FaClipboardList,
  FaClipboardCheck,
  FaTools,
  FaTruckPickup,
  FaHardHat,
  FaVectorSquare,
  FaDraftingCompass,
  FaPencilRuler,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import Navbar from "../navold/navbarold";
import EuclidFooter from "../footerold/footerold";
import Fade from "react-reveal";

class NewHome extends Component {
  render() {
    return (
      <IconContext.Provider value={{ size: "2em" }}>
        <div className="cover-container d-flex flex-column text-center landing-page-body hero-image">
          <Navbar />
          <div className="row justify-content-center mx-0 mt-auto ">
            <div className="col-1 light-text">
              <FaSun color="snow" />
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row justify-content-center mx-0 mt-5">
            <div className="col-sm-1 mx-1">
              <FaSolarPanel color="snow" />
            </div>
            <div className="col-sm-1 mx-1">
              <FaSolarPanel color="snow" />
            </div>
            <div className="col-sm-1 mx-1">
              <FaSolarPanel color="snow" />
            </div>
          </div>
          <div className="row justify-content-center mt-3 mx-0 ">
            <div className="col-md-8 align-self-center ">
              <h1 className="text-center light-text">Renewables Built Right</h1>
            </div>
          </div>
          <div className="row justify-content-center mt-3 mx-0 mb-auto ">
            <div className="col-md-8">
              <NavLink to="/contact">
                <button className="ghost-button mb-auto">Contact Us</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          id="products-modeling-structuring"
          className="py-md-5 mt-5 text-center justify-content-center d-flex"
        >
          <div className="col-5 text-center justify-content-center d-flex flex-column">
            <Fade left cascade>
              <div className="d-flex justify-content-center">
                <div className="col-md-1">
                  <FaSquareRootAlt />
                </div>
                <div className="col-md-1">
                  <FaPlus />
                </div>
                <div className="col-md-1">
                  <FaPercentage />
                </div>
              </div>
              <Fade left cascade>
                <div className="col-12 p-1 mx-auto mt-4">
                  <h1>Modeling and Structuring</h1>
                  <p>
                    Financial modeling and deal structuring for projects at all
                    stages
                  </p>
                  <NavLink to="/contact">
                    <a
                      className="btn btn-lg btn-primary mt-4"
                      href="contact.html"
                    >
                      Contact Us
                    </a>
                  </NavLink>
                </div>
              </Fade>
          </Fade>
            </div>
          <Fade right cascade>
            <div className="col-7 text-start container px-5">
              <div className="row">
                <div className="col-6">
                  <div className="category-headline">Deal Diligence</div>
                  <div>
                    <Fade right cascade>
                      <ul>
                        <li>Asset diligence</li>
                        <li>Risk identification and mitigation</li>
                        <li>Regulatory Management</li>
                        <li>Legal diligence & contract review</li>
                        <li>Full technical stack diligence</li>
                        <li>Independent engineer certification</li>
                      </ul>
                    </Fade>
                  </div>
                </div>
                <div className="col-6 px-2">
                  <div className="category-headline">Deal Diligence</div>
                  <div>
                    <Fade right cascade>
                      <ul>
                        <li>Asset diligence</li>
                        <li>Risk identification and mitigation</li>
                        <li>Regulatory Management</li>
                        <li>Legal diligence & contract review</li>
                        <li>Full technical stack diligence</li>
                        <li>Independent engineer certification</li>
                      </ul>
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="category-headline">Deal Diligence</div>
                  <div>
                    <Fade right cascade>
                      <ul>
                        <li>Asset diligence</li>
                        <li>Risk identification and mitigation</li>
                        <li>Regulatory Management</li>
                        <li>Legal diligence & contract review</li>
                        <li>Full technical stack diligence</li>
                        <li>Independent engineer certification</li>
                      </ul>
                    </Fade>
                  </div>
                </div>
                <div className="col-6 px-2">
                  <div className="category-headline">Deal Diligence</div>
                  <div>
                    <Fade right cascade>
                      <ul>
                        <li>Asset diligence</li>
                        <li>Risk identification and mitigation</li>
                        <li>Regulatory Management</li>
                        <li>Legal diligence & contract review</li>
                        <li>Full technical stack diligence</li>
                        <li>Independent engineer certification</li>
                      </ul>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div
          id="products-project-diligence"
          className="py-md-5 mt-3 text-center justify-content-center bg-light"
        >
          <Fade left cascade>
            <div className="d-flex justify-content-center mt-5">
              <div className="col-sm-1">
                <FaClipboard />
              </div>
              <div className="col-sm-1">
                <FaClipboardList />
              </div>
              <div className="col-sm-1">
                <FaClipboardCheck />
              </div>
            </div>
            <div className="col-md-6 mx-auto mt-4 mb-5">
              <h1>Project Diligence</h1>
              <p>
                We'll check every box to make ensure that your project is
                bankable
              </p>
              <NavLink to="/contact">
                <a className="btn btn-lg btn-primary mt-4" href="contact.html">
                  Contact Us
                </a>
              </NavLink>
            </div>
          </Fade>
        </div>
        <div
          id="products-execution-construction-management"
          className="p-md-3 mt-3 text-center justify-content-center"
        >
          <div className="d-flex justify-content-center mt-5">
            <div className="col-sm-1">
              <FaTools />
            </div>
            <div className="col-sm-1">
              <FaTruckPickup />
            </div>
            <div className="col-sm-1">
              <FaHardHat />
            </div>
          </div>
          <div className="col-md-6 mx-auto mt-4 mb-5">
            <h1>Execution and Construction Management</h1>
            <p className="mb-0">
              Scheduling, construction, procurement, permitting...
            </p>
            <p>Why don't you leave the details to us</p>
            <NavLink to="/contact">
              <a className="btn btn-lg btn-primary mt-4" href="contact.html">
                Contact Us
              </a>
            </NavLink>
          </div>
        </div>
        <div
          id="products-design-engineering"
          className="p-md-3 mt-3 text-center justify-content-center bg-light"
        >
          <div className="d-flex justify-content-center mt-5">
            <div className="col-sm-1">
              <FaVectorSquare />
            </div>
            <div className="col-sm-1">
              <FaDraftingCompass />
            </div>
            <div className="col-sm-1">
              <FaPencilRuler />
            </div>
          </div>
          <div className="col-md-6 mx-auto mt-4 mb-5">
            <h1>Design and Engineering</h1>
            <p>
              Let us maximize production and minimize cost so you can have the
              best possible project
            </p>
            <NavLink to="/contact">
              <a className="btn btn-lg btn-primary mt-4" href="contact.html">
                Contact Us
              </a>
            </NavLink>
          </div>
        </div>
        <EuclidFooter />
      </IconContext.Provider>
    );
  }
}

export default NewHome;
