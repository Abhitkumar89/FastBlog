import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Dashboard = () => {
    const { axios, user } = useAppContext()
    const [dashboardData, setDashboardData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDashboardData()
    }, [])

    const fetchDashboardData = async () => {
        try {
            const [dashboardResponse, commentStatsResponse] = await Promise.all([
                axios.get('/api/user/dashboard'),
                axios.get('/api/user/comments/stats')
            ])
            
            if (dashboardResponse.data.success) {
                const dashboardData = dashboardResponse.data.dashboard
                
                // Add comment stats to dashboard data
                if (commentStatsResponse.data.success) {
                    dashboardData.stats = {
                        ...dashboardData.stats,
                        totalComments: commentStatsResponse.data.stats.totalComments,
                        approvedComments: commentStatsResponse.data.stats.approvedComments,
                        pendingComments: commentStatsResponse.data.stats.pendingComments
                    }
                }
                
                setDashboardData(dashboardData)
            } else {
                toast.error(dashboardResponse.data.message)
            }
        } catch (error) {
            toast.error('Failed to fetch dashboard data')
        } finally {
            setLoading(false)
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
            </div>
        )
    }

    return (
        <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                    <div className="flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">{dashboardData?.stats?.totalBlogs || 0}</p>
                            <p className="text-xs sm:text-sm text-gray-500">Blogs</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                    <div className="flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">{dashboardData?.stats?.totalComments || 0}</p>
                            <p className="text-xs sm:text-sm text-gray-500">Comments</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">{dashboardData?.stats?.draftBlogs || 0}</p>
                            <p className="text-xs sm:text-sm text-gray-500">Drafts</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Blogs Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="text-base sm:text-lg font-semibold text-gray-900">Latest Blogs</h2>
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BLOG TITLE</th>
                                <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {dashboardData?.blogs?.length > 0 ? (
                                dashboardData.blogs.slice(0, 5).map((blog, index) => (
                                    <tr key={blog._id}>
                                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                                        <td className="px-2 sm:px-6 py-4 text-sm font-medium text-gray-900 max-w-32 sm:max-w-none truncate sm:whitespace-nowrap">{blog.title}</td>
                                        <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(blog.createdAt)}</td>
                                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                blog.isPublished 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {blog.isPublished ? 'Published' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex items-center space-x-1">
                                                <button className="text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-1 sm:px-2 py-1 rounded text-xs">
                                                    <span className="hidden sm:inline">{blog.isPublished ? 'Unpublish' : 'Publish'}</span>
                                                    <span className="sm:hidden">{blog.isPublished ? 'Unpub' : 'Pub'}</span>
                                                </button>
                                                <button className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-1 rounded-full">
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                        No blogs yet. <Link to="/dashboard/add-blog" className="text-purple-600 hover:text-purple-700 font-medium">Create your first blog</Link>
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

export default Dashboard
