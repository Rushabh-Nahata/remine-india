import React from "react";
import "./SectionFour.css";
import assign_img from "../../assets/images/online-shopping.png";
import { Link } from "react-router-dom";

function SectionFour() {
  return (
    <div className="sectionFour_container" id="section-four">
      <div className="four-inner">
        <div className="four-one">
          <div className="four-one-inner">
            <h2>Wanted to Buy Something</h2>
            <p>Let's connect and create awesome products together</p>

            {/* <a href="#section-eight"> */}
              <button>Company E-Commerce Site</button>
            {/* </a> */}
          </div>
        </div>
        <div className="four-two">
          <div className="four-image-holder">
            <img src={assign_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
