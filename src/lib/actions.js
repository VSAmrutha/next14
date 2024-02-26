'use server';
import { connectToDb } from "./utils";
import {Post,User} from "./models"
import { revalidatePath } from "next/cache";
//import { signOut } from "./auth";
export const addPost=async(prevState,formData)=>{
    const {title,desc,slug,userId,img}=Object.fromEntries(formData)
    try{
        connectToDb();
        const newPost=new Post({title,desc,slug,userId,img})
        await newPost.save()
        console.log("save to db")
        //to re fetch the posts in blogs page, if you don do this then updated post will not be seen
        revalidatePath('/blog')
        revalidatePath('/admin')
    }catch(err){
        console.log(err,"actions")
    }
}
export const deletePost=async(formData)=>{
 
    const {id}=Object.fromEntries(formData)
    console.log('hello',id)
    try{
        connectToDb();
       
        await Post.findByIdAndDelete(id)
        console.log("delete to db")
        //to re fetch the posts in blogs page, if you don do this then updated post will not be seen
        revalidatePath('/blog')
        revalidatePath('/admin')
    }catch(err){
        console.log(err,"actions")
    }
}

export const addUser=async(prevState,formData)=>{
    const {username,email,password,img}=Object.fromEntries(formData)
    try{
        connectToDb();
        const newUser=new User({username,email,password,img})
        await newUser.save()
        console.log("save to db")
        //to re fetch the posts in blogs page, if you don do this then updated post will not be seen
        revalidatePath('/admin')
    }catch(err){
        console.log(err,"actions")
    }
}
export const deleteUser=async(formData)=>{
 
    const {id}=Object.fromEntries(formData)
    console.log('hello',id)
    try{
        connectToDb();
       await Post.deleteMany({userId:id})
        await User.findByIdAndDelete(id)
        console.log("delete to db")
        //to re fetch the posts in blogs page, if you don do this then updated post will not be seen
        revalidatePath('/admin')
    }catch(err){
        console.log(err,"actions")
    }
}
//export const handleLogout=async()=>{
//    await signOut()
//  }
