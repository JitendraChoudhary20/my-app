import "./CSS/Project.css"
import { Link } from "react-router-dom"
import whatsappImage from "./Images/whatsappImage.png";

export default function Projects(){
    return(
      
        <div className="project-list">
            <h1>My Projects</h1>
            <ol>
                <div className="cards">
                <div className="container">
                <a className="link" href="https://chatsapp-20.netlify.app" target="_blank">  <li>Whatsapp-Clone</li></a>
                <img src={whatsappImage} alt="whatsappImage" />
                </div>
                <div className="container">
                <a className="link" href="https://jitendrachoudhary20.github.io/Task-Manager-App---JS-Placement-Project---mt8a206ds6ga/" target="_blank"> <li>Task Manager</li></a>
                <img src={whatsappImage} alt="whatsappImage" />
                </div>
                <div className="container">
                <a className="link" href="https://jitendrachoudhary20.github.io/Like-Comment-Reply/" target="_blank"> <li>Nested Comments</li></a>
                <img src={whatsappImage} alt="whatsappImage" />
                </div>
                <div className="container">
                <a className="link" href="https://jitendraresume.netlify.app" target="_blank"> <li>Responsive Resume</li></a>
                <img src={whatsappImage} alt="whatsappImage" />
                </div>
                <div className="container">
                <a className="link" href="https://jitendrachoudhary20.github.io/OTP-project1/" target="_blank"> <li>OTP form</li></a>
                <img src={whatsappImage} alt="whatsappImage" />
                </div>
                </div>
                
               
                
                
                
                
            </ol>
       </div>
      
    )
     
    
    
}
