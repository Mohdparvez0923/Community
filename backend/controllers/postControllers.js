
import post from "../models/post.js"


export const createPost =  async (req,res)=>{
        const{content,image,title} = req.body
        if (!content || !image || !title) {
            return res.status(422).json({msg:"please fill all the fields"})
        } else {
            const Post = new post({
                author:req.user._id,
                content,
                title,
                image,
                postedBy:req.user._id
            })
            await Post.save()
            return res.status(201).json({msg:"post created successfully",Post})
        }
}

export const deletePost = async(req,res)=>{
    try {
        const postId = req.params.id;
        const userId = req.user._id

        const Post  = await post.findById(postId)
        
        if(!Post){
            return res.status(200).json({msg:"post not found"})
        }

        if(Post.postedBy.toString() !== userId.toString()){
            return res.status(403).json({msg:"you are not allowed to delete this post"})
        }

        await post.findByIdAndDelete(postId)
        res.status(200).json({msg:"post deleted successfully!!"})

    } catch (error) {
        console.log("error",error)
    }
}

export const myPosts = async (req,res)=>{
    try {
        const posts = await post.find({postedBy:req.user._id}).populate("postedBy","username pic")
        return res.status(200).json({posts})
    } catch (error) {
        console.log("error",error)
    }
}

export const allPosts = async (req,res)=>{
    try {
        const posts = await post.find().populate("postedBy","username pic")
           return res.status(200).json({msg:"post fetched",posts})
    } catch (error) {
        console.log("error",error)
    }
}


export const likePost = async(req,res)=>{
        try {
            const{postId} = req.body
            const result = await post.findByIdAndUpdate(postId,
                {$addToSet:{likes:req.user._id}},
                {new:true}
            )
            return res.status(201).json({msg:"post liked successfully",result})
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({msg:"error while linking the post",error})
        }
}


export const unlikePost = async(req,res)=>{
        try {
            const{postId} = req.body
            const result = await post.findByIdAndUpdate(postId,
                {$addToSet:{likes:req.user._id}},
                {new:true}
            )
            return res.status(201).json({msg:"post unliked successfully",result})
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({msg:"error while linking the post",error})
        }
}


export const commentPost = async(req,res)=>{
    try {
       const comment = {
        text:req.body.text,
        postedBy:req.user._id
       }
       const result = await post.findByIdAndUpdate(req.body.postId,
        {
            $push:{comments:comment}
        },
        {new:true}
       )
       return res.status(201).json({msg:"comment added successfully", result})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"error while commenting the post"})
    }
}

export const uncommentPost = async(req,res)=>{
    try {
       const comment = {
        text:req.body.text,
        postedBy:req.user._id
       }
       const result = await post.findByIdAndUpdate(req.body.postId,
        {
            $pull:{comments:comment}
        },
        {new:true}
       )
       return res.status(201).json({msg:"comment deleted successfully", result})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"error while deleting comment"})
    }
}
