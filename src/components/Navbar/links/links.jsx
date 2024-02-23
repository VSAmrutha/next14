'use client'
import {useState} from 'react'
import styles from './links.module.css'
import NavLink from "./navLink/navLink"
import Image from 'next/image';
import { handleLogout } from '@/lib/act';



const links=[
    {title:'Home',path:'/'},
    {title:'About',path:'/about'},
    {title:'Contact',path:'/contact'},
    {title:'Blog',path:'/blog'}
]
const Links = ({session}) => {
    const [open,setOpen]=useState(false)
    
const isAdmin=true
   
  return (
    <div className={styles.container}>

   
    <div className={styles.links}>
      {links.map((link)=>(<NavLink item={link} key={link.path}/>
      ))}{
        session?.user ?(
            <>
            {session.user?.isAdmin &&( <NavLink item={ {title:'Admin',path:'/admin'}} key='/admin'/>)}
            <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
            </form>
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
