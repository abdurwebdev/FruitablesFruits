"use client"
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <>
    {/* Hero Banner */}
    <div className='relative overflow-hidden'>
        <img className='h-[100vh] object-cover md:w-full xl:h-[90vh]  md:h-[200vh] md:bg-cover mg:bg-top' src="https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className='absolute top-0 px-5 py-16 md:left-32 md:w-full xl:left-24 xl:top-20'>
            <h1 className='font-[Raleway]  text-3xl text-[#7cf853] font-bold md:font-sans xl:text-5xl'>100% Organic Foods</h1>
            <h1 className='font-[Raleway]  text-4xl text-[#ffffff] font-bold md:text-7xl md:font-sans xl:text-7xl'>Organic Veggies & <br /> Fruits Foods</h1>
        </div>
        <div className=' xl:left-[-4vw] absolute px-5 py-20 top-28 flex md:px-40 md:top-48 xl:top-72   '>
            <input type="text"  className='border border-[#FFB524] w-52 h-12 rounded-3xl md:w-96 xl:w-64'/>
            <button className='border border-[#FFB524]  rounded-3xl absolute xl:left-96 bg-[#81C408] hover:transition-colors hover:bg-[#FFB524] w-32 h-12 left-[45vw]'>Submit Now</button>
        </div>
        <div className='xl:top-28 xl:left-[60vw] absolute top-[134vw]  w-[85vw] ml-6 h-[30vh] md:top-[63vw] md:w-96 md:left-64 '>
        <Slider {...settings} >
        <div >
          <img src="https://images.unsplash.com/photo-1610397962076-02407a169a5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" />
        </div>
      </Slider>
        </div>
    </div>
    
    </>
  )
}

export default Hero