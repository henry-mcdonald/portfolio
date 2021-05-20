import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {useEffect, useState} from 'react'

export default function Home() {
  const [imgSrc, setImgSrc] = useState("mysteryman.jpeg")
  const [topMsg, setTopMsg] = useState("Have you seen this man?")
  const [bottomMsg, setBottomMsg] = useState("")
  
  const reveal = () => {
    setImgSrc("/henrymcdonaldlinkedin.jpeg")
    setTopMsg("Welcome")
    setBottomMsg("To The Henry McDonald Experience")
  }

  useEffect(()=>{
    window.addEventListener('scroll',reveal)
    window.addEventListener('click',reveal)

  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to the Henry McDonald Experience<a href="https://nextjs.org"></a>
        </h1> */}
        <p className={styles.henryTitle}>{topMsg}</p>





        <img class={styles.henryFace} src={imgSrc}></img>

        <p className={styles.henryTitle}>{bottomMsg}</p>


        <p className={styles.description}>

        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
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
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
