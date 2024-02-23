'use client'
import styles from './loginForm.module.css'
import { login } from "@/lib/act"

import {useFormState} from 'react-dom'

import Link from 'next/link'
 const LoginForm=()=>{
    const [state,loginmethod]=useFormState(login,undefined)
   return( 
    <form action={loginmethod} className={styles.form}>
      <input type='text' placeholder='username' name='username'/>
      <input type='password' placeholder='password' name='password'/>
      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
      <Link href='/register'>Dont Have an account?<b>Regiter</b></Link>
    </form>
   )
}
export default LoginForm