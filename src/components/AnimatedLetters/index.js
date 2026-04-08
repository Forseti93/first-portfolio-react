import './index.scss'
import React from 'react'

export default function AnimatedLetters({ letterClass, strArray, ind }) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + ind}`}>
          {char === ' ' ?  <pre> </pre> : char}
        </span>
      ))}
    </span>
  )
}
