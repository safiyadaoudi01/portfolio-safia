import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Enchanté,
         <br /> <span className="info-name">Safiya DAOUDI</span>.
         <br /> Développeuse Web et Mobile
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      
    </div>
  );
}

export default About;