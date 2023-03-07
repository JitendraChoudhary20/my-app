import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import "./CSS/Contact.css"
import "./index.css"
import HeroImg2 from './HeroImg2';

const Contact = () => {
  return (
    <div>
      <HeroImg2 heading="CONTACT." content="Lets have some Chats"/>
      <div className="contact-info">
      <h1>Contact</h1>
      <div className="contact">
        <LocalPhoneOutlinedIcon/>
        <p>8657393795</p>
      </div>
      <div className="email">
        <EmailOutlinedIcon/>
        <p>jituchoudhary20@gmail.com</p>
      </div>
      <div className="home-icon">
      <HomeOutlinedIcon/>
      <p>Maa Febrication, Near Bank Of India, <br /> Bazargaon, Nagpur-440023</p>

      </div>
      </div>

      <div className="connect">
        <div>
          <h3>Follow me at-</h3>
        <a className='linkedin' href="www.linkedin.com/in/jitendra-choudhary-122b05256" >LinkedIn</a>
        </div>
        <div>
        <a className='github' href="https://github.com/JitendraChoudhary20">GitHub</a>
        </div>
      </div>    
    
     
    </div>
  )
}

export default Contact
