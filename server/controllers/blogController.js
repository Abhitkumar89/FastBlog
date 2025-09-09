import fs from 'fs'
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';
import User from '../models/User.js';
import main from '../configs/gemini.js';

export const addBlog = async (req, res)=>{
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        // Check if all fields are present
        if(!title || !description || !category || !imageFile){
            return res.json({success: false, message: "Missing required fields" })
        }

        const fileBuffer = fs.readFileSync(imageFile.path)

        // Upload Image to ImageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

        // optimization through imagekit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'}, // Auto compression
                {format: 'webp'},  // Convert to modern format
                {width: '1280'}    // Width resizing
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({
            title, 
            subTitle, 
            description, 
            category, 
            image, 
            isPublished,
            author: req.userId
        })

        res.json({success: true, message: "Blog added successfully"})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getAllBlogs = async (req, res)=>{
    try {
        const blogs = await Blog.find({isPublished: true})
            .populate('author', 'name avatar')
            .sort({createdAt: -1})
        res.json({success: true, blogs})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getBlogById = async (req, res) =>{
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId)
            .populate('author', 'name avatar bio')
            .populate('likes', 'name')
        
        if(!blog){
            return res.json({ success: false, message: "Blog not found" });
        }

        // Increment view count
        blog.views += 1;
        await blog.save();

        res.json({success: true, blog})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const deleteBlogById = async (req, res) =>{
    try {
        const { id } = req.body;
        
        // Check if user owns the blog
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }
        
        if (blog.author.toString() !== req.userId) {
            return res.json({ success: false, message: "You can only delete your own blogs" });
        }

        await Blog.findByIdAndDelete(id);

        // Delete all comments associated with the blog
        await Comment.deleteMany({blog: id});

        res.json({success: true, message: 'Blog deleted successfully'})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


export const togglePublish = async (req, res) =>{
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        
        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }
        
        if (blog.author.toString() !== req.userId) {
            return res.json({ success: false, message: "You can only update your own blogs" });
        }
        
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success: true, message: 'Blog status updated'})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


export const addComment = async (req, res) =>{
    try {
        const {blog, name, content } = req.body;
        await Comment.create({blog, name, content});
        res.json({success: true, message: 'Comment added for review'})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getBlogComments = async (req, res) =>{
    try {
        const {blogId } = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
        res.json({success: true, comments})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const generateContent = async (req, res)=>{
    try {
        const {prompt} = req.body;
        const content = await main(prompt + ' Generate a blog content for this topic in simple text format')
        res.json({success: true, content})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const likeBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const userId = req.userId;

        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }

        const isLiked = blog.likes.includes(userId);
        
        if (isLiked) {
            // Unlike the blog
            blog.likes = blog.likes.filter(id => id.toString() !== userId);
        } else {
            // Like the blog
            blog.likes.push(userId);
        }

        await blog.save();

        res.json({
            success: true,
            message: isLiked ? "Blog unliked" : "Blog liked",
            likes: blog.likes.length,
            isLiked: !isLiked
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}