import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Offline() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Offline</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          You are offline, must be online to view pages.
        </h1>
      </main>
    </div>
  )
}