import React from 'react'
import { assets, footer_data } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10 py-8 lg:py-10 border-b border-gray-500/30 text-gray-500'>

        <div className='w-full lg:w-auto'>
            <div onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className='flex items-center cursor-pointer mb-4 lg:mb-6'>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">FastBlog</h1>
            </div>
            <p className='max-w-[410px] text-sm sm:text-base leading-relaxed'>Welcome to our little corner of the internet! We're passionate about sharing stories, insights, and experiences that inspire, educate, and connect people from all walks of life.
                Join our community of curious minds and thoughtful readers! ✨</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap xl:justify-between w-full lg:w-[45%] gap-6 lg:gap-5'>
            {footer_data.map((section, index)=> (
                <div key={index} className='min-w-0'>
                    <h3 className='font-semibold text-sm sm:text-base text-gray-900 mb-3 lg:mb-5'>{section.title}</h3>
                    <ul className='text-xs sm:text-sm space-y-1'>
                        {section.links.map((link, i)=> (
                            <li key={i}>
                                <a href="#" className='hover:underline transition text-gray-500 hover:text-gray-700'>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>


      </div>
      <div className='py-4 lg:py-6'>
        <p className='text-center text-xs sm:text-sm lg:text-base text-gray-500/80 mb-2'>Copyright 2025 © FastBlog - All Right Reserved.</p>
        <p className='text-center text-xs sm:text-sm text-gray-500/80'>Made With Love By Abhit Kumar</p>
      </div>
    </div>
  )
}

export default Footer
