import Link from "next/link"

import { HeaderData } from "./HeaderData"
import styles from "../styles/Home.module.css"
export default function Header() {
  return (
<>

<div className={styles.header}>
      <Link href={"/"} >


<img src="/assets/huluLogo.png" alt="Hulu Logo" className={styles.logo} />


      </Link>
      <nav className={styles.NavBar} >
{HeaderData.map(item => {
    return(
        <Link href={item.path}></Link>
    )
})}



      </nav>
      </div>

</>
  )
}
