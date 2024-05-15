"use client"
import Link from 'next/link';
import React from 'react'
import {  AiOutlineLinkedin, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import { BsFacebook,BsYoutube,BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <>
    <div className='bg-[#45595B] h-[200vh] xl:h-[100vh] md:h-[150vh] '>
       <div className='grid grid-cols-1'>
             <div className='mt-10 px-8'>
                <h1 className='text-3xl font-bold text-[#7EBF0C]'>Fruitables</h1>
             </div>
             <div className='px-8'>
                <h1 className='text-2xl text-[#FFB524]'>Fresh products</h1>
             </div>
             <div className='px-8 flex mt-3 relative  '>
                <input type="text" placeholder='Your Email' className=' sm:w-[70vw] xl:py-5 rounded-3xl px-4 py-4  ' />
                <button className='bg-[#7EBF0C] rounded-3xl px-7 absolute left-60 py-4 sm:left-[60vw] xl:py-5 md:left-[65vw]'>Subscribe</button>
             </div>
             <div className='mt-'>
                <div className='flex items-center justify-right gap-4 text-[#FFB524] px-8 mt-5'>
                    
                    <div className='px-3 py-3 border bg-[#45595B] text-3xl hover:transition-colors hover:bg-[#FFB524] hover:text-black rounded-full border-[#FFB524] '><AiOutlineTwitter /></div>
                    <div className='px-3 py-3 border bg-[#45595B] text-3xl hover:transition-colors hover:bg-[#FFB524] hover:text-black rounded-full border-[#FFB524] '><BsFacebook/> </div>
                    <div className='px-3 py-3 border bg-[#45595B] text-3xl hover:transition-colors hover:bg-[#FFB524] hover:text-black rounded-full border-[#FFB524] '><BsYoutube/></div>
                    <div className='px-3 py-3 border bg-[#45595B] text-3xl hover:transition-colors hover:bg-[#FFB524] hover:text-black rounded-full border-[#FFB524] '><BsLinkedin/></div>
                </div>
             </div>
       </div>
       {/* Links */}
       <div className='grid grid-cols-1 xl:grid xl:grid-cols-4 md:grid md:grid-cols-2'>
                    <div className='px-8 mt-5'>
                     <h1 className='mt-2 text-2xl text-white font-bold'>Why People Like us!</h1>
                     <h1 className='mt-1 text-[#A2ACAD]'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</h1>
                     <button className='mt-2 border border-[#FFB524] px-3 py-2 rounded-full text-[#7EBF0C] hover:transition-colors hover:bg-[#FFB524] font-bold hover:text-white'>Read More</button>
                    </div>
                    <div className='px-8 mt-7 flex flex-col space-y-2'>
                     <h1 className='text-2xl text-white font-bold'>Shop Info</h1>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>About Us</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>Contact Us</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>Privacy Policy</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>Terms & Condition</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>Return Policy</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>FAQs & Help</Link>
                    </div>
                    <div className='px-8 mt-7 flex flex-col space-y-2'>
                     <h1 className='text-2xl text-white font-bold'>Account</h1>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>My Account</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>Shop details</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>Shopping Cart</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>TWishlist</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>Order History</Link>
                     <Link href="#" className='mt-1 text-[#A2ACAD]'>International Orders</Link>
                    </div>
                     <div className='flex flex-col space-y-2 px-8 mt-7'>
                     <h1 className='text-2xl text-white font-bold'>Contact</h1>
                     <h1 className='mt-1 text-[#A2ACAD]'>Address: 1429 Netus Rd, NY 48247</h1>
                     <h1 className='mt-1 text-[#A2ACAD]'>Phone: +0123 4567 8910</h1>
                     <h1 className='mt-1 text-[#A2ACAD]'>Payment Accepted</h1>
                     <img src="https://themewagon.github.io/fruitables/img/payment.png" alt="" />
                     </div>
                    
       </div>     
       <div className='flex items-center flex-col justify-center mt-7 '>
                        <div className='flex'>
                           <h1>&copy;</h1>
                           <Link href="#" className='font-semibold text-[#7EBF0C]'>Your Site Name</Link>
                           <h1 className='text-[#A2ACAD] '>,All right reserved.</h1>
                        </div>
                        <div className='flex mt-7 xl:mt-2'>
                           <div className='flex'>
                           <h1 className='text-[#A2ACAD] '>Designed By</h1>
                           <Link href="#" className='font-semibold text-[#7EBF0C]'>HTML</Link>
                           <h1 className='text-[#A2ACAD] '>Distributed By</h1>
                           <Link href="#" className='font-semibold text-[#7EBF0C]'>ThemeWagon</Link>
                           </div>
                        </div>
                     </div>  
       {/* Links End */}
    </div>
    </>
  )
}

export default Footer