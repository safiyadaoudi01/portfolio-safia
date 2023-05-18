import React from "react";
import './web.css';
import cv from '../../../assets/icons/cv.png';
import pdf from '../../../assets/icons/CV.pdf';


function Web() {
  return <div className="web">
    <div className="web-option">
      <a href={pdf} download>
        <img src={cv} alt="CV Icon" class="option-icon"/> CV
      </a>
    </div>
    <div className="web-option">
        <a href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Cértifications
        </a>
    </div>
    <div className="web-option">
        <a href="#skills">
        <i class="fi-rr-laptop option-icon"></i>Compétences
        </a>
    </div>
    <div className="web-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Projets
        </a>
    </div>
    <div className="web-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
  </div>;
}

export default Web;