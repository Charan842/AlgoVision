import mongoose from "mongoose";

const connectDB = async()=>{
    try{
       const conncection = await mongoose.connect(process.env.mongo_uri);
       console.log(`Database connected harshiniiiiiiiiiiiiii`);
    }catch(err){
       console.error('DB_connection error:',err.message);
       process.exit(1);
    }
};
export default connectDB;