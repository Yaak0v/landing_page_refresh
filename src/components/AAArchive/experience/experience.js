import { Component } from 'react';
import './experience.css'
import { FaSolarPanel, FaCarBattery } from "react-icons/fa";
import { IconContext } from "react-icons"
import Brian1 from '../../images/Brian1_Long_Resize.jpg'
import Brian2 from '../../images/Brian2_Long_Resize.jpg'
import Utility3 from '../../images/Utility3.jpg'
import Utility4 from '../../images/Utility4.jpg'
import Toyota from '../../images/spwr_toyota.jpg'
import CandI3 from '../../images/C&I3.jpg'
import CandI2 from '../../images/C&I2.png'
import Navbar from "../navold/navbarold"
import EuclidFooter from "../footerold/footerold"

class Home extends Component {
    render () {
        return (
            <IconContext.Provider value = {{ size: "2em"}}>
            <Navbar />
            <div className="text-center mt-5">
                <h1>Utility Scale Solar and Storage</h1>
            </div>
            <div className="row w-100 justify-content-center mt-3 mb-5">
                <div className="col-sm-1 px-0 text-center">
                    <FaSolarPanel />
                </div>
                <div className="col-sm-1 px-0 text-center">
                    <FaSolarPanel />
                </div>
                <div className="col-sm-1 px-0 text-center">
                    <FaCarBattery />
                </div>
            </div>
            
            {/*first two images are formatted correctly, need to add down the rest of them*/}
            
            <div className="max-height">
                <img src={Brian1} alt="" className=""/>
                <div className="experience-overlay-left center flex-column">
                    <h1 className="display-3 text-center">Project Slate</h1> 
                    <h3 className="text-center Roboto">300MW Solar | 561MWH Storage</h3> 
            </div>
            </div>
            <div className="max-height mt-2">
                <img src={Brian2} alt="" className=""/>
                <div className="experience-overlay-right center flex-column">
                    <h1 className="display-3 text-center">High Desert Solar and Storage</h1> 
                    <h3 className="text-center Roboto">130MW Solar | 300MWH Storage</h3> 
                </div>
            </div>
            <div className="max-height mt-2">
                <img src={Utility3} alt="" className="img"/>
                <div className="experience-overlay-left center flex-column">
                    <h1 className="no-wrap dsiplay-1">Mustang Solar</h1> 
                    <h3 className="no-wrap dsiplay-3">134MW Solar</h3> 
                </div>
            </div>
            <div className="max-height mt-2 mb-5">
                <img src={Utility4} alt="" className="img"/>
                <div className="experience-overlay-right center flex-column">
                    <h1 className="no-wrap dsiplay-1">American Kings</h1> 
                    <h3 className="no-wrap dsiplay-3">123MW Solar</h3> 
                </div>
            </div>
            
            
            <div className="text-center mt-5">
                <h1>C&I Solar and Storage</h1>
            </div>
            <div className="row w-100 justify-content-center mt-3 mb-5">
                <div className="col-md-1 px-0 text-center">
                    <FaSolarPanel />
                </div>
                <div className="col-md-1 px-0 text-center">
                    <FaSolarPanel />
                </div>
                <div className="col-md-1 px-0 text-center">
                    <FaCarBattery />
                </div>
            </div>
            
            <div className="max-height mt-2">
                <img src={Toyota} alt="" className="img"/>
                <div className="experience-overlay-left center flex-column">
                    <h1 className="no-wrap dsiplay-1">Project Bang</h1> 
                    <h3 className="no-wrap dsiplay-3">233MW Solar | 209 Projects</h3> 
                </div>
            </div>
            <div className="max-height mt-2">
                <img src={CandI3} alt="" className="img"/>
                <div className="experience-overlay-right center flex-column">
                    <h1 className="no-wrap dsiplay-1">Greenskies [portfolio name]?</h1> 
                    <h3 className="no-wrap dsiplay-3">?200MW Solar? ?### Projects?</h3> 
                </div>
            </div>
            <div className="max-height mt-2">
                <img src={CandI2} alt="" className="img"/>
                <div className="experience-overlay-left center flex-column">
                    <h1 className="no-wrap dsiplay-1">Marina Energy</h1> 
                    <h3 className="no-wrap dsiplay-3">204MW Solar | 143 Projects</h3> 
                </div>
            </div>
            <EuclidFooter />
            </IconContext.Provider>
        )
    }
}

export default Home;