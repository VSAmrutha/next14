import {  signIn } from '@/lib/auth'
import LoginForm from '@/components/loginForm/loginForm'
import styles from './login.module.css'
const Login = async() => {
  const handleGithubLogin=async()=>{
    "use server"
   await signIn("github")
  }
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
    <form action={handleGithubLogin}>
    <button className={styles.github}>Login with Github</button>
    </form>
    <LoginForm/>
     
    </div>
    </div>
  )
}

export default Login
