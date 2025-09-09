// Email.js Configuration
// Replace these values with your actual Email.js credentials

export const EMAILJS_CONFIG = {
  // Your Email.js service ID
  SERVICE_ID: 'service_172wjss',
  
  // Your Email.js template ID for newsletter subscription
  TEMPLATE_ID: 'template_ex8qnf9',
  
  // Your Email.js public key
  PUBLIC_KEY: 'PVTJOIs4x9X4BPxhi'
}

// Email template parameters
export const EMAIL_TEMPLATES = {
  NEWSLETTER: {
    templateId: EMAILJS_CONFIG.TEMPLATE_ID,
    params: {
      to_email: '',
      to_name: '',
      from_name: 'FastBlog Team',
      from_email: 'krabhit910@gmail.com',
      message: 'Thank you for subscribing to FastBlog newsletter! We will keep you updated with the latest blogs, tech news, and exclusive content.',
      reply_to: 'krabhit910@gmail.com',
      // Common Email.js parameter names
      user_email: '',
      user_name: '',
      email: '',
      name: ''
    }
  }
}

// Instructions for setup:
/*
1. Go to https://www.emailjs.com/
2. Create an account and verify your email
3. Create a new service (Gmail, Outlook, etc.)
4. Create a new template for newsletter subscription
5. Get your Service ID, Template ID, and Public Key
6. Replace the values above with your actual credentials
7. Test the integration

Template example:
Subject: Welcome to FastBlog Newsletter!
Content:
Hello {{to_email}},

Thank you for subscribing to FastBlog newsletter!

{{message}}

Best regards,
{{from_name}}

Reply to: {{reply_to}}
*/
