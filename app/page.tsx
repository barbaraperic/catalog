import Interactive from './components/Interactive'
import Notes from './components/Notes/Notes'
import Playground from './components/Playground/Playground'
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Notes />
      <Playground />
      <Interactive />
    </div>
  )
}
