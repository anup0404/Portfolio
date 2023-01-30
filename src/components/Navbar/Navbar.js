import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className="nav_container">
        <div className="nav_container_left">
          
        </div>
        <div className="nav_container_right">
          <ul className="nav_icon">
            <li>
              <a
                href="https://github.com/anup0404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anup-kumar-937697200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <IoMdMail />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100007498567626"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/anup__gu__pta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
