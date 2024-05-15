"use client"
import Link from 'next/link'
import React from 'react'
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const page = () => {
  return (
    <>
    {/* Banner Start */}
    <div className='relative overflow-hidden '>
        <img className='md:h-[70vh] md:w-full ' src="https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute flex flex-col inset-0 items-center justify-center text-white'>
            <h1 className='text-5xl font-extrabold md:text-6xl xl:text-[10vw]   sm:text-[10vw]'>Contact</h1>
            <div className='flex space-x-1'>
            <Link href="/" className='text-[#ffffff] font-medium sm:text-3xl'>Home</Link>
            <Link href="#" className='text-[#ffffff] font-medium sm:text-3xl'>Pages</Link>
            <Link href="#" className='sm:text-3xl'>Contact</Link>
            </div>
            
        </div>
    </div>
    {/* Banner Ends */}
    {/* Touch Start */}
    <div className='m-auto w-[90vw] h-auto   mb-10 rounded-2xl mt-12 bg-[#F4F6F8]'>

   
    <div className='flex flex-col px-10 py-10'>
        <div className='text-center mb-4'>
                  <h1 className='font-bold sm:text-4xl md:text-5xl xl:text-6xl text-2xl text-[#81C408]'>Get in touch</h1>
        </div>
        <div className='text-center'>
                  <h1 className='font-normal text-[#747D88]'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.<Link href="#" className='font-medium text-[#81C408] '>Download Now.</Link> </h1>
        </div>
        <div className='flex items-center justify-center mt-10'>
          <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6065035931!2d-0.43124885956926756!3d51.52860700576551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1715693742209!5m2!1sen!2s" className='rounded-2xl sm:w-[80vw]' height={400}   ></iframe>
        </div>
        </div>
        {/* Two Container */}
        <div className='flex flex-col md:flex md:flex-row md:space-x-5'>
              <div>
                
                 
              <div className='mt-10 mb-5 space-y-8'>
              <input type="text" placeholder='Your Name' className='bg-[#FFFFFF] px-3 rounded-xl w-[100%] py-4' />
              <input type="text" placeholder='Enter Your Email' className='bg-[#FFFFFF] px-3 rounded-xl w-[100%] py-4' />
              <textarea rows={8} cols={25} placeholder='Your Message' className='bg-[#FFFFFF]  rounded-xl px-4 py-4 w-[100%]'></textarea>
              <button className='px-24 py-5  text-[#81C408] hover:transition-colors hover:text-white rounded-md font-bold border w-[100%] hover:bg-[#FFB524] border-[#FFB524]'>Submit</button>
              </div>
              </div>
              <div>
              <div className='flex flex-col space-y-9 mt-10 '>
                 <div className='flex space-x-8 items-center w-[100%] bg-[#FFFFFF] h-28 px-5 rounded-3xl'>
                    <div>
                        <CiLocationOn className='text-4xl text-[#81C408]'/>
                    </div>
                    <div className='flex flex-col w-64 l'>
                           <div>
                            <h1 className='font-extrabold text-2xl text-[#45595B]'>Address</h1>
                           </div>
                           <div>
                            <h1 className='font-normal  text-[#45595B]'>
                            123 Street New York.USA
                            </h1>
                           </div>
                    </div>
                 </div>
                 <div className='flex space-x-8 items-center w-[100%] bg-[#FFFFFF] h-28 px-5 rounded-3xl'>
                    <div>
                        <CiMail className='text-4xl text-[#81C408]'/>
                    </div>
                    <div className='flex flex-col '>
                           <div>
                            <h1 className='font-extrabold text-2xl text-[#45595B]'>Mail Us</h1>
                           </div>
                           <div>
                            <h1 className='font-normal  text-[#45595B]'>
                            info@example.com
                            </h1>
                           </div>
                    </div>
                 </div>
                 <div className='flex space-x-8 items-center w-[100%] bg-[#FFFFFF] h-28 px-5 rounded-3xl'>
                    <div>
                        <CiPhone className='text-4xl text-[#81C408]'/>
                    </div>
                    <div className='flex flex-col items-center'>
                           <div>
                            <h1 className='font-extrabold text-2xl text-[#45595B]'>Telephone</h1>
                           </div>
                           <div>
                            <h1 className='font-normal  text-[#45595B]'>
                            (+012) 3456 7890
                            </h1>
                           </div>
                    </div>
                 </div>
              </div>
              </div>
        </div>
    </div>
    </div>
    {/* Touch Ends */}
    </>
  )
}

export default page