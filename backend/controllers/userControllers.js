
import { comparePassword, hashPassword } from "../encryption/password.js";
import user from "../models/user.js";
import jwt from 'jsonwebtoken'


export const signupUser = async (req,res)=>{
        try {
            const {name,username,email,password} = req.body;
            const existingUser = await user.findOne({email})
            if (!existingUser) {
                const newUser = new user({
                    name,
                    username,
                    email,
                    password:await hashPassword(password)
                })
                 await newUser.save()
                 return res.status(201).json({msg:"user created successfully",success:true,newUser})
            } else {
                return res.status(400).json({msg:"user already exist"})
            }
        } catch (error) {
            console.log("signup error",error)
        }
}

export const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const userFoundOrNot = await user.findOne({email})
        if (userFoundOrNot) {
            const isPassCorrectOrNot = await comparePassword(password,userFoundOrNot.password)
            if (isPassCorrectOrNot) {
                const token = jwt.sign({_id:userFoundOrNot._id},process.env.SECRET_KEY)
                res.status(201).json({msg:"user logged in",token,userFoundOrNot})
            }else{
                    return res.status(422).json({msg:"invalid password"})
            }
        } else {
            res.status(400).json({msg:"user not found"})
        }
    } catch (error) {
        return res.status(400).json({msg:"error while loggin in"})
    }
}

export const userProfile = async (req, res) => {
  try {
    res.json(req.user)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}
