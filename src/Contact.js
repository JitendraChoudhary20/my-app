import React from "react";

import "./CSS/Contact.css";
import "./index.css";
import HeroImg2 from "./HeroImg2";
import emailjs from "emailjs-com"

const Contact = () => {

  function sendEmail(e){
e.preventDefault();
// emailjs.sendForm("email service id, template id, input, userId/private key") .......format
emailjs.sendForm('service_ey2cvfn','template_p42a1k6',e.target,"BN_twGVPKc2hXaE0b").then
(res=>{
console.log(res);
}).catch(err=>
console.log(err));
}
  
  return (
    <div>
      <HeroImg2 heading="CONTACT." content="Lets have some Chats" />

      <div className="container border">
        
        <h3 style={{"margin-left":"40%"}}>Get in Touch</h3>
        <form className="row" style={{"margin":"25px 50px 75px 100px"}} onSubmit={sendEmail}>
        <label htmlFor="name" style={{"color":"white"}}>Your Name:</label>
        <input id="name" name="name" type="text" placeholder="Enter your Name" className="form-control" required />
        <label htmlFor="phone" style={{"color":"white"}}>Your Contact number:</label>
        <input id="phone" name="phone" type="number" placeholder="Enter your number" className="form-control" required />
        
        <label htmlFor="email"style={{"color":"white"}}>Your Email Id:</label>
        <input id="email" name="user_email" type="email" placeholder="Enter your email" className="form-control" autoComplete="off" required/>
     
        <label htmlFor="message"style={{"color":"white"}}>Your Message:</label>
        <textarea  id="message" name="message" rows="5" placeholder="Enter your message" className="form-control" required></textarea>
      
        <input type="submit" value="Send" className="form-control btn btn-primary" style={{"margin-top":"25px"}}></input>
        </form>

      </div>

    </div>
  );
};

export default Contact;
