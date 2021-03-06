import useSWR from 'swr'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GitHubSwr() {
    const { data, error } = useSWR(
        "https://api.github.com/repos/vercel/swr",
        fetcher
      );
    
      if (error) return "An error has occurred.";
      if (!data) return "Loading...";
      return (
        <div>
          <div className={styles.grid}>
              <Link href="/" className={styles.card}>
                  <h2>Goto Home Page &rarr;</h2>
              </Link>          
          </div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <strong>👁 {data.subscribers_count}</strong>{" "}
          <strong>✨ {data.stargazers_count}</strong>{" "}
          <strong>🍴 {data.forks_count}</strong>
        </div>
      );
    }
    