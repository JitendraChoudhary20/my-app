
import './CSS/App.css';
import Home from './Home';
import Projects from './Projects';
import NavBar from './NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './About';
import Contact from "./Contact"
import Footer from './Footer';



function App() {
  return(
    <div className="container">
      <BrowserRouter>
      <NavBar/> 
      <Routes>

        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/project' element={<Projects/>}> </Route>
        <Route path='/contact' element={<Contact/>}> </Route>


      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

  ) 

}

export default App;
