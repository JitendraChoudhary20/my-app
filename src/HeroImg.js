import React from 'react'
import "./CSS/HeroImg.css";
import heroimg from "./Images/heroimg.webp";
import { Link, Navigate } from 'react-router-dom';



const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="herobg" src={heroimg} alt="heroimage" />
        </div>
        <div className="content">
            <p>HI, I Am A</p>
            <h1>WEB DEVELOPER</h1>
        
        <div className="btn">
          <Link to="/project">
            <button className='btn-dark'>PROJECTS</button>
            </Link>
            <Link to="/contact">
            <button className='btn-light'>CONTACT</button>
            </Link>
            
        </div>
        
       
        </div>
      
    </div>
  )
}

export default HeroImg
