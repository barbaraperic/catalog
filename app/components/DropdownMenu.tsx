'use client'

import styles from './DropdownMenu.module.scss'

export default function DropdownMenu() {
    return (
        <nav>
            <div className={styles.icon}></div>
            <div className={styles.dropdown}></div>
        </nav>
    )
}
