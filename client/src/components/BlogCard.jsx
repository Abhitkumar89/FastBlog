import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

    const {title, description, category, image, _id} = blog;
    const navigate = useNavigate()

  return (
    <div onClick={()=> navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer bg-white'>
      <img src={image} alt="" className='aspect-video w-full object-cover'/>
      <span className='ml-4 sm:ml-5 mt-3 sm:mt-4 px-2 sm:px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs font-medium'>{category}</span>
      <div className='p-4 sm:p-5'>
        <h5 className='mb-2 font-medium text-gray-900 text-sm sm:text-base line-clamp-2'>{title}</h5>
        <p className='mb-3 text-xs sm:text-sm text-gray-600 line-clamp-3' dangerouslySetInnerHTML={{"__html": description.slice(0,80)}}></p>
      </div>
    </div>
  )
}

export default BlogCard
