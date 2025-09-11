import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({blog}) => {

    const {title, description, category, image, _id, author} = blog;
    const navigate = useNavigate()

    const handleClick = () => {
        // Scroll to top when opening blog
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/blog/${_id}`);
    }

  return (
    <motion.div 
        onClick={handleClick} 
        className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer bg-white'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
      <img src={image} alt="" className='aspect-video w-full object-cover'/>
      <span className='ml-4 sm:ml-5 mt-3 sm:mt-4 px-2 sm:px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs font-medium'>{category}</span>
      <div className='p-4 sm:p-5'>
        <h5 className='mb-2 font-medium text-gray-900 text-sm sm:text-base line-clamp-2'>{title}</h5>
        <p className='mb-3 text-xs sm:text-sm text-gray-600 line-clamp-3' dangerouslySetInnerHTML={{"__html": description.slice(0,80)}}></p>
        {author && (
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center'>
              <span className='text-primary text-xs font-medium'>
                {author.name ? author.name.charAt(0).toUpperCase() : 'U'}
              </span>
            </div>
            <span className='text-xs text-gray-500'>By {author.name || 'Unknown Author'}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default BlogCard
