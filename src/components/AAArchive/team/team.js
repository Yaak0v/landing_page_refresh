import { Component } from 'react';
import './team.css';
import RG from '../../images/RGBW.jpg';
import BD from '../../images/BDBW.jpg';
import JS from '../../images/JSBW.jpg';
import Navbar from '../navold/navbarold'
import EuclidFooter from '../footerold/footerold'

class Team extends Component {
    render () {
        return (
            <div>
        <Navbar />
           <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center mt-5">
                        <h1>Transforming Renewable Energy Through Process and Expertise</h1>
                        <p className="mt-3">Leveraging our 3GW+ of solar and storage experience, we are empowering the renewables industry to build better projects</p>
                    </div>
                </div>
            </div>
        
            <div className="container mt-5">
                <div className="row justify-content-evenly">
                    <div className="col-md-3  text-center">
                        <a href="https://www.linkedin.com/in/brian-demaio-935b4666/"><img src={BD} alt="" className="img-fluid team-picture"/></a>
                        <h5 className="mt-3 display-5">Brian DeMaio</h5>
                        <h3 className="mt-2 mb-4 navy-text">Co-Founder</h3>
                        <p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Goldman Sachs Renewable Power</li>
                                <li className="list-group-item">GE Solar</li>
                                <li className="list-group-item">Blackstone (Onyx Renewable Partners)</li>
                                <li className="list-group-item">Rutgers Business School</li>
                            </ul>
                        </p>
        
                    </div>
                    <div className="col-md-3 text-center">
                            <a href="https://www.linkedin.com/in/ryanguay/"><img src={RG} alt="" className="img-fluid team-picture"/></a>
                        <h5 className="mt-2 display-5">Ryan Guay</h5>
                        <h3 className="mt-3 mb-4 navy-text">Co-Founder</h3>
                        <p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Goldman Sachs Renewable Power</li>
                                <li className="list-group-item">Active Solar</li>
                                <li className="list-group-item">True Green Capital</li>
                                <li className="list-group-item">SUNY Oneonta</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-md-3  text-center">
                        <a href="https://www.linkedin.com/in/jacobsandry/"><img src={JS} alt="" className="img-fluid team-picture"/></a>
                        <h5 className="mt-3 display-5">Jacob Sandry</h5>
                        <h3 className="mt-2 mb-4 navy-text">Co-Founder</h3>
                        <p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Goldman Sachs Renewable Power</li>
                                <li className="list-group-item">Generate Capital</li>
                                <li className="list-group-item">Mosaic</li>
                                <li className="list-group-item">Yale University</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <EuclidFooter />
        </div>
        )
    }
}

export default Team;