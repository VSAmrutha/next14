'use server';
import { connectToDb } from "./utils";
import {Post} from "./models"
import { revalidatePath } from "next/cache";
//import { signOut } from "./auth";
export const addPost=async(formData)=>{
    const {title,desc,slug,userId}=Object.fromEntries(formData)
    try{
        connectToDb();
        const newPost=new Post({title,desc,slug,userId})
        await newPost.save()
        console.log("save to db")
        //to re fetch the posts in blogs page, if you don do this then updated post will not be seen
        revalidatePath('/blog')
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
    }catch(err){
        console.log(err,"actions")
    }
}
//export const handleLogout=async()=>{
//    await signOut()
//  }