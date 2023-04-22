import React from "react";
import "./SectionThree.css";
import battery from '../../assets/images/services/battery.png'
import batteryy from '../../assets/images/services/batteryy.png'
// import batteryyy from '../../assets/images/services/batteryyy.png'
import garbage from '../../assets/images/services/garbage.png'
// import lithium from '../../assets/images/services/lithium-cell.png'
import vehicle from '../../assets/images/services/vehicle.jpg'
// import wastewater from '../../assets/images/services/waste-water.png'
import accounting from '../../assets/images/services/accounting.png'
import delivery from '../../assets/images/services/delivery-truck.png'


function SectionThree() {
  return (
    <div className="sectionThree_container" id="section-three">
      <div className="skills-holder">
        <div className="skills-header">
          <h1>Services</h1>
          <span>Green Services Provided by Remine India</span>
        </div>
        <div className="icon-holder">
          <div className="icon-holder-row">
            <div className="icon-box">
              <div className="icon-image">
                <img src={battery} alt="html" />
              </div>
              <span>Lithium Battery</span>
            </div>
            <div className="icon-box">
              <div className="icon-image">
                <img src={batteryy} alt="css" />
              </div>
              <span>Recycle Battery</span>
            </div>
            <div className="icon-box">
              <div className="icon-image">
                <img src={accounting} alt="material" />
              </div>
              <span>Data Destruction</span>
            </div>
            {/* <div className="icon-box">
              <div className="icon-image">
                <img src={batteryyy} alt="javascript" />
              </div>
              <span>Javascript</span>
            </div> */}
          </div>

          <div className="icon-holder-row">
            <div className="icon-box">
              <div className="icon-image">
                <img src={garbage} alt="react" />
              </div>
              <span>Recyclig waste</span>
            </div>
            <div className="icon-box">
              <div className="icon-image">
                <img src={delivery} alt="firebase" />
              </div>
              <span>Transportation</span>
            </div>
            {/* <div className="icon-box">
              <div className="icon-image">
                <img src={lithium} alt="node" />
              </div>
              <span>NodeJS</span>
            </div> */}
            <div className="icon-box">
              <div className="icon-image">
                <img src={vehicle} alt="express" />
              </div>
              <span>Eco-Friendly</span>
            </div>
          </div>

          <div className="icon-holder-row">
            {/* <div className="icon-box">
              <div className="icon-image">
                <img src={wastewater} alt="mongo" />
              </div>
              <span>MongoDB</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
