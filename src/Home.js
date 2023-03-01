import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from "./Images/passport.jpg"
import "./CSS/Home.css"
// import module work only with file present in src folder

function Home() {
  return (
    <div className="home">
      <div className="my-info">
      {/* <img className='passport' src={img1} alt="" /> */}
        <h2>Hello, This is Jitendra Narendra Choudhary</h2>
        <p>Working as a Executive Engineer at Solar Industries India Limited. <br />
        Having 4+ years of experiance.</p>
      </div>
      <br />
    
      <NavLink to={'/project'}>
   <button className='btn-project' >See My-Projects</button>
   </NavLink>
  
   

   

   </div>
  )
}

export default Home
