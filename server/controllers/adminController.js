import jwt from 'jsonwebtoken'
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';

export const adminLogin = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
        const adminPassword = process.env.ADMIN_PASSWORD || "admin";
        const jwtSecret = process.env.JWT_SECRET || "secret@2025";

        if(email !== adminEmail || password !== adminPassword){
            return res.json({success: false, message: "Invalid Credentials"})
        }

        const token = jwt.sign({email}, jwtSecret)
        res.json({success: true, token})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getAllBlogsAdmin = async (req, res) =>{
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1});
        res.json({success: true, blogs})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getAllComments = async (req, res) =>{
    try {
        const comments = await Comment.find({}).populate("blog").sort({createdAt: -1})
        res.json({success: true, comments})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getDashboard = async (req, res) =>{
    try {
        const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
        const blogs = await Blog.countDocuments();
        const comments = await Comment.countDocuments()
        const drafts = await Blog.countDocuments({isPublished: false})

        const dashboardData = {
            blogs, comments, drafts, recentBlogs
        }
        res.json({success: true, dashboardData})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const deleteCommentById = async (req, res) =>{
    try {
        const {id} = req.body;
        await Comment.findByIdAndDelete(id);
        res.json({success: true, message:"Comment deleted successfully" })
    } catch (error) {
       res.json({success: false, message: error.message}) 
    }
}

export const approveCommentById = async (req, res) =>{
    try {
        const {id} = req.body;
        await Comment.findByIdAndUpdate(id, {isApproved: true});
        res.json({success: true, message:"Comment approved successfully" })
    } catch (error) {
       res.json({success: false, message: error.message}) 
    }
}

export const deleteBlogById = async (req, res) =>{
    try {
        const { id } = req.body;
        
        // Check if blog exists
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }

        // Admin can delete any blog
        await Blog.findByIdAndDelete(id);

        // Delete all comments associated with the blog
        await Comment.deleteMany({blog: id});

        res.json({success: true, message: 'Blog deleted successfully'})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const toggleBlogPublish = async (req, res) =>{
    try {
        const { id } = req.body;
        
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }

        // Admin can toggle publish status of any blog
        await Blog.findByIdAndUpdate(id, {isPublished: !blog.isPublished});

        res.json({success: true, message: `Blog ${!blog.isPublished ? 'published' : 'unpublished'} successfully`})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}