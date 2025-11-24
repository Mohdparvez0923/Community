import Joi from "joi";

export const signupSchema =(req,res,next)=>{
    const schema = Joi.object({
    name:Joi.string().min(3).max(100).required(),
    username:Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    password:Joi.string().min(6).max(100).required()
})

    const {error,value} = schema.validate(req.body,{abortEarly:false});
    if (error) {
        const message = error.details.map(detail => detail.message);
        return res.status(400).json({errors:message})
    }
    req.body = value
    next()
}


export const loginSchema =(req,res,next)=>{
    const schema = Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string().min(6).max(100).required()
})

    const {error,value} = schema.validate(req.body,{abortEarly:false});
    if (error) {
        const message = error.details.map(detail => detail.message);
        return res.status(400).json({errors:message})
    }
    req.body = value
    next()
}
