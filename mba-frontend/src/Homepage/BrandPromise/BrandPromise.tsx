import React from "react";
import "./BrandPromise.scss";

const BrandPromise: React.FC = () => {
  return (
    <div className="Brand-promise">
      <table>
        <tr>
          <td>
            <div className="Svg Water-truck"></div>
          </td>
          <td>Dedicated crew</td>
        </tr>
        <tr>
          <td>
            <div className="Svg Logistics"></div>
          </td>
          <td>Coordinated Logistics</td>
        </tr>
        <tr>
          <td>
            <div className="Svg Timely"></div>
          </td>
          <td>On time delivery</td>
        </tr>
        <tr>
          <td>
            <div className="Svg Transportation"></div>
          </td>
          <td>Transportation across the permian basin</td>
        </tr>
      </table>
    </div>
  );
};

export default BrandPromise;
