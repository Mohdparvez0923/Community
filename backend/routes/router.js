import { Router } from "express";
// import { signupSchema } from "../middleware/validation.js";
import { loginUser, signupUser, userProfile } from "../controllers/userControllers.js";
import { loginSchema, signupSchema } from "../middleware/validation.js";
import { createPost } from "../controllers/postControllers.js";
import { protect } from "../middleware/authmiddleware.js";

const accountRouter = Router();

accountRouter.post("/signup",signupSchema,signupUser)
accountRouter.post("/login",loginSchema,loginUser)
accountRouter.get("/profile",protect,userProfile)


export default accountRouter;