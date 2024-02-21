'use client'
import {useState} from 'react'
import styles from './links.module.css'
import NavLink from "./navLink/navLink"
import Image from 'next/image';

const session=true
const isAdmin=true
const links=[
    {title:'Home',path:'/'},
    {title:'About',path:'/about'},
    {title:'Contact',path:'/contact'},
    {title:'Blog',path:'/blog'}
]
const Links = () => {
    const [open,setOpen]=useState(false)
   
  return (
    <div className={styles.container}>

   
    <div className={styles.links}>
      {links.map((link)=>(<NavLink item={link} key={link.path}/>
      ))}{
        session ?(
            <>
            {isAdmin &&( <NavLink item={ {title:'Admin',path:'/admin'}} key='/admin'/>)}
            <button className={styles.logout}>Logout</button>
            </>
        ):<NavLink item={ {title:'Login',path:'/login'}  }key='/login'/>
      }
    </div>
   
    <Image className={styles.menuButton} onClick={()=>setOpen(prev=>!prev)} src='/menu.png' width={30} height={30}/>
    {
        open && <div className={styles.mobileLinks}>
            {links.map((link)=><NavLink item={link} key={link.path}/>)}
        </div>

    }
    </div>
  )
}

export default Links
