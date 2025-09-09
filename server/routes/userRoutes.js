import express from "express";
import { 
    userSignup, 
    userLogin, 
    getUserProfile, 
    updateUserProfile, 
    getUserDashboard 
} from "../controllers/userController.js";
import auth from "../middleware/auth.js";

const userRouter = express.Router();

// Public routes
userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);

// Protected routes
userRouter.get("/profile", auth, getUserProfile);
userRouter.put("/profile", auth, updateUserProfile);
userRouter.get("/dashboard", auth, getUserDashboard);

export default userRouter;
