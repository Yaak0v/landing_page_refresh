import React, { useState } from "react";
import FooterNew from "../components/Footer";
import CareersSection from "../components/CareersSections";
import InfoSection from "../components/InfoSection";
import { careersData1 } from "../components/CareersSections/data";
import Navbar from "../components/Navbar";

const Careers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <div className="mt-5 text-center header-color">
          <h1>Life-Changing Careers</h1>
        </div>
      <CareersSection {...careersData1} />
      <FooterNew />
    </>
  );
};

export default Careers;
