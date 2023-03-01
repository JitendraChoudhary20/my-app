import "./CSS/Project.css"
import { Link } from "react-router-dom"

export default function Projects(){
    return(
      
        <div className="project-list">
            <h1>My Projects</h1>
            <ol>
                <div className="cards">
                <div className="container">
                <a className="link" href="https://chatsapp-20.netlify.app" target="_blank">  <li>Whatsapp</li></a>
                </div>
                <div className="container">
                <a className="link" href="https://jitendrachoudhary20.github.io/Task-Manager-App---JS-Placement-Project---mt8a206ds6ga/" target="_blank"> <li>Task Manager</li></a>
                </div>
                <div className="container">
                <a className="link" href="https://jitendrachoudhary20.github.io/Like-Comment-Reply/" target="_blank"> <li>Nested Comments</li></a>
                </div>
                <div className="container">
                <a className="link" href="https://jitendrachoudhary20.github.io/Responsive-Resume-using-CSS-Grid---Input-type-reset-Readonly-Disabled-Element---csneyozcpfr0/" target="_blank"> <li>Responsive Resume</li></a>
                </div>
                <div className="container">
                <a className="link" href="https://jitendrachoudhary20.github.io/OTP-project1/" target="_blank"> <li>OTP form</li></a>
                </div>
                </div>
                
               
                
                
                
                
            </ol>
       </div>
      
    )
     
    
    
}
