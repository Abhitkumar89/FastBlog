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
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

  const {token} = useAppContext()

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
      </Routes>
    </div>
  )
}

export default App
