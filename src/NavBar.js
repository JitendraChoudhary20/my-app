import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavBar() {
  const [click, setClick]= useState("false");
  const [color, setColor]= useState("false");

  const changeColor = ()=>{
    if(window.scrollY>=10){
      setColor("true");
    }
    else{
      setColor("false");
    }
  }

  const handleClick=()=>{
    setClick(!click)
  }
 
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="header">
        <Link to={"/"}>
          <h1>Portfolio</h1>
        </Link>
      </div>
      <div className="resume">
        <a href="https://jitendraresume.netlify.app"  target="_blank"><button className='btn-light' >View Resume</button></a>
        <a href="Portfolio Jitendra.pdf" download={"Jitendra Portfolio.pdf"} target="_blank">
        <button  className="btn-light" >Download Resume</button> </a>
        </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
       
         
            <li> <Link to={"/"}>Home</Link></li>
          
          
            <li><Link to={"/about"}>About </Link></li>
         
          
            <li><Link to={"/project"}>Projects</Link></li>
          
          
            <li><Link to={"/contact"}>Contacts </Link></li>
         
        </ul>

      <div className="menu-icon" onClick={handleClick} >
        {click ? (<CloseIcon />):(<MenuIcon /> )
        }     
        
      </div>
    </div>
  );
}

export default NavBar;
