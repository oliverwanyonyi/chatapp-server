import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "username already exists"],
    minlength: [4,"Username should be atleast 4 characters"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: true,
    minlength:8
  },
  bio:{
    type:String,
    required:true,
    default:"Hey there iam using Tiktalk!"
  },
  avatar:{
    type:String,
    default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  }
},{timestamps:true});


export default mongoose.model("User",userSchema)