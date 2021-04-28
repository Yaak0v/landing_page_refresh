import { Component } from 'react';
import './home.css'
import { NavLink } from 'react-router-dom';
import { FaSolarPanel, FaSun } from "react-icons/fa";
import { IconContext } from "react-icons"
import Navbar from "../navold/navbarold"

class OldHome extends Component {
    
    render () {
        return (
            <div className="cover-container d-flex flex-column text-center landing-page-body ">
            <Navbar />
            <IconContext.Provider value = {{ size: "2em"}}>
                    <div className="row justify-content-center mx-0 mt-auto ">
                        <div className="col-1">
                            <FaSun color="blue" />
                        </div>
                    <div className="col-3"></div>
                    </div>
                    <div className="row justify-content-center mx-0 mt-5">
                    <div className="col-sm-1 mx-1">
                        <FaSolarPanel/>
                    </div>
                    <div className="col-sm-1 mx-1">
                        <FaSolarPanel/>
                    </div>
                    <div className="col-sm-1 mx-1">
                        <FaSolarPanel/>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3 mx-0 ">
                    <div className="col-md-8 align-self-center ">
                        <h1 className="text-center">Renewables Built Right</h1>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3 mx-0 mb-auto ">
                    <div className="col-md-8">
                        <NavLink to='/products'><button className="btn btn-primary mb-auto">Learn More</button></NavLink>
                    </div>
                    </div>
            </IconContext.Provider>
                </div> 
        )
    }
}

export default OldHome;