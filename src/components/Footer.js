import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md';
import {FaGithub} from 'react-icons/fa';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/vamsi-krishna-2186b8247/"><BsLinkedin /></a>
          <a href="mailto:vamskrish15@gmail.com"><MdEmail /></a>
          <a href="https://github.com/Vamsi3333"><FaGithub /></a>
      </div>
      <p> Contact Details</p>
    </div>
  );
}

export default Footer;
