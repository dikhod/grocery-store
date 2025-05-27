import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-16'>
         <img src={assets.bottom_banner_image} alt='banner-image' className='hidden md:block w-full'/>
         <img src={assets.bottom_banner_image_sm} alt='banner-image' className='md:hidden w-full'/>
         <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 lg:pt-0 lg:pr-24'>
            <div>
                <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-6'>Why We Are The Best?</h1>
                {
                    features.map((feature, index)=>(
                        <div key={index} className='flex items-center gap-2 mt-2'>
                            <img src={feature.icon} alt='icon'/>
                            <div>
                                <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                                <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
         </div>
    </div>
  )
}

export default BottomBanner