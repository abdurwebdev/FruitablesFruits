"use client"
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
     <div className='relative '>
        <img className='md:h-[70vh] md:w-full' src="https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute flex flex-col inset-0 items-center justify-center text-white'>
            <h1 className='text-5xl font-extrabold md:text-6xl xl:text-[10vw]  sm:text-5xl sm:text-[20vw]'>Testimonials</h1>
            <div className='flex space-x-1'>
            <Link href="/" className='text-[#ffffff] font-medium sm:text-3xl'>Home</Link>
            <Link href="#" className='text-[#ffffff] font-medium sm:text-3xl'>Pages</Link>
            <Link href="#" className='sm:text-3xl'>Testimonial</Link>
            </div>
            
        </div>
    </div>
    <div className='text-center mt-10 '>
      <h1 className='text-2xl text-[#85C408] font-bold'>Our Testimonial</h1>
      <h1 className='text-4xl text-[#45595B] font-extrabold'>Our Client Saying!</h1>
    </div>
    <div className='m-auto mb-16 w-[100vw] xl:w-[40vw] xl:h-[60vh] md:w-[40vw] md:h-[60vh] sm:w-[60vw] sm:h-[80vh]  h-56 rounded-xl  mt-12'>
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
      quoteimg:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIiQXV0_H_45jsEc8KXRlvTsPDr4jrIyUlimgjZXPJw&s`
    }
  ]
export default page