import About from './components/About'
import Cards from './components/Cards/Cards'
import Spacer from './components/Spacer/Spacer'
import Tabs from './components/Tabs/Tabs'
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles['home-container']}>
      <div className={styles.container}>
        {/* <Notes />
        <Playground />
        <Interactive /> */}
        <Cards />
      </div>
      <Spacer size="m" />
      <Tabs />
    </div>
  )
}
