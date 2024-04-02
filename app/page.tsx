import About from './components/About'
import Notes from './components/Notes'
import Projects from './components/Projects'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <About className={styles.about} />
        <Projects className={styles.project} />
        <Notes className={styles.notes} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
