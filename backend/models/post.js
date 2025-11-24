
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },content:{
        type:String,
        required:true
    },image:{
        type:String,
    },likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }], comments: [{
        text: { type: String, required: true },
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    }],postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{ timestamps: true})

const post = mongoose.model("post",postSchema)
export default post