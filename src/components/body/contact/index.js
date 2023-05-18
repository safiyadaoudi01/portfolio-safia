import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Vous voulez me contacter ? faites-le sur n'importe quelle plate-forme</p>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;