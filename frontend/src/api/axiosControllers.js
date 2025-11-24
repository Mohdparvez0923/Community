import { axiosInstance } from "./axiosInstance"


export const SignupUser = async(fullName,userName,email,password)=>{
        try {
            const response = await axiosInstance.post("/signup",{
                name:fullName,
                username:userName,
                email,
                password
            })
            if(response.status === 201){
                return { success: true, data: response.data };
            }
            return response.data
        } catch (error) {
            console.log("error while signup",error)
            return {success:false,message:"signup failed"}
        }
}


export const loginUser = async (email,password)=>{
    try {
        const response = await axiosInstance.post("/login",{
            email,
            password
        })
         if (response.status === 201) {
            return response.data
        }if (response.status === 400) {
            return {success:false,message:"User not found"}
        }if (response.status === 422) {
            return {success:false,message:"invalid password"}
        }
    } catch (error) {
        console.log("login error",error)

    }

}