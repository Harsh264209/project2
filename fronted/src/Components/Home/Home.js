


import React from 'react'
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import HomePage from '../Homepage/Homepage';
// import Work from '../Components/Work';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';



const Home = () => {
  return (
   
        <div className=''>
           <Navbar/>
         <hr />
         <div className="div my-32 items-center flex-col" id='Home'>  
            <HomePage/>
         </div>
         <div className="div flex items-center flex-col" id='About'>  
            <About/>
         </div>
         {/* <div className="div my-32 flex items-center flex-col" id='Experience'>  
            <Work/>
         </div> */}
         <hr />
         <div className="div my-32"  id='Skills' >
            <Skills/>
         </div>
         <div className="div my-32"  id='Projects' >
            <Projects/>
         </div>
        
         <div className="div my-32 md:my-2" id='Education'>
            <Education/>
         </div>
         <div className="div my-32" id='Contact'>
            <Contact/>
         </div>
         <div className="div">
            <Footer/>
         </div>
        </div>
      );
    }
    
 

export default Home