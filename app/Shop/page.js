"use client"
import Link from 'next/link'
import React from 'react'
import { AiOutlineApple, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import Feature from '../Components/Feature'
import Feature2 from '../Components/Feature2'
import Feature3 from '../Components/Feature3'
import Apricot from '../Components/Apricot'
import Card from '../Components/Card'
import Card1 from '../Components/Card1'
import Card2 from '../Components/Card2'
import Card3 from '../Components/Card3'
import Card4 from '../Components/Card4'
import Card5 from '../Components/Card5'
import Card6 from '../Components/Card6'
import Card7 from '../Components/Card7'
import Card8 from '../Components/Card8'
import Footer from '../Components/Footer'
const page = () => {
  return (
    <>
    <div className='relative '>
        <img className='md:h-[70vh] md:w-full' src="https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute flex flex-col inset-0 items-center justify-center text-white'>
            <h1 className='text-5xl font-extrabold md:text-6xl xl:text-[20vw]  sm:text-5xl sm:text-[20vw]'>Shop</h1>
            <div className='flex space-x-1'>
            <Link href="/" className='text-[#ffffff] font-medium sm:text-3xl'>Home</Link>
            <Link href="#" className='text-[#ffffff] font-medium sm:text-3xl'>Shop</Link>
            <Link href="#" className='sm:text-3xl'>Pages</Link>
            </div>
            
        </div>
    </div>
    {/* Grid System */}
    <div className='grid grid-cols-1 xl:w-60 md:w-60'>
        <div className='px-8'>
            <h1 className='text-3xl font-bold  py-5'>Fresh fruits shop</h1>
        </div>
        <div className='flex ml-5 mb-5 '>
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
        {/* Banner Ends */}
    </div>
    {/* Grid System End */}
    {/* Four Items Start */}
    <div className='relative md:h-[120vh] xl:h-[10vh] '>
    <div className='grid grid-cols-1 md:mb-12  xl:gap-1   sm:ml-32    mt-10 md:absolute xl:absolute md:top-[-270vw] xl:top-[-150vw] xl:left-[12vw] md:left-[30vw] md:grid md:grid-cols-1 xl:grid xl:grid-cols-3'>
       <div>
        <Card1/>
       </div>
       <div>
        <Card2/>
       </div>
       <div>
        <Card3/>
       </div>
       <div>
        <Card4/>
       </div>
       <div className='xl:ml-3'>
        <Card5/>
       </div>
       <div className='xl:ml-3'>
        <Card6/>
       </div>
       <div>
        <Card7/>
       </div>
       <div>
        <Card8/>
       </div>
    </div>
    </div>
    {/* Four Items End */}
    {/* Buttons Start */}
    <div className='flex gap-1 mb-3  sm:ml-52 md:ml-[35vw]'>
            <div>
                <button className='px-3 py-3 border rounded-xl hover:transition-colors hover:bg-[#81C408] border-[#FFB524]'><AiOutlineLeft/></button>
            </div>
            <div>
                <button className='px-4 py-2 border rounded-xl hover:transition-colors bg-[#81C408] border-[#FFB524]'>1</button>
            </div>
            <div>
                <button className='px-4 py-2 border rounded-xl hover:transition-colors hover:bg-[#81C408] border-[#FFB524]'>2</button>
            </div>
            <div>
                <button className='px-4 py-2 border rounded-xl hover:transition-colors hover:bg-[#81C408] border-[#FFB524]'>3</button>
            </div>
            <div>
                <button className='px-4 py-2 border rounded-xl hover:transition-colors hover:bg-[#81C408] border-[#FFB524]'>4</button>
            </div>
            <div>
                <button className='px-4 py-2 border rounded-xl hover:transition-colors hover:bg-[#81C408] border-[#FFB524]'>5</button>
            </div>
            <div>
                <button className='px-4 py-2 border rounded-xl hover:transition-colors hover:bg-[#81C408] border-[#FFB524]'>6</button>
            </div>
            <div >
                <button className='px-3 py-3 border rounded-xl hover:transition-colors hover:bg-[#81C408] border-[#FFB524]'><AiOutlineRight/></button>
            </div>
    </div>
    {/* Buttons End */}
    </>
  )
}

export default page