"use server"
import { signOut,signIn } from "./auth";

import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from 'bcryptjs'
export const handleLogout=async()=>{

    await signOut()
    
  }
export const register=async(previousState,formdata)=>{
  const {username,email,password,passwordRepeat}=Object.fromEntries(formdata);
  if(password!==passwordRepeat) {
    //return "Password do not match"
    return {error:"Password do not match"}
  }
  try{
    connectToDb();
    const user=await User.findOne({username});
    if(user){
      return {error:"User Already exists"}
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const newUser=new User({
      username,email,password:hashedPassword
    })
    await newUser.save();
return {success:true}
  }catch(err){
    console.log(err)
    return {error:"Something went wrong"}
  }

}
//export const loginUser=async(previousState,formData)=>{
//  const {username,password}=Object.fromEntries(formData)
//  try{
//    await signIn("credentials",{username,password})
 
//}catch(err){
//    console.log(err,"login error")
//    if(err.message.includes('CredentialsSignin')){
//      return {error:"invalid username or password"}
//    }
//   throw err
//  }
//}
export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};