import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },username:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },pic:{
        type:String,
        default:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    },phone:{
        type:String,
        required:false
    },followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]
},{timestamps:true})

const user = mongoose.model("user",userSchema)
export default user