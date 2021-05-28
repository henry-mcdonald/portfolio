import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Project from '../components/Project'
import WebPageLink from '../components/webPageLink'

export default function Home() {
  const [imgSrc, setImgSrc] = useState("mysteryman.jpeg")
  const [topMsg, setTopMsg] = useState("Have you seen this Software Engineer?")
  const [bottomMsg, setBottomMsg] = useState("")

  const reveal = () => {
    setImgSrc("/henrymcdonaldlinkedin.jpeg")
    setTopMsg("Welcome to")
    setBottomMsg("The Henry McDonald Experience")
  }

  useEffect(() => {
    window.addEventListener('scroll', reveal)
    window.addEventListener('click', reveal)

  }, [])

  return (

    <div className={styles.container}>

      <div style={{display:'flex',justifyContent:'space-between'}}>

      <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <WebPageLink 
        name="Projects"
        link="#Projects"
        />
        <WebPageLink />
      </div>
        <div>
      <p className={styles.henryTitle}>{topMsg}</p>
      <img class={styles.henryFace} src={imgSrc}></img>

      <p className={styles.henryTitle}>{bottomMsg}</p>
      </div>

      </div>
      <Head>
        <title>Welcome..</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className={styles.main}>

        <h1 style={{ fontSize: '2.5vw' }} id="Projects">
          Henry's Projects:
</h1>

        <Project
          name="Just Read The Instructions"
          link="https://henry-mcdonald.github.io/"
          imgsrc="../../justreadtheinstructions.png"
        />
        <Project
          name="Stonkhub"
          link="https://stonkhub-freshstart.herokuapp.com/"
          imgsrc="../../stonkhub.png"
        />
        <Project
          name="relateD"
          link="https://related.netlify.app/"
          imgsrc="../../relateD.png"
        />
        <Project
          name="portfolioDev"
          link="https://main--portfoliodevwebsite.netlify.app/"
          imgsrc="../../portfoliodev.png"
        />


        <div>


          {/* <h1 className={styles.title}>
          Welcome to the Henry McDonald Experience<a href="https://nextjs.org"></a>
        </h1> */}



        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}
