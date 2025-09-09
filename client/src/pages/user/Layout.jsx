import React, { useState } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Layout = () => {
    const { user, setToken, setUser } = useAppContext()
    const navigate = useNavigate()
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLogout = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        toast.success('Logged out successfully')
        navigate('/')
    }

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'Add blogs', href: '/dashboard/add-blog', icon: 'M12 4v16m8-8H4' },
        { name: 'Blog lists', href: '/dashboard/my-blogs', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { name: 'Comments', href: '/dashboard/comments', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    ]

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Top Header */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center cursor-pointer">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h1 className="text-lg sm:text-xl font-bold text-gray-900">FastBlog</h1>
                        </div>
                        
                        {/* User Info - Visible on larger screens */}
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">
                            <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                                <span className="text-xs font-medium text-white">
                                    {user?.name?.charAt(0)?.toUpperCase()}
                                </span>
                            </div>
                            <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        {/* User Info - Mobile version */}
                        <div className="md:hidden flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                                <span className="text-xs font-medium text-white">
                                    {user?.name?.charAt(0)?.toUpperCase()}
                                </span>
                            </div>
                            <span className="text-xs font-medium text-gray-700 max-w-20 truncate">{user?.name}</span>
                        </div>
                        
                        <button
                            onClick={handleLogout}
                            className="bg-purple-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm"
                        >
                            <span className="hidden sm:inline">Logout</span>
                            <span className="sm:hidden">Exit</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between w-full"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">Menu</span>
                        <span className="text-xs text-gray-500">
                            {navigation.find(item => item.href === location.pathname)?.name || 'Dashboard'}
                        </span>
                    </div>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Sidebar */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 bg-white shadow-sm min-h-screen lg:min-h-0`}>
                    <nav className="mt-4 lg:mt-6">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-center px-4 lg:px-6 py-3 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                    </svg>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                {/* Main content */}
                <div className="flex-1">
                    <main className="p-4 sm:p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Layout
