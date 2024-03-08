import styles from './page.module.scss'

export default function Home() {
    return (
        <main>
            <header className={styles.wrapper}>
                <div className={`${styles.box} ${styles.header}`}>Header</div>
                <div className={`${styles.box} ${styles.sidebar}`}>Sidebar</div>
                <div className={`${styles.box} ${styles.content}`}>
                    Content
                    <br /> More content than we had before so this column is now
                    quite tall.
                </div>
                <div className={`${styles.box} ${styles.footer}`}>Footer</div>
            </header>
        </main>
    )
}
