"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
const page = () => {
  const [first, setFirst] = useState(0)
  const [One, setOne] = useState(0)
  const [Two, setTwo] = useState(0)
  const increment = () =>
    {
             if(first>=0)
              {
                setFirst(first+1);
              }
    }
  const decrement = () =>
    {
         if (first>0)
          {
            setFirst(first-1)
          }
    }
    const increment1 = () =>
      {
               if(One>=0)
                {
                  setOne(One+1);
                }
      }
    const decrement1 = () =>
      {
           if (One>0)
            {
              setOne(One-1)
            }
      }
      const increment2 = () =>
        {
                 if(Two>=0)
                  {
                    setTwo(Two+1);
                  }
        }
      const decrement2 = () =>
        {
             if (Two>0)
              {
                setTwo(Two-1)
              }
        }
  return (
    <>
    {/* Banner Start */}
    <div className='relative overflow-hidden '>
        <img className='md:h-[70vh] md:w-full ' src="https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute flex flex-col inset-0 items-center justify-center text-white'>
            <h1 className='text-5xl font-extrabold md:text-6xl xl:text-[10vw]   sm:text-[10vw]'>Cart</h1>
            <div className='flex space-x-1'>
            <Link href="/" className='text-[#ffffff] font-medium sm:text-3xl'>Home</Link>
            <Link href="#" className='text-[#ffffff] font-medium sm:text-3xl'>Pages</Link>
            <Link href="#" className='sm:text-3xl'>Cart</Link>
            </div>
            
        </div>
    </div>
    {/* Banner Ends */}
    {/* Items Start */}
    <div className='h-[50vh]  overflow-x-auto xl:h-[70vh] '>
      <div className='grid grid-cols-6 w-[170vw] mt-6'>
        <div>
          <div className='px-3'>
            <div>
            <h1 className='mb-2 font-bold text-[#747D88]'>Products</h1>
            </div>
          
          <img className='mb-2 h-20 w-20   rounded-full' src="https://images.unsplash.com/photo-1561058325-8c99b449e3b6?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='mb-2 h-20 w-20 rounded-full' src="https://images.unsplash.com/photo-1617130094141-532436117aa1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='mb-2 h-20 w-20 rounded-full' src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          
          
        </div>
        <div>
          <h1 className='mb-2 font-bold text-[#747D88]'>Name</h1>
          <h1 className='mb-2 h-20 w-20 mt-8 font-medium text-[#747D88]'>Big Banana</h1>
          <h1 className='mb-2 h-20 w-20 font-medium text-[#747D88]'>Potatoes</h1>
          <h1 className='mb-2 h-20 w-20 font-medium text-[#747D88]'>Awesome Brocoli</h1>
        </div>
        <div>
          <h1 className='font-bold text-[#747D88]'>Price</h1>
          <h1 className='mb-2 h-20 w-20 mt-8 font-medium text-[#747D88]'>2.99 $</h1>
          <h1 className='mb-2 h-20 w-20 font-medium text-[#747D88]'>2.99 $</h1>
          <h1 className='mb-2 h-20 w-20 font-medium text-[#747D88]'>2.99 $</h1>
        </div>
        <div>
          <h1 className='font-bold text-[#747D88]'>Quantity</h1>
          <div className='flex mt-5 gap-2  '>
          <button onClick={increment} className='w-10 h-10 rounded-full bg-[#F4F6F8]'>+</button>
          <h1 className='font-medium text-[#747D88] mt-2'>{first}</h1>
          <button onClick={decrement} className='w-10 h-10 rounded-full bg-[#F4F6F8]'>-</button>
          </div>
          <div className='flex mt-16 gap-2 items-center'>
          <button onClick={increment1} className='w-10 h-10 rounded-full bg-[#F4F6F8]'>+</button>
          <h1 className='font-medium text-[#747D88] mt-2'>{One}</h1>
          <button onClick={decrement1} className='w-10 h-10 rounded-full bg-[#F4F6F8]'>-</button>
          </div>
          <div className='flex mt-16 gap-2 items-center'>
          <button onClick={increment2} className='w-10 h-10 rounded-full bg-[#F4F6F8]'>+</button>
          <h1 className='font-medium text-[#747D88] mt-2'>{Two}</h1>
          <button onClick={decrement2} className='w-10 h-10 rounded-full bg-[#F4F6F8]'>-</button>
          </div>
          
        </div>
        <div>
          <h1 className='font-bold text-[#747D88]'>Total</h1>
          <h1 className='mb-2 h-20 w-20 mt-8 font-medium text-[#747D88]'>2.99 $</h1>
          <h1 className='mb-2 h-20 w-20 font-medium text-[#747D88]'>2.99 $</h1>
          <h1 className='mb-2 h-20 w-20 font-medium text-[#747D88]'>2.99 $</h1>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[#747D88]'>Handle</h1>
          <button className='mt-6' ><AiFillCloseCircle className='w-7 h-7 text-red-600'/></button>
          <button className='mt-16' ><AiFillCloseCircle className='w-7 h-7 text-red-600'/></button>
          <button className='mt-14' ><AiFillCloseCircle className='w-7 h-7 text-red-600'/></button>
        </div>
      </div>
    </div>
    {/* Items Ends */}
    {/* Coupon Code Starts */}
    <div className='grid grid-cols-1 px-11 mt-9 gap-10 mb-9'>
      <div className='xl:flex xl:gap-12 sm:flex sm:gap-14 space-y-6'>
        <div>
          <input type="text" placeholder='Coupon Code' className='px-3 py-3 border-b-2 rounded-xl border-t-0 border-l-0 border-r-0' />
        </div>
        <div>
          <button className='px-4 py-4 text-[#81C408] hover:transition-colors hover:text-white rounded-full font-bold border hover:bg-[#FFB524] border-[#FFB524]'>Apply Coupon</button>
        </div>
        </div>
        <div className='m-auto xl:mr-0 h-96 w-72 sm:mr-0 bg-[#F4F6F8] rounded-2xl px-4 py-4 '>
               <h1 className='font-extrabold text-4xl text-[#45595B]'>Cart <span className='font-semibold text-[#45595B]'>Total</span></h1>
               <div className='flex items-center justify-between mb-5 mt-5'>
                       <div>
                        <h1 className='font-bold text-xl text-[#45595B]'>Subtotal:</h1>
                       </div>
                       <div>
                        <h1 className='font-medium text-[#45595B]'>$96.00</h1>
                       </div>
               </div>
               <div className='flex items-center justify-between mb-5 mt-5'>
                       <div>
                        <h1 className='font-bold text-xl text-[#45595B]'>Shipping:</h1>
                       </div>
                       <div>
                        <h1 className='font-medium text-[#45595B]'>Flat rate: $3.00 </h1>
                       </div>
               </div>
               <div className='flex items-center justify-between border-b mb-5 mt-5 border-b-[#45595B]'>
                       <div>
                        <h1 className='font-bold text-xl text-[#45595B]'>Ukraine:</h1>
                       </div>
                       <div>
                        <h1 className='font-medium text-[#45595B]'>Flat rate: $3.00 </h1>
                       </div>
               </div>
               <div className='flex items-center mb-5 mt-5 justify-between border-b border-b-[#45595B]'>
                <div>
                  <h1 className='font-bold text-xl text-[#45595B]'>Total</h1>
                </div>
                <div>
                  <h1 className='font-medium text-[#45595B]'>$99.00</h1>
                </div>
               </div>
               <div className='flex flex-start mb-5 mt-5'>
                <div>
                  <button className='px-4 py-4 text-[#81C408] hover:transition-colors hover:text-white rounded-full font-bold border hover:bg-[#FFB524] border-[#FFB524]'>PROCEED CHECKOUT</button>
                </div>
               </div>
        </div>
    </div>
    {/* Coupon Code Ends */}
    </>
  )
}

export default page