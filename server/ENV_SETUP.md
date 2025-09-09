# Environment Variables Setup

## Required Environment Variables

Create a `.env` file in the `server/` directory with the following variables:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/fastblog
JWT_SECRET=fastblog_jwt_secret_key_2024
ADMIN_EMAIL=admin@fastblog.com
ADMIN_PASSWORD=admin123
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
GEMINI_API_KEY=your_gemini_api_key
```

## Admin Login Credentials

- **Email**: admin@fastblog.com
- **Password**: admin123
- **URL**: http://localhost:5173/admin/login

## Setup Instructions

1. Create a file named `.env` in the `server/` directory
2. Copy the environment variables above into the `.env` file
3. Replace the placeholder values with your actual API keys
4. Restart your server after creating the `.env` file

## Security Note

- Change the admin password in production
- Use a strong JWT secret key
- Never commit `.env` files to version control
