import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {
    const { axios } = useAppContext()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('all') // 'all', 'approved', 'pending'

    useEffect(() => {
        fetchComments()
    }, [])

    const fetchComments = async () => {
        try {
            const { data } = await axios.get('/api/user/comments')
            if (data.success) {
                setComments(data.comments)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Failed to fetch comments')
        } finally {
            setLoading(false)
        }
    }

    const handleApproveComment = async (commentId) => {
        try {
            const { data } = await axios.post('/api/user/comments/approve', { commentId })
            if (data.success) {
                toast.success(data.message)
                fetchComments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Failed to approve comment')
        }
    }

    const handleDeleteComment = async (commentId) => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            try {
                const { data } = await axios.post('/api/user/comments/delete', { commentId })
                if (data.success) {
                    toast.success(data.message)
                    fetchComments()
                } else {
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error('Failed to delete comment')
            }
        }
    }

    const filteredComments = comments.filter(comment => {
        if (filter === 'approved') return comment.isApproved
        if (filter === 'pending') return !comment.isApproved
        return true
    })

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Comments</h1>
                
                {/* Filter Buttons */}
                <div className="flex space-x-2">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filter === 'all'
                                ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('approved')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filter === 'approved'
                                ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                        Approved
                    </button>
                    <button
                        onClick={() => setFilter('pending')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filter === 'pending'
                                ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                        Not Approved
                    </button>
                </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BLOG TITLE & COMMENT</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredComments.length > 0 ? (
                                filteredComments.map((comment) => (
                                    <tr key={comment._id}>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{comment.blogTitle}</p>
                                                <p className="text-sm text-gray-600 mt-1">{comment.content}</p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    by {comment.name}
                                                    {comment.email && ` (${comment.email})`}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                            {new Date(comment.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end space-x-2">
                                                {!comment.isApproved && (
                                                    <button
                                                        onClick={() => handleApproveComment(comment._id)}
                                                        className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded text-xs"
                                                    >
                                                        Approve
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleDeleteComment(comment._id)}
                                                    className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded text-xs"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="px-6 py-12 text-center text-sm text-gray-500">
                                        No comments found.
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

export default Comments
