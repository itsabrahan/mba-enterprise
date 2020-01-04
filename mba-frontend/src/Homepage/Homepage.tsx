import React from 'react';
import './Homepage.scss';
import BrandPromise from './BrandPromise/BrandPromise';
import Services from './Services/Services';


const Homepage: React.FC = () => {
  return (
    <div className="Homepage">
      <div className="Section1">
        <div className="Blur">
        </div>
        <div className="Left-content">
          <BrandPromise />
          
        </div>
        <div className="Right-content">
          MBA Enterprise is the largest logistics company in Carlsbad NM. 
          We ensure the delivery of fracking water to and from drilling sites.
        </div>
      </div>
      <div className="Section2">
        <Services />
      </div>
      <div className="Section3">
        Links  
      </div>
      
    </div>
  );
}

export default Homepage;
