import { getPost } from '@/lib/data'
import styles from './singlePostPage.module.css'
import Image from 'next/image'
import PostUser from '@/components/PostUser/PostUser'
import { Suspense } from 'react'
//export const metadata = {
//  title: "Post Page",
//  description: "About description",
//};
const getData=async(slug)=>{
  const res=await fetch(`http://localhost:3000/api/blog/${slug}`)
  if(!res.ok){
    throw new Error("Something went wrong ****slug")
  }
  return res.json()
}
export const generateMetadata=async({params})=>{
  const {slug}=params
  //const post=await getPost(slug)
 
  const post =await getData(slug);
  return {
    title:post.title,
    description:post.desc
  }
}
const SinglePostPage = async({params}) => {
  const {slug}=params
  const post=await getPost(slug)
  return (
    <div className={styles.container}>
      {post.img && <div className={styles.imgContainer}>
      <Image className={styles.img} src={post.img} alt='blog post' fill/>
    </div>}
    <div className={styles.textContainer}>
    <h1 className={styles.title}>{post.title}</h1>
    <div className={styles.detail}>
    
     <Suspense fallbact={<div>Loading...!!</div>}>
      <PostUser userId={post.userId}/>
      </Suspense>
    <div className={styles.detailText}>
        <span className={styles.detailTitle}>Published</span>
        <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
    </div>
   
    </div>
    <div className={styles.content}>
   {post.desc}
    </div>
    </div>
    </div>
  )
}

export default SinglePostPage
