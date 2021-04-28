import '../../index.css'
import { Component } from 'react';
import './products.css'
import { NavLink } from 'react-router-dom';
import { FaSquareRootAlt, FaPlus, FaPercentage, FaClipboard, FaClipboardList, FaClipboardCheck, FaTools, FaHardHat, FaTruckPickup, FaVectorSquare, FaDraftingCompass, FaPencilRuler } from "react-icons/fa";
import { IconContext } from "react-icons"
import Navbar from "../navold/navbarold"
import EuclidFooter from '../footerold/footerold'

class Products extends Component {
    render () {
        return (
            <IconContext.Provider value = {{ size: "2em"}}>
            <Navbar />
            <div id="products-modeling-structuring" className="py-md-5 mt-5 text-center justify-content-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-1">
                    <FaSquareRootAlt />
                    </div>
                    <div className="col-sm-1">
                    <FaPlus />
                    </div>
                    <div className="col-sm-1">
                    <FaPercentage />
                    </div>
                </div>  
                <div className="col-md-6 mx-auto mt-4">
                    <h1>Modeling and Structuring</h1>
                    <p className="Lora">Financial modeling and deal structuring for projects at all stages</p>
                    <NavLink to='/contact'><a className="btn btn-lg btn-primary mt-4" href="contact.html">Contact Us</a></NavLink>
                </div>
                </div>
            <div id="products-project-diligence"  className="py-md-5 mt-3 text-center justify-content-center bg-light">
                <div className="row d-flex justify-content-center mt-5">
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
                    <p>We'll check every box to make ensure that your project is bankable</p>
                    <NavLink to='/contact'><a className="btn btn-lg btn-primary mt-4" href="contact.html">Contact Us</a></NavLink>
                </div>
                </div>
            <div id="products-execution-construction-management" className="p-md-3 mt-3 text-center justify-content-center">
                <div className="row d-flex justify-content-center mt-5">
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
                    <p className="mb-0">Scheduling, construction, procurement, permitting...</p>
                    <p>Why don't you leave the details to us</p>
                    <NavLink to='/contact'><a className="btn btn-lg btn-primary mt-4" href="contact.html">Contact Us</a></NavLink>
                </div>
                </div>
            <div id="products-design-engineering" className="p-md-3 mt-3 text-center justify-content-center bg-light">
                <div className="row d-flex justify-content-center mt-5">
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
                    <p>Let us maximize production and minimize cost so you can have the best possible project</p>
                    <NavLink to='/contact'><a className="btn btn-lg btn-primary mt-4" href="contact.html">Contact Us</a></NavLink>
                </div>
            </div>
            <EuclidFooter />
            </IconContext.Provider>
        )
    }
}

export default Products;