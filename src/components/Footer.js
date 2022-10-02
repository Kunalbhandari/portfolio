import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link onClick={() => window.open('https://www.linkedin.com/in/kunalbhandari21/', '_blank')}> <LinkedInIcon /> </Link>
      </div>
      <p> &copy; 2022 kunalbhandari.com</p>
    </div>
  );
}

export default Footer;
