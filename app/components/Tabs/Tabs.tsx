'use client'

import { useState, useRef } from 'react'
import styles from './Tabs.module.css'

const tabsData = [
  {
    title: 'About',
    value: 'about',
  },
]

function Tabs() {
  const [tabBoundingBox, setTabBoundingBox] = useState(null)
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null)
  const [highlightedTab, setHighlightedTab] = useState(null)
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true)

  const wrapperRef = useRef(null)
  const highlightRef = useRef(null)

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect())
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect())
    setIsHoveredFromNull(!highlightedTab)
    setHighlightedTab(tab)
  }

  const resetHighlight = () => setHighlightedTab(null)

  const highlightStyles = {} as any

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms'
    highlightStyles.opacity = highlightedTab ? 1 : 0
    highlightStyles.width = `${tabBoundingBox.width}px`
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`
  }

  return (
    <div ref={wrapperRef} onMouseLeave={resetHighlight}>
      <div ref={highlightRef} className={styles['tab-highlight']}>
        {tabsData.map((tab) => (
          <a
            key={tab.value}
            onMouseOver={(ev) => repositionHighlight(ev, tab)}
            href=""
            className={styles.tab}
          ></a>
        ))}
      </div>
    </div>
  )
}

export default Tabs
