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
          <td>
            <p>Dedicated crew</p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="Svg Logistics"></div>
          </td>
          <td>
            <p>Coordinated Logistics</p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="Svg Timely"></div>
          </td>
          <td>
            <p>On time delivery</p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="Svg Transportation"></div>
          </td>
          <td>
            <p>Transportation across the permian basin</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BrandPromise;
