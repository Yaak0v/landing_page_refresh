import React, { useState } from "react";
import FooterNew from "../components/Footer";
import CareersSection from "../components/CareersSections";
import { careersData1, careersData2, careersData3, careersData4, careersData5, careersData6} from "../components/CareersSections/data";
import Navbar from "../components/Navbar";
import {SectionLine} from '../components/CareersSections/CareersElements'

const Careers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <div className="mt-5 text-center header-color">
          <h1 className="mb-5">Life-Changing Careers</h1>
        </div>
      <CareersSection {...careersData2} />
      <SectionLine></SectionLine>
      <CareersSection {...careersData3} />
      <SectionLine></SectionLine>
      <CareersSection {...careersData4} />
      <SectionLine></SectionLine>
      <CareersSection {...careersData5} />
      <FooterNew />
    </>
  );
};

export default Careers;
