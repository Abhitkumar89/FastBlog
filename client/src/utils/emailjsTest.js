// Email.js Test Utility
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

export const testEmailJS = async () => {
  try {
    console.log('Testing Email.js configuration...')
    console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID)
    console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID)
    console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY)

    // Test with a simple template
    const testParams = {
      to_email: 'test@example.com',
      from_name: 'FastBlog Test',
      message: 'This is a test email from FastBlog',
      reply_to: 'krabhit910@gmail.com'
    }

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      testParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    console.log('Email.js test successful:', result)
    return { success: true, result }
  } catch (error) {
    console.error('Email.js test failed:', error)
    return { success: false, error }
  }
}

// Common issues and solutions
export const EMAILJS_TROUBLESHOOTING = {
  '400': 'Bad Request - Check template parameters',
  '401': 'Unauthorized - Check public key',
  '403': 'Forbidden - Check service permissions',
  '404': 'Not Found - Check service ID and template ID',
  '429': 'Too Many Requests - Rate limit exceeded',
  '500': 'Internal Server Error - Email.js service issue'
}

