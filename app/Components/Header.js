"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillProfile, AiOutlineArrowDown, AiOutlineMenu, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
const Header = () => {
  const [Open, setOpen] = useState(false)
  const toggleMenu = () =>
    {
      setOpen(!Open);
    }
    const [Menu, setMenu] = useState(false);
    const showMenu = () =>
      {
        setMenu(!Menu);
      }
  return (
    <>
    <div className='sm:w-full  h-[15vh] md:h-[20vh] lg:h-[20vh] bg-white flex items-center justify-between text-[#81C408]'>
      <div className='sm:hidden md:hidden lg:h-[10vh] lg:bg-[#81C408] lg:absolute lg:top-0'></div>
      <div className=' mr-28'>
        <h1 className='font-[Raleway]  xl:font-sans md:font-sans px-3 lg:px-[4vw] font-bold text-2xl md:px-36 md:font-extrabold md:text-4xl'>Fruitables</h1>
      </div>
      {/* Menu Button */}
      <div className='mr-5 md:mr-36 lg:mr-10 '>
        <button className={`w-16 h-10 rounded-xl bg-white ${Open ? 'open' :''} border border-slate-500 `} onClick={toggleMenu} >
          <AiOutlineMenu className='ml-5 text-2xl font-extrabold'/>
        </button>
      </div>
     
    </div>
     {/* MenuSlider */}
     {Open &&(
     <div  className='xl:z-[999] z-[999] w-full h-[60vh] md:h-[100vh] xl:h-[80vh] bg-white text-slate-500  flex flex-col  transition-transform  px-8 absolute '>
      <div className='space-y-5 md:px-36 xl:px-10'>
        <div>
        <Link href="/">Home</Link>
        </div>
        <div>
        <Link href="/Shop">Shop</Link>
        </div>
        <div>
        <Link href="/ShopDetail">Shop Details</Link>
        </div>
        <div className='flex items-center '>
        <Link href="#">Pages</Link>
        <button className={`${Menu ? 'menu' :''}`} onClick={showMenu}><AiOutlineArrowDown/></button>
        </div>
           
           
           
        {Menu && (  
            <div className='space-y-3'>
              <div>
           <Link href="/Cart">Cart</Link>
           </div>
           <div>
           <Link href="/Checkout">Check Out</Link>
           </div>
           <div>
           <Link href="/Testimonials">Testimonials</Link>
           </div>
           <div>
           <Link href="/Error">404 Page</Link>
           </div>
           
           </div> 
          )}
           <div>
            <Link href="/Contact">Contact</Link>
           </div>
            
            {/* Icons */}
          <div className='space-x-3 text-[#81C408] text-3xl'>
            <button className='px-2 py-2 border border-[#FFB524] rounded-full hover:bg-[#FFB524] transition-colors'>
              <AiOutlineSearch/>
            </button>
            <button>
              <AiOutlineShopping className='hover:text-[#82c408c6]'/>
            </button>
            <button>
              <AiFillProfile className='hover:text-[#82c408c6]'/>
            </button>
          </div>
          {/* Icons End */}
          
          
            
          
          
           
          
        
      </div>
  
     </div>
     )}
    </>
  )
}

export default Header