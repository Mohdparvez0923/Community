import {Router} from "express";
import { allPosts, commentPost, createPost, deletePost, likePost, myPosts, uncommentPost, unlikePost } from "../controllers/postControllers.js";
import requireLogin from "../middleware/requireLogin.js";

const postRouter = Router()

postRouter.post("/create",requireLogin,createPost)

postRouter.delete("/delete/:id",requireLogin,deletePost)

postRouter.get("/myPosts",requireLogin,myPosts)

postRouter.get("/allPosts",requireLogin,allPosts)

postRouter.put("/like",requireLogin,likePost)

postRouter.put("/unlike",requireLogin,unlikePost)

postRouter.put("/comment",requireLogin,commentPost)

postRouter.put("/uncomment",requireLogin,uncommentPost)

export default postRouter;