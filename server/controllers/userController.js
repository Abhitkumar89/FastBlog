import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import Blog from '../models/Blog.js';

// User Registration
export const userSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists with this email" });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || "secret@2025",
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: "User created successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                bio: user.bio
            }
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// User Login
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || "secret@2025",
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                bio: user.bio
            }
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get User Profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                bio: user.bio,
                isVerified: user.isVerified
            }
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Update User Profile
export const updateUserProfile = async (req, res) => {
    try {
        const { name, bio } = req.body;
        const userId = req.userId;

        const user = await User.findByIdAndUpdate(
            userId,
            { name, bio },
            { new: true, runValidators: true }
        ).select('-password');

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({
            success: true,
            message: "Profile updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                bio: user.bio
            }
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get User Dashboard Data
export const getUserDashboard = async (req, res) => {
    try {
        const userId = req.userId;

        // Get user's blogs
        const userBlogs = await Blog.find({ author: userId })
            .sort({ createdAt: -1 })
            .populate('author', 'name avatar');

        // Get user's published blogs count
        const publishedBlogs = await Blog.countDocuments({ 
            author: userId, 
            isPublished: true 
        });

        // Get user's draft blogs count
        const draftBlogs = await Blog.countDocuments({ 
            author: userId, 
            isPublished: false 
        });

        // Get total views on user's blogs
        const totalViews = await Blog.aggregate([
            { $match: { author: userId } },
            { $group: { _id: null, totalViews: { $sum: "$views" } } }
        ]);

        res.json({
            success: true,
            dashboard: {
                blogs: userBlogs,
                stats: {
                    totalBlogs: userBlogs.length,
                    publishedBlogs,
                    draftBlogs,
                    totalViews: totalViews[0]?.totalViews || 0
                }
            }
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
