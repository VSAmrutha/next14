import { connectToDb } from "@/lib/utils"
import {Post} from "@/lib/models"
import {NextResponse} from "next/server"
export const GET=async(request)=>{
    try{
        connectToDb();
        const posts=await Post.find()
        return NextResponse.json(posts)
    }catch(err){
        console.log(err,"failed to fetch post")
    }
}