import { Post,User } from "./models";
import {connectToDb} from './utils'
export const getPosts=async()=>{
    try{
        connectToDb()
        const posts=await Post.find()
        console.log("posssss ***db",posts)
        return posts
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch post')
    }
}
export const getPost=async(slug)=>{
    try{
        connectToDb()
        console.log("post ***db",slug)
        const post=await Post.findOne({slug:slug})

        return post
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch post')
    }
}
export const getAllUser=async()=>{
    try{
        connectToDb()
        const users=await User.find()
        return users
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch post')
    }
}
export const getUser=async(id)=>{
    try{
        connectToDb()
        const user=await User.findById(id)
        return user
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch post')
    }
}