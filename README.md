# 🚀 FastBlog - Modern Full-Stack Blogging Platform

<div align="center">
  <img src="client/public/favicon.svg" alt="FastBlog Logo" width="80" height="80">
  
  **A modern, responsive blogging platform built with React, Node.js, and MongoDB**
  
  [![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
  [![Vite](https://img.shields.io/badge/Vite-4.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
</div>

---

## ✨ Features

### 🎨 **Frontend Features**
- **Modern UI/UX** - Clean, responsive design with Tailwind CSS
- **Rich Text Editor** - Create beautiful blog posts with formatting
- **Image Upload** - Seamless image handling with ImageKit integration
- **Search Functionality** - Find blogs quickly with real-time search
- **Category Filtering** - Organize content by Technology, Startup, Lifestyle, Finance
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Dark/Light Theme** - Adaptive design for all preferences

### 🔐 **Authentication & Authorization**
- **User Registration & Login** - Secure JWT-based authentication
- **Role-based Access** - Separate admin and user dashboards
- **Protected Routes** - Secure access to user-specific content
- **Session Management** - Persistent login with localStorage

### 📝 **Blog Management**
- **Create & Edit Blogs** - Rich text editor with image support
- **Draft System** - Save and publish when ready
- **Comment System** - Interactive discussions with approval workflow
- **Blog Analytics** - Track views and engagement
- **AI Integration** - Gemini AI for content enhancement

### 👨‍💼 **Admin Panel**
- **Dashboard Analytics** - Overview of blogs, comments, and users
- **Content Management** - Approve, edit, or delete blogs and comments
- **User Management** - Monitor user activity and engagement
- **Bulk Operations** - Efficient content management tools

### 📧 **Communication**
- **Email Integration** - EmailJS for contact forms and notifications
- **Newsletter System** - Subscribe users to updates
- **Comment Notifications** - Real-time engagement tracking

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Quill** - Rich text editor
- **EmailJS** - Email service integration

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing

### **External Services**
- **ImageKit** - Image optimization and CDN
- **Google Gemini AI** - AI-powered content enhancement
- **Vercel** - Deployment platform

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18.0 or higher)
- **MongoDB** (local or cloud instance)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhitkumar89/FastBlog.git
   cd FastBlog
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

3. **Environment Setup**
   
   Create `.env` files in both `server/` and `client/` directories:
   
   **Server `.env`:**
   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   GEMINI_API_KEY=your_gemini_api_key
   ```
   
   **Client `.env`:**
   ```env
   VITE_API_URL=http://localhost:4000
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start the application**
   ```bash
   # Start the server (from server directory)
   npm start
   
   # Start the client (from client directory)
   npm run dev
   ```

5. **Access the application**
   - **Frontend**: http://localhost:5173
   - **Backend API**: http://localhost:4000

---

## 📁 Project Structure

```
FastBlog/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context for state management
│   │   ├── assets/        # Images and icons
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                # Node.js backend
│   ├── configs/          # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── server.js         # Main server file
└── README.md
```

---

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB Atlas account or use local MongoDB
2. Create a new database
3. Add your connection string to the server `.env` file

### ImageKit Setup
1. Sign up at [ImageKit.io](https://imagekit.io)
2. Get your public key, private key, and URL endpoint
3. Add them to your server `.env` file

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com)
2. Set up email service and template
3. Add credentials to your client `.env` file

### Gemini AI Setup
1. Get API key from [Google AI Studio](https://makersuite.google.com)
2. Add to your server `.env` file

---

## 🎯 Usage

### For Users
1. **Register/Login** - Create an account or sign in
2. **Browse Blogs** - Explore content by category
3. **Read & Comment** - Engage with blog posts
4. **Create Content** - Write and publish your own blogs
5. **Manage Profile** - Update your information

### For Admins
1. **Access Admin Panel** - Use admin credentials
2. **Manage Content** - Approve, edit, or delete blogs
3. **Monitor Comments** - Moderate user discussions
4. **View Analytics** - Track platform performance

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Deploy Frontend**
   ```bash
   cd client
   vercel --prod
   ```

2. **Deploy Backend**
   ```bash
   cd server
   vercel --prod
   ```

3. **Update Environment Variables**
   - Add production URLs to your `.env` files
   - Update CORS settings for production domains

### Alternative Deployment Options
- **Netlify** for frontend
- **Railway** for backend
- **Heroku** for full-stack deployment
- **AWS/GCP** for enterprise solutions

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Blog Endpoints
- `GET /api/blog` - Get all blogs
- `POST /api/blog` - Create new blog
- `GET /api/blog/:id` - Get specific blog
- `PUT /api/blog/:id` - Update blog
- `DELETE /api/blog/:id` - Delete blog

### Comment Endpoints
- `GET /api/comment/:blogId` - Get blog comments
- `POST /api/comment` - Add new comment
- `PUT /api/comment/:id` - Update comment
- `DELETE /api/comment/:id` - Delete comment

---

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process using port 4000
npx kill-port 4000
```

**MongoDB connection issues**
- Check your connection string
- Ensure MongoDB is running
- Verify network access

**Image upload not working**
- Check ImageKit credentials
- Verify file size limits
- Check CORS settings

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Abhit Kumar**
- GitHub: [@Abhitkumar89](https://github.com/Abhitkumar89)
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS
- **MongoDB** for the flexible database
- **Vercel** for seamless deployment
- **All Contributors** who helped make this project better

---

<div align="center">
  <p>Made with ❤️ by Abhit Kumar</p>
  <p>
    <a href="https://github.com/Abhitkumar89/FastBlog">⭐ Star this repo</a> |
    <a href="https://github.com/Abhitkumar89/FastBlog/issues">🐛 Report Bug</a> |
    <a href="https://github.com/Abhitkumar89/FastBlog/pulls">💡 Request Feature</a>
  </p>
</div>
