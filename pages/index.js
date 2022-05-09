import Head from 'next/head'
import Image from 'next/image'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Home page</h1>
      <Link href="/Atefeh"> listing</Link>
      <Footer/>


    </div>
  )
}
