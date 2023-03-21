import "./CSS/HeroImg2.css"
import React,{Component} from "react"


class HeroImg2 extends Component{
    render(){
        return (
            <div className="hero-img">
                <div className="heading">
                    <span>{this.props.heading}</span>
                    <p>{this.props.content}</p>
                </div>              
            </div>
          )
        }
 
}

export default HeroImg2
