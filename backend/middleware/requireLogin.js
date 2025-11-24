import jwt from 'jsonwebtoken'
import user from '../models/user.js';

const requireLogin = async(req,res,next)=>{
    const {authorization} = req.headers
    if (!authorization){
        return res.status(400).json({msg:"unauthorized person"})
    }
    const token = authorization.replace("Bearer ","");
    const payload = jwt.verify(token,process.env.SECRET_KEY)
    const {_id} = payload
    const User = await user.findById(_id)
     if (!User) {
            return res.status(404).json({ msg: "User not found" });
        }
    req.user = User                                                                                                                             
    next();
}

export default requireLogin