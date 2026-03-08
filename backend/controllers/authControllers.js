import {User} from "../models/user";
import bcrypt from "bcrypt";

export const registerUser = async (req,res)=>{
  try{
      const {username,email,password} = req.body;
      const hp = await bcrypt.hash(password,10);

    console.log({username,email,password});
       const user=new User({
        username:username,
        email:email,
        password:hp
    });
    await user.save();
    res.json({
        message:"User received successfully"
    });
 

  }
    catch(err){
    console.log(err);
    res.status(500).json({
      message: "Database error"
    });
  }
};

export const loginUser = async (req,res)=>{
  try{

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user){
      return res.status(404).json({
        message:"User not found"
      });
    }

    if(user.password !== password){
      return res.status(401).json({
        message:"Invalid password"
      });
    }

    res.json({
      message:"Login successful",
      user:user
    });

  }
  catch(err){
    console.log(err);
    res.status(500).json({
      message:"Server error"
    });
  }
};