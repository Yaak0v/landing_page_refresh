import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbarold.css'
import Logo from '../../images/Full Logo PNG 2.png'


export default function EuclidNavbar() {
    const [navbar, setNavbar] = useState(false);
  
  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  };
  
  window.addEventListener('scroll', changeBackground);

  // {navbar ? 'navbar active' : 'navbar'}
  return (
      <Navbar className="navbar-expand-sm navbar-light sticky-top navbar-opacity Roboto euclid-nav text-light" >
        <div className="container-fluid">
          <Link to='/'><img src={Logo} alt="" className="navbar-brand logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="products.html">Modeling and Structuring</a></li>
                      <li><a className="dropdown-item" href="products.html#products-project-diligence">Project Diligence</a></li>
                      <li><a className="dropdown-item" href="products.html#products-execution-construction-management">Execution and Construction Management</a></li>                    
                      <li><a className="dropdown-item" href="products.html#products-design-engineering">Design and Engineering</a></li>                    
                    </ul>
                  </li> */}
              <li className="nav-item">
                <Link to='/products' className="nav-link light-text">Products</Link>
              </li>
              <li className="nav-item">
                <Link to='/experience' className="nav-link">Experience</Link>
              </li>
              <li className="nav-item">
                <Link to='/team' className="nav-link">Team</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
              </li>
              {/* <li className="nav-item">
                <Link to='/signup' className="nav-link">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to='/login' className="nav-link">Login</Link>
              </li> */}
              <li className="nav-item">
                <Link to='/dashboard' className="nav-link">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to='/newhome' className="nav-link">New Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    )
  }

