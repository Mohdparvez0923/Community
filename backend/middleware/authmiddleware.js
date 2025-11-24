import jwt from 'jsonwebtoken'
import user from '../models/user.js'
export const protect = async(req,res,next)=>{

    try {
        const token = req.headers.authorization?.split(" ")[1]
        console.log(token)

        if (!token) {
            return res.status(401).json({ message: " unauthorized" })
        }
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        req.user = await user.findById(decoded._id).select("-password")
        next()
    } catch (error) {
        res.status(401).json({ message: "Token failed or expired" })
    }
}