import LogoTitle from '../../assets/images/logo-s.png'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import LogoMobile from './LogoMobile'
import Loader from 'react-loaders'

export default function Home(width) {
  const [letterClass, setLetterClass] = React.useState('text-animate')

  const hiArray = ['H', 'i,']
  const imArray = ['I', "'m"]
  const nameArray = ['e', 'r', 'h', 'i', 'i', ',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  //to re-render if width change
  useEffect(() => {}, [width])

  //to add class on letters after 4s
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hiArray}
              ind={1}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={imArray}
              ind={2}
            />
            <img src={LogoTitle} alt="" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              ind={4}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              ind={9}
            />
          </h1>
          <h2 className="h2 mw-250px">
            Shopify & Frontend Expert. Transitioning to Full-Stack.
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {width.width < 1200 ? <LogoMobile /> : <Logo />}
      </div>
      <Loader type="pacman" />
    </>
  )
}
