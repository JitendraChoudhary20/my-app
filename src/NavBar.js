import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavBar() {
  const [click, setClick]= useState("false");

  const handleClick=()=>{
    setClick(!click)
  }
 
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
