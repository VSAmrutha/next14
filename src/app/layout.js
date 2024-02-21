import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Next JS 14',
    template:'%s | Next Js 14'
  },
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='container'>
      <Navbar/>
      {children}
      <Footer/>
      </div>
      
      </body>
    </html>
  )
}