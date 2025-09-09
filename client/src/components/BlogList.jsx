import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {

    const [menu, setMenu] = useState("All")
    const {blogs, input} = useAppContext()

    const filteredBlogs = ()=>{
      if(input === ''){
        return blogs
      }
      return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
    }

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-8 my-6 sm:my-8 lg:my-10 relative px-4'>
        {blogCategories.map((item)=> (
            <div key={item} className='relative'>
                <button onClick={()=> setMenu(item)}
                 className={`cursor-pointer text-sm sm:text-base transition-colors px-3 sm:px-4 py-1 sm:py-2 flex items-end justify-center ${
                   menu === item 
                     ? 'text-white' 
                     : 'text-gray-500 hover:text-gray-700'
                 }`}>
                    {item}
                    {menu === item && (
                        <motion.div layoutId='underline' 
                        transition={{type: 'spring', stiffness: 500, damping: 30}}
                        className='absolute left-0 right-0 top-1 sm:top-1.5 h-6 sm:h-7 -z-1 bg-primary rounded-full'></motion.div>
                    )}
                    
                </button>
            </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40'>
        {filteredBlogs().filter((blog)=> menu === "All" ? true : blog.category === menu).map((blog)=> <BlogCard key={blog._id} blog={blog}/>)}
      </div>
    </div>
  )
}

export default BlogList
