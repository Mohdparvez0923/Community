import mongoose from "mongoose";

const DBConnection = async()=>{
     try {
        const res = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected....")
        return res; 
    } catch (error) {
        console.log(" Error while connecting to database:", error);
        throw error; 
    }
}
export default DBConnection;
