
import { Link } from 'react-scroll';
import React from 'react'
import hacker1 from '../../Images/Transhumans - Gamestation.png'
import { TypeAnimation } from 'react-type-animation';


const HomePage = () => {
  return (
  
     <>
         <div className=" my-16  animated-element md:my-44 ml-2  text-center" style={{backgroundColo:"#f7f7f7"}}>
          <div className="md:flex font-abc flex text-white md:flex-row flex-col  justify-center items-center md:items-center">
          <div className="div  my-14 md:my-8  md:text-left">
           <h1 className='text-6xl mb-2 font-abc md:text-6xl font-bold'>Hey! I'm <span className='bg-gradient-to-r from-purple-500 to-blue-200 text-transparent bg-clip-text'>Harsh</span></h1>
         <TypeAnimation sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am into a web Development 🚀.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Open To work as Web Developer 🧑‍🏭.',
        1000,
        'We will design 🎨 for your Brand .',
        1000,
        'Looking 👀 Forward to work with you.',
        1000
      ]} wrapper="span" speed={50} style={{ fontSize: '1em', display: 'inline-block' }} repeat={Infinity}></TypeAnimation>  
           <hr className='border-0'/ >
           <button className='z-1 bg-gradient-to-r my-4  from-purple-400 to-blue-500 text-transparen text-xl md:text-lg md:my-4 px-4 md:px-6 transform hover:bg-purple-400 transition duration-300 hover:scale-110 py-3 md:py-2  text-white rounded-lg '><Link to="About" smooth={true} offset={-100} duration={500}>About me💁</Link></button>
          </div>
          <div className="w-96 md:w-56  md:mr-8 flex">
            <img src={hacker1} alt="" className='w-full'/>
          </div>
          </div>
         
        </div>
    
   </>
   
  )
}

export default HomePage