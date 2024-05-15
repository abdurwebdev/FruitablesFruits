"use client"
import React from 'react'
import Service1 from './Service1'
import Service2 from './Service2'
import Service3 from './Service3'
import PhoneService from './PhoneService'
const Services = () => {
  return (
    <>
    <div className='flex flex-col text-black space-y-5 h-[230vh] md:mt-10 md:h-[90vh] xl:mt-24 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 '>
      <Service1/>
      <Service2/>
      <Service3/>
      <PhoneService/>
    </div>
    </>
  )
}

export default Services