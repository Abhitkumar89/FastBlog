import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';
import User from '../models/User.js';

// Get all comments for a user's blogs
export const getUserComments = async (req, res) => {
    try {
        const userId = req.userId;

        // Get all blogs by the user
        const userBlogs = await Blog.find({ author: userId }).select('_id title');
        const blogIds = userBlogs.map(blog => blog._id);

        // Get all comments on user's blogs
        const comments = await Comment.find({ blog: { $in: blogIds } })
            .populate('blog', 'title')
            .populate('author', 'name email')
            .sort({ createdAt: -1 });

        // Format comments with blog title
        const formattedComments = comments.map(comment => ({
            _id: comment._id,
            content: comment.content,
            name: comment.name,
            email: comment.email,
            isApproved: comment.isApproved,
            createdAt: comment.createdAt,
            blogTitle: comment.blog.title,
            author: comment.author
        }));

        res.json({
            success: true,
            comments: formattedComments
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Approve a comment
export const approveComment = async (req, res) => {
    try {
        const { commentId } = req.body;
        const userId = req.userId;

        // Find the comment and verify it belongs to user's blog
        const comment = await Comment.findById(commentId).populate('blog', 'author');
        
        if (!comment) {
            return res.json({ success: false, message: "Comment not found" });
        }

        if (comment.blog.author.toString() !== userId) {
            return res.json({ success: false, message: "You can only approve comments on your own blogs" });
        }

        comment.isApproved = true;
        await comment.save();

        res.json({
            success: true,
            message: "Comment approved successfully"
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Delete a comment
export const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.body;
        const userId = req.userId;

        // Find the comment and verify it belongs to user's blog
        const comment = await Comment.findById(commentId).populate('blog', 'author');
        
        if (!comment) {
            return res.json({ success: false, message: "Comment not found" });
        }

        if (comment.blog.author.toString() !== userId) {
            return res.json({ success: false, message: "You can only delete comments on your own blogs" });
        }

        await Comment.findByIdAndDelete(commentId);

        res.json({
            success: true,
            message: "Comment deleted successfully"
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get comment statistics for dashboard
export const getCommentStats = async (req, res) => {
    try {
        const userId = req.userId;

        // Get all blogs by the user
        const userBlogs = await Blog.find({ author: userId }).select('_id');
        const blogIds = userBlogs.map(blog => blog._id);

        // Get comment counts
        const totalComments = await Comment.countDocuments({ blog: { $in: blogIds } });
        const approvedComments = await Comment.countDocuments({ 
            blog: { $in: blogIds }, 
            isApproved: true 
        });
        const pendingComments = await Comment.countDocuments({ 
            blog: { $in: blogIds }, 
            isApproved: false 
        });

        res.json({
            success: true,
            stats: {
                totalComments,
                approvedComments,
                pendingComments
            }
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
