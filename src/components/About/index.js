import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Redux from '../../assets/images/redux.svg'
import Loader from 'react-loaders'

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  //to add class on letters after 4s
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1100)
  }, [])

  //#region pyramid

  //#endregion

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 's', 'i', 't', 'e']}
            ind={1}
          />
        </h1>
        <p>
          This was the first project in my plan to bridge knowledge gaps after learning front-end development. <br/><br/>
          The tech stack includes React, React Router, FontAwesome, Sass, Animate.css, and Git—alongside core JS, CSS, and HTML.<br/><br/>
          The site is deployed via GitHub Pages.
        </p>
      </div>
      <div className="skills-container">
        <div className="skills-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJsSquare} color="#efd91c" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#e44d26" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#264de4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed3f3" />
          </div>
          <div className="face5">
            <img src={Redux} alt="Redux" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#e84d31" />
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}
