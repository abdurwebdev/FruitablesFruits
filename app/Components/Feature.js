"use client"
import React from 'react'

const Feature = () => {
  return (
    <>
    <div className='flex ml-9 mb-5'>
                      <div>
                        <img className='w-28 h-28 rounded-xl' src="https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      </div>
                      <div className='flex flex-col ml-5'>
                        <div>
                        <h1 className='text-xl font-bold'>Big Banana</h1>
                        </div>
                        <div>
                            <img className='w-32 h-12' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
                        </div>
                        <div className='flex text-pretty space-x-2'>
                            <h1 className='font-bold'>2.99 $</h1>
                            <h1 className='line-through font-bold text-red-600'>4.11 $</h1>
                        </div>
                      </div>
    </div>


    
    </>
  )
}

export default Feature