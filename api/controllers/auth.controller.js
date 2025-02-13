import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import errorHandler from "../utils/error.js";

 const signup = async (req,res, next)=>{
  
  const {userName , email, password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password,10);
  const newUser = new User({userName, email, password: hashedPassword});
  try {
    await newUser.save()
    res.status(201).json("user Created successfully");
  } catch (error) {
    next(errorHandler(550, "error form the function passed"));
    
  }
}

export default signup