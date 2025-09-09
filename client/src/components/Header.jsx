import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e)=>{
     e.preventDefault();
     setInput(inputRef.current.value)
  }

  const onClear = ()=>{
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 relative'>
      <div className='text-center mt-12 sm:mt-16 lg:mt-20 mb-6 sm:mb-8'>

        <div className='inline-flex items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-1 sm:py-1.5 mb-4 sm:mb-6 border border-primary/40 bg-primary/10 rounded-full text-xs sm:text-sm text-primary'>
            <p>New: AI feature integrated</p>
            <img src={assets.star_icon} className='w-2 sm:w-2.5' alt="" />
        </div>

        <h1 className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight sm:leading-16 text-gray-700 px-4'>
          Your own <span className='text-primary'> blogging</span> <br className='hidden sm:block'/> 
          <span className='sm:hidden'> </span>platform.
        </h1>

        <p className='my-4 sm:my-6 lg:my-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-500 px-4 leading-relaxed'>
          This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.
        </p>

        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between max-w-lg mx-auto border border-gray-300 bg-white rounded overflow-hidden m-4 sm:m-auto'>
            <input 
              ref={inputRef} 
              type="text" 
              placeholder='Search for blogs' 
              required 
              className='w-full px-3 sm:pl-4 py-2 sm:py-3 outline-none text-sm sm:text-base'
            />
            <button 
              type="submit" 
              className='bg-primary text-white px-4 sm:px-8 py-2 sm:py-3 m-1 sm:m-1.5 rounded hover:scale-105 transition-all cursor-pointer text-sm sm:text-base font-medium'
            >
              Search
            </button>
        </form>

      </div>

      <div className='text-center'>
        {
        input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer hover:bg-gray-50 transition-colors'>Clear Search</button>
        }
      </div>

      <img src={assets.gradientBackground} alt="" className='absolute -top-20 sm:-top-32 lg:-top-50 -z-1 opacity-30 sm:opacity-50 w-full h-auto'/>
    </div>
  )
}

export default Header
