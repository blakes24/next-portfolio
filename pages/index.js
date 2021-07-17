import Head from 'next/head'
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blakely Burns</title>
        <meta name="description" content="Blakely's developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Blakely Burns</h1>
        <p className={styles.description}>Full-stack web developer</p>
        <Link href="/projects">
          <a className={styles.link}>View my work</a>
        </Link>
      </main>
    </div>
  );
}
