import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const MyBlogs = () => {
    const { axios } = useAppContext()
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUserBlogs()
    }, [])

    const fetchUserBlogs = async () => {
        try {
            const { data } = await axios.get('/api/user/dashboard')
            if (data.success) {
                setBlogs(data.dashboard.blogs)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Failed to fetch blogs')
        } finally {
            setLoading(false)
        }
    }

    const handleTogglePublish = async (blogId, currentStatus) => {
        try {
            const { data } = await axios.post('/api/blog/toggle-publish', { id: blogId })
            if (data.success) {
                toast.success(data.message)
                fetchUserBlogs() // Refresh the list
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Failed to update blog status')
        }
    }

    const handleDeleteBlog = async (blogId) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                const { data } = await axios.post('/api/blog/delete', { id: blogId })
                if (data.success) {
                    toast.success(data.message)
                    fetchUserBlogs() // Refresh the list
                } else {
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error('Failed to delete blog')
            }
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">All blogs</h1>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BLOG TITLE</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {blogs.length > 0 ? (
                                blogs.map((blog, index) => (
                                    <tr key={blog._id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(blog.createdAt)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                blog.isPublished 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {blog.isPublished ? 'Published' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex items-center space-x-2">
                                                <button 
                                                    onClick={() => handleTogglePublish(blog._id, blog.isPublished)}
                                                    className="text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-xs"
                                                >
                                                    {blog.isPublished ? 'Unpublish' : 'Publish'}
                                                </button>
                                                <button 
                                                    onClick={() => handleDeleteBlog(blog._id)}
                                                    className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-1 rounded-full"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-sm text-gray-500">
                                        No blogs found. Create your first blog to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyBlogs
