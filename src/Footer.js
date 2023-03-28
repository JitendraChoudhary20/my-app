import React from 'react'
import "./CSS/Contact.css";
import "./index.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-info">
     
        
        <div className="home-icon">
          <HomeOutlinedIcon/>
          <p>
            Maa Febrication, Near Bank Of India, <br /> Bazargaon, Nagpur-440023
          </p>
        </div>
        <div className="contact">
          <LocalPhoneOutlinedIcon />
          <p>8657393795</p>
        </div>
        <div className="email">
          <EmailOutlinedIcon />
          <p>jituchoudhary20@gmail.com</p>
        </div>
      </div>

      <div className="connect">
        <div>
          <h3>Links-</h3>
          <a
            className="linkedin"
            href="https://linkedin.com/in/jitendra-choudhary-122b05256/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            className="github"
            href="https://github.com/JitendraChoudhary20"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div>
        <Link to="/contact">
            <span >Suggestion</span>
            </Link>
        </div>
        
      </div>
     
    </div>
  )
}

export default Footer
