
import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Next App</title>
    </Head>
    <div>
      <h1>Home page</h1>
      <Link href="/products"> Products</Link>
      
    </div>
    </>
  )
}
