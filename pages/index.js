import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Goede stitel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {" "}
        
        <h1 className="titel">ik ben Ole en dit is mijn website.</h1>
        <p className="description"></p>
        <div className="grid">
          <a
            href="https://www.twitch.tv/acc_issues_xx"
            className="card"
            target="blank_"
          >
            <h2>Documentation &rarr;</h2>
            <p>my twitch.</p>
          </a>
          <a href="/ik" rel="noopener noreferrer" className="card">
            <h2>joch &rarr;</h2>
            <p>ik ben een joch</p>
          </a>
        </div>
        <div className="alert alert-warning" role="alert">
          A simple primary alert—check it out!
        </div>
      </main>
      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" your mom "}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
