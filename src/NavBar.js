import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavBar() {
  const [click, setClick]= useState("false");
 
//  function myfunction(){
  
//     var x = document.getElementById("myLinks");
//     if(x.style.display==="block"){
//       x.style.display="none";
//     }
//       else{
//         x.style.display="block";
//       }
//     }
  
  return (
    <div className="navbar">
      <div className="header">
        <Link to={"/"}>
          <h1>Portfolio</h1>
        </Link>
      </div>

      <div className="nav-menu">
        <ul id="myLinks">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/project"}>
            <li>Projects</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contacts</li>
          </Link>
        </ul>
      </div>
      <div className="menu-icon" onClick={myfunction}>
        {click ? <CloseIcon /> : <MenuIcon /> }       
      
        
      </div>
    </div>
  );
}

export default NavBar;
