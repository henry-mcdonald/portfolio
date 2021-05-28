import styles from '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return(
    <div className={styles.container}>
      <Head>
        <title>MY CAT PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Component {...pageProps} />


    </div>
  )
}

export default MyApp
