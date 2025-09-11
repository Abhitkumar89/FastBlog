import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import UserLayout from './pages/user/Layout'
import UserDashboard from './pages/user/Dashboard'
import AddBlog from './pages/user/AddBlog'
import MyBlogs from './pages/user/MyBlogs'
import Comments from './pages/user/Comments'
import Profile from './pages/user/Profile'
import AdminLogin from './components/admin/Login'
import AdminLayout from './pages/admin/Layout'
import AdminDashboard from './pages/admin/Dashboard'
import AdminAddBlog from './pages/admin/AddBlog'
import AdminListBlog from './pages/admin/ListBlog'
import AdminComments from './pages/admin/Comments'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import useScrollToTop from './hooks/useScrollToTop'

const App = () => {

  const {token, isAuthLoading} = useAppContext()
  
  // Auto-scroll to top on page refresh and route changes
  useScrollToTop()

  // Show loading while authentication is being initialized
  if (isAuthLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={token ? <UserLayout/> : <Login/>}>
          <Route index element={<UserDashboard/>}/>
          <Route path='add-blog' element={<AddBlog/>}/>
          <Route path='my-blogs' element={<MyBlogs/>}/>
          <Route path='comments' element={<Comments/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>
        
        {/* Admin Routes */}
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin' element={token ? <AdminLayout/> : <AdminLogin/>}>
          <Route index element={<AdminDashboard/>}/>
          <Route path='addBlog' element={<AdminAddBlog/>}/>
          <Route path='listBlog' element={<AdminListBlog/>}/>
          <Route path='comments' element={<AdminComments/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
