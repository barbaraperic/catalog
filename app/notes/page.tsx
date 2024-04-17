import AllNotes from '../components/AllNotes'
import styles from './page.module.css'

function NotesPage() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Notes</h3>
      <AllNotes />
    </div>
  )
}

export default NotesPage
