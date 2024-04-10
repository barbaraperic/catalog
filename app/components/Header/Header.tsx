import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={`wrapper`}>
      <Link href="/" className={styles.link}>
        <h1 className={`${styles.h1} h4`}>Digital Catalog</h1>
        <span className={styles.span}>by Barbara Peric</span>
      </Link>
    </div>
  )
}

export default Header
