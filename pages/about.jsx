import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About () {
    return(
        <div>
            <h1>About Page</h1>

            <p className={styles.extraGreen}>Testing text changes v3</p>

            <Image
                src='/vercel.svg'
                alt="Logo"
                width={300}
                height={300}
            />
            <Image
            src='https://placekitten.com/300/300'
            alt='place kitten'
            height={300}
            width={300}
            />
        </div>
    )
}