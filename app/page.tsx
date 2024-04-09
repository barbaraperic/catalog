import About from './components/About'
import Interactive from './components/Interactive'
import Notes from './components/Notes/Notes'
import Playground from './components/Playground'
import Spacer from './components/Spacer/Spacer'
import Tabs from './components/Tabs/Tabs'
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles['home-container']}>
      <div className={styles.container}>
        <Notes />
        <Playground />
        <Interactive />
      </div>
      <Spacer size="m" />
      <Tabs />
    </div>
  )
}
