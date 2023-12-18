

import React, { useState,useEffect } from 'react'
// import hacker1 from './hacker1.png'
// import logo from './logo2 (1).png'
import {Link} from 'react-scroll'
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/Harsh__7_-removebg-preview.png'


const Navbar = () => {


const[open,setOpen]=useState(false)
const [isMdScreen, setIsMdScreen] = useState(false);
  const navigate = useNavigate(); 

  
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768); // Adjust the threshold as needed
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const handleNavigation = (to) => {
    if (isMdScreen) {
      navigate(to);
    } else {
      window.location.href = `#${to}`;
    }
    setOpen(false);
  };


  return (
    <div className=''>
           <nav className='fixed md:fixed text-white  w-screen bg-gray-200  z-50 shadow-md sm:shadow-none  ' >
            <div className="md:flex font-abc   md:justify-between flex items-center   md:items-center pl-6 md:pl-0 ">
              <div className="ml-0  md:ml-32 w-24 ">
              <img src={logo} alt="Logo" className={`w-full md:mr-96 f ${open ? "hidden" :"block"}`}/>
              </div>
               <div className={`md:hidden text-3xl  absolute  right-8 top-6 ${open ? "text-white" :"text-black"}`} onClick={()=>{setOpen(!open)}}>
               <ion-icon name={`${open ? "close-circle-sharp" :"menu-outline"}`}></ion-icon>
               </div>

 

           <ul className={` md:flex md:items-center text-xl md:text-lg md:text-gray-500 font-semibold md:bg-white md:static md:mr-72 absolute transition-all duration-500 pl-9 my-32px md:pb-0 md:pl-0 top-0 left-0 py-6 md:py-0 sm:w-screen w-screen h-screen sm:h-screen md:w-96 md:h-0 bg-black z-[-1] md:z-[0] text-white ${open ? 'opacity-100' : 'left-[-650px] flex-100'}`}>
           <div className="md:w-100 my-8 md:mr-4 flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500  hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0 md:pr-0 md:pl-0 md:pb-0 w-36"><p className='md:hidden mr-2'><ion-icon name="home-outline"></ion-icon></p> <li className='mr-8 my-2 md:mr-1 md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 transition duration-300 md:hover:scale-110 '><Link to="Home"  smooth={isMdScreen} offset={-100} duration={500}  onClick={() => handleNavigation('home')}>Home</Link></li></div>
              <div className=" md:w-100 my-8 md:mr-4  flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500 hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0 md:pr-0 md:pl-0 md:pb-0  w-36  "><p className='md:hidden mr-2 md:mr-0'><ion-icon name="person-outline"></ion-icon></p><li className={`md:mr-1 mr-8 my-2 transform md:hover:text-purple transition md:hover:text-purple-400 duration-300 md:hover:scale-110 hover:cursor-pointer `}><Link to="About"  smooth={isMdScreen} offset={-100} duration={500}  onClick={() => handleNavigation('About')}>About</Link></li></div>
           <div className=" md:w-100 my-8 md:mr-4  flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500  hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0 md:pr-0 md:pl-0 md:pb-0   w-36 "><p className='md:hidden mr-2 md:mr-0'><ion-icon name="bulb-outline"></ion-icon></p><li className="mr-8 my-2 md:mr-1  md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 md:transition duration-300 md:hover:scale-110"><Link to="Skills" smooth={isMdScreen} offset={-100} duration={500}  onClick={() => handleNavigation('Skills')}>Skills</Link></li></div>
              <div className="my-8 md:w-100 md:mr-4  flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500  hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0 md:pr-0 md:pl-0 md:pb-0   w-36 "><p className='md:hidden mr-2'><ion-icon name="documents-outline"></ion-icon></p><li className='mr-8 my-2 md:mr-1 md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 md:transition duration-300 md:hover:scale-110'><Link to="Projects" smooth={isMdScreen} offset={-100} duration={500} onClick={() => handleNavigation('Projects')}>Projects</Link></li></div>
               <div className="my-8 md:w-100 md:mr-4  flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500  hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0  w-36"><p className='md:hidden mr-2'><ion-icon name="bag-handle-outline"></ion-icon></p><li className='mr-8 my-2 md:mr-1 md:py-0 md:my-0 hover:cursor-pointer  transform md:hover:text-purple-400 transition duration-300 md:hover:scale-110 '><Link to="Education" smooth={isMdScreen} offset={-100} duration={500}  onClick={() => handleNavigation('Education')}>Education</Link></li></div>
              <button className='transform bg-gradient-to-r from-purple-400 to-blue-500 md:hover:bg-purple-400  bg-black text-white md:px-5 text-sm md:hover:scale-130 transition duration-500 cursor-pointer  py-2 pr-4 pl-4 pb-2 w-36 rounded'><Link to="Contact" smooth={true} offset={-100} duration={500}>Contact</Link></button>

            </ul>
            </div>
           
          </nav>
      
    </div>
  )}

  export default Navbar