import React from "react";
import "./Homepage.scss";
import BrandPromise from "./BrandPromise/BrandPromise";
import Services from "./Services/Services";

const Homepage: React.FC = () => {
  return (
    <div className="Homepage">
      <div className="Section1">
        <div className="Blur"></div>
        <div className="Left-content">
          <BrandPromise />
        </div>
        <div className="Right-content">

          <p>
            MBA Enterprise services the Oil and Gas industry by providing transportation for water and liquids accross the Permian Basin.           
          </p>
          <p>Additional services include Power washing for oil field equipment such as : well rigs, batteries, fracking tanks </p>
          <p>
            Our drivers are responsible, honest, and commited to providing the best service.             
          </p>
          <p>
            Drivers are Drug tested, PCE Safeland Certified, CDL Certified and have tank endorsements
          </p>
          
        </div>
      </div>
      <div className="Section2">
        <Services />
      </div>
      <div className="Section3">Links</div>
    </div>
  );
};

export default Homepage;
