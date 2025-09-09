# Email.js Setup for krabhit910@gmail.com

## Step-by-Step Setup Guide

### Step 1: Create Email.js Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create an account
3. Use your email: **krabhit910@gmail.com**
4. Verify your email address

### Step 2: Set Up Gmail Service
1. In your Email.js dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** from the list
4. Click **"Connect Account"**
5. Sign in with your Gmail account: **krabhit910@gmail.com**
6. Grant the necessary permissions
7. **Copy your Service ID** (it will look like: `service_abc123def`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in your dashboard
2. Click **"Create New Template"**
3. **Template Name**: `FastBlog Newsletter`
4. **Template ID**: `template_newsletter_fastblog` (or copy the auto-generated one)

#### Template Content:
```
Subject: Welcome to FastBlog Newsletter!

Hello {{to_email}},

Thank you for subscribing to FastBlog newsletter!

{{message}}

We're excited to have you as part of our community. You'll receive:
- Latest blog posts
- Tech news and updates
- Exclusive content
- Tips and tutorials

Best regards,
{{from_name}}

---
FastBlog Team
Email: {{from_email}}
Reply to: {{reply_to}}
```

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (it will look like: `user_abc123def456`)

### Step 5: Update Configuration
Open `client/src/config/emailjs.js` and replace the values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id_here',        // From Step 2
  TEMPLATE_ID: 'your_actual_template_id_here',      // From Step 3
  PUBLIC_KEY: 'your_actual_public_key_here'         // From Step 4
}
```

### Step 6: Test the Setup
1. Restart your FastBlog application
2. Go to the newsletter section
3. Enter a test email address
4. Click "Subscribe"
5. Check if you receive the welcome email from **krabhit910@gmail.com**

## Email Flow
- **From**: krabhit910@gmail.com (your email)
- **To**: The email address entered in the newsletter form
- **Subject**: Welcome to FastBlog Newsletter!
- **Content**: Welcome message with subscription confirmation

## Troubleshooting

### If you get "Failed to subscribe":
1. Check that all three values are updated in the config file
2. Verify your Gmail service is connected properly
3. Check the browser console for detailed error messages
4. Make sure your Email.js account is verified

### If emails don't arrive:
1. Check the spam folder
2. Verify the template is saved correctly
3. Test with a different email address
4. Check Email.js dashboard for delivery status

## Free Account Limits
- 200 emails per month
- Perfect for testing and small projects
- Upgrade to paid plan for higher limits

## Security Notes
- Your Gmail password is not shared with Email.js
- Uses OAuth for secure authentication
- Public key is safe to use in client-side code
- Never commit your actual credentials to version control

## Support
- Email.js Documentation: https://www.emailjs.com/docs/
- Gmail Setup Guide: https://www.emailjs.com/docs/sdk/setup/
