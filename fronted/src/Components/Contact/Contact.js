


import instagramc from '../../Images/instagram.png'
// import location from './location.png'
import linkedinc from '../../Images/linkedinc.png'
import githubc from '../../Images/githubc.png'
import React, { useState } from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const url=process.env.Base_Url

const Contact = () => {

  const [data,setData]=useState({email:" ",name:" ",message:" "})

  const submitHandler=async()=>{

    const response = await fetch("http://localhost:4000/new", {
      method: "POST", 
     
      headers: {
        "Content-Type": "application/json",
      
      },
    
      body: JSON.stringify({email:data.email,name:data.name,message:data.message}), 
    });
     await response.json(); 

     toast.success('Message sent Successfully', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 7000,
    });
    
  }


  

  const onchange=(e)=>{

    setData({...data, [e.target.name]:e.target.value})
  }



  return(
 
    <div className=''>
    <h1 className='ml-12 md:ml-32 text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-300 text-transparent bg-clip-text'>Contacts 📞</h1>
    <div className="div  my-8 w-full md:flex md:justify-around bg fl p-4" >
      
      <div className="div flex flex-col w-full">
        <h1 className="text-2xl font-bold ml-4 md:ml-32 text-gray-400  ">Reach Me Out 🤙</h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col md:w-2/6 w-78  md:ml-32 my-5   ">

            <input type="text" name="name" required={true}  onChange={onchange} value={data.name} placeholder='Enter Your Name' className='border-4 w-100 border-black text-black outline-none mb-6 p-4 bg-white rounded-xl ' />

            <input type="email" name="email"  required={true} id='email' onChange={onchange} value={data.email} placeholder='Enter Your email' className=' w-100 outline-none border-4 border-black bg-white text-black mb-6 p-4 rounded-2xl' />
            <textarea  id="message"  value={data.message} onChange={onchange} name="message" cols="30" rows="5" className='outline-none border-4 w-100 border-black text-black bg-gray-200 mb-6 p-4 rounded-2xl' placeholder='your message '></textarea>
            <button type="submit" className=' p-2 w-32 rounded-full text-mdtransition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300  text-white'>Send🚀</button>
         
          </div>
        </form>
      </div>

      <div className="my-14 mr-72">

<div className="flex items-center">
<div className="bg-black p-2 pl-3 w-10 rounded-full mb-4 mr-4 text-white">
         @
        </div>
        <h3 className='text-white'>hsatpute38@gmail.com</h3>
</div>
        
        <div className="flex my-14 items-center">
        <div className="bg-black mr-2 w-10 p-2 rounded-full">
        📌
          {/* <img src={location} alt=""  className='w-100'/> */}
        </div>
        <h3 className='text-white'>Nagpur</h3>
        </div>
      

        <div className="flex items-center my-24">
          <div className="bg-blac rounded-full  w-12 mr-2">
           <img src={instagramc} alt="" className='w-100' />
          </div>
          <div className="bg-blac rounded-full w-12 mr-2">
           <img src={linkedinc} alt="" />
          </div>
          <div className="bg-blac rounded-full  w-12 mr-2">
           <img src={githubc} alt="" />
          </div>
        </div>
      </div>

    </div>
  </div>

  )
}
 





export default Contact