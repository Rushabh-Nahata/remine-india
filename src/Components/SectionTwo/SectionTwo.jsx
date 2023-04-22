import React from "react";
import "./SectionTwo.css";
import nine from "../../assets/images/nine.jpg";

function SectionTwo() {
  return (
    <div className="sectionTwo_container" id="section-two">
      <div className="sectionTwo_innercontainer1">
        <div className="problem_image">
          <img src={nine} alt="problem" />
        </div>
      </div>
      <div className="sectionTwo_innercontainer2">
        <div className="about_text">
          <h1>About Remine India</h1>
          <p className="txt_abt">
            The team at Remine India uses advanced technologies and processes to
            ensure the safe and efficient recycling of e-waste and Li batteries.
            They have developed a proprietary technology that enables the
            recovery of valuable materials from electronic waste, such as
            copper, aluminum, and precious metals like gold and silver. These
            materials can then be reused in the manufacturing of new electronic
            devices and other products.
          </p>

          <div className="stat-holder">
            <div className="stat">
              <h2 className="stat-val">Location</h2>

              <p>Uttarakhand</p>
            </div>
            <div className="stat">
              <h2 className="stat-val">Classification</h2>
              <p>Private Incorporated</p>
            </div>
            <div className="stat">
              <h2 className="stat-val">CIN</h2>
              <p>U37100UR2022PTC014948</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
