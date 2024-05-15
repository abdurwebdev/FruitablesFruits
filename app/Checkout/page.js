"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    {/* Banner Start */}
    <div className='relative overflow-hidden '>
        <img className='md:h-[70vh] md:w-full ' src="https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute flex flex-col inset-0 items-center justify-center text-white'>
            <h1 className='text-5xl font-extrabold md:text-6xl xl:text-[10vw]   sm:text-[10vw]'>Checkout</h1>
            <div className='flex space-x-1'>
            <Link href="/" className='text-[#ffffff] font-medium sm:text-3xl'>Home</Link>
            <Link href="#" className='text-[#ffffff] font-medium sm:text-3xl'>Pages</Link>
            <Link href="#" className='sm:text-3xl'>Checkout</Link>
            </div>
            
        </div>
    </div>
    {/* Banner Ends */}
    {/* Grid Columns Start */}
    <div className='grid grid-cols-1 px-5 py-5 m-auto md:grid md:grid-cols-2  '>
        <div>
        <h1 className='mb-4  font-bold text-2xl text-[#747D88]'>Billing details</h1>
        <div className='md:w-96 xl:w-[45vw]'>  
        <div className='flex flex-col space-y-2'>
            <h1 className='text-[#747D88] font-medium'>First Name*</h1>
            <input type="text" className='rounded-md px-4 py-2 border border-[#44494fa0]' />
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-[#747D88] font-medium'>Last Name*</h1>
            <input type="text" className='rounded-md px-4 py-2 border border-[#44494fa0]' />
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-[#747D88] font-medium'>Company Name*</h1>
            <input type="text" className='rounded-md px-4 py-2 border border-[#44494fa0]' />
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-[#747D88] font-medium'>Address *</h1>
            <input type="text" className='rounded-md px-4 py-2 border border-[#44494fa0]' />
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-[#747D88] font-medium'>Town/City*</h1>
            <input type="text" className='rounded-md px-4 py-2 border border-[#44494fa0]' />
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-[#747D88] font-medium'>Country*</h1>
            <input type="text" className='rounded-md px-4 py-2 border border-[#44494fa0]' />
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-[#747D88] font-medium'>Postcode/Zip*</h1>
            <input type="text" className='rounded-md px-4 py-2 border border-[#44494fa0]' />
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-[#747D88] font-medium'>Mobile*</h1>
            <input type="text" className='rounded-md px-4 py-2 border border-[#44494fa0]' />
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-[#747D88] font-medium'>Email Address*</h1>
            <input type="text" className='rounded-md px-4 py-2 border border-[#44494fa0]' />
        </div>
        {/* Radio */}
        <div className='border-b flex items-start space-x-4 mt-5 mb-4  border-slate-500'>
            <div>
            <input type="radio" className="appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-[#81C408] checked:border-transparent focus:outline-none" />
            </div>
            <div>
                <h1 className='text-[#747D88] font-medium'>Create an account?</h1>
            </div>
        </div>
        <div className='border-b flex items-start mb-4 space-x-4  border-slate-500'>
            <div>
            <input type="radio" className="appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-[#81C408] checked:border-transparent focus:outline-none"/>
            </div>
            <div>
                <h1 className='text-[#747D88] font-medium'>Ship to a different address?</h1>
            </div>
        </div>
        {/* Radio Ends*/}
        <textarea name="opinion" id="" cols={35} rows={10} className=' px-3 py-2 rounded-md  border border-[#44494fa0]' placeholder='Order Notes (Optional)'></textarea>
        </div>
        </div>
        {/* Next Column */}
        <div>
            <div className='h-[50vh]  overflow-x-auto overflow-y-hidden md:overflow-hidden '>
        <div className='grid grid-cols-6 w-[170vw] md:w-[50vw] mt-6'>
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
         
          <h1 className='font-medium text-[#747D88] mt-2'>first</h1>
          
          </div>
          <div className='flex mt-16 gap-2 items-center'>
          
          <h1 className='font-medium text-[#747D88] mt-2'>One</h1>
          
          </div>
          <div className='flex mt-16 gap-2 items-center'>
          
          <h1 className='font-medium text-[#747D88] mt-2'>Two</h1>
          
          </div>
          
        </div>
        <div>
          <h1 className='font-bold text-[#747D88]'>Total</h1>
          <h1 className='mb-2 h-20 w-20 mt-8 font-medium text-[#747D88]'>2.99 $</h1>
          <h1 className='mb-2 h-20 w-20 font-medium text-[#747D88]'>2.99 $</h1>
          <h1 className='mb-2 h-20 w-20 font-medium text-[#747D88]'>2.99 $</h1>
         
        </div>
        
        </div>
        
        </div>
        <div className='flex items-center justify-end'>
                       <div className='flex space-x-4 mt-12 mb-12' >
                        <h1 className='font-medium text-[#455960]'>Subtotal</h1>
                        <div className='border border-t  border-b border-l-0 border-r-0 border-[#44494fa0]'>
                            <h1 className='font-medium text-[#455960]'>$414.00</h1>
                        </div>
                       </div>
          </div>
          <div className='flex m-auto items-center justify-center space-x-7 mt-12 mb-12 border-l-0 border-r-0 border-b border-t py-10'>
            <div className='flex items-center justify-center'>
                <h1 className='font-medium text-[#747D88]'>Shipping</h1>
            </div>
            <div className='flex flex-col'>
                    <div><input type="radio" className="appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-[#81C408] checked:border-transparent focus:outline-none" /></div>
                    <div><input type="radio" className="appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-[#81C408] checked:border-transparent focus:outline-none" /></div>
                    <div><input type="radio"  className="appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-[#81C408] checked:border-transparent focus:outline-none"/></div>
            </div>
            
          </div>
          <div className='flex items-center justify-end mt-12 mb-12 border-l-0 border-r-0 border-b border-t py-5'>
                       <div className='flex space-x-4 mt-12 mb-12' >
                        <h1 className='font-medium text-[#747D88]'>Total</h1>
                        <div>
                            <h1 className='border border-t font-medium text-[#747D88]  border-b border-l-0 border-r-0 border-[#44494fa0]'>$414.00</h1>
                        </div>
                       </div>
          </div>
          {/* Ends */}
          <div className='flex flex-col'>
            <div>
                <div className='flex space-x-4 mt-5 mb-5'>
                    <div>
                        <input type="radio" name="" id="" className="appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-[#81C408] checked:border-transparent focus:outline-none" />
                    </div>
                    <div>
                        <h1 className='text-[#747D88] font-medium'>Direct Bank Transfer</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#747D88] font-normal'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</h1>
                </div>
            </div>
          </div>
          {/* Ends */}
          <div className='flex space-x-4 mt-5 mb-5'>
                 <div>
                    <input type="radio" name="" id="" className="appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-[#81C408] checked:border-transparent focus:outline-none" />
                 </div>
                 <div>
                    <h1 className='text-[#747D88] font-medium'>Check Payments</h1>
                 </div>
          </div>
          <div className='flex space-x-4 mt-5 mb-5'>
                 <div>
                    <input type="radio" name="" id="" className="appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-[#81C408] checked:border-transparent focus:outline-none" />
                 </div>
                 <div>
                    <h1 className='text-[#747D88] font-medium'>Cash On Delivery</h1>
                 </div>
          </div>
          <div className='flex space-x-4 mt-5 mb-5'>
                 <div>
                    <input type="radio" name="" id="" className="appearance-none w-5 h-5 rounded-md border border-gray-400 checked:bg-[#81C408] checked:border-transparent focus:outline-none" />
                 </div>
                 <div>
                    <h1 className='text-[#747D88] font-medium'>Paypal</h1>
                 </div>
          </div>
          {/* Ends */}
          {/* Start */}
          <div className='mt-5 mb-5 m-auto flex items-center justify-center'>
            <div>
            <button className='px-36 py-5  text-[#81C408] hover:transition-colors hover:text-white rounded-md font-bold border hover:bg-[#FFB524] border-[#FFB524]'>PLACE ORDER</button>
            </div>
            
          </div>
          {/* Ends */}
        </div>
        {/* Next Column Ends*/}
    </div>
    {/* Grid Columns Ends */}
    </>
  )
}

export default page