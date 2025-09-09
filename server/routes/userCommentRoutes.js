import express from "express";
import { 
    getUserComments, 
    approveComment, 
    deleteComment, 
    getCommentStats 
} from "../controllers/commentController.js";
import auth from "../middleware/auth.js";

const userCommentRouter = express.Router();

// All routes require authentication
userCommentRouter.get("/", auth, getUserComments);
userCommentRouter.post("/approve", auth, approveComment);
userCommentRouter.post("/delete", auth, deleteComment);
userCommentRouter.get("/stats", auth, getCommentStats);

export default userCommentRouter;
