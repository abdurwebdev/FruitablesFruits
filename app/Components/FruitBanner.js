"use client"
import React from 'react'

const FruitBanner = () => {
  return (
    <>
    <div className='w-full h-[115vh] bg-[#FFB524] relative xl:h-[100vh] sm:h-[170vh] sm:mt-28 overflow-hidden'>
       <div className='flex flex-col xl:grid xl:grid-cols-2'>
        <div>
        <div>
            <h1 className='font-extrabold text-white text-5xl px-5 py-10 xl:text-7xl sm:text-7xl'>Fresh Exotic Fruits</h1>
        </div>
        <div>
            <h1 className='font-bold text-4xl  text-[#45595B] px-5 xl:text-6xl sm:text-5xl'>in Our Store</h1>
        </div>
        <div>
            <p className='py-3 text-[#45595B] px-5 xl:text-xl'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
        </div>
        <div className='px-5 xl:py-10 sm:px-10 '>
            <button className='px-10 py-3  xl:px-28 xl:py-5 border-none bg-white rounded-2xl hover:transition-colors hover:text-white hover:bg-[#81C408]'>BUY</button>
        </div>
        </div>
        <div>
        <div className='w-44 flex items-center justify-center xl:top-12 xl:left-[60vw] h-44 bg-white rounded-full absolute top-96 ml-5'>
                        <h1 className='font-bold text-4xl  text-[#45595B] px-5'>1$ KG</h1>
        </div>
        <div className='xl:px-12'>
            <img className='xl:w-[60vw]  sm:w-[60vw] sm:ml-32' src="https://png.pngtree.com/png-clipart/20230310/ourmid/pngtree-fresh-fruit-png-image_6642661.png" alt="" />
        </div>
        </div>
       </div>

    </div>
    
    
    </>
  )
}

export default FruitBanner