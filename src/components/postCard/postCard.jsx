import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const postCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
       {post.img && <div className={styles.imgContainer}>
            <Image src={post.img} fill className={styles.img}/>
        </div>}
        <span className={styles.date}>24.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc} </p>
        <Link href={`blog/${post.slug}`} className={styles.link}>Read More..</Link>
      </div>
    </div>
  )
}

export default postCard
