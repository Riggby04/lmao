import Head from "next/head";
import Image from "next/image";
import Layout from "../Components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>over mij</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <div className="container">
          <h1 className="titel">Neem contact op!</h1>
          <p className="description"></p>
          <div className="row">
            <div className="col-6">
              <h3>Contact Form</h3>

              <div class="container">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" className="form-control" placeholder="Your name.." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" className="form-control" placeholder="Your last name.." />
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." className="form-control"></textarea>
                <p className="pt-4">
                  <input type="submit" value="Submit" className="form-control" />
                </p>
              </div>
            </div>
            <div className="col-6">
              <Image src="/telefoon.png" alt="logo" width={800} height={500} />
            </div>
          </div>
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
