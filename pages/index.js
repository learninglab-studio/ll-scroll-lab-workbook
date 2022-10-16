import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../src/components/layout/Footer'



export default function Home() {
  return (
    <div className='page'>
      <div className={styles.container}>
      <Head>
        <title>Scroll Lab Workbook</title>
        <meta name="description" content="A place to try out scrollytelling with code." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
         scroll lab workbook
        </h1>
      </main>
      <Footer />
    </div>
    </div>
    
  )
}
