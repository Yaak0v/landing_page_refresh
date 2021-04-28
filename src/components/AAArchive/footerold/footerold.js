import React from 'react'
import "./footerold.css"
import { Link } from 'react-router-dom'
import Logo from '../../images/Full Logo PNG 2.png'

export default function EuclidFooter() {
    return (
        <div className="footer bg-light pt-5 d-flex mt-3 flex-column">
            <div className="row w-100 d-flex">
                 <Link to='/'><img src={Logo} alt="" className="logo mx-5" /></Link>
            </div>
            <div className="row w-100 d-flex">
                <div className="d-flex col-sm-1 flex-column max-150 ms-5">
                    <h5 className="text-muted px-2">Renewables Built Right</h5>
                </div>
                <div className="col-sm-2 ms-5 ps-2 mb-3 Roboto">
                    <p className="mb-0 ps-3"><Link to='/' className="footer-link mb-0">Home</Link></p>
                    <p className="mb-0 ps-3"><Link to='/products' className="footer-link mb-0">Products and Services</Link></p>
                    <p className="mb-0 ps-3"><Link to='/team' className="footer-link mb-0">Team</Link></p>
                    <p className="mb-0 ps-3"><Link to='/experience' className="footer-link mb-0">Experience</Link></p>
            </div>
                <div className="col mx-5">
                    <p className="mb-0 py-0 px-1 text-muted">Need help with a project?</p>
                    <h1 id="footer-main-link"><Link to='/contact' className="display-3 footer-main mt-0 mb-2 px-0">
                        Let's Talk  
                        </Link></h1>
                    <div id="footer-main-link-underline" className="top-grow mx-1"></div>
                </div>
            </div>
            <div className="row w-100 mt-5 mx-0 d-flex">
                <p className="col text-muted mx-5 px-0">Copyright Euclid Power Inc. 2021</p>
            </div>
        </div>
    )
}
