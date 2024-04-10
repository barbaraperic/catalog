'use client'

import React from 'react'
import styles from '@/app/components/Tabs/Tabs.module.css'

const tabsData = [
  {
    title: 'Notes',
    value: 'sites',
  },
  {
    title: 'Playground',
    value: 'playground',
  },
  {
    title: 'Interactive',
    value: 'interactive',
  },
]

const Tabs = () => {
  const [tabBoundingBox, setTabBoundingBox] = React.useState(null)
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState(null)
  const [highlightedTab, setHighlightedTab] = React.useState(null)
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true)

  const highlightRef = React.useRef(null)
  const wrapperRef = React.useRef(null)

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect())
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect())
    setIsHoveredFromNull(!highlightedTab)
    setHighlightedTab(tab)
  }

  const resetHighlight = () => setHighlightedTab(null)

  const highlightStyles = {}

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
