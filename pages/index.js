import Head from "next/head";
import Image from "next/image";
import Layout from "../Components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>my website hehehaaa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <div className="container">
          <h1 className="titel">ik ben Ole en dit is mijn website.</h1>
          <p className="description"></p>
          <div className="grid">
            <a href="/over%20mij" className="card" target="blank_">
              <h2>over mij &rarr;</h2>
              <p>Dit ben ik</p>
            </a>

            <a href="/ik" rel="noopener noreferrer" className="card">
              <h2>mijn bedrijf &rarr;</h2>
              <p>ik ben een joch</p>
            </a>
          </div>
          <a href="/contact#" className="card" target="_blank">
            <h2>neem contact op &rarr;</h2>
            <p></p>
          </a>
        </div>
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
