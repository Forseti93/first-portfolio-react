import React, { useEffect } from 'react'
import MobileContact from './MobileContact'
import ContactDesctop from './ContactDesctop'
import './index.scss'

export default function Contact(width) {
  //to re-render if width change
  useEffect(() => {}, [width])

  return <>{width.width < 950 ? <MobileContact /> : <ContactDesctop />}</>
}
