import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

const Footer = () => 
  <div className="footer">
    <div className="socialMedia">
    <a href='https://www.linkedin.com/in/kunalbhandari21' target='_blank' rel="noreferrer"> <LinkedInIcon /> </a>
    </div>
    <p> &copy; 2022 kunalbhandari.com</p>
  </div>

export default Footer;
