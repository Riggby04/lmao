
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ladediedadam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      Welcome to <a href="/">whooooooooooooooooooooooo!</a><a href="/ik">klick me </a>
      </main> 

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' your mom '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
         </span>
        </a>
      </footer>
    </div>
  )
}
   