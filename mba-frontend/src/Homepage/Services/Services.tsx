import React from "react";
import "./Services.scss";

const Services: React.FC = () => {
  return (
    <div className="Services">
      <div className="Title">
        <span className="Title-span">Services</span>
        <div className="Services-grid">
          <div>Fresh, Brine  and production water hauling </div>
          <div>KCL transportation </div>
          <div>OBM - oil base mud - transportation</div>
          <div>Power Washing for oil field equipment</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
