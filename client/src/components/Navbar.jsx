import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    const {navigate, token, user, setToken, setUser} = useAppContext()

    const handleLogout = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <div className='flex justify-between items-center py-3 sm:py-5 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32'>
            <div onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className='flex items-center cursor-pointer'>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">FastBlog</h1>
            </div>
            
            <div className='flex items-center gap-2 sm:gap-4'>
                {token ? (
                    <div className='flex items-center gap-2 sm:gap-4'>
                        <div className='hidden sm:flex items-center gap-2'>
                            <div className='w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center'>
                                <span className='text-sm font-medium text-white'>
                                    {user?.name?.charAt(0)?.toUpperCase()}
                                </span>
                            </div>
                            <span className='text-sm font-medium text-gray-700'>{user?.name}</span>
                        </div>
                        <button 
                            onClick={()=>navigate('/dashboard')}  
                            className='flex items-center gap-1 sm:gap-2 rounded-full text-xs sm:text-sm cursor-pointer bg-primary text-white px-3 sm:px-6 py-1.5 sm:py-2.5'
                        >
                            <span className="hidden sm:inline">Dashboard</span>
                            <span className="sm:hidden">Dash</span>
                            <img src={assets.arrow} className='w-2 sm:w-3' alt="arrow" />
                        </button>
                        <button 
                            onClick={handleLogout}  
                            className='flex items-center gap-1 sm:gap-2 rounded-full text-xs sm:text-sm cursor-pointer bg-primary text-white px-3 sm:px-6 py-1.5 sm:py-2.5'
                        >
                            Logout
                            <img src={assets.arrow} className='w-2 sm:w-3' alt="arrow" />
                        </button>
                    </div>
                ) : (
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button 
                            onClick={()=>navigate('/login')}  
                            className='flex items-center gap-1 sm:gap-2 rounded-full text-xs sm:text-sm cursor-pointer bg-primary text-white px-3 sm:px-6 py-1.5 sm:py-2.5'
                        >
                            Login
                            <img src={assets.arrow} className='w-2 sm:w-3' alt="arrow" />
                        </button>
                        <button 
                            onClick={()=>navigate('/signup')}  
                            className='flex items-center gap-1 sm:gap-2 rounded-full text-xs sm:text-sm cursor-pointer bg-primary text-white px-3 sm:px-6 py-1.5 sm:py-2.5'
                        >
                            <span className="hidden sm:inline">Sign Up</span>
                            <span className="sm:hidden">Signup</span>
                            <img src={assets.arrow} className='w-2 sm:w-3' alt="arrow" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
