# Email.js Setup Instructions for FastBlog Newsletter

## Overview
This guide will help you set up Email.js for the newsletter subscription feature in FastBlog.

## Step 1: Create Email.js Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your Email.js dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Settings:
- **Template Name**: `Newsletter Subscription`
- **Template ID**: `template_newsletter` (or your preferred name)

### Template Content:
```
Subject: Welcome to FastBlog Newsletter!

Hello {{to_email}},

Thank you for subscribing to FastBlog newsletter!

{{message}}

We'll keep you updated with the latest blogs, tech news, and exclusive content.

Best regards,
{{from_name}}

---
FastBlog Team
Reply to: {{reply_to}}
```

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abc123def456`)

## Step 5: Update Configuration
1. Open `client/src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',        // From Step 2
  TEMPLATE_ID: 'your_actual_template_id',      // From Step 3
  PUBLIC_KEY: 'your_actual_public_key'         // From Step 4
}
```

## Step 6: Test the Integration
1. Start your FastBlog application
2. Go to the newsletter section
3. Enter a test email address
4. Click "Subscribe"
5. Check if you receive the welcome email

## Troubleshooting

### Common Issues:
1. **"Invalid service ID"**: Double-check your Service ID
2. **"Template not found"**: Verify your Template ID
3. **"Invalid public key"**: Ensure your Public Key is correct
4. **"Email not sent"**: Check your email service configuration

### Testing Tips:
- Use a real email address for testing
- Check your spam folder
- Verify your email service is properly configured
- Check the browser console for error messages

## Security Notes
- Never commit your actual Email.js credentials to version control
- Consider using environment variables for production
- The public key is safe to use in client-side code
- Email.js has built-in rate limiting for free accounts

## Free Account Limits
- 200 emails per month
- 2 email services
- 2 email templates
- For higher limits, consider upgrading to a paid plan

## Support
- Email.js Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Email.js Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
