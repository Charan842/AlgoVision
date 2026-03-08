import mongoose from "mongoose";

const connectDB = async()=>{
    try{
       const conncection = await mongoose.connect(process.env.mongo_uri);
       console.log(`Server running on http://localhost:${port}`);
    }catch(err){
       console.error('DB_connection error:',err.message);
       process.exit(1);
    }
};
export default connectDB;