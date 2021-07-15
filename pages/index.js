import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blakely Burns</title>
        <meta name="description" content="Blakely's developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm Blakely.
        </h1>

        <p className={styles.description}>
          I'm a full-stack software developer.
        </p>
      </main>
    </div>
  )
}
