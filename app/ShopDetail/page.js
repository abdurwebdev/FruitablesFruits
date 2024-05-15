"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Feature from '../Components/Feature'
import Feature2 from '../Components/Feature2'
import Feature3 from '../Components/Feature3'
import { AiOutlineApple, AiOutlineShoppingCart } from 'react-icons/ai';
import Slick from '../Components/Slick'
import Slick2 from '../Components/Slick2'
import Footer from '../Components/Footer'
const page = () => {
    const [inc, setInc] = useState(0)
    const increase = () =>
        {
            if(inc>=0)
                {
                    setInc(inc+1);
                }
        }
    const decrease = () =>
        {
            if(inc>=1)
                {
                    setInc(inc-1);
                }
        }
  return (
    <>
    {/* Banner Start */}
    <div className='relative '>
        <img className='md:h-[70vh] md:w-full' src="https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute flex flex-col inset-0 items-center justify-center text-white'>
            <h1 className='text-5xl font-extrabold md:text-6xl xl:text-[10vw]   sm:text-[10vw]'>Shop Details</h1>
            <div className='flex space-x-1'>
            <Link href="/" className='text-[#ffffff] font-medium sm:text-3xl'>Home</Link>
            <Link href="#" className='text-[#ffffff] font-medium sm:text-3xl'>Pages</Link>
            <Link href="#" className='sm:text-3xl'>Shop Details</Link>
            </div>
            
        </div>
    </div>
    {/* Banner Ends */}
    {/* Grid System Start */}
    <div className='grid grid-cols-1 xl:grid xl:grid-cols-3  xl:h-[105vh] '>
    {/* Image Start */}
    <div className=' mt-5 m-auto'>
            <img className='h-72 w-72 sm:w-[75vw] sm:h-[90vh] sm:mt-20 rounded-xl border md:w-[500px] xl:h-[60vh] xl:ml-10 xl:w-[60vw] md:[h-300px] md:ml-5 border-[#747D88]' src="https://images.unsplash.com/photo-1583663848850-46af132dc08e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    {/* Image Ends */}
    {/* Heading Starts */}
    <div className='ml-12 mt-4 sm:ml-20 xl:mt-28 md:m-auto xl:ml-14 '>
        <h1 className='font-extrabold text-2xl text-[#45595B]'>Brocoli</h1>
        <h1 className=' text-xl text-[#45595B]'>Category: Vegetables</h1>
        <h1 className='font-extrabold text-2xl text-[#45595B]'>3,35 $</h1>
        <img className='h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
        <h1 className=' text-xl text-[#45595B] mb-3'>The generated Lorem Ipsum is therefore always free  from repetition injected humour, or non- characteristic words etc.</h1>
        <h1 className=' text-xl text-[#45595B]'>Susp endisse ultricies nisi vel quam suscipit . Sabertooth peacock flounder; chain pickerel  hatchetfish, pencilfish snailfish1</h1>   
        <div className='flex items-center justify-start gap-2 mt-2 '>
        <button className='px-3 py-2 w-10 h-10 rounded-full bg-[#F4F6F8]' onClick={increase}>+</button>
        <h1>{inc}</h1>
        <button className='px-3 py-2 w-10 h-10 rounded-full bg-[#F4F6F8]' onClick={decrease}>-</button>
        </div>
        <div className='mt-3' >
        <button className='flex items-center border rounded-full border-[#FFB524] px-5 py-3 text-xl font-bold text-[#81C408] hover:bg-[#FFB524] hover:transition-colors'><AiOutlineShoppingCart/>Add To Cart</button>
        </div>
    </div>

    {/* Heading Ends */}
    <div>
    <div className='flex ml-5 mb-5 mt-24 '>
            <div>
                <input type="text" placeholder='Keywords' className='md:w-[27.5vw] w-[75vw] xl:w-[19.5vw] px-2 py-4 border rounded-xl' />
            </div>
            
        </div>



        <div className='ml-4 flex items-center justify-between w-[75vw] xl:w-[19.5vw] md:w-[27.5vw] bg-[#F4F6F8] px-2 py-4 border rounded-xl'>
              <div>
                <h1>Default Sorting:</h1>
              </div>
              <div>
                <select name="" id="" className='bg-[#F4F6F8]'>
                    <h1>Nothing</h1>
                    <option value="">Popularity</option>
                    <option value="">Organic</option>
                    <option value="">Fantastic</option>
                </select>
              </div>
        </div>




        <div className='px-8 space-y-2 '>
                <div>
                    <h1 className='text-3xl font-bold  py-5'>Categories</h1>
                </div>
                <div className='flex justify-between text-green-500'>
                        <div>
                            <Link href="#">Banana</Link>
                        </div>
                        <div>
                        <AiOutlineApple/>
                        </div>
                      
                </div>
                <div className='flex justify-between text-green-500'>
                        <div>
                            <Link href="#">Apple</Link>
                        </div>
                        <div>
                        <AiOutlineApple/>
                        </div>
                     
                </div>
                <div className='flex justify-between text-green-500'>
                        <div>
                            <Link href="#">Pineapple</Link>
                        </div>
                        <div>
                        <AiOutlineApple/>
                        </div>
                       
                </div>
                <div className='flex justify-between text-green-500'>
                        <div>
                            <Link href="#">Kiwi</Link>
                        </div>
                        <div>
                        <AiOutlineApple/>
                        </div>
                     
                </div>
                <div className='flex justify-between text-green-500'>
                        <div>
                            <Link href="#">Strawberry</Link>
                        </div>
                        <div>
                        <AiOutlineApple/>
                        </div>
                       
                </div>
                <div className='flex justify-between text-green-500'>
                        <div>
                            <Link href="#">Shakes</Link>
                        </div>
                        <div>
                        <AiOutlineApple/>
                        </div>
                       
                </div>
                <div className='flex justify-between text-green-500'>
                        <div>
                            <Link href="#">Mangoes</Link>
                        </div>
                        <div>
                        <AiOutlineApple/>
                        </div>
                       
                </div>
        </div>



        {/* Range Starts */}
                        <div className='px-8'>
                            <h1 className='text-3xl font-bold  py-5'>Price</h1>
                            <input type="range" className='w-full' />
                        </div>
        {/* Range Ends */}
        {/* Radio Buttons Start */}
                         <div className='px-8 space-y-2'>
                            <h1 className='text-3xl font-bold  py-5'>Additional</h1>
                            <div className='flex'>
                            <input type="radio"  />
                            <h1>Organic</h1>
                            </div>
                            <div className='flex'>
                            <input type="radio" />
                            <h1>Fresh</h1>
                            </div>
                            <div className='flex'>
                            <input type="radio" />
                            <h1>Juicy</h1>
                            </div>
                            <div className='flex'>
                            <input type="radio" />
                            <h1>Amazing</h1>
                            </div>
                            <div className='flex'>
                            <input type="radio" />
                            <h1>Tasty</h1>
                            </div>
                            
                         </div>
        {/* Radio Buttons End */}
        {/* Featured Starts */}
        <div >
            <h1 className='text-3xl font-bold px-8 py-5'>Featured products</h1>
            <div className='grid grid-cols-1'>
                   <div>
                    <Feature/>
                   </div>
                   <div>
                    <Feature2/>
                   </div>
                   <div>
                    <Feature3/>
                   </div>
                   <div className='flex items-center justify-center mb-5 mt-5'>
                    <button className='md:ml-12 md:py-3 xl:ml-14 xl:py-2 xl:px-20 px-28 py-5 border rounded-full font-bold text-black text-xl border-orange-500 hover:transition-colors hover:bg-[#81C408] hover:text-white'>View More</button>
                   </div>
            </div>
        </div>
        {/* Featured Ends */}
        {/* Banner Starts */}
        <div className='relative md:ml-8 m-auto w-72 xl:ml-10 xl:mb-12 md:mb-24'>
               <div >
                <img className='rounded-3xl' src="https://images.unsplash.com/photo-1577041249022-26cc744ddda3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
               </div>
               <div className='absolute inset-0 items-center justify-center top-0 left-3'>
                <h1 className='text-6xl text-green-500 font-bold'>Fruits</h1>
                <h1 className='text-5xl text-green-400 font-bold'>Banner</h1>
               </div>
        </div>
        </div>
    </div>
    
    {/* Grid System End */}
    {/* Reply Section Start */}
    <div className='grid grid-cols-1 mb-7 xl:w-[68vw]'>
        <div className='flex ml-14 gap-3 mt-5 border-b-2 m-auto'>
        <button className='text-xl '>Description</button>
        <button className='text-xl '>Reviews</button>
        </div>
           {/* Filter Items */}
           <div className='ml-14'>
            <h1 className=' text-xl text-[#45595B] mb-4 mt-5'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit</h1>
            <h1 className=' text-xl text-[#45595B]'>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.Weight1 kg</h1>
           </div>
           <div className='ml-14 mt-6'>
           <table class="table-auto border border-gray-200 divide-y divide-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th class="px-4 py-2 text-left">Weight</th>
                <th class="px-4 py-2 text-left">1 kg</th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr>
                <td class="px-4 py-2">Country of Origin</td>
                <td class="px-4 py-2">Agro Farm</td>
            </tr>
            <tr>
                <td class="px-4 py-2">Quality</td>
                <td class="px-4 py-2">Organic</td>
            </tr>
            <tr>
                <td class="px-4 py-2">Min Weight</td>
                <td class="px-4 py-2">250 Kg</td>
            </tr>
        </tbody>
    </table>
           </div>
           {/* Filter Items End */}
        <div>

      </div>
      {/* Photos Start */}
      <div className='xl:flex md:flex md:mt-4'>
        <div className='flex flex-col ml-24 mt-5'>
               <div>
                 <img className='w-44 h-44 xl:w-96 md:w-64 bg-cover rounded-full' src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
             </div>
        </div>
     
        <div className='flex flex-col ml-14 mt-4'>
            <div>
            <h1 className='text-[#45595B]'>April 12, 2024</h1>
            </div>
            <div>
                <h1 className='font-extrabold  text-[#45595B]'>Jason Smith</h1>
            </div>
            <div>
                <h1>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit</h1>
            </div>
            <div>
                <img className='h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
            </div>
        </div>
      </div>
      {/* Photos Ends */}
    </div>
    {/* Second Review Start */}
    <div className='xl:flex md:flex md:mt-4 xl:w-[68vw]'>
        <div className='flex flex-col ml-24 mt-5'>
               <div>
                 <img className='w-44 h-44 xl:w-96 md:w-64 bg-cover rounded-full' src="https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
             </div>
        </div>
     
        <div className='flex flex-col ml-14 mt-4'>
            <div>
            <h1 className='text-[#45595B]'>April 12, 2024</h1>
            </div>
            <div>
                <h1 className='font-extrabold  text-[#45595B]'>Harry Potter</h1>
            </div>
            <div>
                <h1>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit</h1>
            </div>
            <div>
                <img className='h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
            </div>
        </div>
      </div>
      {/* Photos Ends */}
    {/* Second Review Ends */}
    <div className='ml-14 mt-4 sm:ml-2 md:ml-2 xl:ml-14'>
        <h1 className='font-extrabold text-2xl text-[#45595B]'>Leave a Reply</h1>
        <div className='flex flex-col gap-4 mt-3'>
        <div>
            <input className='text-[#45595B] sm:w-full md:w-full  py-3 border xl:w-[64vw] border-b-2 border-t-0 border-l-0 px-3 rounded-xl border-r-0'  type="text" placeholder='Your Name*' />
        </div>
        <div>
            <input className='text-[#45595B] py-3 sm:w-full md:w-full border xl:w-[64vw] border-b-2 border-t-0 border-l-0 px-3 rounded-xl border-r-0' type="text" placeholder='Your Email*' />
        </div>
        <div>
            <input className='text-[#45595B] py-7 sm:w-full md:w-full xl:w-[64vw]  border border-b-2 border-t-0 border-l-0 px-3 rounded-xl border-r-0' type="text" placeholder='Your Review' />
        </div>
        </div>
        {/* Rating */}
        <div className='flex items-center justify-between mt-4 xl:w-[68vw]'>
            <div>
                <img className='h-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/0_stars.svg/2560px-0_stars.svg.png" alt="" />
            </div>
            <div className='mr-10'>
                <button className=' border rounded-full border-[#FFB524] px-3 py-3 text-xl font-bold text-[#81C408] hover:bg-[#FFB524] hover:transition-colors'>Post Comment</button>
            </div>
        </div>
        {/* Rating Ends*/}
        <h1 className='font-extrabold text-center mb-4 mt-10 text-4xl ml-[-12vw] sm:ml-0 xl:ml-[-5vw]  text-[#45595B]'>Related Products</h1>
        <div>
        <Slick2/>
        </div>
         
    </div>
    {/* Reply Section Ends */}
    </>
  )
}

export default page