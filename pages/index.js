import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Project from '../components/Project'
import WebPageLink from '../components/webPageLink'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Skills from '../components/Skills'

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

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'left' }}>
          <WebPageLink
            name="Projects"
            link="#Projects"
          />

          <WebPageLink
            name="About Me"
            link="#AboutMe"
          />
          <WebPageLink
            name="Contact"
            link="#Contact"
          />
          <div style={{ alignContent: 'center' }}>
            <a target="_blank" href="../../henrymcdonald.pdf" style={{ fontSize: '5vw', color: 'blue' }}>Resume</a>


          </div>
          

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

        <h1 style={{ fontSize: '25' }} id="Projects">
          Henry's Projects:
</h1>

        <Project
          name="Just Read The Instructions"
          link="https://henry-mcdonald.github.io/"
          github="https://github.com/henry-mcdonald/seir_project1"
          imgsrc="../../justreadtheinstructions.png"
          description="Move around and survive. An in-browser game built with Canvas, Javascript, HTML. Just read the instructions"
        />
        <Project
          name="Stonkhub"
          link="https://stonkhub-freshstart.herokuapp.com/"
          github="https://github.com/henry-mcdonald/stonkhub-freshstart"
          imgsrc="../../stonkhub.png"
          description="Robinhood is out, Stonkhub is in. The paper trading site that doesn't limit your potential. Open to all. Built with EJS, Express, Node"
        />
        <Project
          name="relateD"
          link="https://related.netlify.app/"
          github="https://github.com/henry-mcdonald/relatedclient"
          github2="https://github.com/henry-mcdonald/relatedserver"
          imgsrc="../../relateD.png"
          description="relateD is the Feed for those with the Need. A social media website built on Mongoose, Express, React.js, Node.js"
        />
        <Project
          name="portfolioDev"
          link="https://main--portfoliodevwebsite.netlify.app/"
          github="https://github.com/henry-mcdonald/portfoliodev-server"
          github2="https://github.com/henry-mcdonald/portfoliodev-client"
          imgsrc="../../portfoliodev.png"
          description="Don't pay to host your static websites, host it on PortfolioDev. Built by Devs, for Devs. Built on Mongoose, Express, React.js, Node.js"
        />
        <AboutMe>

        </AboutMe>
        <Contact />
        <Skills />



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
