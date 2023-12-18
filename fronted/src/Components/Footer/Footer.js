


import React from 'react'
import logo from '../../Images/Harsh__8_-removebg-preview.png'

const Footer = () => {
  return (
    <div>
        <div className="w-full h-28 flex items-center justify-between  bg-gray-100 text-white">
           <div className="w-24 ml-4 mr-20 ">
            <img src={logo} alt="" className='w-full' />
           </div>
           <div className="div mr-14">
              <p className='text-black font-light'>Made by harsh</p>
           </div>
           <div className="div w-36 mr-4">
            <ul className='flex'>
                <li className='text-black  mr-3 '><ion-icon name="logo-github"></ion-icon></li>
                <li className='text-black mr-3'><ion-icon name="logo-linkedin"></ion-icon></li>
                <li className='text-black'><ion-icon name="logo-whatsapp"></ion-icon></li>
            </ul>
           </div>
        </div>
    </div>
  )
}

export default Footer