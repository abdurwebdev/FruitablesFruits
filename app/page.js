"use client"
import React, { useState } from 'react'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Card from './Components/Card'
import Basket from './Components/Basket'
import Basket2 from './Components/Basket2'
import Basket3 from './Components/Basket3'
import Slick from './Components/Slick'
import FruitBanner from './Components/FruitBanner'
import BestSeller from './Components/BestSeller'
import Oranges from './Components/Oranges'
import Tomato from './Components/Tomato'
import Banana from './Components/Banana'
import Apricot from './Components/Apricot'
import Customer from './Components/Customer'
import QualityServices from './Components/QualityServices'
import Certificate from './Components/Certificate'
import Product from './Components/Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer'
const page = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <div className="overfow-hidden">
    <Hero/>
    <Services/>
    <Card/>
    <div className='xl:h-[150vh]cd tw  grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-col3 xl:grid xl:grid-cols-4'>
        <div>
        <Basket/>
        </div>
        <div>
          <Basket2/>
        </div>
        <div>
          <Basket3/>
        </div>

    </div>
    <Slick/>
    <FruitBanner/>
    <div className=' h-[280vh] sm:h-[330vh] md:h-[500vh] xl:h-[450vh]'>
    <BestSeller/>
    </div>
   
    <div className='sm:gap-0 w-full  md:h-[170vh] h-[310vh] sm:overflow-hidden sm:h-[300vh] xl:h-[100vh] grid grid-cols-1 xl:grid xl:grid-cols-4 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2'>
      <div>
      <Oranges/>
      </div>
    <div>
      <Tomato/>
    </div>
    <div>
      <Banana/>
    </div>
    <div>
      <Apricot/>
    </div>
    </div>
    <div className='m-auto   gap-10   bg-[#F3F5F7] px-10 ml-3 rounded-xl grid grid-cols-1  md:grid md:grid-cols-2 xl:grid xl:grid-cols-4 md:overflow-hidden'>
     <div className='mt-16'>
     <Customer/>
     </div>
     <div className='md:mt-16 md:h-20'>
      <QualityServices/>
     </div>
     <div className='md:mt-16'>
      <Certificate/>
     </div>
     <div className='mb-16 md:mt-16'>
      <Product/>
     </div>
    </div>
    <div className='text-center mt-10'>
      <h1 className='text-2xl text-[#85C408] font-bold'>Our Testimonial</h1>
      <h1 className='text-4xl text-[#45595B] font-extrabold'>Our Client Saying!</h1>
    </div>
    <div className='m-auto w-[100vw] xl:w-[40vw] xl:h-[60vh] md:w-[40vw] md:h-[60vh] sm:w-[60vw] sm:h-[80vh]  h-56 rounded-xl  mt-12'>
      <div className='px-5'>
      <Slider {...settings}>
        {data.map((d)=>
        {
          return <>
          <div className='flex flex-col bg-[#F4F6F8] px-2 rounded-xl py-2'>
            <div>
              <h1 className='text-[#747D88]'>{d.para}</h1>
            </div>
            <hr />
            <div>
              <div className='flex items-center justify-between mt-5 gap-10'>
                <div className='flex'>
                  <div>
                    <img className='xl:w-[20vw] xl:h-[10vw] md:w-[20vw] md:h-[10vw] w-[140vw] h-[10vh] object-cover rounded-xl' src={d.img} alt="" />
                  </div>
                  <div>
                    <h1 className='text-xl font-bold text-[#455960]'>{d.head}</h1>
                    <h1 className='text-[#747D88]'>{d.h3}</h1>
                    <img className='w-[20vw]' src={d.starimg} alt="" />
                  </div>


                </div>
                <div>
                  <img className='w-52' src={d.quoteimg} alt="" />
                </div>
              </div>
            </div>
          </div>
          </>
        })}
        </Slider>
      </div>
    </div>
    <div className='mt-10 m-auto'>
      <Footer/>
    </div>
    </div>
    </>
  )
}
const data=[
  {
    para:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    img:`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    head:`Client`,
    h3:`Profession`,
    starimg:`https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png`,
    quoteimg:`https://www.pngall.com/wp-content/uploads/12/Quotes-Mark-Symbol-PNG-Image.png`
  },
  {
    para:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    img:`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    head:`Client`,
    h3:`Profession`,
    starimg:`https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png`,
    quoteimg:`https://www.pngall.com/wp-content/uploads/12/Quotes-Mark-Symbol-PNG-Image.png`
  },
  {
    para:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    img:`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    head:`Client`,
    h3:`Profession`,
    starimg:`https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png`,
    quoteimg:`https://www.pngall.com/wp-content/uploads/12/Quotes-Mark-Symbol-PNG-Image.png`
  },
  {
    para:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    img:`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    head:`Client`,
    h3:`Profession`,
    starimg:`https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png`,
    quoteimg:`https://www.pngall.com/wp-content/uploads/12/Quotes-Mark-Symbol-PNG-Image.png`
  },
  {
    para:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    img:`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    head:`Client`,
    h3:`Profession`,
    starimg:`https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png`,
    quoteimg:`https://www.pngall.com/wp-content/uploads/12/Quotes-Mark-Symbol-PNG-Image.png`
  },
  {
    para:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    img:`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    head:`Client`,
    h3:`Profession`,
    starimg:`https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png`,
    quoteimg:`https://www.pngall.com/wp-content/uploads/12/Quotes-Mark-Symbol-PNG-Image.png`
  }
]
export default page