'use client'

import { useState, useRef, ChangeEvent } from 'react'
import styles from '@/app/components/Tabs/Tabs.module.css'

const tabsData = [
  {
    title: 'About',
    value: 'about',
  },
  {
    title: 'Email',
    value: 'email',
  },
]

const Tabs = () => {
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
      className={styles['tab-nav']}
      ref={wrapperRef}
      onMouseLeave={resetHighlight}
    >
      <div
        className={styles['tabs-highlight']}
        ref={highlightRef}
        style={highlightStyles}
      ></div>
      {tabsData.map((tab) => (
        <a
          className={styles.tab}
          key={tab.value}
          onMouseOver={(ev) => repositionHighlight(ev, tab)}
        >
          {tab.title}
        </a>
      ))}
    </div>
  )
}

export default Tabs
