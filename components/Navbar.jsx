// built in link component
import Link from 'next/link'

export default function Navbar(){
    return(
        <nav>
            <Link href='a'>
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    )
}