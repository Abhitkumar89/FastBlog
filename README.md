# QuickBlog - Modern Blogging Platform

A full-stack blogging platform built with React, Node.js, and MongoDB, featuring AI-powered content generation, image uploads, and comprehensive admin management.

## 🚀 Features

### User Features
- **User Authentication**: Secure login/signup with JWT tokens
- **Blog Creation**: Rich text editor with image uploads
- **AI Content Generation**: Powered by Google Gemini AI
- **Blog Management**: Create, edit, and manage personal blogs
- **Comment System**: Interactive commenting on blog posts
- **Responsive Design**: Mobile-first, modern UI with Framer Motion animations

### Admin Features
- **Admin Dashboard**: Complete blog and comment management
- **Blog Management**: View, edit, delete, and publish/unpublish all blogs
- **Comment Moderation**: Approve, delete, and manage all comments
- **User Management**: Full access to user data and statistics
- **AI Integration**: Generate content for any blog post

### Technical Features
- **Image Upload**: Powered by ImageKit for optimized image delivery
- **AI Content Generation**: Google Gemini AI integration for automatic blog content
- **Real-time Updates**: Dynamic content loading and updates
- **Auto-scroll**: Smooth scrolling and navigation
- **Author Attribution**: Proper author display on all blog posts

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **React Hot Toast** - Beautiful notifications
- **Quill.js** - Rich text editor
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Multer** - File upload handling
- **bcryptjs** - Password hashing

### External Services
- **ImageKit** - Image upload and optimization
- **Google Gemini AI** - AI content generation
- **MongoDB Atlas** - Cloud database hosting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- ImageKit account
- Google Gemini AI API key

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/QuickBlog.git
   cd QuickBlog
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the `server` directory:
   ```env
   JWT_SECRET=your_jwt_secret_key
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=admin
   MONGODB_URI=your_mongodb_connection_string
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Start the application**
   ```bash
   # Start the server (from server directory)
   npm start
   
   # Start the client (from client directory)
   npm run dev
   ```

## 🎯 Usage

### User Account
1. **Sign Up**: Create a new user account
2. **Login**: Access your dashboard
3. **Create Blog**: Write and publish blog posts
4. **Manage Content**: Edit and organize your blogs
5. **Engage**: Comment on other users' posts

### Admin Account
- **Email**: admin@example.com
- **Password**: admin
- **Access**: Full platform management capabilities

## 🔧 Configuration

### ImageKit Setup
1. Create an ImageKit account
2. Get your Public Key, Private Key, and URL Endpoint
3. Add them to your `.env` file

### Gemini AI Setup
1. Get a Google Gemini AI API key
2. Add it to your `.env` file
3. AI content generation will be available

### MongoDB Setup
1. Create a MongoDB Atlas account or use local MongoDB
2. Get your connection string
3. Add it to your `.env` file

## 📱 Features Overview

### Blog Creation
- Rich text editor with formatting options
- Image upload with automatic optimization
- AI-powered content generation
- Category organization
- Draft and publish functionality

### Admin Dashboard
- Complete blog management
- Comment moderation
- User statistics
- Content analytics
- Bulk operations

### User Experience
- Smooth animations with Framer Motion
- Auto-scroll to top on navigation
- Responsive design for all devices
- Real-time updates
- Intuitive navigation

## 🚀 Deployment

### Vercel (Frontend)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Railway/Heroku (Backend)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Google Gemini AI for content generation
- ImageKit for image optimization
- MongoDB for database services
- React and Node.js communities

---

**QuickBlog** - Where ideas come to life with the power of AI! 🚀✨