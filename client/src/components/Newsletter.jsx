import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { EMAILJS_CONFIG, EMAIL_TEMPLATES } from '../config/emailjs'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    if (!email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      // Prepare template parameters
      const templateParams = {
        ...EMAIL_TEMPLATES.NEWSLETTER.params,
        to_email: email,
        to_name: email.split('@')[0], // Use email prefix as name
        user_email: email,
        user_name: email.split('@')[0],
        email: email,
        name: email.split('@')[0],
        reply_to: 'krabhit910@gmail.com'
      }

      console.log('Sending email with params:', {
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: EMAILJS_CONFIG.TEMPLATE_ID,
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
        templateParams
      })

      // Send email using Email.js
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      
      console.log('Email sent successfully:', result)
      toast.success('Successfully subscribed to newsletter!')
      setEmail('')
    } catch (error) {
      console.error('Email.js error details:', {
        error: error,
        message: error.message,
        status: error.status,
        text: error.text
      })
      
      // More specific error messages
      if (error.status === 400) {
        toast.error('Invalid email address. Please check and try again.')
      } else if (error.status === 401) {
        toast.error('Authentication failed. Please check Email.js configuration.')
      } else if (error.status === 403) {
        toast.error('Access denied. Please check Email.js permissions.')
      } else if (error.status === 404) {
        toast.error('Service or template not found. Please check Email.js setup.')
      } else if (error.status === 422) {
        toast.error('Template configuration issue. Please check Email.js template setup.')
      } else {
        toast.error(`Failed to subscribe: ${error.message || 'Unknown error'}`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 my-16 sm:my-24 lg:my-32 px-4 sm:px-6'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900'>Never Miss a Blog!</h1>
      <p className='text-base sm:text-lg lg:text-xl text-gray-500 pb-6 sm:pb-8 lg:pb-10 max-w-2xl leading-relaxed'>
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row items-center justify-center max-w-lg w-full gap-0'>
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border border-gray-300 rounded-l-md sm:rounded-l-md rounded-r-md sm:rounded-r-none h-12 sm:h-14 outline-none w-full px-4 sm:px-6 text-base text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent' 
          type="email" 
          placeholder='Enter your email id' 
          required
          disabled={loading}
        />
        <button 
          type='submit' 
          disabled={loading}
          className='px-8 sm:px-10 lg:px-12 h-12 sm:h-14 text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 transition-all cursor-pointer rounded-r-md sm:rounded-r-md rounded-l-md sm:rounded-l-none text-base font-semibold w-full sm:w-auto flex items-center justify-center'
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Subscribing...
            </div>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
    </div>
  )
}

export default Newsletter
