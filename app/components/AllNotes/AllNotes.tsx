import Link from 'next/link'
import { getAllArticles } from '@/utils/getNotes'
import styles from './AllNotes.module.css'

export default async function AllNotes() {
  const articles = await getAllArticles()

  return (
    <>
      {articles.map((article) => {
        const { metadata } = article
        const title = String(metadata.title)
        const date = String(metadata.date)

        return (
          <div key={title} className={styles.container}>
            <span className={styles.date}>{date}</span>
            <Link href="" className={styles.link}>
              <div className="">
                <div className="">{title}</div>
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}
