import mongoose from "mongoose";
const schema = mongoose.Schema;

const userschema = new schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    },

},{timestamps:true});
const User = mongoose.model('User',userschema);
export default User;