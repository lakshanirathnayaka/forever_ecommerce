import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>Exchange Policy</p>
        <p className='mt-2 text-gray-400'>30 Days Easy Exchange</p>
      </div>
    </div>
  )
}

export default OurPolicy
