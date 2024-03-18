import styles from './page.module.scss'

export default function Home() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    <li>About</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
                <ul>
                    <li>Notes</li>
                    <li>Projects</li>
                </ul>
            </nav>
            <header className={styles.header}></header>
            <main></main>
            <footer></footer>
        </div>
    )
}
