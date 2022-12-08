import Head from "next/head";
import Image from "next/image";
import Layout from "../Components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>games</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <div className="container">
          <h1 className="titel"> games
          i play  </h1>
          <p className="description"></p>
          <div className="grid">
            </div>
</div>
            
          
          
             <ul>
         <Image src="/ttf2.jpg" alt="game" width={300} height={200} />
        <Image src="/vtol.jpg" alt="game" width={300} height={200} />
        <Image src="/cyber.jpg" alt="game" width={300} height={200} /></ul>
        <ul><Image src="/twd 2.jpg" alt="game" width={300} height={200} />
        <Image src="/outlast.jpg" alt="game" width={300} height={200} />
        <Image src="/warhammer.jpg" alt="game" width={300} height={200} /></ul>
      </Layout>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" your mom "}
          <span className="logo">
            <Image src="/logo.png" alt="logo" width={72} height={35} />
          </span>
        </a>
      </footer>
    </div>
  );
}
