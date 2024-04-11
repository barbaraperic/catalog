'use client'
import styles from '@/app/components/Tabs/Tabs.module.css'
import cardStyles from '@/app/components/Cards/Cards.module.css'
import Link from 'next/link'
import { useState, useRef } from 'react'

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
  const [tabBoundingBox, setTabBoundingBox] = useState<any>(null)
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<any>(null)
  const [highlightedTab, setHighlightedTab] = useState(null)
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true)

  const highlightRef = useRef<any | null>(null)
  const wrapperRef = useRef<any | null>(null)

  const repositionHighlight = (e: any, tab: any) => {
    setTabBoundingBox(e.target.getBoundingClientRect())
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect())
    setIsHoveredFromNull(!highlightedTab)
    setHighlightedTab(tab)
  }

  const resetHighlight = () => setHighlightedTab(null)

  interface HighlightStylesType {
    transitionDuration: string
    opacity: number
    width: string
    transform: string
  }

  const highlightStyles = {} as HighlightStylesType

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms'
    highlightStyles.opacity = highlightedTab ? 1 : 0
    highlightStyles.width = `${tabBoundingBox.width}px`
    highlightStyles.transform = `translateY(${
      tabBoundingBox.top - wrapperBoundingBox.top
    }px)`
  }

  return (
    <div
      ref={wrapperRef}
      className={`${styles['tab-nav']} ${cardStyles.container}`}
      onMouseLeave={resetHighlight}
    >
      <div
        className={styles['tabs-highlight']}
        ref={highlightRef}
        style={highlightStyles}
      ></div>
      {cards.map((card) => (
        <Link key={card.value} href={`/${card.value}`}>
          <h2
            className={`${styles.tab} ${cardStyles.title}`}
            onMouseOver={(ev) => repositionHighlight(ev, card)}
          >
            {card.title}
          </h2>
          <p className={cardStyles.subtitle}>{card.subtitle}</p>
        </Link>
      ))}
    </div>
  )
}

export default Cards
