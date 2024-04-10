import styles from '@/app/components/Cards/Cards.module.css'
import Link from 'next/link'

const cards = [
  {
    title: 'Notes',
    subtitle: 'imperfect and informal jot-downs',
    value: 'notes',
  },
  {
    title: 'Playground',
    subtitle: 'imperfect and informal jot-downs',
    value: 'playground',
  },
  {
    title: 'Interactive',
    subtitle: 'imperfect and informal jot-downs',
    value: 'interactive',
  },
]
function Cards() {
  return (
    <div>
      {cards.map((card) => (
        <Link key={card.value} href={`/${card.value}`}>
          <h2 className={styles.title}>{card.title}</h2>
          <p>{card.subtitle}</p>
        </Link>
      ))}
    </div>
  )
}

export default Cards
