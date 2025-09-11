# 🚀 QuickBlog - Modern AI-Powered Blogging Platform

<div align="center">

![QuickBlog Logo](https://img.shields.io/badge/QuickBlog-AI%20Powered%20Blogging-blue?style=for-the-badge&logo=react)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)

**A comprehensive full-stack blogging platform with AI-powered content generation, advanced admin management, and modern user experience.**

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [✨ Request Feature](#)

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🎮 Usage](#-usage)
- [🔧 API Documentation](#-api-documentation)
- [🚀 Deployment](#-deployment)
- [📱 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

QuickBlog is a modern, feature-rich blogging platform that combines the power of AI with intuitive user experience. Built with cutting-edge technologies, it provides both users and administrators with comprehensive tools for content creation, management, and engagement.

### 🌟 Key Highlights

- **🤖 AI-Powered Content**: Generate blog posts using Google Gemini AI
- **📸 Smart Image Management**: Optimized image uploads with ImageKit
- **👑 Advanced Admin Panel**: Complete platform management capabilities
- **🎨 Modern UI/UX**: Beautiful animations with Framer Motion
- **📱 Fully Responsive**: Works seamlessly on all devices
- **🔐 Secure Authentication**: JWT-based security with role management

---

## ✨ Features

### 👤 User Features

#### 🔐 Authentication & Security
- **Secure Registration/Login**: JWT-based authentication system
- **Password Protection**: bcryptjs hashing for secure password storage
- **Session Management**: Persistent login with localStorage
- **Role-based Access**: Different permissions for users and admins

#### ✍️ Content Creation
- **Rich Text Editor**: Quill.js powered editor with formatting options
- **AI Content Generation**: Generate blog content using Google Gemini AI
- **Image Upload**: Drag-and-drop image uploads with ImageKit optimization
- **Draft System**: Save and publish functionality
- **Category Management**: Organize blogs by categories
- **SEO Optimization**: Meta tags and structured content

#### 📊 Blog Management
- **Personal Dashboard**: Comprehensive user dashboard with statistics
- **Blog CRUD Operations**: Create, read, update, delete personal blogs
- **Content Analytics**: View counts, engagement metrics
- **Comment Management**: Moderate comments on your blogs
- **Search & Filter**: Find blogs by title, category, or content

#### 💬 Social Features
- **Comment System**: Interactive commenting on blog posts
- **Author Attribution**: Proper author display with avatars
- **Social Sharing**: Share blogs on social media platforms
- **Engagement Tracking**: Like and view tracking

### 👑 Admin Features

#### 🎛️ Platform Management
- **Complete Blog Control**: View, edit, delete, publish/unpublish all blogs
- **User Management**: Full access to user data and statistics
- **Comment Moderation**: Approve, delete, and manage all comments
- **Content Analytics**: Platform-wide statistics and insights
- **Bulk Operations**: Mass actions for content management

#### 🤖 AI Integration
- **Content Generation**: Generate content for any blog post
- **Smart Suggestions**: AI-powered content recommendations
- **Automated Moderation**: AI-assisted content filtering

### 🎨 Technical Features

#### 🖼️ Media Management
- **ImageKit Integration**: Optimized image delivery and transformation
- **Automatic Optimization**: Image compression and format conversion
- **CDN Delivery**: Fast global image delivery
- **Responsive Images**: Automatic responsive image generation

#### 🎭 User Experience
- **Framer Motion Animations**: Smooth page transitions and micro-interactions
- **Auto-scroll Navigation**: Smooth scrolling to top on page changes
- **Loading States**: Beautiful loading animations and skeletons
- **Toast Notifications**: User-friendly feedback system
- **Responsive Design**: Mobile-first approach with Tailwind CSS

#### ⚡ Performance
- **Code Splitting**: Optimized bundle loading
- **Lazy Loading**: Images and components loaded on demand
- **Caching Strategy**: Efficient data caching and state management
- **Real-time Updates**: Dynamic content without page refresh

## 🛠️ Tech Stack

### 🎨 Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18+ | Modern UI library with hooks and context |
| **React Router** | 6+ | Client-side routing and navigation |
| **Framer Motion** | 10+ | Advanced animations and transitions |
| **React Hot Toast** | 2+ | Beautiful notification system |
| **Quill.js** | 1.3+ | Rich text editor for blog content |
| **Tailwind CSS** | 3+ | Utility-first CSS framework |
| **Axios** | 1+ | HTTP client for API communication |
| **Moment.js** | 2+ | Date formatting and manipulation |

### ⚙️ Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ | JavaScript runtime environment |
| **Express.js** | 4+ | Web application framework |
| **MongoDB** | 6+ | NoSQL document database |
| **Mongoose** | 7+ | MongoDB object modeling library |
| **JWT** | 9+ | JSON Web Tokens for authentication |
| **Multer** | 1+ | File upload middleware |
| **bcryptjs** | 2+ | Password hashing and verification |
| **CORS** | 2+ | Cross-origin resource sharing |
| **dotenv** | 16+ | Environment variable management |

### 🌐 External Services & APIs

| Service | Purpose | Integration |
|---------|---------|-------------|
| **ImageKit** | Image upload, optimization, and CDN | REST API with automatic optimization |
| **Google Gemini AI** | AI-powered content generation | Generative AI API for blog content |
| **MongoDB Atlas** | Cloud database hosting | Managed MongoDB service |
| **Vercel** | Frontend deployment | Static site hosting with edge functions |
| **Railway/Heroku** | Backend deployment | Container-based hosting platform |

### 📦 Development Tools

| Tool | Purpose |
|------|---------|
| **Vite** | Fast build tool and development server |
| **ESLint** | Code linting and quality assurance |
| **Prettier** | Code formatting and style consistency |
| **Git** | Version control and collaboration |
| **Postman** | API testing and documentation |

## 📦 Installation

### 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

| Requirement | Version | Download Link |
|-------------|---------|---------------|
| **Node.js** | 18.0+ | [Download Node.js](https://nodejs.org/) |
| **npm** | 9.0+ | Comes with Node.js |
| **Git** | 2.30+ | [Download Git](https://git-scm.com/) |
| **MongoDB** | 6.0+ | [MongoDB Atlas](https://www.mongodb.com/atlas) or [Local MongoDB](https://www.mongodb.com/try/download/community) |

### 🔑 Required Accounts & API Keys

You'll need accounts for the following services:

1. **MongoDB Atlas** - Free cloud database
2. **ImageKit** - Image optimization service
3. **Google AI Studio** - Gemini AI API access

### 🚀 Quick Start

#### Step 1: Clone the Repository
```bash
# Clone the repository
git clone https://github.com/Abhitkumar89/FastBlog.git
cd FastBlog

# Verify the structure
ls -la
# You should see: client/  server/  README.md
```

#### Step 2: Install Dependencies

**Backend Dependencies:**
```bash
cd server
npm install
```

**Frontend Dependencies:**
```bash
cd ../client
npm install
```

#### Step 3: Environment Configuration

Create a `.env` file in the `server` directory:

```bash
cd ../server
touch .env
```

Add the following environment variables to your `.env` file:

```env
# Server Configuration
PORT=8000

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/quickblog

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random

# Admin Configuration
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=your_secure_admin_password

# ImageKit Configuration
IMAGEKIT_PUBLIC_KEY=public_your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=private_your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id

# AI Configuration
GEMINI_API_KEY=your_google_gemini_api_key
```

#### Step 4: Start the Application

**Terminal 1 - Start the Backend Server:**
```bash
cd server
npm start
# Server will run on http://localhost:8000
```

**Terminal 2 - Start the Frontend Development Server:**
```bash
cd client
npm run dev
# Frontend will run on http://localhost:5173
```

#### Step 5: Verify Installation

1. **Backend Health Check:**
   ```bash
   curl http://localhost:8000/api/health
   # Should return: {"success": true, "message": "Server is running"}
   ```

2. **Frontend Access:**
   - Open your browser and go to `http://localhost:5173`
   - You should see the QuickBlog homepage

### 🔧 Development Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm test` | Run test suite |
| `npm run lint` | Run ESLint for code quality |

## ⚙️ Configuration

### 🗄️ MongoDB Setup

#### Option 1: MongoDB Atlas (Recommended)
1. **Create Account**: Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create Cluster**: Choose the free tier (M0)
3. **Database Access**: Create a database user with read/write permissions
4. **Network Access**: Add your IP address or use `0.0.0.0/0` for all IPs
5. **Connection String**: Copy the connection string and update your `.env` file

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/quickblog?retryWrites=true&w=majority
```

#### Option 2: Local MongoDB
```bash
# Install MongoDB locally
# macOS with Homebrew
brew install mongodb-community

# Ubuntu/Debian
sudo apt-get install mongodb

# Start MongoDB service
sudo systemctl start mongod
```

```env
MONGODB_URI=mongodb://localhost:27017/quickblog
```

### 🖼️ ImageKit Configuration

1. **Create Account**: Sign up at [ImageKit.io](https://imagekit.io/)
2. **Get Credentials**: Navigate to Developer Options → API Keys
3. **Copy Credentials**: Get your Public Key, Private Key, and URL Endpoint
4. **Update Environment**: Add to your `.env` file

```env
IMAGEKIT_PUBLIC_KEY=public_xxxxxxxxxxxxxxxxxxxxxxxx
IMAGEKIT_PRIVATE_KEY=private_xxxxxxxxxxxxxxxxxxxxxxxx
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

### 🤖 Google Gemini AI Setup

1. **Get API Key**: Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. **Create Project**: Create a new Google Cloud project
3. **Enable API**: Enable the Generative Language API
4. **Generate Key**: Create an API key
5. **Update Environment**: Add to your `.env` file

```env
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### 🔐 Security Configuration

#### JWT Secret
Generate a strong JWT secret:
```bash
# Generate a random secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

#### Admin Credentials
Set secure admin credentials:
```env
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=your_very_secure_password_here
```

## 🎮 Usage

### 👤 User Account Workflow

#### 1. Registration & Authentication
```bash
# Sign up for a new account
POST /api/user/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}

# Login to existing account
POST /api/user/login
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### 2. Blog Creation Process
1. **Navigate to Dashboard**: Access your personal dashboard
2. **Create New Blog**: Click "Add New Blog" button
3. **Fill Blog Details**:
   - Title and subtitle
   - Category selection
   - Upload featured image
   - Write content using rich text editor
4. **AI Content Generation**: Use "Generate with AI" for content assistance
5. **Publish**: Save as draft or publish immediately

#### 3. Content Management
- **View All Blogs**: See all your published and draft blogs
- **Edit Content**: Modify existing blog posts
- **Delete Blogs**: Remove unwanted content
- **Analytics**: Track views and engagement

### 👑 Admin Account Workflow

#### 1. Admin Login
```bash
# Admin authentication
POST /api/admin/login
{
  "email": "admin@yourdomain.com",
  "password": "your_secure_admin_password"
}
```

#### 2. Platform Management
- **Blog Oversight**: View, edit, delete all user blogs
- **Comment Moderation**: Approve, delete, or flag comments
- **User Management**: View user statistics and manage accounts
- **Content Analytics**: Platform-wide insights and metrics

#### 3. AI Content Generation
- **Generate Content**: Create AI-powered content for any blog
- **Content Suggestions**: Get AI recommendations for improvements
- **Bulk Operations**: Manage multiple blogs simultaneously

## 🔧 API Documentation

### 🔐 Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/user/signup` | User registration | No |
| `POST` | `/api/user/login` | User login | No |
| `POST` | `/api/admin/login` | Admin login | No |
| `GET` | `/api/user/profile` | Get user profile | Yes |
| `PUT` | `/api/user/profile` | Update user profile | Yes |

### 📝 Blog Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/blog` | Get all published blogs | No |
| `GET` | `/api/blog/:id` | Get specific blog | No |
| `POST` | `/api/blog` | Create new blog | Yes |
| `PUT` | `/api/blog/:id` | Update blog | Yes |
| `DELETE` | `/api/blog/:id` | Delete blog | Yes |
| `POST` | `/api/blog/generate-content` | Generate AI content | Yes |

### 💬 Comment Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/comment/:blogId` | Get blog comments | No |
| `POST` | `/api/comment` | Add new comment | Yes |
| `PUT` | `/api/comment/:id` | Update comment | Yes |
| `DELETE` | `/api/comment/:id` | Delete comment | Yes |

### 📊 Dashboard Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/user/dashboard` | User dashboard data | Yes |
| `GET` | `/api/admin/dashboard` | Admin dashboard data | Yes |
| `GET` | `/api/user/comments/stats` | Comment statistics | Yes |

### 📝 Example API Requests

#### Create a New Blog
```javascript
const response = await fetch('/api/blog', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_jwt_token'
  },
  body: JSON.stringify({
    title: 'My Amazing Blog Post',
    subTitle: 'A subtitle that describes the content',
    description: '<p>Your blog content here...</p>',
    category: 'Technology',
    image: 'https://ik.imagekit.io/your_id/image.jpg',
    isPublished: true
  })
});
```

#### Generate AI Content
```javascript
const response = await fetch('/api/blog/generate-content', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_jwt_token'
  },
  body: JSON.stringify({
    prompt: 'Write about the future of artificial intelligence'
  })
});
```

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

## 🔧 API Documentation

### Authentication Endpoints
```
POST /api/user/signup     - User registration
POST /api/user/login      - User login
POST /api/admin/login     - Admin login
```

### Blog Endpoints
```
GET    /api/blog          - Get all published blogs
POST   /api/blog          - Create blog (auth required)
GET    /api/blog/:id      - Get single blog
PUT    /api/blog/:id      - Update blog (auth required)
DELETE /api/blog/:id      - Delete blog (auth required)
POST   /api/blog/generate - Generate AI content
```

### User Endpoints
```
GET /api/user/dashboard   - User dashboard data
GET /api/user/blogs       - User's blogs
GET /api/user/profile     - User profile
```

### Admin Endpoints
```
GET /api/admin/dashboard  - Admin dashboard
GET /api/admin/blogs      - All blogs
GET /api/admin/users      - All users
GET /api/admin/comments   - All comments
```

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Build Settings**: 
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Environment Variables**: Add any frontend-specific variables
4. **Deploy**: Click deploy and your site will be live

### Backend Deployment (Railway/Heroku)
1. **Connect Repository**: Link your GitHub repo
2. **Environment Variables**: Add all your `.env` variables
3. **Build Settings**: 
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Deploy**: Your API will be live and accessible

### Environment Variables for Production
```env
NODE_ENV=production
PORT=8000
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
GEMINI_API_KEY=your_gemini_api_key
```

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