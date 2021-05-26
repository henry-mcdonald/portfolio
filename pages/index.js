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

<h1>
      Henry's Projects:
</h1>

<br />
<br />

<div>
Just Read The Instructions (in-browser game):
<br />

<a>https://henry-mcdonald.github.io/</a>

</div>

<br />

<div>
Stonkhub (trading application): 
<br />

<a>https://stonkhub-freshstart.herokuapp.com/</a>

</div>

<br />
<br />

<div>
RelateD (newsfeed application): 
<br />

<a>https://related.netlify.app/</a>

</div>

<br />
portfolioDev (self-serve HTML hosting): 
<br />

<a>https://main--portfoliodevwebsite.netlify.app/</a>
<div>


        {/* <h1 className={styles.title}>
          Welcome to the Henry McDonald Experience<a href="https://nextjs.org"></a>
        </h1> */}
        <p className={styles.henryTitle}>{topMsg}</p>





        <img class={styles.henryFace} src={imgSrc}></img>

        <p className={styles.henryTitle}>{bottomMsg}</p>


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
