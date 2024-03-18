'use client'

import styles from './DropdownMenu.module.scss'

export default function DropdownMenu() {
    return (
        <nav className={styles.nav}>
            <div className={styles.icon}></div>
            <div className={styles.dropdown}>
                <ul>
                    <li>Notes</li>
                    <li>Projects</li>
                </ul>
                <ul>
                    <li>About</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </nav>
    )
}
