import styles from './Header.module.css'

function Header() {
  return (
    <div className={`wrapper`}>
      <h1 className={`${styles.h1} h4`}>Digital Catalog</h1>
      <span className={styles.span}>by Barbara Peric</span>
    </div>
  )
}

export default Header
