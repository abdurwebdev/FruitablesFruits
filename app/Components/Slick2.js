"use client"
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Slick2 = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        
      };
  return (
    <>
    <div className='mt-10 ml-[-8vw] w-full h-[90vh] xl:mt-0 sm:w-[50vw]  '>
        <div className='m-auto slider-container xl:ml-[38vw] sm:w-full sm:ml-[30vw] md:w-[30vw] md:ml-[43vw]'>
        <Slider {...settings}>
            {data.map((d)=>(
                <div className='border border-[#81C408]  rounded-2xl mb-7 hover:shadow-2xl'>
                    <div>
                        <img src={d.img} alt="" className='rounded-t-2xl w-96 bg-cover h-44' />
                    </div>
                    <div className='flex flex-col items-center justify-center mt-5'>
                        <p className='font-bold text-3xl' >{d.name}</p>
                        <p className='text-center'>{d.review}</p>
                        <button className='px-4 border hover:transition-colors hover:bg-[#FFB524] font-bold text-[#81C408] hover:text-white border-[#81C408] py-5 rounded-3xl mb-10 mt-5 flex items-center justify-center'><AiOutlineShoppingCart/>Add To Cart</button>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
        
    </div>
    
    </>
  )
}
const data=[
    {
        img:`https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name:`Mix Fruits`,
        review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deleniti suscipit tempora ex obcaecati aspernatur dolores laudantium quam sunt! Molestia`,
        price:`$4.99`
    },
    {
        img:`https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name:`Oranges`,
        review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deleniti suscipit tempora ex obcaecati aspernatur dolores laudantium quam sunt! Molestia`,
        price:`$4.99`
    },
    {
        img:`https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name:`Kiwi`,
        review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deleniti suscipit tempora ex obcaecati aspernatur dolores laudantium quam sunt! Molestia`,
        price:`$4.99`
    },
    {
        img:`https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name:`Banana`,
        review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deleniti suscipit tempora ex obcaecati aspernatur dolores laudantium quam sunt! Molestia`,
        price:`$4.99`
    },
    {
        img:`https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name:`Mix Berries`,
        review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deleniti suscipit tempora ex obcaecati aspernatur dolores laudantium quam sunt! Molestia`,
        price:`$4.99`
    },
    {
        img:`https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name:`Special Orange`,
        review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deleniti suscipit tempora ex obcaecati aspernatur dolores laudantium quam sunt! Molestia`,
        price:`$4.99`
    },
    {
        img:`https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name:`Strawberry`,
        review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deleniti suscipit tempora ex obcaecati aspernatur dolores laudantium quam sunt! Molestia`,
        price:`$4.99`
    },
    {
        img:`https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        name:`Orange Juice`,
        review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deleniti suscipit tempora ex obcaecati aspernatur dolores laudantium quam sunt! Molestia`,
        price:`$4.99`
    },
]
export default Slick2