import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Goede stitel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ik ben Wouter en dit is mijn website 
        </h1>

        <p className={styles.description}>
         
        </p>

        <div className={styles.grid}>
          <a href="https://www.twitch.tv/acc_issues_xx" className={styles.card} target= 'blank_'> 
            
            <h2>Documentation &rarr;</h2>
            <p>my twitch.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>lear abt your mom!</p>

            </a> 

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="/ik"
            
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>joch &rarr;</h2>
            <p>
              ik ben een joch 
            </p>
          </a>
        </div>
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
   