'use client'
import styles from './registerForm.module.css'
import { register } from "@/lib/act"
import { useEffect } from 'react'
import {useFormState} from 'react-dom'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
const registerForm = () => {
    const [state,formAction]=useFormState(register,undefined);
    const router=useRouter();
    useEffect(()=>{
state?.success && router.push('/login')
    },[state?.success,router])
  return (
    <form className={styles.form} action={formAction}>
    <input type='text' placeholder='username' name='username'/>
    <input type='text' placeholder='email' name='email'/>
    <input type='password' placeholder='password' name='password'/>
    <input type='password' placeholder='reenter password' name='passwordRepeat'/>
    <button>Register</button>
    {state?.error && <p>{state.error}</p>}
    <Link href='/login'>Have an account?<b>Login</b></Link>
</form>
  )
}

export default registerForm
